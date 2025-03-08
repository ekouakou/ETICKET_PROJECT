import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import LoadScripts from "./LoadScripts";
import SideBar from "./AppPage/SideBar";
import Header from "./Header";
import ChatDrawer from "./ChatDrawer";
import ThemeBuilder from "./ThemeBuilder";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import SignIn from "./AppPage/login/SignIn";
import ListeEventBanner from "./AppPage/EticketBanner/ListeEventBanner";
import SaveBanner from "./AppPage/EticketBanner/SaveBanner";

import SaveUser from "./AppPage/EticketUtilisateur/SaveUser";
import ListeUser from "./AppPage/EticketUtilisateur/ListeUser";




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
    eventDetails: process.env.REACT_APP_EVENT_DETAILS,
    eventList: process.env.REACT_APP_EVENT_LIST,
    saveBanner: process.env.REACT_APP_SAVE_BANNER,
    clientList: process.env.REACT_APP_CLIENT_LIST,
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
        <>
          <LoadScripts />
          {/*begin::Theme mode setup on page load*/}
          {/*end::Theme mode setup on page load*/}
          {/*Begin::Google Tag Manager (noscript) */}

          {/*End::Google Tag Manager (noscript) */}
          {/*begin::App*/}
          <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
            {/*begin::Page*/}
            <div className="app-page flex-column flex-column-fluid" id="kt_app_page">
              {/*begin::Header*/}
              <Header />
              {/*end::Header*/}
              {/*begin::Wrapper*/}
              <div
                className="app-wrapper flex-column flex-row-fluid"
                id="kt_app_wrapper"
              >
                <SideBar />
                {/*begin::Main*/}
                <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
                  {/*begin::Content wrapper*/}
                  <div className="d-flex flex-column flex-column-fluid">
                    {/*begin::Toolbar*/}
                    <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
                      {/*begin::Toolbar container*/}
                      <div
                        id="kt_app_toolbar_container"
                        className="app-container container-fluid d-flex flex-stack"
                      >
                        {/*begin::Page title*/}
                        <div className="page-title d-flex flex-column justify-content-center flex-wrap me-3">
                          {/*begin::Title*/}
                          <h1 className="page-heading d-flex text-gray-900 fw-bold fs-3 flex-column justify-content-center my-0">
                            Default
                          </h1>
                          {/*end::Title*/}
                          {/*begin::Breadcrumb*/}
                          <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
                            {/*begin::Item*/}
                            <li className="breadcrumb-item text-muted">
                              <a
                                href="index.html"
                                className="text-muted text-hover-primary"
                              >
                                Home
                              </a>
                            </li>
                            {/*end::Item*/}
                            {/*begin::Item*/}
                            <li className="breadcrumb-item">
                              <span className="bullet bg-gray-500 w-5px h-2px" />
                            </li>
                            {/*end::Item*/}
                            {/*begin::Item*/}
                            <li className="breadcrumb-item text-muted">Dashboards</li>
                            {/*end::Item*/}
                          </ul>
                          {/*end::Breadcrumb*/}
                        </div>
                        {/*end::Page title*/}
                        {/*begin::Actions*/}
                        <div className="d-flex align-items-center gap-2 gap-lg-3">
                          {/*begin::Filter menu*/}
                          <div className="d-flex">
                            <select
                              name="campaign-type"
                              data-control="select2"
                              data-hide-search="true"
                              className="form-select form-select-sm bg-body border-body w-175px"
                            >
                              <option value="Twitter" selected="selected">
                                Select Campaign
                              </option>
                              <option value="Twitter">Twitter Campaign</option>
                              <option value="Twitter">Facebook Campaign</option>
                              <option value="Twitter">Adword Campaign</option>
                              <option value="Twitter">Carbon Campaign</option>
                            </select>
                            <a
                              href="#"
                              className="btn btn-icon btn-sm btn-success flex-shrink-0 ms-4"
                              data-bs-toggle="modal"
                              data-bs-target="#kt_modal_create_campaign"
                            >
                              <i className="ki-duotone ki-plus fs-2" />
                            </a>
                          </div>
                          {/*end::Filter menu*/}
                          {/*begin::Secondary button*/}
                          {/*end::Secondary button*/}
                          {/*begin::Primary button*/}
                          {/*end::Primary button*/}
                        </div>
                        {/*end::Actions*/}
                      </div>
                      {/*end::Toolbar container*/}
                    </div>
                    {/*end::Toolbar*/}
                    {/*begin::Content*/}
                    <div id="kt_app_content" className="app-content flex-column-fluid">
                      {/*begin::Content container*/}
                      <div
                        id="kt_app_content_container"
                        className="app-container container-fluid"
                      >
                        {/*begin::Row*/}
                        <Routes>
                          <Route path="/" element={<SignIn />} />
                          <Route path={paths.saveBanner} element={<SaveBanner />} />
                          <Route path={paths.listeEventBanner} element={<ListeEventBanner />} />

                          <Route path={paths.listeUtilisateurs} element={<ListeUser />} />
                          <Route path={paths.saveUtilisateurs} element={<SaveUser />} />

                          {/* <Route path="*" element={<NotFound />} />
                          // 
                          <Route path={paths.saveEventData} element={<SaveEvent />} />
                          <Route path={paths.listeEventData} element={<ListeEvent />} />
                          <Route path={paths.ticketList} element={<ListeTicket />} />
                          <Route path={paths.saveEventBanner} element={<SaveBanner />} />
                          
                          <Route path={paths.listeUtilisateurs} element={<ListeUser />} />
                          <Route path={paths.saveUtilisateurs} element={<SaveUser />} />
    
                          <Route path={paths.listeProfil} element={<ListeProfil />} />
                          <Route path={paths.saveProfil} element={<SaveProfil />} />
    
                          <Route path={paths.notFound} element={<NotFound />} />
                          <Route
                            path={paths.dashboard}
                            element={<DashboardAnnonceur />}
                          /> */}
                        </Routes>
                        {/*end::Row*/}
                      </div>
                      {/*end::Content container*/}
                    </div>
                    {/*end::Content*/}
                  </div>
                  {/*end::Content wrapper*/}
                  {/*begin::Footer*/}
                  <div id="kt_app_footer" className="app-footer">
                    {/*begin::Footer container*/}
                    <div className="app-container container-fluid d-flex flex-column flex-md-row flex-center flex-md-stack py-3">
                      {/*begin::Copyright*/}
                      <div className="text-gray-900 order-2 order-md-1">
                        <span className="text-muted fw-semibold me-1">2025©</span>
                        <a
                          href="https://keenthemes.com/"
                          target="_blank"
                          className="text-gray-800 text-hover-primary"
                        >
                          Keenthemes
                        </a>
                      </div>
                      {/*end::Copyright*/}
                      {/*begin::Menu*/}
                      <ul className="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
                        <li className="menu-item">
                          <a
                            href="https://keenthemes.com/"
                            target="_blank"
                            className="menu-link px-2"
                          >
                            About
                          </a>
                        </li>
                        <li className="menu-item">
                          <a
                            href="https://devs.keenthemes.com/"
                            target="_blank"
                            className="menu-link px-2"
                          >
                            Support
                          </a>
                        </li>
                        <li className="menu-item">
                          <a
                            href="https://themes.getbootstrap.com/product/keen-the-ultimate-bootstrap-admin-theme/"
                            target="_blank"
                            className="menu-link px-2"
                          >
                            Purchase
                          </a>
                        </li>
                      </ul>
                      {/*end::Menu*/}
                    </div>
                    {/*end::Footer container*/}
                  </div>
                  {/*end::Footer*/}
                </div>
                {/*end:::Main*/}
              </div>
              {/*end::Wrapper*/}
            </div>
            {/*end::Page*/}
          </div>
          {/*end::App*/}
          {/*end::App settings toggle*/}
          {/*begin::Drawers*/}
          {/*begin::Activities drawer*/}
          <div
            id="kt_activities"
            className="bg-body"
            data-kt-drawer="true"
            data-kt-drawer-name="activities"
            data-kt-drawer-activate="true"
            data-kt-drawer-overlay="true"
            data-kt-drawer-width="{default:'300px', 'lg': '900px'}"
            data-kt-drawer-direction="end"
            data-kt-drawer-toggle="#kt_activities_toggle"
            data-kt-drawer-close="#kt_activities_close"
          >
            <div className="card shadow-none border-0 rounded-0">
              {/*begin::Header*/}
              <div className="card-header" id="kt_activities_header">
                <h3 className="card-title fw-bold text-gray-900">Activity Logs</h3>
                <div className="card-toolbar">
                  <button
                    type="button"
                    className="btn btn-sm btn-icon btn-active-light-primary me-n5"
                    id="kt_activities_close"
                  >
                    <i className="ki-duotone ki-cross fs-1">
                      <span className="path1" />
                      <span className="path2" />
                    </i>
                  </button>
                </div>
              </div>
              {/*end::Header*/}
              {/*begin::Body*/}
              <div className="card-body position-relative" id="kt_activities_body">
                {/*begin::Content*/}
                <div
                  id="kt_activities_scroll"
                  className="position-relative scroll-y me-n5 pe-5"
                  data-kt-scroll="true"
                  data-kt-scroll-height="auto"
                  data-kt-scroll-wrappers="#kt_activities_body"
                  data-kt-scroll-dependencies="#kt_activities_header, #kt_activities_footer"
                  data-kt-scroll-offset="5px"
                >
                  {/*begin::Timeline items*/}
                  <div className="timeline timeline-border-dashed">
                    {/*begin::Timeline item*/}
                    <div className="timeline-item">
                      {/*begin::Timeline line*/}
                      <div className="timeline-line" />
                      {/*end::Timeline line*/}
                      {/*begin::Timeline icon*/}
                      <div className="timeline-icon">
                        <i className="ki-duotone ki-message-text-2 fs-2 text-gray-500">
                          <span className="path1" />
                          <span className="path2" />
                          <span className="path3" />
                        </i>
                      </div>
                      {/*end::Timeline icon*/}
                      {/*begin::Timeline content*/}
                      <div className="timeline-content mb-10 mt-n1">
                        {/*begin::Timeline heading*/}
                        <div className="pe-3 mb-5">
                          {/*begin::Title*/}
                          <div className="fs-5 fw-semibold mb-2">
                            There are 2 new tasks for you in “AirPlus Mobile App”
                            project:
                          </div>
                          {/*end::Title*/}
                          {/*begin::Description*/}
                          <div className="d-flex align-items-center mt-1 fs-6">
                            {/*begin::Info*/}
                            <div className="text-muted me-2 fs-7">
                              Added at 4:23 PM by
                            </div>
                            {/*end::Info*/}
                            {/*begin::User*/}
                            <div
                              className="symbol symbol-circle symbol-25px"
                              data-bs-toggle="tooltip"
                              data-bs-boundary="window"
                              data-bs-placement="top"
                              title="Nina Nilson"
                            >
                              <img src="assets/media/avatars/300-14.jpg" alt="img" />
                            </div>
                            {/*end::User*/}
                          </div>
                          {/*end::Description*/}
                        </div>
                        {/*end::Timeline heading*/}
                        {/*begin::Timeline details*/}
                        <div className="overflow-auto pb-5">
                          {/*begin::Record*/}
                          <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5">
                            {/*begin::Title*/}
                            <a
                              href="apps/projects/project.html"
                              className="fs-5 text-gray-900 text-hover-primary fw-semibold w-375px min-w-200px"
                            >
                              Meeting with customer
                            </a>
                            {/*end::Title*/}
                            {/*begin::Label*/}
                            <div className="min-w-175px pe-2">
                              <span className="badge badge-light text-muted">
                                Application Design
                              </span>
                            </div>
                            {/*end::Label*/}
                            {/*begin::Users*/}
                            <div className="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px pe-2">
                              {/*begin::User*/}
                              <div className="symbol symbol-circle symbol-25px">
                                <img src="assets/media/avatars/300-2.jpg" alt="img" />
                              </div>
                              {/*end::User*/}
                              {/*begin::User*/}
                              <div className="symbol symbol-circle symbol-25px">
                                <img src="assets/media/avatars/300-14.jpg" alt="img" />
                              </div>
                              {/*end::User*/}
                              {/*begin::User*/}
                              <div className="symbol symbol-circle symbol-25px">
                                <div className="symbol-label fs-8 fw-semibold bg-primary text-inverse-primary">
                                  A
                                </div>
                              </div>
                              {/*end::User*/}
                            </div>
                            {/*end::Users*/}
                            {/*begin::Progress*/}
                            <div className="min-w-125px pe-2">
                              <span className="badge badge-light-primary">
                                In Progress
                              </span>
                            </div>
                            {/*end::Progress*/}
                            {/*begin::Action*/}
                            <a
                              href="apps/projects/project.html"
                              className="btn btn-sm btn-light btn-active-light-primary"
                            >
                              View
                            </a>
                            {/*end::Action*/}
                          </div>
                          {/*end::Record*/}
                          {/*begin::Record*/}
                          <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-0">
                            {/*begin::Title*/}
                            <a
                              href="apps/projects/project.html"
                              className="fs-5 text-gray-900 text-hover-primary fw-semibold w-375px min-w-200px"
                            >
                              Project Delivery Preparation
                            </a>
                            {/*end::Title*/}
                            {/*begin::Label*/}
                            <div className="min-w-175px">
                              <span className="badge badge-light text-muted">
                                CRM System Development
                              </span>
                            </div>
                            {/*end::Label*/}
                            {/*begin::Users*/}
                            <div className="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px">
                              {/*begin::User*/}
                              <div className="symbol symbol-circle symbol-25px">
                                <img src="assets/media/avatars/300-20.jpg" alt="img" />
                              </div>
                              {/*end::User*/}
                              {/*begin::User*/}
                              <div className="symbol symbol-circle symbol-25px">
                                <div className="symbol-label fs-8 fw-semibold bg-success text-inverse-primary">
                                  B
                                </div>
                              </div>
                              {/*end::User*/}
                            </div>
                            {/*end::Users*/}
                            {/*begin::Progress*/}
                            <div className="min-w-125px">
                              <span className="badge badge-light-success">
                                Completed
                              </span>
                            </div>
                            {/*end::Progress*/}
                            {/*begin::Action*/}
                            <a
                              href="apps/projects/project.html"
                              className="btn btn-sm btn-light btn-active-light-primary"
                            >
                              View
                            </a>
                            {/*end::Action*/}
                          </div>
                          {/*end::Record*/}
                        </div>
                        {/*end::Timeline details*/}
                      </div>
                      {/*end::Timeline content*/}
                    </div>
                    {/*end::Timeline item*/}
                    {/*begin::Timeline item*/}
                    <div className="timeline-item">
                      {/*begin::Timeline line*/}
                      <div className="timeline-line" />
                      {/*end::Timeline line*/}
                      {/*begin::Timeline icon*/}
                      <div className="timeline-icon me-4">
                        <i className="ki-duotone ki-flag fs-2 text-gray-500">
                          <span className="path1" />
                          <span className="path2" />
                        </i>
                      </div>
                      {/*end::Timeline icon*/}
                      {/*begin::Timeline content*/}
                      <div className="timeline-content mb-10 mt-n2">
                        {/*begin::Timeline heading*/}
                        <div className="overflow-auto pe-3">
                          {/*begin::Title*/}
                          <div className="fs-5 fw-semibold mb-2">
                            Invitation for crafting engaging designs that speak human
                            workshop
                          </div>
                          {/*end::Title*/}
                          {/*begin::Description*/}
                          <div className="d-flex align-items-center mt-1 fs-6">
                            {/*begin::Info*/}
                            <div className="text-muted me-2 fs-7">
                              Sent at 4:23 PM by
                            </div>
                            {/*end::Info*/}
                            {/*begin::User*/}
                            <div
                              className="symbol symbol-circle symbol-25px"
                              data-bs-toggle="tooltip"
                              data-bs-boundary="window"
                              data-bs-placement="top"
                              title="Alan Nilson"
                            >
                              <img src="assets/media/avatars/300-1.jpg" alt="img" />
                            </div>
                            {/*end::User*/}
                          </div>
                          {/*end::Description*/}
                        </div>
                        {/*end::Timeline heading*/}
                      </div>
                      {/*end::Timeline content*/}
                    </div>
                    {/*end::Timeline item*/}
                    {/*begin::Timeline item*/}
                    <div className="timeline-item">
                      {/*begin::Timeline line*/}
                      <div className="timeline-line" />
                      {/*end::Timeline line*/}
                      {/*begin::Timeline icon*/}
                      <div className="timeline-icon">
                        <i className="ki-duotone ki-disconnect fs-2 text-gray-500">
                          <span className="path1" />
                          <span className="path2" />
                          <span className="path3" />
                          <span className="path4" />
                          <span className="path5" />
                        </i>
                      </div>
                      {/*end::Timeline icon*/}
                      {/*begin::Timeline content*/}
                      <div className="timeline-content mb-10 mt-n1">
                        {/*begin::Timeline heading*/}
                        <div className="mb-5 pe-3">
                          {/*begin::Title*/}
                          <a
                            href="#"
                            className="fs-5 fw-semibold text-gray-800 text-hover-primary mb-2"
                          >
                            3 New Incoming Project Files:
                          </a>
                          {/*end::Title*/}
                          {/*begin::Description*/}
                          <div className="d-flex align-items-center mt-1 fs-6">
                            {/*begin::Info*/}
                            <div className="text-muted me-2 fs-7">
                              Sent at 10:30 PM by
                            </div>
                            {/*end::Info*/}
                            {/*begin::User*/}
                            <div
                              className="symbol symbol-circle symbol-25px"
                              data-bs-toggle="tooltip"
                              data-bs-boundary="window"
                              data-bs-placement="top"
                              title="Jan Hummer"
                            >
                              <img src="assets/media/avatars/300-23.jpg" alt="img" />
                            </div>
                            {/*end::User*/}
                          </div>
                          {/*end::Description*/}
                        </div>
                        {/*end::Timeline heading*/}
                        {/*begin::Timeline details*/}
                        <div className="overflow-auto pb-5">
                          <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-5">
                            {/*begin::Item*/}
                            <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                              {/*begin::Icon*/}
                              <img
                                alt=""
                                className="w-30px me-3"
                                src="assets/media/svg/files/pdf.svg"
                              />
                              {/*end::Icon*/}
                              {/*begin::Info*/}
                              <div className="ms-1 fw-semibold">
                                {/*begin::Desc*/}
                                <a
                                  href="apps/projects/project.html"
                                  className="fs-6 text-hover-primary fw-bold"
                                >
                                  Finance KPI App Guidelines
                                </a>
                                {/*end::Desc*/}
                                {/*begin::Number*/}
                                <div className="text-gray-500">1.9mb</div>
                                {/*end::Number*/}
                              </div>
                              {/*begin::Info*/}
                            </div>
                            {/*end::Item*/}
                            {/*begin::Item*/}
                            <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                              {/*begin::Icon*/}
                              <img
                                alt="/keen/demo1/apps/projects/project.html"
                                className="w-30px me-3"
                                src="assets/media/svg/files/doc.svg"
                              />
                              {/*end::Icon*/}
                              {/*begin::Info*/}
                              <div className="ms-1 fw-semibold">
                                {/*begin::Desc*/}
                                <a href="#" className="fs-6 text-hover-primary fw-bold">
                                  Client UAT Testing Results
                                </a>
                                {/*end::Desc*/}
                                {/*begin::Number*/}
                                <div className="text-gray-500">18kb</div>
                                {/*end::Number*/}
                              </div>
                              {/*end::Info*/}
                            </div>
                            {/*end::Item*/}
                            {/*begin::Item*/}
                            <div className="d-flex flex-aligns-center">
                              {/*begin::Icon*/}
                              <img
                                alt="/keen/demo1/apps/projects/project.html"
                                className="w-30px me-3"
                                src="assets/media/svg/files/css.svg"
                              />
                              {/*end::Icon*/}
                              {/*begin::Info*/}
                              <div className="ms-1 fw-semibold">
                                {/*begin::Desc*/}
                                <a href="#" className="fs-6 text-hover-primary fw-bold">
                                  Finance Reports
                                </a>
                                {/*end::Desc*/}
                                {/*begin::Number*/}
                                <div className="text-gray-500">20mb</div>
                                {/*end::Number*/}
                              </div>
                              {/*end::Icon*/}
                            </div>
                            {/*end::Item*/}
                          </div>
                        </div>
                        {/*end::Timeline details*/}
                      </div>
                      {/*end::Timeline content*/}
                    </div>
                    {/*end::Timeline item*/}
                    {/*begin::Timeline item*/}
                    <div className="timeline-item">
                      {/*begin::Timeline line*/}
                      <div className="timeline-line" />
                      {/*end::Timeline line*/}
                      {/*begin::Timeline icon*/}
                      <div className="timeline-icon">
                        <i className="ki-duotone ki-abstract-26 fs-2 text-gray-500">
                          <span className="path1" />
                          <span className="path2" />
                        </i>
                      </div>
                      {/*end::Timeline icon*/}
                      {/*begin::Timeline content*/}
                      <div className="timeline-content mb-10 mt-n1">
                        {/*begin::Timeline heading*/}
                        <div className="pe-3 mb-5">
                          {/*begin::Title*/}
                          <div className="fs-5 fw-semibold mb-2">
                            Task
                            <a href="#" className="text-primary fw-bold me-1">
                              #45890
                            </a>
                            merged with
                            <a href="#" className="text-primary fw-bold me-1">
                              #45890
                            </a>
                            in “Ads Pro Admin Dashboard project:
                          </div>
                          {/*end::Title*/}
                          {/*begin::Description*/}
                          <div className="d-flex align-items-center mt-1 fs-6">
                            {/*begin::Info*/}
                            <div className="text-muted me-2 fs-7">
                              Initiated at 4:23 PM by
                            </div>
                            {/*end::Info*/}
                            {/*begin::User*/}
                            <div
                              className="symbol symbol-circle symbol-25px"
                              data-bs-toggle="tooltip"
                              data-bs-boundary="window"
                              data-bs-placement="top"
                              title="Nina Nilson"
                            >
                              <img src="assets/media/avatars/300-14.jpg" alt="img" />
                            </div>
                            {/*end::User*/}
                          </div>
                          {/*end::Description*/}
                        </div>
                        {/*end::Timeline heading*/}
                      </div>
                      {/*end::Timeline content*/}
                    </div>
                    {/*end::Timeline item*/}
                    {/*begin::Timeline item*/}
                    <div className="timeline-item">
                      {/*begin::Timeline line*/}
                      <div className="timeline-line" />
                      {/*end::Timeline line*/}
                      {/*begin::Timeline icon*/}
                      <div className="timeline-icon">
                        <i className="ki-duotone ki-pencil fs-2 text-gray-500">
                          <span className="path1" />
                          <span className="path2" />
                        </i>
                      </div>
                      {/*end::Timeline icon*/}
                      {/*begin::Timeline content*/}
                      <div className="timeline-content mb-10 mt-n1">
                        {/*begin::Timeline heading*/}
                        <div className="pe-3 mb-5">
                          {/*begin::Title*/}
                          <div className="fs-5 fw-semibold mb-2">
                            3 new application design concepts added:
                          </div>
                          {/*end::Title*/}
                          {/*begin::Description*/}
                          <div className="d-flex align-items-center mt-1 fs-6">
                            {/*begin::Info*/}
                            <div className="text-muted me-2 fs-7">
                              Created at 4:23 PM by
                            </div>
                            {/*end::Info*/}
                            {/*begin::User*/}
                            <div
                              className="symbol symbol-circle symbol-25px"
                              data-bs-toggle="tooltip"
                              data-bs-boundary="window"
                              data-bs-placement="top"
                              title="Marcus Dotson"
                            >
                              <img src="assets/media/avatars/300-2.jpg" alt="img" />
                            </div>
                            {/*end::User*/}
                          </div>
                          {/*end::Description*/}
                        </div>
                        {/*end::Timeline heading*/}
                        {/*begin::Timeline details*/}
                        <div className="overflow-auto pb-5">
                          <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-7">
                            {/*begin::Item*/}
                            <div className="overlay me-10">
                              {/*begin::Image*/}
                              <div className="overlay-wrapper">
                                <img
                                  alt="img"
                                  className="rounded w-150px"
                                  src="assets/media/stock/600x400/img-29.jpg"
                                />
                              </div>
                              {/*end::Image*/}
                              {/*begin::Link*/}
                              <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                                <a
                                  href="#"
                                  className="btn btn-sm btn-primary btn-shadow"
                                >
                                  Explore
                                </a>
                              </div>
                              {/*end::Link*/}
                            </div>
                            {/*end::Item*/}
                            {/*begin::Item*/}
                            <div className="overlay me-10">
                              {/*begin::Image*/}
                              <div className="overlay-wrapper">
                                <img
                                  alt="img"
                                  className="rounded w-150px"
                                  src="assets/media/stock/600x400/img-31.jpg"
                                />
                              </div>
                              {/*end::Image*/}
                              {/*begin::Link*/}
                              <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                                <a
                                  href="#"
                                  className="btn btn-sm btn-primary btn-shadow"
                                >
                                  Explore
                                </a>
                              </div>
                              {/*end::Link*/}
                            </div>
                            {/*end::Item*/}
                            {/*begin::Item*/}
                            <div className="overlay">
                              {/*begin::Image*/}
                              <div className="overlay-wrapper">
                                <img
                                  alt="img"
                                  className="rounded w-150px"
                                  src="assets/media/stock/600x400/img-40.jpg"
                                />
                              </div>
                              {/*end::Image*/}
                              {/*begin::Link*/}
                              <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                                <a
                                  href="#"
                                  className="btn btn-sm btn-primary btn-shadow"
                                >
                                  Explore
                                </a>
                              </div>
                              {/*end::Link*/}
                            </div>
                            {/*end::Item*/}
                          </div>
                        </div>
                        {/*end::Timeline details*/}
                      </div>
                      {/*end::Timeline content*/}
                    </div>
                    {/*end::Timeline item*/}
                    {/*begin::Timeline item*/}
                    <div className="timeline-item">
                      {/*begin::Timeline line*/}
                      <div className="timeline-line" />
                      {/*end::Timeline line*/}
                      {/*begin::Timeline icon*/}
                      <div className="timeline-icon">
                        <i className="ki-duotone ki-sms fs-2 text-gray-500">
                          <span className="path1" />
                          <span className="path2" />
                        </i>
                      </div>
                      {/*end::Timeline icon*/}
                      {/*begin::Timeline content*/}
                      <div className="timeline-content mb-10 mt-n1">
                        {/*begin::Timeline heading*/}
                        <div className="pe-3 mb-5">
                          {/*begin::Title*/}
                          <div className="fs-5 fw-semibold mb-2">
                            New case
                            <a href="#" className="text-primary fw-bold me-1">
                              #67890
                            </a>
                            is assigned to you in Multi-platform Database Design project
                          </div>
                          {/*end::Title*/}
                          {/*begin::Description*/}
                          <div className="overflow-auto pb-5">
                            {/*begin::Wrapper*/}
                            <div className="d-flex align-items-center mt-1 fs-6">
                              {/*begin::Info*/}
                              <div className="text-muted me-2 fs-7">
                                Added at 4:23 PM by
                              </div>
                              {/*end::Info*/}
                              {/*begin::User*/}
                              <a href="#" className="text-primary fw-bold me-1">
                                Alice Tan
                              </a>
                              {/*end::User*/}
                            </div>
                            {/*end::Wrapper*/}
                          </div>
                          {/*end::Description*/}
                        </div>
                        {/*end::Timeline heading*/}
                      </div>
                      {/*end::Timeline content*/}
                    </div>
                    {/*end::Timeline item*/}
                    {/*begin::Timeline item*/}
                    <div className="timeline-item">
                      {/*begin::Timeline line*/}
                      <div className="timeline-line" />
                      {/*end::Timeline line*/}
                      {/*begin::Timeline icon*/}
                      <div className="timeline-icon">
                        <i className="ki-duotone ki-pencil fs-2 text-gray-500">
                          <span className="path1" />
                          <span className="path2" />
                        </i>
                      </div>
                      {/*end::Timeline icon*/}
                      {/*begin::Timeline content*/}
                      <div className="timeline-content mb-10 mt-n1">
                        {/*begin::Timeline heading*/}
                        <div className="pe-3 mb-5">
                          {/*begin::Title*/}
                          <div className="fs-5 fw-semibold mb-2">
                            You have received a new order:
                          </div>
                          {/*end::Title*/}
                          {/*begin::Description*/}
                          <div className="d-flex align-items-center mt-1 fs-6">
                            {/*begin::Info*/}
                            <div className="text-muted me-2 fs-7">
                              Placed at 5:05 AM by
                            </div>
                            {/*end::Info*/}
                            {/*begin::User*/}
                            <div
                              className="symbol symbol-circle symbol-25px"
                              data-bs-toggle="tooltip"
                              data-bs-boundary="window"
                              data-bs-placement="top"
                              title="Robert Rich"
                            >
                              <img src="assets/media/avatars/300-4.jpg" alt="img" />
                            </div>
                            {/*end::User*/}
                          </div>
                          {/*end::Description*/}
                        </div>
                        {/*end::Timeline heading*/}
                        {/*begin::Timeline details*/}
                        <div className="overflow-auto pb-5">
                          {/*begin::Notice*/}
                          <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed min-w-lg-600px flex-shrink-0 p-6">
                            {/*begin::Icon*/}
                            <i className="ki-duotone ki-devices-2 fs-2tx text-primary me-4">
                              <span className="path1" />
                              <span className="path2" />
                              <span className="path3" />
                            </i>
                            {/*end::Icon*/}
                            {/*begin::Wrapper*/}
                            <div className="d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap">
                              {/*begin::Content*/}
                              <div className="mb-3 mb-md-0 fw-semibold">
                                <h4 className="text-gray-900 fw-bold">
                                  Database Backup Process Completed!
                                </h4>
                                <div className="fs-6 text-gray-700 pe-7">
                                  Login into Admin Dashboard to make sure the data
                                  integrity is OK
                                </div>
                              </div>
                              {/*end::Content*/}
                              {/*begin::Action*/}
                              <a
                                href="#"
                                className="btn btn-primary px-6 align-self-center text-nowrap"
                              >
                                Proceed
                              </a>
                              {/*end::Action*/}
                            </div>
                            {/*end::Wrapper*/}
                          </div>
                          {/*end::Notice*/}
                        </div>
                        {/*end::Timeline details*/}
                      </div>
                      {/*end::Timeline content*/}
                    </div>
                    {/*end::Timeline item*/}
                    {/*begin::Timeline item*/}
                    <div className="timeline-item">
                      {/*begin::Timeline line*/}
                      <div className="timeline-line" />
                      {/*end::Timeline line*/}
                      {/*begin::Timeline icon*/}
                      <div className="timeline-icon">
                        <i className="ki-duotone ki-basket fs-2 text-gray-500">
                          <span className="path1" />
                          <span className="path2" />
                          <span className="path3" />
                          <span className="path4" />
                        </i>
                      </div>
                      {/*end::Timeline icon*/}
                      {/*begin::Timeline content*/}
                      <div className="timeline-content mt-n1">
                        {/*begin::Timeline heading*/}
                        <div className="pe-3 mb-5">
                          {/*begin::Title*/}
                          <div className="fs-5 fw-semibold mb-2">
                            New order
                            <a href="#" className="text-primary fw-bold me-1">
                              #67890
                            </a>
                            is placed for Workshow Planning &amp; Budget Estimation
                          </div>
                          {/*end::Title*/}
                          {/*begin::Description*/}
                          <div className="d-flex align-items-center mt-1 fs-6">
                            {/*begin::Info*/}
                            <div className="text-muted me-2 fs-7">
                              Placed at 4:23 PM by
                            </div>
                            {/*end::Info*/}
                            {/*begin::User*/}
                            <a href="#" className="text-primary fw-bold me-1">
                              Jimmy Bold
                            </a>
                            {/*end::User*/}
                          </div>
                          {/*end::Description*/}
                        </div>
                        {/*end::Timeline heading*/}
                      </div>
                      {/*end::Timeline content*/}
                    </div>
                    {/*end::Timeline item*/}
                  </div>
                  {/*end::Timeline items*/}
                </div>
                {/*end::Content*/}
              </div>
              {/*end::Body*/}
              {/*begin::Footer*/}
              <div className="card-footer py-5 text-center" id="kt_activities_footer">
                <a
                  href="pages/user-profile/activity.html"
                  className="btn btn-bg-body text-primary"
                >
                  View All Activities
                  <i className="ki-duotone ki-arrow-right fs-3 text-primary">
                    <span className="path1" />
                    <span className="path2" />
                  </i>
                </a>
              </div>
              {/*end::Footer*/}
            </div>
          </div>
          {/*end::Activities drawer*/}
          <ChatDrawer />
          {/*begin::Chat drawer*/}
          <div
            id="kt_shopping_cart"
            className="bg-body"
            data-kt-drawer="true"
            data-kt-drawer-name="cart"
            data-kt-drawer-activate="true"
            data-kt-drawer-overlay="true"
            data-kt-drawer-width="{default:'300px', 'md': '500px'}"
            data-kt-drawer-direction="end"
            data-kt-drawer-toggle="#kt_drawer_shopping_cart_toggle"
            data-kt-drawer-close="#kt_drawer_shopping_cart_close"
          >
            {/*begin::Messenger*/}
            <div className="card card-flush w-100 rounded-0">
              {/*begin::Card header*/}
              <div className="card-header">
                {/*begin::Title*/}
                <h3 className="card-title text-gray-900 fw-bold">Shopping Cart</h3>
                {/*end::Title*/}
                {/*begin::Card toolbar*/}
                <div className="card-toolbar">
                  {/*begin::Close*/}
                  <div
                    className="btn btn-sm btn-icon btn-active-light-primary"
                    id="kt_drawer_shopping_cart_close"
                  >
                    <i className="ki-duotone ki-cross fs-2">
                      <span className="path1" />
                      <span className="path2" />
                    </i>
                  </div>
                  {/*end::Close*/}
                </div>
                {/*end::Card toolbar*/}
              </div>
              {/*end::Card header*/}
              {/*begin::Card body*/}
              <div className="card-body hover-scroll-overlay-y h-400px pt-5">
                {/*begin::Item*/}
                <div className="d-flex flex-stack">
                  {/*begin::Wrapper*/}
                  <div className="d-flex flex-column me-3">
                    {/*begin::Section*/}
                    <div className="mb-3">
                      <a
                        href="apps/ecommerce/sales/details.html"
                        className="text-gray-800 text-hover-primary fs-4 fw-bold"
                      >
                        Iblender
                      </a>
                      <span className="text-gray-500 fw-semibold d-block">
                        The best kitchen gadget in 2022
                      </span>
                    </div>
                    {/*end::Section*/}
                    {/*begin::Section*/}
                    <div className="d-flex align-items-center">
                      <span className="fw-bold text-gray-800 fs-5">$ 350</span>
                      <span className="text-muted mx-2">for</span>
                      <span className="fw-bold text-gray-800 fs-5 me-3">5</span>
                      <a
                        href="#"
                        className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2"
                      >
                        <i className="ki-duotone ki-minus fs-4" />
                      </a>
                      <a
                        href="#"
                        className="btn btn-sm btn-light-success btn-icon w-25px h-25px"
                      >
                        <i className="ki-duotone ki-plus fs-4" />
                      </a>
                    </div>
                    {/*end::Wrapper*/}
                  </div>
                  {/*end::Wrapper*/}
                  {/*begin::Pic*/}
                  <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                    <img src="assets/media/stock/600x400/img-1.jpg" alt="" />
                  </div>
                  {/*end::Pic*/}
                </div>
                {/*end::Item*/}
                {/*begin::Separator*/}
                <div className="separator separator-dashed my-6" />
                {/*end::Separator*/}
                {/*begin::Item*/}
                <div className="d-flex flex-stack">
                  {/*begin::Wrapper*/}
                  <div className="d-flex flex-column me-3">
                    {/*begin::Section*/}
                    <div className="mb-3">
                      <a
                        href="apps/ecommerce/sales/details.html"
                        className="text-gray-800 text-hover-primary fs-4 fw-bold"
                      >
                        SmartCleaner
                      </a>
                      <span className="text-gray-500 fw-semibold d-block">
                        Smart tool for cooking
                      </span>
                    </div>
                    {/*end::Section*/}
                    {/*begin::Section*/}
                    <div className="d-flex align-items-center">
                      <span className="fw-bold text-gray-800 fs-5">$ 650</span>
                      <span className="text-muted mx-2">for</span>
                      <span className="fw-bold text-gray-800 fs-5 me-3">4</span>
                      <a
                        href="#"
                        className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2"
                      >
                        <i className="ki-duotone ki-minus fs-4" />
                      </a>
                      <a
                        href="#"
                        className="btn btn-sm btn-light-success btn-icon w-25px h-25px"
                      >
                        <i className="ki-duotone ki-plus fs-4" />
                      </a>
                    </div>
                    {/*end::Wrapper*/}
                  </div>
                  {/*end::Wrapper*/}
                  {/*begin::Pic*/}
                  <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                    <img src="assets/media/stock/600x400/img-3.jpg" alt="" />
                  </div>
                  {/*end::Pic*/}
                </div>
                {/*end::Item*/}
                {/*begin::Separator*/}
                <div className="separator separator-dashed my-6" />
                {/*end::Separator*/}
                {/*begin::Item*/}
                <div className="d-flex flex-stack">
                  {/*begin::Wrapper*/}
                  <div className="d-flex flex-column me-3">
                    {/*begin::Section*/}
                    <div className="mb-3">
                      <a
                        href="apps/ecommerce/sales/details.html"
                        className="text-gray-800 text-hover-primary fs-4 fw-bold"
                      >
                        CameraMaxr
                      </a>
                      <span className="text-gray-500 fw-semibold d-block">
                        Professional camera for edge
                      </span>
                    </div>
                    {/*end::Section*/}
                    {/*begin::Section*/}
                    <div className="d-flex align-items-center">
                      <span className="fw-bold text-gray-800 fs-5">$ 150</span>
                      <span className="text-muted mx-2">for</span>
                      <span className="fw-bold text-gray-800 fs-5 me-3">3</span>
                      <a
                        href="#"
                        className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2"
                      >
                        <i className="ki-duotone ki-minus fs-4" />
                      </a>
                      <a
                        href="#"
                        className="btn btn-sm btn-light-success btn-icon w-25px h-25px"
                      >
                        <i className="ki-duotone ki-plus fs-4" />
                      </a>
                    </div>
                    {/*end::Wrapper*/}
                  </div>
                  {/*end::Wrapper*/}
                  {/*begin::Pic*/}
                  <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                    <img src="assets/media/stock/600x400/img-8.jpg" alt="" />
                  </div>
                  {/*end::Pic*/}
                </div>
                {/*end::Item*/}
                {/*begin::Separator*/}
                <div className="separator separator-dashed my-6" />
                {/*end::Separator*/}
                {/*begin::Item*/}
                <div className="d-flex flex-stack">
                  {/*begin::Wrapper*/}
                  <div className="d-flex flex-column me-3">
                    {/*begin::Section*/}
                    <div className="mb-3">
                      <a
                        href="apps/ecommerce/sales/details.html"
                        className="text-gray-800 text-hover-primary fs-4 fw-bold"
                      >
                        $D Printer
                      </a>
                      <span className="text-gray-500 fw-semibold d-block">
                        Manfactoring unique objekts
                      </span>
                    </div>
                    {/*end::Section*/}
                    {/*begin::Section*/}
                    <div className="d-flex align-items-center">
                      <span className="fw-bold text-gray-800 fs-5">$ 1450</span>
                      <span className="text-muted mx-2">for</span>
                      <span className="fw-bold text-gray-800 fs-5 me-3">7</span>
                      <a
                        href="#"
                        className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2"
                      >
                        <i className="ki-duotone ki-minus fs-4" />
                      </a>
                      <a
                        href="#"
                        className="btn btn-sm btn-light-success btn-icon w-25px h-25px"
                      >
                        <i className="ki-duotone ki-plus fs-4" />
                      </a>
                    </div>
                    {/*end::Wrapper*/}
                  </div>
                  {/*end::Wrapper*/}
                  {/*begin::Pic*/}
                  <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                    <img src="assets/media/stock/600x400/img-26.jpg" alt="" />
                  </div>
                  {/*end::Pic*/}
                </div>
                {/*end::Item*/}
                {/*begin::Separator*/}
                <div className="separator separator-dashed my-6" />
                {/*end::Separator*/}
                {/*begin::Item*/}
                <div className="d-flex flex-stack">
                  {/*begin::Wrapper*/}
                  <div className="d-flex flex-column me-3">
                    {/*begin::Section*/}
                    <div className="mb-3">
                      <a
                        href="apps/ecommerce/sales/details.html"
                        className="text-gray-800 text-hover-primary fs-4 fw-bold"
                      >
                        MotionWire
                      </a>
                      <span className="text-gray-500 fw-semibold d-block">
                        Perfect animation tool
                      </span>
                    </div>
                    {/*end::Section*/}
                    {/*begin::Section*/}
                    <div className="d-flex align-items-center">
                      <span className="fw-bold text-gray-800 fs-5">$ 650</span>
                      <span className="text-muted mx-2">for</span>
                      <span className="fw-bold text-gray-800 fs-5 me-3">7</span>
                      <a
                        href="#"
                        className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2"
                      >
                        <i className="ki-duotone ki-minus fs-4" />
                      </a>
                      <a
                        href="#"
                        className="btn btn-sm btn-light-success btn-icon w-25px h-25px"
                      >
                        <i className="ki-duotone ki-plus fs-4" />
                      </a>
                    </div>
                    {/*end::Wrapper*/}
                  </div>
                  {/*end::Wrapper*/}
                  {/*begin::Pic*/}
                  <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                    <img src="assets/media/stock/600x400/img-21.jpg" alt="" />
                  </div>
                  {/*end::Pic*/}
                </div>
                {/*end::Item*/}
                {/*begin::Separator*/}
                <div className="separator separator-dashed my-6" />
                {/*end::Separator*/}
                {/*begin::Item*/}
                <div className="d-flex flex-stack">
                  {/*begin::Wrapper*/}
                  <div className="d-flex flex-column me-3">
                    {/*begin::Section*/}
                    <div className="mb-3">
                      <a
                        href="apps/ecommerce/sales/details.html"
                        className="text-gray-800 text-hover-primary fs-4 fw-bold"
                      >
                        Samsung
                      </a>
                      <span className="text-gray-500 fw-semibold d-block">
                        Profile info,Timeline etc
                      </span>
                    </div>
                    {/*end::Section*/}
                    {/*begin::Section*/}
                    <div className="d-flex align-items-center">
                      <span className="fw-bold text-gray-800 fs-5">$ 720</span>
                      <span className="text-muted mx-2">for</span>
                      <span className="fw-bold text-gray-800 fs-5 me-3">6</span>
                      <a
                        href="#"
                        className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2"
                      >
                        <i className="ki-duotone ki-minus fs-4" />
                      </a>
                      <a
                        href="#"
                        className="btn btn-sm btn-light-success btn-icon w-25px h-25px"
                      >
                        <i className="ki-duotone ki-plus fs-4" />
                      </a>
                    </div>
                    {/*end::Wrapper*/}
                  </div>
                  {/*end::Wrapper*/}
                  {/*begin::Pic*/}
                  <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                    <img src="assets/media/stock/600x400/img-34.jpg" alt="" />
                  </div>
                  {/*end::Pic*/}
                </div>
                {/*end::Item*/}
                {/*begin::Separator*/}
                <div className="separator separator-dashed my-6" />
                {/*end::Separator*/}
                {/*begin::Item*/}
                <div className="d-flex flex-stack">
                  {/*begin::Wrapper*/}
                  <div className="d-flex flex-column me-3">
                    {/*begin::Section*/}
                    <div className="mb-3">
                      <a
                        href="apps/ecommerce/sales/details.html"
                        className="text-gray-800 text-hover-primary fs-4 fw-bold"
                      >
                        $D Printer
                      </a>
                      <span className="text-gray-500 fw-semibold d-block">
                        Manfactoring unique objekts
                      </span>
                    </div>
                    {/*end::Section*/}
                    {/*begin::Section*/}
                    <div className="d-flex align-items-center">
                      <span className="fw-bold text-gray-800 fs-5">$ 430</span>
                      <span className="text-muted mx-2">for</span>
                      <span className="fw-bold text-gray-800 fs-5 me-3">8</span>
                      <a
                        href="#"
                        className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2"
                      >
                        <i className="ki-duotone ki-minus fs-4" />
                      </a>
                      <a
                        href="#"
                        className="btn btn-sm btn-light-success btn-icon w-25px h-25px"
                      >
                        <i className="ki-duotone ki-plus fs-4" />
                      </a>
                    </div>
                    {/*end::Wrapper*/}
                  </div>
                  {/*end::Wrapper*/}
                  {/*begin::Pic*/}
                  <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                    <img src="assets/media/stock/600x400/img-27.jpg" alt="" />
                  </div>
                  {/*end::Pic*/}
                </div>
                {/*end::Item*/}
              </div>
              {/*end::Card body*/}
              {/*begin::Card footer*/}
              <div className="card-footer">
                {/*begin::Item*/}
                <div className="d-flex flex-stack">
                  <span className="fw-bold text-gray-600">Total</span>
                  <span className="text-gray-800 fw-bolder fs-5">$ 1840.00</span>
                </div>
                {/*end::Item*/}
                {/*begin::Item*/}
                <div className="d-flex flex-stack">
                  <span className="fw-bold text-gray-600">Sub total</span>
                  <span className="text-primary fw-bolder fs-5">$ 246.35</span>
                </div>
                {/*end::Item*/}
                {/*end::Action*/}
                <div className="d-flex justify-content-end mt-9">
                  <a href="#" className="btn btn-primary d-flex justify-content-end">
                    Pleace Order
                  </a>
                </div>
                {/*end::Action*/}
              </div>
              {/*end::Card footer*/}
            </div>
            {/*end::Messenger*/}
          </div>
          {/*end::Chat drawer*/}
          {/*end::Drawers*/}
          {/*begin::Engage drawers*/}
          {/*begin::Demos drawer*/}
          <div
            id="kt_engage_demos"
            className="bg-body"
            data-kt-drawer="true"
            data-kt-drawer-name="explore"
            data-kt-drawer-activate="true"
            data-kt-drawer-overlay="true"
            data-kt-drawer-width="{default:'350px', 'lg': '475px'}"
            data-kt-drawer-direction="end"
            data-kt-drawer-toggle="#kt_engage_demos_toggle"
            data-kt-drawer-close="#kt_engage_demos_close"
          >
            {/*begin::Card*/}
            <div className="card shadow-none rounded-0 w-100">
              {/*begin::Header*/}
              <div className="card-header" id="kt_engage_demos_header">
                <h3 className="card-title fw-bold text-gray-700">Demos</h3>
                <div className="card-toolbar">
                  <button
                    type="button"
                    className="btn btn-sm btn-icon btn-active-color-primary h-40px w-40px me-n6"
                    id="kt_engage_demos_close"
                  >
                    <i className="ki-duotone ki-cross fs-2">
                      <span className="path1" />
                      <span className="path2" />
                    </i>
                  </button>
                </div>
              </div>
              {/*end::Header*/}
              {/*begin::Body*/}
              <div className="card-body" id="kt_engage_demos_body">
                {/*begin::Content*/}
                <div
                  id="kt_explore_scroll"
                  className="scroll-y me-n5 pe-5"
                  data-kt-scroll="true"
                  data-kt-scroll-height="auto"
                  data-kt-scroll-wrappers="#kt_engage_demos_body"
                  data-kt-scroll-dependencies="#kt_engage_demos_header"
                  data-kt-scroll-offset="5px"
                >
                  {/*begin::Wrapper*/}
                  <div className="mb-0">
                    {/*begin::Heading*/}
                    <div className="mb-7">
                      <div className="d-flex flex-stack">
                        <h3 className="mb-0">Keen Licenses</h3>
                        <a
                          href="https://themes.getbootstrap.com/licenses/"
                          className="fw-semibold"
                          target="_blank"
                        >
                          License FAQs
                        </a>
                      </div>
                    </div>
                    {/*end::Heading*/}
                    {/*begin::License*/}
                    <div className="rounded border border-dashed border-gray-300 py-4 px-6 mb-5">
                      <div className="d-flex flex-stack">
                        <div className="d-flex flex-column">
                          <div className="d-flex align-items-center mb-1">
                            <div className="fs-6 fw-semibold text-gray-800 fw-semibold mb-0 me-1">
                              Standard License
                            </div>
                            <i
                              className="text-gray-500 fas fa-exclamation-circle ms-1 fs-7"
                              data-bs-toggle="popover"
                              data-bs-custom-class="popover-inverse"
                              data-bs-trigger="hover"
                              data-bs-placement="top"
                              data-bs-content="Use, by you or one client in a single site which end users are not charged for"
                            ></i>
                          </div>
                          <div className="fs-7 text-muted">
                            For single site used by you or one client
                          </div>
                        </div>
                        <div className="text-nowrap">
                          <span className="text-muted fs-7 fw-semibold me-n1">$</span>
                          <span className="text-gray-900 fs-1 fw-bold">49</span>
                        </div>
                      </div>
                    </div>
                    {/*end::License*/}
                    {/*begin::License*/}
                    <div className="rounded border border-dashed border-gray-300 py-4 px-6 mb-5">
                      <div className="d-flex flex-stack">
                        <div className="d-flex flex-column">
                          <div className="d-flex align-items-center mb-1">
                            <div className="fs-6 fw-semibold text-gray-800 fw-semibold mb-0 me-1">
                              Multisite License
                            </div>
                            <i
                              className="text-gray-500 fas fa-exclamation-circle ms-1 fs-7"
                              data-bs-toggle="popover"
                              data-bs-custom-class="popover-inverse"
                              data-bs-trigger="hover"
                              data-bs-placement="top"
                              data-bs-content="Use, by you or one client, in a single site which end users can be charged for."
                            ></i>
                          </div>
                          <div className="fs-7 text-muted">
                            For unlimited sites used by you or one client
                          </div>
                        </div>
                        <div className="text-nowrap">
                          <span className="text-muted fs-7 fw-semibold me-n1">$</span>
                          <span className="text-gray-900 fs-1 fw-bold">129</span>
                        </div>
                      </div>
                    </div>
                    {/*end::License*/}
                    {/*begin::License*/}
                    <div className="rounded border border-dashed border-gray-300 py-4 px-6 mb-5">
                      <div className="d-flex flex-stack">
                        <div className="d-flex flex-column">
                          <div className="d-flex align-items-center mb-1">
                            <div className="fs-6 fw-semibold text-gray-800 fw-semibold mb-0 me-1">
                              Extended License
                            </div>
                            <i
                              className="text-gray-500 fas fa-exclamation-circle ms-1 fs-7"
                              data-bs-toggle="popover"
                              data-bs-custom-class="popover-inverse"
                              data-bs-trigger="hover"
                              data-bs-placement="top"
                              data-bs-content="Use, by you or one client, in a single site which end users can be charged for."
                            ></i>
                          </div>
                          <div className="fs-7 text-muted">
                            For single SaaS app with paying users
                          </div>
                        </div>
                        <div className="text-nowrap">
                          <span className="text-muted fs-7 fw-semibold me-n1">$</span>
                          <span className="text-gray-900 fs-1 fw-bold">429</span>
                        </div>
                      </div>
                    </div>
                    {/*end::License*/}
                    {/*begin::License*/}
                    <div className="rounded border border-dashed border-gray-300 py-4 px-6 mb-5">
                      <div className="d-flex flex-stack">
                        <div className="d-flex flex-column">
                          <div className="d-flex align-items-center mb-1">
                            <div className="fs-6 fw-semibold text-gray-800 fw-semibold mb-0 me-1">
                              Custom License
                            </div>
                          </div>
                          <div className="fs-7 text-muted">
                            Reach us for custom license offers.
                          </div>
                        </div>
                        <div className="text-nowrap">
                          <a
                            href="https://keenthemes.com/contact"
                            className="btn btn-sm btn-success"
                            target="_blank"
                          >
                            Contact Us
                          </a>
                        </div>
                      </div>
                    </div>
                    {/*end::License*/}
                    {/*begin::Purchase*/}
                    <a
                      href="https://themes.getbootstrap.com/product/keen-the-ultimate-bootstrap-admin-theme/"
                      className="btn btn-primary fw-bold mb-15 w-100"
                    >
                      Buy Now
                    </a>
                    {/*end::Purchase*/}
                    {/*begin::Demos*/}
                    <div className="mb-0">
                      <h3 className="fw-bold text-center mb-6">9 Keen Demos</h3>
                      {/*begin::Row*/}
                      <div className="row g-5">
                        {/*begin::Col*/}
                        <div className="col-6">
                          {/*begin::Demo*/}
                          <div className="overlay overflow-hidden position-relative border border-4 border-success rounded">
                            <div className="overlay-wrapper">
                              <img
                                src="assets/media/preview/demos/demo1/light-ltr.png"
                                alt="demo"
                                className="w-100"
                              />
                            </div>
                            <div className="overlay-layer bg-dark bg-opacity-10">
                              <a
                                href="index.html"
                                className="btn btn-sm btn-success shadow"
                              >
                                Demo 1
                              </a>
                            </div>
                          </div>
                          {/*end::Demo*/}
                        </div>
                        {/*end::Col*/}
                        {/*begin::Col*/}
                        <div className="col-6">
                          {/*begin::Demo*/}
                          <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                            <div className="overlay-wrapper">
                              <img
                                src="assets/media/preview/demos/demo2/light-ltr.png"
                                alt="demo"
                                className="w-100"
                              />
                            </div>
                            <div className="overlay-layer bg-dark bg-opacity-10">
                              <a
                                href="https://preview.keenthemes.com/keen/demo2/index.html"
                                className="btn btn-sm btn-success shadow"
                              >
                                Demo 2
                              </a>
                            </div>
                          </div>
                          {/*end::Demo*/}
                        </div>
                        {/*end::Col*/}
                        {/*begin::Col*/}
                        <div className="col-6">
                          {/*begin::Demo*/}
                          <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                            <div className="overlay-wrapper">
                              <img
                                src="assets/media/preview/demos/demo3/light-ltr.png"
                                alt="demo"
                                className="w-100"
                              />
                            </div>
                            <div className="overlay-layer bg-dark bg-opacity-10">
                              <a
                                href="https://preview.keenthemes.com/keen/demo3/index.html"
                                className="btn btn-sm btn-success shadow"
                              >
                                Demo 3
                              </a>
                            </div>
                          </div>
                          {/*end::Demo*/}
                        </div>
                        {/*end::Col*/}
                        {/*begin::Col*/}
                        <div className="col-6">
                          {/*begin::Demo*/}
                          <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                            <div className="overlay-wrapper">
                              <img
                                src="assets/media/preview/demos/demo4/light-ltr.png"
                                alt="demo"
                                className="w-100"
                              />
                            </div>
                            <div className="overlay-layer bg-dark bg-opacity-10">
                              <a
                                href="https://preview.keenthemes.com/keen/demo4/index.html"
                                className="btn btn-sm btn-success shadow"
                              >
                                Demo 4
                              </a>
                            </div>
                          </div>
                          {/*end::Demo*/}
                        </div>
                        {/*end::Col*/}
                        {/*begin::Col*/}
                        <div className="col-6">
                          {/*begin::Demo*/}
                          <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                            <div className="overlay-wrapper">
                              <img
                                src="assets/media/preview/demos/demo5/light-ltr.png"
                                alt="demo"
                                className="w-100"
                              />
                            </div>
                            <div className="overlay-layer bg-dark bg-opacity-10">
                              <a
                                href="https://preview.keenthemes.com/keen/demo5/index.html"
                                className="btn btn-sm btn-success shadow"
                              >
                                Demo 5
                              </a>
                            </div>
                          </div>
                          {/*end::Demo*/}
                        </div>
                        {/*end::Col*/}
                        {/*begin::Col*/}
                        <div className="col-6">
                          {/*begin::Demo*/}
                          <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                            <div className="overlay-wrapper">
                              <img
                                src="assets/media/preview/demos/demo6/light-ltr.png"
                                alt="demo"
                                className="w-100"
                              />
                            </div>
                            <div className="overlay-layer bg-dark bg-opacity-10">
                              <a
                                href="https://preview.keenthemes.com/keen/demo6/index.html"
                                className="btn btn-sm btn-success shadow"
                              >
                                Demo 6
                              </a>
                            </div>
                          </div>
                          {/*end::Demo*/}
                        </div>
                        {/*end::Col*/}
                        {/*begin::Col*/}
                        <div className="col-6">
                          {/*begin::Demo*/}
                          <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                            <div className="overlay-wrapper">
                              <img
                                src="assets/media/preview/demos/demo7/light-ltr.png"
                                alt="demo"
                                className="w-100"
                              />
                            </div>
                            <div className="overlay-layer bg-dark bg-opacity-10">
                              <a
                                href="https://preview.keenthemes.com/keen/demo7/index.html"
                                className="btn btn-sm btn-success shadow"
                              >
                                Demo 7
                              </a>
                            </div>
                          </div>
                          {/*end::Demo*/}
                        </div>
                        {/*end::Col*/}
                        {/*begin::Col*/}
                        <div className="col-6">
                          {/*begin::Demo*/}
                          <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                            <div className="overlay-wrapper">
                              <img
                                src="assets/media/preview/demos/demo8/light-ltr.png"
                                alt="demo"
                                className="w-100"
                              />
                            </div>
                            <div className="overlay-layer bg-dark bg-opacity-10">
                              <a
                                href="https://preview.keenthemes.com/keen/demo8/index.html"
                                className="btn btn-sm btn-success shadow"
                              >
                                Demo 8
                              </a>
                            </div>
                          </div>
                          {/*end::Demo*/}
                        </div>
                        {/*end::Col*/}
                        {/*begin::Col*/}
                        <div className="col-6">
                          {/*begin::Demo*/}
                          <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                            <div className="overlay-wrapper">
                              <img
                                src="assets/media/preview/demos/demo9/light-ltr.png"
                                alt="demo"
                                className="w-100"
                              />
                            </div>
                            <div className="overlay-layer bg-dark bg-opacity-10">
                              <a
                                href="https://preview.keenthemes.com/keen/demo9/index.html"
                                className="btn btn-sm btn-success shadow"
                              >
                                Demo 9
                              </a>
                            </div>
                          </div>
                          {/*end::Demo*/}
                        </div>
                        {/*end::Col*/}
                      </div>
                      {/*end::Row*/}
                    </div>
                    {/*end::Demos*/}
                  </div>
                  {/*end::Wrapper*/}
                </div>
                {/*end::Content*/}
              </div>
              {/*end::Body*/}
            </div>
            {/*end::Card*/}
          </div>
          {/*end::Demos drawer*/}
          {/*begin::Help drawer*/}
          <div
            id="kt_help"
            className="bg-body"
            data-kt-drawer="true"
            data-kt-drawer-name="help"
            data-kt-drawer-activate="true"
            data-kt-drawer-overlay="true"
            data-kt-drawer-width="{default:'350px', 'md': '525px'}"
            data-kt-drawer-direction="end"
            data-kt-drawer-toggle="#kt_help_toggle"
            data-kt-drawer-close="#kt_help_close"
          >
            {/*begin::Card*/}
            <div className="card shadow-none rounded-0 w-100">
              {/*begin::Header*/}
              <div className="card-header" id="kt_help_header">
                <h5 className="card-title fw-semibold text-gray-600">
                  Learn &amp; Get Inspired
                </h5>
                <div className="card-toolbar">
                  <button
                    type="button"
                    className="btn btn-sm btn-icon explore-btn-dismiss me-n5"
                    id="kt_help_close"
                  >
                    <i className="ki-duotone ki-cross fs-2">
                      <span className="path1" />
                      <span className="path2" />
                    </i>
                  </button>
                </div>
              </div>
              {/*end::Header*/}
              {/*begin::Body*/}
              <div className="card-body" id="kt_help_body">
                {/*begin::Content*/}
                <div
                  id="kt_help_scroll"
                  className="hover-scroll-overlay-y"
                  data-kt-scroll="true"
                  data-kt-scroll-height="auto"
                  data-kt-scroll-wrappers="#kt_help_body"
                  data-kt-scroll-dependencies="#kt_help_header"
                  data-kt-scroll-offset="5px"
                >
                  {/*begin::Support*/}
                  <div className="rounded border border-dashed border-gray-300 p-6 p-lg-8 mb-10">
                    {/*begin::Heading*/}
                    <h2 className="fw-bold mb-5">
                      Support at
                      <a href="https://devs.keenthemes.com/" className="">
                        devs.keenthemes.com
                      </a>
                    </h2>
                    {/*end::Heading*/}
                    {/*begin::Description*/}
                    <div className="fs-5 fw-semibold mb-5">
                      <span className="text-gray-500">
                        Join our developers community to find answer to your question
                        and help others.
                      </span>
                      <a
                        className="explore-link d-none"
                        href="https://keenthemes.com/licensing"
                      >
                        FAQs
                      </a>
                    </div>
                    {/*end::Description*/}
                    {/*begin::Link*/}
                    <a
                      href="https://devs.keenthemes.com/"
                      className="btn btn-lg explore-btn-primary w-100"
                    >
                      Get Support
                    </a>
                    {/*end::Link*/}
                  </div>
                  {/*end::Support*/}
                  {/*begin::Link*/}
                  <a
                    href="https://preview.keenthemes.com/html/keen/docs"
                    className="parent-hover d-flex align-items-center mb-7"
                  >
                    {/*begin::Icon*/}
                    <div className="d-flex flex-center w-50px h-50px w-lg-75px h-lg-75px flex-shrink-0 rounded bg-light-warning">
                      <i className="ki-duotone ki-abstract-26 text-warning fs-2x fs-lg-3x">
                        <span className="path1" />
                        <span className="path2" />
                      </i>
                    </div>
                    {/*end::Icon*/}
                    {/*begin::Info*/}
                    <div className="d-flex flex-stack flex-grow-1 ms-4 ms-lg-6">
                      {/*begin::Wrapper*/}
                      <div className="d-flex flex-column me-2 me-lg-5">
                        {/*begin::Title*/}
                        <div className="text-gray-900 parent-hover-primary fw-bold fs-6 fs-lg-4 mb-1">
                          Documentation
                        </div>
                        {/*end::Title*/}
                        {/*begin::Description*/}
                        <div className="text-muted fw-semibold fs-7 fs-lg-6">
                          From guides and how-tos, to live demos and code examples to
                          get started right away.
                        </div>
                        {/*end::Description*/}
                      </div>
                      {/*end::Wrapper*/}
                      <i className="ki-duotone ki-arrow-right text-gray-500 fs-2">
                        <span className="path1" />
                        <span className="path2" />
                      </i>
                    </div>
                    {/*end::Info*/}
                  </a>
                  {/*end::Link*/}
                  {/*begin::Link*/}
                  <a
                    href="https://preview.keenthemes.com/html/keen/docs/base/utilities"
                    className="parent-hover d-flex align-items-center mb-7"
                  >
                    {/*begin::Icon*/}
                    <div className="d-flex flex-center w-50px h-50px w-lg-75px h-lg-75px flex-shrink-0 rounded bg-light-primary">
                      <i className="ki-duotone ki-wallet text-primary fs-2x fs-lg-3x">
                        <span className="path1" />
                        <span className="path2" />
                        <span className="path3" />
                        <span className="path4" />
                      </i>
                    </div>
                    {/*end::Icon*/}
                    {/*begin::Info*/}
                    <div className="d-flex flex-stack flex-grow-1 ms-4 ms-lg-6">
                      {/*begin::Wrapper*/}
                      <div className="d-flex flex-column me-2 me-lg-5">
                        {/*begin::Title*/}
                        <div className="text-gray-900 parent-hover-primary fw-bold fs-6 fs-lg-4 mb-1">
                          Plugins &amp; Components
                        </div>
                        {/*end::Title*/}
                        {/*begin::Description*/}
                        <div className="text-muted fw-semibold fs-7 fs-lg-6">
                          Check out our 300+ in-house components and customized
                          3rd-party plugins.
                        </div>
                        {/*end::Description*/}
                      </div>
                      {/*end::Wrapper*/}
                      <i className="ki-duotone ki-arrow-right text-gray-500 fs-2">
                        <span className="path1" />
                        <span className="path2" />
                      </i>
                    </div>
                    {/*end::Info*/}
                  </a>
                  {/*end::Link*/}
                  {/*begin::Link*/}
                  <a
                    href="layout-builder.html"
                    className="parent-hover d-flex align-items-center mb-7"
                  >
                    {/*begin::Icon*/}
                    <div className="d-flex flex-center w-50px h-50px w-lg-75px h-lg-75px flex-shrink-0 rounded bg-light-info">
                      <i className="ki-duotone ki-design text-info fs-2x fs-lg-3x">
                        <span className="path1" />
                        <span className="path2" />
                      </i>
                    </div>
                    {/*end::Icon*/}
                    {/*begin::Info*/}
                    <div className="d-flex flex-stack flex-grow-1 ms-4 ms-lg-6">
                      {/*begin::Wrapper*/}
                      <div className="d-flex flex-column me-2 me-lg-5">
                        {/*begin::Title*/}
                        <div className="text-gray-900 parent-hover-primary fw-bold fs-6 fs-lg-4 mb-1">
                          Layout Builder
                        </div>
                        {/*end::Title*/}
                        {/*begin::Description*/}
                        <div className="text-muted fw-semibold fs-7 fs-lg-6">
                          Build your layout, preview it and export the HTML for server
                          side integration.
                        </div>
                        {/*end::Description*/}
                      </div>
                      {/*end::Wrapper*/}
                      <i className="ki-duotone ki-arrow-right text-gray-500 fs-2">
                        <span className="path1" />
                        <span className="path2" />
                      </i>
                    </div>
                    {/*end::Info*/}
                  </a>
                  {/*end::Link*/}
                  {/*begin::Link*/}
                  <a
                    href="https://preview.keenthemes.com/html/keen/docs/getting-started/changelog"
                    className="parent-hover d-flex align-items-center mb-7"
                  >
                    {/*begin::Icon*/}
                    <div className="d-flex flex-center w-50px h-50px w-lg-75px h-lg-75px flex-shrink-0 rounded bg-light-danger">
                      <i className="ki-duotone ki-keyboard text-danger fs-2x fs-lg-3x">
                        <span className="path1" />
                        <span className="path2" />
                      </i>
                    </div>
                    {/*end::Icon*/}
                    {/*begin::Info*/}
                    <div className="d-flex flex-stack flex-grow-1 ms-4 ms-lg-6">
                      {/*begin::Wrapper*/}
                      <div className="d-flex flex-column me-2 me-lg-5">
                        {/*begin::Title*/}
                        <div className="text-gray-900 parent-hover-primary fw-bold fs-6 fs-lg-4 mb-1">
                          What's New ?
                        </div>
                        {/*end::Title*/}
                        {/*begin::Description*/}
                        <div className="text-muted fw-semibold fs-7 fs-lg-6">
                          Latest features and improvements added with our users feedback
                          in mind.
                        </div>
                        {/*end::Description*/}
                      </div>
                      {/*end::Wrapper*/}
                      <i className="ki-duotone ki-arrow-right text-gray-500 fs-2">
                        <span className="path1" />
                        <span className="path2" />
                      </i>
                    </div>
                    {/*end::Info*/}
                  </a>
                  {/*end::Link*/}
                </div>
                {/*end::Content*/}
              </div>
              {/*end::Body*/}
            </div>
            {/*end::Card*/}
          </div>
          {/*end::Help drawer*/}
          {/*end::Engage drawers*/}
          {/*begin::Engage toolbar*/}
          <div className="engage-toolbar d-flex position-fixed px-5 fw-bold zindex-2 top-50 end-0 transform-90 mt-5 mt-lg-20 gap-2">
            {/*begin::Demos drawer toggle*/}
            <button
              id="kt_engage_demos_toggle"
              className="engage-demos-toggle engage-btn btn shadow-sm fs-6 px-4 rounded-top-0"
              title="Check out 9 more demos"
              data-bs-toggle="tooltip"
              data-bs-custom-class="tooltip-inverse"
              data-bs-placement="left"
              data-bs-dismiss="click"
              data-bs-trigger="hover"
            >
              <span id="kt_engage_demos_label"> Demos </span>
            </button>
            {/*end::Demos drawer toggle*/}
            {/*begin::Help drawer toggle*/}
            <button
              id="kt_help_toggle"
              className="engage-help-toggle btn engage-btn shadow-sm px-5 rounded-top-0"
              title="Learn & Get Inspired"
              data-bs-toggle="tooltip"
              data-bs-custom-class="tooltip-inverse"
              data-bs-placement="left"
              data-bs-dismiss="click"
              data-bs-trigger="hover"
            >
              Help
            </button>
            {/*end::Help drawer toggle*/}
          </div>
          {/*end::Engage toolbar*/}
          {/*begin::Scrolltop*/}
          <div id="kt_scrolltop" className="scrolltop" data-kt-scrolltop="true">
            <i className="ki-duotone ki-arrow-up">
              <span className="path1" />
              <span className="path2" />
            </i>
          </div>
          {/*end::Scrolltop*/}
          {/*begin::Modals*/}
          {/*begin::Modal - Upgrade plan*/}
          <div
            className="modal fade"
            id="kt_modal_upgrade_plan"
            tabIndex={-1}
            aria-hidden="true"
          >
            {/*begin::Modal dialog*/}
            <div className="modal-dialog modal-xl">
              {/*begin::Modal content*/}
              <div className="modal-content rounded">
                {/*begin::Modal header*/}
                <div className="modal-header justify-content-end border-0 pb-0">
                  {/*begin::Close*/}
                  <div
                    className="btn btn-sm btn-icon btn-active-color-primary"
                    data-bs-dismiss="modal"
                  >
                    <i className="ki-duotone ki-cross fs-1">
                      <span className="path1" />
                      <span className="path2" />
                    </i>
                  </div>
                  {/*end::Close*/}
                </div>
                {/*end::Modal header*/}
                {/*begin::Modal body*/}
                <div className="modal-body pt-0 pb-15 px-5 px-xl-20">
                  {/*begin::Heading*/}
                  <div className="mb-13 text-center">
                    <h1 className="mb-3">Upgrade a Plan</h1>
                    <div className="text-muted fw-semibold fs-5">
                      If you need more info, please check
                      <a href="#" className="link-primary fw-bold">
                        Pricing Guidelines
                      </a>
                      .
                    </div>
                  </div>
                  {/*end::Heading*/}
                  {/*begin::Plans*/}
                  <div className="d-flex flex-column">
                    {/*begin::Nav group*/}
                    <div
                      className="nav-group nav-group-outline mx-auto"
                      data-kt-buttons="true"
                    >
                      <button
                        className="btn btn-color-gray-500 btn-active btn-active-secondary px-6 py-3 me-2 active"
                        data-kt-plan="month"
                      >
                        Monthly
                      </button>
                      <button
                        className="btn btn-color-gray-500 btn-active btn-active-secondary px-6 py-3"
                        data-kt-plan="annual"
                      >
                        Annual
                      </button>
                    </div>
                    {/*end::Nav group*/}
                    {/*begin::Row*/}
                    <div className="row mt-10">
                      {/*begin::Col*/}
                      <div className="col-lg-6 mb-10 mb-lg-0">
                        {/*begin::Tabs*/}
                        <div className="nav flex-column">
                          {/*begin::Tab link*/}
                          <label
                            className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6 active mb-6"
                            data-bs-toggle="tab"
                            data-bs-target="#kt_upgrade_plan_startup"
                          >
                            {/*end::Description*/}
                            <div className="d-flex align-items-center me-2">
                              {/*begin::Radio*/}
                              <div className="form-check form-check-custom form-check-solid form-check-success flex-shrink-0 me-6">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="plan"
                                  defaultChecked="checked"
                                  defaultValue="startup"
                                />
                              </div>
                              {/*end::Radio*/}
                              {/*begin::Info*/}
                              <div className="flex-grow-1">
                                <div className="d-flex align-items-center fs-2 fw-bold flex-wrap">
                                  Startup
                                </div>
                                <div className="fw-semibold opacity-75">
                                  Best for startups
                                </div>
                              </div>
                              {/*end::Info*/}
                            </div>
                            {/*end::Description*/}
                            {/*begin::Price*/}
                            <div className="ms-5">
                              <span className="mb-2">$</span>
                              <span
                                className="fs-3x fw-bold"
                                data-kt-plan-price-month={39}
                                data-kt-plan-price-annual={399}
                              >
                                39
                              </span>
                              <span className="fs-7 opacity-50">
                                /<span data-kt-element="period">Mon</span>
                              </span>
                            </div>
                            {/*end::Price*/}
                          </label>
                          {/*end::Tab link*/}
                          {/*begin::Tab link*/}
                          <label
                            className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6 mb-6"
                            data-bs-toggle="tab"
                            data-bs-target="#kt_upgrade_plan_advanced"
                          >
                            {/*end::Description*/}
                            <div className="d-flex align-items-center me-2">
                              {/*begin::Radio*/}
                              <div className="form-check form-check-custom form-check-solid form-check-success flex-shrink-0 me-6">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="plan"
                                  defaultValue="advanced"
                                />
                              </div>
                              {/*end::Radio*/}
                              {/*begin::Info*/}
                              <div className="flex-grow-1">
                                <div className="d-flex align-items-center fs-2 fw-bold flex-wrap">
                                  Advanced
                                </div>
                                <div className="fw-semibold opacity-75">
                                  Best for 100+ team size
                                </div>
                              </div>
                              {/*end::Info*/}
                            </div>
                            {/*end::Description*/}
                            {/*begin::Price*/}
                            <div className="ms-5">
                              <span className="mb-2">$</span>
                              <span
                                className="fs-3x fw-bold"
                                data-kt-plan-price-month={339}
                                data-kt-plan-price-annual={3399}
                              >
                                339
                              </span>
                              <span className="fs-7 opacity-50">
                                /<span data-kt-element="period">Mon</span>
                              </span>
                            </div>
                            {/*end::Price*/}
                          </label>
                          {/*end::Tab link*/}
                          {/*begin::Tab link*/}
                          <label
                            className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6 mb-6"
                            data-bs-toggle="tab"
                            data-bs-target="#kt_upgrade_plan_enterprise"
                          >
                            {/*end::Description*/}
                            <div className="d-flex align-items-center me-2">
                              {/*begin::Radio*/}
                              <div className="form-check form-check-custom form-check-solid form-check-success flex-shrink-0 me-6">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="plan"
                                  defaultValue="enterprise"
                                />
                              </div>
                              {/*end::Radio*/}
                              {/*begin::Info*/}
                              <div className="flex-grow-1">
                                <div className="d-flex align-items-center fs-2 fw-bold flex-wrap">
                                  Enterprise
                                  <span className="badge badge-light-success ms-2 py-2 px-3 fs-7">
                                    Popular
                                  </span>
                                </div>
                                <div className="fw-semibold opacity-75">
                                  Best value for 1000+ team
                                </div>
                              </div>
                              {/*end::Info*/}
                            </div>
                            {/*end::Description*/}
                            {/*begin::Price*/}
                            <div className="ms-5">
                              <span className="mb-2">$</span>
                              <span
                                className="fs-3x fw-bold"
                                data-kt-plan-price-month={999}
                                data-kt-plan-price-annual={9999}
                              >
                                999
                              </span>
                              <span className="fs-7 opacity-50">
                                /<span data-kt-element="period">Mon</span>
                              </span>
                            </div>
                            {/*end::Price*/}
                          </label>
                          {/*end::Tab link*/}
                          {/*begin::Tab link*/}
                          <label
                            className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6 mb-6"
                            data-bs-toggle="tab"
                            data-bs-target="#kt_upgrade_plan_custom"
                          >
                            {/*end::Description*/}
                            <div className="d-flex align-items-center me-2">
                              {/*begin::Radio*/}
                              <div className="form-check form-check-custom form-check-solid form-check-success flex-shrink-0 me-6">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="plan"
                                  defaultValue="custom"
                                />
                              </div>
                              {/*end::Radio*/}
                              {/*begin::Info*/}
                              <div className="flex-grow-1">
                                <div className="d-flex align-items-center fs-2 fw-bold flex-wrap">
                                  Custom
                                </div>
                                <div className="fw-semibold opacity-75">
                                  Requet a custom license
                                </div>
                              </div>
                              {/*end::Info*/}
                            </div>
                            {/*end::Description*/}
                            {/*begin::Price*/}
                            <div className="ms-5">
                              <a href="#" className="btn btn-sm btn-success">
                                Contact Us
                              </a>
                            </div>
                            {/*end::Price*/}
                          </label>
                          {/*end::Tab link*/}
                        </div>
                        {/*end::Tabs*/}
                      </div>
                      {/*end::Col*/}
                      {/*begin::Col*/}
                      <div className="col-lg-6">
                        {/*begin::Tab content*/}
                        <div className="tab-content rounded h-100 bg-light p-10">
                          {/*begin::Tab Pane*/}
                          <div
                            className="tab-pane fade show active"
                            id="kt_upgrade_plan_startup"
                          >
                            {/*begin::Heading*/}
                            <div className="pb-5">
                              <h2 className="fw-bold text-gray-900">
                                What’s in Startup Plan?
                              </h2>
                              <div className="text-muted fw-semibold">
                                Optimal for 10+ team size and new startup
                              </div>
                            </div>
                            {/*end::Heading*/}
                            {/*begin::Body*/}
                            <div className="pt-1">
                              {/*begin::Item*/}
                              <div className="d-flex align-items-center mb-7">
                                <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                  Up to 10 Active Users
                                </span>
                                <i className="ki-duotone ki-check-circle fs-1 text-success">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>
                              </div>
                              {/*end::Item*/}
                              {/*begin::Item*/}
                              <div className="d-flex align-items-center mb-7">
                                <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                  Up to 30 Project Integrations
                                </span>
                                <i className="ki-duotone ki-check-circle fs-1 text-success">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>
                              </div>
                              {/*end::Item*/}
                              {/*begin::Item*/}
                              <div className="d-flex align-items-center mb-7">
                                <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                  Analytics Module
                                </span>
                                <i className="ki-duotone ki-check-circle fs-1 text-success">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>
                              </div>
                              {/*end::Item*/}
                              {/*begin::Item*/}
                              <div className="d-flex align-items-center mb-7">
                                <span className="fw-semibold fs-5 text-muted flex-grow-1">
                                  Finance Module
                                </span>
                                <i className="ki-duotone ki-cross-circle fs-1">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>
                              </div>
                              {/*end::Item*/}
                              {/*begin::Item*/}
                              <div className="d-flex align-items-center mb-7">
                                <span className="fw-semibold fs-5 text-muted flex-grow-1">
                                  Accounting Module
                                </span>
                                <i className="ki-duotone ki-cross-circle fs-1">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>
                              </div>
                              {/*end::Item*/}
                              {/*begin::Item*/}
                              <div className="d-flex align-items-center mb-7">
                                <span className="fw-semibold fs-5 text-muted flex-grow-1">
                                  Network Platform
                                </span>
                                <i className="ki-duotone ki-cross-circle fs-1">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>
                              </div>
                              {/*end::Item*/}
                              {/*begin::Item*/}
                              <div className="d-flex align-items-center">
                                <span className="fw-semibold fs-5 text-muted flex-grow-1">
                                  Unlimited Cloud Space
                                </span>
                                <i className="ki-duotone ki-cross-circle fs-1">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>
                              </div>
                              {/*end::Item*/}
                            </div>
                            {/*end::Body*/}
                          </div>
                          {/*end::Tab Pane*/}
                          {/*begin::Tab Pane*/}
                          <div className="tab-pane fade" id="kt_upgrade_plan_advanced">
                            {/*begin::Heading*/}
                            <div className="pb-5">
                              <h2 className="fw-bold text-gray-900">
                                What’s in Startup Plan?
                              </h2>
                              <div className="text-muted fw-semibold">
                                Optimal for 100+ team size and grown company
                              </div>
                            </div>
                            {/*end::Heading*/}
                            {/*begin::Body*/}
                            <div className="pt-1">
                              {/*begin::Item*/}
                              <div className="d-flex align-items-center mb-7">
                                <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                  Up to 10 Active Users
                                </span>
                                <i className="ki-duotone ki-check-circle fs-1 text-success">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>
                              </div>
                              {/*end::Item*/}
                              {/*begin::Item*/}
                              <div className="d-flex align-items-center mb-7">
                                <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                  Up to 30 Project Integrations
                                </span>
                                <i className="ki-duotone ki-check-circle fs-1 text-success">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>
                              </div>
                              {/*end::Item*/}
                              {/*begin::Item*/}
                              <div className="d-flex align-items-center mb-7">
                                <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                  Analytics Module
                                </span>
                                <i className="ki-duotone ki-check-circle fs-1 text-success">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>
                              </div>
                              {/*end::Item*/}
                              {/*begin::Item*/}
                              <div className="d-flex align-items-center mb-7">
                                <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                  Finance Module
                                </span>
                                <i className="ki-duotone ki-check-circle fs-1 text-success">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>
                              </div>
                              {/*end::Item*/}
                              {/*begin::Item*/}
                              <div className="d-flex align-items-center mb-7">
                                <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                  Accounting Module
                                </span>
                                <i className="ki-duotone ki-check-circle fs-1 text-success">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>
                              </div>
                              {/*end::Item*/}
                              {/*begin::Item*/}
                              <div className="d-flex align-items-center mb-7">
                                <span className="fw-semibold fs-5 text-muted flex-grow-1">
                                  Network Platform
                                </span>
                                <i className="ki-duotone ki-cross-circle fs-1">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>
                              </div>
                              {/*end::Item*/}
                              {/*begin::Item*/}
                              <div className="d-flex align-items-center">
                                <span className="fw-semibold fs-5 text-muted flex-grow-1">
                                  Unlimited Cloud Space
                                </span>
                                <i className="ki-duotone ki-cross-circle fs-1">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>
                              </div>
                              {/*end::Item*/}
                            </div>
                            {/*end::Body*/}
                          </div>
                          {/*end::Tab Pane*/}
                          {/*begin::Tab Pane*/}
                          <div
                            className="tab-pane fade"
                            id="kt_upgrade_plan_enterprise"
                          >
                            {/*begin::Heading*/}
                            <div className="pb-5">
                              <h2 className="fw-bold text-gray-900">
                                What’s in Startup Plan?
                              </h2>
                              <div className="text-muted fw-semibold">
                                Optimal for 1000+ team and enterpise
                              </div>
                            </div>
                            {/*end::Heading*/}
                            {/*begin::Body*/}
                            <div className="pt-1">
                              {/*begin::Item*/}
                              <div className="d-flex align-items-center mb-7">
                                <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                  Up to 10 Active Users
                                </span>
                                <i className="ki-duotone ki-check-circle fs-1 text-success">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>
                              </div>
                              {/*end::Item*/}
                              {/*begin::Item*/}
                              <div className="d-flex align-items-center mb-7">
                                <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                  Up to 30 Project Integrations
                                </span>
                                <i className="ki-duotone ki-check-circle fs-1 text-success">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>
                              </div>
                              {/*end::Item*/}
                              {/*begin::Item*/}
                              <div className="d-flex align-items-center mb-7">
                                <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                  Analytics Module
                                </span>
                                <i className="ki-duotone ki-check-circle fs-1 text-success">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>
                              </div>
                              {/*end::Item*/}
                              {/*begin::Item*/}
                              <div className="d-flex align-items-center mb-7">
                                <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                  Finance Module
                                </span>
                                <i className="ki-duotone ki-check-circle fs-1 text-success">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>
                              </div>
                              {/*end::Item*/}
                              {/*begin::Item*/}
                              <div className="d-flex align-items-center mb-7">
                                <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                  Accounting Module
                                </span>
                                <i className="ki-duotone ki-check-circle fs-1 text-success">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>
                              </div>
                              {/*end::Item*/}
                              {/*begin::Item*/}
                              <div className="d-flex align-items-center mb-7">
                                <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                  Network Platform
                                </span>
                                <i className="ki-duotone ki-check-circle fs-1 text-success">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>
                              </div>
                              {/*end::Item*/}
                              {/*begin::Item*/}
                              <div className="d-flex align-items-center">
                                <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                  Unlimited Cloud Space
                                </span>
                                <i className="ki-duotone ki-check-circle fs-1 text-success">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>
                              </div>
                              {/*end::Item*/}
                            </div>
                            {/*end::Body*/}
                          </div>
                          {/*end::Tab Pane*/}
                          {/*begin::Tab Pane*/}
                          <div className="tab-pane fade" id="kt_upgrade_plan_custom">
                            {/*begin::Heading*/}
                            <div className="pb-5">
                              <h2 className="fw-bold text-gray-900">
                                What’s in Startup Plan?
                              </h2>
                              <div className="text-muted fw-semibold">
                                Optimal for corporations
                              </div>
                            </div>
                            {/*end::Heading*/}
                            {/*begin::Body*/}
                            <div className="pt-1">
                              {/*begin::Item*/}
                              <div className="d-flex align-items-center mb-7">
                                <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                  Unlimited Users
                                </span>
                                <i className="ki-duotone ki-check-circle fs-1 text-success">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>
                              </div>
                              {/*end::Item*/}
                              {/*begin::Item*/}
                              <div className="d-flex align-items-center mb-7">
                                <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                  Unlimited Project Integrations
                                </span>
                                <i className="ki-duotone ki-check-circle fs-1 text-success">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>
                              </div>
                              {/*end::Item*/}
                              {/*begin::Item*/}
                              <div className="d-flex align-items-center mb-7">
                                <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                  Analytics Module
                                </span>
                                <i className="ki-duotone ki-check-circle fs-1 text-success">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>
                              </div>
                              {/*end::Item*/}
                              {/*begin::Item*/}
                              <div className="d-flex align-items-center mb-7">
                                <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                  Finance Module
                                </span>
                                <i className="ki-duotone ki-check-circle fs-1 text-success">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>
                              </div>
                              {/*end::Item*/}
                              {/*begin::Item*/}
                              <div className="d-flex align-items-center mb-7">
                                <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                  Accounting Module
                                </span>
                                <i className="ki-duotone ki-check-circle fs-1 text-success">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>
                              </div>
                              {/*end::Item*/}
                              {/*begin::Item*/}
                              <div className="d-flex align-items-center mb-7">
                                <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                  Network Platform
                                </span>
                                <i className="ki-duotone ki-check-circle fs-1 text-success">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>
                              </div>
                              {/*end::Item*/}
                              {/*begin::Item*/}
                              <div className="d-flex align-items-center">
                                <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                  Unlimited Cloud Space
                                </span>
                                <i className="ki-duotone ki-check-circle fs-1 text-success">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>
                              </div>
                              {/*end::Item*/}
                            </div>
                            {/*end::Body*/}
                          </div>
                          {/*end::Tab Pane*/}
                        </div>
                        {/*end::Tab content*/}
                      </div>
                      {/*end::Col*/}
                    </div>
                    {/*end::Row*/}
                  </div>
                  {/*end::Plans*/}
                  {/*begin::Actions*/}
                  <div className="d-flex flex-center flex-row-fluid pt-12">
                    <button
                      type="reset"
                      className="btn btn-light me-3"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      id="kt_modal_upgrade_plan_btn"
                    >
                      {/*begin::Indicator label*/}
                      <span className="indicator-label"> Upgrade Plan</span>
                      {/*end::Indicator label*/}
                      {/*begin::Indicator progress*/}
                      <span className="indicator-progress">
                        Please wait...
                        <span className="spinner-border spinner-border-sm align-middle ms-2" />
                      </span>
                      {/*end::Indicator progress*/}
                    </button>
                  </div>
                  {/*end::Actions*/}
                </div>
                {/*end::Modal body*/}
              </div>
              {/*end::Modal content*/}
            </div>
            {/*end::Modal dialog*/}
          </div>
          {/*end::Modal - Upgrade plan*/}
          {/*begin::Modal - Create Campaign*/}
          <div
            className="modal fade"
            id="kt_modal_create_campaign"
            tabIndex={-1}
            aria-hidden="true"
          >
            {/*begin::Modal dialog*/}
            <div className="modal-dialog modal-fullscreen p-9">
              {/*begin::Modal content*/}
              <div className="modal-content modal-rounded">
                {/*begin::Modal header*/}
                <div className="modal-header py-7 d-flex justify-content-between">
                  {/*begin::Modal title*/}
                  <h2>Create Campaign</h2>
                  {/*end::Modal title*/}
                  {/*begin::Close*/}
                  <div
                    className="btn btn-sm btn-icon btn-active-color-primary"
                    data-bs-dismiss="modal"
                  >
                    <i className="ki-duotone ki-cross fs-1">
                      <span className="path1" />
                      <span className="path2" />
                    </i>
                  </div>
                  {/*end::Close*/}
                </div>
                {/*begin::Modal header*/}
                {/*begin::Modal body*/}
                <div className="modal-body scroll-y m-5">
                  {/*begin::Stepper*/}
                  <div
                    className="stepper stepper-links d-flex flex-column"
                    id="kt_modal_create_campaign_stepper"
                  >
                    {/*begin::Nav*/}
                    <div className="stepper-nav justify-content-center py-2">
                      {/*begin::Step 1*/}
                      <div
                        className="stepper-item me-5 me-md-15 current"
                        data-kt-stepper-element="nav"
                      >
                        <h3 className="stepper-title">Campaign Details</h3>
                      </div>
                      {/*end::Step 1*/}
                      {/*begin::Step 2*/}
                      <div
                        className="stepper-item me-5 me-md-15"
                        data-kt-stepper-element="nav"
                      >
                        <h3 className="stepper-title">Creative Uploads</h3>
                      </div>
                      {/*end::Step 2*/}
                      {/*begin::Step 3*/}
                      <div
                        className="stepper-item me-5 me-md-15"
                        data-kt-stepper-element="nav"
                      >
                        <h3 className="stepper-title">Audiences</h3>
                      </div>
                      {/*end::Step 3*/}
                      {/*begin::Step 4*/}
                      <div
                        className="stepper-item me-5 me-md-15"
                        data-kt-stepper-element="nav"
                      >
                        <h3 className="stepper-title">Budget Estimates</h3>
                      </div>
                      {/*end::Step 4*/}
                      {/*begin::Step 5*/}
                      <div className="stepper-item" data-kt-stepper-element="nav">
                        <h3 className="stepper-title">Completed</h3>
                      </div>
                      {/*end::Step 5*/}
                    </div>
                    {/*end::Nav*/}
                    {/*begin::Form*/}
                    <form
                      className="mx-auto w-100 mw-600px pt-15 pb-10"
                      noValidate="novalidate"
                      id="kt_modal_create_campaign_stepper_form"
                    >
                      {/*begin::Step 1*/}
                      <div className="current" data-kt-stepper-element="content">
                        {/*begin::Wrapper*/}
                        <div className="w-100">
                          {/*begin::Heading*/}
                          <div className="pb-10 pb-lg-15">
                            {/*begin::Title*/}
                            <h2 className="fw-bold d-flex align-items-center text-gray-900">
                              Setup Campaign Details
                              <span
                                className="ms-1"
                                data-bs-toggle="tooltip"
                                title="Campaign name will be used as reference within your campaign reports"
                              >
                                <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                                  <span className="path1" />
                                  <span className="path2" />
                                  <span className="path3" />
                                </i>
                              </span>
                            </h2>
                            {/*end::Title*/}
                            {/*begin::Notice*/}
                            <div className="text-muted fw-semibold fs-6">
                              If you need more info, please check out
                              <a href="#" className="link-primary fw-bold">
                                Help Page
                              </a>
                              .
                            </div>
                            {/*end::Notice*/}
                          </div>
                          {/*end::Heading*/}
                          {/*begin::Input group*/}
                          <div className="mb-10 fv-row">
                            {/*begin::Label*/}
                            <label className="required form-label mb-3">
                              Campaign Name
                            </label>
                            {/*end::Label*/}
                            {/*begin::Input*/}
                            <input
                              type="text"
                              className="form-control form-control-lg form-control-solid"
                              name="campaign_name"
                              placeholder=""
                              defaultValue=""
                            />
                            {/*end::Input*/}
                          </div>
                          {/*end::Input group*/}
                          {/*begin::Input group*/}
                          <div className="fv-row mb-10">
                            {/*begin::Label*/}
                            <label className="d-block fw-semibold fs-6 mb-5">
                              <span className="required">Company Logo</span>
                              <span
                                className="ms-1"
                                data-bs-toggle="tooltip"
                                title="E.g. Select a logo to represent the company that's running the campaign."
                              >
                                <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                                  <span className="path1" />
                                  <span className="path2" />
                                  <span className="path3" />
                                </i>
                              </span>
                            </label>
                            {/*end::Label*/}
                            {/*begin::Image input placeholder*/}
                            <style
                              dangerouslySetInnerHTML={{
                                __html:
                                  '\n                        .image-input-placeholder {\n                          background-image: url("assets/media/svg/files/blank-image.svg");\n                        }\n\n                        [data-bs-theme="dark"] .image-input-placeholder {\n                          background-image: url("assets/media/svg/files/blank-image-dark.svg");\n                        }\n                      '
                              }}
                            />
                            {/*end::Image input placeholder*/}
                            {/*begin::Image input*/}
                            <div
                              className="image-input image-input-empty image-input-outline image-input-placeholder"
                              data-kt-image-input="true"
                            >
                              {/*begin::Preview existing avatar*/}
                              <div className="image-input-wrapper w-125px h-125px" />
                              {/*end::Preview existing avatar*/}
                              {/*begin::Label*/}
                              <label
                                className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                data-kt-image-input-action="change"
                                data-bs-toggle="tooltip"
                                title="Change avatar"
                              >
                                <i className="ki-duotone ki-pencil fs-7">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>
                                {/*begin::Inputs*/}
                                <input
                                  type="file"
                                  name="avatar"
                                  accept=".png, .jpg, .jpeg"
                                />
                                <input type="hidden" name="avatar_remove" />
                                {/*end::Inputs*/}
                              </label>
                              {/*end::Label*/}
                              {/*begin::Cancel*/}
                              <span
                                className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                data-kt-image-input-action="cancel"
                                data-bs-toggle="tooltip"
                                title="Cancel avatar"
                              >
                                <i className="ki-duotone ki-cross fs-2">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>
                              </span>
                              {/*end::Cancel*/}
                              {/*begin::Remove*/}
                              <span
                                className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                data-kt-image-input-action="remove"
                                data-bs-toggle="tooltip"
                                title="Remove avatar"
                              >
                                <i className="ki-duotone ki-cross fs-2">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>
                              </span>
                              {/*end::Remove*/}
                            </div>
                            {/*end::Image input*/}
                            {/*begin::Hint*/}
                            <div className="form-text">
                              Allowed file types: png, jpg, jpeg.
                            </div>
                            {/*end::Hint*/}
                          </div>
                          {/*end::Input group*/}
                          {/*begin::Input group*/}
                          <div className="mb-10">
                            {/*begin::Label*/}
                            <label className="required fw-semibold fs-6 mb-5">
                              Campaign Goal
                            </label>
                            {/*end::Label*/}
                            {/*begin::Roles*/}
                            {/*begin::Input row*/}
                            <div className="d-flex fv-row">
                              {/*begin::Radio*/}
                              <div className="form-check form-check-custom form-check-solid">
                                {/*begin::Input*/}
                                <input
                                  className="form-check-input me-3"
                                  name="user_role"
                                  type="radio"
                                  defaultValue={0}
                                  id="kt_modal_update_role_option_0"
                                  defaultChecked="checked"
                                />
                                {/*end::Input*/}
                                {/*begin::Label*/}
                                <label
                                  className="form-check-label"
                                  htmlFor="kt_modal_update_role_option_0"
                                >
                                  <div className="fw-bold text-gray-800">
                                    Get more visitors
                                  </div>
                                  <div className="text-gray-600">
                                    Increase impression traffic onto the platform
                                  </div>
                                </label>
                                {/*end::Label*/}
                              </div>
                              {/*end::Radio*/}
                            </div>
                            {/*end::Input row*/}
                            <div className="separator separator-dashed my-5" />
                            {/*begin::Input row*/}
                            <div className="d-flex fv-row">
                              {/*begin::Radio*/}
                              <div className="form-check form-check-custom form-check-solid">
                                {/*begin::Input*/}
                                <input
                                  className="form-check-input me-3"
                                  name="user_role"
                                  type="radio"
                                  defaultValue={1}
                                  id="kt_modal_update_role_option_1"
                                />
                                {/*end::Input*/}
                                {/*begin::Label*/}
                                <label
                                  className="form-check-label"
                                  htmlFor="kt_modal_update_role_option_1"
                                >
                                  <div className="fw-bold text-gray-800">
                                    Get more messages on chat
                                  </div>
                                  <div className="text-gray-600">
                                    Increase community interaction and communication
                                  </div>
                                </label>
                                {/*end::Label*/}
                              </div>
                              {/*end::Radio*/}
                            </div>
                            {/*end::Input row*/}
                            <div className="separator separator-dashed my-5" />
                            {/*begin::Input row*/}
                            <div className="d-flex fv-row">
                              {/*begin::Radio*/}
                              <div className="form-check form-check-custom form-check-solid">
                                {/*begin::Input*/}
                                <input
                                  className="form-check-input me-3"
                                  name="user_role"
                                  type="radio"
                                  defaultValue={2}
                                  id="kt_modal_update_role_option_2"
                                />
                                {/*end::Input*/}
                                {/*begin::Label*/}
                                <label
                                  className="form-check-label"
                                  htmlFor="kt_modal_update_role_option_2"
                                >
                                  <div className="fw-bold text-gray-800">
                                    Get more calls
                                  </div>
                                  <div className="text-gray-600">
                                    Boost telecommunication feedback to provide precise
                                    and accurate information
                                  </div>
                                </label>
                                {/*end::Label*/}
                              </div>
                              {/*end::Radio*/}
                            </div>
                            {/*end::Input row*/}
                            <div className="separator separator-dashed my-5" />
                            {/*begin::Input row*/}
                            <div className="d-flex fv-row">
                              {/*begin::Radio*/}
                              <div className="form-check form-check-custom form-check-solid">
                                {/*begin::Input*/}
                                <input
                                  className="form-check-input me-3"
                                  name="user_role"
                                  type="radio"
                                  defaultValue={3}
                                  id="kt_modal_update_role_option_3"
                                />
                                {/*end::Input*/}
                                {/*begin::Label*/}
                                <label
                                  className="form-check-label"
                                  htmlFor="kt_modal_update_role_option_3"
                                >
                                  <div className="fw-bold text-gray-800">
                                    Get more likes
                                  </div>
                                  <div className="text-gray-600">
                                    Increase positive interactivity on social media
                                    platforms
                                  </div>
                                </label>
                                {/*end::Label*/}
                              </div>
                              {/*end::Radio*/}
                            </div>
                            {/*end::Input row*/}
                            <div className="separator separator-dashed my-5" />
                            {/*begin::Input row*/}
                            <div className="d-flex fv-row">
                              {/*begin::Radio*/}
                              <div className="form-check form-check-custom form-check-solid">
                                {/*begin::Input*/}
                                <input
                                  className="form-check-input me-3"
                                  name="user_role"
                                  type="radio"
                                  defaultValue={4}
                                  id="kt_modal_update_role_option_4"
                                />
                                {/*end::Input*/}
                                {/*begin::Label*/}
                                <label
                                  className="form-check-label"
                                  htmlFor="kt_modal_update_role_option_4"
                                >
                                  <div className="fw-bold text-gray-800">
                                    Lead generation
                                  </div>
                                  <div className="text-gray-600">
                                    Collect contact information for potential customers
                                  </div>
                                </label>
                                {/*end::Label*/}
                              </div>
                              {/*end::Radio*/}
                            </div>
                            {/*end::Input row*/}
                            {/*end::Roles*/}
                          </div>
                          {/*end::Input group*/}
                        </div>
                        {/*end::Wrapper*/}
                      </div>
                      {/*end::Step 1*/}
                      {/*begin::Step 2*/}
                      <div data-kt-stepper-element="content">
                        {/*begin::Wrapper*/}
                        <div className="w-100">
                          {/*begin::Heading*/}
                          <div className="pb-10 pb-lg-12">
                            {/*begin::Title*/}
                            <h1 className="fw-bold text-gray-900">Upload Files</h1>
                            {/*end::Title*/}
                            {/*begin::Description*/}
                            <div className="text-muted fw-semibold fs-4">
                              If you need more info, please check
                              <a href="#" className="link-primary">
                                Campaign Guidelines
                              </a>
                            </div>
                            {/*end::Description*/}
                          </div>
                          {/*end::Heading*/}
                          {/*begin::Input group*/}
                          <div className="fv-row mb-10">
                            {/*begin::Dropzone*/}
                            <div
                              className="dropzone"
                              id="kt_modal_create_campaign_files_upload"
                            >
                              {/*begin::Message*/}
                              <div className="dz-message needsclick">
                                {/*begin::Icon*/}
                                <i className="ki-duotone ki-file-up fs-3hx text-primary">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>
                                {/*end::Icon*/}
                                {/*begin::Info*/}
                                <div className="ms-4">
                                  <h3 className="dfs-3 fw-bold text-gray-900 mb-1">
                                    Drop campaign files here or click to upload.
                                  </h3>
                                  <span className="fw-semibold fs-4 text-muted">
                                    Upload up to 10 files
                                  </span>
                                </div>
                                {/*end::Info*/}
                              </div>
                            </div>
                            {/*end::Dropzone*/}
                          </div>
                          {/*end::Input group*/}
                          {/*begin::Input group*/}
                          <div className="mb-10">
                            {/*begin::Label*/}
                            <label className="fs-6 fw-semibold mb-2">
                              Uploaded File
                            </label>
                            {/*End::Label*/}
                            {/*begin::Files*/}
                            <div className="mh-300px scroll-y me-n7 pe-7">
                              {/*begin::File*/}
                              <div className="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                                <div className="d-flex align-items-center">
                                  {/*begin::Avatar*/}
                                  <div className="symbol symbol-35px">
                                    <img
                                      src="assets/media/svg/files/pdf.svg"
                                      alt="icon"
                                    />
                                  </div>
                                  {/*end::Avatar*/}
                                  {/*begin::Details*/}
                                  <div className="ms-6">
                                    <a
                                      href="#"
                                      className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                    >
                                      Product Specifications
                                    </a>
                                    <div className="fw-semibold text-muted">230kb</div>
                                  </div>
                                  {/*end::Details*/}
                                </div>
                                {/*begin::Menu*/}
                                <div className="min-w-100px">
                                  <select
                                    className="form-select form-select-solid form-select-sm"
                                    data-control="select2"
                                    data-hide-search="true"
                                    data-placeholder="Edit"
                                  >
                                    <option />
                                    <option value={1}>Remove</option>
                                    <option value={2}>Modify</option>
                                    <option value={3}>Select</option>
                                  </select>
                                </div>
                                {/*end::Menu*/}
                              </div>
                              {/*end::File*/}
                              {/*begin::File*/}
                              <div className="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                                <div className="d-flex align-items-center">
                                  {/*begin::Avatar*/}
                                  <div className="symbol symbol-35px">
                                    <img
                                      src="assets/media/svg/files/tif.svg"
                                      alt="icon"
                                    />
                                  </div>
                                  {/*end::Avatar*/}
                                  {/*begin::Details*/}
                                  <div className="ms-6">
                                    <a
                                      href="#"
                                      className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                    >
                                      Campaign Creative Poster
                                    </a>
                                    <div className="fw-semibold text-muted">2.4mb</div>
                                  </div>
                                  {/*end::Details*/}
                                </div>
                                {/*begin::Menu*/}
                                <div className="min-w-100px">
                                  <select
                                    className="form-select form-select-solid form-select-sm"
                                    data-control="select2"
                                    data-hide-search="true"
                                    data-placeholder="Edit"
                                  >
                                    <option />
                                    <option value={1}>Remove</option>
                                    <option value={2}>Modify</option>
                                    <option value={3}>Select</option>
                                  </select>
                                </div>
                                {/*end::Menu*/}
                              </div>
                              {/*end::File*/}
                              {/*begin::File*/}
                              <div className="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                                <div className="d-flex align-items-center">
                                  {/*begin::Avatar*/}
                                  <div className="symbol symbol-35px">
                                    <img
                                      src="assets/media/svg/files/folder-document.svg"
                                      alt="icon"
                                    />
                                  </div>
                                  {/*end::Avatar*/}
                                  {/*begin::Details*/}
                                  <div className="ms-6">
                                    <a
                                      href="#"
                                      className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                    >
                                      Campaign Landing Page Source
                                    </a>
                                    <div className="fw-semibold text-muted">1.12mb</div>
                                  </div>
                                  {/*end::Details*/}
                                </div>
                                {/*begin::Menu*/}
                                <div className="min-w-100px">
                                  <select
                                    className="form-select form-select-solid form-select-sm"
                                    data-control="select2"
                                    data-hide-search="true"
                                    data-placeholder="Edit"
                                  >
                                    <option />
                                    <option value={1}>Remove</option>
                                    <option value={2}>Modify</option>
                                    <option value={3}>Select</option>
                                  </select>
                                </div>
                                {/*end::Menu*/}
                              </div>
                              {/*end::File*/}
                              {/*begin::File*/}
                              <div className="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                                <div className="d-flex align-items-center">
                                  {/*begin::Avatar*/}
                                  <div className="symbol symbol-35px">
                                    <img
                                      src="assets/media/svg/files/css.svg"
                                      alt="icon"
                                    />
                                  </div>
                                  {/*end::Avatar*/}
                                  {/*begin::Details*/}
                                  <div className="ms-6">
                                    <a
                                      href="#"
                                      className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                    >
                                      Landing Page Styling
                                    </a>
                                    <div className="fw-semibold text-muted">85kb</div>
                                  </div>
                                  {/*end::Details*/}
                                </div>
                                {/*begin::Menu*/}
                                <div className="min-w-100px">
                                  <select
                                    className="form-select form-select-solid form-select-sm"
                                    data-control="select2"
                                    data-hide-search="true"
                                    data-placeholder="Edit"
                                  >
                                    <option />
                                    <option value={1}>Remove</option>
                                    <option value={2}>Modify</option>
                                    <option value={3}>Select</option>
                                  </select>
                                </div>
                                {/*end::Menu*/}
                              </div>
                              {/*end::File*/}
                              {/*begin::File*/}
                              <div className="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                                <div className="d-flex align-items-center">
                                  {/*begin::Avatar*/}
                                  <div className="symbol symbol-35px">
                                    <img
                                      src="assets/media/svg/files/ai.svg"
                                      alt="icon"
                                    />
                                  </div>
                                  {/*end::Avatar*/}
                                  {/*begin::Details*/}
                                  <div className="ms-6">
                                    <a
                                      href="#"
                                      className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                    >
                                      Design Source Files
                                    </a>
                                    <div className="fw-semibold text-muted">48mb</div>
                                  </div>
                                  {/*end::Details*/}
                                </div>
                                {/*begin::Menu*/}
                                <div className="min-w-100px">
                                  <select
                                    className="form-select form-select-solid form-select-sm"
                                    data-control="select2"
                                    data-hide-search="true"
                                    data-placeholder="Edit"
                                  >
                                    <option />
                                    <option value={1}>Remove</option>
                                    <option value={2}>Modify</option>
                                    <option value={3}>Select</option>
                                  </select>
                                </div>
                                {/*end::Menu*/}
                              </div>
                              {/*end::File*/}
                              {/*begin::File*/}
                              <div className="d-flex flex-stack py-4">
                                <div className="d-flex align-items-center">
                                  {/*begin::Avatar*/}
                                  <div className="symbol symbol-35px">
                                    <img
                                      src="assets/media/svg/files/doc.svg"
                                      alt="icon"
                                    />
                                  </div>
                                  {/*end::Avatar*/}
                                  {/*begin::Details*/}
                                  <div className="ms-6">
                                    <a
                                      href="#"
                                      className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                    >
                                      Campaign Plan Document
                                    </a>
                                    <div className="fw-semibold text-muted">27kb</div>
                                  </div>
                                  {/*end::Details*/}
                                </div>
                                {/*begin::Menu*/}
                                <div className="min-w-100px">
                                  <select
                                    className="form-select form-select-solid form-select-sm"
                                    data-control="select2"
                                    data-hide-search="true"
                                    data-placeholder="Edit"
                                  >
                                    <option />
                                    <option value={1}>Remove</option>
                                    <option value={2}>Modify</option>
                                    <option value={3}>Select</option>
                                  </select>
                                </div>
                                {/*end::Menu*/}
                              </div>
                              {/*end::File*/}
                            </div>
                            {/*end::Files*/}
                          </div>
                          {/*end::Input group*/}
                        </div>
                        {/*end::Wrapper*/}
                      </div>
                      {/*end::Step 2*/}
                      {/*begin::Step 3*/}
                      <div data-kt-stepper-element="content">
                        {/*begin::Wrapper*/}
                        <div className="w-100">
                          {/*begin::Heading*/}
                          <div className="pb-10 pb-lg-12">
                            {/*begin::Title*/}
                            <h1 className="fw-bold text-gray-900">
                              Configure Audiences
                            </h1>
                            {/*end::Title*/}
                            {/*begin::Description*/}
                            <div className="text-muted fw-semibold fs-4">
                              If you need more info, please check
                              <a href="#" className="link-primary">
                                Campaign Guidelines
                              </a>
                            </div>
                            {/*end::Description*/}
                          </div>
                          {/*end::Heading*/}
                          {/*begin::Input group*/}
                          <div className="fv-row mb-10">
                            {/*begin::Label*/}
                            <label className="fs-6 fw-semibold mb-2">
                              Gender
                              <span
                                className="ms-1"
                                data-bs-toggle="tooltip"
                                title="Show your ads to either men or women, or select 'All' for both"
                              >
                                <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                                  <span className="path1" />
                                  <span className="path2" />
                                  <span className="path3" />
                                </i>
                              </span>
                            </label>
                            {/*End::Label*/}
                            {/*begin::Row*/}
                            <div
                              className="row g-9"
                              data-kt-buttons="true"
                              data-kt-buttons-target="[data-kt-button='true']"
                            >
                              {/*begin::Col*/}
                              <div className="col">
                                {/*begin::Option*/}
                                <label
                                  className="btn btn-outline btn-outline-dashed btn-active-light-primary active d-flex text-start p-6"
                                  data-kt-button="true"
                                >
                                  {/*begin::Radio*/}
                                  <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="campaign_gender"
                                      defaultValue={1}
                                      defaultChecked="checked"
                                    />
                                  </span>
                                  {/*end::Radio*/}
                                  {/*begin::Info*/}
                                  <span className="ms-5">
                                    <span className="fs-4 fw-bold text-gray-800 d-block">
                                      All
                                    </span>
                                  </span>
                                  {/*end::Info*/}
                                </label>
                                {/*end::Option*/}
                              </div>
                              {/*end::Col*/}
                              {/*begin::Col*/}
                              <div className="col">
                                {/*begin::Option*/}
                                <label
                                  className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6"
                                  data-kt-button="true"
                                >
                                  {/*begin::Radio*/}
                                  <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="campaign_gender"
                                      defaultValue={2}
                                    />
                                  </span>
                                  {/*end::Radio*/}
                                  {/*begin::Info*/}
                                  <span className="ms-5">
                                    <span className="fs-4 fw-bold text-gray-800 d-block">
                                      Male
                                    </span>
                                  </span>
                                  {/*end::Info*/}
                                </label>
                                {/*end::Option*/}
                              </div>
                              {/*end::Col*/}
                              {/*begin::Col*/}
                              <div className="col">
                                {/*begin::Option*/}
                                <label
                                  className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6"
                                  data-kt-button="true"
                                >
                                  {/*begin::Radio*/}
                                  <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="campaign_gender"
                                      defaultValue={3}
                                    />
                                  </span>
                                  {/*end::Radio*/}
                                  {/*begin::Info*/}
                                  <span className="ms-5">
                                    <span className="fs-4 fw-bold text-gray-800 d-block">
                                      Female
                                    </span>
                                  </span>
                                  {/*end::Info*/}
                                </label>
                                {/*end::Option*/}
                              </div>
                              {/*end::Col*/}
                            </div>
                            {/*end::Row*/}
                          </div>
                          {/*end::Input group*/}
                          {/*begin::Input group*/}
                          <div className="fv-row mb-10">
                            {/*begin::Label*/}
                            <label className="fs-6 fw-semibold mb-2">
                              Age
                              <span
                                className="ms-1"
                                data-bs-toggle="tooltip"
                                title="Select the minimum and maximum age of the people who will find your ad relevant."
                              >
                                <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                                  <span className="path1" />
                                  <span className="path2" />
                                  <span className="path3" />
                                </i>
                              </span>
                            </label>
                            {/*End::Label*/}
                            {/*begin::Slider*/}
                            <div className="d-flex flex-stack">
                              <div
                                id="kt_modal_create_campaign_age_min"
                                className="fs-7 fw-semibold text-muted"
                              />
                              <div
                                id="kt_modal_create_campaign_age_slider"
                                className="noUi-sm w-100 ms-5 me-8"
                              />
                              <div
                                id="kt_modal_create_campaign_age_max"
                                className="fs-7 fw-semibold text-muted"
                              />
                            </div>
                            {/*end::Slider*/}
                          </div>
                          {/*end::Input group*/}
                          {/*begin::Input group*/}
                          <div className="fv-row mb-10">
                            {/*begin::Label*/}
                            <label className="fs-6 fw-semibold mb-2">
                              Location
                              <span
                                className="ms-1"
                                data-bs-toggle="tooltip"
                                title="Enter one or more location points for more specific targeting."
                              >
                                <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                                  <span className="path1" />
                                  <span className="path2" />
                                  <span className="path3" />
                                </i>
                              </span>
                            </label>
                            {/*End::Label*/}
                            {/*begin::Tagify*/}
                            <input
                              className="form-control d-flex align-items-center"
                              defaultValue=""
                              id="kt_modal_create_campaign_location"
                              data-kt-flags-path="/keen/demo1/assets/media/flags/"
                            />
                            {/*end::Tagify*/}
                          </div>
                          {/*end::Input group*/}
                        </div>
                        {/*end::Wrapper*/}
                      </div>
                      {/*end::Step 3*/}
                      {/*begin::Step 4*/}
                      <div data-kt-stepper-element="content">
                        {/*begin::Wrapper*/}
                        <div className="w-100">
                          {/*begin::Heading*/}
                          <div className="pb-10 pb-lg-12">
                            {/*begin::Title*/}
                            <h1 className="fw-bold text-gray-900">Budget Estimates</h1>
                            {/*end::Title*/}
                            {/*begin::Description*/}
                            <div className="text-muted fw-semibold fs-4">
                              If you need more info, please check
                              <a href="#" className="link-primary">
                                Campaign Guidelines
                              </a>
                            </div>
                            {/*end::Description*/}
                          </div>
                          {/*end::Heading*/}
                          {/*begin::Input group*/}
                          <div className="fv-row mb-10">
                            {/*begin::Label*/}
                            <label className="fs-6 fw-semibold mb-2">
                              Campaign Duration
                              <span
                                className="ms-1"
                                data-bs-toggle="tooltip"
                                title="Choose how long you want your ad to run for"
                              >
                                <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                                  <span className="path1" />
                                  <span className="path2" />
                                  <span className="path3" />
                                </i>
                              </span>
                            </label>
                            {/*end::Label*/}
                            {/*begin::Duration option*/}
                            <div className="d-flex gap-9 mb-7">
                              {/*begin::Button*/}
                              <button
                                type="button"
                                className="btn btn-outline btn-outline-dashed btn-active-light-primary active"
                                id="kt_modal_create_campaign_duration_all"
                              >
                                Continuous duration
                                <br />
                                <span className="fs-7">
                                  Your ad will run continuously for a daily budget.
                                </span>
                              </button>
                              {/*end::Button*/}
                              {/*begin::Button*/}
                              <button
                                type="button"
                                className="btn btn-outline btn-outline-dashed btn-active-light-primary btn-outline-default"
                                id="kt_modal_create_campaign_duration_fixed"
                              >
                                Fixed duration
                                <br />
                                <span className="fs-7">
                                  Your ad will run on the specified dates only.
                                </span>
                              </button>
                              {/*end::Button*/}
                            </div>
                            {/*end::Duration option*/}
                            {/*begin::Datepicker*/}
                            <input
                              className="form-control form-control-solid d-none"
                              placeholder="Pick date & time"
                              id="kt_modal_create_campaign_datepicker"
                            />
                            {/*end::Datepicker*/}
                          </div>
                          {/*end::Input group*/}
                          {/*begin::Input group*/}
                          <div className="fv-row mb-10">
                            {/*begin::Label*/}
                            <label className="fs-6 fw-semibold mb-2">
                              Daily Budget
                              <span
                                className="ms-1"
                                data-bs-toggle="tooltip"
                                title="Choose the budget allocated for each day. Higher budget will generate better results"
                              >
                                <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                                  <span className="path1" />
                                  <span className="path2" />
                                  <span className="path3" />
                                </i>
                              </span>
                            </label>
                            {/*end::Label*/}
                            {/*begin::Slider*/}
                            <div className="d-flex flex-column text-center">
                              <div className="d-flex align-items-start justify-content-center mb-7">
                                <span className="fw-bold fs-4 mt-1 me-2">$</span>
                                <span
                                  className="fw-bold fs-3x"
                                  id="kt_modal_create_campaign_budget_label"
                                />
                                <span className="fw-bold fs-3x">.00</span>
                              </div>
                              <div
                                id="kt_modal_create_campaign_budget_slider"
                                className="noUi-sm"
                              />
                            </div>
                            {/*end::Slider*/}
                          </div>
                          {/*end::Input group*/}
                        </div>
                        {/*end::Wrapper*/}
                      </div>
                      {/*end::Step 4*/}
                      {/*begin::Step 5*/}
                      <div data-kt-stepper-element="content">
                        {/*begin::Wrapper*/}
                        <div className="w-100">
                          {/*begin::Heading*/}
                          <div className="pb-12 text-center">
                            {/*begin::Title*/}
                            <h1 className="fw-bold text-gray-900">Campaign Created!</h1>
                            {/*end::Title*/}
                            {/*begin::Description*/}
                            <div className="fw-semibold text-muted fs-4">
                              You will receive an email with with the summary of your
                              newly created campaign!
                            </div>
                            {/*end::Description*/}
                          </div>
                          {/*end::Heading*/}
                          {/*begin::Actions*/}
                          <div className="d-flex flex-center pb-20">
                            <button
                              id="kt_modal_create_campaign_create_new"
                              type="button"
                              className="btn btn-lg btn-light me-3"
                              data-kt-element="complete-start"
                            >
                              Create New Campaign
                            </button>
                            <a
                              href="#"
                              className="btn btn-lg btn-primary"
                              data-bs-toggle="tooltip"
                              title="Coming Soon"
                            >
                              View Campaign
                            </a>
                          </div>
                          {/*end::Actions*/}
                          {/*begin::Illustration*/}
                          <div className="text-center px-4">
                            <img
                              src="assets/media/illustrations/sketchy-1/9.png"
                              alt=""
                              className="mww-100 mh-350px"
                            />
                          </div>
                          {/*end::Illustration*/}
                        </div>
                      </div>
                      {/*end::Step 5*/}
                      {/*begin::Actions*/}
                      <div className="d-flex flex-stack pt-10">
                        {/*begin::Wrapper*/}
                        <div className="me-2">
                          <button
                            type="button"
                            className="btn btn-lg btn-light-primary me-3"
                            data-kt-stepper-action="previous"
                            data-kt-stepper-state="hide-on-last-step"
                          >
                            <i className="ki-duotone ki-arrow-left fs-3 me-1">
                              <span className="path1" />
                              <span className="path2" />
                            </i>
                            Back
                          </button>
                        </div>
                        {/*end::Wrapper*/}
                        {/*begin::Wrapper*/}
                        <div>
                          <button
                            type="button"
                            className="btn btn-lg btn-primary"
                            data-kt-stepper-action="submit"
                          >
                            <span className="indicator-label">
                              Submit
                              <i className="ki-duotone ki-arrow-right fs-3 ms-2 me-0">
                                <span className="path1" />
                                <span className="path2" />
                              </i>
                            </span>
                            <span className="indicator-progress">
                              Please wait...
                              <span className="spinner-border spinner-border-sm align-middle ms-2" />
                            </span>
                          </button>
                          <button
                            type="button"
                            className="btn btn-lg btn-primary"
                            data-kt-stepper-action="next"
                          >
                            Continue
                            <i className="ki-duotone ki-arrow-right fs-3 ms-1 me-0">
                              <span className="path1" />
                              <span className="path2" />
                            </i>
                          </button>
                        </div>
                        {/*end::Wrapper*/}
                      </div>
                      {/*end::Actions*/}
                    </form>
                    {/*end::Form*/}
                  </div>
                  {/*end::Stepper*/}
                </div>
                {/*begin::Modal body*/}
              </div>
            </div>
          </div>
          {/*end::Modal - Create Campaign*/}
          {/*begin::Modal - Users Search*/}
          <div
            className="modal fade"
            id="kt_modal_users_search"
            tabIndex={-1}
            aria-hidden="true"
          >
            {/*begin::Modal dialog*/}
            <div className="modal-dialog modal-dialog-centered mw-650px">
              {/*begin::Modal content*/}
              <div className="modal-content">
                {/*begin::Modal header*/}
                <div className="modal-header pb-0 border-0 justify-content-end">
                  {/*begin::Close*/}
                  <div
                    className="btn btn-sm btn-icon btn-active-color-primary"
                    data-bs-dismiss="modal"
                  >
                    <i className="ki-duotone ki-cross fs-1">
                      <span className="path1" />
                      <span className="path2" />
                    </i>
                  </div>
                  {/*end::Close*/}
                </div>
                {/*begin::Modal header*/}
                {/*begin::Modal body*/}
                <div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
                  {/*begin::Content*/}
                  <div className="text-center mb-13">
                    <h1 className="mb-3">Search Users</h1>
                    <div className="text-muted fw-semibold fs-5">
                      Invite Collaborators To Your Project
                    </div>
                  </div>
                  {/*end::Content*/}
                  {/*begin::Search*/}
                  <div
                    id="kt_modal_users_search_handler"
                    data-kt-search-keypress="true"
                    data-kt-search-min-length={2}
                    data-kt-search-enter="enter"
                    data-kt-search-layout="inline"
                  >
                    {/*begin::Form*/}
                    <form
                      data-kt-search-element="form"
                      className="w-100 position-relative mb-5"
                      autoComplete="off"
                    >
                      {/*begin::Hidden input(Added to disable form autocomplete)*/}
                      <input type="hidden" />
                      {/*end::Hidden input*/}
                      {/*begin::Icon*/}
                      <i className="ki-duotone ki-magnifier fs-2 fs-lg-1 text-gray-500 position-absolute top-50 ms-5 translate-middle-y">
                        <span className="path1" />
                        <span className="path2" />
                      </i>
                      {/*end::Icon*/}
                      {/*begin::Input*/}
                      <input
                        type="text"
                        className="form-control form-control-lg form-control-solid px-15"
                        name="search"
                        defaultValue=""
                        placeholder="Search by username, full name or email..."
                        data-kt-search-element="input"
                      />
                      {/*end::Input*/}
                      {/*begin::Spinner*/}
                      <span
                        className="position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-5"
                        data-kt-search-element="spinner"
                      >
                        <span className="spinner-border h-15px w-15px align-middle text-muted" />
                      </span>
                      {/*end::Spinner*/}
                      {/*begin::Reset*/}
                      <span
                        className="btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 me-5 d-none"
                        data-kt-search-element="clear"
                      >
                        <i className="ki-duotone ki-cross fs-2 fs-lg-1 me-0">
                          <span className="path1" />
                          <span className="path2" />
                        </i>
                      </span>
                      {/*end::Reset*/}
                    </form>
                    {/*end::Form*/}
                    {/*begin::Wrapper*/}
                    <div className="py-5">
                      {/*begin::Suggestions*/}
                      <div data-kt-search-element="suggestions">
                        {/*begin::Heading*/}
                        <h3 className="fw-semibold mb-5">Recently searched:</h3>
                        {/*end::Heading*/}
                        {/*begin::Users*/}
                        <div className="mh-375px scroll-y me-n7 pe-7">
                          {/*begin::User*/}
                          <a
                            href="#"
                            className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                          >
                            {/*begin::Avatar*/}
                            <div className="symbol symbol-35px symbol-circle me-5">
                              <img alt="Pic" src="assets/media/avatars/300-6.jpg" />
                            </div>
                            {/*end::Avatar*/}
                            {/*begin::Info*/}
                            <div className="fw-semibold">
                              <span className="fs-6 text-gray-800 me-2">
                                Emma Smith
                              </span>
                              <span className="badge badge-light">Art Director</span>
                            </div>
                            {/*end::Info*/}
                          </a>
                          {/*end::User*/}
                          {/*begin::User*/}
                          <a
                            href="#"
                            className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                          >
                            {/*begin::Avatar*/}
                            <div className="symbol symbol-35px symbol-circle me-5">
                              <span className="symbol-label bg-light-danger text-danger fw-semibold">
                                M
                              </span>
                            </div>
                            {/*end::Avatar*/}
                            {/*begin::Info*/}
                            <div className="fw-semibold">
                              <span className="fs-6 text-gray-800 me-2">
                                Melody Macy
                              </span>
                              <span className="badge badge-light">
                                Marketing Analytic
                              </span>
                            </div>
                            {/*end::Info*/}
                          </a>
                          {/*end::User*/}
                          {/*begin::User*/}
                          <a
                            href="#"
                            className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                          >
                            {/*begin::Avatar*/}
                            <div className="symbol symbol-35px symbol-circle me-5">
                              <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                            </div>
                            {/*end::Avatar*/}
                            {/*begin::Info*/}
                            <div className="fw-semibold">
                              <span className="fs-6 text-gray-800 me-2">Max Smith</span>
                              <span className="badge badge-light">
                                Software Enginer
                              </span>
                            </div>
                            {/*end::Info*/}
                          </a>
                          {/*end::User*/}
                          {/*begin::User*/}
                          <a
                            href="#"
                            className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                          >
                            {/*begin::Avatar*/}
                            <div className="symbol symbol-35px symbol-circle me-5">
                              <img alt="Pic" src="assets/media/avatars/300-5.jpg" />
                            </div>
                            {/*end::Avatar*/}
                            {/*begin::Info*/}
                            <div className="fw-semibold">
                              <span className="fs-6 text-gray-800 me-2">Sean Bean</span>
                              <span className="badge badge-light">Web Developer</span>
                            </div>
                            {/*end::Info*/}
                          </a>
                          {/*end::User*/}
                          {/*begin::User*/}
                          <a
                            href="#"
                            className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                          >
                            {/*begin::Avatar*/}
                            <div className="symbol symbol-35px symbol-circle me-5">
                              <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                            </div>
                            {/*end::Avatar*/}
                            {/*begin::Info*/}
                            <div className="fw-semibold">
                              <span className="fs-6 text-gray-800 me-2">Brian Cox</span>
                              <span className="badge badge-light">UI/UX Designer</span>
                            </div>
                            {/*end::Info*/}
                          </a>
                          {/*end::User*/}
                        </div>
                        {/*end::Users*/}
                      </div>
                      {/*end::Suggestions*/}
                      {/*begin::Results(add d-none to below element to hide the users list by default)*/}
                      <div data-kt-search-element="results" className="d-none">
                        {/*begin::Users*/}
                        <div className="mh-375px scroll-y me-n7 pe-7">
                          {/*begin::User*/}
                          <div
                            className="rounded d-flex flex-stack bg-active-lighten p-4"
                            data-user-id={0}
                          >
                            {/*begin::Details*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Checkbox*/}
                              <label className="form-check form-check-custom form-check-solid me-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="users"
                                  data-kt-check="true"
                                  data-kt-check-target="[data-user-id='0']"
                                  defaultValue={0}
                                />
                              </label>
                              {/*end::Checkbox*/}
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <img alt="Pic" src="assets/media/avatars/300-6.jpg" />
                              </div>
                              {/*end::Avatar*/}
                              {/*begin::Details*/}
                              <div className="ms-5">
                                <a
                                  href="#"
                                  className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                >
                                  Emma Smith
                                </a>
                                <div className="fw-semibold text-muted">
                                  smith@kpmg.com
                                </div>
                              </div>
                              {/*end::Details*/}
                            </div>
                            {/*end::Details*/}
                            {/*begin::Access menu*/}
                            <div className="ms-2 w-100px">
                              <select
                                className="form-select form-select-solid form-select-sm"
                                data-control="select2"
                                data-hide-search="true"
                              >
                                <option value={1}>Guest</option>
                                <option value={2} selected="">
                                  Owner
                                </option>
                                <option value={3}>Can Edit</option>
                              </select>
                            </div>
                            {/*end::Access menu*/}
                          </div>
                          {/*end::User*/}
                          {/*begin::Separator*/}
                          <div className="border-bottom border-gray-300 border-bottom-dashed" />
                          {/*end::Separator*/}
                          {/*begin::User*/}
                          <div
                            className="rounded d-flex flex-stack bg-active-lighten p-4"
                            data-user-id={1}
                          >
                            {/*begin::Details*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Checkbox*/}
                              <label className="form-check form-check-custom form-check-solid me-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="users"
                                  data-kt-check="true"
                                  data-kt-check-target="[data-user-id='1']"
                                  defaultValue={1}
                                />
                              </label>
                              {/*end::Checkbox*/}
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <span className="symbol-label bg-light-danger text-danger fw-semibold">
                                  M
                                </span>
                              </div>
                              {/*end::Avatar*/}
                              {/*begin::Details*/}
                              <div className="ms-5">
                                <a
                                  href="#"
                                  className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                >
                                  Melody Macy
                                </a>
                                <div className="fw-semibold text-muted">
                                  melody@altbox.com
                                </div>
                              </div>
                              {/*end::Details*/}
                            </div>
                            {/*end::Details*/}
                            {/*begin::Access menu*/}
                            <div className="ms-2 w-100px">
                              <select
                                className="form-select form-select-solid form-select-sm"
                                data-control="select2"
                                data-hide-search="true"
                              >
                                <option value={1} selected="">
                                  Guest
                                </option>
                                <option value={2}>Owner</option>
                                <option value={3}>Can Edit</option>
                              </select>
                            </div>
                            {/*end::Access menu*/}
                          </div>
                          {/*end::User*/}
                          {/*begin::Separator*/}
                          <div className="border-bottom border-gray-300 border-bottom-dashed" />
                          {/*end::Separator*/}
                          {/*begin::User*/}
                          <div
                            className="rounded d-flex flex-stack bg-active-lighten p-4"
                            data-user-id={2}
                          >
                            {/*begin::Details*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Checkbox*/}
                              <label className="form-check form-check-custom form-check-solid me-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="users"
                                  data-kt-check="true"
                                  data-kt-check-target="[data-user-id='2']"
                                  defaultValue={2}
                                />
                              </label>
                              {/*end::Checkbox*/}
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                              </div>
                              {/*end::Avatar*/}
                              {/*begin::Details*/}
                              <div className="ms-5">
                                <a
                                  href="#"
                                  className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                >
                                  Max Smith
                                </a>
                                <div className="fw-semibold text-muted">max@kt.com</div>
                              </div>
                              {/*end::Details*/}
                            </div>
                            {/*end::Details*/}
                            {/*begin::Access menu*/}
                            <div className="ms-2 w-100px">
                              <select
                                className="form-select form-select-solid form-select-sm"
                                data-control="select2"
                                data-hide-search="true"
                              >
                                <option value={1}>Guest</option>
                                <option value={2}>Owner</option>
                                <option value={3} selected="">
                                  Can Edit
                                </option>
                              </select>
                            </div>
                            {/*end::Access menu*/}
                          </div>
                          {/*end::User*/}
                          {/*begin::Separator*/}
                          <div className="border-bottom border-gray-300 border-bottom-dashed" />
                          {/*end::Separator*/}
                          {/*begin::User*/}
                          <div
                            className="rounded d-flex flex-stack bg-active-lighten p-4"
                            data-user-id={3}
                          >
                            {/*begin::Details*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Checkbox*/}
                              <label className="form-check form-check-custom form-check-solid me-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="users"
                                  data-kt-check="true"
                                  data-kt-check-target="[data-user-id='3']"
                                  defaultValue={3}
                                />
                              </label>
                              {/*end::Checkbox*/}
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <img alt="Pic" src="assets/media/avatars/300-5.jpg" />
                              </div>
                              {/*end::Avatar*/}
                              {/*begin::Details*/}
                              <div className="ms-5">
                                <a
                                  href="#"
                                  className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                >
                                  Sean Bean
                                </a>
                                <div className="fw-semibold text-muted">
                                  sean@dellito.com
                                </div>
                              </div>
                              {/*end::Details*/}
                            </div>
                            {/*end::Details*/}
                            {/*begin::Access menu*/}
                            <div className="ms-2 w-100px">
                              <select
                                className="form-select form-select-solid form-select-sm"
                                data-control="select2"
                                data-hide-search="true"
                              >
                                <option value={1}>Guest</option>
                                <option value={2} selected="">
                                  Owner
                                </option>
                                <option value={3}>Can Edit</option>
                              </select>
                            </div>
                            {/*end::Access menu*/}
                          </div>
                          {/*end::User*/}
                          {/*begin::Separator*/}
                          <div className="border-bottom border-gray-300 border-bottom-dashed" />
                          {/*end::Separator*/}
                          {/*begin::User*/}
                          <div
                            className="rounded d-flex flex-stack bg-active-lighten p-4"
                            data-user-id={4}
                          >
                            {/*begin::Details*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Checkbox*/}
                              <label className="form-check form-check-custom form-check-solid me-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="users"
                                  data-kt-check="true"
                                  data-kt-check-target="[data-user-id='4']"
                                  defaultValue={4}
                                />
                              </label>
                              {/*end::Checkbox*/}
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                              </div>
                              {/*end::Avatar*/}
                              {/*begin::Details*/}
                              <div className="ms-5">
                                <a
                                  href="#"
                                  className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                >
                                  Brian Cox
                                </a>
                                <div className="fw-semibold text-muted">
                                  brian@exchange.com
                                </div>
                              </div>
                              {/*end::Details*/}
                            </div>
                            {/*end::Details*/}
                            {/*begin::Access menu*/}
                            <div className="ms-2 w-100px">
                              <select
                                className="form-select form-select-solid form-select-sm"
                                data-control="select2"
                                data-hide-search="true"
                              >
                                <option value={1}>Guest</option>
                                <option value={2}>Owner</option>
                                <option value={3} selected="">
                                  Can Edit
                                </option>
                              </select>
                            </div>
                            {/*end::Access menu*/}
                          </div>
                          {/*end::User*/}
                          {/*begin::Separator*/}
                          <div className="border-bottom border-gray-300 border-bottom-dashed" />
                          {/*end::Separator*/}
                          {/*begin::User*/}
                          <div
                            className="rounded d-flex flex-stack bg-active-lighten p-4"
                            data-user-id={5}
                          >
                            {/*begin::Details*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Checkbox*/}
                              <label className="form-check form-check-custom form-check-solid me-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="users"
                                  data-kt-check="true"
                                  data-kt-check-target="[data-user-id='5']"
                                  defaultValue={5}
                                />
                              </label>
                              {/*end::Checkbox*/}
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <span className="symbol-label bg-light-warning text-warning fw-semibold">
                                  C
                                </span>
                              </div>
                              {/*end::Avatar*/}
                              {/*begin::Details*/}
                              <div className="ms-5">
                                <a
                                  href="#"
                                  className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                >
                                  Mikaela Collins
                                </a>
                                <div className="fw-semibold text-muted">
                                  mik@pex.com
                                </div>
                              </div>
                              {/*end::Details*/}
                            </div>
                            {/*end::Details*/}
                            {/*begin::Access menu*/}
                            <div className="ms-2 w-100px">
                              <select
                                className="form-select form-select-solid form-select-sm"
                                data-control="select2"
                                data-hide-search="true"
                              >
                                <option value={1}>Guest</option>
                                <option value={2} selected="">
                                  Owner
                                </option>
                                <option value={3}>Can Edit</option>
                              </select>
                            </div>
                            {/*end::Access menu*/}
                          </div>
                          {/*end::User*/}
                          {/*begin::Separator*/}
                          <div className="border-bottom border-gray-300 border-bottom-dashed" />
                          {/*end::Separator*/}
                          {/*begin::User*/}
                          <div
                            className="rounded d-flex flex-stack bg-active-lighten p-4"
                            data-user-id={6}
                          >
                            {/*begin::Details*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Checkbox*/}
                              <label className="form-check form-check-custom form-check-solid me-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="users"
                                  data-kt-check="true"
                                  data-kt-check-target="[data-user-id='6']"
                                  defaultValue={6}
                                />
                              </label>
                              {/*end::Checkbox*/}
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <img alt="Pic" src="assets/media/avatars/300-9.jpg" />
                              </div>
                              {/*end::Avatar*/}
                              {/*begin::Details*/}
                              <div className="ms-5">
                                <a
                                  href="#"
                                  className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                >
                                  Francis Mitcham
                                </a>
                                <div className="fw-semibold text-muted">
                                  f.mit@kpmg.com
                                </div>
                              </div>
                              {/*end::Details*/}
                            </div>
                            {/*end::Details*/}
                            {/*begin::Access menu*/}
                            <div className="ms-2 w-100px">
                              <select
                                className="form-select form-select-solid form-select-sm"
                                data-control="select2"
                                data-hide-search="true"
                              >
                                <option value={1}>Guest</option>
                                <option value={2}>Owner</option>
                                <option value={3} selected="">
                                  Can Edit
                                </option>
                              </select>
                            </div>
                            {/*end::Access menu*/}
                          </div>
                          {/*end::User*/}
                          {/*begin::Separator*/}
                          <div className="border-bottom border-gray-300 border-bottom-dashed" />
                          {/*end::Separator*/}
                          {/*begin::User*/}
                          <div
                            className="rounded d-flex flex-stack bg-active-lighten p-4"
                            data-user-id={7}
                          >
                            {/*begin::Details*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Checkbox*/}
                              <label className="form-check form-check-custom form-check-solid me-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="users"
                                  data-kt-check="true"
                                  data-kt-check-target="[data-user-id='7']"
                                  defaultValue={7}
                                />
                              </label>
                              {/*end::Checkbox*/}
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <span className="symbol-label bg-light-danger text-danger fw-semibold">
                                  O
                                </span>
                              </div>
                              {/*end::Avatar*/}
                              {/*begin::Details*/}
                              <div className="ms-5">
                                <a
                                  href="#"
                                  className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                >
                                  Olivia Wild
                                </a>
                                <div className="fw-semibold text-muted">
                                  olivia@corpmail.com
                                </div>
                              </div>
                              {/*end::Details*/}
                            </div>
                            {/*end::Details*/}
                            {/*begin::Access menu*/}
                            <div className="ms-2 w-100px">
                              <select
                                className="form-select form-select-solid form-select-sm"
                                data-control="select2"
                                data-hide-search="true"
                              >
                                <option value={1}>Guest</option>
                                <option value={2} selected="">
                                  Owner
                                </option>
                                <option value={3}>Can Edit</option>
                              </select>
                            </div>
                            {/*end::Access menu*/}
                          </div>
                          {/*end::User*/}
                          {/*begin::Separator*/}
                          <div className="border-bottom border-gray-300 border-bottom-dashed" />
                          {/*end::Separator*/}
                          {/*begin::User*/}
                          <div
                            className="rounded d-flex flex-stack bg-active-lighten p-4"
                            data-user-id={8}
                          >
                            {/*begin::Details*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Checkbox*/}
                              <label className="form-check form-check-custom form-check-solid me-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="users"
                                  data-kt-check="true"
                                  data-kt-check-target="[data-user-id='8']"
                                  defaultValue={8}
                                />
                              </label>
                              {/*end::Checkbox*/}
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <span className="symbol-label bg-light-primary text-primary fw-semibold">
                                  N
                                </span>
                              </div>
                              {/*end::Avatar*/}
                              {/*begin::Details*/}
                              <div className="ms-5">
                                <a
                                  href="#"
                                  className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                >
                                  Neil Owen
                                </a>
                                <div className="fw-semibold text-muted">
                                  owen.neil@gmail.com
                                </div>
                              </div>
                              {/*end::Details*/}
                            </div>
                            {/*end::Details*/}
                            {/*begin::Access menu*/}
                            <div className="ms-2 w-100px">
                              <select
                                className="form-select form-select-solid form-select-sm"
                                data-control="select2"
                                data-hide-search="true"
                              >
                                <option value={1} selected="">
                                  Guest
                                </option>
                                <option value={2}>Owner</option>
                                <option value={3}>Can Edit</option>
                              </select>
                            </div>
                            {/*end::Access menu*/}
                          </div>
                          {/*end::User*/}
                          {/*begin::Separator*/}
                          <div className="border-bottom border-gray-300 border-bottom-dashed" />
                          {/*end::Separator*/}
                          {/*begin::User*/}
                          <div
                            className="rounded d-flex flex-stack bg-active-lighten p-4"
                            data-user-id={9}
                          >
                            {/*begin::Details*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Checkbox*/}
                              <label className="form-check form-check-custom form-check-solid me-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="users"
                                  data-kt-check="true"
                                  data-kt-check-target="[data-user-id='9']"
                                  defaultValue={9}
                                />
                              </label>
                              {/*end::Checkbox*/}
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <img alt="Pic" src="assets/media/avatars/300-23.jpg" />
                              </div>
                              {/*end::Avatar*/}
                              {/*begin::Details*/}
                              <div className="ms-5">
                                <a
                                  href="#"
                                  className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                >
                                  Dan Wilson
                                </a>
                                <div className="fw-semibold text-muted">
                                  dam@consilting.com
                                </div>
                              </div>
                              {/*end::Details*/}
                            </div>
                            {/*end::Details*/}
                            {/*begin::Access menu*/}
                            <div className="ms-2 w-100px">
                              <select
                                className="form-select form-select-solid form-select-sm"
                                data-control="select2"
                                data-hide-search="true"
                              >
                                <option value={1}>Guest</option>
                                <option value={2}>Owner</option>
                                <option value={3} selected="">
                                  Can Edit
                                </option>
                              </select>
                            </div>
                            {/*end::Access menu*/}
                          </div>
                          {/*end::User*/}
                          {/*begin::Separator*/}
                          <div className="border-bottom border-gray-300 border-bottom-dashed" />
                          {/*end::Separator*/}
                          {/*begin::User*/}
                          <div
                            className="rounded d-flex flex-stack bg-active-lighten p-4"
                            data-user-id={10}
                          >
                            {/*begin::Details*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Checkbox*/}
                              <label className="form-check form-check-custom form-check-solid me-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="users"
                                  data-kt-check="true"
                                  data-kt-check-target="[data-user-id='10']"
                                  defaultValue={10}
                                />
                              </label>
                              {/*end::Checkbox*/}
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <span className="symbol-label bg-light-danger text-danger fw-semibold">
                                  E
                                </span>
                              </div>
                              {/*end::Avatar*/}
                              {/*begin::Details*/}
                              <div className="ms-5">
                                <a
                                  href="#"
                                  className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                >
                                  Emma Bold
                                </a>
                                <div className="fw-semibold text-muted">
                                  emma@intenso.com
                                </div>
                              </div>
                              {/*end::Details*/}
                            </div>
                            {/*end::Details*/}
                            {/*begin::Access menu*/}
                            <div className="ms-2 w-100px">
                              <select
                                className="form-select form-select-solid form-select-sm"
                                data-control="select2"
                                data-hide-search="true"
                              >
                                <option value={1}>Guest</option>
                                <option value={2} selected="">
                                  Owner
                                </option>
                                <option value={3}>Can Edit</option>
                              </select>
                            </div>
                            {/*end::Access menu*/}
                          </div>
                          {/*end::User*/}
                          {/*begin::Separator*/}
                          <div className="border-bottom border-gray-300 border-bottom-dashed" />
                          {/*end::Separator*/}
                          {/*begin::User*/}
                          <div
                            className="rounded d-flex flex-stack bg-active-lighten p-4"
                            data-user-id={11}
                          >
                            {/*begin::Details*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Checkbox*/}
                              <label className="form-check form-check-custom form-check-solid me-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="users"
                                  data-kt-check="true"
                                  data-kt-check-target="[data-user-id='11']"
                                  defaultValue={11}
                                />
                              </label>
                              {/*end::Checkbox*/}
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <img alt="Pic" src="assets/media/avatars/300-12.jpg" />
                              </div>
                              {/*end::Avatar*/}
                              {/*begin::Details*/}
                              <div className="ms-5">
                                <a
                                  href="#"
                                  className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                >
                                  Ana Crown
                                </a>
                                <div className="fw-semibold text-muted">
                                  ana.cf@limtel.com
                                </div>
                              </div>
                              {/*end::Details*/}
                            </div>
                            {/*end::Details*/}
                            {/*begin::Access menu*/}
                            <div className="ms-2 w-100px">
                              <select
                                className="form-select form-select-solid form-select-sm"
                                data-control="select2"
                                data-hide-search="true"
                              >
                                <option value={1} selected="">
                                  Guest
                                </option>
                                <option value={2}>Owner</option>
                                <option value={3}>Can Edit</option>
                              </select>
                            </div>
                            {/*end::Access menu*/}
                          </div>
                          {/*end::User*/}
                          {/*begin::Separator*/}
                          <div className="border-bottom border-gray-300 border-bottom-dashed" />
                          {/*end::Separator*/}
                          {/*begin::User*/}
                          <div
                            className="rounded d-flex flex-stack bg-active-lighten p-4"
                            data-user-id={12}
                          >
                            {/*begin::Details*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Checkbox*/}
                              <label className="form-check form-check-custom form-check-solid me-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="users"
                                  data-kt-check="true"
                                  data-kt-check-target="[data-user-id='12']"
                                  defaultValue={12}
                                />
                              </label>
                              {/*end::Checkbox*/}
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <span className="symbol-label bg-light-info text-info fw-semibold">
                                  A
                                </span>
                              </div>
                              {/*end::Avatar*/}
                              {/*begin::Details*/}
                              <div className="ms-5">
                                <a
                                  href="#"
                                  className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                >
                                  Robert Doe
                                </a>
                                <div className="fw-semibold text-muted">
                                  robert@benko.com
                                </div>
                              </div>
                              {/*end::Details*/}
                            </div>
                            {/*end::Details*/}
                            {/*begin::Access menu*/}
                            <div className="ms-2 w-100px">
                              <select
                                className="form-select form-select-solid form-select-sm"
                                data-control="select2"
                                data-hide-search="true"
                              >
                                <option value={1}>Guest</option>
                                <option value={2}>Owner</option>
                                <option value={3} selected="">
                                  Can Edit
                                </option>
                              </select>
                            </div>
                            {/*end::Access menu*/}
                          </div>
                          {/*end::User*/}
                          {/*begin::Separator*/}
                          <div className="border-bottom border-gray-300 border-bottom-dashed" />
                          {/*end::Separator*/}
                          {/*begin::User*/}
                          <div
                            className="rounded d-flex flex-stack bg-active-lighten p-4"
                            data-user-id={13}
                          >
                            {/*begin::Details*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Checkbox*/}
                              <label className="form-check form-check-custom form-check-solid me-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="users"
                                  data-kt-check="true"
                                  data-kt-check-target="[data-user-id='13']"
                                  defaultValue={13}
                                />
                              </label>
                              {/*end::Checkbox*/}
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <img alt="Pic" src="assets/media/avatars/300-13.jpg" />
                              </div>
                              {/*end::Avatar*/}
                              {/*begin::Details*/}
                              <div className="ms-5">
                                <a
                                  href="#"
                                  className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                >
                                  John Miller
                                </a>
                                <div className="fw-semibold text-muted">
                                  miller@mapple.com
                                </div>
                              </div>
                              {/*end::Details*/}
                            </div>
                            {/*end::Details*/}
                            {/*begin::Access menu*/}
                            <div className="ms-2 w-100px">
                              <select
                                className="form-select form-select-solid form-select-sm"
                                data-control="select2"
                                data-hide-search="true"
                              >
                                <option value={1}>Guest</option>
                                <option value={2}>Owner</option>
                                <option value={3} selected="">
                                  Can Edit
                                </option>
                              </select>
                            </div>
                            {/*end::Access menu*/}
                          </div>
                          {/*end::User*/}
                          {/*begin::Separator*/}
                          <div className="border-bottom border-gray-300 border-bottom-dashed" />
                          {/*end::Separator*/}
                          {/*begin::User*/}
                          <div
                            className="rounded d-flex flex-stack bg-active-lighten p-4"
                            data-user-id={14}
                          >
                            {/*begin::Details*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Checkbox*/}
                              <label className="form-check form-check-custom form-check-solid me-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="users"
                                  data-kt-check="true"
                                  data-kt-check-target="[data-user-id='14']"
                                  defaultValue={14}
                                />
                              </label>
                              {/*end::Checkbox*/}
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <span className="symbol-label bg-light-success text-success fw-semibold">
                                  L
                                </span>
                              </div>
                              {/*end::Avatar*/}
                              {/*begin::Details*/}
                              <div className="ms-5">
                                <a
                                  href="#"
                                  className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                >
                                  Lucy Kunic
                                </a>
                                <div className="fw-semibold text-muted">
                                  lucy.m@fentech.com
                                </div>
                              </div>
                              {/*end::Details*/}
                            </div>
                            {/*end::Details*/}
                            {/*begin::Access menu*/}
                            <div className="ms-2 w-100px">
                              <select
                                className="form-select form-select-solid form-select-sm"
                                data-control="select2"
                                data-hide-search="true"
                              >
                                <option value={1}>Guest</option>
                                <option value={2} selected="">
                                  Owner
                                </option>
                                <option value={3}>Can Edit</option>
                              </select>
                            </div>
                            {/*end::Access menu*/}
                          </div>
                          {/*end::User*/}
                          {/*begin::Separator*/}
                          <div className="border-bottom border-gray-300 border-bottom-dashed" />
                          {/*end::Separator*/}
                          {/*begin::User*/}
                          <div
                            className="rounded d-flex flex-stack bg-active-lighten p-4"
                            data-user-id={15}
                          >
                            {/*begin::Details*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Checkbox*/}
                              <label className="form-check form-check-custom form-check-solid me-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="users"
                                  data-kt-check="true"
                                  data-kt-check-target="[data-user-id='15']"
                                  defaultValue={15}
                                />
                              </label>
                              {/*end::Checkbox*/}
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <img alt="Pic" src="assets/media/avatars/300-21.jpg" />
                              </div>
                              {/*end::Avatar*/}
                              {/*begin::Details*/}
                              <div className="ms-5">
                                <a
                                  href="#"
                                  className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                >
                                  Ethan Wilder
                                </a>
                                <div className="fw-semibold text-muted">
                                  ethan@loop.com.au
                                </div>
                              </div>
                              {/*end::Details*/}
                            </div>
                            {/*end::Details*/}
                            {/*begin::Access menu*/}
                            <div className="ms-2 w-100px">
                              <select
                                className="form-select form-select-solid form-select-sm"
                                data-control="select2"
                                data-hide-search="true"
                              >
                                <option value={1} selected="">
                                  Guest
                                </option>
                                <option value={2}>Owner</option>
                                <option value={3}>Can Edit</option>
                              </select>
                            </div>
                            {/*end::Access menu*/}
                          </div>
                          {/*end::User*/}
                          {/*begin::Separator*/}
                          <div className="border-bottom border-gray-300 border-bottom-dashed" />
                          {/*end::Separator*/}
                          {/*begin::User*/}
                          <div
                            className="rounded d-flex flex-stack bg-active-lighten p-4"
                            data-user-id={16}
                          >
                            {/*begin::Details*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Checkbox*/}
                              <label className="form-check form-check-custom form-check-solid me-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="users"
                                  data-kt-check="true"
                                  data-kt-check-target="[data-user-id='16']"
                                  defaultValue={16}
                                />
                              </label>
                              {/*end::Checkbox*/}
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <span className="symbol-label bg-light-warning text-warning fw-semibold">
                                  C
                                </span>
                              </div>
                              {/*end::Avatar*/}
                              {/*begin::Details*/}
                              <div className="ms-5">
                                <a
                                  href="#"
                                  className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                >
                                  Mikaela Collins
                                </a>
                                <div className="fw-semibold text-muted">
                                  mik@pex.com
                                </div>
                              </div>
                              {/*end::Details*/}
                            </div>
                            {/*end::Details*/}
                            {/*begin::Access menu*/}
                            <div className="ms-2 w-100px">
                              <select
                                className="form-select form-select-solid form-select-sm"
                                data-control="select2"
                                data-hide-search="true"
                              >
                                <option value={1}>Guest</option>
                                <option value={2}>Owner</option>
                                <option value={3} selected="">
                                  Can Edit
                                </option>
                              </select>
                            </div>
                            {/*end::Access menu*/}
                          </div>
                          {/*end::User*/}
                        </div>
                        {/*end::Users*/}
                        {/*begin::Actions*/}
                        <div className="d-flex flex-center mt-15">
                          <button
                            type="reset"
                            id="kt_modal_users_search_reset"
                            data-bs-dismiss="modal"
                            className="btn btn-active-light me-3"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            id="kt_modal_users_search_submit"
                            className="btn btn-primary"
                          >
                            Add Selected Users
                          </button>
                        </div>
                        {/*end::Actions*/}
                      </div>
                      {/*end::Results*/}
                      {/*begin::Empty*/}
                      <div
                        data-kt-search-element="empty"
                        className="text-center d-none"
                      >
                        {/*begin::Message*/}
                        <div className="fw-semibold py-10">
                          <div className="text-gray-600 fs-3 mb-2">No users found</div>
                          <div className="text-muted fs-6">
                            Try to search by username, full name or email...
                          </div>
                        </div>
                        {/*end::Message*/}
                        {/*begin::Illustration*/}
                        <div className="text-center px-5">
                          <img
                            src="assets/media/illustrations/sketchy-1/1.png"
                            alt=""
                            className="w-100 h-200px h-sm-325px"
                          />
                        </div>
                        {/*end::Illustration*/}
                      </div>
                      {/*end::Empty*/}
                    </div>
                    {/*end::Wrapper*/}
                  </div>
                  {/*end::Search*/}
                </div>
                {/*end::Modal body*/}
              </div>
              {/*end::Modal content*/}
            </div>
            {/*end::Modal dialog*/}
          </div>
          {/*end::Modal - Users Search*/}
          {/*begin::Modal - Invite Friends*/}
          <div
            className="modal fade"
            id="kt_modal_invite_friends"
            tabIndex={-1}
            aria-hidden="true"
          >
            {/*begin::Modal dialog*/}
            <div className="modal-dialog mw-650px">
              {/*begin::Modal content*/}
              <div className="modal-content">
                {/*begin::Modal header*/}
                <div className="modal-header pb-0 border-0 justify-content-end">
                  {/*begin::Close*/}
                  <div
                    className="btn btn-sm btn-icon btn-active-color-primary"
                    data-bs-dismiss="modal"
                  >
                    <i className="ki-duotone ki-cross fs-1">
                      <span className="path1" />
                      <span className="path2" />
                    </i>
                  </div>
                  {/*end::Close*/}
                </div>
                {/*begin::Modal header*/}
                {/*begin::Modal body*/}
                <div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
                  {/*begin::Heading*/}
                  <div className="text-center mb-13">
                    {/*begin::Title*/}
                    <h1 className="mb-3">Invite a Friend</h1>
                    {/*end::Title*/}
                    {/*begin::Description*/}
                    <div className="text-muted fw-semibold fs-5">
                      If you need more info, please check out
                      <a href="#" className="link-primary fw-bold">
                        FAQ Page
                      </a>
                      .
                    </div>
                    {/*end::Description*/}
                  </div>
                  {/*end::Heading*/}
                  {/*begin::Google Contacts Invite*/}
                  <div className="btn btn-light-primary fw-bold w-100 mb-8">
                    <img
                      alt="Logo"
                      src="assets/media/svg/brand-logos/google-icon.svg"
                      className="h-20px me-3"
                    />
                    Invite Gmail Contacts
                  </div>
                  {/*end::Google Contacts Invite*/}
                  {/*begin::Separator*/}
                  <div className="separator d-flex flex-center mb-8">
                    <span className="text-uppercase bg-body fs-7 fw-semibold text-muted px-3">
                      or
                    </span>
                  </div>
                  {/*end::Separator*/}
                  {/*begin::Textarea*/}
                  <textarea
                    className="form-control form-control-solid mb-8"
                    rows={3}
                    placeholder="Type or paste emails here"
                    defaultValue={"            "}
                  />
                  {/*end::Textarea*/}
                  {/*begin::Users*/}
                  <div className="mb-10">
                    {/*begin::Heading*/}
                    <div className="fs-6 fw-semibold mb-2">Your Invitations</div>
                    {/*end::Heading*/}
                    {/*begin::List*/}
                    <div className="mh-300px scroll-y me-n7 pe-7">
                      {/*begin::User*/}
                      <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                        {/*begin::Details*/}
                        <div className="d-flex align-items-center">
                          {/*begin::Avatar*/}
                          <div className="symbol symbol-35px symbol-circle">
                            <img alt="Pic" src="assets/media/avatars/300-6.jpg" />
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Details*/}
                          <div className="ms-5">
                            <a
                              href="#"
                              className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                            >
                              Emma Smith
                            </a>
                            <div className="fw-semibold text-muted">smith@kpmg.com</div>
                          </div>
                          {/*end::Details*/}
                        </div>
                        {/*end::Details*/}
                        {/*begin::Access menu*/}
                        <div className="ms-2 w-100px">
                          <select
                            className="form-select form-select-solid form-select-sm"
                            data-control="select2"
                            data-dropdown-parent="#kt_modal_invite_friends"
                            data-hide-search="true"
                          >
                            <option value={1}>Guest</option>
                            <option value={2} selected="">
                              Owner
                            </option>
                            <option value={3}>Can Edit</option>
                          </select>
                        </div>
                        {/*end::Access menu*/}
                      </div>
                      {/*end::User*/}
                      {/*begin::User*/}
                      <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                        {/*begin::Details*/}
                        <div className="d-flex align-items-center">
                          {/*begin::Avatar*/}
                          <div className="symbol symbol-35px symbol-circle">
                            <span className="symbol-label bg-light-danger text-danger fw-semibold">
                              M
                            </span>
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Details*/}
                          <div className="ms-5">
                            <a
                              href="#"
                              className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                            >
                              Melody Macy
                            </a>
                            <div className="fw-semibold text-muted">
                              melody@altbox.com
                            </div>
                          </div>
                          {/*end::Details*/}
                        </div>
                        {/*end::Details*/}
                        {/*begin::Access menu*/}
                        <div className="ms-2 w-100px">
                          <select
                            className="form-select form-select-solid form-select-sm"
                            data-control="select2"
                            data-dropdown-parent="#kt_modal_invite_friends"
                            data-hide-search="true"
                          >
                            <option value={1} selected="">
                              Guest
                            </option>
                            <option value={2}>Owner</option>
                            <option value={3}>Can Edit</option>
                          </select>
                        </div>
                        {/*end::Access menu*/}
                      </div>
                      {/*end::User*/}
                      {/*begin::User*/}
                      <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                        {/*begin::Details*/}
                        <div className="d-flex align-items-center">
                          {/*begin::Avatar*/}
                          <div className="symbol symbol-35px symbol-circle">
                            <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Details*/}
                          <div className="ms-5">
                            <a
                              href="#"
                              className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                            >
                              Max Smith
                            </a>
                            <div className="fw-semibold text-muted">max@kt.com</div>
                          </div>
                          {/*end::Details*/}
                        </div>
                        {/*end::Details*/}
                        {/*begin::Access menu*/}
                        <div className="ms-2 w-100px">
                          <select
                            className="form-select form-select-solid form-select-sm"
                            data-control="select2"
                            data-dropdown-parent="#kt_modal_invite_friends"
                            data-hide-search="true"
                          >
                            <option value={1}>Guest</option>
                            <option value={2}>Owner</option>
                            <option value={3} selected="">
                              Can Edit
                            </option>
                          </select>
                        </div>
                        {/*end::Access menu*/}
                      </div>
                      {/*end::User*/}
                      {/*begin::User*/}
                      <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                        {/*begin::Details*/}
                        <div className="d-flex align-items-center">
                          {/*begin::Avatar*/}
                          <div className="symbol symbol-35px symbol-circle">
                            <img alt="Pic" src="assets/media/avatars/300-5.jpg" />
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Details*/}
                          <div className="ms-5">
                            <a
                              href="#"
                              className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                            >
                              Sean Bean
                            </a>
                            <div className="fw-semibold text-muted">
                              sean@dellito.com
                            </div>
                          </div>
                          {/*end::Details*/}
                        </div>
                        {/*end::Details*/}
                        {/*begin::Access menu*/}
                        <div className="ms-2 w-100px">
                          <select
                            className="form-select form-select-solid form-select-sm"
                            data-control="select2"
                            data-dropdown-parent="#kt_modal_invite_friends"
                            data-hide-search="true"
                          >
                            <option value={1}>Guest</option>
                            <option value={2} selected="">
                              Owner
                            </option>
                            <option value={3}>Can Edit</option>
                          </select>
                        </div>
                        {/*end::Access menu*/}
                      </div>
                      {/*end::User*/}
                      {/*begin::User*/}
                      <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                        {/*begin::Details*/}
                        <div className="d-flex align-items-center">
                          {/*begin::Avatar*/}
                          <div className="symbol symbol-35px symbol-circle">
                            <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Details*/}
                          <div className="ms-5">
                            <a
                              href="#"
                              className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                            >
                              Brian Cox
                            </a>
                            <div className="fw-semibold text-muted">
                              brian@exchange.com
                            </div>
                          </div>
                          {/*end::Details*/}
                        </div>
                        {/*end::Details*/}
                        {/*begin::Access menu*/}
                        <div className="ms-2 w-100px">
                          <select
                            className="form-select form-select-solid form-select-sm"
                            data-control="select2"
                            data-dropdown-parent="#kt_modal_invite_friends"
                            data-hide-search="true"
                          >
                            <option value={1}>Guest</option>
                            <option value={2}>Owner</option>
                            <option value={3} selected="">
                              Can Edit
                            </option>
                          </select>
                        </div>
                        {/*end::Access menu*/}
                      </div>
                      {/*end::User*/}
                      {/*begin::User*/}
                      <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                        {/*begin::Details*/}
                        <div className="d-flex align-items-center">
                          {/*begin::Avatar*/}
                          <div className="symbol symbol-35px symbol-circle">
                            <span className="symbol-label bg-light-warning text-warning fw-semibold">
                              C
                            </span>
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Details*/}
                          <div className="ms-5">
                            <a
                              href="#"
                              className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                            >
                              Mikaela Collins
                            </a>
                            <div className="fw-semibold text-muted">mik@pex.com</div>
                          </div>
                          {/*end::Details*/}
                        </div>
                        {/*end::Details*/}
                        {/*begin::Access menu*/}
                        <div className="ms-2 w-100px">
                          <select
                            className="form-select form-select-solid form-select-sm"
                            data-control="select2"
                            data-dropdown-parent="#kt_modal_invite_friends"
                            data-hide-search="true"
                          >
                            <option value={1}>Guest</option>
                            <option value={2} selected="">
                              Owner
                            </option>
                            <option value={3}>Can Edit</option>
                          </select>
                        </div>
                        {/*end::Access menu*/}
                      </div>
                      {/*end::User*/}
                      {/*begin::User*/}
                      <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                        {/*begin::Details*/}
                        <div className="d-flex align-items-center">
                          {/*begin::Avatar*/}
                          <div className="symbol symbol-35px symbol-circle">
                            <img alt="Pic" src="assets/media/avatars/300-9.jpg" />
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Details*/}
                          <div className="ms-5">
                            <a
                              href="#"
                              className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                            >
                              Francis Mitcham
                            </a>
                            <div className="fw-semibold text-muted">f.mit@kpmg.com</div>
                          </div>
                          {/*end::Details*/}
                        </div>
                        {/*end::Details*/}
                        {/*begin::Access menu*/}
                        <div className="ms-2 w-100px">
                          <select
                            className="form-select form-select-solid form-select-sm"
                            data-control="select2"
                            data-dropdown-parent="#kt_modal_invite_friends"
                            data-hide-search="true"
                          >
                            <option value={1}>Guest</option>
                            <option value={2}>Owner</option>
                            <option value={3} selected="">
                              Can Edit
                            </option>
                          </select>
                        </div>
                        {/*end::Access menu*/}
                      </div>
                      {/*end::User*/}
                      {/*begin::User*/}
                      <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                        {/*begin::Details*/}
                        <div className="d-flex align-items-center">
                          {/*begin::Avatar*/}
                          <div className="symbol symbol-35px symbol-circle">
                            <span className="symbol-label bg-light-danger text-danger fw-semibold">
                              O
                            </span>
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Details*/}
                          <div className="ms-5">
                            <a
                              href="#"
                              className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                            >
                              Olivia Wild
                            </a>
                            <div className="fw-semibold text-muted">
                              olivia@corpmail.com
                            </div>
                          </div>
                          {/*end::Details*/}
                        </div>
                        {/*end::Details*/}
                        {/*begin::Access menu*/}
                        <div className="ms-2 w-100px">
                          <select
                            className="form-select form-select-solid form-select-sm"
                            data-control="select2"
                            data-dropdown-parent="#kt_modal_invite_friends"
                            data-hide-search="true"
                          >
                            <option value={1}>Guest</option>
                            <option value={2} selected="">
                              Owner
                            </option>
                            <option value={3}>Can Edit</option>
                          </select>
                        </div>
                        {/*end::Access menu*/}
                      </div>
                      {/*end::User*/}
                      {/*begin::User*/}
                      <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                        {/*begin::Details*/}
                        <div className="d-flex align-items-center">
                          {/*begin::Avatar*/}
                          <div className="symbol symbol-35px symbol-circle">
                            <span className="symbol-label bg-light-primary text-primary fw-semibold">
                              N
                            </span>
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Details*/}
                          <div className="ms-5">
                            <a
                              href="#"
                              className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                            >
                              Neil Owen
                            </a>
                            <div className="fw-semibold text-muted">
                              owen.neil@gmail.com
                            </div>
                          </div>
                          {/*end::Details*/}
                        </div>
                        {/*end::Details*/}
                        {/*begin::Access menu*/}
                        <div className="ms-2 w-100px">
                          <select
                            className="form-select form-select-solid form-select-sm"
                            data-control="select2"
                            data-dropdown-parent="#kt_modal_invite_friends"
                            data-hide-search="true"
                          >
                            <option value={1} selected="">
                              Guest
                            </option>
                            <option value={2}>Owner</option>
                            <option value={3}>Can Edit</option>
                          </select>
                        </div>
                        {/*end::Access menu*/}
                      </div>
                      {/*end::User*/}
                      {/*begin::User*/}
                      <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                        {/*begin::Details*/}
                        <div className="d-flex align-items-center">
                          {/*begin::Avatar*/}
                          <div className="symbol symbol-35px symbol-circle">
                            <img alt="Pic" src="assets/media/avatars/300-23.jpg" />
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Details*/}
                          <div className="ms-5">
                            <a
                              href="#"
                              className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                            >
                              Dan Wilson
                            </a>
                            <div className="fw-semibold text-muted">
                              dam@consilting.com
                            </div>
                          </div>
                          {/*end::Details*/}
                        </div>
                        {/*end::Details*/}
                        {/*begin::Access menu*/}
                        <div className="ms-2 w-100px">
                          <select
                            className="form-select form-select-solid form-select-sm"
                            data-control="select2"
                            data-dropdown-parent="#kt_modal_invite_friends"
                            data-hide-search="true"
                          >
                            <option value={1}>Guest</option>
                            <option value={2}>Owner</option>
                            <option value={3} selected="">
                              Can Edit
                            </option>
                          </select>
                        </div>
                        {/*end::Access menu*/}
                      </div>
                      {/*end::User*/}
                      {/*begin::User*/}
                      <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                        {/*begin::Details*/}
                        <div className="d-flex align-items-center">
                          {/*begin::Avatar*/}
                          <div className="symbol symbol-35px symbol-circle">
                            <span className="symbol-label bg-light-danger text-danger fw-semibold">
                              E
                            </span>
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Details*/}
                          <div className="ms-5">
                            <a
                              href="#"
                              className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                            >
                              Emma Bold
                            </a>
                            <div className="fw-semibold text-muted">
                              emma@intenso.com
                            </div>
                          </div>
                          {/*end::Details*/}
                        </div>
                        {/*end::Details*/}
                        {/*begin::Access menu*/}
                        <div className="ms-2 w-100px">
                          <select
                            className="form-select form-select-solid form-select-sm"
                            data-control="select2"
                            data-dropdown-parent="#kt_modal_invite_friends"
                            data-hide-search="true"
                          >
                            <option value={1}>Guest</option>
                            <option value={2} selected="">
                              Owner
                            </option>
                            <option value={3}>Can Edit</option>
                          </select>
                        </div>
                        {/*end::Access menu*/}
                      </div>
                      {/*end::User*/}
                      {/*begin::User*/}
                      <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                        {/*begin::Details*/}
                        <div className="d-flex align-items-center">
                          {/*begin::Avatar*/}
                          <div className="symbol symbol-35px symbol-circle">
                            <img alt="Pic" src="assets/media/avatars/300-12.jpg" />
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Details*/}
                          <div className="ms-5">
                            <a
                              href="#"
                              className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                            >
                              Ana Crown
                            </a>
                            <div className="fw-semibold text-muted">
                              ana.cf@limtel.com
                            </div>
                          </div>
                          {/*end::Details*/}
                        </div>
                        {/*end::Details*/}
                        {/*begin::Access menu*/}
                        <div className="ms-2 w-100px">
                          <select
                            className="form-select form-select-solid form-select-sm"
                            data-control="select2"
                            data-dropdown-parent="#kt_modal_invite_friends"
                            data-hide-search="true"
                          >
                            <option value={1} selected="">
                              Guest
                            </option>
                            <option value={2}>Owner</option>
                            <option value={3}>Can Edit</option>
                          </select>
                        </div>
                        {/*end::Access menu*/}
                      </div>
                      {/*end::User*/}
                      {/*begin::User*/}
                      <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                        {/*begin::Details*/}
                        <div className="d-flex align-items-center">
                          {/*begin::Avatar*/}
                          <div className="symbol symbol-35px symbol-circle">
                            <span className="symbol-label bg-light-info text-info fw-semibold">
                              A
                            </span>
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Details*/}
                          <div className="ms-5">
                            <a
                              href="#"
                              className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                            >
                              Robert Doe
                            </a>
                            <div className="fw-semibold text-muted">
                              robert@benko.com
                            </div>
                          </div>
                          {/*end::Details*/}
                        </div>
                        {/*end::Details*/}
                        {/*begin::Access menu*/}
                        <div className="ms-2 w-100px">
                          <select
                            className="form-select form-select-solid form-select-sm"
                            data-control="select2"
                            data-dropdown-parent="#kt_modal_invite_friends"
                            data-hide-search="true"
                          >
                            <option value={1}>Guest</option>
                            <option value={2}>Owner</option>
                            <option value={3} selected="">
                              Can Edit
                            </option>
                          </select>
                        </div>
                        {/*end::Access menu*/}
                      </div>
                      {/*end::User*/}
                      {/*begin::User*/}
                      <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                        {/*begin::Details*/}
                        <div className="d-flex align-items-center">
                          {/*begin::Avatar*/}
                          <div className="symbol symbol-35px symbol-circle">
                            <img alt="Pic" src="assets/media/avatars/300-13.jpg" />
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Details*/}
                          <div className="ms-5">
                            <a
                              href="#"
                              className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                            >
                              John Miller
                            </a>
                            <div className="fw-semibold text-muted">
                              miller@mapple.com
                            </div>
                          </div>
                          {/*end::Details*/}
                        </div>
                        {/*end::Details*/}
                        {/*begin::Access menu*/}
                        <div className="ms-2 w-100px">
                          <select
                            className="form-select form-select-solid form-select-sm"
                            data-control="select2"
                            data-dropdown-parent="#kt_modal_invite_friends"
                            data-hide-search="true"
                          >
                            <option value={1}>Guest</option>
                            <option value={2}>Owner</option>
                            <option value={3} selected="">
                              Can Edit
                            </option>
                          </select>
                        </div>
                        {/*end::Access menu*/}
                      </div>
                      {/*end::User*/}
                      {/*begin::User*/}
                      <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                        {/*begin::Details*/}
                        <div className="d-flex align-items-center">
                          {/*begin::Avatar*/}
                          <div className="symbol symbol-35px symbol-circle">
                            <span className="symbol-label bg-light-success text-success fw-semibold">
                              L
                            </span>
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Details*/}
                          <div className="ms-5">
                            <a
                              href="#"
                              className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                            >
                              Lucy Kunic
                            </a>
                            <div className="fw-semibold text-muted">
                              lucy.m@fentech.com
                            </div>
                          </div>
                          {/*end::Details*/}
                        </div>
                        {/*end::Details*/}
                        {/*begin::Access menu*/}
                        <div className="ms-2 w-100px">
                          <select
                            className="form-select form-select-solid form-select-sm"
                            data-control="select2"
                            data-dropdown-parent="#kt_modal_invite_friends"
                            data-hide-search="true"
                          >
                            <option value={1}>Guest</option>
                            <option value={2} selected="">
                              Owner
                            </option>
                            <option value={3}>Can Edit</option>
                          </select>
                        </div>
                        {/*end::Access menu*/}
                      </div>
                      {/*end::User*/}
                      {/*begin::User*/}
                      <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                        {/*begin::Details*/}
                        <div className="d-flex align-items-center">
                          {/*begin::Avatar*/}
                          <div className="symbol symbol-35px symbol-circle">
                            <img alt="Pic" src="assets/media/avatars/300-21.jpg" />
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Details*/}
                          <div className="ms-5">
                            <a
                              href="#"
                              className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                            >
                              Ethan Wilder
                            </a>
                            <div className="fw-semibold text-muted">
                              ethan@loop.com.au
                            </div>
                          </div>
                          {/*end::Details*/}
                        </div>
                        {/*end::Details*/}
                        {/*begin::Access menu*/}
                        <div className="ms-2 w-100px">
                          <select
                            className="form-select form-select-solid form-select-sm"
                            data-control="select2"
                            data-dropdown-parent="#kt_modal_invite_friends"
                            data-hide-search="true"
                          >
                            <option value={1} selected="">
                              Guest
                            </option>
                            <option value={2}>Owner</option>
                            <option value={3}>Can Edit</option>
                          </select>
                        </div>
                        {/*end::Access menu*/}
                      </div>
                      {/*end::User*/}
                      {/*begin::User*/}
                      <div className="d-flex flex-stack py-4">
                        {/*begin::Details*/}
                        <div className="d-flex align-items-center">
                          {/*begin::Avatar*/}
                          <div className="symbol symbol-35px symbol-circle">
                            <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Details*/}
                          <div className="ms-5">
                            <a
                              href="#"
                              className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                            >
                              Max Smith
                            </a>
                            <div className="fw-semibold text-muted">max@kt.com</div>
                          </div>
                          {/*end::Details*/}
                        </div>
                        {/*end::Details*/}
                        {/*begin::Access menu*/}
                        <div className="ms-2 w-100px">
                          <select
                            className="form-select form-select-solid form-select-sm"
                            data-control="select2"
                            data-dropdown-parent="#kt_modal_invite_friends"
                            data-hide-search="true"
                          >
                            <option value={1}>Guest</option>
                            <option value={2}>Owner</option>
                            <option value={3} selected="">
                              Can Edit
                            </option>
                          </select>
                        </div>
                        {/*end::Access menu*/}
                      </div>
                      {/*end::User*/}
                    </div>
                    {/*end::List*/}
                  </div>
                  {/*end::Users*/}
                  {/*begin::Notice*/}
                  <div className="d-flex flex-stack">
                    {/*begin::Label*/}
                    <div className="me-5 fw-semibold">
                      <label className="fs-6">Adding Users by Team Members</label>
                      <div className="fs-7 text-muted">
                        If you need more info, please check budget planning
                      </div>
                    </div>
                    {/*end::Label*/}
                    {/*begin::Switch*/}
                    <label className="form-check form-switch form-check-custom form-check-solid">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue={1}
                        defaultChecked="checked"
                      />
                      <span className="form-check-label fw-semibold text-muted">
                        Allowed
                      </span>
                    </label>
                    {/*end::Switch*/}
                  </div>
                  {/*end::Notice*/}
                </div>
                {/*end::Modal body*/}
              </div>
              {/*end::Modal content*/}
            </div>
            {/*end::Modal dialog*/}
          </div>
          {/*end::Modal - Invite Friend*/}
          {/*end::Modals*/}
          {/*begin::Javascript*/}
          {/*end::Custom Javascript*/}
          {/*end::Javascript*/}
          <ThemeBuilder />
        </>
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

