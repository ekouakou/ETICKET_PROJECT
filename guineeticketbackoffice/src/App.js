import logo from './logo.svg';
import './App.css';
import LoadScripts from "./LoadScripts";
import SideBar from "./SideBar";
import Header from "./Header";
import ChatDrawer from "./ChatDrawer";
import ThemeBuilder from "./ThemeBuilder";



function App() {
  return (
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
                <div className="row g-5 g-xl-10 mb-5 mb-xl-10">
                  {/*begin::Col*/}
                  <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10">
                    {/*begin::Card widget 20*/}
                    <div
                      className="card card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end h-md-50 mb-5 mb-xl-10"
                      style={{
                        backgroundColor: "#3e97ff",
                        backgroundImage:
                          'url("assets/media/svg/shapes/widget-bg-1.png")'
                      }}
                    >
                      {/*begin::Header*/}
                      <div className="card-header pt-5">
                        {/*begin::Title*/}
                        <div className="card-title d-flex flex-column">
                          {/*begin::Amount*/}
                          <span className="fs-2hx fw-bold text-white me-2 lh-1 ls-n2">
                            69
                          </span>
                          {/*end::Amount*/}
                          {/*begin::Subtitle*/}
                          <span className="text-white opacity-75 pt-1 fw-semibold fs-6">
                            Active Projects in April
                          </span>
                          {/*end::Subtitle*/}
                        </div>
                        {/*end::Title*/}
                      </div>
                      {/*end::Header*/}
                      {/*begin::Card body*/}
                      <div className="card-body d-flex align-items-end pt-0">
                        {/*begin::Progress*/}
                        <div className="d-flex align-items-center flex-column mt-3 w-100">
                          <div className="d-flex justify-content-between fw-bold fs-6 text-white opacity-75 w-100 mt-auto mb-2">
                            <span>43 Pending</span>
                            <span>72%</span>
                          </div>
                          <div className="h-8px mx-3 w-100 bg-white bg-opacity-50 rounded">
                            <div
                              className="bg-white rounded h-8px"
                              role="progressbar"
                              style={{ width: "72%" }}
                              aria-valuenow={50}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                        {/*end::Progress*/}
                      </div>
                      {/*end::Card body*/}
                    </div>
                    {/*end::Card widget 20*/}
                    {/*begin::List widget 26*/}
                    <div className="card card-flush h-md-50 mb-xl-10">
                      {/*begin::Header*/}
                      <div className="card-header pt-5">
                        {/*begin::Title*/}
                        <h3 className="card-title text-gray-800 fw-bold">
                          External Links
                        </h3>
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
                            <i className="ki-duotone ki-dots-square fs-1 text-gray-500 me-n1">
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
                      {/*end::Header*/}
                      {/*begin::Body*/}
                      <div className="card-body pt-5">
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack">
                          {/*begin::Section*/}
                          <a
                            href="#"
                            className="text-primary fw-semibold fs-6 me-2"
                          >
                            Avg. Client Rating
                          </a>
                          {/*end::Section*/}
                          {/*begin::Action*/}
                          <button
                            type="button"
                            className="btn btn-icon btn-sm h-auto btn-color-gray-500 btn-active-color-primary justify-content-end"
                          >
                            <i className="ki-duotone ki-exit-right-corner fs-2">
                              <span className="path1" />
                              <span className="path2" />
                            </i>
                          </button>
                          {/*end::Action*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Separator*/}
                        <div className="separator separator-dashed my-3" />
                        {/*end::Separator*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack">
                          {/*begin::Section*/}
                          <a
                            href="#"
                            className="text-primary fw-semibold fs-6 me-2"
                          >
                            Instagram Followers
                          </a>
                          {/*end::Section*/}
                          {/*begin::Action*/}
                          <button
                            type="button"
                            className="btn btn-icon btn-sm h-auto btn-color-gray-500 btn-active-color-primary justify-content-end"
                          >
                            <i className="ki-duotone ki-exit-right-corner fs-2">
                              <span className="path1" />
                              <span className="path2" />
                            </i>
                          </button>
                          {/*end::Action*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Separator*/}
                        <div className="separator separator-dashed my-3" />
                        {/*end::Separator*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack">
                          {/*begin::Section*/}
                          <a
                            href="#"
                            className="text-primary fw-semibold fs-6 me-2"
                          >
                            Google Ads CPC
                          </a>
                          {/*end::Section*/}
                          {/*begin::Action*/}
                          <button
                            type="button"
                            className="btn btn-icon btn-sm h-auto btn-color-gray-500 btn-active-color-primary justify-content-end"
                          >
                            <i className="ki-duotone ki-exit-right-corner fs-2">
                              <span className="path1" />
                              <span className="path2" />
                            </i>
                          </button>
                          {/*end::Action*/}
                        </div>
                        {/*end::Item*/}
                      </div>
                      {/*end::Body*/}
                    </div>
                    {/*end::LIst widget 26*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10">
                    {/*begin::Card widget 17*/}
                    <div className="card card-flush h-md-50 mb-5 mb-xl-10">
                      {/*begin::Header*/}
                      <div className="card-header pt-5">
                        {/*begin::Title*/}
                        <div className="card-title d-flex flex-column">
                          {/*begin::Info*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Currency*/}
                            <span className="fs-4 fw-semibold text-gray-500 me-1 align-self-start">
                              $
                            </span>
                            {/*end::Currency*/}
                            {/*begin::Amount*/}
                            <span className="fs-2hx fw-bold text-gray-900 me-2 lh-1 ls-n2">
                              69,700
                            </span>
                            {/*end::Amount*/}
                            {/*begin::Badge*/}
                            <span className="badge badge-light-success fs-base">
                              <i className="ki-duotone ki-arrow-up fs-5 text-success ms-n1">
                                <span className="path1" />
                                <span className="path2" />
                              </i>
                              2.2%
                            </span>
                            {/*end::Badge*/}
                          </div>
                          {/*end::Info*/}
                          {/*begin::Subtitle*/}
                          <span className="text-gray-500 pt-1 fw-semibold fs-6">
                            Projects Earnings in April
                          </span>
                          {/*end::Subtitle*/}
                        </div>
                        {/*end::Title*/}
                      </div>
                      {/*end::Header*/}
                      {/*begin::Card body*/}
                      <div className="card-body pt-2 pb-4 d-flex flex-wrap align-items-center">
                        {/*begin::Chart*/}
                        <div className="d-flex flex-center me-5 pt-2">
                          <div
                            id="kt_card_widget_17_chart"
                            style={{ minWidth: 70, minHeight: 70 }}
                            data-kt-size={70}
                            data-kt-line={11}
                          />
                        </div>
                        {/*end::Chart*/}
                        {/*begin::Labels*/}
                        <div className="d-flex flex-column content-justify-center flex-row-fluid">
                          {/*begin::Label*/}
                          <div className="d-flex fw-semibold align-items-center">
                            {/*begin::Bullet*/}
                            <div className="bullet w-8px h-3px rounded-2 bg-success me-3" />
                            {/*end::Bullet*/}
                            {/*begin::Label*/}
                            <div className="text-gray-500 flex-grow-1 me-4">
                              Leaf CRM
                            </div>
                            {/*end::Label*/}
                            {/*begin::Stats*/}
                            <div className="fw-bolder text-gray-700 text-xxl-end">
                              $7,660
                            </div>
                            {/*end::Stats*/}
                          </div>
                          {/*end::Label*/}
                          {/*begin::Label*/}
                          <div className="d-flex fw-semibold align-items-center my-3">
                            {/*begin::Bullet*/}
                            <div className="bullet w-8px h-3px rounded-2 bg-primary me-3" />
                            {/*end::Bullet*/}
                            {/*begin::Label*/}
                            <div className="text-gray-500 flex-grow-1 me-4">
                              Mivy App
                            </div>
                            {/*end::Label*/}
                            {/*begin::Stats*/}
                            <div className="fw-bolder text-gray-700 text-xxl-end">
                              $2,820
                            </div>
                            {/*end::Stats*/}
                          </div>
                          {/*end::Label*/}
                          {/*begin::Label*/}
                          <div className="d-flex fw-semibold align-items-center">
                            {/*begin::Bullet*/}
                            <div
                              className="bullet w-8px h-3px rounded-2 me-3"
                              style={{ backgroundColor: "#e4e6ef" }}
                            />
                            {/*end::Bullet*/}
                            {/*begin::Label*/}
                            <div className="text-gray-500 flex-grow-1 me-4">
                              Others
                            </div>
                            {/*end::Label*/}
                            {/*begin::Stats*/}
                            <div className="fw-bolder text-gray-700 text-xxl-end">
                              $45,257
                            </div>
                            {/*end::Stats*/}
                          </div>
                          {/*end::Label*/}
                        </div>
                        {/*end::Labels*/}
                      </div>
                      {/*end::Card body*/}
                    </div>
                    {/*end::Card widget 17*/}
                    {/*begin::List widget 25*/}
                    <div className="card card-flush h-lg-50">
                      {/*begin::Header*/}
                      <div className="card-header pt-5">
                        {/*begin::Title*/}
                        <h3 className="card-title text-gray-800">Highlights</h3>
                        {/*end::Title*/}
                        {/*begin::Toolbar*/}
                        <div className="card-toolbar d-none">
                          {/*begin::Daterangepicker(defined in src/js/layout/app.js)*/}
                          <div
                            data-kt-daterangepicker="true"
                            data-kt-daterangepicker-opens="left"
                            className="btn btn-sm btn-light d-flex align-items-center px-4"
                          >
                            {/*begin::Display range*/}
                            <div className="text-gray-600 fw-bold">
                              Loading date range...
                            </div>
                            {/*end::Display range*/}
                            <i className="ki-duotone ki-calendar-8 fs-1 ms-2 me-0">
                              <span className="path1" />
                              <span className="path2" />
                              <span className="path3" />
                              <span className="path4" />
                              <span className="path5" />
                              <span className="path6" />
                            </i>
                          </div>
                          {/*end::Daterangepicker*/}
                        </div>
                        {/*end::Toolbar*/}
                      </div>
                      {/*end::Header*/}
                      {/*begin::Body*/}
                      <div className="card-body pt-5">
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack">
                          {/*begin::Section*/}
                          <div className="text-gray-700 fw-semibold fs-6 me-2">
                            Avg. Client Rating
                          </div>
                          {/*end::Section*/}
                          {/*begin::Statistics*/}
                          <div className="d-flex align-items-senter">
                            <i className="ki-duotone ki-arrow-up-right fs-2 text-success me-2">
                              <span className="path1" />
                              <span className="path2" />
                            </i>
                            {/*begin::Number*/}
                            <span className="text-gray-900 fw-bolder fs-6">
                              7.8
                            </span>
                            {/*end::Number*/}
                            <span className="text-gray-500 fw-bold fs-6">
                              /10
                            </span>
                          </div>
                          {/*end::Statistics*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Separator*/}
                        <div className="separator separator-dashed my-3" />
                        {/*end::Separator*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack">
                          {/*begin::Section*/}
                          <div className="text-gray-700 fw-semibold fs-6 me-2">
                            Avg. Quotes
                          </div>
                          {/*end::Section*/}
                          {/*begin::Statistics*/}
                          <div className="d-flex align-items-senter">
                            <i className="ki-duotone ki-arrow-down-right fs-2 text-danger me-2">
                              <span className="path1" />
                              <span className="path2" />
                            </i>
                            {/*begin::Number*/}
                            <span className="text-gray-900 fw-bolder fs-6">
                              730
                            </span>
                            {/*end::Number*/}
                          </div>
                          {/*end::Statistics*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Separator*/}
                        <div className="separator separator-dashed my-3" />
                        {/*end::Separator*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack">
                          {/*begin::Section*/}
                          <div className="text-gray-700 fw-semibold fs-6 me-2">
                            Avg. Agent Earnings
                          </div>
                          {/*end::Section*/}
                          {/*begin::Statistics*/}
                          <div className="d-flex align-items-senter">
                            <i className="ki-duotone ki-arrow-up-right fs-2 text-success me-2">
                              <span className="path1" />
                              <span className="path2" />
                            </i>
                            {/*begin::Number*/}
                            <span className="text-gray-900 fw-bolder fs-6">
                              $2,309
                            </span>
                            {/*end::Number*/}
                          </div>
                          {/*end::Statistics*/}
                        </div>
                        {/*end::Item*/}
                      </div>
                      {/*end::Body*/}
                    </div>
                    {/*end::LIst widget 25*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-xxl-6">
                    {/*begin::Tables widget 16*/}
                    <div className="card card-flush h-md-100">
                      {/*begin::Header*/}
                      <div className="card-header pt-5">
                        {/*begin::Title*/}
                        <h3 className="card-title align-items-start flex-column">
                          <span className="card-label fw-bold text-gray-800">
                            Authors Achievements
                          </span>
                          <span className="text-gray-500 mt-1 fw-semibold fs-6">
                            Avg. 69.34% Conv. Rate
                          </span>
                        </h3>
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
                            <i className="ki-duotone ki-dots-square fs-1 text-gray-500 me-n1">
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
                      {/*end::Header*/}
                      {/*begin::Body*/}
                      <div className="card-body pt-6">
                        {/*begin::Nav*/}
                        <ul className="nav nav-pills nav-pills-custom mb-3">
                          {/*begin::Item*/}
                          <li className="nav-item mb-3 me-3 me-lg-6">
                            {/*begin::Link*/}
                            <a
                              className="nav-link btn btn-outline btn-flex btn-color-muted btn-active-color-primary flex-column overflow-hidden w-80px h-85px pt-5 pb-2 active"
                              id="kt_stats_widget_16_tab_link_1"
                              data-bs-toggle="pill"
                              href="#kt_stats_widget_16_tab_1"
                            >
                              {/*begin::Icon*/}
                              <div className="nav-icon mb-3">
                                <i className="ki-duotone ki-car fs-1">
                                  <span className="path1" />
                                  <span className="path2" />
                                  <span className="path3" />
                                  <span className="path4" />
                                  <span className="path5" />
                                </i>
                              </div>
                              {/*end::Icon*/}
                              {/*begin::Title*/}
                              <span className="nav-text text-gray-800 fw-bold fs-6 lh-1">
                                SaaS
                              </span>
                              {/*end::Title*/}
                              {/*begin::Bullet*/}
                              <span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary" />
                              {/*end::Bullet*/}
                            </a>
                            {/*end::Link*/}
                          </li>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <li className="nav-item mb-3 me-3 me-lg-6">
                            {/*begin::Link*/}
                            <a
                              className="nav-link btn btn-outline btn-flex btn-color-muted btn-active-color-primary flex-column overflow-hidden w-80px h-85px pt-5 pb-2"
                              id="kt_stats_widget_16_tab_link_2"
                              data-bs-toggle="pill"
                              href="#kt_stats_widget_16_tab_2"
                            >
                              {/*begin::Icon*/}
                              <div className="nav-icon mb-3">
                                <i className="ki-duotone ki-bitcoin fs-1">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>
                              </div>
                              {/*end::Icon*/}
                              {/*begin::Title*/}
                              <span className="nav-text text-gray-800 fw-bold fs-6 lh-1">
                                Crypto
                              </span>
                              {/*end::Title*/}
                              {/*begin::Bullet*/}
                              <span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary" />
                              {/*end::Bullet*/}
                            </a>
                            {/*end::Link*/}
                          </li>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <li className="nav-item mb-3 me-3 me-lg-6">
                            {/*begin::Link*/}
                            <a
                              className="nav-link btn btn-outline btn-flex btn-color-muted btn-active-color-primary flex-column overflow-hidden w-80px h-85px pt-5 pb-2"
                              id="kt_stats_widget_16_tab_link_3"
                              data-bs-toggle="pill"
                              href="#kt_stats_widget_16_tab_3"
                            >
                              {/*begin::Icon*/}
                              <div className="nav-icon mb-3">
                                <i className="ki-duotone ki-like fs-1">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>
                              </div>
                              {/*end::Icon*/}
                              {/*begin::Title*/}
                              <span className="nav-text text-gray-800 fw-bold fs-6 lh-1">
                                Social
                              </span>
                              {/*end::Title*/}
                              {/*begin::Bullet*/}
                              <span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary" />
                              {/*end::Bullet*/}
                            </a>
                            {/*end::Link*/}
                          </li>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <li className="nav-item mb-3 me-3 me-lg-6">
                            {/*begin::Link*/}
                            <a
                              className="nav-link btn btn-outline btn-flex btn-color-muted btn-active-color-primary flex-column overflow-hidden w-80px h-85px pt-5 pb-2"
                              id="kt_stats_widget_16_tab_link_4"
                              data-bs-toggle="pill"
                              href="#kt_stats_widget_16_tab_4"
                            >
                              {/*begin::Icon*/}
                              <div className="nav-icon mb-3">
                                <i className="ki-duotone ki-tablet fs-1">
                                  <span className="path1" />
                                  <span className="path2" />
                                  <span className="path3" />
                                </i>
                              </div>
                              {/*end::Icon*/}
                              {/*begin::Title*/}
                              <span className="nav-text text-gray-800 fw-bold fs-6 lh-1">
                                Mobile
                              </span>
                              {/*end::Title*/}
                              {/*begin::Bullet*/}
                              <span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary" />
                              {/*end::Bullet*/}
                            </a>
                            {/*end::Link*/}
                          </li>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <li className="nav-item mb-3 me-3 me-lg-6">
                            {/*begin::Link*/}
                            <a
                              className="nav-link btn btn-outline btn-flex btn-color-muted btn-active-color-primary flex-column overflow-hidden w-80px h-85px pt-5 pb-2"
                              id="kt_stats_widget_16_tab_link_5"
                              data-bs-toggle="pill"
                              href="#kt_stats_widget_16_tab_5"
                            >
                              {/*begin::Icon*/}
                              <div className="nav-icon mb-3">
                                <i className="ki-duotone ki-send fs-1">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>
                              </div>
                              {/*end::Icon*/}
                              {/*begin::Title*/}
                              <span className="nav-text text-gray-800 fw-bold fs-6 lh-1">
                                Others
                              </span>
                              {/*end::Title*/}
                              {/*begin::Bullet*/}
                              <span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary" />
                              {/*end::Bullet*/}
                            </a>
                            {/*end::Link*/}
                          </li>
                          {/*end::Item*/}
                        </ul>
                        {/*end::Nav*/}
                        {/*begin::Tab Content*/}
                        <div className="tab-content">
                          {/*begin::Tap pane*/}
                          <div
                            className="tab-pane fade show active"
                            id="kt_stats_widget_16_tab_1"
                          >
                            {/*begin::Table container*/}
                            <div className="table-responsive">
                              {/*begin::Table*/}
                              <table className="table table-row-dashed align-middle gs-0 gy-3 my-0">
                                {/*begin::Table head*/}
                                <thead>
                                  <tr className="fs-7 fw-bold text-gray-500 border-bottom-0">
                                    <th className="p-0 pb-3 min-w-150px text-start">
                                      AUTHOR
                                    </th>
                                    <th className="p-0 pb-3 min-w-100px text-end pe-13">
                                      CONV.
                                    </th>
                                    <th className="p-0 pb-3 w-125px text-end pe-7">
                                      CHART
                                    </th>
                                    <th className="p-0 pb-3 w-50px text-end">
                                      VIEW
                                    </th>
                                  </tr>
                                </thead>
                                {/*end::Table head*/}
                                {/*begin::Table body*/}
                                <tbody>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img
                                            src="assets/media/avatars/300-3.jpg"
                                            className=""
                                            alt=""
                                          />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a
                                            href="pages/user-profile/overview.html"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6"
                                          >
                                            Guy Hawkins
                                          </a>
                                          <span className="text-gray-500 fw-semibold d-block fs-7">
                                            Haiti
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">
                                        78.34%
                                      </span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div
                                        id="kt_table_widget_16_chart_1_1"
                                        className="h-50px mt-n8 pe-7"
                                        data-kt-chart-color="success"
                                      />
                                    </td>
                                    <td className="text-end">
                                      <a
                                        href="#"
                                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"
                                      >
                                        <i className="ki-duotone ki-black-right fs-2 text-gray-500" />
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img
                                            src="assets/media/avatars/300-2.jpg"
                                            className=""
                                            alt=""
                                          />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a
                                            href="pages/user-profile/overview.html"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6"
                                          >
                                            Jane Cooper
                                          </a>
                                          <span className="text-gray-500 fw-semibold d-block fs-7">
                                            Monaco
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">
                                        63.83%
                                      </span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div
                                        id="kt_table_widget_16_chart_1_2"
                                        className="h-50px mt-n8 pe-7"
                                        data-kt-chart-color="danger"
                                      />
                                    </td>
                                    <td className="text-end">
                                      <a
                                        href="#"
                                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"
                                      >
                                        <i className="ki-duotone ki-black-right fs-2 text-gray-500" />
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img
                                            src="assets/media/avatars/300-9.jpg"
                                            className=""
                                            alt=""
                                          />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a
                                            href="pages/user-profile/overview.html"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6"
                                          >
                                            Jacob Jones
                                          </a>
                                          <span className="text-gray-500 fw-semibold d-block fs-7">
                                            Poland
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">
                                        92.56%
                                      </span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div
                                        id="kt_table_widget_16_chart_1_3"
                                        className="h-50px mt-n8 pe-7"
                                        data-kt-chart-color="success"
                                      />
                                    </td>
                                    <td className="text-end">
                                      <a
                                        href="#"
                                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"
                                      >
                                        <i className="ki-duotone ki-black-right fs-2 text-gray-500" />
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img
                                            src="assets/media/avatars/300-7.jpg"
                                            className=""
                                            alt=""
                                          />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a
                                            href="pages/user-profile/overview.html"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6"
                                          >
                                            Cody Fishers
                                          </a>
                                          <span className="text-gray-500 fw-semibold d-block fs-7">
                                            Mexico
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">
                                        63.08%
                                      </span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div
                                        id="kt_table_widget_16_chart_1_4"
                                        className="h-50px mt-n8 pe-7"
                                        data-kt-chart-color="success"
                                      />
                                    </td>
                                    <td className="text-end">
                                      <a
                                        href="#"
                                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"
                                      >
                                        <i className="ki-duotone ki-black-right fs-2 text-gray-500" />
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                                {/*end::Table body*/}
                              </table>
                              {/*end::Table*/}
                            </div>
                            {/*end::Table container*/}
                          </div>
                          {/*end::Tap pane*/}
                          {/*begin::Tap pane*/}
                          <div
                            className="tab-pane fade"
                            id="kt_stats_widget_16_tab_2"
                          >
                            {/*begin::Table container*/}
                            <div className="table-responsive">
                              {/*begin::Table*/}
                              <table className="table table-row-dashed align-middle gs-0 gy-3 my-0">
                                {/*begin::Table head*/}
                                <thead>
                                  <tr className="fs-7 fw-bold text-gray-500 border-bottom-0">
                                    <th className="p-0 pb-3 min-w-150px text-start">
                                      AUTHOR
                                    </th>
                                    <th className="p-0 pb-3 min-w-100px text-end pe-13">
                                      CONV.
                                    </th>
                                    <th className="p-0 pb-3 w-125px text-end pe-7">
                                      CHART
                                    </th>
                                    <th className="p-0 pb-3 w-50px text-end">
                                      VIEW
                                    </th>
                                  </tr>
                                </thead>
                                {/*end::Table head*/}
                                {/*begin::Table body*/}
                                <tbody>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img
                                            src="assets/media/avatars/300-25.jpg"
                                            className=""
                                            alt=""
                                          />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a
                                            href="pages/user-profile/overview.html"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6"
                                          >
                                            Brooklyn Simmons
                                          </a>
                                          <span className="text-gray-500 fw-semibold d-block fs-7">
                                            Poland
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">
                                        85.23%
                                      </span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div
                                        id="kt_table_widget_16_chart_2_1"
                                        className="h-50px mt-n8 pe-7"
                                        data-kt-chart-color="success"
                                      />
                                    </td>
                                    <td className="text-end">
                                      <a
                                        href="#"
                                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"
                                      >
                                        <i className="ki-duotone ki-black-right fs-2 text-gray-500" />
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img
                                            src="assets/media/avatars/300-24.jpg"
                                            className=""
                                            alt=""
                                          />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a
                                            href="pages/user-profile/overview.html"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6"
                                          >
                                            Esther Howard
                                          </a>
                                          <span className="text-gray-500 fw-semibold d-block fs-7">
                                            Mexico
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">
                                        74.83%
                                      </span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div
                                        id="kt_table_widget_16_chart_2_2"
                                        className="h-50px mt-n8 pe-7"
                                        data-kt-chart-color="danger"
                                      />
                                    </td>
                                    <td className="text-end">
                                      <a
                                        href="#"
                                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"
                                      >
                                        <i className="ki-duotone ki-black-right fs-2 text-gray-500" />
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img
                                            src="assets/media/avatars/300-20.jpg"
                                            className=""
                                            alt=""
                                          />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a
                                            href="pages/user-profile/overview.html"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6"
                                          >
                                            Annette Black
                                          </a>
                                          <span className="text-gray-500 fw-semibold d-block fs-7">
                                            Haiti
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">
                                        90.06%
                                      </span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div
                                        id="kt_table_widget_16_chart_2_3"
                                        className="h-50px mt-n8 pe-7"
                                        data-kt-chart-color="success"
                                      />
                                    </td>
                                    <td className="text-end">
                                      <a
                                        href="#"
                                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"
                                      >
                                        <i className="ki-duotone ki-black-right fs-2 text-gray-500" />
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img
                                            src="assets/media/avatars/300-17.jpg"
                                            className=""
                                            alt=""
                                          />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a
                                            href="pages/user-profile/overview.html"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6"
                                          >
                                            Marvin McKinney
                                          </a>
                                          <span className="text-gray-500 fw-semibold d-block fs-7">
                                            Monaco
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">
                                        54.08%
                                      </span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div
                                        id="kt_table_widget_16_chart_2_4"
                                        className="h-50px mt-n8 pe-7"
                                        data-kt-chart-color="success"
                                      />
                                    </td>
                                    <td className="text-end">
                                      <a
                                        href="#"
                                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"
                                      >
                                        <i className="ki-duotone ki-black-right fs-2 text-gray-500" />
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                                {/*end::Table body*/}
                              </table>
                              {/*end::Table*/}
                            </div>
                            {/*end::Table container*/}
                          </div>
                          {/*end::Tap pane*/}
                          {/*begin::Tap pane*/}
                          <div
                            className="tab-pane fade"
                            id="kt_stats_widget_16_tab_3"
                          >
                            {/*begin::Table container*/}
                            <div className="table-responsive">
                              {/*begin::Table*/}
                              <table className="table table-row-dashed align-middle gs-0 gy-3 my-0">
                                {/*begin::Table head*/}
                                <thead>
                                  <tr className="fs-7 fw-bold text-gray-500 border-bottom-0">
                                    <th className="p-0 pb-3 min-w-150px text-start">
                                      AUTHOR
                                    </th>
                                    <th className="p-0 pb-3 min-w-100px text-end pe-13">
                                      CONV.
                                    </th>
                                    <th className="p-0 pb-3 w-125px text-end pe-7">
                                      CHART
                                    </th>
                                    <th className="p-0 pb-3 w-50px text-end">
                                      VIEW
                                    </th>
                                  </tr>
                                </thead>
                                {/*end::Table head*/}
                                {/*begin::Table body*/}
                                <tbody>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img
                                            src="assets/media/avatars/300-11.jpg"
                                            className=""
                                            alt=""
                                          />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a
                                            href="pages/user-profile/overview.html"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6"
                                          >
                                            Jacob Jones
                                          </a>
                                          <span className="text-gray-500 fw-semibold d-block fs-7">
                                            New York
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">
                                        52.34%
                                      </span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div
                                        id="kt_table_widget_16_chart_3_1"
                                        className="h-50px mt-n8 pe-7"
                                        data-kt-chart-color="success"
                                      />
                                    </td>
                                    <td className="text-end">
                                      <a
                                        href="#"
                                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"
                                      >
                                        <i className="ki-duotone ki-black-right fs-2 text-gray-500" />
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img
                                            src="assets/media/avatars/300-23.jpg"
                                            className=""
                                            alt=""
                                          />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a
                                            href="pages/user-profile/overview.html"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6"
                                          >
                                            Ronald Richards
                                          </a>
                                          <span className="text-gray-500 fw-semibold d-block fs-7">
                                            Madrid
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">
                                        77.65%
                                      </span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div
                                        id="kt_table_widget_16_chart_3_2"
                                        className="h-50px mt-n8 pe-7"
                                        data-kt-chart-color="danger"
                                      />
                                    </td>
                                    <td className="text-end">
                                      <a
                                        href="#"
                                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"
                                      >
                                        <i className="ki-duotone ki-black-right fs-2 text-gray-500" />
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img
                                            src="assets/media/avatars/300-4.jpg"
                                            className=""
                                            alt=""
                                          />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a
                                            href="pages/user-profile/overview.html"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6"
                                          >
                                            Leslie Alexander
                                          </a>
                                          <span className="text-gray-500 fw-semibold d-block fs-7">
                                            Pune
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">
                                        82.47%
                                      </span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div
                                        id="kt_table_widget_16_chart_3_3"
                                        className="h-50px mt-n8 pe-7"
                                        data-kt-chart-color="success"
                                      />
                                    </td>
                                    <td className="text-end">
                                      <a
                                        href="#"
                                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"
                                      >
                                        <i className="ki-duotone ki-black-right fs-2 text-gray-500" />
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img
                                            src="assets/media/avatars/300-1.jpg"
                                            className=""
                                            alt=""
                                          />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a
                                            href="pages/user-profile/overview.html"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6"
                                          >
                                            Courtney Henry
                                          </a>
                                          <span className="text-gray-500 fw-semibold d-block fs-7">
                                            Mexico
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">
                                        67.84%
                                      </span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div
                                        id="kt_table_widget_16_chart_3_4"
                                        className="h-50px mt-n8 pe-7"
                                        data-kt-chart-color="success"
                                      />
                                    </td>
                                    <td className="text-end">
                                      <a
                                        href="#"
                                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"
                                      >
                                        <i className="ki-duotone ki-black-right fs-2 text-gray-500" />
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                                {/*end::Table body*/}
                              </table>
                              {/*end::Table*/}
                            </div>
                            {/*end::Table container*/}
                          </div>
                          {/*end::Tap pane*/}
                          {/*begin::Tap pane*/}
                          <div
                            className="tab-pane fade"
                            id="kt_stats_widget_16_tab_4"
                          >
                            {/*begin::Table container*/}
                            <div className="table-responsive">
                              {/*begin::Table*/}
                              <table className="table table-row-dashed align-middle gs-0 gy-3 my-0">
                                {/*begin::Table head*/}
                                <thead>
                                  <tr className="fs-7 fw-bold text-gray-500 border-bottom-0">
                                    <th className="p-0 pb-3 min-w-150px text-start">
                                      AUTHOR
                                    </th>
                                    <th className="p-0 pb-3 min-w-100px text-end pe-13">
                                      CONV.
                                    </th>
                                    <th className="p-0 pb-3 w-125px text-end pe-7">
                                      CHART
                                    </th>
                                    <th className="p-0 pb-3 w-50px text-end">
                                      VIEW
                                    </th>
                                  </tr>
                                </thead>
                                {/*end::Table head*/}
                                {/*begin::Table body*/}
                                <tbody>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img
                                            src="assets/media/avatars/300-12.jpg"
                                            className=""
                                            alt=""
                                          />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a
                                            href="pages/user-profile/overview.html"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6"
                                          >
                                            Arlene McCoy
                                          </a>
                                          <span className="text-gray-500 fw-semibold d-block fs-7">
                                            London
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">
                                        53.44%
                                      </span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div
                                        id="kt_table_widget_16_chart_4_1"
                                        className="h-50px mt-n8 pe-7"
                                        data-kt-chart-color="success"
                                      />
                                    </td>
                                    <td className="text-end">
                                      <a
                                        href="#"
                                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"
                                      >
                                        <i className="ki-duotone ki-black-right fs-2 text-gray-500" />
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img
                                            src="assets/media/avatars/300-21.jpg"
                                            className=""
                                            alt=""
                                          />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a
                                            href="pages/user-profile/overview.html"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6"
                                          >
                                            Marvin McKinneyr
                                          </a>
                                          <span className="text-gray-500 fw-semibold d-block fs-7">
                                            Monaco
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">
                                        74.64%
                                      </span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div
                                        id="kt_table_widget_16_chart_4_2"
                                        className="h-50px mt-n8 pe-7"
                                        data-kt-chart-color="danger"
                                      />
                                    </td>
                                    <td className="text-end">
                                      <a
                                        href="#"
                                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"
                                      >
                                        <i className="ki-duotone ki-black-right fs-2 text-gray-500" />
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img
                                            src="assets/media/avatars/300-30.jpg"
                                            className=""
                                            alt=""
                                          />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a
                                            href="pages/user-profile/overview.html"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6"
                                          >
                                            Jacob Jones
                                          </a>
                                          <span className="text-gray-500 fw-semibold d-block fs-7">
                                            PManila
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">
                                        88.56%
                                      </span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div
                                        id="kt_table_widget_16_chart_4_3"
                                        className="h-50px mt-n8 pe-7"
                                        data-kt-chart-color="success"
                                      />
                                    </td>
                                    <td className="text-end">
                                      <a
                                        href="#"
                                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"
                                      >
                                        <i className="ki-duotone ki-black-right fs-2 text-gray-500" />
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img
                                            src="assets/media/avatars/300-14.jpg"
                                            className=""
                                            alt=""
                                          />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a
                                            href="pages/user-profile/overview.html"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6"
                                          >
                                            Esther Howard
                                          </a>
                                          <span className="text-gray-500 fw-semibold d-block fs-7">
                                            Iceland
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">
                                        63.16%
                                      </span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div
                                        id="kt_table_widget_16_chart_4_4"
                                        className="h-50px mt-n8 pe-7"
                                        data-kt-chart-color="success"
                                      />
                                    </td>
                                    <td className="text-end">
                                      <a
                                        href="#"
                                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"
                                      >
                                        <i className="ki-duotone ki-black-right fs-2 text-gray-500" />
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                                {/*end::Table body*/}
                              </table>
                              {/*end::Table*/}
                            </div>
                            {/*end::Table container*/}
                          </div>
                          {/*end::Tap pane*/}
                          {/*begin::Tap pane*/}
                          <div
                            className="tab-pane fade"
                            id="kt_stats_widget_16_tab_5"
                          >
                            {/*begin::Table container*/}
                            <div className="table-responsive">
                              {/*begin::Table*/}
                              <table className="table table-row-dashed align-middle gs-0 gy-3 my-0">
                                {/*begin::Table head*/}
                                <thead>
                                  <tr className="fs-7 fw-bold text-gray-500 border-bottom-0">
                                    <th className="p-0 pb-3 min-w-150px text-start">
                                      AUTHOR
                                    </th>
                                    <th className="p-0 pb-3 min-w-100px text-end pe-13">
                                      CONV.
                                    </th>
                                    <th className="p-0 pb-3 w-125px text-end pe-7">
                                      CHART
                                    </th>
                                    <th className="p-0 pb-3 w-50px text-end">
                                      VIEW
                                    </th>
                                  </tr>
                                </thead>
                                {/*end::Table head*/}
                                {/*begin::Table body*/}
                                <tbody>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img
                                            src="assets/media/avatars/300-6.jpg"
                                            className=""
                                            alt=""
                                          />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a
                                            href="pages/user-profile/overview.html"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6"
                                          >
                                            Jane Cooper
                                          </a>
                                          <span className="text-gray-500 fw-semibold d-block fs-7">
                                            Haiti
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">
                                        68.54%
                                      </span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div
                                        id="kt_table_widget_16_chart_5_1"
                                        className="h-50px mt-n8 pe-7"
                                        data-kt-chart-color="success"
                                      />
                                    </td>
                                    <td className="text-end">
                                      <a
                                        href="#"
                                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"
                                      >
                                        <i className="ki-duotone ki-black-right fs-2 text-gray-500" />
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img
                                            src="assets/media/avatars/300-10.jpg"
                                            className=""
                                            alt=""
                                          />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a
                                            href="pages/user-profile/overview.html"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6"
                                          >
                                            Esther Howard
                                          </a>
                                          <span className="text-gray-500 fw-semibold d-block fs-7">
                                            Kiribati
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">
                                        55.83%
                                      </span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div
                                        id="kt_table_widget_16_chart_5_2"
                                        className="h-50px mt-n8 pe-7"
                                        data-kt-chart-color="danger"
                                      />
                                    </td>
                                    <td className="text-end">
                                      <a
                                        href="#"
                                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"
                                      >
                                        <i className="ki-duotone ki-black-right fs-2 text-gray-500" />
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img
                                            src="assets/media/avatars/300-9.jpg"
                                            className=""
                                            alt=""
                                          />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a
                                            href="pages/user-profile/overview.html"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6"
                                          >
                                            Jacob Jones
                                          </a>
                                          <span className="text-gray-500 fw-semibold d-block fs-7">
                                            Poland
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">
                                        93.46%
                                      </span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div
                                        id="kt_table_widget_16_chart_5_3"
                                        className="h-50px mt-n8 pe-7"
                                        data-kt-chart-color="success"
                                      />
                                    </td>
                                    <td className="text-end">
                                      <a
                                        href="#"
                                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"
                                      >
                                        <i className="ki-duotone ki-black-right fs-2 text-gray-500" />
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img
                                            src="assets/media/avatars/300-3.jpg"
                                            className=""
                                            alt=""
                                          />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a
                                            href="pages/user-profile/overview.html"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6"
                                          >
                                            Ralph Edwards
                                          </a>
                                          <span className="text-gray-500 fw-semibold d-block fs-7">
                                            Mexico
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">
                                        64.48%
                                      </span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div
                                        id="kt_table_widget_16_chart_5_4"
                                        className="h-50px mt-n8 pe-7"
                                        data-kt-chart-color="success"
                                      />
                                    </td>
                                    <td className="text-end">
                                      <a
                                        href="#"
                                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"
                                      >
                                        <i className="ki-duotone ki-black-right fs-2 text-gray-500" />
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                                {/*end::Table body*/}
                              </table>
                              {/*end::Table*/}
                            </div>
                            {/*end::Table container*/}
                          </div>
                          {/*end::Tap pane*/}
                          {/*end::Table container*/}
                        </div>
                        {/*end::Tab Content*/}
                      </div>
                      {/*end: Card Body*/}
                    </div>
                    {/*end::Tables widget 16*/}
                  </div>
                  {/*end::Col*/}
                </div>
                {/*end::Row*/}
                {/*begin::Row*/}
                <div className="row gx-5 gx-xl-10">
                  {/*begin::Col*/}
                  <div className="col-xxl-6 mb-5 mb-xl-10">
                    {/*begin::Chart widget 8*/}
                    <div className="card card-flush h-xl-100">
                      {/*begin::Header*/}
                      <div className="card-header pt-5">
                        {/*begin::Title*/}
                        <h3 className="card-title align-items-start flex-column">
                          <span className="card-label fw-bold text-gray-900">
                            Performance Overview
                          </span>
                          <span className="text-gray-500 mt-1 fw-semibold fs-6">
                            Users from all channels
                          </span>
                        </h3>
                        {/*end::Title*/}
                        {/*begin::Toolbar*/}
                        <div className="card-toolbar">
                          <ul className="nav" id="kt_chart_widget_8_tabs">
                            <li className="nav-item">
                              <a
                                className="nav-link btn btn-sm btn-color-muted btn-active btn-active-light fw-bold px-4 me-1"
                                data-bs-toggle="tab"
                                id="kt_chart_widget_8_week_toggle"
                                href="#kt_chart_widget_8_week_tab"
                              >
                                Month
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link btn btn-sm btn-color-muted btn-active btn-active-light fw-bold px-4 me-1 active"
                                data-bs-toggle="tab"
                                id="kt_chart_widget_8_month_toggle"
                                href="#kt_chart_widget_8_month_tab"
                              >
                                Week
                              </a>
                            </li>
                          </ul>
                        </div>
                        {/*end::Toolbar*/}
                      </div>
                      {/*end::Header*/}
                      {/*begin::Body*/}
                      <div className="card-body pt-6">
                        {/*begin::Tab content*/}
                        <div className="tab-content">
                          {/*begin::Tab pane*/}
                          <div
                            className="tab-pane fade"
                            id="kt_chart_widget_8_week_tab"
                            role="tabpanel"
                          >
                            {/*begin::Statistics*/}
                            <div className="mb-5">
                              {/*begin::Statistics*/}
                              <div className="d-flex align-items-center mb-2">
                                <span className="fs-1 fw-semibold text-gray-500 me-1 mt-n1">
                                  $
                                </span>
                                <span className="fs-3x fw-bold text-gray-800 me-2 lh-1 ls-n2">
                                  18,89
                                </span>
                                <span className="badge badge-light-success fs-base">
                                  <i className="ki-duotone ki-arrow-up fs-5 text-success ms-n1">
                                    <span className="path1" />
                                    <span className="path2" />
                                  </i>
                                  4,8%
                                </span>
                              </div>
                              {/*end::Statistics*/}
                              {/*begin::Description*/}
                              <span className="fs-6 fw-semibold text-gray-500">
                                Avarage cost per interaction
                              </span>
                              {/*end::Description*/}
                            </div>
                            {/*end::Statistics*/}
                            {/*begin::Chart*/}
                            <div
                              id="kt_chart_widget_8_week_chart"
                              className="ms-n5 min-h-auto"
                              style={{ height: 275 }}
                            />
                            {/*end::Chart*/}
                            {/*begin::Items*/}
                            <div className="d-flex flex-wrap pt-5">
                              {/*begin::Item*/}
                              <div className="d-flex flex-column me-7 me-lg-16 pt-sm-3 pt-6">
                                {/*begin::Item*/}
                                <div className="d-flex align-items-center mb-3 mb-sm-6">
                                  {/*begin::Bullet*/}
                                  <span className="bullet bullet-dot bg-primary me-2 h-10px w-10px" />
                                  {/*end::Bullet*/}
                                  {/*begin::Label*/}
                                  <span className="fw-bold text-gray-600 fs-6">
                                    Social Campaigns
                                  </span>
                                  {/*end::Label*/}
                                </div>
                                {/*ed::Item*/}
                                {/*begin::Item*/}
                                <div className="d-flex align-items-center">
                                  {/*begin::Bullet*/}
                                  <span className="bullet bullet-dot bg-danger me-2 h-10px w-10px" />
                                  {/*end::Bullet*/}
                                  {/*begin::Label*/}
                                  <span className="fw-bold text-<gray-600 fs-6">
                                    Google Ads
                                  </span>
                                  {/*end::Label*/}
                                </div>
                                {/*ed::Item*/}
                              </div>
                              {/*ed::Item*/}
                              {/*begin::Item*/}
                              <div className="d-flex flex-column me-7 me-lg-16 pt-sm-3 pt-6">
                                {/*begin::Item*/}
                                <div className="d-flex align-items-center mb-3 mb-sm-6">
                                  {/*begin::Bullet*/}
                                  <span className="bullet bullet-dot bg-success me-2 h-10px w-10px" />
                                  {/*end::Bullet*/}
                                  {/*begin::Label*/}
                                  <span className="fw-bold text-gray-600 fs-6">
                                    Email Newsletter
                                  </span>
                                  {/*end::Label*/}
                                </div>
                                {/*ed::Item*/}
                                {/*begin::Item*/}
                                <div className="d-flex align-items-center">
                                  {/*begin::Bullet*/}
                                  <span className="bullet bullet-dot bg-warning me-2 h-10px w-10px" />
                                  {/*end::Bullet*/}
                                  {/*begin::Label*/}
                                  <span className="fw-bold text-gray-600 fs-6">
                                    Courses
                                  </span>
                                  {/*end::Label*/}
                                </div>
                                {/*ed::Item*/}
                              </div>
                              {/*ed::Item*/}
                              {/*begin::Item*/}
                              <div className="d-flex flex-column pt-sm-3 pt-6">
                                {/*begin::Item*/}
                                <div className="d-flex align-items-center mb-3 mb-sm-6">
                                  {/*begin::Bullet*/}
                                  <span className="bullet bullet-dot bg-info me-2 h-10px w-10px" />
                                  {/*end::Bullet*/}
                                  {/*begin::Label*/}
                                  <span className="fw-bold text-gray-600 fs-6">
                                    TV Campaign
                                  </span>
                                  {/*end::Label*/}
                                </div>
                                {/*ed::Item*/}
                                {/*begin::Item*/}
                                <div className="d-flex align-items-center">
                                  {/*begin::Bullet*/}
                                  <span className="bullet bullet-dot bg-success me-2 h-10px w-10px" />
                                  {/*end::Bullet*/}
                                  {/*begin::Label*/}
                                  <span className="fw-bold text-gray-600 fs-6">
                                    Radio
                                  </span>
                                  {/*end::Label*/}
                                </div>
                                {/*ed::Item*/}
                              </div>
                              {/*ed::Item*/}
                            </div>
                            {/*ed::Items*/}
                          </div>
                          {/*end::Tab pane*/}
                          {/*begin::Tab pane*/}
                          <div
                            className="tab-pane fade active show"
                            id="kt_chart_widget_8_month_tab"
                            role="tabpanel"
                          >
                            {/*begin::Statistics*/}
                            <div className="mb-5">
                              {/*begin::Statistics*/}
                              <div className="d-flex align-items-center mb-2">
                                <span className="fs-1 fw-semibold text-gray-500 me-1 mt-n1">
                                  $
                                </span>
                                <span className="fs-3x fw-bold text-gray-800 me-2 lh-1 ls-n2">
                                  8,55
                                </span>
                                <span className="badge badge-light-success fs-base">
                                  <i className="ki-duotone ki-arrow-up fs-5 text-success ms-n1">
                                    <span className="path1" />
                                    <span className="path2" />
                                  </i>
                                  2.2%
                                </span>
                              </div>
                              {/*end::Statistics*/}
                              {/*begin::Description*/}
                              <span className="fs-6 fw-semibold text-gray-500">
                                Avarage cost per interaction
                              </span>
                              {/*end::Description*/}
                            </div>
                            {/*end::Statistics*/}
                            {/*begin::Chart*/}
                            <div
                              id="kt_chart_widget_8_month_chart"
                              className="ms-n5 min-h-auto"
                              style={{ height: 275 }}
                            />
                            {/*end::Chart*/}
                            {/*begin::Items*/}
                            <div className="d-flex flex-wrap pt-5">
                              {/*begin::Item*/}
                              <div className="d-flex flex-column me-7 me-lg-16 pt-sm-3 pt-6">
                                {/*begin::Item*/}
                                <div className="d-flex align-items-center mb-3 mb-sm-6">
                                  {/*begin::Bullet*/}
                                  <span className="bullet bullet-dot bg-primary me-2 h-10px w-10px" />
                                  {/*end::Bullet*/}
                                  {/*begin::Label*/}
                                  <span className="fw-bold text-gray-600 fs-6">
                                    Social Campaigns
                                  </span>
                                  {/*end::Label*/}
                                </div>
                                {/*ed::Item*/}
                                {/*begin::Item*/}
                                <div className="d-flex align-items-center">
                                  {/*begin::Bullet*/}
                                  <span className="bullet bullet-dot bg-danger me-2 h-10px w-10px" />
                                  {/*end::Bullet*/}
                                  {/*begin::Label*/}
                                  <span className="fw-bold text-gray-600 fs-6">
                                    Google Ads
                                  </span>
                                  {/*end::Label*/}
                                </div>
                                {/*ed::Item*/}
                              </div>
                              {/*ed::Item*/}
                              {/*begin::Item*/}
                              <div className="d-flex flex-column me-7 me-lg-16 pt-sm-3 pt-6">
                                {/*begin::Item*/}
                                <div className="d-flex align-items-center mb-3 mb-sm-6">
                                  {/*begin::Bullet*/}
                                  <span className="bullet bullet-dot bg-success me-2 h-10px w-10px" />
                                  {/*end::Bullet*/}
                                  {/*begin::Label*/}
                                  <span className="fw-bold text-gray-600 fs-6">
                                    Email Newsletter
                                  </span>
                                  {/*end::Label*/}
                                </div>
                                {/*ed::Item*/}
                                {/*begin::Item*/}
                                <div className="d-flex align-items-center">
                                  {/*begin::Bullet*/}
                                  <span className="bullet bullet-dot bg-warning me-2 h-10px w-10px" />
                                  {/*end::Bullet*/}
                                  {/*begin::Label*/}
                                  <span className="fw-bold text-gray-600 fs-6">
                                    Courses
                                  </span>
                                  {/*end::Label*/}
                                </div>
                                {/*ed::Item*/}
                              </div>
                              {/*ed::Item*/}
                              {/*begin::Item*/}
                              <div className="d-flex flex-column pt-sm-3 pt-6">
                                {/*begin::Item*/}
                                <div className="d-flex align-items-center mb-3 mb-sm-6">
                                  {/*begin::Bullet*/}
                                  <span className="bullet bullet-dot bg-info me-2 h-10px w-10px" />
                                  {/*end::Bullet*/}
                                  {/*begin::Label*/}
                                  <span className="fw-bold text-gray-600 fs-6">
                                    TV Campaign
                                  </span>
                                  {/*end::Label*/}
                                </div>
                                {/*ed::Item*/}
                                {/*begin::Item*/}
                                <div className="d-flex align-items-center">
                                  {/*begin::Bullet*/}
                                  <span className="bullet bullet-dot bg-success me-2 h-10px w-10px" />
                                  {/*end::Bullet*/}
                                  {/*begin::Label*/}
                                  <span className="fw-bold text-gray-600 fs-6">
                                    Radio
                                  </span>
                                  {/*end::Label*/}
                                </div>
                                {/*ed::Item*/}
                              </div>
                              {/*ed::Item*/}
                            </div>
                            {/*ed::Items*/}
                          </div>
                          {/*end::Tab pane*/}
                        </div>
                        {/*end::Tab content*/}
                      </div>
                      {/*end::Body*/}
                    </div>
                    {/*end::Chart widget 8*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-xl-6 mb-5 mb-xl-10">
                    {/*begin::Chart widget 36*/}
                    <div className="card card-flush overflow-hidden h-xl-100">
                      {/*begin::Header*/}
                      <div className="card-header pt-5">
                        {/*begin::Title*/}
                        <h3 className="card-title align-items-start flex-column">
                          <span className="card-label fw-bold text-gray-900">
                            Performance
                          </span>
                          <span className="text-gray-500 mt-1 fw-semibold fs-6">
                            1,046 Inbound Calls today
                          </span>
                        </h3>
                        {/*end::Title*/}
                        {/*begin::Toolbar*/}
                        <div className="card-toolbar">
                          {/*begin::Daterangepicker(defined in src/js/layout/app.js)*/}
                          <div
                            data-kt-daterangepicker="true"
                            data-kt-daterangepicker-opens="left"
                            data-kt-daterangepicker-range="today"
                            className="btn btn-sm btn-light d-flex align-items-center px-4"
                          >
                            {/*begin::Display range*/}
                            <div className="text-gray-600 fw-bold">
                              Loading date range...
                            </div>
                            {/*end::Display range*/}
                            <i className="ki-duotone ki-calendar-8 text-gray-500 lh-0 fs-2 ms-2 me-0">
                              <span className="path1" />
                              <span className="path2" />
                              <span className="path3" />
                              <span className="path4" />
                              <span className="path5" />
                              <span className="path6" />
                            </i>
                          </div>
                          {/*end::Daterangepicker*/}
                        </div>
                        {/*end::Toolbar*/}
                      </div>
                      {/*end::Header*/}
                      {/*begin::Card body*/}
                      <div className="card-body d-flex align-items-end p-0">
                        {/*begin::Chart*/}
                        <div
                          id="kt_charts_widget_36"
                          className="min-h-auto w-100 ps-4 pe-6"
                          style={{ height: 300 }}
                        />
                        {/*end::Chart*/}
                      </div>
                      {/*end::Card body*/}
                    </div>
                    {/*end::Chart widget 36*/}
                  </div>
                  {/*end::Col*/}
                </div>
                {/*end::Row*/}
                {/*begin::Row*/}
                <div className="row gx-5 gx-xl-10">
                  {/*begin::Col*/}
                  <div className="col-xxl-4 mb-5 mb-xl-10">
                    {/*begin::List widget 8*/}
                    <div className="card card-flush h-lg-100">
                      {/*begin::Header*/}
                      <div className="card-header pt-7 mb-5">
                        {/*begin::Title*/}
                        <h3 className="card-title align-items-start flex-column">
                          <span className="card-label fw-bold text-gray-800">
                            Visits by Country
                          </span>
                          <span className="text-gray-500 mt-1 fw-semibold fs-6">
                            20 countries share 97% visits
                          </span>
                        </h3>
                        {/*end::Title*/}
                        {/*begin::Toolbar*/}
                        <div className="card-toolbar">
                          <a
                            href="apps/ecommerce/sales/listing.html"
                            className="btn btn-sm btn-light"
                          >
                            View All
                          </a>
                        </div>
                        {/*end::Toolbar*/}
                      </div>
                      {/*end::Header*/}
                      {/*begin::Body*/}
                      <div className="card-body pt-0">
                        {/*begin::Items*/}
                        <div className="m-0">
                          {/*begin::Item*/}
                          <div className="d-flex flex-stack">
                            {/*begin::Flag*/}
                            <img
                              src="assets/media/flags/united-states.svg"
                              className="me-4 w-25px"
                              style={{ borderRadius: 4 }}
                              alt=""
                            />
                            {/*end::Flag*/}
                            {/*begin::Section*/}
                            <div className="d-flex flex-stack flex-row-fluid d-grid gap-2">
                              {/*begin::Content*/}
                              <div className="me-5">
                                {/*begin::Title*/}
                                <a
                                  href="#"
                                  className="text-gray-800 fw-bold text-hover-primary fs-6"
                                >
                                  United States
                                </a>
                                {/*end::Title*/}
                                {/*begin::Desc*/}
                                <span className="text-gray-500 fw-semibold fs-7 d-block text-start ps-0">
                                  Direct link clicks
                                </span>
                                {/*end::Desc*/}
                              </div>
                              {/*end::Content*/}
                              {/*begin::Info*/}
                              <div className="d-flex align-items-center">
                                {/*begin::Number*/}
                                <span className="text-gray-800 fw-bold fs-6 me-3 d-block">
                                  9,763
                                </span>
                                {/*end::Number*/}
                                {/*begin::Label*/}
                                <div className="m-0">
                                  {/*begin::Label*/}
                                  <span className="badge badge-light-success fs-base">
                                    <i className="ki-duotone ki-arrow-up fs-5 text-success ms-n1">
                                      <span className="path1" />
                                      <span className="path2" />
                                    </i>
                                    2.6%
                                  </span>
                                  {/*end::Label*/}
                                </div>
                                {/*end::Label*/}
                              </div>
                              {/*end::Info*/}
                            </div>
                            {/*end::Section*/}
                          </div>
                          {/*end::Item*/}
                          {/*begin::Separator*/}
                          <div className="separator separator-dashed my-3" />
                          {/*end::Separator*/}
                          {/*begin::Item*/}
                          <div className="d-flex flex-stack">
                            {/*begin::Flag*/}
                            <img
                              src="assets/media/flags/brazil.svg"
                              className="me-4 w-25px"
                              style={{ borderRadius: 4 }}
                              alt=""
                            />
                            {/*end::Flag*/}
                            {/*begin::Section*/}
                            <div className="d-flex flex-stack flex-row-fluid d-grid gap-2">
                              {/*begin::Content*/}
                              <div className="me-5">
                                {/*begin::Title*/}
                                <a
                                  href="#"
                                  className="text-gray-800 fw-bold text-hover-primary fs-6"
                                >
                                  Brasil
                                </a>
                                {/*end::Title*/}
                                {/*begin::Desc*/}
                                <span className="text-gray-500 fw-semibold fs-7 d-block text-start ps-0">
                                  All Social Channels
                                </span>
                                {/*end::Desc*/}
                              </div>
                              {/*end::Content*/}
                              {/*begin::Info*/}
                              <div className="d-flex align-items-center">
                                {/*begin::Number*/}
                                <span className="text-gray-800 fw-bold fs-6 me-3 d-block">
                                  4,062
                                </span>
                                {/*end::Number*/}
                                {/*begin::Label*/}
                                <div className="m-0">
                                  {/*begin::Label*/}
                                  <span className="badge badge-light-danger fs-base">
                                    <i className="ki-duotone ki-arrow-down fs-5 text-danger ms-n1">
                                      <span className="path1" />
                                      <span className="path2" />
                                    </i>
                                    0.4%
                                  </span>
                                  {/*end::Label*/}
                                </div>
                                {/*end::Label*/}
                              </div>
                              {/*end::Info*/}
                            </div>
                            {/*end::Section*/}
                          </div>
                          {/*end::Item*/}
                          {/*begin::Separator*/}
                          <div className="separator separator-dashed my-3" />
                          {/*end::Separator*/}
                          {/*begin::Item*/}
                          <div className="d-flex flex-stack">
                            {/*begin::Flag*/}
                            <img
                              src="assets/media/flags/turkey.svg"
                              className="me-4 w-25px"
                              style={{ borderRadius: 4 }}
                              alt=""
                            />
                            {/*end::Flag*/}
                            {/*begin::Section*/}
                            <div className="d-flex flex-stack flex-row-fluid d-grid gap-2">
                              {/*begin::Content*/}
                              <div className="me-5">
                                {/*begin::Title*/}
                                <a
                                  href="#"
                                  className="text-gray-800 fw-bold text-hover-primary fs-6"
                                >
                                  Turkey
                                </a>
                                {/*end::Title*/}
                                {/*begin::Desc*/}
                                <span className="text-gray-500 fw-semibold fs-7 d-block text-start ps-0">
                                  Mailchimp Campaigns
                                </span>
                                {/*end::Desc*/}
                              </div>
                              {/*end::Content*/}
                              {/*begin::Info*/}
                              <div className="d-flex align-items-center">
                                {/*begin::Number*/}
                                <span className="text-gray-800 fw-bold fs-6 me-3 d-block">
                                  1,680
                                </span>
                                {/*end::Number*/}
                                {/*begin::Label*/}
                                <div className="m-0">
                                  {/*begin::Label*/}
                                  <span className="badge badge-light-success fs-base">
                                    <i className="ki-duotone ki-arrow-up fs-5 text-success ms-n1">
                                      <span className="path1" />
                                      <span className="path2" />
                                    </i>
                                    0.2%
                                  </span>
                                  {/*end::Label*/}
                                </div>
                                {/*end::Label*/}
                              </div>
                              {/*end::Info*/}
                            </div>
                            {/*end::Section*/}
                          </div>
                          {/*end::Item*/}
                          {/*begin::Separator*/}
                          <div className="separator separator-dashed my-3" />
                          {/*end::Separator*/}
                          {/*begin::Item*/}
                          <div className="d-flex flex-stack">
                            {/*begin::Flag*/}
                            <img
                              src="assets/media/flags/france.svg"
                              className="me-4 w-25px"
                              style={{ borderRadius: 4 }}
                              alt=""
                            />
                            {/*end::Flag*/}
                            {/*begin::Section*/}
                            <div className="d-flex flex-stack flex-row-fluid d-grid gap-2">
                              {/*begin::Content*/}
                              <div className="me-5">
                                {/*begin::Title*/}
                                <a
                                  href="#"
                                  className="text-gray-800 fw-bold text-hover-primary fs-6"
                                >
                                  France
                                </a>
                                {/*end::Title*/}
                                {/*begin::Desc*/}
                                <span className="text-gray-500 fw-semibold fs-7 d-block text-start ps-0">
                                  Impact Radius visits
                                </span>
                                {/*end::Desc*/}
                              </div>
                              {/*end::Content*/}
                              {/*begin::Info*/}
                              <div className="d-flex align-items-center">
                                {/*begin::Number*/}
                                <span className="text-gray-800 fw-bold fs-6 me-3 d-block">
                                  849
                                </span>
                                {/*end::Number*/}
                                {/*begin::Label*/}
                                <div className="m-0">
                                  {/*begin::Label*/}
                                  <span className="badge badge-light-success fs-base">
                                    <i className="ki-duotone ki-arrow-up fs-5 text-success ms-n1">
                                      <span className="path1" />
                                      <span className="path2" />
                                    </i>
                                    4.1%
                                  </span>
                                  {/*end::Label*/}
                                </div>
                                {/*end::Label*/}
                              </div>
                              {/*end::Info*/}
                            </div>
                            {/*end::Section*/}
                          </div>
                          {/*end::Item*/}
                          {/*begin::Separator*/}
                          <div className="separator separator-dashed my-3" />
                          {/*end::Separator*/}
                          {/*begin::Item*/}
                          <div className="d-flex flex-stack">
                            {/*begin::Flag*/}
                            <img
                              src="assets/media/flags/india.svg"
                              className="me-4 w-25px"
                              style={{ borderRadius: 4 }}
                              alt=""
                            />
                            {/*end::Flag*/}
                            {/*begin::Section*/}
                            <div className="d-flex flex-stack flex-row-fluid d-grid gap-2">
                              {/*begin::Content*/}
                              <div className="me-5">
                                {/*begin::Title*/}
                                <a
                                  href="#"
                                  className="text-gray-800 fw-bold text-hover-primary fs-6"
                                >
                                  India
                                </a>
                                {/*end::Title*/}
                                {/*begin::Desc*/}
                                <span className="text-gray-500 fw-semibold fs-7 d-block text-start ps-0">
                                  Many Sources
                                </span>
                                {/*end::Desc*/}
                              </div>
                              {/*end::Content*/}
                              {/*begin::Info*/}
                              <div className="d-flex align-items-center">
                                {/*begin::Number*/}
                                <span className="text-gray-800 fw-bold fs-6 me-3 d-block">
                                  604
                                </span>
                                {/*end::Number*/}
                                {/*begin::Label*/}
                                <div className="m-0">
                                  {/*begin::Label*/}
                                  <span className="badge badge-light-danger fs-base">
                                    <i className="ki-duotone ki-arrow-down fs-5 text-danger ms-n1">
                                      <span className="path1" />
                                      <span className="path2" />
                                    </i>
                                    8.3%
                                  </span>
                                  {/*end::Label*/}
                                </div>
                                {/*end::Label*/}
                              </div>
                              {/*end::Info*/}
                            </div>
                            {/*end::Section*/}
                          </div>
                          {/*end::Item*/}
                          {/*begin::Separator*/}
                          <div className="separator separator-dashed my-3" />
                          {/*end::Separator*/}
                          {/*begin::Item*/}
                          <div className="d-flex flex-stack">
                            {/*begin::Flag*/}
                            <img
                              src="assets/media/flags/sweden.svg"
                              className="me-4 w-25px"
                              style={{ borderRadius: 4 }}
                              alt=""
                            />
                            {/*end::Flag*/}
                            {/*begin::Section*/}
                            <div className="d-flex flex-stack flex-row-fluid d-grid gap-2">
                              {/*begin::Content*/}
                              <div className="me-5">
                                {/*begin::Title*/}
                                <a
                                  href="#"
                                  className="text-gray-800 fw-bold text-hover-primary fs-6"
                                >
                                  Sweden
                                </a>
                                {/*end::Title*/}
                                {/*begin::Desc*/}
                                <span className="text-gray-500 fw-semibold fs-7 d-block text-start ps-0">
                                  Social Network
                                </span>
                                {/*end::Desc*/}
                              </div>
                              {/*end::Content*/}
                              {/*begin::Info*/}
                              <div className="d-flex align-items-center">
                                {/*begin::Number*/}
                                <span className="text-gray-800 fw-bold fs-6 me-3 d-block">
                                  237
                                </span>
                                {/*end::Number*/}
                                {/*begin::Label*/}
                                <div className="m-0">
                                  {/*begin::Label*/}
                                  <span className="badge badge-light-success fs-base">
                                    <i className="ki-duotone ki-arrow-up fs-5 text-success ms-n1">
                                      <span className="path1" />
                                      <span className="path2" />
                                    </i>
                                    1.9%
                                  </span>
                                  {/*end::Label*/}
                                </div>
                                {/*end::Label*/}
                              </div>
                              {/*end::Info*/}
                            </div>
                            {/*end::Section*/}
                          </div>
                          {/*end::Item*/}
                        </div>
                        {/*end::Items*/}
                      </div>
                      {/*end::Body*/}
                    </div>
                    {/*end::LIst widget 8*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-xxl-4 mb-5 mb-xl-10">
                    {/*begin::List widget 9*/}
                    <div className="card card-flush h-xl-100">
                      {/*begin::Header*/}
                      <div className="card-header py-7">
                        {/*begin::Statistics*/}
                        <div className="m-0">
                          {/*begin::Heading*/}
                          <div className="d-flex align-items-center mb-2">
                            {/*begin::Title*/}
                            <span className="fs-2hx fw-bold text-gray-800 me-2 lh-1 ls-n2">
                              5,037
                            </span>
                            {/*end::Title*/}
                            {/*begin::Label*/}
                            <span className="badge badge-light-success fs-base">
                              <i className="ki-duotone ki-arrow-up fs-5 text-success ms-n1">
                                <span className="path1" />
                                <span className="path2" />
                              </i>
                              2.2%
                            </span>
                            {/*end::Label*/}
                          </div>
                          {/*end::Heading*/}
                          {/*begin::Description*/}
                          <span className="fs-6 fw-semibold text-gray-500">
                            Visits by Social Networks
                          </span>
                          {/*end::Description*/}
                        </div>
                        {/*end::Statistics*/}
                        {/*begin::Toolbar*/}
                        <div className="card-toolbar">
                          {/*begin::Menu*/}
                          <button
                            className="btn btn-icon btn-color-gray-500 btn-active-color-primary justify-content-end"
                            data-kt-menu-trigger="click"
                            data-kt-menu-placement="bottom-end"
                            data-kt-menu-overflow="true"
                          >
                            <i className="ki-duotone ki-dots-square fs-1 text-gray-500 me-n1">
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
                      {/*end::Header*/}
                      {/*begin::Body*/}
                      <div className="card-body card-body d-flex justify-content-between flex-column pt-3">
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack">
                          {/*begin::Flag*/}
                          <img
                            src="assets/media/svg/brand-logos/dribbble-icon-1.svg"
                            className="me-4 w-30px"
                            style={{ borderRadius: 4 }}
                            alt=""
                          />
                          {/*end::Flag*/}
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center flex-stack flex-wrap flex-row-fluid d-grid gap-2">
                            {/*begin::Content*/}
                            <div className="me-5">
                              {/*begin::Title*/}
                              <a
                                href="#"
                                className="text-gray-800 fw-bold text-hover-primary fs-6"
                              >
                                Dribbble
                              </a>
                              {/*end::Title*/}
                              {/*begin::Desc*/}
                              <span className="text-gray-500 fw-semibold fs-7 d-block text-start ps-0">
                                Community
                              </span>
                              {/*end::Desc*/}
                            </div>
                            {/*end::Content*/}
                            {/*begin::Wrapper*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Number*/}
                              <span className="text-gray-800 fw-bold fs-4 me-3">
                                579
                              </span>
                              {/*end::Number*/}
                              {/*begin::Info*/}
                              <div className="m-0">
                                {/*begin::Label*/}
                                <span className="badge badge-light-success fs-base">
                                  <i className="ki-duotone ki-arrow-up fs-5 text-success ms-n1">
                                    <span className="path1" />
                                    <span className="path2" />
                                  </i>
                                  2.6%
                                </span>
                                {/*end::Label*/}
                              </div>
                              {/*end::Info*/}
                            </div>
                            {/*end::Wrapper*/}
                          </div>
                          {/*end::Section*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Separator*/}
                        <div className="separator separator-dashed my-3" />
                        {/*end::Separator*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack">
                          {/*begin::Flag*/}
                          <img
                            src="assets/media/svg/brand-logos/linkedin-1.svg"
                            className="me-4 w-30px"
                            style={{ borderRadius: 4 }}
                            alt=""
                          />
                          {/*end::Flag*/}
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center flex-stack flex-wrap flex-row-fluid d-grid gap-2">
                            {/*begin::Content*/}
                            <div className="me-5">
                              {/*begin::Title*/}
                              <a
                                href="#"
                                className="text-gray-800 fw-bold text-hover-primary fs-6"
                              >
                                Linked In
                              </a>
                              {/*end::Title*/}
                              {/*begin::Desc*/}
                              <span className="text-gray-500 fw-semibold fs-7 d-block text-start ps-0">
                                Social Media
                              </span>
                              {/*end::Desc*/}
                            </div>
                            {/*end::Content*/}
                            {/*begin::Wrapper*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Number*/}
                              <span className="text-gray-800 fw-bold fs-4 me-3">
                                1,088
                              </span>
                              {/*end::Number*/}
                              {/*begin::Info*/}
                              <div className="m-0">
                                {/*begin::Label*/}
                                <span className="badge badge-light-danger fs-base">
                                  <i className="ki-duotone ki-arrow-down fs-5 text-danger ms-n1">
                                    <span className="path1" />
                                    <span className="path2" />
                                  </i>
                                  0.4%
                                </span>
                                {/*end::Label*/}
                              </div>
                              {/*end::Info*/}
                            </div>
                            {/*end::Wrapper*/}
                          </div>
                          {/*end::Section*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Separator*/}
                        <div className="separator separator-dashed my-3" />
                        {/*end::Separator*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack">
                          {/*begin::Flag*/}
                          <img
                            src="assets/media/svg/brand-logos/slack-icon.svg"
                            className="me-4 w-30px"
                            style={{ borderRadius: 4 }}
                            alt=""
                          />
                          {/*end::Flag*/}
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center flex-stack flex-wrap flex-row-fluid d-grid gap-2">
                            {/*begin::Content*/}
                            <div className="me-5">
                              {/*begin::Title*/}
                              <a
                                href="#"
                                className="text-gray-800 fw-bold text-hover-primary fs-6"
                              >
                                Slack
                              </a>
                              {/*end::Title*/}
                              {/*begin::Desc*/}
                              <span className="text-gray-500 fw-semibold fs-7 d-block text-start ps-0">
                                Messanger
                              </span>
                              {/*end::Desc*/}
                            </div>
                            {/*end::Content*/}
                            {/*begin::Wrapper*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Number*/}
                              <span className="text-gray-800 fw-bold fs-4 me-3">
                                794
                              </span>
                              {/*end::Number*/}
                              {/*begin::Info*/}
                              <div className="m-0">
                                {/*begin::Label*/}
                                <span className="badge badge-light-success fs-base">
                                  <i className="ki-duotone ki-arrow-up fs-5 text-success ms-n1">
                                    <span className="path1" />
                                    <span className="path2" />
                                  </i>
                                  0.2%
                                </span>
                                {/*end::Label*/}
                              </div>
                              {/*end::Info*/}
                            </div>
                            {/*end::Wrapper*/}
                          </div>
                          {/*end::Section*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Separator*/}
                        <div className="separator separator-dashed my-3" />
                        {/*end::Separator*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack">
                          {/*begin::Flag*/}
                          <img
                            src="assets/media/svg/brand-logos/youtube-3.svg"
                            className="me-4 w-30px"
                            style={{ borderRadius: 4 }}
                            alt=""
                          />
                          {/*end::Flag*/}
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center flex-stack flex-wrap flex-row-fluid d-grid gap-2">
                            {/*begin::Content*/}
                            <div className="me-5">
                              {/*begin::Title*/}
                              <a
                                href="#"
                                className="text-gray-800 fw-bold text-hover-primary fs-6"
                              >
                                YouTube
                              </a>
                              {/*end::Title*/}
                              {/*begin::Desc*/}
                              <span className="text-gray-500 fw-semibold fs-7 d-block text-start ps-0">
                                Video Channel
                              </span>
                              {/*end::Desc*/}
                            </div>
                            {/*end::Content*/}
                            {/*begin::Wrapper*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Number*/}
                              <span className="text-gray-800 fw-bold fs-4 me-3">
                                978
                              </span>
                              {/*end::Number*/}
                              {/*begin::Info*/}
                              <div className="m-0">
                                {/*begin::Label*/}
                                <span className="badge badge-light-success fs-base">
                                  <i className="ki-duotone ki-arrow-up fs-5 text-success ms-n1">
                                    <span className="path1" />
                                    <span className="path2" />
                                  </i>
                                  4.1%
                                </span>
                                {/*end::Label*/}
                              </div>
                              {/*end::Info*/}
                            </div>
                            {/*end::Wrapper*/}
                          </div>
                          {/*end::Section*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Separator*/}
                        <div className="separator separator-dashed my-3" />
                        {/*end::Separator*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack">
                          {/*begin::Flag*/}
                          <img
                            src="assets/media/svg/brand-logos/instagram-2-1.svg"
                            className="me-4 w-30px"
                            style={{ borderRadius: 4 }}
                            alt=""
                          />
                          {/*end::Flag*/}
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center flex-stack flex-wrap flex-row-fluid d-grid gap-2">
                            {/*begin::Content*/}
                            <div className="me-5">
                              {/*begin::Title*/}
                              <a
                                href="#"
                                className="text-gray-800 fw-bold text-hover-primary fs-6"
                              >
                                Instagram
                              </a>
                              {/*end::Title*/}
                              {/*begin::Desc*/}
                              <span className="text-gray-500 fw-semibold fs-7 d-block text-start ps-0">
                                Social Network
                              </span>
                              {/*end::Desc*/}
                            </div>
                            {/*end::Content*/}
                            {/*begin::Wrapper*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Number*/}
                              <span className="text-gray-800 fw-bold fs-4 me-3">
                                1,458
                              </span>
                              {/*end::Number*/}
                              {/*begin::Info*/}
                              <div className="m-0">
                                {/*begin::Label*/}
                                <span className="badge badge-light-success fs-base">
                                  <i className="ki-duotone ki-arrow-up fs-5 text-success ms-n1">
                                    <span className="path1" />
                                    <span className="path2" />
                                  </i>
                                  8.3%
                                </span>
                                {/*end::Label*/}
                              </div>
                              {/*end::Info*/}
                            </div>
                            {/*end::Wrapper*/}
                          </div>
                          {/*end::Section*/}
                        </div>
                        {/*end::Item*/}
                      </div>
                      {/*end::Body*/}
                    </div>
                    {/*end::List widget 9*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-xxl-4 mb-5 mb-xl-10">
                    {/*begin::Engage widget 11*/}
                    <div
                      className="card card-flush h-xl-100"
                      style={{
                        backgroundColor: "#202b46",
                        backgroundImage:
                          'url("assets/media/svg/shapes/widget-bg-2.png")'
                      }}
                      data-bs-theme="light"
                    >
                      {/*begin::Body*/}
                      <div className="card-body d-flex flex-column justify-content-between mt-6 bgi-no-repeat bgi-size-cover bgi-position-x-center">
                        {/*begin::Wrapper*/}
                        <div className="mb-10">
                          {/*begin::Title*/}
                          <div className="fs-1 fw-bold text-white text-center mb-9">
                            <span className="me-2">
                              Analyse Your
                              <br />
                              <span className="position-relative d-inline-block">
                                <a
                                  href="pages/user-profile/overview.html"
                                  className="text-success opacity-75-hover"
                                >
                                  Infrastructure
                                </a>
                                {/*begin::Separator*/}
                                <span className="position-absolute opacity-25 bottom-0 start-0 border-4 border-success border-bottom w-100" />
                                {/*end::Separator*/}
                              </span>
                            </span>
                            with Keen
                          </div>
                          {/*end::Title*/}
                          {/*begin::Action*/}
                          <div className="text-center">
                            <a
                              href="#"
                              className="btn btn-sm btn-color-white bg-body bg-opacity-15 bg-hover-opacity-25 fw-bold fs-7"
                              data-bs-toggle="modal"
                              data-bs-target="#kt_modal_upgrade_plan"
                            >
                              Get Started
                            </a>
                          </div>
                          {/*begin::Action*/}
                        </div>
                        {/*begin::Wrapper*/}
                        {/*begin::Illustration*/}
                        <img
                          className="mx-auto h-150px h-lg-200px mb-11"
                          src="assets/media/svg/illustrations/sigma/illustration-realestate.svg"
                          alt=""
                        />
                        {/*end::Illustration*/}
                      </div>
                      {/*end::Body*/}
                    </div>
                    {/*end::Engage widget 11*/}
                  </div>
                  {/*end::Col*/}
                </div>
                {/*end::Row*/}
                {/*begin::Row*/}
                <div className="row g-5 g-xl-10 mb-5 mb-xl-10">
                  {/*begin::Col*/}
                  <div className="col-xl-4">
                    {/*begin::Chart Widget 35*/}
                    <div className="card card-flush h-md-100">
                      {/*begin::Header*/}
                      <div className="card-header pt-5 mb-6">
                        {/*begin::Title*/}
                        <h3 className="card-title align-items-start flex-column">
                          {/*begin::Statistics*/}
                          <div className="d-flex align-items-center mb-2">
                            {/*begin::Currency*/}
                            <span className="fs-3 fw-semibold text-gray-500 align-self-start me-1">
                              $
                            </span>
                            {/*end::Currency*/}
                            {/*begin::Value*/}
                            <span className="fs-2hx fw-bold text-gray-800 me-2 lh-1 ls-n2">
                              3,274.94
                            </span>
                            {/*end::Value*/}
                            {/*begin::Label*/}
                            <span className="badge badge-light-success fs-base">
                              <i className="ki-duotone ki-arrow-up fs-5 text-success ms-n1">
                                <span className="path1" />
                                <span className="path2" />
                              </i>
                              9.2%
                            </span>
                            {/*end::Label*/}
                          </div>
                          {/*end::Statistics*/}
                          {/*begin::Description*/}
                          <span className="fs-6 fw-semibold text-gray-500">
                            Avg. Agent Earnings
                          </span>
                          {/*end::Description*/}
                        </h3>
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
                            <i className="ki-duotone ki-dots-square fs-1 text-gray-500 me-n1">
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
                      {/*end::Header*/}
                      {/*begin::Body*/}
                      <div className="card-body py-0 px-0">
                        {/*begin::Nav*/}
                        <ul className="nav d-flex justify-content-between mb-3 mx-9">
                          {/*begin::Item*/}
                          <li className="nav-item mb-3">
                            {/*begin::Link*/}
                            <a
                              className="nav-link btn btn-flex flex-center btn-active-danger btn-color-gray-600 btn-active-color-white rounded-2 w-45px h-35px active"
                              data-bs-toggle="tab"
                              id="kt_charts_widget_35_tab_1"
                              href="#kt_charts_widget_35_tab_content_1"
                            >
                              1d
                            </a>
                            {/*end::Link*/}
                          </li>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <li className="nav-item mb-3">
                            {/*begin::Link*/}
                            <a
                              className="nav-link btn btn-flex flex-center btn-active-danger btn-color-gray-600 btn-active-color-white rounded-2 w-45px h-35px"
                              data-bs-toggle="tab"
                              id="kt_charts_widget_35_tab_2"
                              href="#kt_charts_widget_35_tab_content_2"
                            >
                              5d
                            </a>
                            {/*end::Link*/}
                          </li>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <li className="nav-item mb-3">
                            {/*begin::Link*/}
                            <a
                              className="nav-link btn btn-flex flex-center btn-active-danger btn-color-gray-600 btn-active-color-white rounded-2 w-45px h-35px"
                              data-bs-toggle="tab"
                              id="kt_charts_widget_35_tab_3"
                              href="#kt_charts_widget_35_tab_content_3"
                            >
                              1m
                            </a>
                            {/*end::Link*/}
                          </li>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <li className="nav-item mb-3">
                            {/*begin::Link*/}
                            <a
                              className="nav-link btn btn-flex flex-center btn-active-danger btn-color-gray-600 btn-active-color-white rounded-2 w-45px h-35px"
                              data-bs-toggle="tab"
                              id="kt_charts_widget_35_tab_4"
                              href="#kt_charts_widget_35_tab_content_4"
                            >
                              6m
                            </a>
                            {/*end::Link*/}
                          </li>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <li className="nav-item mb-3">
                            {/*begin::Link*/}
                            <a
                              className="nav-link btn btn-flex flex-center btn-active-danger btn-color-gray-600 btn-active-color-white rounded-2 w-45px h-35px"
                              data-bs-toggle="tab"
                              id="kt_charts_widget_35_tab_5"
                              href="#kt_charts_widget_35_tab_content_5"
                            >
                              1y
                            </a>
                            {/*end::Link*/}
                          </li>
                          {/*end::Item*/}
                        </ul>
                        {/*end::Nav*/}
                        {/*begin::Tab Content*/}
                        <div className="tab-content mt-n6">
                          {/*begin::Tap pane*/}
                          <div
                            className="tab-pane fade active show"
                            id="kt_charts_widget_35_tab_content_1"
                          >
                            {/*begin::Chart*/}
                            <div
                              id="kt_charts_widget_35_chart_1"
                              data-kt-chart-color="primary"
                              className="min-h-auto h-200px ps-3 pe-6"
                            />
                            {/*end::Chart*/}
                            {/*begin::Table container*/}
                            <div className="table-responsive mx-9 mt-n6">
                              {/*begin::Table*/}
                              <table className="table align-middle gs-0 gy-4">
                                {/*begin::Table head*/}
                                <thead>
                                  <tr>
                                    <th className="min-w-100px" />
                                    <th className="min-w-100px text-end pe-0" />
                                    <th className="text-end min-w-50px" />
                                  </tr>
                                </thead>
                                {/*end::Table head*/}
                                {/*begin::Table body*/}
                                <tbody>
                                  <tr>
                                    <td>
                                      <a
                                        href="#"
                                        className="text-gray-600 fw-bold fs-6"
                                      >
                                        2:30 PM
                                      </a>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="text-gray-800 fw-bold fs-6 me-1">
                                        $2,756.26
                                      </span>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="fw-bold fs-6 text-danger">
                                        -139.34
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a
                                        href="#"
                                        className="text-gray-600 fw-bold fs-6"
                                      >
                                        3:10 PM
                                      </a>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="text-gray-800 fw-bold fs-6 me-1">
                                        $3,207.03
                                      </span>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="fw-bold fs-6 text-success">
                                        +576.24
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a
                                        href="#"
                                        className="text-gray-600 fw-bold fs-6"
                                      >
                                        3:55 PM
                                      </a>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="text-gray-800 fw-bold fs-6 me-1">
                                        $3,274.94
                                      </span>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="fw-bold fs-6 text-success">
                                        +124.03
                                      </span>
                                    </td>
                                  </tr>
                                </tbody>
                                {/*end::Table body*/}
                              </table>
                              {/*end::Table*/}
                            </div>
                            {/*end::Table container*/}
                          </div>
                          {/*end::Tap pane*/}
                          {/*begin::Tap pane*/}
                          <div
                            className="tab-pane fade"
                            id="kt_charts_widget_35_tab_content_2"
                          >
                            {/*begin::Chart*/}
                            <div
                              id="kt_charts_widget_35_chart_2"
                              data-kt-chart-color="primary"
                              className="min-h-auto h-200px ps-3 pe-6"
                            />
                            {/*end::Chart*/}
                            {/*begin::Table container*/}
                            <div className="table-responsive mx-9 mt-n6">
                              {/*begin::Table*/}
                              <table className="table align-middle gs-0 gy-4">
                                {/*begin::Table head*/}
                                <thead>
                                  <tr>
                                    <th className="min-w-100px" />
                                    <th className="min-w-100px text-end pe-0" />
                                    <th className="text-end min-w-50px" />
                                  </tr>
                                </thead>
                                {/*end::Table head*/}
                                {/*begin::Table body*/}
                                <tbody>
                                  <tr>
                                    <td>
                                      <a
                                        href="#"
                                        className="text-gray-600 fw-bold fs-6"
                                      >
                                        4:30 PM
                                      </a>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="text-gray-800 fw-bold fs-6 me-1">
                                        $2,345.45
                                      </span>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="fw-bold fs-6 text-success">
                                        +134.02
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a
                                        href="#"
                                        className="text-gray-600 fw-bold fs-6"
                                      >
                                        11:35 AM
                                      </a>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="text-gray-800 fw-bold fs-6 me-1">
                                        $756.26
                                      </span>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="fw-bold fs-6 text-primary">
                                        -124.03
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a
                                        href="#"
                                        className="text-gray-600 fw-bold fs-6"
                                      >
                                        3:30 PM
                                      </a>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="text-gray-800 fw-bold fs-6 me-1">
                                        $1,756.26
                                      </span>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="fw-bold fs-6 text-danger">
                                        +144.04
                                      </span>
                                    </td>
                                  </tr>
                                </tbody>
                                {/*end::Table body*/}
                              </table>
                              {/*end::Table*/}
                            </div>
                            {/*end::Table container*/}
                          </div>
                          {/*end::Tap pane*/}
                          {/*begin::Tap pane*/}
                          <div
                            className="tab-pane fade"
                            id="kt_charts_widget_35_tab_content_3"
                          >
                            {/*begin::Chart*/}
                            <div
                              id="kt_charts_widget_35_chart_3"
                              data-kt-chart-color="primary"
                              className="min-h-auto h-200px ps-3 pe-6"
                            />
                            {/*end::Chart*/}
                            {/*begin::Table container*/}
                            <div className="table-responsive mx-9 mt-n6">
                              {/*begin::Table*/}
                              <table className="table align-middle gs-0 gy-4">
                                {/*begin::Table head*/}
                                <thead>
                                  <tr>
                                    <th className="min-w-100px" />
                                    <th className="min-w-100px text-end pe-0" />
                                    <th className="text-end min-w-50px" />
                                  </tr>
                                </thead>
                                {/*end::Table head*/}
                                {/*begin::Table body*/}
                                <tbody>
                                  <tr>
                                    <td>
                                      <a
                                        href="#"
                                        className="text-gray-600 fw-bold fs-6"
                                      >
                                        3:20 AM
                                      </a>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="text-gray-800 fw-bold fs-6 me-1">
                                        $3,756.26
                                      </span>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="fw-bold fs-6 text-primary">
                                        +185.03
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a
                                        href="#"
                                        className="text-gray-600 fw-bold fs-6"
                                      >
                                        12:30 AM
                                      </a>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="text-gray-800 fw-bold fs-6 me-1">
                                        $2,756.26
                                      </span>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="fw-bold fs-6 text-danger">
                                        +124.03
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a
                                        href="#"
                                        className="text-gray-600 fw-bold fs-6"
                                      >
                                        4:30 PM
                                      </a>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="text-gray-800 fw-bold fs-6 me-1">
                                        $756.26
                                      </span>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="fw-bold fs-6 text-success">
                                        -154.03
                                      </span>
                                    </td>
                                  </tr>
                                </tbody>
                                {/*end::Table body*/}
                              </table>
                              {/*end::Table*/}
                            </div>
                            {/*end::Table container*/}
                          </div>
                          {/*end::Tap pane*/}
                          {/*begin::Tap pane*/}
                          <div
                            className="tab-pane fade"
                            id="kt_charts_widget_35_tab_content_4"
                          >
                            {/*begin::Chart*/}
                            <div
                              id="kt_charts_widget_35_chart_4"
                              data-kt-chart-color="primary"
                              className="min-h-auto h-200px ps-3 pe-6"
                            />
                            {/*end::Chart*/}
                            {/*begin::Table container*/}
                            <div className="table-responsive mx-9 mt-n6">
                              {/*begin::Table*/}
                              <table className="table align-middle gs-0 gy-4">
                                {/*begin::Table head*/}
                                <thead>
                                  <tr>
                                    <th className="min-w-100px" />
                                    <th className="min-w-100px text-end pe-0" />
                                    <th className="text-end min-w-50px" />
                                  </tr>
                                </thead>
                                {/*end::Table head*/}
                                {/*begin::Table body*/}
                                <tbody>
                                  <tr>
                                    <td>
                                      <a
                                        href="#"
                                        className="text-gray-600 fw-bold fs-6"
                                      >
                                        2:30 PM
                                      </a>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="text-gray-800 fw-bold fs-6 me-1">
                                        $2,756.26
                                      </span>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="fw-bold fs-6 text-warning">
                                        +124.03
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a
                                        href="#"
                                        className="text-gray-600 fw-bold fs-6"
                                      >
                                        5:30 AM
                                      </a>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="text-gray-800 fw-bold fs-6 me-1">
                                        $1,756.26
                                      </span>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="fw-bold fs-6 text-info">
                                        +144.65
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a
                                        href="#"
                                        className="text-gray-600 fw-bold fs-6"
                                      >
                                        4:30 PM
                                      </a>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="text-gray-800 fw-bold fs-6 me-1">
                                        $2,085.25
                                      </span>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="fw-bold fs-6 text-primary">
                                        +154.06
                                      </span>
                                    </td>
                                  </tr>
                                </tbody>
                                {/*end::Table body*/}
                              </table>
                              {/*end::Table*/}
                            </div>
                            {/*end::Table container*/}
                          </div>
                          {/*end::Tap pane*/}
                          {/*begin::Tap pane*/}
                          <div
                            className="tab-pane fade"
                            id="kt_charts_widget_35_tab_content_5"
                          >
                            {/*begin::Chart*/}
                            <div
                              id="kt_charts_widget_35_chart_5"
                              data-kt-chart-color="primary"
                              className="min-h-auto h-200px ps-3 pe-6"
                            />
                            {/*end::Chart*/}
                            {/*begin::Table container*/}
                            <div className="table-responsive mx-9 mt-n6">
                              {/*begin::Table*/}
                              <table className="table align-middle gs-0 gy-4">
                                {/*begin::Table head*/}
                                <thead>
                                  <tr>
                                    <th className="min-w-100px" />
                                    <th className="min-w-100px text-end pe-0" />
                                    <th className="text-end min-w-50px" />
                                  </tr>
                                </thead>
                                {/*end::Table head*/}
                                {/*begin::Table body*/}
                                <tbody>
                                  <tr>
                                    <td>
                                      <a
                                        href="#"
                                        className="text-gray-600 fw-bold fs-6"
                                      >
                                        2:30 PM
                                      </a>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="text-gray-800 fw-bold fs-6 me-1">
                                        $2,045.04
                                      </span>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="fw-bold fs-6 text-warning">
                                        +114.03
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a
                                        href="#"
                                        className="text-gray-600 fw-bold fs-6"
                                      >
                                        3:30 AM
                                      </a>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="text-gray-800 fw-bold fs-6 me-1">
                                        $756.26
                                      </span>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="fw-bold fs-6 text-primary">
                                        -124.03
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a
                                        href="#"
                                        className="text-gray-600 fw-bold fs-6"
                                      >
                                        10:30 PM
                                      </a>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="text-gray-800 fw-bold fs-6 me-1">
                                        $1.756.26
                                      </span>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="fw-bold fs-6 text-info">
                                        +165.86
                                      </span>
                                    </td>
                                  </tr>
                                </tbody>
                                {/*end::Table body*/}
                              </table>
                              {/*end::Table*/}
                            </div>
                            {/*end::Table container*/}
                          </div>
                          {/*end::Tap pane*/}
                        </div>
                        {/*end::Tab Content*/}
                      </div>
                      {/*end::Body*/}
                    </div>
                    {/*end::Chart Widget 35*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-xl-8">
                    {/*begin::Table widget 14*/}
                    <div className="card card-flush h-md-100">
                      {/*begin::Header*/}
                      <div className="card-header pt-7">
                        {/*begin::Title*/}
                        <h3 className="card-title align-items-start flex-column">
                          <span className="card-label fw-bold text-gray-800">
                            Projects Stats
                          </span>
                          <span className="text-gray-500 mt-1 fw-semibold fs-6">
                            Updated 37 minutes ago
                          </span>
                        </h3>
                        {/*end::Title*/}
                        {/*begin::Toolbar*/}
                        <div className="card-toolbar">
                          <a
                            href="apps/ecommerce/catalog/add-product.html"
                            className="btn btn-sm btn-light"
                          >
                            History
                          </a>
                        </div>
                        {/*end::Toolbar*/}
                      </div>
                      {/*end::Header*/}
                      {/*begin::Body*/}
                      <div className="card-body pt-6">
                        {/*begin::Table container*/}
                        <div className="table-responsive">
                          {/*begin::Table*/}
                          <table className="table table-row-dashed align-middle gs-0 gy-3 my-0">
                            {/*begin::Table head*/}
                            <thead>
                              <tr className="fs-7 fw-bold text-gray-500 border-bottom-0">
                                <th className="p-0 pb-3 min-w-175px text-start">
                                  ITEM
                                </th>
                                <th className="p-0 pb-3 min-w-100px text-end">
                                  BUDGET
                                </th>
                                <th className="p-0 pb-3 min-w-100px text-end">
                                  PROGRESS
                                </th>
                                <th className="p-0 pb-3 min-w-175px text-end pe-12">
                                  STATUS
                                </th>
                                <th className="p-0 pb-3 w-125px text-end pe-7">
                                  CHART
                                </th>
                                <th className="p-0 pb-3 w-50px text-end">
                                  VIEW
                                </th>
                              </tr>
                            </thead>
                            {/*end::Table head*/}
                            {/*begin::Table body*/}
                            <tbody>
                              <tr>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="symbol symbol-50px me-3">
                                      <img
                                        src="assets/media/stock/600x600/img-49.jpg"
                                        className=""
                                        alt=""
                                      />
                                    </div>
                                    <div className="d-flex justify-content-start flex-column">
                                      <a
                                        href="#"
                                        className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6"
                                      >
                                        Mivy App
                                      </a>
                                      <span className="text-gray-500 fw-semibold d-block fs-7">
                                        Jane Cooper
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td className="text-end pe-0">
                                  <span className="text-gray-600 fw-bold fs-6">
                                    $32,400
                                  </span>
                                </td>
                                <td className="text-end pe-0">
                                  {/*begin::Label*/}
                                  <span className="badge badge-light-success fs-base">
                                    <i className="ki-duotone ki-arrow-up fs-5 text-success ms-n1">
                                      <span className="path1" />
                                      <span className="path2" />
                                    </i>
                                    9.2%
                                  </span>
                                  {/*end::Label*/}
                                </td>
                                <td className="text-end pe-12">
                                  <span className="badge py-3 px-4 fs-7 badge-light-primary">
                                    In Process
                                  </span>
                                </td>
                                <td className="text-end pe-0">
                                  <div
                                    id="kt_table_widget_14_chart_1"
                                    className="h-50px mt-n8 pe-7"
                                    data-kt-chart-color="success"
                                  />
                                </td>
                                <td className="text-end">
                                  <a
                                    href="#"
                                    className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"
                                  >
                                    <i className="ki-duotone ki-black-right fs-2 text-gray-500" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="symbol symbol-50px me-3">
                                      <img
                                        src="assets/media/stock/600x600/img-40.jpg"
                                        className=""
                                        alt=""
                                      />
                                    </div>
                                    <div className="d-flex justify-content-start flex-column">
                                      <a
                                        href="#"
                                        className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6"
                                      >
                                        Avionica
                                      </a>
                                      <span className="text-gray-500 fw-semibold d-block fs-7">
                                        Esther Howard
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td className="text-end pe-0">
                                  <span className="text-gray-600 fw-bold fs-6">
                                    $256,910
                                  </span>
                                </td>
                                <td className="text-end pe-0">
                                  {/*begin::Label*/}
                                  <span className="badge badge-light-danger fs-base">
                                    <i className="ki-duotone ki-arrow-down fs-5 text-danger ms-n1">
                                      <span className="path1" />
                                      <span className="path2" />
                                    </i>
                                    0.4%
                                  </span>
                                  {/*end::Label*/}
                                </td>
                                <td className="text-end pe-12">
                                  <span className="badge py-3 px-4 fs-7 badge-light-warning">
                                    On Hold
                                  </span>
                                </td>
                                <td className="text-end pe-0">
                                  <div
                                    id="kt_table_widget_14_chart_2"
                                    className="h-50px mt-n8 pe-7"
                                    data-kt-chart-color="danger"
                                  />
                                </td>
                                <td className="text-end">
                                  <a
                                    href="#"
                                    className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"
                                  >
                                    <i className="ki-duotone ki-black-right fs-2 text-gray-500" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="symbol symbol-50px me-3">
                                      <img
                                        src="assets/media/stock/600x600/img-39.jpg"
                                        className=""
                                        alt=""
                                      />
                                    </div>
                                    <div className="d-flex justify-content-start flex-column">
                                      <a
                                        href="#"
                                        className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6"
                                      >
                                        Charto CRM
                                      </a>
                                      <span className="text-gray-500 fw-semibold d-block fs-7">
                                        Jenny Wilson
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td className="text-end pe-0">
                                  <span className="text-gray-600 fw-bold fs-6">
                                    $8,220
                                  </span>
                                </td>
                                <td className="text-end pe-0">
                                  {/*begin::Label*/}
                                  <span className="badge badge-light-success fs-base">
                                    <i className="ki-duotone ki-arrow-up fs-5 text-success ms-n1">
                                      <span className="path1" />
                                      <span className="path2" />
                                    </i>
                                    9.2%
                                  </span>
                                  {/*end::Label*/}
                                </td>
                                <td className="text-end pe-12">
                                  <span className="badge py-3 px-4 fs-7 badge-light-primary">
                                    In Process
                                  </span>
                                </td>
                                <td className="text-end pe-0">
                                  <div
                                    id="kt_table_widget_14_chart_3"
                                    className="h-50px mt-n8 pe-7"
                                    data-kt-chart-color="success"
                                  />
                                </td>
                                <td className="text-end">
                                  <a
                                    href="#"
                                    className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"
                                  >
                                    <i className="ki-duotone ki-black-right fs-2 text-gray-500" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="symbol symbol-50px me-3">
                                      <img
                                        src="assets/media/stock/600x600/img-47.jpg"
                                        className=""
                                        alt=""
                                      />
                                    </div>
                                    <div className="d-flex justify-content-start flex-column">
                                      <a
                                        href="#"
                                        className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6"
                                      >
                                        Tower Hill
                                      </a>
                                      <span className="text-gray-500 fw-semibold d-block fs-7">
                                        Cody Fisher
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td className="text-end pe-0">
                                  <span className="text-gray-600 fw-bold fs-6">
                                    $74,000
                                  </span>
                                </td>
                                <td className="text-end pe-0">
                                  {/*begin::Label*/}
                                  <span className="badge badge-light-success fs-base">
                                    <i className="ki-duotone ki-arrow-up fs-5 text-success ms-n1">
                                      <span className="path1" />
                                      <span className="path2" />
                                    </i>
                                    9.2%
                                  </span>
                                  {/*end::Label*/}
                                </td>
                                <td className="text-end pe-12">
                                  <span className="badge py-3 px-4 fs-7 badge-light-success">
                                    Complated
                                  </span>
                                </td>
                                <td className="text-end pe-0">
                                  <div
                                    id="kt_table_widget_14_chart_4"
                                    className="h-50px mt-n8 pe-7"
                                    data-kt-chart-color="success"
                                  />
                                </td>
                                <td className="text-end">
                                  <a
                                    href="#"
                                    className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"
                                  >
                                    <i className="ki-duotone ki-black-right fs-2 text-gray-500" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="symbol symbol-50px me-3">
                                      <img
                                        src="assets/media/stock/600x600/img-48.jpg"
                                        className=""
                                        alt=""
                                      />
                                    </div>
                                    <div className="d-flex justify-content-start flex-column">
                                      <a
                                        href="#"
                                        className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6"
                                      >
                                        9 Degree
                                      </a>
                                      <span className="text-gray-500 fw-semibold d-block fs-7">
                                        Savannah Nguyen
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td className="text-end pe-0">
                                  <span className="text-gray-600 fw-bold fs-6">
                                    $183,300
                                  </span>
                                </td>
                                <td className="text-end pe-0">
                                  {/*begin::Label*/}
                                  <span className="badge badge-light-danger fs-base">
                                    <i className="ki-duotone ki-arrow-down fs-5 text-danger ms-n1">
                                      <span className="path1" />
                                      <span className="path2" />
                                    </i>
                                    0.4%
                                  </span>
                                  {/*end::Label*/}
                                </td>
                                <td className="text-end pe-12">
                                  <span className="badge py-3 px-4 fs-7 badge-light-primary">
                                    In Process
                                  </span>
                                </td>
                                <td className="text-end pe-0">
                                  <div
                                    id="kt_table_widget_14_chart_5"
                                    className="h-50px mt-n8 pe-7"
                                    data-kt-chart-color="danger"
                                  />
                                </td>
                                <td className="text-end">
                                  <a
                                    href="#"
                                    className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"
                                  >
                                    <i className="ki-duotone ki-black-right fs-2 text-gray-500" />
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                            {/*end::Table body*/}
                          </table>
                        </div>
                        {/*end::Table*/}
                      </div>
                      {/*end: Card Body*/}
                    </div>
                    {/*end::Table widget 14*/}
                  </div>
                  {/*end::Col*/}
                </div>
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
  <ThemeBuilder />
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
</>

  );
}

export default App;
