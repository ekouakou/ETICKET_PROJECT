import React, { useState, useEffect } from "react";

const ThemeBuilder = () => {
  return (
    <>
      {/*begin::App layout builder*/}
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
                'url("assets/media/misc/layout/customizer-header-bg.jpg")',
            }}
          >
            {/*begin::Card title*/}
            <h3 className="card-title fs-3 fw-bold text-white flex-column m-0">
              Keen Builder
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
                action="https://preview.keenthemes.com/keen/demo1/index.php"
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
                          href="https://preview.keenthemes.com/html/keen/docs/getting-started/dark-mode"
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
                              src="assets/media/preview/demos/demo1/light-ltr.png"
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
                              src="assets/media/preview/demos/demo1/dark-ltr.png"
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
                          href="https://preview.keenthemes.com/html/keen/docs/getting-started/rtl"
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
                          href="https://preview.keenthemes.com/html/keen/docs/icons/keenicons"
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
                        href="layout-builder.html"
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
                              src="assets/media/misc/layout/dark-sidebar.png"
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
                              src="assets/media/misc/layout/light-sidebar.png"
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
                              src="assets/media/misc/layout/dark-header.png"
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
                              src="assets/media/misc/layout/light-header.png"
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
      {/*end::App layout builder*/}
      {/*begin::App settings toggle*/}
      <button
        id="kt_app_layout_builder_toggle"
        className="btn btn-dark app-layout-builder-toggle lh-1 py-4"
        title="Keen Builder"
        data-bs-custom-class="tooltip-inverse"
        data-bs-toggle="tooltip"
        data-bs-placement="left"
        data-bs-dismiss="click"
        data-bs-trigger="hover"
      >
        <i className="ki-duotone ki-setting-4 fs-4 me-1" /> Customize
      </button>
    </>
  );
};

export default ThemeBuilder;
