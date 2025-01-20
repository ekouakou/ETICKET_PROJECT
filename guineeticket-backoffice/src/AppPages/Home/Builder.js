import React, { useState, useEffect } from 'react'; 
import { useTheme } from '../../contexts/ThemeProvider'; 
import { useNavigate } from 'react-router-dom';
import { doConnexion } from '../../services/apiService';




const Builder = () => {
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
      <div
        id="kt_app_layout_builder"
        className="bg-body"
        data-kt-drawer="true"
        data-kt-drawer-name="app-settings"
        data-kt-drawer-activate="true"
        data-kt-drawer-overlay="true"
        data-kt-drawer-width="{default:'300px', 'lg': '380px'}"
        data-kt-drawer-direction="end"
        data-kt-drawer-toggle="#kt_app_layout_builder_toggle"
        data-kt-drawer-close="#kt_app_layout_builder_close"
      >
        {/*begin::Card*/}
        <div className="card border-0 shadow-none rounded-0 w-100">
          {/*begin::Card header*/}
          <div
            className="card-header bgi-position-y-bottom bgi-position-x-end bgi-size-cover bgi-no-repeat rounded-0 border-0 py-4"
            id="kt_app_layout_builder_header"
            style={{
              backgroundImage:
                'url("../assets/media/misc/layout/customizer-header-bg.jpg")',
            }}
          >
            {/*begin::Card title*/}
            <h3 className="card-title fs-3 fw-bold text-white flex-column m-0">
              Metronic Builder
              <small className="text-white opacity-50 fs-7 fw-semibold pt-1">
                Get your product deeply customized
              </small>
            </h3>
            {/*end::Card title*/}
            {/*begin::Card toolbar*/}
            <div className="card-toolbar">
              <button
                type="button"
                className="btn btn-sm btn-icon btn-color-white p-0 w-20px h-20px rounded-1"
                id="kt_app_layout_builder_close"
              >
                <i className="ki-duotone ki-cross-square fs-2">
                  <span className="path1" />
                  <span className="path2" />
                </i>
              </button>
            </div>
            {/*end::Card toolbar*/}
          </div>
          {/*end::Card header*/}
          {/*begin::Card body*/}
          <div
            className="card-body position-relative"
            id="kt_app_layout_builder_body"
          >
            {/*begin::Content*/}
            <div
              id="kt_app_settings_content"
              className="position-relative scroll-y me-n5 pe-5"
              data-kt-scroll="true"
              data-kt-scroll-height="auto"
              data-kt-scroll-wrappers="#kt_app_layout_builder_body"
              data-kt-scroll-dependencies="#kt_app_layout_builder_header, #kt_app_layout_builder_footer"
              data-kt-scroll-offset="5px"
            >
              {/*begin::Form*/}
              <form
                className="form"
                method="POST"
                id="kt_app_layout_builder_form"
                action="https://preview.keenthemes.com/metronic8/demo1/index.php"
              >
                <input
                  type="hidden"
                  id="kt_app_layout_builder_action"
                  name="layout-builder[action]"
                />
                {/*begin::Card body*/}
                <div className="card-body p-0">
                  {/*begin::Form group*/}
                  <div className="form-group">
                    {/*begin::Heading*/}
                    <div className="mb-6">
                      <h4 className="fw-bold text-gray-900">Theme Mode</h4>
                      <div className="fw-semibold text-muted fs-7 d-block lh-1">
                        Enjoy Dark &amp; Light modes.
                        <a
                          className="fw-semibold"
                          href="https://preview.keenthemes.com/html/metronic/docs/getting-started/dark-mode"
                          target="_blank"
                        >
                          See docs
                        </a>
                      </div>
                    </div>
                    {/*end::Heading*/}
                    {/*begin::Options*/}
                    <div
                      className="row"
                      data-kt-buttons="true"
                      data-kt-buttons-target=".form-check-image,.form-check-input"
                    >
                      {/*begin::Col*/}
                      <div className="col-6">
                        {/*begin::Option*/}
                        <label className="form-check-image form-check-success">
                          {/*begin::Image*/}
                          <div className="form-check-wrapper border-gray-200 border-2">
                            <img
                              src="../assets/media/preview/demos/demo1/light-ltr.png"
                              className="form-check-rounded mw-100"
                              alt=""
                            />
                          </div>
                          {/*end::Image*/}
                          {/*begin::Check*/}
                          <div className="form-check form-check-custom form-check-solid form-check-sm form-check-success">
                            <input
                              className="form-check-input"
                              type="radio"
                              defaultValue="light"
                              name="theme_mode"
                              id="kt_layout_builder_theme_mode_light"
                            />
                            {/*begin::Label*/}
                            <div className="form-check-label text-gray-700">
                              Light
                            </div>
                            {/*end::Label*/}
                          </div>
                          {/*end::Check*/}
                        </label>
                        {/*end::Option*/}
                      </div>
                      {/*end::Col*/}
                      {/*begin::Col*/}
                      <div className="col-6">
                        {/*begin::Option*/}
                        <label className="form-check-image form-check-success">
                          {/*begin::Image*/}
                          <div className="form-check-wrapper border-gray-200 border-2">
                            <img
                              src="../assets/media/preview/demos/demo1/dark-ltr.png"
                              className="form-check-rounded mw-100"
                              alt=""
                            />
                          </div>
                          {/*end::Image*/}
                          {/*begin::Check*/}
                          <div className="form-check form-check-custom form-check-solid form-check-sm form-check-success">
                            <input
                              className="form-check-input"
                              type="radio"
                              defaultValue="dark"
                              name="theme_mode"
                              id="kt_layout_builder_theme_mode_dark"
                            />
                            {/*begin::Label*/}
                            <div className="form-check-label text-gray-700">
                              Dark
                            </div>
                            {/*end::Label*/}
                          </div>
                          {/*end::Check*/}
                        </label>
                        {/*end::Option*/}
                      </div>
                      {/*end::Col*/}
                    </div>
                    {/*end::Options*/}
                  </div>
                  {/*end::Form group*/}
                  <div className="separator separator-dashed my-5" />
                  {/*begin::Form group*/}
                  <div className="form-group d-flex flex-stack">
                    {/*begin::Heading*/}
                    <div className="d-flex flex-column">
                      <h4 className="fw-bold text-gray-900">RTL Mode</h4>
                      <div className="fs-7 fw-semibold text-muted">
                        Change Language Direction.
                        <a
                          className="fw-semibold"
                          href="https://preview.keenthemes.com/html/metronic/docs/getting-started/rtl"
                          target="_blank"
                        >
                          See docs
                        </a>
                      </div>
                    </div>
                    {/*end::Heading*/}
                    {/*begin::Option*/}
                    <div className="d-flex justify-content-end">
                      {/*begin::Check*/}
                      <div className="form-check form-check-custom form-check-solid form-check-success form-switch">
                        <input
                          type="hidden"
                          defaultValue="false"
                          name="layout-builder[layout][app][general][rtl]"
                        />
                        <input
                          className="form-check-input w-45px h-30px"
                          type="checkbox"
                          defaultValue="true"
                          name="layout-builder[layout][app][general][rtl]"
                        />
                      </div>
                      {/*end::Check*/}
                    </div>
                    {/*end::Option*/}
                  </div>
                  {/*end::Form group*/}
                  <div className="separator separator-dashed my-5" />
                  {/*begin::Form group*/}
                  <div className="form-group">
                    {/*begin::Heading*/}
                    <div className="d-flex flex-column mb-4">
                      <h4 className="fw-bold text-gray-900">Width Mode</h4>
                      <div className="fs-7 fw-semibold text-muted">
                        Page width options
                      </div>
                    </div>
                    {/*end::Heading*/}
                    {/*begin::Options*/}
                    <div className="d-flex gap-7">
                      {/*begin::Check*/}
                      <div className="form-check form-check-custom form-check-success form-check-solid form-check-sm">
                        <input
                          className="form-check-input"
                          type="radio"
                          defaultChecked=""
                          defaultValue="default"
                          id="kt_layout_builder_page_width_default"
                          name="layout-builder[layout][app][general][page-width]"
                        />
                        {/*begin::Label*/}
                        <label
                          className="form-check-label text-gray-700 fw-bold text-nowrap"
                          htmlFor="kt_layout_builder_page_width_default"
                        >
                          Default
                        </label>
                        {/*end::Label*/}
                      </div>
                      {/*end::Check*/}
                      {/*begin::Check*/}
                      <div className="form-check form-check-custom form-check-success form-check-solid form-check-sm">
                        <input
                          className="form-check-input"
                          type="radio"
                          defaultValue="fluid"
                          id="kt_layout_builder_page_width_fluid"
                          name="layout-builder[layout][app][general][page-width]"
                        />
                        {/*begin::Label*/}
                        <label
                          className="form-check-label text-gray-700 fw-bold text-nowrap"
                          htmlFor="kt_layout_builder_page_width_fluid"
                        >
                          Fluid
                        </label>
                        {/*end::Label*/}
                      </div>
                      {/*end::Check*/}
                      {/*begin::Check*/}
                      <div className="form-check form-check-custom form-check-success form-check-solid form-check-sm">
                        <input
                          className="form-check-input"
                          type="radio"
                          defaultValue="fixed"
                          id="kt_layout_builder_page_width_fixed"
                          name="layout-builder[layout][app][general][page-width]"
                        />
                        {/*begin::Label*/}
                        <label
                          className="form-check-label text-gray-700 fw-bold text-nowrap"
                          htmlFor="kt_layout_builder_page_width_fixed"
                        >
                          Fixed
                        </label>
                        {/*end::Label*/}
                      </div>
                      {/*end::Check*/}
                    </div>
                    {/*end::Options*/}
                  </div>
                  {/*end::Form group*/}
                  <div className="separator separator-dashed my-5" />
                  {/*begin::Form group*/}
                  <div className="form-group">
                    {/*begin::Heading*/}
                    <div className="d-flex flex-column mb-4">
                      <h4 className="fw-bold text-gray-900">KeenIcons Style</h4>
                      <div>
                        <span className="fs-7 fw-semibold text-muted">
                          Select global UI icons style.
                        </span>
                        <a
                          className="fw-semibold"
                          href="https://preview.keenthemes.com/html/metronic/docs/icons/keenicons"
                          target="_blank"
                        >
                          Learn more
                        </a>
                      </div>
                    </div>
                    {/*end::Heading*/}
                    {/*begin::Options*/}
                    <div
                      className="d-flex flex-stack gap-3"
                      data-kt-buttons="true"
                      data-kt-buttons-target=".form-check-image,.form-check-input"
                    >
                      {/*begin::Option*/}
                      <label className="form-check-image form-check-success w-100 parent-active parent-hover active">
                        {/*begin::Image*/}
                        <div className="form-check-wrapper d-flex flex-center border-gray-200 border-2 mb-0 py-3 px-4">
                          <i className="ki-duotone ki-picture fs-1 text-gray-500 parent-active-gray-700 parent-hover-gray-700">
                            <span className="path1" />
                            <span className="path2" />
                          </i>
                          <span className="fs-7 fw-semibold ms-2 text-gray-500 parent-active-gray-700 parent-hover-gray-700">
                            Duotone
                          </span>
                        </div>
                        {/*end::Image*/}
                        {/*begin::Check*/}
                        <div
                          style={{
                            visibility: "hidden",
                            height: "0 !important",
                            width: "0 !importnat",
                            overflow: "hidden",
                          }}
                        >
                          <input
                            className="form-check-input"
                            type="radio"
                            defaultValue="duotone"
                            defaultChecked=""
                            name="layout-builder[layout][app][general][icons]"
                          />
                        </div>
                        {/*end::Check*/}
                      </label>
                      {/*end::Option*/}
                      {/*begin::Option*/}
                      <label className="form-check-image form-check-success w-100 parent-active parent-hover">
                        {/*begin::Image*/}
                        <div className="form-check-wrapper d-flex flex-center border-gray-200 border-2 mb-0 py-3 px-4">
                          <i className="ki-outline ki-picture fs-1 text-gray-500 parent-active-gray-700 parent-hover-gray-700" />
                          <span className="fs-7 fw-semibold ms-2 text-gray-500 parent-active-gray-700 parent-hover-gray-700">
                            Outline
                          </span>
                        </div>
                        {/*end::Image*/}
                        {/*begin::Check*/}
                        <div
                          style={{
                            visibility: "hidden",
                            height: "0 !important",
                            width: "0 !importnat",
                            overflow: "hidden",
                          }}
                        >
                          <input
                            className="form-check-input"
                            type="radio"
                            defaultValue="outline"
                            name="layout-builder[layout][app][general][icons]"
                          />
                        </div>
                        {/*end::Check*/}
                      </label>
                      {/*end::Option*/}
                      {/*begin::Option*/}
                      <label className="form-check-image form-check-success w-100 parent-active parent-hover">
                        {/*begin::Image*/}
                        <div className="form-check-wrapper d-flex flex-center border-gray-200 border-2 mb-0 py-3 px-4">
                          <i className="ki-solid ki-picture fs-1 text-gray-500 parent-active-gray-700 parent-hover-gray-700" />
                          <span className="fs-7 fw-semibold ms-2 text-gray-500 parent-active-gray-700 parent-hover-gray-700">
                            Solid
                          </span>
                        </div>
                        {/*end::Image*/}
                        {/*begin::Check*/}
                        <div
                          style={{
                            visibility: "hidden",
                            height: "0 !important",
                            width: "0 !importnat",
                            overflow: "hidden",
                          }}
                        >
                          <input
                            className="form-check-input"
                            type="radio"
                            defaultValue="solid"
                            name="layout-builder[layout][app][general][icons]"
                          />
                        </div>
                        {/*end::Check*/}
                      </label>
                      {/*end::Option*/}
                    </div>
                    {/*end::Options*/}
                  </div>
                  {/*end::Form group*/}
                  <div className="separator separator-dashed my-5" />
                  {/*begin::Form group*/}
                  <div className="form-group">
                    {/*begin::Heading*/}
                    <div className="mb-6">
                      <h4 className="fw-bold text-gray-900">Layouts</h4>
                      <span className="fw-semibold text-muted fs-7 lh-1">
                        4 main layouts.
                      </span>
                      <a
                        href="../layout-builder.html"
                        className="fw-semibold text-primary"
                      >
                        More layout options
                      </a>
                    </div>
                    {/*end::Heading*/}
                    {/*begin::Options*/}
                    <div
                      className="row gy-3"
                      data-kt-buttons="true"
                      data-kt-buttons-target=".form-check-image:not(.disabled),.form-check-input:not([disabled])"
                    >
                      {/*begin::Col*/}
                      <div className="col-6">
                        {/*begin::Option*/}
                        <label className="form-check-image form-check-success active active">
                          {/*begin::Image*/}
                          <div className="form-check-wrapper border-gray-200 border-2">
                            <img
                              src="../assets/media/misc/layout/dark-sidebar.png"
                              className="form-check-rounded mw-100"
                              alt=""
                            />
                          </div>
                          {/*end::Image*/}
                          {/*begin::Check*/}
                          <div className="form-check form-check-custom form-check-success form-check-sm form-check-solid">
                            <input
                              className="form-check-input"
                              type="radio"
                              defaultChecked=""
                              defaultValue="dark-sidebar"
                              name="layout-builder[layout][app][general][layout]"
                            />
                            {/*begin::Label*/}
                            <div className="form-check-label text-gray-700">
                              Dark Sidebar
                            </div>
                            {/*end::Label*/}
                          </div>
                          {/*end::Check*/}
                        </label>
                        {/*end::Option*/}
                      </div>
                      {/*end::Col*/}
                      {/*begin::Col*/}
                      <div className="col-6">
                        {/*begin::Option*/}
                        <label className="form-check-image form-check-success">
                          {/*begin::Image*/}
                          <div className="form-check-wrapper border-gray-200 border-2">
                            <img
                              src="../assets/media/misc/layout/light-sidebar.png"
                              className="form-check-rounded mw-100"
                              alt=""
                            />
                          </div>
                          {/*end::Image*/}
                          {/*begin::Check*/}
                          <div className="form-check form-check-custom form-check-success form-check-sm form-check-solid">
                            <input
                              className="form-check-input"
                              type="radio"
                              defaultValue="light-sidebar"
                              name="layout-builder[layout][app][general][layout]"
                            />
                            {/*begin::Label*/}
                            <div className="form-check-label text-gray-700">
                              Light Sidebar
                            </div>
                            {/*end::Label*/}
                          </div>
                          {/*end::Check*/}
                        </label>
                        {/*end::Option*/}
                      </div>
                      {/*end::Col*/}
                      {/*begin::Col*/}
                      <div className="col-6">
                        {/*begin::Option*/}
                        <label className="form-check-image form-check-success">
                          {/*begin::Image*/}
                          <div className="form-check-wrapper border-gray-200 border-2">
                            <img
                              src="../assets/media/misc/layout/dark-header.png"
                              className="form-check-rounded mw-100"
                              alt=""
                            />
                          </div>
                          {/*end::Image*/}
                          {/*begin::Check*/}
                          <div className="form-check form-check-custom form-check-success form-check-sm form-check-solid">
                            <input
                              className="form-check-input"
                              type="radio"
                              defaultValue="dark-header"
                              name="layout-builder[layout][app][general][layout]"
                            />
                            {/*begin::Label*/}
                            <div className="form-check-label text-gray-700">
                              Dark Header
                            </div>
                            {/*end::Label*/}
                          </div>
                          {/*end::Check*/}
                        </label>
                        {/*end::Option*/}
                      </div>
                      {/*end::Col*/}
                      {/*begin::Col*/}
                      <div className="col-6">
                        {/*begin::Option*/}
                        <label className="form-check-image form-check-success">
                          {/*begin::Image*/}
                          <div className="form-check-wrapper border-gray-200 border-2">
                            <img
                              src="../assets/media/misc/layout/light-header.png"
                              className="form-check-rounded mw-100"
                              alt=""
                            />
                          </div>
                          {/*end::Image*/}
                          {/*begin::Check*/}
                          <div className="form-check form-check-custom form-check-success form-check-sm form-check-solid">
                            <input
                              className="form-check-input"
                              type="radio"
                              defaultValue="light-header"
                              name="layout-builder[layout][app][general][layout]"
                            />
                            {/*begin::Label*/}
                            <div className="form-check-label text-gray-700">
                              Light Header
                            </div>
                            {/*end::Label*/}
                          </div>
                          {/*end::Check*/}
                        </label>
                        {/*end::Option*/}
                      </div>
                      {/*end::Col*/}
                    </div>
                    {/*end::Options*/}
                  </div>
                  {/*end::Form group*/}
                </div>
                {/*end::Card body*/}
              </form>
              {/*end::Form*/}
            </div>
            {/*end::Content*/}
          </div>
          {/*end::Card body*/}
          {/*begin::Card footer*/}
          <div
            className="card-footer border-0 d-flex gap-3 pb-9 pt-0"
            id="kt_app_layout_builder_footer"
          >
            <button
              type="button"
              id="kt_app_layout_builder_preview"
              className="btn btn-primary flex-grow-1 fw-semibold"
            >
              {/*begin::Indicator label*/}
              <span className="indicator-label"> Preview</span>
              {/*end::Indicator label*/}
              {/*begin::Indicator progress*/}
              <span className="indicator-progress">
                Please wait...
                <span className="spinner-border spinner-border-sm align-middle ms-2" />
              </span>
              {/*end::Indicator progress*/}
            </button>
            <button
              type="button"
              id="kt_app_layout_builder_reset"
              className="btn btn-light flex-grow-1 fw-semibold"
            >
              {/*begin::Indicator label*/}
              <span className="indicator-label"> Reset</span>
              {/*end::Indicator label*/}
              {/*begin::Indicator progress*/}
              <span className="indicator-progress">
                Please wait...
                <span className="spinner-border spinner-border-sm align-middle ms-2" />
              </span>
              {/*end::Indicator progress*/}
            </button>
          </div>
          {/*end::Card footer*/}
        </div>
        {/*end::Card*/}
      </div>

      <button
        id="kt_app_layout_builder_toggle"
        className="btn btn-dark app-layout-builder-toggle lh-1 py-4"
        title="Metronic Builder"
        data-bs-custom-class="tooltip-inverse"
        data-bs-toggle="tooltip"
        data-bs-placement="left"
        data-bs-dismiss="click"
        data-bs-trigger="hover"
      >
        <i className="ki-duotone ki-setting-4 fs-4 me-1" /> Customize
      </button>

      <>
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
              <h3 className="card-title fw-bold text-gray-900">
                Activity Logs
              </h3>
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
            <div
              className="card-body position-relative"
              id="kt_activities_body"
            >
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
                            <img
                              src="../assets/media/avatars/300-14.jpg"
                              alt="img"
                            />
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
                            href="../apps/projects/project.html"
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
                              <img
                                src="../assets/media/avatars/300-2.jpg"
                                alt="img"
                              />
                            </div>
                            {/*end::User*/}
                            {/*begin::User*/}
                            <div className="symbol symbol-circle symbol-25px">
                              <img
                                src="../assets/media/avatars/300-14.jpg"
                                alt="img"
                              />
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
                            href="../apps/projects/project.html"
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
                            href="../apps/projects/project.html"
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
                              <img
                                src="../assets/media/avatars/300-20.jpg"
                                alt="img"
                              />
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
                            href="../apps/projects/project.html"
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
                          Invitation for crafting engaging designs that speak
                          human workshop
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
                            <img
                              src="../assets/media/avatars/300-1.jpg"
                              alt="img"
                            />
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
                            <img
                              src="../assets/media/avatars/300-23.jpg"
                              alt="img"
                            />
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
                              src="../assets/media/svg/files/pdf.svg"
                            />
                            {/*end::Icon*/}
                            {/*begin::Info*/}
                            <div className="ms-1 fw-semibold">
                              {/*begin::Desc*/}
                              <a
                                href="../apps/projects/project.html"
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
                              alt="/metronic8/demo1/apps/projects/project.html"
                              className="w-30px me-3"
                              src="../assets/media/svg/files/doc.svg"
                            />
                            {/*end::Icon*/}
                            {/*begin::Info*/}
                            <div className="ms-1 fw-semibold">
                              {/*begin::Desc*/}
                              <a
                                href="#"
                                className="fs-6 text-hover-primary fw-bold"
                              >
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
                              alt="/metronic8/demo1/apps/projects/project.html"
                              className="w-30px me-3"
                              src="../assets/media/svg/files/css.svg"
                            />
                            {/*end::Icon*/}
                            {/*begin::Info*/}
                            <div className="ms-1 fw-semibold">
                              {/*begin::Desc*/}
                              <a
                                href="#"
                                className="fs-6 text-hover-primary fw-bold"
                              >
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
                            <img
                              src="../assets/media/avatars/300-14.jpg"
                              alt="img"
                            />
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
                            <img
                              src="../assets/media/avatars/300-2.jpg"
                              alt="img"
                            />
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
                                src="../assets/media/stock/600x400/img-29.jpg"
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
                                src="../assets/media/stock/600x400/img-31.jpg"
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
                                src="../assets/media/stock/600x400/img-40.jpg"
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
                          is assigned to you in Multi-platform Database Design
                          project
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
                            <img
                              src="../assets/media/avatars/300-4.jpg"
                              alt="img"
                            />
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
                          is placed for Workshow Planning &amp; Budget
                          Estimation
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
            <div
              className="card-footer py-5 text-center"
              id="kt_activities_footer"
            >
              <a
                href="../pages/user-profile/activity.html"
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
        {/*begin::Chat drawer*/}
        <div
          id="kt_drawer_chat"
          className="bg-body"
          data-kt-drawer="true"
          data-kt-drawer-name="chat"
          data-kt-drawer-activate="true"
          data-kt-drawer-overlay="true"
          data-kt-drawer-width="{default:'300px', 'md': '500px'}"
          data-kt-drawer-direction="end"
          data-kt-drawer-toggle="#kt_drawer_chat_toggle"
          data-kt-drawer-close="#kt_drawer_chat_close"
        >
          {/*begin::Messenger*/}
          <div
            className="card w-100 border-0 rounded-0"
            id="kt_drawer_chat_messenger"
          >
            {/*begin::Card header*/}
            <div
              className="card-header pe-5"
              id="kt_drawer_chat_messenger_header"
            >
              {/*begin::Title*/}
              <div className="card-title">
                {/*begin::User*/}
                <div className="d-flex justify-content-center flex-column me-3">
                  <a
                    href="#"
                    className="fs-4 fw-bold text-gray-900 text-hover-primary me-1 mb-2 lh-1"
                  >
                    Brian Cox
                  </a>
                  {/*begin::Info*/}
                  <div className="mb-0 lh-1">
                    <span className="badge badge-success badge-circle w-10px h-10px me-1" />
                    <span className="fs-7 fw-semibold text-muted">Active</span>
                  </div>
                  {/*end::Info*/}
                </div>
                {/*end::User*/}
              </div>
              {/*end::Title*/}
              {/*begin::Card toolbar*/}
              <div className="card-toolbar">
                {/*begin::Menu*/}
                <div className="me-0">
                  <button
                    className="btn btn-sm btn-icon btn-active-color-primary"
                    data-kt-menu-trigger="click"
                    data-kt-menu-placement="bottom-end"
                  >
                    <i className="ki-duotone ki-dots-square fs-2">
                      <span className="path1" />
                      <span className="path2" />
                      <span className="path3" />
                      <span className="path4" />
                    </i>
                  </button>
                  {/*begin::Menu 3*/}
                  <div
                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3"
                    data-kt-menu="true"
                  >
                    {/*begin::Heading*/}
                    <div className="menu-item px-3">
                      <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                        Contacts
                      </div>
                    </div>
                    {/*end::Heading*/}
                    {/*begin::Menu item*/}
                    <div className="menu-item px-3">
                      <a
                        href="#"
                        className="menu-link px-3"
                        data-bs-toggle="modal"
                        data-bs-target="#kt_modal_users_search"
                      >
                        Add Contact
                      </a>
                    </div>
                    {/*end::Menu item*/}
                    {/*begin::Menu item*/}
                    <div className="menu-item px-3">
                      <a
                        href="#"
                        className="menu-link flex-stack px-3"
                        data-bs-toggle="modal"
                        data-bs-target="#kt_modal_invite_friends"
                      >
                        Invite Contacts
                        <span
                          className="ms-2"
                          data-bs-toggle="tooltip"
                          title="Specify a contact email to send an invitation"
                        >
                          <i className="ki-duotone ki-information fs-7">
                            <span className="path1" />
                            <span className="path2" />
                            <span className="path3" />
                          </i>
                        </span>
                      </a>
                    </div>
                    {/*end::Menu item*/}
                    {/*begin::Menu item*/}
                    <div
                      className="menu-item px-3"
                      data-kt-menu-trigger="hover"
                      data-kt-menu-placement="right-start"
                    >
                      <a href="#" className="menu-link px-3">
                        <span className="menu-title">Groups</span>
                        <span className="menu-arrow" />
                      </a>
                      {/*begin::Menu sub*/}
                      <div className="menu-sub menu-sub-dropdown w-175px py-4">
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a
                            href="#"
                            className="menu-link px-3"
                            data-bs-toggle="tooltip"
                            title="Coming soon"
                          >
                            Create Group
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a
                            href="#"
                            className="menu-link px-3"
                            data-bs-toggle="tooltip"
                            title="Coming soon"
                          >
                            Invite Members
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a
                            href="#"
                            className="menu-link px-3"
                            data-bs-toggle="tooltip"
                            title="Coming soon"
                          >
                            Settings
                          </a>
                        </div>
                        {/*end::Menu item*/}
                      </div>
                      {/*end::Menu sub*/}
                    </div>
                    {/*end::Menu item*/}
                    {/*begin::Menu item*/}
                    <div className="menu-item px-3 my-1">
                      <a
                        href="#"
                        className="menu-link px-3"
                        data-bs-toggle="tooltip"
                        title="Coming soon"
                      >
                        Settings
                      </a>
                    </div>
                    {/*end::Menu item*/}
                  </div>
                  {/*end::Menu 3*/}
                </div>
                {/*end::Menu*/}
                {/*begin::Close*/}
                <div
                  className="btn btn-sm btn-icon btn-active-color-primary"
                  id="kt_drawer_chat_close"
                >
                  <i className="ki-duotone ki-cross-square fs-2">
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
            <div className="card-body" id="kt_drawer_chat_messenger_body">
              {/*begin::Messages*/}
              <div
                className="scroll-y me-n5 pe-5"
                data-kt-element="messages"
                data-kt-scroll="true"
                data-kt-scroll-activate="true"
                data-kt-scroll-height="auto"
                data-kt-scroll-dependencies="#kt_drawer_chat_messenger_header, #kt_drawer_chat_messenger_footer"
                data-kt-scroll-wrappers="#kt_drawer_chat_messenger_body"
                data-kt-scroll-offset="0px"
              >
                {/*begin::Message(in)*/}
                <div className="d-flex justify-content-start mb-10">
                  {/*begin::Wrapper*/}
                  <div className="d-flex flex-column align-items-start">
                    {/*begin::User*/}
                    <div className="d-flex align-items-center mb-2">
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <img
                          alt="Pic"
                          src="../assets/media/avatars/300-25.jpg"
                        />
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-3">
                        <a
                          href="#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary me-1"
                        >
                          Brian Cox
                        </a>
                        <span className="text-muted fs-7 mb-1">2 mins</span>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::Text*/}
                    <div
                      className="p-5 rounded bg-light-info text-gray-900 fw-semibold mw-lg-400px text-start"
                      data-kt-element="message-text"
                    >
                      How likely are you to recommend our company to your
                      friends and family ?
                    </div>
                    {/*end::Text*/}
                  </div>
                  {/*end::Wrapper*/}
                </div>
                {/*end::Message(in)*/}
                {/*begin::Message(out)*/}
                <div className="d-flex justify-content-end mb-10">
                  {/*begin::Wrapper*/}
                  <div className="d-flex flex-column align-items-end">
                    {/*begin::User*/}
                    <div className="d-flex align-items-center mb-2">
                      {/*begin::Details*/}
                      <div className="me-3">
                        <span className="text-muted fs-7 mb-1">5 mins</span>
                        <a
                          href="#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1"
                        >
                          You
                        </a>
                      </div>
                      {/*end::Details*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <img
                          alt="Pic"
                          src="../assets/media/avatars/300-1.jpg"
                        />
                      </div>
                      {/*end::Avatar*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::Text*/}
                    <div
                      className="p-5 rounded bg-light-primary text-gray-900 fw-semibold mw-lg-400px text-end"
                      data-kt-element="message-text"
                    >
                      Hey there, we’re just writing to let you know that you’ve
                      been subscribed to a repository on GitHub.
                    </div>
                    {/*end::Text*/}
                  </div>
                  {/*end::Wrapper*/}
                </div>
                {/*end::Message(out)*/}
                {/*begin::Message(in)*/}
                <div className="d-flex justify-content-start mb-10">
                  {/*begin::Wrapper*/}
                  <div className="d-flex flex-column align-items-start">
                    {/*begin::User*/}
                    <div className="d-flex align-items-center mb-2">
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <img
                          alt="Pic"
                          src="../assets/media/avatars/300-25.jpg"
                        />
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-3">
                        <a
                          href="#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary me-1"
                        >
                          Brian Cox
                        </a>
                        <span className="text-muted fs-7 mb-1">1 Hour</span>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::Text*/}
                    <div
                      className="p-5 rounded bg-light-info text-gray-900 fw-semibold mw-lg-400px text-start"
                      data-kt-element="message-text"
                    >
                      Ok, Understood!
                    </div>
                    {/*end::Text*/}
                  </div>
                  {/*end::Wrapper*/}
                </div>
                {/*end::Message(in)*/}
                {/*begin::Message(out)*/}
                <div className="d-flex justify-content-end mb-10">
                  {/*begin::Wrapper*/}
                  <div className="d-flex flex-column align-items-end">
                    {/*begin::User*/}
                    <div className="d-flex align-items-center mb-2">
                      {/*begin::Details*/}
                      <div className="me-3">
                        <span className="text-muted fs-7 mb-1">2 Hours</span>
                        <a
                          href="#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1"
                        >
                          You
                        </a>
                      </div>
                      {/*end::Details*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <img
                          alt="Pic"
                          src="../assets/media/avatars/300-1.jpg"
                        />
                      </div>
                      {/*end::Avatar*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::Text*/}
                    <div
                      className="p-5 rounded bg-light-primary text-gray-900 fw-semibold mw-lg-400px text-end"
                      data-kt-element="message-text"
                    >
                      You’ll receive notifications for all issues, pull
                      requests!
                    </div>
                    {/*end::Text*/}
                  </div>
                  {/*end::Wrapper*/}
                </div>
                {/*end::Message(out)*/}
                {/*begin::Message(in)*/}
                <div className="d-flex justify-content-start mb-10">
                  {/*begin::Wrapper*/}
                  <div className="d-flex flex-column align-items-start">
                    {/*begin::User*/}
                    <div className="d-flex align-items-center mb-2">
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <img
                          alt="Pic"
                          src="../assets/media/avatars/300-25.jpg"
                        />
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-3">
                        <a
                          href="#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary me-1"
                        >
                          Brian Cox
                        </a>
                        <span className="text-muted fs-7 mb-1">3 Hours</span>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::Text*/}
                    <div
                      className="p-5 rounded bg-light-info text-gray-900 fw-semibold mw-lg-400px text-start"
                      data-kt-element="message-text"
                    >
                      You can unwatch this repository immediately by clicking
                      here:
                      <a href="https://keenthemes.com/">Keenthemes.com</a>
                    </div>
                    {/*end::Text*/}
                  </div>
                  {/*end::Wrapper*/}
                </div>
                {/*end::Message(in)*/}
                {/*begin::Message(out)*/}
                <div className="d-flex justify-content-end mb-10">
                  {/*begin::Wrapper*/}
                  <div className="d-flex flex-column align-items-end">
                    {/*begin::User*/}
                    <div className="d-flex align-items-center mb-2">
                      {/*begin::Details*/}
                      <div className="me-3">
                        <span className="text-muted fs-7 mb-1">4 Hours</span>
                        <a
                          href="#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1"
                        >
                          You
                        </a>
                      </div>
                      {/*end::Details*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <img
                          alt="Pic"
                          src="../assets/media/avatars/300-1.jpg"
                        />
                      </div>
                      {/*end::Avatar*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::Text*/}
                    <div
                      className="p-5 rounded bg-light-primary text-gray-900 fw-semibold mw-lg-400px text-end"
                      data-kt-element="message-text"
                    >
                      Most purchased Business courses during this sale!
                    </div>
                    {/*end::Text*/}
                  </div>
                  {/*end::Wrapper*/}
                </div>
                {/*end::Message(out)*/}
                {/*begin::Message(in)*/}
                <div className="d-flex justify-content-start mb-10">
                  {/*begin::Wrapper*/}
                  <div className="d-flex flex-column align-items-start">
                    {/*begin::User*/}
                    <div className="d-flex align-items-center mb-2">
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <img
                          alt="Pic"
                          src="../assets/media/avatars/300-25.jpg"
                        />
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-3">
                        <a
                          href="#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary me-1"
                        >
                          Brian Cox
                        </a>
                        <span className="text-muted fs-7 mb-1">5 Hours</span>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::Text*/}
                    <div
                      className="p-5 rounded bg-light-info text-gray-900 fw-semibold mw-lg-400px text-start"
                      data-kt-element="message-text"
                    >
                      Company BBQ to celebrate the last quater achievements and
                      goals. Food and drinks provided
                    </div>
                    {/*end::Text*/}
                  </div>
                  {/*end::Wrapper*/}
                </div>
                {/*end::Message(in)*/}
                {/*begin::Message(template for out)*/}
                <div
                  className="d-flex justify-content-end mb-10 d-none"
                  data-kt-element="template-out"
                >
                  {/*begin::Wrapper*/}
                  <div className="d-flex flex-column align-items-end">
                    {/*begin::User*/}
                    <div className="d-flex align-items-center mb-2">
                      {/*begin::Details*/}
                      <div className="me-3">
                        <span className="text-muted fs-7 mb-1">Just now</span>
                        <a
                          href="#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1"
                        >
                          You
                        </a>
                      </div>
                      {/*end::Details*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <img
                          alt="Pic"
                          src="../assets/media/avatars/300-1.jpg"
                        />
                      </div>
                      {/*end::Avatar*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::Text*/}
                    <div
                      className="p-5 rounded bg-light-primary text-gray-900 fw-semibold mw-lg-400px text-end"
                      data-kt-element="message-text"
                    />
                    {/*end::Text*/}
                  </div>
                  {/*end::Wrapper*/}
                </div>
                {/*end::Message(template for out)*/}
                {/*begin::Message(template for in)*/}
                <div
                  className="d-flex justify-content-start mb-10 d-none"
                  data-kt-element="template-in"
                >
                  {/*begin::Wrapper*/}
                  <div className="d-flex flex-column align-items-start">
                    {/*begin::User*/}
                    <div className="d-flex align-items-center mb-2">
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <img
                          alt="Pic"
                          src="../assets/media/avatars/300-25.jpg"
                        />
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-3">
                        <a
                          href="#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary me-1"
                        >
                          Brian Cox
                        </a>
                        <span className="text-muted fs-7 mb-1">Just now</span>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::Text*/}
                    <div
                      className="p-5 rounded bg-light-info text-gray-900 fw-semibold mw-lg-400px text-start"
                      data-kt-element="message-text"
                    >
                      Right before vacation season we have the next Big Deal for
                      you.
                    </div>
                    {/*end::Text*/}
                  </div>
                  {/*end::Wrapper*/}
                </div>
                {/*end::Message(template for in)*/}
              </div>
              {/*end::Messages*/}
            </div>
            {/*end::Card body*/}
            {/*begin::Card footer*/}
            <div
              className="card-footer pt-4"
              id="kt_drawer_chat_messenger_footer"
            >
              {/*begin::Input*/}
              <textarea
                className="form-control form-control-flush mb-3"
                rows={1}
                data-kt-element="input"
                placeholder="Type a message"
                defaultValue={"          "}
              />
              {/*end::Input*/}
              {/*begin:Toolbar*/}
              <div className="d-flex flex-stack">
                {/*begin::Actions*/}
                <div className="d-flex align-items-center me-2">
                  <button
                    className="btn btn-sm btn-icon btn-active-light-primary me-1"
                    type="button"
                    data-bs-toggle="tooltip"
                    title="Coming soon"
                  >
                    <i className="ki-duotone ki-paper-clip fs-3" />
                  </button>
                  <button
                    className="btn btn-sm btn-icon btn-active-light-primary me-1"
                    type="button"
                    data-bs-toggle="tooltip"
                    title="Coming soon"
                  >
                    <i className="ki-duotone ki-cloud-add fs-3">
                      <span className="path1" />
                      <span className="path2" />
                    </i>
                  </button>
                </div>
                {/*end::Actions*/}
                {/*begin::Send*/}
                <button
                  className="btn btn-primary"
                  type="button"
                  data-kt-element="send"
                >
                  Send
                </button>
                {/*end::Send*/}
              </div>
              {/*end::Toolbar*/}
            </div>
            {/*end::Card footer*/}
          </div>
          {/*end::Messenger*/}
        </div>
        {/*end::Chat drawer*/}
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
              <h3 className="card-title text-gray-900 fw-bold">
                Shopping Cart
              </h3>
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
                      href="../apps/ecommerce/sales/details.html"
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
                  <img src="../assets/media/stock/600x400/img-1.jpg" alt="" />
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
                      href="../apps/ecommerce/sales/details.html"
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
                  <img src="../assets/media/stock/600x400/img-3.jpg" alt="" />
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
                      href="../apps/ecommerce/sales/details.html"
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
                  <img src="../assets/media/stock/600x400/img-8.jpg" alt="" />
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
                      href="../apps/ecommerce/sales/details.html"
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
                  <img src="../assets/media/stock/600x400/img-26.jpg" alt="" />
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
                      href="../apps/ecommerce/sales/details.html"
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
                  <img src="../assets/media/stock/600x400/img-21.jpg" alt="" />
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
                      href="../apps/ecommerce/sales/details.html"
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
                  <img src="../assets/media/stock/600x400/img-34.jpg" alt="" />
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
                      href="../apps/ecommerce/sales/details.html"
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
                  <img src="../assets/media/stock/600x400/img-27.jpg" alt="" />
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
                <a
                  href="#"
                  className="btn btn-primary d-flex justify-content-end"
                >
                  Pleace Order
                </a>
              </div>
              {/*end::Action*/}
            </div>
            {/*end::Card footer*/}
          </div>
          {/*end::Messenger*/}
        </div>
      </>

      <>
        <div className="engage-toolbar d-flex position-fixed px-5 fw-bold zindex-2 top-50 end-0 transform-90 mt-5 mt-lg-20 gap-2" />
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
                        <div
                          className="tab-pane fade"
                          id="kt_upgrade_plan_advanced"
                        >
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
                        <div
                          className="tab-pane fade"
                          id="kt_upgrade_plan_custom"
                        >
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
        {/*begin::Modal - Create App*/}
        <div
          className="modal fade"
          id="kt_modal_create_app"
          tabIndex={-1}
          aria-hidden="true"
        >
          {/*begin::Modal dialog*/}
          <div className="modal-dialog modal-dialog-centered mw-900px">
            {/*begin::Modal content*/}
            <div className="modal-content">
              {/*begin::Modal header*/}
              <div className="modal-header">
                {/*begin::Modal title*/}
                <h2>Create App</h2>
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
              {/*end::Modal header*/}
              {/*begin::Modal body*/}
              <div className="modal-body py-lg-10 px-lg-10">
                {/*begin::Stepper*/}
                <div
                  className="stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid"
                  id="kt_modal_create_app_stepper"
                >
                  {/*begin::Aside*/}
                  <div className="d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px">
                    {/*begin::Nav*/}
                    <div className="stepper-nav ps-lg-10">
                      {/*begin::Step 1*/}
                      <div
                        className="stepper-item current"
                        data-kt-stepper-element="nav"
                      >
                        {/*begin::Wrapper*/}
                        <div className="stepper-wrapper">
                          {/*begin::Icon*/}
                          <div className="stepper-icon w-40px h-40px">
                            <i className="ki-duotone ki-check stepper-check fs-2" />
                            <span className="stepper-number">1</span>
                          </div>
                          {/*end::Icon*/}
                          {/*begin::Label*/}
                          <div className="stepper-label">
                            <h3 className="stepper-title">Details</h3>
                            <div className="stepper-desc">Name your App</div>
                          </div>
                          {/*end::Label*/}
                        </div>
                        {/*end::Wrapper*/}
                        {/*begin::Line*/}
                        <div className="stepper-line h-40px" />
                        {/*end::Line*/}
                      </div>
                      {/*end::Step 1*/}
                      {/*begin::Step 2*/}
                      <div
                        className="stepper-item"
                        data-kt-stepper-element="nav"
                      >
                        {/*begin::Wrapper*/}
                        <div className="stepper-wrapper">
                          {/*begin::Icon*/}
                          <div className="stepper-icon w-40px h-40px">
                            <i className="ki-duotone ki-check stepper-check fs-2" />
                            <span className="stepper-number">2</span>
                          </div>
                          {/*begin::Icon*/}
                          {/*begin::Label*/}
                          <div className="stepper-label">
                            <h3 className="stepper-title">Frameworks</h3>
                            <div className="stepper-desc">
                              Define your app framework
                            </div>
                          </div>
                          {/*begin::Label*/}
                        </div>
                        {/*end::Wrapper*/}
                        {/*begin::Line*/}
                        <div className="stepper-line h-40px" />
                        {/*end::Line*/}
                      </div>
                      {/*end::Step 2*/}
                      {/*begin::Step 3*/}
                      <div
                        className="stepper-item"
                        data-kt-stepper-element="nav"
                      >
                        {/*begin::Wrapper*/}
                        <div className="stepper-wrapper">
                          {/*begin::Icon*/}
                          <div className="stepper-icon w-40px h-40px">
                            <i className="ki-duotone ki-check stepper-check fs-2" />
                            <span className="stepper-number">3</span>
                          </div>
                          {/*end::Icon*/}
                          {/*begin::Label*/}
                          <div className="stepper-label">
                            <h3 className="stepper-title">Database</h3>
                            <div className="stepper-desc">
                              Select the app database type
                            </div>
                          </div>
                          {/*end::Label*/}
                        </div>
                        {/*end::Wrapper*/}
                        {/*begin::Line*/}
                        <div className="stepper-line h-40px" />
                        {/*end::Line*/}
                      </div>
                      {/*end::Step 3*/}
                      {/*begin::Step 4*/}
                      <div
                        className="stepper-item"
                        data-kt-stepper-element="nav"
                      >
                        {/*begin::Wrapper*/}
                        <div className="stepper-wrapper">
                          {/*begin::Icon*/}
                          <div className="stepper-icon w-40px h-40px">
                            <i className="ki-duotone ki-check stepper-check fs-2" />
                            <span className="stepper-number">4</span>
                          </div>
                          {/*end::Icon*/}
                          {/*begin::Label*/}
                          <div className="stepper-label">
                            <h3 className="stepper-title">Billing</h3>
                            <div className="stepper-desc">
                              Provide payment details
                            </div>
                          </div>
                          {/*end::Label*/}
                        </div>
                        {/*end::Wrapper*/}
                        {/*begin::Line*/}
                        <div className="stepper-line h-40px" />
                        {/*end::Line*/}
                      </div>
                      {/*end::Step 4*/}
                      {/*begin::Step 5*/}
                      <div
                        className="stepper-item mark-completed"
                        data-kt-stepper-element="nav"
                      >
                        {/*begin::Wrapper*/}
                        <div className="stepper-wrapper">
                          {/*begin::Icon*/}
                          <div className="stepper-icon w-40px h-40px">
                            <i className="ki-duotone ki-check stepper-check fs-2" />
                            <span className="stepper-number">5</span>
                          </div>
                          {/*end::Icon*/}
                          {/*begin::Label*/}
                          <div className="stepper-label">
                            <h3 className="stepper-title">Completed</h3>
                            <div className="stepper-desc">
                              Review and Submit
                            </div>
                          </div>
                          {/*end::Label*/}
                        </div>
                        {/*end::Wrapper*/}
                      </div>
                      {/*end::Step 5*/}
                    </div>
                    {/*end::Nav*/}
                  </div>
                  {/*begin::Aside*/}
                  {/*begin::Content*/}
                  <div className="flex-row-fluid py-lg-5 px-lg-15">
                    {/*begin::Form*/}
                    <form
                      className="form"
                      noValidate="novalidate"
                      id="kt_modal_create_app_form"
                    >
                      {/*begin::Step 1*/}
                      <div
                        className="current"
                        data-kt-stepper-element="content"
                      >
                        <div className="w-100">
                          {/*begin::Input group*/}
                          <div className="fv-row mb-10">
                            {/*begin::Label*/}
                            <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
                              <span className="required">App Name</span>
                              <span
                                className="ms-1"
                                data-bs-toggle="tooltip"
                                title="Specify your unique app name"
                              >
                                <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                                  <span className="path1" />
                                  <span className="path2" />
                                  <span className="path3" />
                                </i>
                              </span>
                            </label>
                            {/*end::Label*/}
                            {/*begin::Input*/}
                            <input
                              type="text"
                              className="form-control form-control-lg form-control-solid"
                              name="name"
                              placeholder=""
                              defaultValue=""
                            />
                            {/*end::Input*/}
                          </div>
                          {/*end::Input group*/}
                          {/*begin::Input group*/}
                          <div className="fv-row">
                            {/*begin::Label*/}
                            <label className="d-flex align-items-center fs-5 fw-semibold mb-4">
                              <span className="required">Category</span>
                              <span
                                className="ms-1"
                                data-bs-toggle="tooltip"
                                title="Select your app category"
                              >
                                <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                                  <span className="path1" />
                                  <span className="path2" />
                                  <span className="path3" />
                                </i>
                              </span>
                            </label>
                            {/*end::Label*/}
                            {/*begin:Options*/}
                            <div className="fv-row">
                              {/*begin:Option*/}
                              <label className="d-flex flex-stack mb-5 cursor-pointer">
                                {/*begin:Label*/}
                                <span className="d-flex align-items-center me-2">
                                  {/*begin:Icon*/}
                                  <span className="symbol symbol-50px me-6">
                                    <span className="symbol-label bg-light-primary">
                                      <i className="ki-duotone ki-compass fs-1 text-primary">
                                        <span className="path1" />
                                        <span className="path2" />
                                      </i>
                                    </span>
                                  </span>
                                  {/*end:Icon*/}
                                  {/*begin:Info*/}
                                  <span className="d-flex flex-column">
                                    <span className="fw-bold fs-6">
                                      Quick Online Courses
                                    </span>
                                    <span className="fs-7 text-muted">
                                      Creating a clear text structure is just
                                      one SEO
                                    </span>
                                  </span>
                                  {/*end:Info*/}
                                </span>
                                {/*end:Label*/}
                                {/*begin:Input*/}
                                <span className="form-check form-check-custom form-check-solid">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="category"
                                    defaultValue={1}
                                  />
                                </span>
                                {/*end:Input*/}
                              </label>
                              {/*end::Option*/}
                              {/*begin:Option*/}
                              <label className="d-flex flex-stack mb-5 cursor-pointer">
                                {/*begin:Label*/}
                                <span className="d-flex align-items-center me-2">
                                  {/*begin:Icon*/}
                                  <span className="symbol symbol-50px me-6">
                                    <span className="symbol-label bg-light-danger">
                                      <i className="ki-duotone ki-element-11 fs-1 text-danger">
                                        <span className="path1" />
                                        <span className="path2" />
                                        <span className="path3" />
                                        <span className="path4" />
                                      </i>
                                    </span>
                                  </span>
                                  {/*end:Icon*/}
                                  {/*begin:Info*/}
                                  <span className="d-flex flex-column">
                                    <span className="fw-bold fs-6">
                                      Face to Face Discussions
                                    </span>
                                    <span className="fs-7 text-muted">
                                      Creating a clear text structure is just
                                      one aspect
                                    </span>
                                  </span>
                                  {/*end:Info*/}
                                </span>
                                {/*end:Label*/}
                                {/*begin:Input*/}
                                <span className="form-check form-check-custom form-check-solid">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="category"
                                    defaultValue={2}
                                  />
                                </span>
                                {/*end:Input*/}
                              </label>
                              {/*end::Option*/}
                              {/*begin:Option*/}
                              <label className="d-flex flex-stack cursor-pointer">
                                {/*begin:Label*/}
                                <span className="d-flex align-items-center me-2">
                                  {/*begin:Icon*/}
                                  <span className="symbol symbol-50px me-6">
                                    <span className="symbol-label bg-light-success">
                                      <i className="ki-duotone ki-timer fs-1 text-success">
                                        <span className="path1" />
                                        <span className="path2" />
                                        <span className="path3" />
                                      </i>
                                    </span>
                                  </span>
                                  {/*end:Icon*/}
                                  {/*begin:Info*/}
                                  <span className="d-flex flex-column">
                                    <span className="fw-bold fs-6">
                                      Full Intro Training
                                    </span>
                                    <span className="fs-7 text-muted">
                                      Creating a clear text structure
                                      copywriting
                                    </span>
                                  </span>
                                  {/*end:Info*/}
                                </span>
                                {/*end:Label*/}
                                {/*begin:Input*/}
                                <span className="form-check form-check-custom form-check-solid">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="category"
                                    defaultValue={3}
                                  />
                                </span>
                                {/*end:Input*/}
                              </label>
                              {/*end::Option*/}
                            </div>
                            {/*end:Options*/}
                          </div>
                          {/*end::Input group*/}
                        </div>
                      </div>
                      {/*end::Step 1*/}
                      {/*begin::Step 2*/}
                      <div data-kt-stepper-element="content">
                        <div className="w-100">
                          {/*begin::Input group*/}
                          <div className="fv-row">
                            {/*begin::Label*/}
                            <label className="d-flex align-items-center fs-5 fw-semibold mb-4">
                              <span className="required">Select Framework</span>
                              <span
                                className="ms-1"
                                data-bs-toggle="tooltip"
                                title="Specify your apps framework"
                              >
                                <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                                  <span className="path1" />
                                  <span className="path2" />
                                  <span className="path3" />
                                </i>
                              </span>
                            </label>
                            {/*end::Label*/}
                            {/*begin:Option*/}
                            <label className="d-flex flex-stack cursor-pointer mb-5">
                              {/*begin:Label*/}
                              <span className="d-flex align-items-center me-2">
                                {/*begin:Icon*/}
                                <span className="symbol symbol-50px me-6">
                                  <span className="symbol-label bg-light-warning">
                                    <i className="ki-duotone ki-html fs-2x text-warning">
                                      <span className="path1" />
                                      <span className="path2" />
                                    </i>
                                  </span>
                                </span>
                                {/*end:Icon*/}
                                {/*begin:Info*/}
                                <span className="d-flex flex-column">
                                  <span className="fw-bold fs-6">HTML5</span>
                                  <span className="fs-7 text-muted">
                                    Base Web Projec
                                  </span>
                                </span>
                                {/*end:Info*/}
                              </span>
                              {/*end:Label*/}
                              {/*begin:Input*/}
                              <span className="form-check form-check-custom form-check-solid">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  defaultChecked=""
                                  name="framework"
                                  defaultValue={1}
                                />
                              </span>
                              {/*end:Input*/}
                            </label>
                            {/*end::Option*/}
                            {/*begin:Option*/}
                            <label className="d-flex flex-stack cursor-pointer mb-5">
                              {/*begin:Label*/}
                              <span className="d-flex align-items-center me-2">
                                {/*begin:Icon*/}
                                <span className="symbol symbol-50px me-6">
                                  <span className="symbol-label bg-light-success">
                                    <i className="ki-duotone ki-react fs-2x text-success">
                                      <span className="path1" />
                                      <span className="path2" />
                                    </i>
                                  </span>
                                </span>
                                {/*end:Icon*/}
                                {/*begin:Info*/}
                                <span className="d-flex flex-column">
                                  <span className="fw-bold fs-6">ReactJS</span>
                                  <span className="fs-7 text-muted">
                                    Robust and flexible app framework
                                  </span>
                                </span>
                                {/*end:Info*/}
                              </span>
                              {/*end:Label*/}
                              {/*begin:Input*/}
                              <span className="form-check form-check-custom form-check-solid">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="framework"
                                  defaultValue={2}
                                />
                              </span>
                              {/*end:Input*/}
                            </label>
                            {/*end::Option*/}
                            {/*begin:Option*/}
                            <label className="d-flex flex-stack cursor-pointer mb-5">
                              {/*begin:Label*/}
                              <span className="d-flex align-items-center me-2">
                                {/*begin:Icon*/}
                                <span className="symbol symbol-50px me-6">
                                  <span className="symbol-label bg-light-danger">
                                    <i className="ki-duotone ki-angular fs-2x text-danger">
                                      <span className="path1" />
                                      <span className="path2" />
                                      <span className="path3" />
                                    </i>
                                  </span>
                                </span>
                                {/*end:Icon*/}
                                {/*begin:Info*/}
                                <span className="d-flex flex-column">
                                  <span className="fw-bold fs-6">Angular</span>
                                  <span className="fs-7 text-muted">
                                    Powerful data mangement
                                  </span>
                                </span>
                                {/*end:Info*/}
                              </span>
                              {/*end:Label*/}
                              {/*begin:Input*/}
                              <span className="form-check form-check-custom form-check-solid">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="framework"
                                  defaultValue={3}
                                />
                              </span>
                              {/*end:Input*/}
                            </label>
                            {/*end::Option*/}
                            {/*begin:Option*/}
                            <label className="d-flex flex-stack cursor-pointer">
                              {/*begin:Label*/}
                              <span className="d-flex align-items-center me-2">
                                {/*begin:Icon*/}
                                <span className="symbol symbol-50px me-6">
                                  <span className="symbol-label bg-light-primary">
                                    <i className="ki-duotone ki-vue fs-2x text-primary">
                                      <span className="path1" />
                                      <span className="path2" />
                                    </i>
                                  </span>
                                </span>
                                {/*end:Icon*/}
                                {/*begin:Info*/}
                                <span className="d-flex flex-column">
                                  <span className="fw-bold fs-6">Vue</span>
                                  <span className="fs-7 text-muted">
                                    Lightweight and responsive framework
                                  </span>
                                </span>
                                {/*end:Info*/}
                              </span>
                              {/*end:Label*/}
                              {/*begin:Input*/}
                              <span className="form-check form-check-custom form-check-solid">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="framework"
                                  defaultValue={4}
                                />
                              </span>
                              {/*end:Input*/}
                            </label>
                            {/*end::Option*/}
                          </div>
                          {/*end::Input group*/}
                        </div>
                      </div>
                      {/*end::Step 2*/}
                      {/*begin::Step 3*/}
                      <div data-kt-stepper-element="content">
                        <div className="w-100">
                          {/*begin::Input group*/}
                          <div className="fv-row mb-10">
                            {/*begin::Label*/}
                            <label className="required fs-5 fw-semibold mb-2">
                              Database Name
                            </label>
                            {/*end::Label*/}
                            {/*begin::Input*/}
                            <input
                              type="text"
                              className="form-control form-control-lg form-control-solid"
                              name="dbname"
                              placeholder=""
                              defaultValue="master_db"
                            />
                            {/*end::Input*/}
                          </div>
                          {/*end::Input group*/}
                          {/*begin::Input group*/}
                          <div className="fv-row">
                            {/*begin::Label*/}
                            <label className="d-flex align-items-center fs-5 fw-semibold mb-4">
                              <span className="required">
                                Select Database Engine
                              </span>
                              <span
                                className="ms-1"
                                data-bs-toggle="tooltip"
                                title="Select your app database engine"
                              >
                                <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                                  <span className="path1" />
                                  <span className="path2" />
                                  <span className="path3" />
                                </i>
                              </span>
                            </label>
                            {/*end::Label*/}
                            {/*begin:Option*/}
                            <label className="d-flex flex-stack cursor-pointer mb-5">
                              {/*begin::Label*/}
                              <span className="d-flex align-items-center me-2">
                                {/*begin::Icon*/}
                                <span className="symbol symbol-50px me-6">
                                  <span className="symbol-label bg-light-success">
                                    <i className="ki-duotone ki-note text-success fs-2x">
                                      <span className="path1" />
                                      <span className="path2" />
                                    </i>
                                  </span>
                                </span>
                                {/*end::Icon*/}
                                {/*begin::Info*/}
                                <span className="d-flex flex-column">
                                  <span className="fw-bold fs-6">MySQL</span>
                                  <span className="fs-7 text-muted">
                                    Basic MySQL database
                                  </span>
                                </span>
                                {/*end::Info*/}
                              </span>
                              {/*end::Label*/}
                              {/*begin::Input*/}
                              <span className="form-check form-check-custom form-check-solid">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="dbengine"
                                  defaultChecked=""
                                  defaultValue={1}
                                />
                              </span>
                              {/*end::Input*/}
                            </label>
                            {/*end::Option*/}
                            {/*begin:Option*/}
                            <label className="d-flex flex-stack cursor-pointer mb-5">
                              {/*begin::Label*/}
                              <span className="d-flex align-items-center me-2">
                                {/*begin::Icon*/}
                                <span className="symbol symbol-50px me-6">
                                  <span className="symbol-label bg-light-danger">
                                    <i className="ki-duotone ki-google text-danger fs-2x">
                                      <span className="path1" />
                                      <span className="path2" />
                                    </i>
                                  </span>
                                </span>
                                {/*end::Icon*/}
                                {/*begin::Info*/}
                                <span className="d-flex flex-column">
                                  <span className="fw-bold fs-6">Firebase</span>
                                  <span className="fs-7 text-muted">
                                    Google based app data management
                                  </span>
                                </span>
                                {/*end::Info*/}
                              </span>
                              {/*end::Label*/}
                              {/*begin::Input*/}
                              <span className="form-check form-check-custom form-check-solid">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="dbengine"
                                  defaultValue={2}
                                />
                              </span>
                              {/*end::Input*/}
                            </label>
                            {/*end::Option*/}
                            {/*begin:Option*/}
                            <label className="d-flex flex-stack cursor-pointer">
                              {/*begin::Label*/}
                              <span className="d-flex align-items-center me-2">
                                {/*begin::Icon*/}
                                <span className="symbol symbol-50px me-6">
                                  <span className="symbol-label bg-light-warning">
                                    <i className="ki-duotone ki-microsoft text-warning fs-2x">
                                      <span className="path1" />
                                      <span className="path2" />
                                      <span className="path3" />
                                      <span className="path4" />
                                    </i>
                                  </span>
                                </span>
                                {/*end::Icon*/}
                                {/*begin::Info*/}
                                <span className="d-flex flex-column">
                                  <span className="fw-bold fs-6">DynamoDB</span>
                                  <span className="fs-7 text-muted">
                                    Microsoft Fast NoSQL Database
                                  </span>
                                </span>
                                {/*end::Info*/}
                              </span>
                              {/*end::Label*/}
                              {/*begin::Input*/}
                              <span className="form-check form-check-custom form-check-solid">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="dbengine"
                                  defaultValue={3}
                                />
                              </span>
                              {/*end::Input*/}
                            </label>
                            {/*end::Option*/}
                          </div>
                          {/*end::Input group*/}
                        </div>
                      </div>
                      {/*end::Step 3*/}
                      {/*begin::Step 4*/}
                      <div data-kt-stepper-element="content">
                        <div className="w-100">
                          {/*begin::Input group*/}
                          <div className="d-flex flex-column mb-7 fv-row">
                            {/*begin::Label*/}
                            <label className="d-flex align-items-center fs-6 fw-semibold form-label mb-2">
                              <span className="required">Name On Card</span>
                              <span
                                className="ms-1"
                                data-bs-toggle="tooltip"
                                title="Specify a card holder's name"
                              >
                                <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                                  <span className="path1" />
                                  <span className="path2" />
                                  <span className="path3" />
                                </i>
                              </span>
                            </label>
                            {/*end::Label*/}
                            <input
                              type="text"
                              className="form-control form-control-solid"
                              placeholder=""
                              name="card_name"
                              defaultValue="Max Doe"
                            />
                          </div>
                          {/*end::Input group*/}
                          {/*begin::Input group*/}
                          <div className="d-flex flex-column mb-7 fv-row">
                            {/*begin::Label*/}
                            <label className="required fs-6 fw-semibold form-label mb-2">
                              Card Number
                            </label>
                            {/*end::Label*/}
                            {/*begin::Input wrapper*/}
                            <div className="position-relative">
                              {/*begin::Input*/}
                              <input
                                type="text"
                                className="form-control form-control-solid"
                                placeholder="Enter card number"
                                name="card_number"
                                defaultValue="4111 1111 1111 1111"
                              />
                              {/*end::Input*/}
                              {/*begin::Card logos*/}
                              <div className="position-absolute translate-middle-y top-50 end-0 me-5">
                                <img
                                  src="../assets/media/svg/card-logos/visa.svg"
                                  alt=""
                                  className="h-25px"
                                />
                                <img
                                  src="../assets/media/svg/card-logos/mastercard.svg"
                                  alt=""
                                  className="h-25px"
                                />
                                <img
                                  src="../assets/media/svg/card-logos/american-express.svg"
                                  alt=""
                                  className="h-25px"
                                />
                              </div>
                              {/*end::Card logos*/}
                            </div>
                            {/*end::Input wrapper*/}
                          </div>
                          {/*end::Input group*/}
                          {/*begin::Input group*/}
                          <div className="row mb-10">
                            {/*begin::Col*/}
                            <div className="col-md-8 fv-row">
                              {/*begin::Label*/}
                              <label className="required fs-6 fw-semibold form-label mb-2">
                                Expiration Date
                              </label>
                              {/*end::Label*/}
                              {/*begin::Row*/}
                              <div className="row fv-row">
                                {/*begin::Col*/}
                                <div className="col-6">
                                  <select
                                    name="card_expiry_month"
                                    className="form-select form-select-solid"
                                    data-control="select2"
                                    data-hide-search="true"
                                    data-placeholder="Month"
                                  >
                                    <option />
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                    <option value={6}>6</option>
                                    <option value={7}>7</option>
                                    <option value={8}>8</option>
                                    <option value={9}>9</option>
                                    <option value={10}>10</option>
                                    <option value={11}>11</option>
                                    <option value={12}>12</option>
                                  </select>
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-6">
                                  <select
                                    name="card_expiry_year"
                                    className="form-select form-select-solid"
                                    data-control="select2"
                                    data-hide-search="true"
                                    data-placeholder="Year"
                                  >
                                    <option />
                                    <option value={2024}>2024</option>
                                    <option value={2025}>2025</option>
                                    <option value={2026}>2026</option>
                                    <option value={2027}>2027</option>
                                    <option value={2028}>2028</option>
                                    <option value={2029}>2029</option>
                                    <option value={2030}>2030</option>
                                    <option value={2031}>2031</option>
                                    <option value={2032}>2032</option>
                                    <option value={2033}>2033</option>
                                    <option value={2034}>2034</option>
                                  </select>
                                </div>
                                {/*end::Col*/}
                              </div>
                              {/*end::Row*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-md-4 fv-row">
                              {/*begin::Label*/}
                              <label className="d-flex align-items-center fs-6 fw-semibold form-label mb-2">
                                <span className="required">CVV</span>
                                <span
                                  className="ms-1"
                                  data-bs-toggle="tooltip"
                                  title="Enter a card CVV code"
                                >
                                  <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                                    <span className="path1" />
                                    <span className="path2" />
                                    <span className="path3" />
                                  </i>
                                </span>
                              </label>
                              {/*end::Label*/}
                              {/*begin::Input wrapper*/}
                              <div className="position-relative">
                                {/*begin::Input*/}
                                <input
                                  type="text"
                                  className="form-control form-control-solid"
                                  minLength={3}
                                  maxLength={4}
                                  placeholder="CVV"
                                  name="card_cvv"
                                />
                                {/*end::Input*/}
                                {/*begin::CVV icon*/}
                                <div className="position-absolute translate-middle-y top-50 end-0 me-3">
                                  <i className="ki-duotone ki-credit-cart fs-2hx">
                                    <span className="path1" />
                                    <span className="path2" />
                                  </i>
                                </div>
                                {/*end::CVV icon*/}
                              </div>
                              {/*end::Input wrapper*/}
                            </div>
                            {/*end::Col*/}
                          </div>
                          {/*end::Input group*/}
                          {/*begin::Input group*/}
                          <div className="d-flex flex-stack">
                            {/*begin::Label*/}
                            <div className="me-5">
                              <label className="fs-6 fw-semibold form-label">
                                Save Card for further billing?
                              </label>
                              <div className="fs-7 fw-semibold text-muted">
                                If you need more info, please check budget
                                planning
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
                                Save Card
                              </span>
                            </label>
                            {/*end::Switch*/}
                          </div>
                          {/*end::Input group*/}
                        </div>
                      </div>
                      {/*end::Step 4*/}
                      {/*begin::Step 5*/}
                      <div data-kt-stepper-element="content">
                        <div className="w-100 text-center">
                          {/*begin::Heading*/}
                          <h1 className="fw-bold text-gray-900 mb-3">
                            Release!
                          </h1>
                          {/*end::Heading*/}
                          {/*begin::Description*/}
                          <div className="text-muted fw-semibold fs-3">
                            Submit your app to kickstart your project.
                          </div>
                          {/*end::Description*/}
                          {/*begin::Illustration*/}
                          <div className="text-center px-4 py-15">
                            <img
                              src="../assets/media/illustrations/sketchy-1/9.png"
                              alt=""
                              className="mw-100 mh-300px"
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
                  {/*end::Content*/}
                </div>
                {/*end::Stepper*/}
              </div>
              {/*end::Modal body*/}
            </div>
            {/*end::Modal content*/}
          </div>
          {/*end::Modal dialog*/}
        </div>
        {/*end::Modal - Create App*/}
        {/*begin::Modal - View Users*/}
        <div
          className="modal fade"
          id="kt_modal_view_users"
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
                  <h1 className="mb-3">Browse Users</h1>
                  {/*end::Title*/}
                  {/*begin::Description*/}
                  <div className="text-muted fw-semibold fs-5">
                    If you need more info, please check out our
                    <a href="#" className="link-primary fw-bold">
                      Users Directory
                    </a>
                    .
                  </div>
                  {/*end::Description*/}
                </div>
                {/*end::Heading*/}
                {/*begin::Users*/}
                <div className="mb-15">
                  {/*begin::List*/}
                  <div className="mh-375px scroll-y me-n7 pe-7">
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
                      {/*begin::Details*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Avatar*/}
                        <div className="symbol symbol-35px symbol-circle">
                          <img
                            alt="Pic"
                            src="../assets/media/avatars/300-6.jpg"
                          />
                        </div>
                        {/*end::Avatar*/}
                        {/*begin::Details*/}
                        <div className="ms-6">
                          {/*begin::Name*/}
                          <a
                            href="#"
                            className="d-flex align-items-center fs-5 fw-bold text-gray-900 text-hover-primary"
                          >
                            Emma Smith
                            <span className="badge badge-light fs-8 fw-semibold ms-2">
                              Art Director
                            </span>
                          </a>
                          {/*end::Name*/}
                          {/*begin::Email*/}
                          <div className="fw-semibold text-muted">
                            smith@kpmg.com
                          </div>
                          {/*end::Email*/}
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Stats*/}
                      <div className="d-flex">
                        {/*begin::Sales*/}
                        <div className="text-end">
                          <div className="fs-5 fw-bold text-gray-900">
                            $23,000
                          </div>
                          <div className="fs-7 text-muted">Sales</div>
                        </div>
                        {/*end::Sales*/}
                      </div>
                      {/*end::Stats*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
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
                        <div className="ms-6">
                          {/*begin::Name*/}
                          <a
                            href="#"
                            className="d-flex align-items-center fs-5 fw-bold text-gray-900 text-hover-primary"
                          >
                            Melody Macy
                            <span className="badge badge-light fs-8 fw-semibold ms-2">
                              Marketing Analytic
                            </span>
                          </a>
                          {/*end::Name*/}
                          {/*begin::Email*/}
                          <div className="fw-semibold text-muted">
                            melody@altbox.com
                          </div>
                          {/*end::Email*/}
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Stats*/}
                      <div className="d-flex">
                        {/*begin::Sales*/}
                        <div className="text-end">
                          <div className="fs-5 fw-bold text-gray-900">
                            $50,500
                          </div>
                          <div className="fs-7 text-muted">Sales</div>
                        </div>
                        {/*end::Sales*/}
                      </div>
                      {/*end::Stats*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
                      {/*begin::Details*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Avatar*/}
                        <div className="symbol symbol-35px symbol-circle">
                          <img
                            alt="Pic"
                            src="../assets/media/avatars/300-1.jpg"
                          />
                        </div>
                        {/*end::Avatar*/}
                        {/*begin::Details*/}
                        <div className="ms-6">
                          {/*begin::Name*/}
                          <a
                            href="#"
                            className="d-flex align-items-center fs-5 fw-bold text-gray-900 text-hover-primary"
                          >
                            Max Smith
                            <span className="badge badge-light fs-8 fw-semibold ms-2">
                              Software Enginer
                            </span>
                          </a>
                          {/*end::Name*/}
                          {/*begin::Email*/}
                          <div className="fw-semibold text-muted">
                            max@kt.com
                          </div>
                          {/*end::Email*/}
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Stats*/}
                      <div className="d-flex">
                        {/*begin::Sales*/}
                        <div className="text-end">
                          <div className="fs-5 fw-bold text-gray-900">
                            $75,900
                          </div>
                          <div className="fs-7 text-muted">Sales</div>
                        </div>
                        {/*end::Sales*/}
                      </div>
                      {/*end::Stats*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
                      {/*begin::Details*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Avatar*/}
                        <div className="symbol symbol-35px symbol-circle">
                          <img
                            alt="Pic"
                            src="../assets/media/avatars/300-5.jpg"
                          />
                        </div>
                        {/*end::Avatar*/}
                        {/*begin::Details*/}
                        <div className="ms-6">
                          {/*begin::Name*/}
                          <a
                            href="#"
                            className="d-flex align-items-center fs-5 fw-bold text-gray-900 text-hover-primary"
                          >
                            Sean Bean
                            <span className="badge badge-light fs-8 fw-semibold ms-2">
                              Web Developer
                            </span>
                          </a>
                          {/*end::Name*/}
                          {/*begin::Email*/}
                          <div className="fw-semibold text-muted">
                            sean@dellito.com
                          </div>
                          {/*end::Email*/}
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Stats*/}
                      <div className="d-flex">
                        {/*begin::Sales*/}
                        <div className="text-end">
                          <div className="fs-5 fw-bold text-gray-900">
                            $10,500
                          </div>
                          <div className="fs-7 text-muted">Sales</div>
                        </div>
                        {/*end::Sales*/}
                      </div>
                      {/*end::Stats*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
                      {/*begin::Details*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Avatar*/}
                        <div className="symbol symbol-35px symbol-circle">
                          <img
                            alt="Pic"
                            src="../assets/media/avatars/300-25.jpg"
                          />
                        </div>
                        {/*end::Avatar*/}
                        {/*begin::Details*/}
                        <div className="ms-6">
                          {/*begin::Name*/}
                          <a
                            href="#"
                            className="d-flex align-items-center fs-5 fw-bold text-gray-900 text-hover-primary"
                          >
                            Brian Cox
                            <span className="badge badge-light fs-8 fw-semibold ms-2">
                              UI/UX Designer
                            </span>
                          </a>
                          {/*end::Name*/}
                          {/*begin::Email*/}
                          <div className="fw-semibold text-muted">
                            brian@exchange.com
                          </div>
                          {/*end::Email*/}
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Stats*/}
                      <div className="d-flex">
                        {/*begin::Sales*/}
                        <div className="text-end">
                          <div className="fs-5 fw-bold text-gray-900">
                            $20,000
                          </div>
                          <div className="fs-7 text-muted">Sales</div>
                        </div>
                        {/*end::Sales*/}
                      </div>
                      {/*end::Stats*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
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
                        <div className="ms-6">
                          {/*begin::Name*/}
                          <a
                            href="#"
                            className="d-flex align-items-center fs-5 fw-bold text-gray-900 text-hover-primary"
                          >
                            Mikaela Collins
                            <span className="badge badge-light fs-8 fw-semibold ms-2">
                              Head Of Marketing
                            </span>
                          </a>
                          {/*end::Name*/}
                          {/*begin::Email*/}
                          <div className="fw-semibold text-muted">
                            mik@pex.com
                          </div>
                          {/*end::Email*/}
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Stats*/}
                      <div className="d-flex">
                        {/*begin::Sales*/}
                        <div className="text-end">
                          <div className="fs-5 fw-bold text-gray-900">
                            $9,300
                          </div>
                          <div className="fs-7 text-muted">Sales</div>
                        </div>
                        {/*end::Sales*/}
                      </div>
                      {/*end::Stats*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
                      {/*begin::Details*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Avatar*/}
                        <div className="symbol symbol-35px symbol-circle">
                          <img
                            alt="Pic"
                            src="../assets/media/avatars/300-9.jpg"
                          />
                        </div>
                        {/*end::Avatar*/}
                        {/*begin::Details*/}
                        <div className="ms-6">
                          {/*begin::Name*/}
                          <a
                            href="#"
                            className="d-flex align-items-center fs-5 fw-bold text-gray-900 text-hover-primary"
                          >
                            Francis Mitcham
                            <span className="badge badge-light fs-8 fw-semibold ms-2">
                              Software Arcitect
                            </span>
                          </a>
                          {/*end::Name*/}
                          {/*begin::Email*/}
                          <div className="fw-semibold text-muted">
                            f.mit@kpmg.com
                          </div>
                          {/*end::Email*/}
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Stats*/}
                      <div className="d-flex">
                        {/*begin::Sales*/}
                        <div className="text-end">
                          <div className="fs-5 fw-bold text-gray-900">
                            $15,000
                          </div>
                          <div className="fs-7 text-muted">Sales</div>
                        </div>
                        {/*end::Sales*/}
                      </div>
                      {/*end::Stats*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
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
                        <div className="ms-6">
                          {/*begin::Name*/}
                          <a
                            href="#"
                            className="d-flex align-items-center fs-5 fw-bold text-gray-900 text-hover-primary"
                          >
                            Olivia Wild
                            <span className="badge badge-light fs-8 fw-semibold ms-2">
                              System Admin
                            </span>
                          </a>
                          {/*end::Name*/}
                          {/*begin::Email*/}
                          <div className="fw-semibold text-muted">
                            olivia@corpmail.com
                          </div>
                          {/*end::Email*/}
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Stats*/}
                      <div className="d-flex">
                        {/*begin::Sales*/}
                        <div className="text-end">
                          <div className="fs-5 fw-bold text-gray-900">
                            $23,000
                          </div>
                          <div className="fs-7 text-muted">Sales</div>
                        </div>
                        {/*end::Sales*/}
                      </div>
                      {/*end::Stats*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
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
                        <div className="ms-6">
                          {/*begin::Name*/}
                          <a
                            href="#"
                            className="d-flex align-items-center fs-5 fw-bold text-gray-900 text-hover-primary"
                          >
                            Neil Owen
                            <span className="badge badge-light fs-8 fw-semibold ms-2">
                              Account Manager
                            </span>
                          </a>
                          {/*end::Name*/}
                          {/*begin::Email*/}
                          <div className="fw-semibold text-muted">
                            owen.neil@gmail.com
                          </div>
                          {/*end::Email*/}
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Stats*/}
                      <div className="d-flex">
                        {/*begin::Sales*/}
                        <div className="text-end">
                          <div className="fs-5 fw-bold text-gray-900">
                            $45,800
                          </div>
                          <div className="fs-7 text-muted">Sales</div>
                        </div>
                        {/*end::Sales*/}
                      </div>
                      {/*end::Stats*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
                      {/*begin::Details*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Avatar*/}
                        <div className="symbol symbol-35px symbol-circle">
                          <img
                            alt="Pic"
                            src="../assets/media/avatars/300-23.jpg"
                          />
                        </div>
                        {/*end::Avatar*/}
                        {/*begin::Details*/}
                        <div className="ms-6">
                          {/*begin::Name*/}
                          <a
                            href="#"
                            className="d-flex align-items-center fs-5 fw-bold text-gray-900 text-hover-primary"
                          >
                            Dan Wilson
                            <span className="badge badge-light fs-8 fw-semibold ms-2">
                              Web Desinger
                            </span>
                          </a>
                          {/*end::Name*/}
                          {/*begin::Email*/}
                          <div className="fw-semibold text-muted">
                            dam@consilting.com
                          </div>
                          {/*end::Email*/}
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Stats*/}
                      <div className="d-flex">
                        {/*begin::Sales*/}
                        <div className="text-end">
                          <div className="fs-5 fw-bold text-gray-900">
                            $90,500
                          </div>
                          <div className="fs-7 text-muted">Sales</div>
                        </div>
                        {/*end::Sales*/}
                      </div>
                      {/*end::Stats*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
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
                        <div className="ms-6">
                          {/*begin::Name*/}
                          <a
                            href="#"
                            className="d-flex align-items-center fs-5 fw-bold text-gray-900 text-hover-primary"
                          >
                            Emma Bold
                            <span className="badge badge-light fs-8 fw-semibold ms-2">
                              Corporate Finance
                            </span>
                          </a>
                          {/*end::Name*/}
                          {/*begin::Email*/}
                          <div className="fw-semibold text-muted">
                            emma@intenso.com
                          </div>
                          {/*end::Email*/}
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Stats*/}
                      <div className="d-flex">
                        {/*begin::Sales*/}
                        <div className="text-end">
                          <div className="fs-5 fw-bold text-gray-900">
                            $5,000
                          </div>
                          <div className="fs-7 text-muted">Sales</div>
                        </div>
                        {/*end::Sales*/}
                      </div>
                      {/*end::Stats*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
                      {/*begin::Details*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Avatar*/}
                        <div className="symbol symbol-35px symbol-circle">
                          <img
                            alt="Pic"
                            src="../assets/media/avatars/300-12.jpg"
                          />
                        </div>
                        {/*end::Avatar*/}
                        {/*begin::Details*/}
                        <div className="ms-6">
                          {/*begin::Name*/}
                          <a
                            href="#"
                            className="d-flex align-items-center fs-5 fw-bold text-gray-900 text-hover-primary"
                          >
                            Ana Crown
                            <span className="badge badge-light fs-8 fw-semibold ms-2">
                              Customer Relationship
                            </span>
                          </a>
                          {/*end::Name*/}
                          {/*begin::Email*/}
                          <div className="fw-semibold text-muted">
                            ana.cf@limtel.com
                          </div>
                          {/*end::Email*/}
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Stats*/}
                      <div className="d-flex">
                        {/*begin::Sales*/}
                        <div className="text-end">
                          <div className="fs-5 fw-bold text-gray-900">
                            $70,000
                          </div>
                          <div className="fs-7 text-muted">Sales</div>
                        </div>
                        {/*end::Sales*/}
                      </div>
                      {/*end::Stats*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-5">
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
                        <div className="ms-6">
                          {/*begin::Name*/}
                          <a
                            href="#"
                            className="d-flex align-items-center fs-5 fw-bold text-gray-900 text-hover-primary"
                          >
                            Robert Doe
                            <span className="badge badge-light fs-8 fw-semibold ms-2">
                              Marketing Executive
                            </span>
                          </a>
                          {/*end::Name*/}
                          {/*begin::Email*/}
                          <div className="fw-semibold text-muted">
                            robert@benko.com
                          </div>
                          {/*end::Email*/}
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Stats*/}
                      <div className="d-flex">
                        {/*begin::Sales*/}
                        <div className="text-end">
                          <div className="fs-5 fw-bold text-gray-900">
                            $45,500
                          </div>
                          <div className="fs-7 text-muted">Sales</div>
                        </div>
                        {/*end::Sales*/}
                      </div>
                      {/*end::Stats*/}
                    </div>
                    {/*end::User*/}
                  </div>
                  {/*end::List*/}
                </div>
                {/*end::Users*/}
                {/*begin::Notice*/}
                <div className="d-flex justify-content-between">
                  {/*begin::Label*/}
                  <div className="fw-semibold">
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
                      defaultValue=""
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
        {/*end::Modal - View Users*/}
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
                            <img
                              alt="Pic"
                              src="../assets/media/avatars/300-6.jpg"
                            />
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold">
                            <span className="fs-6 text-gray-800 me-2">
                              Emma Smith
                            </span>
                            <span className="badge badge-light">
                              Art Director
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
                            <img
                              alt="Pic"
                              src="../assets/media/avatars/300-1.jpg"
                            />
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold">
                            <span className="fs-6 text-gray-800 me-2">
                              Max Smith
                            </span>
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
                            <img
                              alt="Pic"
                              src="../assets/media/avatars/300-5.jpg"
                            />
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold">
                            <span className="fs-6 text-gray-800 me-2">
                              Sean Bean
                            </span>
                            <span className="badge badge-light">
                              Web Developer
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
                            <img
                              alt="Pic"
                              src="../assets/media/avatars/300-25.jpg"
                            />
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold">
                            <span className="fs-6 text-gray-800 me-2">
                              Brian Cox
                            </span>
                            <span className="badge badge-light">
                              UI/UX Designer
                            </span>
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
                              <img
                                alt="Pic"
                                src="../assets/media/avatars/300-6.jpg"
                              />
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
                              <img
                                alt="Pic"
                                src="../assets/media/avatars/300-1.jpg"
                              />
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
                              <div className="fw-semibold text-muted">
                                max@kt.com
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
                              <img
                                alt="Pic"
                                src="../assets/media/avatars/300-5.jpg"
                              />
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
                              <img
                                alt="Pic"
                                src="../assets/media/avatars/300-25.jpg"
                              />
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
                              <img
                                alt="Pic"
                                src="../assets/media/avatars/300-9.jpg"
                              />
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
                              <img
                                alt="Pic"
                                src="../assets/media/avatars/300-23.jpg"
                              />
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
                              <img
                                alt="Pic"
                                src="../assets/media/avatars/300-12.jpg"
                              />
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
                              <img
                                alt="Pic"
                                src="../assets/media/avatars/300-13.jpg"
                              />
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
                              <img
                                alt="Pic"
                                src="../assets/media/avatars/300-21.jpg"
                              />
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
                              <img
                                alt="Pic"
                                src="../assets/media/avatars/300-9.jpg"
                              />
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
                        <div className="text-gray-600 fs-3 mb-2">
                          No users found
                        </div>
                        <div className="text-muted fs-6">
                          Try to search by username, full name or email...
                        </div>
                      </div>
                      {/*end::Message*/}
                      {/*begin::Illustration*/}
                      <div className="text-center px-5">
                        <img
                          src="../assets/media/illustrations/sketchy-1/1.png"
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
      </>

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
                  src="../assets/media/svg/brand-logos/google-icon.svg"
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
                        <img
                          alt="Pic"
                          src="../assets/media/avatars/300-6.jpg"
                        />
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
                        <img
                          alt="Pic"
                          src="../assets/media/avatars/300-1.jpg"
                        />
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
                        <img
                          alt="Pic"
                          src="../assets/media/avatars/300-5.jpg"
                        />
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
                        <img
                          alt="Pic"
                          src="../assets/media/avatars/300-25.jpg"
                        />
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
                        <img
                          alt="Pic"
                          src="../assets/media/avatars/300-9.jpg"
                        />
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
                        <img
                          alt="Pic"
                          src="../assets/media/avatars/300-23.jpg"
                        />
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
                        <img
                          alt="Pic"
                          src="../assets/media/avatars/300-12.jpg"
                        />
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
                        <img
                          alt="Pic"
                          src="../assets/media/avatars/300-13.jpg"
                        />
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
                        <img
                          alt="Pic"
                          src="../assets/media/avatars/300-21.jpg"
                        />
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
                        <img
                          alt="Pic"
                          src="../assets/media/avatars/300-6.jpg"
                        />
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
    </>
  );
};

export default Builder;
