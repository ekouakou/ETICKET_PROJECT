import React from 'react';

const LayoutModal = () => {
  return (
    <>
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
            </i>{" "}
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
          
          </div>
          {/*end::Stepper*/}
        </div>
        {/*begin::Modal body*/}
      </div>
    </div>
  </div>
    </>
    
  );
};

export default LayoutModal;
