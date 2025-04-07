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
import { createStatusManager } from '../../services/statusUtils';
import usePostData from "../../services/usePostData";
import useDataTable from '../../services/useDataTable';




const { Title } = Typography;
const { Search } = Input;
const { Option } = Select;

const paths = JSON.parse(localStorage.getItem("appPaths"));


const EventsDataTable = () => {
  const navigate = useNavigate();


  // États pour gérer les données et l'interface
  const [events, setEvents] = useState([]);
  const [allEvents, setAllEvents] = useState([]);  // Tous les événements non filtrés
  // const [loading, setLoading] = useState(true);
  // const [pagination, setPagination] = useState({
  //   current: 1,
  //   pageSize: 10,
  //   total: 0,
  //   pageSizeOptions: [10, 20, 50, 100],
  //   showSizeChanger: true
  // });
  const [currentEvent, setCurrentEvent] = useState(null);
  const [dateRange, setDateRange] = useState({
    start: "2020-01-01",
    end: "2025-08-31",
  });
  const [searchText, setSearchText] = useState('');

  const user = authService.checkAuth(navigate);
  const { postData, loading: postLoading, error: postError } = usePostData(process.env.REACT_APP_TICKET_MANAGER_API_URL);
  const { toggleStatus, deleteItem } = createStatusManager({
    setItems: setEvents,
    items: events,
    user,
    idField: 'LG_EVEID',  // Changez pour correspondre au champ réel
    statusField: 'STR_EVESTATUT',  // Changez pour correspondre au champ réel
    mode: 'updateEventStatus',
    entityName: 'Événement',
    postData
  });


  // Fonction pour éditer un événement
  const handleEdit = (event) => {
    navigate(paths.saveEventData, {
      state: { LG_EVEID: event.LG_EVEID },
    });
  };

const {
  data: allEventsData,
  loading: fetchLoading,
  pagination,
  handleTableChange,
  handleSearch
} = useDataTable(
  process.env.REACT_APP_TICKET_MANAGER_API_URL,
  {
    mode: process.env.REACT_APP_LISTE_EVENT_MODE,
    STR_UTITOKEN: user.STR_UTITOKEN,
    DT_BEGIN: dateRange.start,
    DT_END: dateRange.end,
  },
  "data",
  {
    fields: ["STR_EVENAME", "LG_LSTPLACEID", "DT_EVEBEGIN", "DT_EVEEND"]
  },
  10 // pageSize par défaut
);


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
      title: "Libellé evènement",
      dataIndex: "STR_EVENAME",
      key: "name",
      width: 200,
    },
    {
      title: "Lieu Evènement",
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
    {
      title: "H. Début",
      dataIndex: "HR_EVEBEGIN",
      key: "startTime",
      width: 100,
    },
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
          onChange={() => toggleStatus(record.LG_EVEID, status)}
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
        <Space>
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
            size="small"
          />
          <Button
            type="danger"
            icon={<DeleteOutlined />}
            onClick={() => deleteItem(record)}
            size="small"
          />
          <Button
            type={record.STR_EVESTATUT === "enable" ? "text" : "primary"}
            danger={record.STR_EVESTATUT === "enable"}
            icon={record.STR_EVESTATUT === "enable" ? <CloseOutlined /> : <CheckOutlined />}
            onClick={() => toggleStatus(record.LG_EVEID, record.STR_EVESTATUT)}
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