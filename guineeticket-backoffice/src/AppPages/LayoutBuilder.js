import React from 'react';
import { useTheme } from '../contexts/ThemeProvider';

const LayoutBuilder = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
    <button
    id="kt_app_layout_builder_toggle"
    className="btn btn-dark app-layout-builder-toggle lh-1 py-4 "
    title="Keen Builder"
    data-bs-custom-class="tooltip-inverse"
    data-bs-toggle="tooltip"
    data-bs-placement="left"
    data-bs-dismiss="click"
    data-bs-trigger="hover"
  >
    <i className="ki-duotone ki-setting-4 fs-4 me-1" /> Customize
  </button>
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
      {/* Card */}
      <div className="card border-0 shadow-none rounded-0 w-100">
        {/* Card Header */}
        <div
          className="card-header bgi-position-y-bottom bgi-position-x-end bgi-size-cover bgi-no-repeat rounded-0 border-0 py-4"
          id="kt_app_layout_builder_header"
          style={{
            backgroundImage:
              'url("assets/media/misc/layout/customizer-header-bg.jpg")',
          }}
        >
          <h3 className="card-title fs-3 fw-bold text-white flex-column m-0">
            Keen Builder
            <small className="text-white opacity-50 fs-7 fw-semibold pt-1">
              Get your product deeply customized
            </small>
          </h3>
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
        </div>

        {/* Card Body */}
        <div className="card-body position-relative" id="kt_app_layout_builder_body">
          <div
            id="kt_app_settings_content"
            className="position-relative scroll-y me-n5 pe-5"
            data-kt-scroll="true"
            data-kt-scroll-height="auto"
            data-kt-scroll-wrappers="#kt_app_layout_builder_body"
            data-kt-scroll-dependencies="#kt_app_layout_builder_header, #kt_app_layout_builder_footer"
            data-kt-scroll-offset="5px"
          >
            {/* Form */}
            <div className="card-body p-0">
              {/* Theme Mode */}
              <div className="form-group">
                <div className="mb-6">
                  <h4 className="fw-bold text-gray-900">Theme Mode</h4>
                  <div className="fw-semibold text-muted fs-7 d-block lh-1">
                    Enjoy Dark &amp; Light modes.
                    <a
                      className="fw-semibold"
                      href="https://preview.keenthemes.com/html/keen/docs/getting-started/dark-mode"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      See docs
                    </a>
                  </div>
                </div>
                <div
                  className="row"
                  data-kt-buttons="true"
                  data-kt-buttons-target=".form-check-image,.form-check-input"
                >
                  <div className="col-6">
                    <label className="form-check-image form-check-success">
                      <div className="form-check-wrapper border-gray-200 border-2">
                        <img
                          src="assets/media/preview/demos/demo3/light-ltr.png"
                          className="form-check-rounded mw-100"
                          alt="Light Theme"
                        />
                      </div>
                      <div className="form-check form-check-custom form-check-solid form-check-sm form-check-success">
                        <input
                          className="form-check-input"
                          type="radio"
                           value="light"
                          name="theme_mode"
                          id="kt_layout_builder_theme_mode_light"
                          checked={theme === 'light'}
                          onChange={toggleTheme}
                        />
                        <div className="form-check-label text-gray-700">
                          Light
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="col-6">
                    <label className="form-check-image form-check-success">
                      <div className="form-check-wrapper border-gray-200 border-2">
                        <img
                          src="assets/media/preview/demos/demo3/dark-ltr.png"
                          className="form-check-rounded mw-100"
                          alt="Dark Theme"
                        />
                      </div>
                      <div className="form-check form-check-custom form-check-solid form-check-sm form-check-success">
                        <input
                          className="form-check-input"
                          type="radio"
                          value="dark"
                          name="theme_mode"
                          id="kt_layout_builder_theme_mode_dark"
                          checked={theme === 'dark'}
                          onChange={toggleTheme}
                        />
                        <div className="form-check-label text-gray-700">
                          Dark
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              <div className="separator separator-dashed my-5" />

              {/* RTL Mode */}
              <div className="form-group d-flex flex-stack">
                <div className="d-flex flex-column">
                  <h4 className="fw-bold text-gray-900">RTL Mode</h4>
                  <div className="fs-7 fw-semibold text-muted">
                    Change Language Direction.
                    <a
                      className="fw-semibold"
                      href="https://preview.keenthemes.com/html/keen/docs/getting-started/rtl"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      See docs
                    </a>
                  </div>
                </div>
                <div className="d-flex justify-content-end">
                  <div className="form-check form-check-custom form-check-solid form-check-success form-switch">
                    <input
                      type="hidden"
                      value="false"
                      name="layout-builder[layout][app][general][rtl]"
                    />
                    <input
                      className="form-check-input w-45px h-30px"
                      type="checkbox"
                      value="true"
                      name="layout-builder[layout][app][general][rtl]"
                    />
                  </div>
                </div>
              </div>

              <div className="separator separator-dashed my-5" />

              {/* Width Mode */}
              <div className="form-group">
                <div className="d-flex flex-column mb-4">
                  <h4 className="fw-bold text-gray-900">Width Mode</h4>
                  <div className="fs-7 fw-semibold text-muted">
                    Page width options
                  </div>
                </div>
                <div className="d-flex gap-7">
                  <div className="form-check form-check-custom form-check-success form-check-solid form-check-sm">
                    <input
                      className="form-check-input"
                      type="radio"
                      defaultChecked
                      value="default"
                      id="kt_layout_builder_page_width_default"
                      name="layout-builder[layout][app][general][page-width]"
                    />
                    <label
                      className="form-check-label text-gray-700 fw-bold text-nowrap"
                      htmlFor="kt_layout_builder_page_width_default"
                    >
                      Default
                    </label>
                  </div>
                  <div className="form-check form-check-custom form-check-success form-check-solid form-check-sm">
                    <input
                      className="form-check-input"
                      type="radio"
                      value="fluid"
                      id="kt_layout_builder_page_width_fluid"
                      name="layout-builder[layout][app][general][page-width]"
                    />
                    <label
                      className="form-check-label text-gray-700 fw-bold text-nowrap"
                      htmlFor="kt_layout_builder_page_width_fluid"
                    >
                      Fluid
                    </label>
                  </div>
                  <div className="form-check form-check-custom form-check-success form-check-solid form-check-sm">
                    <input
                      className="form-check-input"
                      type="radio"
                      value="fixed"
                      id="kt_layout_builder_page_width_fixed"
                      name="layout-builder[layout][app][general][page-width]"
                    />
                    <label
                      className="form-check-label text-gray-700 fw-bold text-nowrap"
                      htmlFor="kt_layout_builder_page_width_fixed"
                    >
                      Fixed
                    </label>
                  </div>
                </div>
              </div>

              <div className="separator separator-dashed my-5" />

              {/* KeenIcons Style */}
              <div className="form-group">
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
                      rel="noopener noreferrer"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
                <div
                  className="d-flex flex-stack gap-3"
                  data-kt-buttons="true"
                  data-kt-buttons-target=".form-check-image,.form-check-input"
                >
                  <label className="form-check-image form-check-success w-100 parent-active parent-hover active">
                    <div className="form-check-wrapper d-flex flex-center border-gray-200 border-2 py-3 px-4">
                      <div className="form-check form-check-custom form-check-solid form-check-success form-check-sm">
                        <input
                          className="form-check-input"
                          type="radio"
                          defaultChecked
                          value="duotone"
                          id="kt_layout_builder_icon_duotone"
                          name="layout-builder[layout][app][general][icons]"
                        />
                        <div className="form-check-label text-gray-900 fw-bold">
                          Duotone
                        </div>
                      </div>
                    </div>
                  </label>
                  <label className="form-check-image form-check-success w-100 parent-active parent-hover">
                    <div className="form-check-wrapper d-flex flex-center border-gray-200 border-2 py-3 px-4">
                      <div className="form-check form-check-custom form-check-solid form-check-success form-check-sm">
                        <input
                          className="form-check-input"
                          type="radio"
                          value="outline"
                          id="kt_layout_builder_icon_outline"
                          name="layout-builder[layout][app][general][icons]"
                        />
                        <div className="form-check-label text-gray-900 fw-bold">
                          Outline
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              <div className="separator separator-dashed my-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default LayoutBuilder;
