import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTachometerAlt,
  faList,
  faCalendarAlt,
  faFileAlt,
  faUser,
  faEllipsisH
} from '@fortawesome/free-solid-svg-icons';
// import './SidebarMenu.css';

const { SubMenu } = Menu;

const iconMapping = {
  faTachometerAlt: faTachometerAlt,
  faList: faList,
  faCalendarAlt: faCalendarAlt,
  faFileAlt: faFileAlt,
  faUser: faUser,
  faEllipsisH: faEllipsisH,
};

const Aside = () => {
  const [openKeys, setOpenKeys] = useState([]);
  const location = useLocation();

  // Récupérer les données du menu depuis le localStorage
  const menuData = [
    {
      "id": "14",
      "str_name": "Traitements Journaliers",
      "str_class": null,
      "menu": [
        {
          "id": "1",
          "str_name": "Tableau bord",
          "str_url": "tableau-bord",
          "str_class": "faTachometerAlt",
          "sousmenu": []
        },
        {
          "id": "2",
          "str_name": "Evènements",
          "str_url": "#",
          "str_class": "faCalendarAlt",
          "sousmenu": [
            {
              "id": "3",
              "str_name": "Liste des evenements",
              "str_url": "liste-event-data",
              "str_class": "faList"
            },
            {
              "id": "4",
              "str_name": "Creation d'évenement",
              "str_url": "save-event-data",
              "str_class": "faCalendarAlt"
            }
          ]
        },
        {
          "id": "6",
          "str_name": "Bannières",
          "str_url": "#",
          "str_class": "faFileAlt",
          "sousmenu": [
            {
              "id": "7",
              "str_name": "Creation de bannières",
              "str_url": "save-event-banner",
              "str_class": "faFileAlt"
            },
            {
              "id": "10",
              "str_name": "Liste des bannières",
              "str_url": "liste-event-banniere",
              "str_class": "faFileAlt"
            }
          ]
        },
        {
          "id": "15",
          "str_name": "Utilisateurs",
          "str_url": "#",
          "str_class": "faUser",
          "sousmenu": [
            {
              "id": "16",
              "str_name": "Créer un utilisateur",
              "str_url": "save-utilisateurs",
              "str_class": "faList"
            },
            {
              "id": "17",
              "str_name": "Liste des utilisateurs",
              "str_url": "liste-utilisateurs",
              "str_class": "faList"
            }
          ]
        },
        {
          "id": "11",
          "str_name": "Reporting",
          "str_url": "#",
          "str_class": "faUser",
          "sousmenu": [
            {
              "id": "12",
              "str_name": "Suivi clients",
              "str_url": "/liste-client/",
              "str_class": "faList"
            },
            {
              "id": "13",
              "str_name": "Historique Tickets",
              "str_url": "/liste-ticket/",
              "str_class": "faList"
            }
          ]
        },
        {
          "id": "35",
          "str_name": "Paramétrage",
          "str_url": "#",
          "str_class": "parametrage.svg",
          "sousmenu": [
            {
              "id": "37",
              "str_name": "Phase notification",
              "str_url": "listListe.html?t=ETAPE&n=Phase notification",
              "str_class": "icon fa-sitemap"
            },
            {
              "id": "38",
              "str_name": "Alertes",
              "str_url": "listAlerte.html?n=Alertes",
              "str_class": "icon fa-sitemap"
            }
          ]
        }
      ]
    }
  ];

  const menu = menuData[0]?.menu || [];

  useEffect(() => {
    const path = location.pathname;
    menu.forEach(item => {
      if (item.sousmenu && item.sousmenu.length > 0) {
        const activeSubMenu = item.sousmenu.some(subItem => subItem.str_url === path);
        if (activeSubMenu) {
          setOpenKeys([item.str_name]);
        }
      }
    });
  }, [location, menu]);

  const handleOpenChange = (keys) => {
    const latestKey = keys.find(key => openKeys.indexOf(key) === -1);
    setOpenKeys(latestKey ? [latestKey] : []);
  };

  const renderSubMenu = (subItems) => {
    return subItems.map((item) => (
      <Menu.Item
        key={item.id}
        icon={item.str_class && iconMapping[item.str_class] ?
          <FontAwesomeIcon icon={iconMapping[item.str_class]} /> :
          null
        }
      >
        <Link to={item.str_url}>{item.str_name}</Link>
      </Menu.Item>
    ));
  };

  return (
    <>
      {/*begin::aside*/}
      <div
        id="kt_app_aside"
        className="app-aside flex-column mt-7"
        data-kt-drawer="true"
        data-kt-drawer-name="app-aside"
        data-kt-drawer-activate="{default: true, lg: false}"
        data-kt-drawer-overlay="true"
        data-kt-drawer-width="auto"
        data-kt-drawer-direction="end"
        data-kt-drawer-toggle="#kt_app_aside_toggle"
      >
        {/*begin::Aside wrapper*/}
        <div
          id="kt_app_aside_wrapper"
          className="hover-scroll-y px-5 mx-5 my-5"
          data-kt-scroll="true"
          data-kt-scroll-activate="true"
          data-kt-scroll-height="auto"
          data-kt-scroll-dependencies="#kt_app_header"
          data-kt-scroll-wrappers="#kt_app_aside"
          data-kt-scroll-offset="5px"
          data-kt-scroll-save-state="true"
        >
          {/*begin::Aside 5*/}
          <div className="card card-reset card-p-0">
            {/*begin::Header*/}
            <div className="card-header align-items-center min-h-auto mb-5">
              <h3 className="card-title text-gray-900 fs-3 fw-bold mb-0">
                Calendar
              </h3>
              {/*end::Title*/}
              {/*begin::Toolbar*/}
              <div className="card-toolbar mb-0">
                {/*begin::Menu- wrapper*/}
                <div
                  className="btn btn-icon bg-light w-35px h-35px w-md-40px h-md-40px"
                  data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                  data-kt-menu-attach="parent"
                  data-kt-menu-placement="bottom-end"
                >
                  <i className="ki-duotone ki-calendar fs-1 text-gray-700">
                    <span className="path1" />
                    <span className="path2" />
                  </i>
                </div>
                {/*begin::Menu*/}
                <div
                  className="menu menu-sub menu-sub-dropdown menu-column w-350px w-lg-375px"
                  data-kt-menu="true"
                  id="kt_menu_notifications"
                >
                  {/*begin::Heading*/}
                  <div
                    className="d-flex flex-column bgi-no-repeat rounded-top"
                    style={{
                      backgroundImage:
                        'url("../assets/media/misc/menu-header-bg.jpg")',
                    }}
                  >
                    {/*begin::Title*/}
                    <h3 className="text-white fw-semibold px-9 mt-10 mb-6">
                      Notifications
                      <span className="fs-8 opacity-75 ps-3">
                        24 reports
                      </span>
                    </h3>
                    {/*end::Title*/}
                    {/*begin::Tabs*/}
                    <ul className="nav nav-line-tabs nav-line-tabs-2x nav-stretch fw-semibold px-9">
                      <li className="nav-item">
                        <a
                          className="nav-link text-white opacity-75 opacity-state-100 pb-4"
                          data-bs-toggle="tab"
                          href="#kt_topbar_notifications_1"
                        >
                          Alerts
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link text-white opacity-75 opacity-state-100 pb-4 active"
                          data-bs-toggle="tab"
                          href="#kt_topbar_notifications_2"
                        >
                          Updates
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link text-white opacity-75 opacity-state-100 pb-4"
                          data-bs-toggle="tab"
                          href="#kt_topbar_notifications_3"
                        >
                          Logs
                        </a>
                      </li>
                    </ul>
                    {/*end::Tabs*/}
                  </div>
                  {/*end::Heading*/}
                  {/*begin::Tab content*/}
                  <div className="tab-content">
                    {/*begin::Tab panel*/}
                    <div
                      className="tab-pane fade"
                      id="kt_topbar_notifications_1"
                      role="tabpanel"
                    >
                      {/*begin::Items*/}
                      <div className="scroll-y mh-325px my-5 px-8">
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Symbol*/}
                            <div className="symbol symbol-35px me-4">
                              <span className="symbol-label bg-light-primary">
                                <i className="ki-duotone ki-abstract-28 fs-2 text-primary">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>
                              </span>
                            </div>
                            {/*end::Symbol*/}
                            {/*begin::Title*/}
                            <div className="mb-0 me-2">
                              <a
                                href="#"
                                className="fs-6 text-gray-800 text-hover-primary fw-bold"
                              >
                                Project Alice
                              </a>
                              <div className="text-gray-500 fs-7">
                                Phase 1 development
                              </div>
                            </div>
                            {/*end::Title*/}
                          </div>
                          {/*end::Section*/}
                          {/*begin::Label*/}
                          <span className="badge badge-light fs-8">
                            1 hr
                          </span>
                          {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Symbol*/}
                            <div className="symbol symbol-35px me-4">
                              <span className="symbol-label bg-light-danger">
                                <i className="ki-duotone ki-information fs-2 text-danger">
                                  <span className="path1" />
                                  <span className="path2" />
                                  <span className="path3" />
                                </i>
                              </span>
                            </div>
                            {/*end::Symbol*/}
                            {/*begin::Title*/}
                            <div className="mb-0 me-2">
                              <a
                                href="#"
                                className="fs-6 text-gray-800 text-hover-primary fw-bold"
                              >
                                HR Confidential
                              </a>
                              <div className="text-gray-500 fs-7">
                                Confidential staff documents
                              </div>
                            </div>
                            {/*end::Title*/}
                          </div>
                          {/*end::Section*/}
                          {/*begin::Label*/}
                          <span className="badge badge-light fs-8">
                            2 hrs
                          </span>
                          {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Symbol*/}
                            <div className="symbol symbol-35px me-4">
                              <span className="symbol-label bg-light-warning">
                                <i className="ki-duotone ki-briefcase fs-2 text-warning">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>
                              </span>
                            </div>
                            {/*end::Symbol*/}
                            {/*begin::Title*/}
                            <div className="mb-0 me-2">
                              <a
                                href="#"
                                className="fs-6 text-gray-800 text-hover-primary fw-bold"
                              >
                                Company HR
                              </a>
                              <div className="text-gray-500 fs-7">
                                Corporeate staff profiles
                              </div>
                            </div>
                            {/*end::Title*/}
                          </div>
                          {/*end::Section*/}
                          {/*begin::Label*/}
                          <span className="badge badge-light fs-8">
                            5 hrs
                          </span>
                          {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Symbol*/}
                            <div className="symbol symbol-35px me-4">
                              <span className="symbol-label bg-light-success">
                                <i className="ki-duotone ki-abstract-12 fs-2 text-success">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>
                              </span>
                            </div>
                            {/*end::Symbol*/}
                            {/*begin::Title*/}
                            <div className="mb-0 me-2">
                              <a
                                href="#"
                                className="fs-6 text-gray-800 text-hover-primary fw-bold"
                              >
                                Project Redux
                              </a>
                              <div className="text-gray-500 fs-7">
                                New frontend admin theme
                              </div>
                            </div>
                            {/*end::Title*/}
                          </div>
                          {/*end::Section*/}
                          {/*begin::Label*/}
                          <span className="badge badge-light fs-8">
                            2 days
                          </span>
                          {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Symbol*/}
                            <div className="symbol symbol-35px me-4">
                              <span className="symbol-label bg-light-primary">
                                <i className="ki-duotone ki-colors-square fs-2 text-primary">
                                  <span className="path1" />
                                  <span className="path2" />
                                  <span className="path3" />
                                  <span className="path4" />
                                </i>
                              </span>
                            </div>
                            {/*end::Symbol*/}
                            {/*begin::Title*/}
                            <div className="mb-0 me-2">
                              <a
                                href="#"
                                className="fs-6 text-gray-800 text-hover-primary fw-bold"
                              >
                                Project Breafing
                              </a>
                              <div className="text-gray-500 fs-7">
                                Product launch status update
                              </div>
                            </div>
                            {/*end::Title*/}
                          </div>
                          {/*end::Section*/}
                          {/*begin::Label*/}
                          <span className="badge badge-light fs-8">
                            21 Jan
                          </span>
                          {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Symbol*/}
                            <div className="symbol symbol-35px me-4">
                              <span className="symbol-label bg-light-info">
                                <i className="ki-duotone ki-picture fs-2 text-info" />
                              </span>
                            </div>
                            {/*end::Symbol*/}
                            {/*begin::Title*/}
                            <div className="mb-0 me-2">
                              <a
                                href="#"
                                className="fs-6 text-gray-800 text-hover-primary fw-bold"
                              >
                                Banner Assets
                              </a>
                              <div className="text-gray-500 fs-7">
                                Collection of banner images
                              </div>
                            </div>
                            {/*end::Title*/}
                          </div>
                          {/*end::Section*/}
                          {/*begin::Label*/}
                          <span className="badge badge-light fs-8">
                            21 Jan
                          </span>
                          {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Symbol*/}
                            <div className="symbol symbol-35px me-4">
                              <span className="symbol-label bg-light-warning">
                                <i className="ki-duotone ki-color-swatch fs-2 text-warning">
                                  <span className="path1" />
                                  <span className="path2" />
                                  <span className="path3" />
                                  <span className="path4" />
                                  <span className="path5" />
                                  <span className="path6" />
                                  <span className="path7" />
                                  <span className="path8" />
                                  <span className="path9" />
                                  <span className="path10" />
                                  <span className="path11" />
                                  <span className="path12" />
                                  <span className="path13" />
                                  <span className="path14" />
                                  <span className="path15" />
                                  <span className="path16" />
                                  <span className="path17" />
                                  <span className="path18" />
                                  <span className="path19" />
                                  <span className="path20" />
                                  <span className="path21" />
                                </i>
                              </span>
                            </div>
                            {/*end::Symbol*/}
                            {/*begin::Title*/}
                            <div className="mb-0 me-2">
                              <a
                                href="#"
                                className="fs-6 text-gray-800 text-hover-primary fw-bold"
                              >
                                Icon Assets
                              </a>
                              <div className="text-gray-500 fs-7">
                                Collection of SVG icons
                              </div>
                            </div>
                            {/*end::Title*/}
                          </div>
                          {/*end::Section*/}
                          {/*begin::Label*/}
                          <span className="badge badge-light fs-8">
                            20 March
                          </span>
                          {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                      </div>
                      {/*end::Items*/}
                      {/*begin::View more*/}
                      <div className="py-3 text-center border-top">
                        <a
                          href="../pages/user-profile/activity.html"
                          className="btn btn-color-gray-600 btn-active-color-primary"
                        >
                          View All
                          <i className="ki-duotone ki-arrow-right fs-5">
                            <span className="path1" />
                            <span className="path2" />
                          </i>
                        </a>
                      </div>
                      {/*end::View more*/}
                    </div>
                    {/*end::Tab panel*/}
                    {/*begin::Tab panel*/}
                    <div
                      className="tab-pane fade show active"
                      id="kt_topbar_notifications_2"
                      role="tabpanel"
                    >
                      {/*begin::Wrapper*/}
                      <div className="d-flex flex-column px-9">
                        {/*begin::Section*/}
                        <div className="pt-10 pb-0">
                          {/*begin::Title*/}
                          <h3 className="text-gray-900 text-center fw-bold">
                            Get Pro Access
                          </h3>
                          {/*end::Title*/}
                          {/*begin::Text*/}
                          <div className="text-center text-gray-600 fw-semibold pt-1">
                            Outlines keep you honest. They stoping you
                            from amazing poorly about drive
                          </div>
                          {/*end::Text*/}
                          {/*begin::Action*/}
                          <div className="text-center mt-5 mb-9">
                            <a
                              href="#"
                              className="btn btn-sm btn-primary px-6"
                              data-bs-toggle="modal"
                              data-bs-target="#kt_modal_upgrade_plan"
                            >
                              Upgrade
                            </a>
                          </div>
                          {/*end::Action*/}
                        </div>
                        {/*end::Section*/}
                        {/*begin::Illustration*/}
                        <div className="text-center px-4">
                          <img
                            className="mw-100 mh-200px"
                            alt="image"
                            src="../assets/media/illustrations/sketchy-1/1.png"
                          />
                        </div>
                        {/*end::Illustration*/}
                      </div>
                      {/*end::Wrapper*/}
                    </div>
                    {/*end::Tab panel*/}
                    {/*begin::Tab panel*/}
                    <div
                      className="tab-pane fade"
                      id="kt_topbar_notifications_3"
                      role="tabpanel"
                    >
                      {/*begin::Items*/}
                      <div className="scroll-y mh-325px my-5 px-8">
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center me-2">
                            {/*begin::Code*/}
                            <span className="w-70px badge badge-light-success me-4">
                              200 OK
                            </span>
                            {/*end::Code*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="text-gray-800 text-hover-primary fw-semibold"
                            >
                              New order
                            </a>
                            {/*end::Title*/}
                          </div>
                          {/*end::Section*/}
                          {/*begin::Label*/}
                          <span className="badge badge-light fs-8">
                            Just now
                          </span>
                          {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center me-2">
                            {/*begin::Code*/}
                            <span className="w-70px badge badge-light-danger me-4">
                              500 ERR
                            </span>
                            {/*end::Code*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="text-gray-800 text-hover-primary fw-semibold"
                            >
                              New customer
                            </a>
                            {/*end::Title*/}
                          </div>
                          {/*end::Section*/}
                          {/*begin::Label*/}
                          <span className="badge badge-light fs-8">
                            2 hrs
                          </span>
                          {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center me-2">
                            {/*begin::Code*/}
                            <span className="w-70px badge badge-light-success me-4">
                              200 OK
                            </span>
                            {/*end::Code*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="text-gray-800 text-hover-primary fw-semibold"
                            >
                              Payment process
                            </a>
                            {/*end::Title*/}
                          </div>
                          {/*end::Section*/}
                          {/*begin::Label*/}
                          <span className="badge badge-light fs-8">
                            5 hrs
                          </span>
                          {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center me-2">
                            {/*begin::Code*/}
                            <span className="w-70px badge badge-light-warning me-4">
                              300 WRN
                            </span>
                            {/*end::Code*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="text-gray-800 text-hover-primary fw-semibold"
                            >
                              Search query
                            </a>
                            {/*end::Title*/}
                          </div>
                          {/*end::Section*/}
                          {/*begin::Label*/}
                          <span className="badge badge-light fs-8">
                            2 days
                          </span>
                          {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center me-2">
                            {/*begin::Code*/}
                            <span className="w-70px badge badge-light-success me-4">
                              200 OK
                            </span>
                            {/*end::Code*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="text-gray-800 text-hover-primary fw-semibold"
                            >
                              API connection
                            </a>
                            {/*end::Title*/}
                          </div>
                          {/*end::Section*/}
                          {/*begin::Label*/}
                          <span className="badge badge-light fs-8">
                            1 week
                          </span>
                          {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center me-2">
                            {/*begin::Code*/}
                            <span className="w-70px badge badge-light-success me-4">
                              200 OK
                            </span>
                            {/*end::Code*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="text-gray-800 text-hover-primary fw-semibold"
                            >
                              Database restore
                            </a>
                            {/*end::Title*/}
                          </div>
                          {/*end::Section*/}
                          {/*begin::Label*/}
                          <span className="badge badge-light fs-8">
                            Mar 5
                          </span>
                          {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center me-2">
                            {/*begin::Code*/}
                            <span className="w-70px badge badge-light-warning me-4">
                              300 WRN
                            </span>
                            {/*end::Code*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="text-gray-800 text-hover-primary fw-semibold"
                            >
                              System update
                            </a>
                            {/*end::Title*/}
                          </div>
                          {/*end::Section*/}
                          {/*begin::Label*/}
                          <span className="badge badge-light fs-8">
                            May 15
                          </span>
                          {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center me-2">
                            {/*begin::Code*/}
                            <span className="w-70px badge badge-light-warning me-4">
                              300 WRN
                            </span>
                            {/*end::Code*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="text-gray-800 text-hover-primary fw-semibold"
                            >
                              Server OS update
                            </a>
                            {/*end::Title*/}
                          </div>
                          {/*end::Section*/}
                          {/*begin::Label*/}
                          <span className="badge badge-light fs-8">
                            Apr 3
                          </span>
                          {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center me-2">
                            {/*begin::Code*/}
                            <span className="w-70px badge badge-light-warning me-4">
                              300 WRN
                            </span>
                            {/*end::Code*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="text-gray-800 text-hover-primary fw-semibold"
                            >
                              API rollback
                            </a>
                            {/*end::Title*/}
                          </div>
                          {/*end::Section*/}
                          {/*begin::Label*/}
                          <span className="badge badge-light fs-8">
                            Jun 30
                          </span>
                          {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center me-2">
                            {/*begin::Code*/}
                            <span className="w-70px badge badge-light-danger me-4">
                              500 ERR
                            </span>
                            {/*end::Code*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="text-gray-800 text-hover-primary fw-semibold"
                            >
                              Refund process
                            </a>
                            {/*end::Title*/}
                          </div>
                          {/*end::Section*/}
                          {/*begin::Label*/}
                          <span className="badge badge-light fs-8">
                            Jul 10
                          </span>
                          {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center me-2">
                            {/*begin::Code*/}
                            <span className="w-70px badge badge-light-danger me-4">
                              500 ERR
                            </span>
                            {/*end::Code*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="text-gray-800 text-hover-primary fw-semibold"
                            >
                              Withdrawal process
                            </a>
                            {/*end::Title*/}
                          </div>
                          {/*end::Section*/}
                          {/*begin::Label*/}
                          <span className="badge badge-light fs-8">
                            Sep 10
                          </span>
                          {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center me-2">
                            {/*begin::Code*/}
                            <span className="w-70px badge badge-light-danger me-4">
                              500 ERR
                            </span>
                            {/*end::Code*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="text-gray-800 text-hover-primary fw-semibold"
                            >
                              Mail tasks
                            </a>
                            {/*end::Title*/}
                          </div>
                          {/*end::Section*/}
                          {/*begin::Label*/}
                          <span className="badge badge-light fs-8">
                            Dec 10
                          </span>
                          {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                      </div>
                      {/*end::Items*/}
                      {/*begin::View more*/}
                      <div className="py-3 text-center border-top">
                        <a
                          href="../pages/user-profile/activity.html"
                          className="btn btn-color-gray-600 btn-active-color-primary"
                        >
                          View All
                          <i className="ki-duotone ki-arrow-right fs-5">
                            <span className="path1" />
                            <span className="path2" />
                          </i>
                        </a>
                      </div>
                      {/*end::View more*/}
                    </div>
                    {/*end::Tab panel*/}
                  </div>
                  {/*end::Tab content*/}
                </div>
                {/*end::Menu*/}
                {/*end::Menu wrapper*/}
              </div>
              {/*end::Toolbar*/}
            </div>
            {/*end::Header*/}
            {/*begin::Body*/}
            <div className="card-body">
              {/*begin::List*/}
              <div className="mb-5">
                {/*begin::Items*/}
                <div className="py-1">
                  <div className="d-flex flex-stack align-items-center py-1">
                    {/*begin::Title*/}
                    <span className="fs-6 text-gray-500 fw-bold d-block">
                      14 January
                    </span>
                    {/*end::Title*/}
                    {/*begin::Toolbar*/}
                    <div className="card-toolbar">
                      {/*begin::Menu*/}
                      <button
                        className="btn btn-icon btn-color-gray-500 btn-active-color-primary justify-content-end"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                        data-kt-menu-overflow="true"
                      >
                        <i className="ki-duotone ki-dots-square fs-2 text-gray-500 me-n1">
                          <span className="path1" />
                          <span className="path2" />
                          <span className="path3" />
                          <span className="path4" />
                        </i>
                      </button>
                      {/*begin::Menu 2*/}
                      <div
                        className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px"
                        data-kt-menu="true"
                      >
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <div className="menu-content fs-6 text-gray-900 fw-bold px-3 py-4">
                            Quick Actions
                          </div>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu separator*/}
                        <div className="separator mb-3 opacity-75" />
                        {/*end::Menu separator*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            New Ticket
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            New Customer
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div
                          className="menu-item px-3"
                          data-kt-menu-trigger="hover"
                          data-kt-menu-placement="right-start"
                        >
                          {/*begin::Menu item*/}
                          <a href="#" className="menu-link px-3">
                            <span className="menu-title">New Group</span>
                            <span className="menu-arrow" />
                          </a>
                          {/*end::Menu item*/}
                          {/*begin::Menu sub*/}
                          <div className="menu-sub menu-sub-dropdown w-175px py-4">
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                Admin Group
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                Staff Group
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                Member Group
                              </a>
                            </div>
                            {/*end::Menu item*/}
                          </div>
                          {/*end::Menu sub*/}
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            New Contact
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu separator*/}
                        <div className="separator mt-3 opacity-75" />
                        {/*end::Menu separator*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <div className="menu-content px-3 py-3">
                            <a
                              className="btn btn-primary btn-sm px-4"
                              href="#"
                            >
                              Generate Reports
                            </a>
                          </div>
                        </div>
                        {/*end::Menu item*/}
                      </div>
                      {/*end::Menu 2*/}
                      {/*end::Menu*/}
                    </div>
                    {/*end::Toolbar*/}
                  </div>
                  {/*begin::Timeline*/}
                  <div className="timeline">
                    {/*begin::Timeline item*/}
                    <div className="timeline-item">
                      {/*begin::Timeline content*/}
                      <div className="timeline-content d-flex flex-row align-items-center sm-0">
                        {/*begin::Time*/}
                        <span className="fs-4 text-800 fw-bold me-5">
                          10:15
                        </span>
                        {/*end::Time*/}
                        {/*begin::Bullet*/}
                        <span
                          data-kt-element="bullet"
                          className="bullet bullet-vertical d-flex align-items-center h-45px me-6 bg-warning"
                        />
                        {/*end::Bullet*/}
                        {/*begin:Author*/}
                        <div className="flex-grow-1 me-2">
                          <span className="text-gray-500 text-hover-primary fs-7 fw-bold">
                            Marketing
                          </span>
                          <span className="text-gray-800 fw-bold d-block fs-6">
                            AOL Meeting
                          </span>
                        </div>
                        {/*end:Author*/}
                      </div>
                      {/*end::Timeline content*/}
                    </div>
                    {/*end::Timeline item*/}
                  </div>
                  {/*end::Timeline*/}
                  <div className="d-flex flex-stack align-items-center py-1">
                    {/*begin::Title*/}
                    <span className="fs-6 text-gray-500 fw-bold d-block"></span>
                    {/*end::Title*/}
                  </div>
                  {/*begin::Timeline*/}
                  <div className="timeline">
                    {/*begin::Timeline item*/}
                    <div className="timeline-item">
                      {/*begin::Timeline content*/}
                      <div className="timeline-content d-flex flex-row align-items-center sm-0">
                        {/*begin::Time*/}
                        <span className="fs-4 text-800 fw-bold me-5">
                          11:20
                        </span>
                        {/*end::Time*/}
                        {/*begin::Bullet*/}
                        <span
                          data-kt-element="bullet"
                          className="bullet bullet-vertical d-flex align-items-center h-45px me-6 bg-info"
                        />
                        {/*end::Bullet*/}
                        {/*begin:Author*/}
                        <div className="flex-grow-1 me-2">
                          <span className="text-gray-500 text-hover-primary fs-7 fw-bold">
                            UI/UX Design
                          </span>
                          <span className="text-gray-800 fw-bold d-block fs-6">
                            ABN Ambro Mobile App
                          </span>
                        </div>
                        {/*end:Author*/}
                      </div>
                      {/*end::Timeline content*/}
                    </div>
                    {/*end::Timeline item*/}
                  </div>
                  {/*end::Timeline*/}
                  <div className="d-flex flex-stack align-items-center py-1">
                    {/*begin::Title*/}
                    <span className="fs-6 text-gray-500 fw-bold d-block">
                      15 January
                    </span>
                    {/*end::Title*/}
                    {/*begin::Toolbar*/}
                    <div className="card-toolbar">
                      {/*begin::Menu*/}
                      <button
                        className="btn btn-icon btn-color-gray-500 btn-active-color-primary justify-content-end"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                        data-kt-menu-overflow="true"
                      >
                        <i className="ki-duotone ki-dots-square fs-2 text-gray-500 me-n1">
                          <span className="path1" />
                          <span className="path2" />
                          <span className="path3" />
                          <span className="path4" />
                        </i>
                      </button>
                      {/*begin::Menu 2*/}
                      <div
                        className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px"
                        data-kt-menu="true"
                      >
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <div className="menu-content fs-6 text-gray-900 fw-bold px-3 py-4">
                            Quick Actions
                          </div>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu separator*/}
                        <div className="separator mb-3 opacity-75" />
                        {/*end::Menu separator*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            New Ticket
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            New Customer
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div
                          className="menu-item px-3"
                          data-kt-menu-trigger="hover"
                          data-kt-menu-placement="right-start"
                        >
                          {/*begin::Menu item*/}
                          <a href="#" className="menu-link px-3">
                            <span className="menu-title">New Group</span>
                            <span className="menu-arrow" />
                          </a>
                          {/*end::Menu item*/}
                          {/*begin::Menu sub*/}
                          <div className="menu-sub menu-sub-dropdown w-175px py-4">
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                Admin Group
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                Staff Group
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                Member Group
                              </a>
                            </div>
                            {/*end::Menu item*/}
                          </div>
                          {/*end::Menu sub*/}
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            New Contact
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu separator*/}
                        <div className="separator mt-3 opacity-75" />
                        {/*end::Menu separator*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <div className="menu-content px-3 py-3">
                            <a
                              className="btn btn-primary btn-sm px-4"
                              href="#"
                            >
                              Generate Reports
                            </a>
                          </div>
                        </div>
                        {/*end::Menu item*/}
                      </div>
                      {/*end::Menu 2*/}
                      {/*end::Menu*/}
                    </div>
                    {/*end::Toolbar*/}
                  </div>
                  {/*begin::Timeline*/}
                  <div className="timeline">
                    {/*begin::Timeline item*/}
                    <div className="timeline-item">
                      {/*begin::Timeline content*/}
                      <div className="timeline-content d-flex flex-row align-items-center sm-0">
                        {/*begin::Time*/}
                        <span className="fs-4 text-800 fw-bold me-5">
                          10:00
                        </span>
                        {/*end::Time*/}
                        {/*begin::Bullet*/}
                        <span
                          data-kt-element="bullet"
                          className="bullet bullet-vertical d-flex align-items-center h-45px me-6 bg-primary"
                        />
                        {/*end::Bullet*/}
                        {/*begin:Author*/}
                        <div className="flex-grow-1 me-2">
                          <span className="text-gray-500 text-hover-primary fs-7 fw-bold">
                            Discussion
                          </span>
                          <span className="text-gray-800 fw-bold d-block fs-6">
                            AirEagle Project
                          </span>
                        </div>
                        {/*end:Author*/}
                      </div>
                      {/*end::Timeline content*/}
                    </div>
                    {/*end::Timeline item*/}
                  </div>
                  {/*end::Timeline*/}
                  <div className="d-flex flex-stack align-items-center py-1">
                    {/*begin::Title*/}
                    <span className="fs-6 text-gray-500 fw-bold d-block"></span>
                    {/*end::Title*/}
                  </div>
                  {/*begin::Timeline*/}
                  <div className="timeline">
                    {/*begin::Timeline item*/}
                    <div className="timeline-item">
                      {/*begin::Timeline content*/}
                      <div className="timeline-content d-flex flex-row align-items-center sm-0">
                        {/*begin::Time*/}
                        <span className="fs-4 text-800 fw-bold me-5">
                          13:00
                        </span>
                        {/*end::Time*/}
                        {/*begin::Bullet*/}
                        <span
                          data-kt-element="bullet"
                          className="bullet bullet-vertical d-flex align-items-center h-45px me-6 bg-success"
                        />
                        {/*end::Bullet*/}
                        {/*begin:Author*/}
                        <div className="flex-grow-1 me-2">
                          <span className="text-gray-500 text-hover-primary fs-7 fw-bold">
                            Developer
                          </span>
                          <span className="text-gray-800 fw-bold d-block fs-6">
                            Alarm App
                          </span>
                        </div>
                        {/*end:Author*/}
                      </div>
                      {/*end::Timeline content*/}
                    </div>
                    {/*end::Timeline item*/}
                  </div>
                  {/*end::Timeline*/}
                  <div className="d-flex flex-stack align-items-center py-1">
                    {/*begin::Title*/}
                    <span className="fs-6 text-gray-500 fw-bold d-block"></span>
                    {/*end::Title*/}
                  </div>
                  {/*begin::Timeline*/}
                  <div className="timeline">
                    {/*begin::Timeline item*/}
                    <div className="timeline-item">
                      {/*begin::Timeline content*/}
                      <div className="timeline-content d-flex flex-row align-items-center sm-0">
                        {/*begin::Time*/}
                        <span className="fs-4 text-800 fw-bold me-5">
                          15:50
                        </span>
                        {/*end::Time*/}
                        {/*begin::Bullet*/}
                        <span
                          data-kt-element="bullet"
                          className="bullet bullet-vertical d-flex align-items-center h-45px me-6 bg-danger"
                        />
                        {/*end::Bullet*/}
                        {/*begin:Author*/}
                        <div className="flex-grow-1 me-2">
                          <span className="text-gray-500 text-hover-primary fs-7 fw-bold">
                            Marketing
                          </span>
                          <span className="text-gray-800 fw-bold d-block fs-6">
                            Market branding
                          </span>
                        </div>
                        {/*end:Author*/}
                      </div>
                      {/*end::Timeline content*/}
                    </div>
                    {/*end::Timeline item*/}
                  </div>
                  {/*end::Timeline*/}
                  <div className="d-flex flex-stack align-items-center py-1">
                    {/*begin::Title*/}
                    <span className="fs-6 text-gray-500 fw-bold d-block">
                      16 January
                    </span>
                    {/*end::Title*/}
                    {/*begin::Toolbar*/}
                    <div className="card-toolbar">
                      {/*begin::Menu*/}
                      <button
                        className="btn btn-icon btn-color-gray-500 btn-active-color-primary justify-content-end"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                        data-kt-menu-overflow="true"
                      >
                        <i className="ki-duotone ki-dots-square fs-2 text-gray-500 me-n1">
                          <span className="path1" />
                          <span className="path2" />
                          <span className="path3" />
                          <span className="path4" />
                        </i>
                      </button>
                      {/*begin::Menu 2*/}
                      <div
                        className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px"
                        data-kt-menu="true"
                      >
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <div className="menu-content fs-6 text-gray-900 fw-bold px-3 py-4">
                            Quick Actions
                          </div>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu separator*/}
                        <div className="separator mb-3 opacity-75" />
                        {/*end::Menu separator*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            New Ticket
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            New Customer
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div
                          className="menu-item px-3"
                          data-kt-menu-trigger="hover"
                          data-kt-menu-placement="right-start"
                        >
                          {/*begin::Menu item*/}
                          <a href="#" className="menu-link px-3">
                            <span className="menu-title">New Group</span>
                            <span className="menu-arrow" />
                          </a>
                          {/*end::Menu item*/}
                          {/*begin::Menu sub*/}
                          <div className="menu-sub menu-sub-dropdown w-175px py-4">
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                Admin Group
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                Staff Group
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                Member Group
                              </a>
                            </div>
                            {/*end::Menu item*/}
                          </div>
                          {/*end::Menu sub*/}
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            New Contact
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu separator*/}
                        <div className="separator mt-3 opacity-75" />
                        {/*end::Menu separator*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <div className="menu-content px-3 py-3">
                            <a
                              className="btn btn-primary btn-sm px-4"
                              href="#"
                            >
                              Generate Reports
                            </a>
                          </div>
                        </div>
                        {/*end::Menu item*/}
                      </div>
                      {/*end::Menu 2*/}
                      {/*end::Menu*/}
                    </div>
                    {/*end::Toolbar*/}
                  </div>
                  {/*begin::Timeline*/}
                  <div className="timeline">
                    {/*begin::Timeline item*/}
                    <div className="timeline-item">
                      {/*begin::Timeline content*/}
                      <div className="timeline-content d-flex flex-row align-items-center sm-0">
                        {/*begin::Time*/}
                        <span className="fs-4 text-800 fw-bold me-5">
                          12:00
                        </span>
                        {/*end::Time*/}
                        {/*begin::Bullet*/}
                        <span
                          data-kt-element="bullet"
                          className="bullet bullet-vertical d-flex align-items-center h-45px me-6 bg-gray-700"
                        />
                        {/*end::Bullet*/}
                        {/*begin:Author*/}
                        <div className="flex-grow-1 me-2">
                          <span className="text-gray-500 text-hover-primary fs-7 fw-bold">
                            UI/UX Design
                          </span>
                          <span className="text-gray-800 fw-bold d-block fs-6">
                            Market Dashboard Design
                          </span>
                        </div>
                        {/*end:Author*/}
                      </div>
                      {/*end::Timeline content*/}
                    </div>
                    {/*end::Timeline item*/}
                  </div>
                  {/*end::Timeline*/}
                  <div className="d-flex flex-stack align-items-center py-1">
                    {/*begin::Title*/}
                    <span className="fs-6 text-gray-500 fw-bold d-block"></span>
                    {/*end::Title*/}
                  </div>
                  {/*begin::Timeline*/}
                  <div className="timeline">
                    {/*begin::Timeline item*/}
                    <div className="timeline-item">
                      {/*begin::Timeline content*/}
                      <div className="timeline-content d-flex flex-row align-items-center sm-0">
                        {/*begin::Time*/}
                        <span className="fs-4 text-800 fw-bold me-5">
                          14:00
                        </span>
                        {/*end::Time*/}
                        {/*begin::Bullet*/}
                        <span
                          data-kt-element="bullet"
                          className="bullet bullet-vertical d-flex align-items-center h-45px me-6 bg-warning"
                        />
                        {/*end::Bullet*/}
                        {/*begin:Author*/}
                        <div className="flex-grow-1 me-2">
                          <span className="text-gray-500 text-hover-primary fs-7 fw-bold">
                            Marketing
                          </span>
                          <span className="text-gray-800 fw-bold d-block fs-6">
                            Instagram Strategy
                          </span>
                        </div>
                        {/*end:Author*/}
                      </div>
                      {/*end::Timeline content*/}
                    </div>
                    {/*end::Timeline item*/}
                  </div>
                  {/*end::Timeline*/}
                </div>
                {/*end::Items*/}
              </div>
              {/*end::List*/}
              {/*begin::Action*/}
              <a
                href="#"
                className="btn btn-light btn-color-gray-700 fw-bold w-100"
              >
                View more
              </a>
              {/*end::Action*/}
            </div>
            {/*end: Card Body*/}
          </div>
          {/*end::Aside 5*/}
        </div>
        {/*end::Aside wrapper*/}
      </div>
      {/*end::aside*/}
    </>
  );
};

export default Aside;