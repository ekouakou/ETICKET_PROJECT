import React, { useState } from "react";
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
  CloseOutlined
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { authService } from "../../services/AuthService";
import usePostData from "../../services/usePostData";
import useDataTable from '../../services/useDataTable';

const { Title } = Typography;
const { Search } = Input;

const EventsDataTable = () => {
  const navigate = useNavigate();
  const [dateRange, setDateRange] = useState({
    start: "2020-01-01",
    end: "2025-08-31",
  });

  const user = authService.checkAuth(navigate);
  const { postData, loading: postLoading } = usePostData(process.env.REACT_APP_CONFIGURATION_MANAGER_API_URL);

  const {
    data: allEventsData,
    loading: fetchLoading,
    pagination,
    handleTableChange,
    handleSearch,
    refreshData
  } = useDataTable(
    process.env.REACT_APP_CONFIGURATION_MANAGER_API_URL,
    {
      mode: process.env.REACT_APP_LISTE_BANNER_MODE,
      STR_UTITOKEN: user.STR_UTITOKEN,
      DT_BEGIN: dateRange.start,
      DT_END: dateRange.end,
    },
    "data",
    {
      fields: ["STR_BANSTATUT", "STR_BANNAME", "STR_BANDESCRIPTION"]
    },
    5
  );

  // Fonction pour éditer un événement
  const handleEdit = (event) => {
    navigate(process.env.REACT_APP_SAVE_BANNER, {
      state: { LG_BANID: event.LG_BANID },
    });
  };

  // Fonction pour supprimer un événement
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
      title: "Ordre d'affiche",
      dataIndex: "STR_BANORDER",
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
      width: 100,
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
            onClick={() => handleDeleteItem(record)}
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
    return navigate(process.env.REACT_APP_SIGN_IN);
  }

  return (
    <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
      <div className="d-flex flex-column flex-column-fluid">
        <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
          <div id="kt_app_toolbar_container" className="app-container container-xxl d-flex flex-stack">
            {/* Titre et fil d'Ariane */}
            <div>
              <Title level={3}>Liste des bannières</Title>
              <Breadcrumb items={[
                { title: "Evenement" },
                { title: "Liste des bannières" }
              ]} />
            </div>

            {/* Bouton d'ajout */}
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => navigate(process.env.REACT_APP_SAVE_BANNER)}
            >
              Ajouter une bannière
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