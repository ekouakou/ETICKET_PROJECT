import React, { useContext, useEffect, useState, useCallback } from "react";
import Switch from "react-switch";
import { toast, ToastContainer } from "react-toastify";
import { crudData } from "../../services/apiService";
import { useLocation } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import "react-toastify/dist/ReactToastify.css";
import { authService } from "../../services/AuthService";
import PageTitle from "../PageTitle";
import { useNavigate } from "react-router-dom";
import GenericDataTable from "../GenericDataTable";
import ClientService from "../../services/ClientService";
import useLoader from "../../utils/useLoader";
import SkeletonTable from "../Skeleton/SkeletonTable";

const DetailClient = () => {

  const [clientDetails, setClientDetails] = useState(null);
  const [previewPic, setPreviewPic] = useState(null);
  const [userData, setUserData] = useState(null);
  const location = useLocation();
  const [utilisateurId, setutilisateurId] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const endPoint = process.env.REACT_APP_CONFIGURATION_MANAGER_API_URL;
  const [ticketData, setTicketData] = useState([]);
  const isLoading = useLoader(ticketData);

  useEffect(() => {
    const data = authService.checkAuth(navigate);
    if (data) {
      setUserData(data);
    }
  }, [navigate]);

  useEffect(() => {

    if (location.state && location.state.LG_CLIID) {
      setutilisateurId(location.state.LG_CLIID);

      crudData(
        { mode: "getClient", LG_CLIID: location.state.LG_CLIID },
        endPoint
      )
        .then((response) => {
          setClientDetails(response.data);
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération des données:", error);
      });
    }
  }, [location.state, userData]);

  const breadcrumbs = [
    { text: "Client", link: "/" },
    { isBullet: true },
    { text: "Détail du client" },
  ];

  const fetchEvents = async () => {
    try {
      const events = await ClientService.getClientTickets(navigate, location.state.LG_CLIID);
      setTicketData(events);
    } catch (error) {
      console.error("Erreur lors du chargement des tickets:", error);
      toast.error("Erreur lors du chargement des tickets");
    }
  };

  // Nouvel effet pour charger les tickets
  useEffect(() => {
    if (utilisateurId) {
      // On s'assure d'avoir l'ID de l'utilisateur
      fetchEvents();
    }
  }, [utilisateurId]); // La fonction se déclenche quand l'ID change

  const handleApiCall = async ({ mode, id, ticketName }) => {
    let success = false;
    if (mode === "sendTicket") {
      success = await ClientService.sendTicket(navigate, id, ticketName);
    }

    if (success) {
      toast.success("Opération réussie", {
        position: "top-center",
        autoClose: 3000,
      });
      fetchEvents(); // Rechargement des tickets après une opération
    }
  };

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
                            {clientDetails?.STR_CLIFIRSTNAME}
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
                <div className="col-xxl-6">
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
                                  data-kt-countup-value={ticketData.length}
                                  data-kt-initialized={1}
                                >
                                  {ticketData.length}
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
                <div className="col-xxl-6">
                  <div className="card card-xxl-stretch-50 mb-5 mb-xl-10 h-100">
                    <div className="card-body pt-5">
                      <div className="card-header">
                        <div className="card-title">
                          <h3 className="text-gray-800">Evolution</h3>
                        </div>
                      </div>
                      <div className="row g-xxl-3">
                        <GenericDataTable
                          data={ticketData}
                          columns={ClientService.getTicketsColumns()}
                          tableId="eventTable"
                          onSendTicket={true}
                          deleteConfirmMessage={(id) =>
                            `Êtes-vous sûr de vouloir envoyé lme ticket à cet utilisateur?`
                          }
                          toggleStatusConfirmMessage={(id, STR_TICNAME) =>
                            `Êtes-vous sûr de vouloir 
                            } cet utilisateur (${id}) ?`
                          }
                          handleApiCall={handleApiCall}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row gx-5 gx-xl-10">
                <div className="col-xxl-12 mb-5 mb-xl-10">
                  <div className="card card-flush h-xl-100">
                    <div className="card-body pt-6">
                      <>

                      </>
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
