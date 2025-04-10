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
  Pagination
} from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
  CheckOutlined,
  CloseOutlined,
  SendOutlined,
  SearchOutlined,
  EyeOutlined
} from "@ant-design/icons";
import { DatePicker } from 'rsuite';
import { useNavigate } from "react-router-dom";
import { authService } from "../../services/AuthService";
import { formatDate, getCurrentDate, getDateInPastMonths } from "../../utils/dateUtils";
import usePostData from "../../services/usePostData";
import useDataTable from '../../services/useDataTable';
import { getTicketColumns } from '../../services/dataTableColumns';
import 'rsuite/dist/rsuite.min.css';


const { Title } = Typography;
const { Search } = Input;
const { Meta } = Card;

const ListeEventBanner = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("userConnectedData");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [startDate, setStartDate] = useState(getDateInPastMonths(new Date(), 2));
  const [endDate, setEndDate] = useState(getCurrentDate());
  const [searchText, setSearchText] = useState("");

  // Check authentication on component mount
  useEffect(() => {
    const currentUser = authService.checkAuth(navigate);
    if (!currentUser) {
      navigate(process.env.REACT_APP_SIGN_IN);
      return;
    }
    setUser(currentUser);
  }, [navigate]);

  const { postData, loading: postLoading } = usePostData(process.env.REACT_APP_CONFIGURATION_MANAGER_API_URL);

  // Référence aux paramètres de recherche pour useDataTable
  const [searchParams, setSearchParams] = useState({
    mode: process.env.REACT_APP_LISTE_BANNER_MODE,
    STR_UTITOKEN: user?.STR_UTITOKEN,
    LG_AGEID: user?.LG_AGEID,
    DT_BEGIN: formatDate(startDate),
    DT_END: formatDate(endDate),
  });

  const {
    data: allEventsData,
    loading: fetchLoading,
    pagination,
    handleTableChange,
    handleSearch,
    refreshData
  } = useDataTable(
    process.env.REACT_APP_CONFIGURATION_MANAGER_API_URL,
    searchParams,
    "data",
    {
      fields: ["STR_BANSTATUT", "STR_BANNAME", "STR_BANDESCRIPTION"]
    },
    10
  );

  // Mettre à jour les paramètres quand l'utilisateur est chargé
  useEffect(() => {
    if (user) {
      setSearchParams(prev => ({
        ...prev,
        STR_UTITOKEN: user.STR_UTITOKEN,
        LG_AGEID: user.LG_AGEID,
      }));
    }
  }, [user]);

  // Fonction pour gérer le changement de la date de début
  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  // Fonction pour gérer le changement de la date de fin
  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  // Fonction pour rechercher avec les paramètres actuels (texte et dates)
  const handleSearchWithFilters = () => {
    if (user) {
      const newParams = {
        mode: process.env.REACT_APP_LISTE_BANNER_MODE,
        STR_UTITOKEN: user.STR_UTITOKEN,
        LG_AGEID: user.LG_AGEID,
        DT_BEGIN: formatDate(startDate),
        DT_END: formatDate(endDate),
      };

      if (searchText) {
        newParams.search = searchText;
      }

      // Mettre à jour les paramètres de recherche
      setSearchParams(newParams);

      // Forcer le rechargement des données
      setTimeout(() => {
        refreshData();
      }, 100);
    }
  };

  // Fonction pour éditer un événement
  const handleEdit = (event) => {
    navigate(process.env.REACT_APP_SAVE_EVENT_DATA, {
      state: { LG_BANID: event.LG_BANID },
    });

  };


  // Fonction pour supprimer un événement
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
        description: `Ticket envoyé avec succès.`
      });

      // Rafraîchir les données après la suppression
      refreshData();
    } catch (error) {
      notification.error({
        message: "Erreur",
        description: `Impossible de supprimer l'événement.`
      });
    }
  };

  const handleDeleteItem = async (record) => {
      try {
        await postData({
          mode: "updateBanniereStatut",
          STR_UTITOKEN: user.STR_UTITOKEN,
          LG_BANID: record.LG_BANID
        });
  
        notification.success({
          message: "Succès",
          description: `L'événement a été supprimé avec succès.`
        });
  
        // Rafraîchir les données après la suppression
        refreshData();
      } catch (error) {
        notification.error({
          message: "Erreur",
          description: `Impossible de supprimer l'événement.`
        });
      }
    };

  // Fonction pour changer le statut d'un événement
  const handleToggleStatus = async (id, currentStatus) => {
      try {
        const newStatus = currentStatus === "enable" ? "disable" : "enable";
        await postData({
          mode: "updateBanniereStatut", // Mode utilisé pour le changement de statut
          STR_UTITOKEN: user.STR_UTITOKEN,
          LG_BANID: id,
          STR_BANSTATUT: newStatus
        });
  
        notification.success({
          message: "Succès",
          description: `Le statut de l'événement a été ${newStatus === "enable" ? "activé" : "désactivé"} avec succès.`
        });
  
        // Rafraîchir les données après la modification
        refreshData();
      } catch (error) {
        notification.error({
          message: "Erreur",
          description: `Impossible de modifier le statut de l'événement.`
        });
      }
    };

  // Fonction pour gérer la pagination manuelle
  const handlePaginationChange = (page, pageSize) => {
    handleTableChange({ current: page, pageSize }, null);
  };

  // StatusTag pour remplacer la colonne de statut
  const StatusTag = ({ status }) => {
    const color = status === "enable" ? "#52c41a" : "#f5222d";
    const text = status === "enable" ? "Actif" : "Inactif";
    return (
      <div style={{
        backgroundColor: color,
        color: 'white',
        padding: '0 10px',
        borderRadius: '4px',
        display: 'inline-block'
      }}>
        {text}
      </div>
    );
  };

  if (!user) {
    return navigate(process.env.REACT_APP_SIGN_IN);
  }

  return (
    <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
      <div className="d-flex flex-column flex-column-fluid">
        <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
          <div id="kt_app_toolbar_container" className="app-container container-xxl d-flex flex-stack">
            {/* Titre et fil d'Ariane */}
            <div>
              <Title level={3}>Liste des tickets</Title>
              <Breadcrumb items={[
                { title: "Historique des tickets" },
                { title: "Liste des tickets" }
              ]} />
            </div>

            {/* Bouton d'ajout */}
            {/* <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => navigate(process.env.REACT_APP_SAVE_EVENT_DATA)}
            >
              Ajouter un évenement
            </Button> */}
          </div>
        </div>

        <div id="kt_app_content" className="app-content flex-column-fluid">
          <div id="kt_app_content_container" className="app-container container-xxl">
            <Card className="shadow-sm">
              <Row gutter={[16, 16]} className="mb-4">
                {/* Zone de filtres alignée à gauche */}
                <Col xs={24} md={12} lg={14}>
                  <Space size="middle" style={{ width: '100%' }}>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <DatePicker
                        value={startDate}
                        onChange={handleStartDateChange}
                        format="dd/MM/yyyy"
                        style={{ minWidth: '160px' }}
                        placeholder="Date début"
                      />
                      <DatePicker
                        value={endDate}
                        onChange={handleEndDateChange}
                        format="dd/MM/yyyy"
                        style={{ minWidth: '160px' }}
                        placeholder="Date fin"
                      />
                      <Button
                        type="primary"
                        icon={<SearchOutlined />}
                        onClick={handleSearchWithFilters}
                      >
                        Filtrer
                      </Button>
                    </div>
                  </Space>
                </Col>

                {/* Zone de recherche alignée à droite */}
                <Col xs={24} md={12} lg={10} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Search
                    placeholder="Rechercher par nom, lieu ou date..."
                    allowClear
                    enterButton="Rechercher"
                    size="middle"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onSearch={handleSearch}
                    style={{ width: '100%', maxWidth: '450px' }}
                  />
                </Col>
              </Row>

              <Spin spinning={fetchLoading || postLoading} tip="Chargement des données...">
                {/* Affichage en grille de cartes */}
                <Row gutter={[16, 16]} className="mt-4">
                  {allEventsData && allEventsData.map(event => (
                    <Col xs={24} sm={12} md={8} lg={6} key={event.LG_BANID} className="mb-4">
                      <Card
                        hoverable
                        cover={
                          <div style={{ height: '100px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            {event.STR_BANPATH ? (
                              // <TicketCard event={event} />
                              <Image
                                alt={event.STR_EVENAME}
                                src={`${process.env.REACT_APP_BASE_IMAGE_URL}${event.STR_BANPATH}`}
                                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                preview={true}
                              />
                            ) : (
                              <div style={{ width: '100%', height: '100%', background: '#f0f2f5', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <span>Pas d'image</span>
                              </div>
                            )}
                          </div>
                        }
                        actions={[
                          // <SendOutlined key="share" onClick={() => handleShare(event)} />,
                          // <EyeOutlined key="view" onClick={() => navigate(`/view-ticket/${event.LG_BANID}`)} />,
                          // <span key="send" onClick={() => handleSend(event)}>
                          //   <SendOutlined style={{ marginRight: '5px' }} />
                          //   Envoyer
                          // </span>,
                          <EyeOutlined key="view" onClick={() => navigate(`/view-ticket/${event.LG_BANID}`)} />,
                          <EditOutlined key="edit" onClick={() => handleEdit(event)} />,
                          <DeleteOutlined key="delete" onClick={() => handleDeleteItem(event)} />,
                          <Switch
                            checked={event.STR_BANSTATUT === "enable"}
                            onChange={() => handleToggleStatus(event.LG_BANID, event.STR_BANSTATUT)}
                            checkedChildren={<CheckOutlined />}
                            unCheckedChildren={<CloseOutlined />}
                            size="small"
                          />
                          // <Switch
                          //   key="status"
                          //   checkedChildren={<CheckOutlined />}
                          //   unCheckedChildren={<CloseOutlined />}
                          //   checked={event.STR_EVESTATUT === "enable"}
                          //   onChange={() => handleToggleStatus(event.LG_BANID, event.STR_EVESTATUT)}
                          //   size="small"
                          // />
                        ]}
                      >
                        <Meta
                          title={event.STR_EVENAME}
                          description={
                            <div>
                              <p className="mb-1 mt-0"><strong>Lieu:</strong> {event.LG_LSTPLACEID || 'Non défini'}</p>
                              <p className="mb-1 mt-0"><strong>Date:</strong> {event.DT_TCIVALIDATED} </p>
                              <p className="mb-1 mt-0"><strong>Desciption:</strong> {event.STR_BANDESCRIPTION} </p>

                              <StatusTag status={event.STR_BANSTATUT} />
                            </div>
                          }
                        />
                      </Card>
                    </Col>
                  ))}
                </Row>

                {/* Pagination */}
                {allEventsData && allEventsData.length > 0 && (
                  <div style={{ marginTop: 20, textAlign: 'center' }}>
                    <Pagination
                      current={pagination.current}
                      pageSize={pagination.pageSize}
                      total={pagination.total}
                      onChange={handlePaginationChange}
                      showSizeChanger
                      showTotal={(total, range) => `${range[0]}-${range[1]} sur ${total} éléments`}
                    />
                  </div>
                )}

                {/* Message si aucune donnée */}
                {allEventsData && allEventsData.length === 0 && (
                  <div style={{ textAlign: 'center', padding: '40px 0' }}>
                    <p>Aucun événement trouvé</p>
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

export default ListeEventBanner;