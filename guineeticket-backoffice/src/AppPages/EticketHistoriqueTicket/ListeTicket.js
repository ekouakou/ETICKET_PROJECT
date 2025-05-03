import React, { useState, useEffect } from "react";
import {
  Button,
  DatePicker,
  SelectPicker,
  Form,
  Pagination,
  Loader,
  Panel,
  FlexboxGrid,
  Input,
  InputGroup,
  Stack,
  Breadcrumb,
  Container,
  Content,
  Header
} from "rsuite";
import { useNavigate } from "react-router-dom";
import { authService } from "../../services/AuthService";
import {
  formatDate,
  getCurrentDate,
  getDateInPastMonths,
} from "../../utils/dateUtils";
import {
  loadStores,
} from "../../services/apiUtils";
import usePostData from "../../services/usePostData";
import TicketCard from "./TicketCard";
import SearchIcon from '@rsuite/icons/Search';
import SendIcon from '@rsuite/icons/Send';

import "rsuite/dist/rsuite.min.css";

const ListeTicket = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("userConnectedData");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  
  // États pour la pagination et le filtrage
  const [startDate, setStartDate] = useState(getDateInPastMonths(new Date(), 2));
  const [endDate, setEndDate] = useState(getCurrentDate());
  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [agencesList, setAgencesList] = useState([]);
  const [selectedAgence, setSelectedAgence] = useState(null);
  
  // États pour la pagination
  const [activePage, setActivePage] = useState(1);
  const [displayLength, setDisplayLength] = useState(12);
  const [totalRecords, setTotalRecords] = useState(0);
  
  const [ticketData, setTicketData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Check authentication on component mount
  useEffect(() => {
    const currentUser = authService.checkAuth(navigate);
    if (!currentUser) {
      navigate(process.env.REACT_APP_SIGN_IN);
      return;
    }
    setUser(currentUser);
  }, [navigate]);

  const { postData, loading: postLoading } = usePostData(
    process.env.REACT_APP_TICKET_MANAGER_API_URL
  );

  // Construit les paramètres de recherche
  const buildSearchParams = () => {
    const params = {
      mode: process.env.REACT_APP_LISTE_TICKET_MODE,
      STR_UTITOKEN: user?.STR_UTITOKEN,
      LG_AGEID: selectedAgence || user?.LG_AGEID,
      DT_BEGIN: formatDate(startDate),
      DT_END: formatDate(endDate),
      page: activePage,
      pageSize: displayLength,
    };

    if (searchText) {
      params.search = searchText;
    }

    if (statusFilter !== "all") {
      params.STR_EVESTATUT = statusFilter;
    }

    return params;
  };

  // Fonction pour charger les données des tickets
  const loadTicketData = async () => {
    if (!user?.STR_UTITOKEN) return;

    setIsLoading(true);
    try {
      const params = buildSearchParams();
      const response = await postData(params);
      
      if (response && response.data) {
        setTicketData(response.data);
        setTotalRecords(response.recordsTotal || 0);
      } else {
        setTicketData([]);
        setTotalRecords(0);
      }
    } catch (error) {
      console.error("Error loading ticket data:", error);
      // Notification avec React Suite à la place d'Ant Design
      alert("Erreur: Impossible de charger les tickets.");
      setTicketData([]);
      setTotalRecords(0);
    } finally {
      setIsLoading(false);
    }
  };

  // Charger les données initiales et quand les paramètres changent
  useEffect(() => {
    if (user?.STR_UTITOKEN) {
      loadTicketData();
    }
  }, [user, activePage, displayLength]);

  // LISTE DES AGENCES
  useEffect(() => {
    loadStores(
      { mode: "listAgence" },
      process.env.REACT_APP_CONFIGURATION_MANAGER_API_URL,
      setAgencesList,
      { valueKey: "LG_AGEID", labelKey: "STR_AGENAME" }
    );
  }, []);

  // Gérer la recherche avec filtres
  const handleSearchWithFilters = () => {
    setActivePage(1); // Réinitialise à la première page lors du filtrage
    loadTicketData();
  };

  // Gérer la pagination
  const handleChangePage = (page) => {
    setActivePage(page);
  };

  const handleChangeLength = (length) => {
    setDisplayLength(length);
    setActivePage(1); // Reset to first page when changing display length
  };

  // Fonction pour envoyer un ticket
  const handleSend = async (record) => {
    try {
      await postData({
        mode: "sendTicket",
        STR_UTITOKEN: user.STR_UTITOKEN,
        LG_AGEID: user.LG_AGEID,
        STR_TICNAME: record.STR_TICNAME,
        LG_TICID: record.LG_TICID,
      });

      alert("Succès: Ticket envoyé avec succès.");
      loadTicketData();
    } catch (error) {
      alert("Erreur: Impossible d'envoyer le ticket.");
    }
  };

  if (!user) {
    return navigate(process.env.REACT_APP_SIGN_IN);
  }

  // Les options pour le statut
  const statusOptions = [
    { label: 'Tous', value: 'all' },
    { label: 'Actif', value: 'enable' },
    { label: 'Inactif', value: 'disable' }
  ];

  // Les options pour la taille de la page
  const lengthOptions = [
    { label: '12', value: 12 },
    { label: '24', value: 24 },
    { label: '48', value: 48 },
    { label: '96', value: 96 }
  ];

  return (
    <Container className="app-main">
      <Header className="py-3 py-lg-6">
        <Container>
          <div>
            <h3>Liste des tickets</h3>
            <Breadcrumb>
              <Breadcrumb.Item>Historique des tickets</Breadcrumb.Item>
              <Breadcrumb.Item>Liste des tickets</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </Container>
      </Header>

      <Content className="app-content">
        <Container>
          <Panel shaded>
            <Form fluid>
              <FlexboxGrid justify="space-between" align="middle">
                <FlexboxGrid.Item colspan={5}>
                  <Form.Group>
                    <Form.ControlLabel>Date de début</Form.ControlLabel>
                    <DatePicker 
                      format="dd/MM/yyyy" 
                      value={startDate} 
                      onChange={setStartDate} 
                      block 
                    />
                  </Form.Group>
                </FlexboxGrid.Item>
                
                <FlexboxGrid.Item colspan={5}>
                  <Form.Group>
                    <Form.ControlLabel>Date de fin</Form.ControlLabel>
                    <DatePicker 
                      format="dd/MM/yyyy" 
                      value={endDate} 
                      onChange={setEndDate} 
                      block 
                    />
                  </Form.Group>
                </FlexboxGrid.Item>
                
                <FlexboxGrid.Item colspan={5}>
                  <Form.Group>
                    <Form.ControlLabel>Annonceur</Form.ControlLabel>
                    <SelectPicker
                      data={agencesList}
                      block
                      value={selectedAgence}
                      onChange={setSelectedAgence}
                      placeholder="Sélectionnez un annonceur"
                    />
                  </Form.Group>
                </FlexboxGrid.Item>
                
                <FlexboxGrid.Item colspan={5}>
                  <Form.Group>
                    <Form.ControlLabel>Statut</Form.ControlLabel>
                    <SelectPicker
                      data={statusOptions}
                      block
                      value={statusFilter}
                      onChange={setStatusFilter}
                      placeholder="Statut"
                    />
                  </Form.Group>
                </FlexboxGrid.Item>
                
                <FlexboxGrid.Item colspan={4}>
                  <Form.Group>
                    <Form.ControlLabel>Rechercher</Form.ControlLabel>
                    <Button appearance="primary" onClick={handleSearchWithFilters}>
                      <SearchIcon /> Filtrer
                    </Button>
                  </Form.Group>
                </FlexboxGrid.Item>
              </FlexboxGrid>
              
              <FlexboxGrid justify="end" style={{ marginTop: 20 }}>
                <FlexboxGrid.Item colspan={12}>
                  <InputGroup inside>
                    <Input 
                      placeholder="Rechercher par nom, lieu ou date..." 
                      value={searchText}
                      onChange={(value) => setSearchText(value)}
                      onPressEnter={handleSearchWithFilters}
                    />
                    <InputGroup.Button onClick={handleSearchWithFilters}>
                      <SearchIcon />
                    </InputGroup.Button>
                  </InputGroup>
                </FlexboxGrid.Item>
              </FlexboxGrid>
            </Form>

            {isLoading || postLoading ? (
              <div style={{ textAlign: 'center', padding: '40px' }}>
                <Loader size="lg" content="Chargement des données..." />
              </div>
            ) : (
              <div>
                {ticketData && ticketData.length > 0 ? (
                  <div className="row" justify="start" style={{ marginTop: 20 }} wrap>
                    {ticketData.map((ticket) => (
                      <div className="col-lg-3 col-md-4 col-sm-6" colspan={24} md={12} lg={8} xl={6} key={ticket.LG_TICID} style={{ padding: 10 }}>
                        <Panel shaded bordered bodyFill style={{ height: '100%' }}>
                          <div style={{ height: 100, overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            {ticket.STR_EVEPIC ? (
                              <TicketCard event={ticket} />
                            ) : (
                              <div style={{ width: '100%', height: '100%', background: '#f0f2f5', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <span>Pas d'image</span>
                              </div>
                            )}
                          </div>
                          
                          <Panel header={ticket.STR_EVENAME}>
                            <p><strong>Lieu:</strong> {ticket.LG_LSTPLACEID || "Non défini"}</p>
                            <p><strong>Date:</strong> {ticket.DT_TCIVALIDATED}</p>
                            <p><strong>Téléphone:</strong> {ticket.STR_TICPHONE}</p>
                            
                            <div style={{ textAlign: 'center', marginTop: 10 }}>
                              <Button appearance="default" onClick={() => handleSend(ticket)}>
                                <SendIcon className="me-3" /> Envoyer
                              </Button>
                            </div>
                          </Panel>
                        </Panel>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div style={{ textAlign: 'center', padding: '40px 0' }}>
                    <p>Aucun ticket trouvé</p>
                  </div>
                )}
              </div>
            )}
            
            {/* Pagination avec React Suite */}
            {ticketData && ticketData.length > 0 && (
              <div style={{ marginTop: 20 }}>
                <FlexboxGrid justify="space-between" align="middle">
                  <FlexboxGrid.Item colspan={12}>
                    <div>
                      Afficher 
                      <SelectPicker 
                        data={lengthOptions}
                        searchable={false}
                        cleanable={false}
                        value={displayLength}
                        onChange={handleChangeLength}
                        style={{ width: 80, margin: '0 10px' }}
                      />
                      par page | {(activePage - 1) * displayLength + 1} - {Math.min(activePage * displayLength, totalRecords)} sur {totalRecords} éléments
                    </div>
                  </FlexboxGrid.Item>
                  
                  <FlexboxGrid.Item colspan={12}>
                    <div style={{ textAlign: 'right' }}>
                      <Pagination
                        prev
                        next
                        first
                        last
                        ellipsis
                        boundaryLinks
                        maxButtons={5}
                        size="md"
                        layout={['total', '-', 'pager', 'skip']}
                        total={totalRecords}
                        limitOptions={[12, 24, 48, 96]}
                        limit={displayLength}
                        activePage={activePage}
                        onChangePage={handleChangePage}
                        onChangeLimit={handleChangeLength}
                      />
                    </div>
                  </FlexboxGrid.Item>
                </FlexboxGrid>
              </div>
            )}
          </Panel>
        </Container>
      </Content>
    </Container>
  );
};

export default ListeTicket;