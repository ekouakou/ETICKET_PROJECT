import React, { useState, useEffect } from "react";
import {
  Button,
  Space,
  Spin,
  Switch,
  Image,
  notification,
  Breadcrumb,
  Typography,
  Input,
  Row,
  Col,
  Card,
  Pagination,
  Select,
} from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
  CheckOutlined,
  CloseOutlined,
  SendOutlined,
  SearchOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { DatePicker } from "rsuite";
import { useNavigate } from "react-router-dom";
import { authService } from "../../services/AuthService";
import {
  formatDate,
  getCurrentDate,
  getDateInPastMonths,
} from "../../utils/dateUtils";
import {
  loadStores,
  fetchCategorieData,
  useLoadStores,
} from "../../services/apiUtils";
import usePostData from "../../services/usePostData";
import useDataTable from "../../services/useDataTable";
import { getTicketColumns } from "../../services/dataTableColumns";
import "rsuite/dist/rsuite.min.css";
import TicketCard from "./TicketCard";
import { SelectPicker, VStack } from "rsuite";
import { Form } from "react-bootstrap";

const { Title } = Typography;
const { Search } = Input;
const { Meta } = Card;
const { Option } = Select;

const ListeTicket = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("userConnectedData");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [startDate, setStartDate] = useState(
    getDateInPastMonths(new Date(), 2)
  );
  const [endDate, setEndDate] = useState(getCurrentDate());
  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [agencesList, setAgencesList] = useState([]);
  const [selectedAgence, setSelectedAgence] = useState(null);
  const [agence, setAgenceData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
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
      page: currentPage,
      pageSize: pageSize,
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
      notification.error({
        message: "Erreur",
        description: "Impossible de charger les tickets.",
      });
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
  }, [user, currentPage, pageSize]);

  //LISTE DES TYPE D'ACTIVITE
  useEffect(() => {
    loadStores(
      { mode: "listAgence" },
      process.env.REACT_APP_CONFIGURATION_MANAGER_API_URL,
      setAgencesList,
      { valueKey: "LG_AGEID", labelKey: "STR_AGENAME" }
    );
  }, []);

  // Fonction pour gérer le changement de la date de début
  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  // Fonction pour gérer le changement de la date de fin
  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  // Fonction pour gérer le changement du filtre de statut
  const handleStatusChange = (value) => {
    setStatusFilter(value);
  };

  // Fonction pour gérer le changement du filtre d'agence
  const handleAgenceChange = (value) => {
    setSelectedAgence(value);
  };

  // Gérer la recherche avec filtres
  const handleSearchWithFilters = () => {
    setCurrentPage(1); // Réinitialise à la première page lors du filtrage
    loadTicketData();
  };

  // Gérer la recherche par texte
  const handleSearch = (value) => {
    setSearchText(value);
    setCurrentPage(1); // Réinitialise à la première page lors de la recherche
    loadTicketData();
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

      notification.success({
        message: "Succès",
        description: `Ticket envoyé avec succès.`,
      });

      loadTicketData();
    } catch (error) {
      notification.error({
        message: "Erreur",
        description: `Impossible d'envoyer le ticket.`,
      });
    }
  };

  // Gérer le changement de pagination
  const handlePaginationChange = (page, pageSizeParam) => {
    setCurrentPage(page);
    if (pageSizeParam !== undefined && pageSizeParam !== pageSize) {
      setPageSize(pageSizeParam);
    }
    // Les données seront rechargées via l'effet qui surveille currentPage et pageSize
  };

  if (!user) {
    return navigate(process.env.REACT_APP_SIGN_IN);
  }

  return (
    <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
      <div className="d-flex flex-column flex-column-fluid">
        <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
          <div
            id="kt_app_toolbar_container"
            className="app-container container-xxl d-flex flex-stack"
          >
            {/* Titre et fil d'Ariane */}
            <div>
              <Title level={3}>Liste des tickets</Title>
              <Breadcrumb
                items={[
                  { title: "Historique des tickets" },
                  { title: "Liste des tickets" },
                ]}
              />
            </div>
          </div>
        </div>

        <div id="kt_app_content" className="app-content flex-column-fluid">
          <div
            id="kt_app_content_container"
            className="app-container container-xxl"
          >
            <div className="row">
              <div className="col-lg-2">
                <div className="form-group mb-5">
                  <label className=" fs-6 form-label fw-bold text-gray-900">
                    Date de début
                  </label>
                  <Form.Group controlId="formDate" className="w-100">
                    <DatePicker
                      value={startDate}
                      onChange={handleStartDateChange}
                      format="dd/MM/yyyy"
                      size="lg"
                      style={{ minWidth: "140px" }}
                      placeholder="Date début"
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="form-group mb-5">
                  <label className=" fs-6 form-label fw-bold text-gray-900">
                    Date de fin
                  </label>
                  <Form.Group controlId="formDate" className="w-100">
                    <DatePicker
                      value={endDate}
                      onChange={handleEndDateChange}
                      format="dd/MM/yyyy"
                      style={{ minWidth: "140px" }}
                      placeholder="Date fin"
                      size="lg"
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="form-group mb-5">
                  <label className=" fs-6 form-label fw-bold text-gray-900">
                    Annonceur
                  </label>
                  <Form.Group controlId="formDate" className="w-100">
                    <SelectPicker
                      data={agencesList}
                      style={{ width: "100%" }}
                      size="lg"
                      onChange={(value) => handleAgenceChange(value)}
                      value={selectedAgence || null}
                      placeholder="Sélectionnez un type d'activité"
                      className="basic-multi-select"
                    />
                  </Form.Group>
                </div>
              </div>

              <div className="col-lg-2">
                <div className="form-group mb-5">
                  <label className=" fs-6 form-label fw-bold text-gray-900">
                    Statut
                  </label>
                  <Form.Group controlId="formDate" className="w-100">
                    <Select
                      placeholder="Statut"
                      value={statusFilter}
                      size="lg"
                      onChange={handleStatusChange}
                      style={{ minWidth: "120px" }}
                    >
                      <Option value="all">Tous</Option>
                      <Option value="enable">Actif</Option>
                      <Option value="disable">Inactif</Option>
                    </Select>
                  </Form.Group>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="form-group mb-5">
                  <label className=" fs-6 form-label fw-bold text-gray-900">
                    Rechercher
                  </label>
                  <Form.Group controlId="formDate" className="w-100">
                    <Button
                      type="primary"
                      icon={<SearchOutlined />}
                      onClick={handleSearchWithFilters}
                    >
                      Filtrer
                    </Button>
                  </Form.Group>
                </div>
              </div>
            </div>
            <Card className="shadow-sm">
              <Row gutter={[16, 16]} className="mb-4">
                {/* Zone de recherche alignée à droite */}
                <Col
                  xs={24}
                  lg={8}
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <Search
                    placeholder="Rechercher par nom, lieu ou date..."
                    allowClear
                    enterButton="Rechercher"
                    size="middle"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onSearch={handleSearch}
                    style={{ width: "100%", maxWidth: "450px" }}
                  />
                </Col>
              </Row>

              <Spin
                spinning={isLoading || postLoading}
                tip="Chargement des données..."
              >
                {/* Affichage en grille de cartes */}
                <Row gutter={[16, 16]} className="mt-4">
                  {ticketData &&
                    ticketData.map((ticket) => (
                      <Col
                        xs={24}
                        sm={12}
                        md={8}
                        lg={6}
                        key={ticket.LG_TICID}
                        className="mb-4"
                      >
                        <Card
                          hoverable
                          cover={
                            <div
                              style={{
                                height: "100px",
                                overflow: "hidden",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              {ticket.STR_EVEPIC ? (
                                <TicketCard event={ticket} />
                              ) : (
                                <div
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    background: "#f0f2f5",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                  }}
                                >
                                  <span>Pas d'image</span>
                                </div>
                              )}
                            </div>
                          }
                          actions={[
                            <span key="send" onClick={() => handleSend(ticket)}>
                              <SendOutlined style={{ marginRight: "5px" }} />
                              Envoyer
                            </span>,
                          ]}
                        >
                          <Meta
                            title={ticket.STR_EVENAME}
                            description={
                              <div>
                                <p className="mb-1 mt-0">
                                  <strong>Lieu:</strong>{" "}
                                  {ticket.LG_LSTPLACEID || "Non défini"}
                                </p>
                                <p className="mb-1 mt-0">
                                  <strong>Date:</strong> {ticket.DT_TCIVALIDATED}{" "}
                                </p>
                                <p className="mb-1 mt-0">
                                  <strong>Téléphone:</strong>{" "}
                                  {ticket.STR_TICPHONE}{" "}
                                </p>
                              </div>
                            }
                          />
                        </Card>
                      </Col>
                    ))}
                </Row>

                {/* Pagination améliorée */}
                {ticketData && ticketData.length > 0 && (
                  <div style={{ marginTop: 20, textAlign: "center" }}>
                    <Pagination
                      current={currentPage}
                      pageSize={pageSize}
                      total={totalRecords}
                      onChange={handlePaginationChange}
                      onShowSizeChange={handlePaginationChange}
                      showSizeChanger
                      pageSizeOptions={['10', '20', '50', '100']}
                      showTotal={(total, range) =>
                        `${range[0]}-${range[1]} sur ${total} éléments`
                      }
                    />
                  </div>
                )}

                {/* Message si aucune donnée */}
                {(!ticketData || ticketData.length === 0) && !isLoading && (
                  <div style={{ textAlign: "center", padding: "40px 0" }}>
                    <p>Aucun ticket trouvé</p>
                  </div>
                )}
              </Spin>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListeTicket;