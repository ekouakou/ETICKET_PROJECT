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

const { Title } = Typography;
const { Search } = Input;
const { Option } = Select;

const paths = JSON.parse(localStorage.getItem("appPaths"));

const BannerDataTable = () => {
  const navigate = useNavigate();

  // États pour gérer les données et l'interface
  const [events, setEvents] = useState([]);
  const [allEvents, setAllEvents] = useState([]);  // Tous les événements non filtrés
  const [loading, setLoading] = useState(true);
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

  // Fonction pour charger les données
  const loadData = async () => {
    try {
      setLoading(true);
      const data = await eventService.getEvents(navigate, dateRange);
      
      // Sauvegarder toutes les données
      setAllEvents(data);
      
      // Filtrer selon le texte de recherche
      const filteredData = filterData(data, searchText);
      
      // Pagination côté client
      const { current, pageSize } = pagination;
      const paginatedData = filteredData.slice(
        (current - 1) * pageSize, 
        current * pageSize
      );

      setEvents(paginatedData);
      setPagination({
        ...pagination,
        total: filteredData.length
      });
      setLoading(false);
    } catch (error) {
      console.error("Erreur lors du chargement des données:", error);
      notification.error({
        message: "Erreur",
        description: "Impossible de charger les données. Veuillez réessayer."
      });
      setLoading(false);
    }
  };
  
  // Fonction pour filtrer les données selon le texte de recherche
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

  // Chargement initial des données
  useEffect(() => {
    loadData();
  }, [pagination.current, pagination.pageSize, dateRange]);
  
  // Effet pour gérer les changements de recherche
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
      const success = await eventService.updateEventStatus(
        navigate,
        eventId,
        newStatus
      );

      if (success) {
        // Mise à jour locale des données
        const updatedEvents = events.map((event) =>
          event.LG_EVEID === eventId
            ? { ...event, STR_EVESTATUT: newStatus }
            : event
        );

        setEvents(updatedEvents);

        notification.success({
          message: "Succès",
          description: "Statut mis à jour avec succès"
        });
      } else {
        throw new Error("Échec de la mise à jour du statut");
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour du statut:", error);
      notification.error({
        message: "Erreur",
        description: "Impossible de mettre à jour le statut"
      });
    }
  };

  // Fonction pour éditer un événement
  const handleEdit = (event) => {
    navigate(paths.saveEventData, {
      state: { LG_EVEID: event.LG_EVEID },
    });
  };

  // Fonction pour supprimer un événement
  const handleDeleteClick = (event) => {
    setCurrentEvent(event);
    Modal.confirm({
      title: "Êtes-vous sûr de vouloir supprimer cet événement?",
      content: `L'événement "${event.STR_EVENAME}" sera supprimé définitivement.`,
      okText: "Supprimer",
      okType: "danger",
      cancelText: "Annuler",
      onOk: async () => {
        try {
          const success = await eventService.deleteEvent(navigate, event.LG_EVEID);
  
          if (success) {
            notification.success({
              message: "Succès",
              description: "Événement supprimé avec succès"
            });
            loadData(); // Rechargement des données
          } else {
            throw new Error("Échec de la suppression");
          }
        } catch (error) {
          console.error("Erreur lors de la suppression:", error);
          notification.error({
            message: "Erreur",
            description: "Impossible de supprimer l'événement"
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

  // Configuration des colonnes
  const columns = [
    {
      title: "Image",
      dataIndex: "STR_EVEPIC",
      key: "image",
      width: 70,
      render: (text) => (
        text && (
          <Image
            src={`${process.env.REACT_APP_BASE_IMAGE_URL}${text}`}
            alt="Événement"
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
      dataIndex: "STR_EVENAME",
      key: "name",
      width: 200,
    },
    {
      title: "Lieu",
      dataIndex: "LG_LSTPLACEID",
      key: "place",
      width: 150,
    },
    {
      title: "Date début",
      dataIndex: "DT_EVEBEGIN",
      key: "startDate",
      width: 100,
    },
    /*{
      title: "Date fin",
      dataIndex: "DT_EVEEND",
      key: "endDate",
      width: 100,
    },*/
    {
      title: "Heure début",
      dataIndex: "HR_EVEBEGIN",
      key: "startTime",
      width: 100,
    },
    /*{
      title: "Heure fin",
      dataIndex: "HR_EVEEND",
      key: "endTime",
      width: 100,
    },*/
    {
      title: "Catégories",
      dataIndex: "categorie",
      key: "categories",
      width: 180,
      render: (categories) => (
        categories && categories.map((cat, index) => (
          <div key={index}>
            <small>
              {cat.STR_LSTDESCRPTION}: {cat.DBL_ELIAMOUNT} GNF
            </small>
            {index < categories.length - 1 && <br />}
          </div>
        ))
      )
    },
    {
      title: "Statut",
      dataIndex: "STR_EVESTATUT",
      key: "status",
      width: 100,
      render: (status, record) => (
        <Switch
          checked={status === "enable"}
          onChange={() => handleToggleStatus(record.LG_EVEID, status)}
          checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
        />
      )
    },
    {
      title: "Actions",
      key: "actions",
      width: 150,
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
            type={record.STR_EVESTATUT === "enable" ? "text" : "primary"}
            danger={record.STR_EVESTATUT === "enable"}
            icon={record.STR_EVESTATUT === "enable" ? <CloseOutlined /> : <CheckOutlined />}
            onClick={() => handleToggleStatus(record.LG_EVEID, record.STR_EVESTATUT)}
            size="small"
          />
        </Space>
      )
    }
  ];

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
                  rowKey="LG_EVEID"
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

export default BannerDataTable;