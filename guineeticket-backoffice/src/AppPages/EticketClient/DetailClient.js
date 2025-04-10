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
import { getTicketColumns } from '../../services/dataTableColumns';
import 'rsuite/dist/rsuite.min.css';
import PageTitle from "../PageTitle";
import { useLocation } from "react-router-dom";



const { Title } = Typography;
const { Search } = Input;

const DetailClient = () => {
  const navigate = useNavigate();
  const location = useLocation();
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
    mode: process.env.REACT_APP_LISTE_TICKET_CLIENT_MODE,
    STR_UTITOKEN: user?.STR_UTITOKEN,
    LG_AGEID: user?.LG_AGEID,
    LG_CLIID: location.state.LG_CLIID,
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
        mode: process.env.REACT_APP_LISTE_TICKET_MODE,
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
  const columns = getTicketColumns(
    handleEdit,
    handleDeleteItem,
    handleToggleStatus,
    process.env.REACT_APP_BASE_IMAGE_URL
  );

  if (!user) {
    return navigate(process.env.REACT_APP_SIGN_IN);
  }

  const breadcrumbs = [
    { text: "Client", link: "/" },
    { isBullet: true },
    { text: "Détail du client" },
  ];

  return (
    <>
      <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
        <div className="d-flex flex-column flex-column-fluid">
          <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
            <div
              id="kt_app_toolbar_container"
              className="app-container container-xxl d-flex flex-stack"
            >
              <PageTitle heading="Suivi du client" breadcrumbs={breadcrumbs} />
              {/* <ActionButton text="Liste bannière" link={process.env.REACT_APP_SAVE_BANNER} className="btn-primary" /> */}
            </div>
          </div>
          <div id="kt_app_content" className="app-content flex-column-fluid">
            <div
              id="kt_app_content_container"
              className="app-container container-xxl"
            >
              <div className="card card-flush mb-9" id="kt_user_profile_panel">
                <div
                  className="card-header rounded-top bgi-size-cover h-200px"
                  style={{
                    backgroundPosition: "100% 50%",
                    backgroundImage:
                      'url("../assets/media/misc/profile-head-bg.jpg")',
                  }}
                ></div>
                <div className="card-body mt-n19">
                  <div className="m-0">
                    <div className="d-flex flex-stack align-items-end pb-4 mt-n19">
                      <div className="symbol symbol-125px symbol-lg-150px symbol-fixed position-relative mt-n3">
                        <img
                          src="../assets/media/avatars/300-3.jpg"
                          alt="image"
                          className="border border-white border-4"
                          style={{ borderRadius: 20 }}
                        />
                        <div className="position-absolute translate-middle bottom-0 start-100 ms-n1 mb-9 bg-success rounded-circle h-15px w-15px" />
                      </div>
                      <div className="me-0">
                        <button
                          className="btn btn-icon btn-sm btn-active-color-primary  justify-content-end pt-3"
                          data-kt-menu-trigger="click"
                          data-kt-menu-placement="bottom-end"
                        >
                          <i className="fonticon-settings fs-2" />
                        </button>
                        {/*begin::Menu 3*/}
                        <div
                          className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3"
                          data-kt-menu="true"
                        >
                          {/*begin::Heading*/}
                          <div className="menu-item px-3">
                            <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                              Payments
                            </div>
                          </div>
                          {/*end::Heading*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">
                              Create Invoice
                            </a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link flex-stack px-3">
                              Create Payment
                              <span
                                className="ms-2"
                                data-bs-toggle="tooltip"
                                aria-label="Specify a target name for future usage and reference"
                                data-bs-original-title="Specify a target name for future usage and reference"
                                data-kt-initialized={1}
                              >
                                <i className="ki-duotone ki-information fs-6">
                                  <span className="path1" />
                                  <span className="path2" />
                                  <span className="path3" />
                                </i>{" "}
                              </span>
                            </a>
                          </div>
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">
                              Generate Bill
                            </a>
                          </div>
                          <div
                            className="menu-item px-3"
                            data-kt-menu-trigger="hover"
                            data-kt-menu-placement="right-end"
                          >
                            <a href="#" className="menu-link px-3">
                              <span className="menu-title">Subscription</span>
                              <span className="menu-arrow" />
                            </a>
                            <div className="menu-sub menu-sub-dropdown w-175px py-4">
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3">
                                  Plans
                                </a>
                              </div>
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3">
                                  Billing
                                </a>
                              </div>
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3">
                                  Statements
                                </a>
                              </div>
                              <div className="separator my-2" />
                              <div className="menu-item px-3">
                                <div className="menu-content px-3">
                                  {/*begin::Switch*/}
                                  <label className="form-check form-switch form-check-custom form-check-solid">
                                    {/*begin::Input*/}
                                    <input
                                      className="form-check-input w-30px h-20px"
                                      type="checkbox"
                                      defaultValue={1}
                                      defaultChecked="checked"
                                      name="notifications"
                                    />
                                    {/*end::Input*/}
                                    {/*end::Label*/}
                                    <span className="form-check-label text-muted fs-6">
                                      Recuring
                                    </span>
                                    {/*end::Label*/}
                                  </label>
                                  {/*end::Switch*/}
                                </div>
                              </div>
                              {/*end::Menu item*/}
                            </div>
                            {/*end::Menu sub*/}
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3 my-1">
                            <a href="#" className="menu-link px-3">
                              Settings
                            </a>
                          </div>
                          {/*end::Menu item*/}
                        </div>
                        {/*end::Menu 3*/}
                      </div>
                      {/*end::Toolbar*/}
                    </div>
                    {/*end::Pic*/}
                    {/*begin::Info*/}
                    <div className="d-flex flex-stack flex-wrap align-items-end">
                      {/*begin::User*/}
                      <div className="d-flex flex-column">
                        {/*begin::Name*/}
                        <div className="d-flex align-items-center mb-2">
                          <a
                            href="#"
                            className="text-gray-800 text-hover-primary fs-2 fw-bolder me-1"
                          >
                            {/* {clientDetails?.STR_CLIFIRSTNAME} */}
                          </a>
                          <a
                            href="#"
                            className=""
                            data-bs-toggle="tooltip"
                            data-bs-placement="right"
                            aria-label="Account is verified"
                            data-bs-original-title="Account is verified"
                            data-kt-initialized={1}
                          >
                            <i className="ki-duotone ki-verify fs-1 text-primary">
                              <span className="path1" />
                              <span className="path2" />
                            </i>{" "}
                          </a>
                        </div>
                        {/*end::Name*/}
                        {/*begin::Text*/}
                        <span className="fw-bold text-gray-600 fs-6 mb-2 d-block">
                          Design is like a fart. If you have to force it, it’s
                          probably shit.
                        </span>
                        {/*end::Text*/}
                        {/*begin::Info*/}
                        <div className="d-flex align-items-center flex-wrap fw-semibold fs-7 pe-2">
                          <a
                            href="#"
                            className="d-flex align-items-center text-gray-500 text-hover-primary"
                          >
                            UI/UX Design
                          </a>
                          <span className="bullet bullet-dot h-5px w-5px bg-gray-500 mx-3" />
                          <a
                            href="#"
                            className="d-flex align-items-center text-gray-500 text-hover-primary"
                          >
                            Austin, TX
                          </a>
                          <span className="bullet bullet-dot h-5px w-5px bg-gray-500 mx-3" />
                          <a
                            href="#"
                            className="text-gray-500 text-hover-primary"
                          >
                            3,450 Followers
                          </a>
                        </div>
                        {/*end::Info*/}
                      </div>
                      {/*end::User*/}
                      {/*begin::Actions*/}
                      <div className="d-flex">
                        <a
                          href="#"
                          className="btn btn-sm btn-light me-3"
                          id="kt_drawer_chat_toggle"
                        >
                          Send Message
                        </a>
                        <button
                          className="btn btn-sm btn-primary"
                          id="kt_user_follow_button"
                        >
                          <i className="ki-duotone ki-check fs-2 d-none" />
                          {/*begin::Indicator label*/}
                          <span className="indicator-label">Follow</span>
                          {/*end::Indicator label*/}
                          {/*begin::Indicator progress*/}
                          <span className="indicator-progress">
                            Please wait...{" "}
                            <span className="spinner-border spinner-border-sm align-middle ms-2" />
                          </span>
                          {/*end::Indicator progress*/}{" "}
                        </button>
                      </div>
                      {/*end::Actions*/}
                    </div>
                    {/*end::Info*/}
                  </div>
                  {/*end::Details*/}
                </div>
              </div>

              <div className="row g-xxl-12 align-items-stretch mb-5">
                <div className="col-xxl-4">
                  <div className="card card-xxl-stretch mb-5 mb-xl-10 h-100">
                    <div className="card-header card-header-stretch">
                      <div className="card-title">
                        <h3 className="m-0 text-gray-900">Statistiques</h3>
                      </div>
                    </div>
                    <div className="card-body pt-7 pb-0 px-0">
                      <div className="tab-content">
                        <div
                          className="tab-pane fade active show"
                          id="kt_security_summary_tab_pane_hours"
                          role="tabpanel"
                        >
                          <div className="row p-0 mb-5 px-9">
                            <div className="col">
                              <div className="border border-dashed border-gray-300 text-center min-w-125px rounded pt-4 pb-2 my-3">
                                <span className="fs-4 fw-semibold text-success d-block">
                                  Total tickets achetés
                                </span>
                                <span
                                  className="fs-2hx fw-bold text-gray-900 counted"
                                  data-kt-countup="true"
                                  data-kt-countup-value={allEventsData.length}
                                  data-kt-initialized={1}
                                >
                                  {allEventsData.length}
                                </span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="border border-dashed border-gray-300 text-center min-w-125px rounded pt-4 pb-2 my-3">
                                <span className="fs-4 fw-semibold text-primary d-block">
                                  Nobre d'évènement
                                </span>
                                <span
                                  className="fs-2hx fw-bold text-gray-900 counted"
                                  data-kt-countup="true"
                                  data-kt-countup-value={1}
                                  data-kt-initialized={1}
                                >
                                  1
                                </span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="border border-dashed border-gray-300 text-center min-w-125px rounded pt-4 pb-2 my-3">
                                <span className="fs-4 fw-semibold text-danger d-block">
                                  Nombre ticket scannés
                                </span>
                                <span
                                  className="fs-2hx fw-bold text-gray-900 counted"
                                  data-kt-countup="true"
                                  data-kt-countup-value={1}
                                  data-kt-initialized={1}
                                >
                                  1
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-8">
                  <div className="card card-xxl-stretch-50 mb-5 mb-xl-10 h-100">
                    <div className="card-body pt-5">
                      <div className="card-header">
                        <div className="card-title">
                          <h3 className="text-gray-800">Evolution</h3>
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
                                rowKey="LG_CLIID"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailClient;
