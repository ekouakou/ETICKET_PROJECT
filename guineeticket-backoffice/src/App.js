import React, { useEffect, useState } from "react";

import Menu from "./AppPages/Home/Menu";
import HeaderWrapper from "./AppPages/Home/HeaderWrappers.js";

import NotFound from "./AppPages/Home/NotFound";
import EventsDataTable from "./AppPages/EticketEvent/EventsDataTable";
import BannerDataTable from "./AppPages/EticketBanner/BannerDataTable.js";


import SaveBanner from "./AppPages/EticketBanner/SaveBanner";

import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import SignIn from "./AppPages/login/SignIn";
import SaveEvent from "./AppPages/EticketEvent/SaveEvent";
import SaveTypeActivite from "./AppPages/EticketParameter/SaveTypeActivite";
import SaveCategoriePlace from "./AppPages/EticketParameter/SaveCategoriePlace";

import ListeTypeActivite from "./AppPages/EticketParameter/ListeTypeActivite";
import ListeCategoriePlace from "./AppPages/EticketParameter/ListeCategoriePlace";


// import EventListPage from './AppPages/EticketEvent/ListeEventData.js';
import SaveBannerPage from "./AppPages/EticketBanner/SaveBanner.js";
import ListeClient from './AppPages/EticketClient/ListeClient';
import DetailClient from './AppPages/EticketClient/DetailClient';
// import TicketListPage from './pageComponent/ticket/TicketListPage';
// import TableauDeBord from './pageComponent/dashboard/TableauDeBord';
import DashboardAnnonceur from "./AppPages/EticketDashboard/DashboardAnnonceur.js";
// import SaveEventData from './AppPages/EticketEvent/SaveEventData';

import SaveUser from "./AppPages/EticketUtilisateur/SaveUser";
import ListeUser from "./AppPages/EticketUtilisateur/ListeUser";
import ListeTicket from "./AppPages/EticketHistoriqueTicket/ListeTicket";
import StatisticEvent from "./AppPages/EticketHistoriqueTicket/StatisticEvent";

import ListeProfil from "./AppPages/EticketProfil/ListeProfil";
import SaveProfil from "./AppPages/EticketProfil/SaveProfil";






// import NotFound from './pageComponent/NotFound';

// import SidebarMenu from './pageComponent/AppHeader/SidebarMenu';
// import AppHeader from './pageComponent/AppHeader/AppHeader';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { statistic } from "antd/es/theme/internal.js";

const AppContent = () => {
  const [isRoot, setIsRoot] = useState(false);
  const location = useLocation();
  const [margin, setMargin] = useState("ms-0");

  useEffect(() => {
    setIsRoot(location.pathname === "/");
  }, [location]);

  const paths = {
    signIn: process.env.REACT_APP_SIGN_IN,
    saveEvent: process.env.REACT_APP_SAVE_EVENT,
    saveTypeActivite: process.env.REACT_APP_SAVE_TYPE_ACTIVITE,
    saveCategoriePlace: process.env.REACT_APP_SAVE_CATEGORIE_PLACE,

    listTypeActivite: process.env.REACT_APP_LISTE_TYPE_ACTIVITE,
    listCategoriePlace: process.env.REACT_APP_LISTE_CATEGORIE_PLACE,

    eventDetails: process.env.REACT_APP_EVENT_DETAILS,
    eventList: process.env.REACT_APP_EVENT_LIST,
    saveBanner: process.env.REACT_APP_SAVE_BANNER,
    ticketList: process.env.REACT_APP_TICKET_LIST,
    detailClient: process.env.REACT_APP_DETAIL_CLIENT,
    dashboard: process.env.REACT_APP_DASHBOARD,
    saveEventData: process.env.REACT_APP_SAVE_EVENT_DATA,
    listeEventData: process.env.REACT_APP_LISTE_EVENT_DATA,
    saveEventBanner: process.env.REACT_APP_SAVE_EVENT_BANNER,
    listeEventBanner: process.env.REACT_APP_LISTE_EVENT_BANNER,
    listeUtilisateurs: process.env.REACT_APP_LISTE_UTILISATEURS,
    saveUtilisateurs: process.env.REACT_APP_SAVE_UTILISATEURS,
    notFound: process.env.REACT_APP_NOT_FOUND,

    ticketList: process.env.REACT_APP_LISTE_TICKET,
    clientListe: process.env.REACT_APP_LISTE_CLIENT,


    listeProfil: process.env.REACT_APP_LISTE_PROFIL,
    saveProfil: process.env.REACT_APP_SAVE_PROFIL,
    statisticEvent: process.env.REACT_APP_STATISTIC_EVENT,

  };

  const defaultThemeMode = "light";
  const [themeMode, setThemeMode] = useState(defaultThemeMode);
  const [isDrawerOn, setIsDrawerOn] = useState(window.innerWidth > 768);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  // const location = useLocation(); // Obtenez l'emplacement actuel

  const handleSidebarToggle = () => {
    setIsDrawerOn(!isDrawerOn);
  };

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth <= 768;
      setIsMobile(isMobileView);
      setIsDrawerOn(!isMobileView); // Ouvrir par défaut sur grand écran, fermer sur mobile
    };

    // Initial check and add resize event listener
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (location.pathname === "/tableau-bord") {
      setMargin("ms-0");
    } else {
      setMargin("");
    }
  }, [location, margin]);

  console.log("Margin applied:", margin);

  useEffect(() => {
    let currentThemeMode;

    if (document.documentElement.hasAttribute("data-bs-theme-mode")) {
      currentThemeMode =
        document.documentElement.getAttribute("data-bs-theme-mode");
    } else if (localStorage.getItem("data-bs-theme") !== null) {
      currentThemeMode = localStorage.getItem("data-bs-theme");
    } else {
      currentThemeMode = defaultThemeMode;
    }

    if (currentThemeMode === "system") {
      currentThemeMode = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
    }

    document.documentElement.setAttribute("data-bs-theme", currentThemeMode);
    setThemeMode(currentThemeMode);
  }, []);

  // const wrapperClass = location.pathname === paths.dashboard ? "app-main" : "app-wrapper";
  const wrapperClass = "app-main flex-column flex-row-fluid ";

  return (
    <>
      {!isRoot && (
        <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
          {/*begin::Page*/}
          <div
            className="app-page flex-column flex-column-fluid"
            id="kt_app_page"
          >
            {/*begin::Header*/}
            <div
              id="kt_app_header"
              className="app-header "
              data-kt-sticky="true"
              data-kt-sticky-activate="{default: true, lg: true}"
              data-kt-sticky-name="app-header-minimize"
              data-kt-sticky-offset="{default: '200px', lg: '0'}"
              data-kt-sticky-animation="false"
              style={{ top: 0 }}
              data-kt-sticky-enabled="true"
            >
              {/*begin::Header container*/}
              <div
                className="app-container  container-fluid d-flex align-items-stretch justify-content-between "
                id="kt_app_header_container"
              >
                {/*begin::Sidebar mobile toggle*/}
                <div
                  className="d-flex align-items-center d-lg-none ms-n3 me-1 me-md-2"
                  title="Show sidebar menu"
                >
                  <div
                    className="btn btn-icon btn-active-color-primary w-35px h-35px"
                    id="kt_app_sidebar_mobile_toggle"
                  >
                    <i className="ki-duotone ki-abstract-14 fs-2 fs-md-1">
                      <span className="path1" />
                      <span className="path2" />
                    </i>{" "}
                  </div>
                </div>
                {/*end::Sidebar mobile toggle*/}
                {/*begin::Mobile logo*/}
                <div className="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
                  <a href="" className="d-lg-none">
                    <img
                      alt="Logo"
                      src="assets/media/logos/logo_light.svg"
                      className="h-30px"
                    />
                  </a>
                </div>
                {/*end::Mobile logo*/}
                {/*begin::Header wrapper*/}
                <HeaderWrapper />
                {/*end::Header wrapper*/}{" "}
              </div>
              {/*end::Header container*/}
            </div>
            {/*end::Header*/}
            {/*begin::Wrapper*/}
            <div
              className={`app-wrapper flex-column flex-column-fluid ${margin}`}
              id="kt_app_wrapper"
            >
              {/*begin::Sidebar*/}
              <div
                id="kt_app_sidebar"
                className="app-sidebar flex-column"
                data-kt-drawer="true"
                data-kt-drawer-name="app-sidebar"
                data-kt-drawer-activate="{default: true, lg: false}"
                data-kt-drawer-overlay="true"
                data-kt-drawer-width="225px"
                data-kt-drawer-direction="start"
                data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle"
              >
                {/*begin::Logo*/}
                <div className="app-sidebar-logo px-6" id="kt_app_sidebar_logo">
                  {/*begin::Logo image*/}
                  <a href="#/tableau-bord">
                    <img
                      alt="Logo"
                      src="assets/media/logos/logo_dark.svg"
                      className="h-65px app-sidebar-logo-default"
                    />
                    <img
                      alt="Logo"
                      src="assets/media/logos/logo_light.svg"
                      className="h-20px app-sidebar-logo-minimize"
                    />
                  </a>
                  <div
                    id="kt_app_sidebar_toggle"
                    className="app-sidebar-toggle btn btn-icon btn-shadow btn-sm btn-color-muted btn-active-color-primary h-30px w-30px position-absolute top-50 start-100 translate-middle rotate "
                    data-kt-toggle="true"
                    data-kt-toggle-state="active"
                    data-kt-toggle-target="body"
                    data-kt-toggle-name="app-sidebar-minimize"
                  >
                    <i className="ki-duotone ki-black-left-line fs-3 rotate-180">
                      <span className="path1" />
                      <span className="path2" />
                    </i>{" "}
                  </div>
                </div>
                <Menu />
                {/* <div
                  className="app-sidebar-footer flex-column-auto pt-2 pb-6 px-6"
                  id="kt_app_sidebar_footer"
                >
                  <a
                    href="https://preview.keenthemes.com/html/metronic/docs"
                    className="btn btn-flex flex-center btn-custom btn-primary overflow-hidden text-nowrap px-0 h-40px w-100"
                    data-bs-toggle="tooltip"
                    data-bs-trigger="hover"
                    data-bs-dismiss-="click"
                    data-bs-original-title="200+ in-house components and 3rd-party plugins"
                    data-kt-initialized={1}
                  >
                    <span className="btn-label">Docs &amp; Components</span>
                    <i className="ki-duotone ki-document btn-icon fs-2 m-0">
                      <span className="path1" />
                      <span className="path2" />
                    </i>{" "}
                  </a>
                </div> */}
                {/*end::Footer*/}{" "}
              </div>
              {/*end::Sidebar*/}
              {/*begin::Main*/}
              <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="*" element={<NotFound />} />
                <Route path={paths.saveBanner} element={<SaveBannerPage />} />
                <Route path={paths.clientListe} element={<ListeClient />} />
                <Route path={paths.detailClient} element={<DetailClient />} />

                {/* <Route path={paths.dashboard} element={<DashboardAnnonceur />} /> */}
                <Route path={paths.saveEventData} element={<SaveEvent />} />

                <Route path={paths.saveTypeActivite} element={<SaveTypeActivite />} />
                <Route path={paths.saveCategoriePlace} element={<SaveCategoriePlace />} />

                <Route path={paths.listTypeActivite} element={<ListeTypeActivite />} />
                <Route path={paths.listCategoriePlace} element={<ListeCategoriePlace />} />

                /

                {/* <Route path={paths.listeEventData} element={<ListeEvent />} /> */}
                <Route path={paths.listeEventData} element={<EventsDataTable />} />
                <Route path={paths.ticketList} element={<ListeTicket />} />
                <Route path={paths.saveEventBanner} element={<SaveBanner />} />
                <Route
                  path={paths.listeEventBanner}
                  element={<BannerDataTable />}
                />
                <Route path={paths.listeUtilisateurs} element={<ListeUser />} />
                <Route path={paths.saveUtilisateurs} element={<SaveUser />} />

                <Route path={paths.listeProfil} element={<ListeProfil />} />
                <Route path={paths.saveProfil} element={<SaveProfil />} />

                <Route path={paths.statisticEvent} element={<StatisticEvent />} />

                

                <Route path={paths.notFound} element={<NotFound />} />
                <Route
                  path={paths.dashboard}
                  element={<DashboardAnnonceur />}
                />
              </Routes>
              <div id="kt_app_footer" className="app-footer fixed-bottom_">
                <div className="app-container container-fluid d-flex flex-column flex-md-row flex-center flex-md-stack py-3">
                  <div className="text-gray-900 order-2 order-md-1">
                    <span className="text-muted fw-semibold me-1">2025©</span>
                    <a
                      href="#"
                      target="_blank"
                      className="text-gray-800 text-hover-primary"
                    >
                      Guinéé Ticket
                    </a>
                  </div>
                  <ul className="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
                    <li className="menu-item">
                      <a
                        href="#"
                        target="_blank"
                        className="menu-link px-2"
                      >
                        About
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        href="#"
                        target="_blank"
                        className="menu-link px-2"
                      >
                        Support
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        href="https://1.envato.market/Vm7VRE"
                        target="_blank"
                        className="menu-link px-2"
                      >
                        Purchase
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Routes>
        <Route path={paths.signIn} element={<SignIn />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;

// Endpoint Création d'utilisateur

// - on ne peut pas desactivé un utilisateur

// mode: "updateEvenement", mode de modification des de banière

// https://rsuitejs.com/components/select-picker/
