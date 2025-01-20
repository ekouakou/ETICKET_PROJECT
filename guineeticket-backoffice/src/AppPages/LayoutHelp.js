import React from 'react';

const LayoutHelp = () => {
  return (
    <>
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
                  </i>{" "}
                </button>
              </div>
            </div>
            <div className="card-body" id="kt_help_body edmond">
            </div>
          </div>
        </div>
    </>
    
  );
};

export default LayoutHelp;
