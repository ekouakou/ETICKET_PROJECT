import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import HeaderWrapper from "./HeaderWrappers.js";
import Main from "./Main";
import Aside from "./Aside";
import Builder from "./Builder";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ThemeModeComponent = () => {
  const defaultThemeMode = "light";
  const [themeMode, setThemeMode] = useState(defaultThemeMode);
  const [isDrawerOn, setIsDrawerOn] = useState(window.innerWidth > 768);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

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
    let currentThemeMode;

    if (document.documentElement.hasAttribute("data-bs-theme-mode")) {
      currentThemeMode = document.documentElement.getAttribute("data-bs-theme-mode");
    } else if (localStorage.getItem("data-bs-theme") !== null) {
      currentThemeMode = localStorage.getItem("data-bs-theme");
    } else {
      currentThemeMode = defaultThemeMode;
    }

    if (currentThemeMode === "system") {
      currentThemeMode = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }

    document.documentElement.setAttribute("data-bs-theme", currentThemeMode);
    setThemeMode(currentThemeMode);
  }, []);

  return (
    <div id="kt_app_body" data-kt-app-layout="dark-sidebar" data-kt-app-header-fixed="true" data-kt-app-sidebar-enabled="true" data-kt-app-sidebar-fixed="true" data-kt-app-sidebar-hoverable="true" data-kt-app-sidebar-push-header="true" data-kt-app-sidebar-push-toolbar="true" data-kt-app-sidebar-push-footer="true" data-kt-app-toolbar-enabled="true" data-kt-app-aside-enabled="true" data-kt-app-aside-fixed="true" data-kt-app-aside-push-footer="true" className="app-default"
    >
      <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
        <div className="app-page flex-column flex-column-fluid" id="kt_app_page">
          <div id="kt_app_header" className="app-header" data-kt-sticky="true" data-kt-sticky-activate="{default: true, lg: true}" data-kt-sticky-name="app-header-minimize" data-kt-sticky-offset="{default: '200px', lg: '0'}" data-kt-sticky-animation="false" >
            <div className="app-container container-fluid d-flex align-items-stretch justify-content-between" id="kt_app_header_container">
              <div className="d-flex align-items-center d-lg-none ms-n3 me-1 me-md-2" title="Show sidebar menu">
                <div className="btn btn-icon btn-active-color-primary w-35px h-35px" id="kt_app_sidebar_mobile_toggle" onClick={handleSidebarToggle}>
                  <FontAwesomeIcon icon={faArrowRight} className="fs-3 " />
                </div>
              </div>
              <div className="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
                <a href="../index.html" className="d-lg-none">
                  <img alt="Logo" src="../assets/media/logos/default-small.svg" className="h-30px" />
                </a>
              </div>
              <HeaderWrapper />
            </div>
          </div>
          <div className="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
            <div id="kt_app_sidebar" className={`app-sidebar flex-column drawer drawer-start ${isDrawerOn ? "drawer-on" : ""}`} data-kt-drawer="true" data-kt-drawer-name="app-sidebar" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="225px" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle" >
              <div className="app-sidebar-logo px-6" id="kt_app_sidebar_logo">
                <a href="../index.html">
                  <img alt="Logo" src="../assets/media/logos/default-dark.svg" className="h-25px app-sidebar-logo-default"/>
                  <img alt="Logo" src="../assets/media/logos/default-small.svg" className="h-20px app-sidebar-logo-minimize" />
                </a>
                <div id="kt_app_sidebar_toggle" className="app-sidebar-toggle btn btn-icon btn-shadow btn-sm btn-color-muted btn-active-color-primary h-30px w-30px position-absolute top-50 end-0 translate-middle rotate" data-kt-toggle="true" data-kt-toggle-state="active" data-kt-toggle-target="body" data-kt-toggle-name="app-sidebar-minimize" >
                  <FontAwesomeIcon icon={faArrowLeft} className="fs-3 rotate-180" />
                </div>
              </div>
              <Menu />
            </div>
            <Main />
            <Aside />
          </div>
        </div>
      </div>

      {isMobile && isDrawerOn && (
        <div className="drawer-overlay" onClick={handleSidebarToggle} />
      )}
      <Builder />
    </div>
  );
};

export default ThemeModeComponent;
