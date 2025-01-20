import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

const HeaderWrapper = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => setShowDropdown(true);
  const handleMouseLeave = () => setShowDropdown(false);
  const handleToggle = (isOpen) => setShowDropdown(isOpen);
  return (
    <>
      {/*begin::Header wrapper*/}
      <div
        className="d-flex align-items-stretch justify-content-between flex-lg-grow-1"
        id="kt_app_header_wrapper"

      >
        {/*begin::Menu wrapper*/}
        <div
          className="app-header-menu app-header-mobile-drawer align-items-stretch"
          data-kt-drawer="true"
          data-kt-drawer-name="app-header-menu"
          data-kt-drawer-activate="{default: true, lg: false}"
          data-kt-drawer-overlay="true"
          data-kt-drawer-width="250px"
          data-kt-drawer-direction="end"
          data-kt-drawer-toggle="#kt_app_header_menu_toggle"
          data-kt-swapper="true"
          data-kt-swapper-mode="{default: 'append', lg: 'prepend'}"
          data-kt-swapper-parent="{default: '#kt_app_body', lg: '#kt_app_header_wrapper'}"
        ></div>

        <div className="app-navbar flex-shrink-0" onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          {/* User Menu */}
          <div className="app-navbar-item ms-1 ms-md-4"

          >
            <Dropdown show={showDropdown}
              onToggle={handleToggle}>
              <Dropdown.Toggle
                as="div"
                className="cursor-pointer symbol symbol-35px"
                id="user-menu-toggle"
              >
                <img
                  src="../assets/media/avatars/300-3.jpg"
                  className="rounded-3"
                  alt="user"
                />
              </Dropdown.Toggle>
              <Dropdown.Menu align="end" className="w-275px">
                {/* User info */}
                <Dropdown.ItemText>
                  <div className="d-flex align-items-center px-3">
                    <div className="symbol symbol-50px me-5">
                      <img alt="User" src="../assets/media/avatars/300-3.jpg" />
                    </div>
                    <div>
                      <div className="fw-bold fs-5">Robert Fox</div>
                      <div className="text-muted fs-7">robert@kt.com</div>
                    </div>
                  </div>
                </Dropdown.ItemText>
                <Dropdown.Divider />
                <Dropdown.Item href="#profile">
                  <div className="menu-item px-5">
                    <a href="../../account/overview.html" className="menu-link px-5">
                      My Profile
                    </a>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#projects">My Projects</Dropdown.Item>
                <Dropdown.Item href="#billing">Billing</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#logout">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderWrapper;
