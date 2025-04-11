import React, { useState, useEffect } from "react";
import {
  Table,
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
  Card
} from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
  CheckOutlined,
  CloseOutlined,
  SearchOutlined
} from "@ant-design/icons";
import { DatePicker } from 'rsuite';
import { useNavigate } from "react-router-dom";
import { authService } from "../../services/AuthService";
import { formatDate, getCurrentDate, getDateInPastMonths } from "../../utils/dateUtils";
import usePostData from "../../services/usePostData";
import useDataTable from '../../services/useDataTable';
import { getEventColumns } from '../../services/dataTableColumns';
import 'rsuite/dist/rsuite.min.css';

const { Title } = Typography;
const { Search } = Input;

const EventsDataTable = () => {
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

  const { postData, loading: postLoading } = usePostData(process.env.REACT_APP_TICKET_MANAGER_API_URL);

  // Référence aux paramètres de recherche pour useDataTable
  const [searchParams, setSearchParams] = useState({
    mode: process.env.REACT_APP_LISTE_EVENT_MODE,
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
    process.env.REACT_APP_TICKET_MANAGER_API_URL,
    searchParams,
    "data",
    {
      fields: ["STR_EVENAME", "LG_LSTPLACEID", "DT_EVEBEGIN", "DT_EVEEND"]
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
        mode: process.env.REACT_APP_LISTE_EVENT_MODE,
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
      state: { LG_EVEID: event.LG_EVEID },
    });
  };

  // Fonction pour supprimer un événement
  const handleDeleteItem = async (record) => {
    try {
      await postData({
        mode: "deleteEvenement",
        STR_UTITOKEN: user.STR_UTITOKEN,
        LG_AGEID: user.LG_AGEID,
        LG_EVEID: record.LG_EVEID
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
        mode: "deleteEvenement", // Mode utilisé pour le changement de statut
        STR_UTITOKEN: user.STR_UTITOKEN,
        LG_AGEID: user.LG_AGEID,
        LG_EVEID: id,
        STR_EVESTATUT: newStatus
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

  // Configuration des colonnes
  const columns = getEventColumns(
    handleEdit,
    handleDeleteItem,
    handleToggleStatus,
    process.env.REACT_APP_BASE_IMAGE_URL
  );

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
              <Title level={3}>Liste des évenements</Title>
              <Breadcrumb items={[
                { title: "Evenement" },
                { title: "Liste des évènements" }
              ]} />
            </div>

            {/* Bouton d'ajout */}
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => navigate(process.env.REACT_APP_SAVE_EVENT_DATA)}
            >
              Ajouter un évenement
            </Button>
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
                    onSearch={handleSearch}
                    onChange={(e) => handleSearch(e.target.value)}
                    style={{ width: '100%', maxWidth: '450px' }}
                  />
                </Col>
              </Row>

              <Spin spinning={fetchLoading || postLoading} tip="Chargement des données...">
                <Table
                  columns={columns}
                  dataSource={allEventsData}
                  rowKey="LG_EVEID"
                  pagination={pagination}
                  onChange={handleTableChange}
                  bordered
                  size="middle"
                  scroll={{ x: 1300 }}
                  className="custom-table"
                />
              </Spin>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsDataTable;