import React from 'react';

const LayoutDemo = () => {
  return (
    <>
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
            </i>{" "}
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
          
            <a
              href="../../../themes.getbootstrap.com/product/keen-the-ultimate-bootstrap-admin-theme/index.html"
              className="btn btn-primary fw-bold mb-15 w-100"
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
      {/*end::Body*/}
    </div>
  </div>
    </>
    
  );
};

export default LayoutDemo;
