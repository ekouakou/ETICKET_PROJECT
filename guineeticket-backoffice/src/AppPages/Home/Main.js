import React, { useState, useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeProvider';
import { useNavigate } from 'react-router-dom';
import { doConnexion } from '../../services/apiService';
import { crudData } from "../../services/apiUtils";

import Appcontent from './Appcontent'




const Main = () => {
  const { theme, toggleTheme } = useTheme(); // Hook pour le thème
  const [background, setBackground] = useState('');
  const [STR_CLILOGIN, setSTR_CLILOGIN] = useState('');
  const [STR_CLIPASSWORD, setSTR_CLIPASSWORD] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Met à jour le background selon le thème
    const newBackground =
      theme === 'light'
        ? "assets/media/bg/section__bg_blue.jpg"
        : "assets/media/bg/section__bg.jpg";
    setBackground(newBackground);
  }, [theme]); // Exécuter à chaque changement de `theme`

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const params = new URLSearchParams();
      params.append('mode', 'doConnexion');
      params.append('STR_CLILOGIN', STR_CLILOGIN);
      params.append('STR_CLIPASSWORD', STR_CLIPASSWORD);

      const response = await doConnexion(params);
      const userData = response.data;

      // if (userData.code_statut === "1") {
      //     localStorage.setItem('user', JSON.stringify(userData));
      //     navigate('/mon-profile'); // Rediriger vers le tableau de bord
      // } else {
      //     setError(userData.desc_statut);
      // }

      if (userData.code_statut === "1") {
        localStorage.setItem('user', JSON.stringify(userData));
        navigate('/profile'); // Rediriger vers le tableau de bord
      } else {
        setError(userData.desc_statut);
      }
    } catch (error) {
      setError('Erreur de connexion. Veuillez réessayer.');
    }
  };







  return (
    <>
      <div className="app-main flex-column flex-row-fluid"
        id="kt_app_main"
      >
        {/*begin::Content wrapper*/}
        <div className="d-flex flex-column flex-column-fluid">
          {/*begin::Toolbar*/}
          <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
            {/*begin::Toolbar container*/}
            <div
              id="kt_app_toolbar_container"
              className="app-container container-xxl d-flex flex-stack"
            >
              {/*begin::Page title*/}
              <div className="page-title d-flex flex-column justify-content-center flex-wrap me-3">
                {/*begin::Title*/}
                <h1 className="page-heading d-flex text-gray-900 fw-bold fs-3 flex-column justify-content-center my-0">
                  Calendars
                </h1>
                {/*end::Title*/}
                {/*begin::Breadcrumb*/}
                <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
                  {/*begin::Item*/}
                  <li className="breadcrumb-item text-muted">
                    <a
                      href="../index.html"
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
                  <li className="breadcrumb-item text-muted">Asides</li>
                  {/*end::Item*/}
                </ul>
                {/*end::Breadcrumb*/}
              </div>
              {/*end::Page title*/}
              {/*begin::Actions*/}
              <div className="d-flex align-items-center gap-2 gap-lg-3">
                {/*begin::Filter menu*/}
                <div className="m-0">
                  {/*begin::Menu toggle*/}
                  <a
                    href="#"
                    className="btn btn-sm btn-flex btn-secondary fw-bold"
                    data-kt-menu-trigger="click"
                    data-kt-menu-placement="bottom-end"
                  >
                    <i className="ki-duotone ki-filter fs-6 text-muted me-1">
                      <span className="path1" />
                      <span className="path2" />
                    </i>
                    Filter
                  </a>
                  {/*end::Menu toggle*/}
                  {/*begin::Menu 1*/}
                  <div
                    className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                    data-kt-menu="true"
                    id="kt_menu_67681b6ba4a58"
                  >
                    {/*begin::Header*/}
                    <div className="px-7 py-5">
                      <div className="fs-5 text-gray-900 fw-bold">
                        Filter Options
                      </div>
                    </div>
                    {/*end::Header*/}
                    {/*begin::Menu separator*/}
                    <div className="separator border-gray-200" />
                    {/*end::Menu separator*/}
                    {/*begin::Form*/}
                    <div className="px-7 py-5">
                      {/*begin::Input group*/}
                      <div className="mb-10">
                        {/*begin::Label*/}
                        <label className="form-label fw-semibold">
                          Status:
                        </label>
                        {/*end::Label*/}
                        {/*begin::Input*/}
                        <div>
                          <select
                            className="form-select form-select-solid"
                            multiple=""
                            data-kt-select2="true"
                            data-close-on-select="false"
                            data-placeholder="Select option"
                            data-dropdown-parent="#kt_menu_67681b6ba4a58"
                            data-allow-clear="true"
                          >
                            <option />
                            <option value={1}>Approved</option>
                            <option value={2}>Pending</option>
                            <option value={2}>In Process</option>
                            <option value={2}>Rejected</option>
                          </select>
                        </div>
                        {/*end::Input*/}
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Input group*/}
                      <div className="mb-10">
                        {/*begin::Label*/}
                        <label className="form-label fw-semibold">
                          Member Type:
                        </label>
                        {/*end::Label*/}
                        {/*begin::Options*/}
                        <div className="d-flex">
                          {/*begin::Options*/}
                          <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue={1}
                            />
                            <span className="form-check-label">
                              {" "}
                              Author{" "}
                            </span>
                          </label>
                          {/*end::Options*/}
                          {/*begin::Options*/}
                          <label className="form-check form-check-sm form-check-custom form-check-solid">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue={2}
                              defaultChecked="checked"
                            />
                            <span className="form-check-label">
                              {" "}
                              Customer{" "}
                            </span>
                          </label>
                          {/*end::Options*/}
                        </div>
                        {/*end::Options*/}
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Input group*/}
                      <div className="mb-10">
                        {/*begin::Label*/}
                        <label className="form-label fw-semibold">
                          Notifications:
                        </label>
                        {/*end::Label*/}
                        {/*begin::Switch*/}
                        <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            name="notifications"
                            defaultChecked=""
                          />
                          <label className="form-check-label">
                            {" "}
                            Enabled{" "}
                          </label>
                        </div>
                        {/*end::Switch*/}
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Actions*/}
                      <div className="d-flex justify-content-end">
                        <button
                          type="reset"
                          className="btn btn-sm btn-light btn-active-light-primary me-2"
                          data-kt-menu-dismiss="true"
                        >
                          Reset
                        </button>
                        <button
                          type="submit"
                          className="btn btn-sm btn-primary"
                          data-kt-menu-dismiss="true"
                        >
                          Apply
                        </button>
                      </div>
                      {/*end::Actions*/}
                    </div>
                    {/*end::Form*/}
                  </div>
                  {/*end::Menu 1*/}
                </div>
                {/*end::Filter menu*/}
                {/*begin::Secondary button*/}
                {/*end::Secondary button*/}
                {/*begin::Primary button*/}
                <a
                  href="#"
                  className="btn btn-sm fw-bold btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#kt_modal_create_app"
                >
                  Create
                </a>
                {/*end::Primary button*/}
              </div>
              {/*end::Actions*/}
            </div>
            {/*end::Toolbar container*/}
          </div>
          {/*end::Toolbar*/}
          {/*begin::Content*/}
          <Appcontent />
          {/*end::Content*/}
        </div>
        {/*end::Content wrapper*/}
        {/*begin::Footer*/}
        <div id="kt_app_footer" className="app-footer">
          {/*begin::Footer container*/}
          <div className="app-container container-fluid d-flex flex-column flex-md-row flex-center flex-md-stack py-3">
            {/*begin::Copyright*/}
            <div className="text-gray-900 order-2 order-md-1">
              <span className="text-muted fw-semibold me-1">2024©</span>
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
                  href="https://1.envato.market/Vm7VRE"
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
    </>
  );
};

export default Main;
