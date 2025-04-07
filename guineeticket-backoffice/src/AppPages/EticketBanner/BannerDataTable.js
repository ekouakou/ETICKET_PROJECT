import React, { useState, useEffect } from "react";
import {
  Table,
  Pagination,
  Button,
  Space,
  Modal,
  Form,
  DatePicker,
  Spin,
  Switch,
  Image,
  notification,
  Breadcrumb,
  Typography,
  Tag,
  Input,
  Select,
  Row,
  Col,
  Card
} from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
  CheckOutlined,
  CloseOutlined
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import eventService from "../../services/EventService";
import { authService } from "../../services/AuthService";
import useFetchData from "../../services/useFetchData";
import usePostData from "../../services/usePostData";



const { Title } = Typography;
const { Search } = Input;
const { Option } = Select;

const paths = JSON.parse(localStorage.getItem("appPaths"));

const EventsDataTable = () => {
  const navigate = useNavigate();



  // États pour gérer les données et l'interface
  const [events, setEvents] = useState([]);
  const [allEvents, setAllEvents] = useState([]);  // Tous les Bannières non filtrés
  // const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
    pageSizeOptions: [10, 20, 50, 100],
    showSizeChanger: true
  });
  const [currentEvent, setCurrentEvent] = useState(null);
  const [dateRange, setDateRange] = useState({
    start: "2020-01-01",
    end: "2025-08-31",
  });

  const [searchText, setSearchText] = useState('');
  const user = authService.checkAuth(navigate);

  // Récupération des données avec useFetchData
  const {
    data: allEventsData,
    error,
    // loading
  } = useFetchData(process.env.REACT_APP_CONFIGURATION_MANAGER_API_URL, {
    mode: process.env.REACT_APP_LISTE_BANNER_MODE,
    STR_UTITOKEN: user.STR_UTITOKEN,
    LG_AGEID: user.LG_AGEID,
    DT_BEGIN: dateRange.start,
    DT_END: dateRange.end,
  },
    "data"
  );

  const { postData, loading, error: apiError } = usePostData(process.env.REACT_APP_CONFIGURATION_MANAGER_API_URL);


  // Fonction pour filtrer les données selon le texte de recherche (inchangée)
  const filterData = (data, searchText) => {
    if (!searchText) return data;

    const searchLower = searchText.toLowerCase();
    return data.filter(event => {
      return (
        (event.STR_EVENAME && event.STR_EVENAME.toLowerCase().includes(searchLower)) ||
        (event.LG_LSTPLACEID && event.LG_LSTPLACEID.toString().toLowerCase().includes(searchLower)) ||
        (event.DT_EVEBEGIN && event.DT_EVEBEGIN.toLowerCase().includes(searchLower)) ||
        (event.DT_EVEEND && event.DT_EVEEND.toLowerCase().includes(searchLower))
      );
    });
  };

  // Effet pour mettre à jour allEvents quand les données sont récupérées
  useEffect(() => {
    if (allEventsData) {
      setAllEvents(allEventsData);

      // Filtrer selon le texte de recherche
      const filteredData = filterData(allEventsData, searchText);

      // Mettre à jour la pagination
      setPagination({
        ...pagination,
        total: filteredData.length
      });

      // Appliquer la pagination
      const { current, pageSize } = pagination;
      const paginatedData = filteredData.slice(
        (current - 1) * pageSize,
        current * pageSize
      );

      setEvents(paginatedData);
    }

    if (error) {
      console.error("Erreur lors du chargement des données:", error);
      notification.error({
        message: "Erreur",
        description: "Impossible de charger les données. Veuillez réessayer."
      });
    }
  }, [allEventsData, error, pagination.current, pagination.pageSize]);

  // Effet pour gérer les changements de recherche (presque inchangé)
  useEffect(() => {
    if (allEvents.length > 0) {
      const filteredData = filterData(allEvents, searchText);

      // Réinitialiser à la première page lors d'une nouvelle recherche
      const newPagination = {
        ...pagination,
        current: 1,
        total: filteredData.length
      };

      setPagination(newPagination);

      // Appliquer la pagination aux résultats filtrés
      const paginatedData = filteredData.slice(
        0,
        pagination.pageSize
      );

      setEvents(paginatedData);
    }
  }, [searchText]);

  // Fonction pour gérer le changement de statut
  const handleToggleStatus = async (eventId, currentStatus) => {
    try {
      const newStatus = currentStatus === "enable" ? "disable" : "enable";
      
      // Utilisation de la même fonction postData comme pour handleDeleteClick
      const userData = await postData({
        mode: "updateBanniereStatut",
        STR_BANSTATUT: newStatus,
        STR_UTITOKEN: user.STR_UTITOKEN,
        LG_BANID: eventId,
      });
  
      if (userData?.code_statut === "1") {
        // Mise à jour locale des données
        const updatedEvents = events.map((event) =>
          event.LG_BANID === eventId
            ? { ...event, STR_BANSTATUT: newStatus }
            : event
        );
  
        setEvents(updatedEvents);
  
        notification.success({
          message: "Succès",
          description: "Statut mis à jour avec succès"
        });
      } else {
        notification.error({
          message: "Erreur",
          description: "Échec de la mise à jour du statut"
        });
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour du statut:", error);
      notification.error({
        message: "Erreur",
        description: "Impossible de mettre à jour le statut"
      });
    }
  };

  // Fonction pour éditer un Bannière
  const handleEdit = (event) => {
    navigate(paths.saveEventData, {
      state: { LG_BANID: event.LG_BANID },
    });
  };

  const handleDeleteClick = (event) => {
    setCurrentEvent(event);
    Modal.confirm({
      title: "Êtes-vous sûr de vouloir supprimer cet Bannière?",
      content: `La Bannière "${event.STR_BANNAME}" sera supprimé définitivement.`,
      okText: "Supprimer",
      okType: "danger",
      cancelText: "Annuler",
      onOk: async () => {
        try {
          const userData = await postData({
            mode: "updateBanniereStatut",
            STR_BANSTATUT: "delete",
            STR_UTITOKEN: user.STR_UTITOKEN,
            LG_BANID: event.LG_BANID,
          },);
          if (userData?.code_statut === "1") {
            alert("OK")
          } else {
            alert("echec")
          }
        } catch (error) {
          console.error("Erreur lors de la suppression:", error);
          notification.error({
            message: "Erreur",
            description: "Impossible de supprimer la bannière"
          });
        }
      }
    });
  };

  // Gestion de la pagination
  const handleTableChange = (pagination) => {
    setPagination(pagination);
  };

  // Fonction pour gérer la recherche
  const handleSearch = (value) => {
    setSearchText(value);
  };


  // DT_BANBEGIN
  // DT_BANCREATED
  // DT_BANEND
  // LG_AGEID
  // LG_BANID
  // LG_EVEID
  // STR_BANDESCRIPTION
  // STR_BANNAME
  // STR_BANPATH
  // STR_BANSTATUT
  // str_ACTION


  // Configuration des colonnes
  const columns = [
    {
      title: "Image",
      dataIndex: "STR_BANPATH",
      key: "image",
      width: 70,
      render: (text) => (
        text && (
          <Image
            src={`${process.env.REACT_APP_BASE_IMAGE_URL}${text}`}
            alt="Bannière"
            width={50}
            height={50}
            style={{ objectFit: "cover" }}
            preview={false}
          />
        )
      )
    },
    {
      title: "Nom",
      dataIndex: "STR_BANNAME",
      key: "name",
      width: 200,
    },
    {
      title: "Date début",
      dataIndex: "DT_BANBEGIN",
      key: "startDate",
      width: 100,
    },
    {
      title: "Date fin",
      dataIndex: "DT_BANEND",
      key: "startTime",
      width: 100,
    },
    {
      title: "Statut",
      dataIndex: "STR_BANSTATUT",
      key: "status",
      width: 100,
      render: (status, record) => (
        <Switch
          checked={status === "enable"}
          onChange={() => handleToggleStatus(record.LG_BANID, status)}
          checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
        />
      )
    },
    {
      title: "Actions",
      key: "actions",
      width: 70,
      fixed: "right",
      render: (_, record) => (
        <Space size="small">
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
            size="small"
          />
          <Button
            type="text"
            danger
            icon={<DeleteOutlined />}
            onClick={() => handleDeleteClick(record)}
            size="small"
          />
          <Button
            type={record.STR_BANSTATUT === "enable" ? "text" : "primary"}
            danger={record.STR_BANSTATUT === "enable"}
            icon={record.STR_BANSTATUT === "enable" ? <CloseOutlined /> : <CheckOutlined />}
            onClick={() => handleToggleStatus(record.LG_BANID, record.STR_BANSTATUT)}
            size="small"
          />
        </Space>
      )
    }
  ];

  if (!user) {
    // Pour React Router v6
    return navigate("/login");
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
            <Card>
              <Row gutter={[16, 16]} className="mb-4">
                <Col xs={24} md={12}>
                  <Search
                    placeholder="Rechercher par nom, lieu ou date..."
                    allowClear
                    enterButton="Rechercher"
                    size="middle"
                    onSearch={handleSearch}
                    onChange={(e) => handleSearch(e.target.value)}
                  />
                </Col>
              </Row>

              <Spin spinning={loading} tip="Chargement des données...">
                <Table
                  columns={columns}
                  dataSource={events}
                  rowKey="LG_BANID"
                  pagination={pagination}
                  onChange={handleTableChange}
                  bordered
                  size="middle"
                  scroll={{ x: 1300 }}
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