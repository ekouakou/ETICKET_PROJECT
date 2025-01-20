import React from 'react';

const RightSettingButton = () => {
  return (
    <>
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
      <span id="kt_engage_demos_label">Demos</span>
    </button>
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
    
  </div>
    </>
    
  );
};

export default RightSettingButton;
