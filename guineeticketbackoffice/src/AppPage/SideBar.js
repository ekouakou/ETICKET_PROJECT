import React, { useState, useEffect } from "react";
import SidebarMenu from "./SidebarMenu";

const SideBar = () => {
  return (
    <>
      {/*begin::Sidebar*/}
      <div
        id="kt_app_sidebar"
        className="app-sidebar flex-column"
        data-kt-drawer="true"
        data-kt-drawer-name="app-sidebar"
        data-kt-drawer-activate="{default: true, lg: false}"
        data-kt-drawer-overlay="true"
        data-kt-drawer-width="225px"
        data-kt-drawer-direction="start"
        data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle"
      >
        {/*begin::Logo*/}
        <div className="app-sidebar-logo px-6" id="kt_app_sidebar_logo">
          {/*begin::Logo image*/}
          <a href="index.html">
            <img
              alt="Logo"
              src="assets/media/logos/default-dark.svg"
              className="h-30px app-sidebar-logo-default"
            />
          </a>
          {/*end::Logo image*/}
          {/*begin::Sidebar toggle*/}
          <div
            id="kt_app_sidebar_toggle"
            className="app-sidebar-toggle btn btn-icon btn-sm h-30px w-30px rotate"
            data-kt-toggle="true"
            data-kt-toggle-state="active"
            data-kt-toggle-target="body"
            data-kt-toggle-name="app-sidebar-minimize"
          >
            <i className="ki-duotone ki-double-left fs-2 rotate-180">
              <span className="path1" />
              <span className="path2" />
            </i>
          </div>
          {/*end::Sidebar toggle*/}
        </div>
        {/*end::Logo*/}
        {/*begin::sidebar menu*/}
        <div className="app-sidebar-menu overflow-hidden flex-column-fluid">
          {/*begin::Menu wrapper*/}
          <div id="kt_app_sidebar_menu_wrapper" className="app-sidebar-wrapper">
            {/*begin::Scroll wrapper*/}
            <div
              id="kt_app_sidebar_menu_scroll"
              className="hover-scroll-y my-5 mx-3"
              data-kt-scroll="true"
              data-kt-scroll-activate="true"
              data-kt-scroll-height="auto"
              data-kt-scroll-dependencies="#kt_app_sidebar_logo, #kt_app_sidebar_footer"
              data-kt-scroll-wrappers="#kt_app_sidebar_menu"
              data-kt-scroll-offset="5px"
              data-kt-scroll-save-state="true"
            >
              <SidebarMenu />

              {/*begin::Menu*/}
              <div
                className="menu menu-column menu-rounded menu-sub-indention fw-semibold"
                id="#kt_app_sidebar_menu"
                data-kt-menu="true"
                data-kt-menu-expand="false"
              >
                {/*begin:Menu item*/}
                <div
                  data-kt-menu-trigger="click"
                  className="menu-item here show menu-accordion"
                >
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                    <span className="menu-icon">
                      <i className="ki-duotone ki-category fs-2">
                        <span className="path1" />
                        <span className="path2" />
                        <span className="path3" />
                        <span className="path4" />
                      </i>
                    </span>
                    <span className="menu-title">Dashboards</span>
                    <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion">
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link active" href="index.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Default</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="dashboards/projects.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Projects</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="dashboards/ecommerce.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">eCommerce</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="dashboards/marketing.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Marketing</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    <div
                      className="menu-inner flex-column collapse"
                      id="kt_app_sidebar_menu_dashboards_collapse"
                    >
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="dashboards/social.html">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Social</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="dashboards/bidding.html">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Bidding</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="dashboards/online-courses.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Online Courses</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="dashboards/logistics.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Logistics</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                    </div>
                    <div className="menu-item">
                      <div className="menu-content">
                        <a
                          className="btn btn-flex btn-color-gray-500 btn-icon-gray-500 d-flex flex-stack fs-base p-0 ms-2 mb-2 toggle collapsible collapsed"
                          data-bs-toggle="collapse"
                          href="#kt_app_sidebar_menu_dashboards_collapse"
                          data-kt-toggle-text="Show Less"
                        >
                          <span data-kt-toggle-text-target="true">
                            Show 4 More
                          </span>
                          <i className="ki-duotone ki-minus-square toggle-on fs-2 me-0 pe-0">
                            <span className="path1" />
                            <span className="path2" />
                          </i>
                          <i className="ki-duotone ki-plus-square toggle-off fs-2 me-0 pe-0">
                            <span className="path1" />
                            <span className="path2" />
                            <span className="path3" />
                          </i>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*end:Menu sub*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div className="menu-item pt-5">
                  {/*begin:Menu content*/}
                  <div className="menu-content">
                    <span className="menu-heading fw-bold text-uppercase fs-7">
                      Pages
                    </span>
                  </div>
                  {/*end:Menu content*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div
                  data-kt-menu-trigger="click"
                  className="menu-item menu-accordion"
                >
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                    <span className="menu-icon">
                      <i className="ki-duotone ki-address-book fs-2">
                        <span className="path1" />
                        <span className="path2" />
                        <span className="path3" />
                      </i>
                    </span>
                    <span className="menu-title">User Profile</span>
                    <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion">
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="pages/user-profile/overview.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Overview</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="pages/user-profile/projects.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Projects</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="pages/user-profile/campaigns.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Campaigns</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="pages/user-profile/documents.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Documents</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="pages/user-profile/followers.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Followers</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="pages/user-profile/activity.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Activity</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div
                  data-kt-menu-trigger="click"
                  className="menu-item menu-accordion"
                >
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                    <span className="menu-icon">
                      <i className="ki-duotone ki-educare fs-2">
                        <span className="path1" />
                        <span className="path2" />
                        <span className="path3" />
                        <span className="path4" />
                      </i>
                    </span>
                    <span className="menu-title">Account</span>
                    <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion">
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="account/overview.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Overview</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="account/settings.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Settings</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="account/security.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Security</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="account/activity.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Activity</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="account/billing.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Billing</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="account/statements.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Statements</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="account/referrals.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Referrals</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="account/api-keys.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">API Keys</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="account/logs.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Logs</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div
                  data-kt-menu-trigger="click"
                  className="menu-item menu-accordion"
                >
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                    <span className="menu-icon">
                      <i className="ki-duotone ki-user fs-2">
                        <span className="path1" />
                        <span className="path2" />
                      </i>
                    </span>
                    <span className="menu-title">Authentication</span>
                    <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion">
                    {/*begin:Menu item*/}
                    <div
                      data-kt-menu-trigger="click"
                      className="menu-item menu-accordion"
                    >
                      {/*begin:Menu link*/}
                      <span className="menu-link">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Corporate</span>
                        <span className="menu-arrow" />
                      </span>
                      {/*end:Menu link*/}
                      {/*begin:Menu sub*/}
                      <div className="menu-sub menu-sub-accordion menu-active-bg">
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="authentication/layouts/corporate/sign-in.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Sign-In</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="authentication/layouts/corporate/sign-up.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Sign-Up</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="authentication/layouts/corporate/two-factor.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Two-Factor</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="authentication/layouts/corporate/reset-password.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Reset Password</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="authentication/layouts/corporate/new-password.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">New Password</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="authentication/extended/multi-steps-sign-up.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">
                              Multi-Steps Sign-Up
                            </span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="authentication/extended/two-factor-auth.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Two Factor Auth</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                      </div>
                      {/*end:Menu sub*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div
                      data-kt-menu-trigger="click"
                      className="menu-item menu-accordion"
                    >
                      {/*begin:Menu link*/}
                      <span className="menu-link">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Email Templates</span>
                        <span className="menu-arrow" />
                      </span>
                      {/*end:Menu link*/}
                      {/*begin:Menu sub*/}
                      <div className="menu-sub menu-sub-accordion menu-active-bg">
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="authentication/email/welcome-message.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Welcome Message</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="authentication/email/reset-password.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Reset Password</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="authentication/email/subscription-confirmed.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">
                              Subscription Confirmed
                            </span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="authentication/email/card-declined.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">
                              Credit Card Declined
                            </span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="authentication/email/promo-1.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Promo 1</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="authentication/email/promo-2.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Promo 2</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="authentication/email/promo-3.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Promo 3</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                      </div>
                      {/*end:Menu sub*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="authentication/general/welcome.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Welcome Message</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="authentication/general/verify-email.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Verify Email</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="authentication/general/coming-soon.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Coming Soon</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="authentication/general/password-confirmation.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">
                          Password Confirmation
                        </span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="authentication/general/account-deactivated.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Account Deactivation</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="authentication/general/error-404.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Error 404</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="authentication/general/error-500.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Error 500</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="authentication/general/maintenance.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Maintenance</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div
                  data-kt-menu-trigger="click"
                  className="menu-item menu-accordion"
                >
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                    <span className="menu-icon">
                      <i className="ki-duotone ki-file fs-2">
                        <span className="path1" />
                        <span className="path2" />
                      </i>
                    </span>
                    <span className="menu-title">Corporate</span>
                    <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion">
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="pages/about.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">About</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="pages/team.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Our Team</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="pages/faq.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">FAQ</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="pages/contact.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Contact Us</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="pages/pricing.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Pricing</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="pages/licenses.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Licenses</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="pages/sitemap.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Sitemap</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div
                  data-kt-menu-trigger="click"
                  className="menu-item menu-accordion"
                >
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                    <span className="menu-icon">
                      <i className="ki-duotone ki-abstract-39 fs-2">
                        <span className="path1" />
                        <span className="path2" />
                      </i>
                    </span>
                    <span className="menu-title">Social</span>
                    <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion">
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="pages/social/feeds.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Feeds</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="pages/social/activity.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Activty</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="pages/social/followers.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Followers</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="pages/social/settings.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Settings</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div
                  data-kt-menu-trigger="click"
                  className="menu-item menu-accordion"
                >
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                    <span className="menu-icon">
                      <i className="ki-duotone ki-bank fs-2">
                        <span className="path1" />
                        <span className="path2" />
                      </i>
                    </span>
                    <span className="menu-title">Blog</span>
                    <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion menu-active-bg">
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="pages/blog/home.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Blog Home</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="pages/blog/post.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Blog Post</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div
                  data-kt-menu-trigger="click"
                  className="menu-item menu-accordion"
                >
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                    <span className="menu-icon">
                      <i className="ki-duotone ki-call fs-2">
                        <span className="path1" />
                        <span className="path2" />
                        <span className="path3" />
                        <span className="path4" />
                        <span className="path5" />
                        <span className="path6" />
                        <span className="path7" />
                        <span className="path8" />
                      </i>
                    </span>
                    <span className="menu-title">Careers</span>
                    <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion">
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="pages/careers/list.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Careers List</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="pages/careers/apply.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Careers Apply</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div
                  data-kt-menu-trigger="click"
                  className="menu-item menu-accordion"
                >
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                    <span className="menu-icon">
                      <i className="ki-duotone ki-color-swatch fs-2">
                        <span className="path1" />
                        <span className="path2" />
                        <span className="path3" />
                        <span className="path4" />
                        <span className="path5" />
                        <span className="path6" />
                        <span className="path7" />
                        <span className="path8" />
                        <span className="path9" />
                        <span className="path10" />
                        <span className="path11" />
                        <span className="path12" />
                        <span className="path13" />
                        <span className="path14" />
                        <span className="path15" />
                        <span className="path16" />
                        <span className="path17" />
                        <span className="path18" />
                        <span className="path19" />
                        <span className="path20" />
                        <span className="path21" />
                      </i>
                    </span>
                    <span className="menu-title">Utilities</span>
                    <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion">
                    {/*begin:Menu item*/}
                    <div
                      data-kt-menu-trigger="click"
                      className="menu-item menu-accordion"
                    >
                      {/*begin:Menu link*/}
                      <span className="menu-link">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Modals</span>
                        <span className="menu-arrow" />
                      </span>
                      {/*end:Menu link*/}
                      {/*begin:Menu sub*/}
                      <div className="menu-sub menu-sub-accordion">
                        {/*begin:Menu item*/}
                        <div
                          data-kt-menu-trigger="click"
                          className="menu-item menu-accordion"
                        >
                          {/*begin:Menu link*/}
                          <span className="menu-link">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">General</span>
                            <span className="menu-arrow" />
                          </span>
                          {/*end:Menu link*/}
                          {/*begin:Menu sub*/}
                          <div className="menu-sub menu-sub-accordion menu-active-bg">
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a
                                className="menu-link"
                                href="utilities/modals/general/invite-friends.html"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">
                                  Invite Friends
                                </span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a
                                className="menu-link"
                                href="utilities/modals/general/view-users.html"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">View Users</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a
                                className="menu-link"
                                href="utilities/modals/general/select-users.html"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Select Users</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a
                                className="menu-link"
                                href="utilities/modals/general/upgrade-plan.html"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Upgrade Plan</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a
                                className="menu-link"
                                href="utilities/modals/general/share-earn.html"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">
                                  Share &amp; Earn
                                </span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                          </div>
                          {/*end:Menu sub*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div
                          data-kt-menu-trigger="click"
                          className="menu-item menu-accordion"
                        >
                          {/*begin:Menu link*/}
                          <span className="menu-link">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Forms</span>
                            <span className="menu-arrow" />
                          </span>
                          {/*end:Menu link*/}
                          {/*begin:Menu sub*/}
                          <div className="menu-sub menu-sub-accordion menu-active-bg">
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a
                                className="menu-link"
                                href="utilities/modals/forms/new-target.html"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">New Target</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a
                                className="menu-link"
                                href="utilities/modals/forms/new-card.html"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">New Card</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a
                                className="menu-link"
                                href="utilities/modals/forms/new-address.html"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">New Address</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a
                                className="menu-link"
                                href="utilities/modals/forms/create-api-key.html"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">
                                  Create API Key
                                </span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a
                                className="menu-link"
                                href="utilities/modals/forms/bidding.html"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Bidding</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                          </div>
                          {/*end:Menu sub*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div
                          data-kt-menu-trigger="click"
                          className="menu-item menu-accordion"
                        >
                          {/*begin:Menu link*/}
                          <span className="menu-link">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Wizards</span>
                            <span className="menu-arrow" />
                          </span>
                          {/*end:Menu link*/}
                          {/*begin:Menu sub*/}
                          <div className="menu-sub menu-sub-accordion menu-active-bg">
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a
                                className="menu-link"
                                href="utilities/modals/wizards/create-app.html"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Create App</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a
                                className="menu-link"
                                href="utilities/modals/wizards/create-campaign.html"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">
                                  Create Campaign
                                </span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a
                                className="menu-link"
                                href="utilities/modals/wizards/create-account.html"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">
                                  Create Business Acc
                                </span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a
                                className="menu-link"
                                href="utilities/modals/wizards/create-project.html"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">
                                  Create Project
                                </span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a
                                className="menu-link"
                                href="utilities/modals/wizards/top-up-wallet.html"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">
                                  Top Up Wallet
                                </span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a
                                className="menu-link"
                                href="utilities/modals/wizards/offer-a-deal.html"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Offer a Deal</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a
                                className="menu-link"
                                href="utilities/modals/wizards/two-factor-authentication.html"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">
                                  Two Factor Auth
                                </span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                          </div>
                          {/*end:Menu sub*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div
                          data-kt-menu-trigger="click"
                          className="menu-item menu-accordion"
                        >
                          {/*begin:Menu link*/}
                          <span className="menu-link">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Search</span>
                            <span className="menu-arrow" />
                          </span>
                          {/*end:Menu link*/}
                          {/*begin:Menu sub*/}
                          <div className="menu-sub menu-sub-accordion menu-active-bg">
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a
                                className="menu-link"
                                href="utilities/modals/search/users.html"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Users</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a
                                className="menu-link"
                                href="utilities/modals/search/select-location.html"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">
                                  Select Location
                                </span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                          </div>
                          {/*end:Menu sub*/}
                        </div>
                        {/*end:Menu item*/}
                      </div>
                      {/*end:Menu sub*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div
                      data-kt-menu-trigger="click"
                      className="menu-item menu-accordion"
                    >
                      {/*begin:Menu link*/}
                      <span className="menu-link">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Search</span>
                        <span className="menu-arrow" />
                      </span>
                      {/*end:Menu link*/}
                      {/*begin:Menu sub*/}
                      <div className="menu-sub menu-sub-accordion">
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="utilities/search/horizontal.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Horizontal</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="utilities/search/vertical.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Vertical</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="utilities/search/users.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Users</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="utilities/search/select-location.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Location</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                      </div>
                      {/*end:Menu sub*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div
                      data-kt-menu-trigger="click"
                      className="menu-item menu-accordion"
                    >
                      {/*begin:Menu link*/}
                      <span className="menu-link">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Wizards</span>
                        <span className="menu-arrow" />
                      </span>
                      {/*end:Menu link*/}
                      {/*begin:Menu sub*/}
                      <div className="menu-sub menu-sub-accordion">
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="utilities/wizards/horizontal.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Horizontal</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="utilities/wizards/vertical.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Vertical</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="utilities/wizards/two-factor-authentication.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Two Factor Auth</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="utilities/wizards/create-app.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Create App</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="utilities/wizards/create-campaign.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Create Campaign</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="utilities/wizards/create-account.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Create Account</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="utilities/wizards/create-project.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Create Project</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="utilities/modals/wizards/top-up-wallet.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Top Up Wallet</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="utilities/wizards/offer-a-deal.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Offer a Deal</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                      </div>
                      {/*end:Menu sub*/}
                    </div>
                    {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div className="menu-item pt-5">
                  {/*begin:Menu content*/}
                  <div className="menu-content">
                    <span className="menu-heading fw-bold text-uppercase fs-7">
                      Apps
                    </span>
                  </div>
                  {/*end:Menu content*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div
                  data-kt-menu-trigger="click"
                  className="menu-item menu-accordion"
                >
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                    <span className="menu-icon">
                      <i className="ki-duotone ki-abstract-41 fs-2">
                        <span className="path1" />
                        <span className="path2" />
                      </i>
                    </span>
                    <span className="menu-title">Projects</span>
                    <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion">
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="apps/projects/list.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">My Projects</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="apps/projects/project.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">View Project</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="apps/projects/targets.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Targets</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="apps/projects/budget.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Budget</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="apps/projects/users.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Users</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="apps/projects/files.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Files</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="apps/projects/activity.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Activity</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="apps/projects/settings.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Settings</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div
                  data-kt-menu-trigger="click"
                  className="menu-item menu-accordion"
                >
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                    <span className="menu-icon">
                      <i className="ki-duotone ki-basket fs-2">
                        <span className="path1" />
                        <span className="path2" />
                        <span className="path3" />
                        <span className="path4" />
                      </i>
                    </span>
                    <span className="menu-title">eCommerce</span>
                    <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion">
                    {/*begin:Menu item*/}
                    <div
                      data-kt-menu-trigger="click"
                      className="menu-item menu-accordion"
                    >
                      {/*begin:Menu link*/}
                      <span className="menu-link">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Catalog</span>
                        <span className="menu-arrow" />
                      </span>
                      {/*end:Menu link*/}
                      {/*begin:Menu sub*/}
                      <div className="menu-sub menu-sub-accordion">
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="apps/ecommerce/catalog/products.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Products</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="apps/ecommerce/catalog/categories.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Categories</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="apps/ecommerce/catalog/add-product.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Add Product</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="apps/ecommerce/catalog/edit-product.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Edit Product</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="apps/ecommerce/catalog/add-category.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Add Category</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="apps/ecommerce/catalog/edit-category.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Edit Category</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                      </div>
                      {/*end:Menu sub*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div
                      data-kt-menu-trigger="click"
                      className="menu-item menu-accordion"
                    >
                      {/*begin:Menu link*/}
                      <span className="menu-link">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Sales</span>
                        <span className="menu-arrow" />
                      </span>
                      {/*end:Menu link*/}
                      {/*begin:Menu sub*/}
                      <div className="menu-sub menu-sub-accordion">
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="apps/ecommerce/sales/listing.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Orders Listing</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="apps/ecommerce/sales/details.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Order Details</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="apps/ecommerce/sales/add-order.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Add Order</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="apps/ecommerce/sales/edit-order.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Edit Order</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                      </div>
                      {/*end:Menu sub*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div
                      data-kt-menu-trigger="click"
                      className="menu-item menu-accordion"
                    >
                      {/*begin:Menu link*/}
                      <span className="menu-link">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Customers</span>
                        <span className="menu-arrow" />
                      </span>
                      {/*end:Menu link*/}
                      {/*begin:Menu sub*/}
                      <div className="menu-sub menu-sub-accordion">
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="apps/ecommerce/customers/listing.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Customer Listing</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="apps/ecommerce/customers/details.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Customer Details</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                      </div>
                      {/*end:Menu sub*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div
                      data-kt-menu-trigger="click"
                      className="menu-item menu-accordion"
                    >
                      {/*begin:Menu link*/}
                      <span className="menu-link">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Reports</span>
                        <span className="menu-arrow" />
                      </span>
                      {/*end:Menu link*/}
                      {/*begin:Menu sub*/}
                      <div className="menu-sub menu-sub-accordion">
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="apps/ecommerce/reports/view.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Products Viewed</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="apps/ecommerce/reports/sales.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Sales</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="apps/ecommerce/reports/returns.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Returns</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="apps/ecommerce/reports/customer-orders.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Customer Orders</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="apps/ecommerce/reports/shipping.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Shipping</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                      </div>
                      {/*end:Menu sub*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="apps/ecommerce/settings.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Settings</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div
                  data-kt-menu-trigger="click"
                  className="menu-item menu-accordion"
                >
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                    <span className="menu-icon">
                      <i className="ki-duotone ki-abstract-25 fs-2">
                        <span className="path1" />
                        <span className="path2" />
                      </i>
                    </span>
                    <span className="menu-title">Contacts</span>
                    <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion">
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="apps/contacts/getting-started.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Getting Started</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="apps/contacts/add-contact.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Add Contact</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="apps/contacts/edit-contact.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Edit Contact</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="apps/contacts/view-contact.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">View Contact</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div
                  data-kt-menu-trigger="click"
                  className="menu-item menu-accordion"
                >
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                    <span className="menu-icon">
                      <i className="ki-duotone ki-chart fs-2">
                        <span className="path1" />
                        <span className="path2" />
                      </i>
                    </span>
                    <span className="menu-title">Support Center</span>
                    <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion">
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="apps/support-center/overview.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Overview</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div
                      data-kt-menu-trigger="click"
                      className="menu-item menu-accordion mb-1"
                    >
                      {/*begin:Menu link*/}
                      <span className="menu-link">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Tickets</span>
                        <span className="menu-arrow" />
                      </span>
                      {/*end:Menu link*/}
                      {/*begin:Menu sub*/}
                      <div className="menu-sub menu-sub-accordion">
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="apps/support-center/tickets/list.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Tickets List</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="apps/support-center/tickets/view.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">View Ticket</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                      </div>
                      {/*end:Menu sub*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div
                      data-kt-menu-trigger="click"
                      className="menu-item menu-accordion mb-1"
                    >
                      {/*begin:Menu link*/}
                      <span className="menu-link">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Tutorials</span>
                        <span className="menu-arrow" />
                      </span>
                      {/*end:Menu link*/}
                      {/*begin:Menu sub*/}
                      <div className="menu-sub menu-sub-accordion">
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="apps/support-center/tutorials/list.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Tutorials List</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="apps/support-center/tutorials/post.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Tutorial Post</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                      </div>
                      {/*end:Menu sub*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="apps/support-center/faq.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">FAQ</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="apps/support-center/licenses.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Licenses</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="apps/support-center/contact.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Contact Us</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div
                  data-kt-menu-trigger="click"
                  className="menu-item menu-accordion"
                >
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                    <span className="menu-icon">
                      <i className="ki-duotone ki-abstract-28 fs-2">
                        <span className="path1" />
                        <span className="path2" />
                      </i>
                    </span>
                    <span className="menu-title">User Management</span>
                    <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion">
                    {/*begin:Menu item*/}
                    <div
                      data-kt-menu-trigger="click"
                      className="menu-item menu-accordion mb-1"
                    >
                      {/*begin:Menu link*/}
                      <span className="menu-link">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Users</span>
                        <span className="menu-arrow" />
                      </span>
                      {/*end:Menu link*/}
                      {/*begin:Menu sub*/}
                      <div className="menu-sub menu-sub-accordion">
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="apps/user-management/users/list.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Users List</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="apps/user-management/users/view.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">View User</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                      </div>
                      {/*end:Menu sub*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div
                      data-kt-menu-trigger="click"
                      className="menu-item menu-accordion"
                    >
                      {/*begin:Menu link*/}
                      <span className="menu-link">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Roles</span>
                        <span className="menu-arrow" />
                      </span>
                      {/*end:Menu link*/}
                      {/*begin:Menu sub*/}
                      <div className="menu-sub menu-sub-accordion">
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="apps/user-management/roles/list.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Roles List</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="apps/user-management/roles/view.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">View Role</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                      </div>
                      {/*end:Menu sub*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="apps/user-management/permissions.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Permissions</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div
                  data-kt-menu-trigger="click"
                  className="menu-item menu-accordion"
                >
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                    <span className="menu-icon">
                      <i className="ki-duotone ki-abstract-38 fs-2">
                        <span className="path1" />
                        <span className="path2" />
                      </i>
                    </span>
                    <span className="menu-title">Customers</span>
                    <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion">
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="apps/customers/getting-started.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Getting Started</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="apps/customers/list.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Customer Listing</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="apps/customers/view.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Customer Details</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div
                  data-kt-menu-trigger="click"
                  className="menu-item menu-accordion"
                >
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                    <span className="menu-icon">
                      <i className="ki-duotone ki-map fs-2">
                        <span className="path1" />
                        <span className="path2" />
                        <span className="path3" />
                      </i>
                    </span>
                    <span className="menu-title">Subscription</span>
                    <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion">
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="apps/subscriptions/getting-started.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Getting Started</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="apps/subscriptions/list.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Subscription List</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="apps/subscriptions/add.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Add Subscription</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="apps/subscriptions/view.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">View Subscription</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div
                  data-kt-menu-trigger="click"
                  className="menu-item menu-accordion"
                >
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                    <span className="menu-icon">
                      <i className="ki-duotone ki-credit-cart fs-2">
                        <span className="path1" />
                        <span className="path2" />
                      </i>
                    </span>
                    <span className="menu-title">Invoice Manager</span>
                    <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion">
                    {/*begin:Menu item*/}
                    <div
                      data-kt-menu-trigger="click"
                      className="menu-item menu-accordion"
                    >
                      {/*begin:Menu link*/}
                      <span className="menu-link">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">View Invoices</span>
                        <span className="menu-arrow" />
                      </span>
                      {/*end:Menu link*/}
                      {/*begin:Menu sub*/}
                      <div className="menu-sub menu-sub-accordion menu-active-bg">
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="apps/invoices/view/invoice-1.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Invoice 1</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="apps/invoices/view/invoice-2.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Invoice 2</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="apps/invoices/view/invoice-3.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Invoice 3</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                      </div>
                      {/*end:Menu sub*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="apps/invoices/create.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Create Invoice</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div
                  data-kt-menu-trigger="click"
                  className="menu-item menu-accordion"
                >
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                    <span className="menu-icon">
                      <i className="ki-duotone ki-switch fs-2">
                        <span className="path1" />
                        <span className="path2" />
                      </i>
                    </span>
                    <span className="menu-title">File Manager</span>
                    <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion">
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="apps/file-manager/folders.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Folders</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="apps/file-manager/files.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Files</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="apps/file-manager/blank.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Blank Directory</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="apps/file-manager/settings.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Settings</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div
                  data-kt-menu-trigger="click"
                  className="menu-item menu-accordion"
                >
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                    <span className="menu-icon">
                      <i className="ki-duotone ki-sms fs-2">
                        <span className="path1" />
                        <span className="path2" />
                      </i>
                    </span>
                    <span className="menu-title">Inbox</span>
                    <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion">
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="apps/inbox/listing.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Messages</span>
                        <span className="menu-badge">
                          <span className="badge badge-success">3</span>
                        </span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="apps/inbox/compose.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Compose</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="apps/inbox/reply.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">View &amp; Reply</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div
                  data-kt-menu-trigger="click"
                  className="menu-item menu-accordion"
                >
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                    <span className="menu-icon">
                      <i className="ki-duotone ki-message-text-2 fs-2">
                        <span className="path1" />
                        <span className="path2" />
                        <span className="path3" />
                      </i>
                    </span>
                    <span className="menu-title">Chat</span>
                    <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion">
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="apps/chat/private.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Private Chat</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="apps/chat/group.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Group Chat</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="apps/chat/drawer.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Drawer Chat</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="apps/calendar.html">
                    <span className="menu-icon">
                      <i className="ki-duotone ki-calendar-8 fs-2">
                        <span className="path1" />
                        <span className="path2" />
                        <span className="path3" />
                        <span className="path4" />
                        <span className="path5" />
                        <span className="path6" />
                      </i>
                    </span>
                    <span className="menu-title">Calendar</span>
                  </a>
                  {/*end:Menu link*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div className="menu-item pt-5">
                  {/*begin:Menu content*/}
                  <div className="menu-content">
                    <span className="menu-heading fw-bold text-uppercase fs-7">
                      Layouts
                    </span>
                  </div>
                  {/*end:Menu content*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div
                  data-kt-menu-trigger="click"
                  className="menu-item menu-accordion"
                >
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                    <span className="menu-icon">
                      <i className="ki-duotone ki-element-7 fs-2">
                        <span className="path1" />
                        <span className="path2" />
                      </i>
                    </span>
                    <span className="menu-title">Layout Options</span>
                    <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion">
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="layouts/light-sidebar.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Light Sidebar</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="layouts/dark-sidebar.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Dark Sidebar</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="layouts/light-header.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Light Header</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="layouts/dark-header.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Dark Header</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="layout-builder.html">
                    <span className="menu-icon">
                      <i className="ki-duotone ki-abstract-13 fs-2">
                        <span className="path1" />
                        <span className="path2" />
                      </i>
                    </span>
                    <span className="menu-title">Layout Builder</span>
                  </a>
                  {/*end:Menu link*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div className="menu-item pt-5">
                  {/*begin:Menu content*/}
                  <div className="menu-content">
                    <span className="menu-heading fw-bold text-uppercase fs-7">
                      Help
                    </span>
                  </div>
                  {/*end:Menu content*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a
                    className="menu-link"
                    href="https://preview.keenthemes.com/html/keen/docs/base/utilities"
                    target="_blank"
                  >
                    <span className="menu-icon">
                      <i className="ki-duotone ki-rocket fs-2">
                        <span className="path1" />
                        <span className="path2" />
                      </i>
                    </span>
                    <span className="menu-title">Components</span>
                  </a>
                  {/*end:Menu link*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a
                    className="menu-link"
                    href="https://preview.keenthemes.com/html/keen/docs"
                    target="_blank"
                  >
                    <span className="menu-icon">
                      <i className="ki-duotone ki-abstract-26 fs-2">
                        <span className="path1" />
                        <span className="path2" />
                      </i>
                    </span>
                    <span className="menu-title">Documentation</span>
                  </a>
                  {/*end:Menu link*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a
                    className="menu-link"
                    href="https://preview.keenthemes.com/html/keen/docs/getting-started/changelog"
                    target="_blank"
                  >
                    <span className="menu-icon">
                      <i className="ki-duotone ki-code fs-2">
                        <span className="path1" />
                        <span className="path2" />
                        <span className="path3" />
                        <span className="path4" />
                      </i>
                    </span>
                    <span className="menu-title">Changelog v3.0.8</span>
                  </a>
                  {/*end:Menu link*/}
                </div>
                {/*end:Menu item*/}
              </div>
              {/*end::Menu*/}
            </div>
            {/*end::Scroll wrapper*/}
          </div>
          {/*end::Menu wrapper*/}
        </div>
        {/*end::sidebar menu*/}
        {/*begin::Footer*/}
        <div
          className="app-sidebar-footer flex-column-auto pt-2 pb-6 px-6"
          id="kt_app_sidebar_footer"
        >
          <a
            href="https://preview.keenthemes.com/html/keen/docs"
            className="btn btn-flex flex-center btn-custom btn-primary overflow-hidden text-nowrap px-0 h-40px w-100"
            data-bs-toggle="tooltip"
            data-bs-trigger="hover"
            data-bs-dismiss-="click"
            title="200+ in-house components and 3rd-party plugins"
          >
            <span className="btn-label"> Docs &amp; Components </span>
            <i className="ki-duotone ki-document btn-icon fs-2 m-0">
              <span className="path1" />
              <span className="path2" />
            </i>
          </a>
        </div>
        {/*end::Footer*/}
      </div>
      {/*end::Sidebar*/}
    </>
  );
};

export default SideBar;
