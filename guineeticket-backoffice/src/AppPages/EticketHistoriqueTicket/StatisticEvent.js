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
  Header,
} from "rsuite";
import { useNavigate } from "react-router-dom";
import { authService } from "../../services/AuthService";
import {
  formatDate,
  getCurrentDate,
  getDateInPastMonths,
} from "../../utils/dateUtils";
import { loadStores } from "../../services/apiUtils";
import usePostData from "../../services/usePostData";
import TicketCard from "./TicketCard";
import SearchIcon from "@rsuite/icons/Search";
import SendIcon from "@rsuite/icons/Send";
import moment from "moment";
import { urlBaseImage, baseUrl } from "../../services/urlUtils";

import {
  convertDateFormat_YMDHM,
  getDateInFutureMonths,
} from "../../utils/dateUtils";

import "rsuite/dist/rsuite.min.css";

import "moment/locale/fr";
moment.locale("fr");

// Constantes
const DATE_FORMAT = "YYYY-MM-DD";
const TIME_HORIZON = getDateInFutureMonths(new Date(), 3);
const DEFAULT_LIST_LENGTH = 4;
const DAYS_TO_DISPLAY = 10;
const DAYS_BEFORE_TODAY = 1;
const DAY_NAME_LENGTH = 3; // Nombre de caractères du nom du jour à afficher

/**
 * Vérifie si un évènement est terminé en comparant sa date et heure de fin à la date actuelle
 * @param {string} endDate - Date de fin au format DD/MM/YYYY
 * @param {string} endTime - Heure de fin au format HH:MM
 * @returns {boolean} - True si l'évènement est terminé, sinon false
 */
const isEventEnded = (endDate, endTime) => {
  if (!endDate) return false;
  
  const now = new Date();
  
  // Extraction des composants de la date (format DD/MM/YYYY)
  const [day, month, year] = endDate.split('/').map(Number);
  
  // Extraction des composants de l'heure (format HH:MM)
  let hours = 23, minutes = 59; // Valeurs par défaut
  if (endTime) {
    const timeParts = endTime.split(':');
    hours = parseInt(timeParts[0] || 23, 10);
    minutes = parseInt(timeParts[1] || 59, 10);
  }
  
  // Création d'une date valide (les mois commencent à 0 en JavaScript)
  const eventEndDateTime = new Date(year, month - 1, day, hours, minutes);
  
  // Vérification de la validité de la date (déboggage si nécessaire)
  if (isNaN(eventEndDateTime.getTime())) {
    console.warn("Date invalide créée avec:", {endDate, endTime, result: eventEndDateTime});
    return false;
  }
  
  // Comparer avec la date actuelle
  return now > eventEndDateTime;
};

const ListeTicket = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("userConnectedData");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // États pour la pagination et le filtrage
  const [startDate, setStartDate] = useState(
    getDateInPastMonths(new Date(), 2)
  );
  const [endDate, setEndDate] = useState(getCurrentDate());
  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [agencesList, setAgencesList] = useState([]);
  const [selectedAgence, setSelectedAgence] = useState(null);

  // États pour la pagination
  const [activePage, setActivePage] = useState(1);
  const [displayLength, setDisplayLength] = useState(8);
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
      mode: process.env.REACT_APP_LISTE_EVENT_MODE,
      STR_UTITOKEN: user.STR_UTITOKEN,
      DT_BEGIN: "2023-01-01",
      length: DEFAULT_LIST_LENGTH,
      statistique: true,
      DT_END: convertDateFormat_YMDHM(TIME_HORIZON + " 23:59"),
      //   mode: process.env.REACT_APP_LISTE_TICKET_MODE,
      //   STR_UTITOKEN: user?.STR_UTITOKEN,
      //   LG_AGEID: selectedAgence || user?.LG_AGEID,
      //   DT_BEGIN: formatDate(startDate),
      //   DT_END: formatDate(endDate),
      //   page: activePage,
      //   pageSize: displayLength,
      //   length : displayLength

      //   mode: listTicket
      //     STR_UTITOKEN: Wbm9CZS2UhPWTPiNaCax
      //     LG_AGEID: 1
      //     DT_BEGIN: 2025-03-03
      //     DT_END: 2025-05-03
      //     page: 1
      //     pageSize: 12
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
    { label: "Tous", value: "all" },
    { label: "Actif", value: "enable" },
    { label: "Inactif", value: "disable" },
  ];

  // Les options pour la taille de la page
  const lengthOptions = [
    { label: "12", value: 12 },
    { label: "24", value: 24 },
    { label: "48", value: 48 },
    { label: "96", value: 96 },
  ];

  return (
    <Container className="app-main">
      <Header className="py-3 py-lg-6">
        <Container>
          <div>
            <h3>Statistique évènement</h3>
            <Breadcrumb>
              <Breadcrumb.Item>Historique des evenements</Breadcrumb.Item>
              <Breadcrumb.Item>Liste des evenements</Breadcrumb.Item>
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
                    <Button
                      appearance="primary"
                      onClick={handleSearchWithFilters}
                    >
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
              <div style={{ textAlign: "center", padding: "40px" }}>
                <Loader size="lg" content="Chargement des données..." />
              </div>
            ) : (
              <div>
                {ticketData && ticketData.length > 0 ? (
                  <>
                    <div
                      className="row"
                      justify="start"
                      style={{ marginTop: 20 }}
                      wrap
                    >
                      {ticketData.map((ticket) => (
                        <div
                          className="col-lg-6 col-md-6 col-sm-12 mb-5 "
                          key={ticket.LG_TICID}
                          style={{ padding: 10 }}
                        >
                          <div className="row">
                            {/*begin::Col*/}
                            <div className="col-sm-6 mb-10 mb-sm-0">
                              {/*begin::Image*/}
                              <div
                                className="bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-400px min-h-sm-100 h-100"
                                style={{
                                  backgroundSize: "100% 100%",
                                  backgroundImage: `url(${
                                    urlBaseImage + ticket.STR_EVEPIC
                                  })`,
                                }}
                              ></div>
                            </div>
                            <div className="col-sm-6">
                              <div className="d-flex flex-column h-100">
                                <div className="mb-7">
                                  <div className="d-flex flex-stack mb-6">
                                    <div className=" me-5">
                                      <span className="text-gray-500 fs-7 fw-bold me-2 d-block lh-1 pb-1">
                                        Titre de l'évènement
                                      </span>
                                      <span className="text-gray-800 fs-6 fw-bold">
                                        {ticket.STR_EVENAME}
                                      </span>
                                    </div>
                                    {/*end::Title*/}
                                    {isEventEnded(ticket.DT_EVEEND, ticket.HR_EVEEND) ? (
                                      <span className="badge flex-shrink-0 align-self-center py-3 px-4 fs-7 badge-light-dark">
                                        Terminé
                                      </span>
                                    ) : (
                                      <span
                                        className={`badge flex-shrink-0 align-self-center py-3 px-4 fs-7 ${
                                          ticket.STR_EVESTATUT === "enable"
                                            ? "badge-light-success"
                                            : "badge-light-danger"
                                        }`}
                                      >
                                        {ticket.STR_EVESTATUT === "enable"
                                          ? "Actif"
                                          : "Inactif"}
                                      </span>
                                    )}
                                  </div>
                                  <div className="d-flex align-items-center flex-wrap d-grid gap-2">
                                    <div className="d-flex align-items-center me-5 me-xl-13">
                                      <div className="symbol symbol-30px symbol-circle me-3">
                                        <img
                                          src={urlBaseImage + ticket.STR_EVEPIC}
                                          className=""
                                          alt=""
                                        />
                                      </div>
                                      <div className="m-0">
                                        <span className="fw-semibold text-gray-500 d-block fs-8">
                                          Annonceur
                                        </span>
                                        <a
                                          href="#"
                                          className="fw-bold text-gray-800 text-hover-primary fs-7"
                                        >
                                          {ticket.STR_EVEANNONCEUR}
                                        </a>
                                      </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                      <div className="symbol symbol-30px symbol-circle me-3">
                                        <span className="symbol-label bg-success">
                                          <i className="ki-duotone ki-abstract-41 fs-5 text-white">
                                            <span className="path1" />
                                            <span className="path2" />
                                          </i>{" "}
                                        </span>
                                      </div>
                                      <div className="m-0">
                                        <span className="fw-semibold text-gray-500 d-block fs-8">
                                          Lieu
                                        </span>
                                        <span className="fw-bold text-gray-800 fs-7">
                                          {ticket.LG_LSTPLACEID}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="mb-6">
                                  <EventCategories
                                    categories={ticket.categorie}
                                  />
                                  <div className="d-flex">
                                    {ticket.DT_EVEBEGIN && (
                                      <div className="border border-gray-300 border-dashed rounded min-w-100px w-100 py-2 px-4 me-6 mb-3">
                                        <span className="fs-6 text-gray-700 fw-bold">
                                          {ticket.DT_EVEBEGIN}{" "}
                                          {ticket.HR_EVEBEGIN}
                                        </span>
                                        <div className="fw-semibold text-gray-500">
                                          Date de début
                                        </div>
                                      </div>
                                    )}
                                    {ticket.DT_EVEEND && (
                                      <div className="border border-gray-300 border-dashed rounded min-w-100px w-100 py-2 px-4 mb-3">
                                        <span className="fs-6 text-gray-700 fw-bold">
                                          {ticket.DT_EVEEND} {ticket.HR_EVEEND}
                                        </span>
                                        <div className="fw-semibold text-gray-500">
                                          Date de fin
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <div style={{ textAlign: "center", padding: "40px 0" }}>
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
                        style={{ width: 80, margin: "0 10px" }}
                      />
                      par page | {(activePage - 1) * displayLength + 1} -{" "}
                      {Math.min(activePage * displayLength, totalRecords)} sur{" "}
                      {totalRecords} éléments
                    </div>
                  </FlexboxGrid.Item>

                  <FlexboxGrid.Item colspan={12}>
                    <div style={{ textAlign: "right" }}>
                      <Pagination
                        prev
                        next
                        first
                        last
                        ellipsis
                        boundaryLinks
                        maxButtons={5}
                        size="md"
                        layout={["total", "-", "pager", "skip"]}
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

/**
 * Composant des catégories d'événements
 * @param {Array} categories - Catégories pour un événement
 */
const EventCategories = ({ categories }) => (
  <div className="row mt-4">
    {categories.map((cat, index) => (
      <div
        className=" col-lg-6 border border-gray-300 border-dashed rounded py-2 px-4  mb-3"
        key={index}
      >
        <span className="fs-6 text-gray-700 fw-bold">
          {cat.DBL_ELIAMOUNT} {process.env.REACT_APP_DEVISE}
        </span>
        <div className="fw-semibold text-gray-500 mt-1">
          {cat.STR_LSTDESCRPTION}
        </div>
        <span className="fw-semibold text-gray-700 d-block text-theme mt-1">
          <img className="me-1" width="15" src="assets/media/armchair.png" />
          <span className="fw-bold text-danger">
            {cat.INT_TICNUMBERREST}
          </span>{" "}
          Disp.
        </span>
        <span className="fw-semibold text-gray-700 d-block text-theme mt-1">
          <img className="me-1" width="15" src="assets/media/armchair.png" />
          <span className="fw-bold text-success">
            {cat.INT_TICNUMBERSELL}
          </span>{" "}
          Achetés.
        </span>
      </div>
    ))}
  </div>
);

export default ListeTicket;