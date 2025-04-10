import React, { useState, useEffect } from 'react';
import AppHeader from '../../AppComponents/Header/AppHeader';
import Footer from '../../AppComponents/Footer/Footer';
import { useTheme } from '../../contexts/ThemeProvider';
import { useNavigate } from 'react-router-dom';



const HeaderWrapper = () => {


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
        >
          {/*begin::Menu*/}
          <div
            className="menu menu-rounded menu-column menu-lg-row my-5 my-lg-0 align-items-stretch fw-semibold px-2 px-lg-0"
            id="kt_app_header_menu"
            data-kt-menu="true"
          >
            {/*begin:Menu item*/}
            <div
              data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
              data-kt-menu-placement="bottom-start"
              className="menu-item menu-here-bg menu-lg-down-accordion me-0 me-lg-2"
            >
              {/*begin:Menu link*/}
              <span className="menu-link">
                <span className="menu-title">Dashboards</span>
                <span className="menu-arrow d-lg-none" />
              </span>
              {/*end:Menu link*/}
              {/*begin:Menu sub*/}
              <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown p-0 w-100 w-lg-850px">
                {/*begin:Dashboards menu*/}
                <div
                  className="menu-state-bg menu-extended overflow-hidden overflow-lg-visible"
                  data-kt-menu-dismiss="true"
                >
                  {/*begin:Row*/}
                  <div className="row">
                    {/*begin:Col*/}
                    <div className="col-lg-8 mb-3 mb-lg-0 py-3 px-3 py-lg-6 px-lg-6">
                      {/*begin:Row*/}
                      <div className="row">
                        {/*begin:Col*/}
                        <div className="col-lg-6 mb-3">
                          {/*begin:Menu item*/}
                          <div className="menu-item p-0 m-0">
                            {/*begin:Menu link*/}
                            <a
                              href="../index.html"
                              className="menu-link"
                            >
                              <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                <i className="ki-duotone ki-element-11 text-primary fs-1">
                                  <span className="path1" />
                                  <span className="path2" />
                                  <span className="path3" />
                                  <span className="path4" />
                                </i>
                              </span>
                              <span className="d-flex flex-column">
                                <span className="fs-6 fw-bold text-gray-800">
                                  Default
                                </span>
                                <span className="fs-7 fw-semibold text-muted">
                                  Reports &amp; statistics
                                </span>
                              </span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                        </div>
                        {/*end:Col*/}
                        {/*begin:Col*/}
                        <div className="col-lg-6 mb-3">
                          {/*begin:Menu item*/}
                          <div className="menu-item p-0 m-0">
                            {/*begin:Menu link*/}
                            <a
                              href="../dashboards/ecommerce.html"
                              className="menu-link"
                            >
                              <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                <i className="ki-duotone ki-basket text-danger fs-1">
                                  <span className="path1" />
                                  <span className="path2" />
                                  <span className="path3" />
                                  <span className="path4" />
                                </i>
                              </span>
                              <span className="d-flex flex-column">
                                <span className="fs-6 fw-bold text-gray-800">
                                  eCommerce
                                </span>
                                <span className="fs-7 fw-semibold text-muted">
                                  Sales reports
                                </span>
                              </span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                        </div>
                        {/*end:Col*/}
                        {/*begin:Col*/}
                        <div className="col-lg-6 mb-3">
                          {/*begin:Menu item*/}
                          <div className="menu-item p-0 m-0">
                            {/*begin:Menu link*/}
                            <a
                              href="../dashboards/projects.html"
                              className="menu-link"
                            >
                              <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                <i className="ki-duotone ki-abstract-44 text-info fs-1">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>
                              </span>
                              <span className="d-flex flex-column">
                                <span className="fs-6 fw-bold text-gray-800">
                                  Projects
                                </span>
                                <span className="fs-7 fw-semibold text-muted">
                                  Tasts, graphs &amp; charts
                                </span>
                              </span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                        </div>
                        {/*end:Col*/}
                        {/*begin:Col*/}
                        <div className="col-lg-6 mb-3">
                          {/*begin:Menu item*/}
                          <div className="menu-item p-0 m-0">
                            {/*begin:Menu link*/}
                            <a
                              href="../dashboards/online-courses.html"
                              className="menu-link"
                            >
                              <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                <i className="ki-duotone ki-color-swatch text-success fs-1">
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
                              <span className="d-flex flex-column">
                                <span className="fs-6 fw-bold text-gray-800">
                                  Online Courses
                                </span>
                                <span className="fs-7 fw-semibold text-muted">
                                  Student progress
                                </span>
                              </span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                        </div>
                        {/*end:Col*/}
                        {/*begin:Col*/}
                        <div className="col-lg-6 mb-3">
                          {/*begin:Menu item*/}
                          <div className="menu-item p-0 m-0">
                            {/*begin:Menu link*/}
                            <a
                              href="../dashboards/marketing.html"
                              className="menu-link"
                            >
                              <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                <i className="ki-duotone ki-chart-simple text-gray-900 fs-1">
                                  <span className="path1" />
                                  <span className="path2" />
                                  <span className="path3" />
                                  <span className="path4" />
                                </i>
                              </span>
                              <span className="d-flex flex-column">
                                <span className="fs-6 fw-bold text-gray-800">
                                  Marketing
                                </span>
                                <span className="fs-7 fw-semibold text-muted">
                                  Campaings &amp; conversions
                                </span>
                              </span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                        </div>
                        {/*end:Col*/}
                        {/*begin:Col*/}
                        <div className="col-lg-6 mb-3">
                          {/*begin:Menu item*/}
                          <div className="menu-item p-0 m-0">
                            {/*begin:Menu link*/}
                            <a
                              href="../dashboards/bidding.html"
                              className="menu-link"
                            >
                              <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                <i className="ki-duotone ki-switch text-warning fs-1">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>
                              </span>
                              <span className="d-flex flex-column">
                                <span className="fs-6 fw-bold text-gray-800">
                                  Bidding
                                </span>
                                <span className="fs-7 fw-semibold text-muted">
                                  Campaings &amp; conversions
                                </span>
                              </span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                        </div>
                        {/*end:Col*/}
                        {/*begin:Col*/}
                        <div className="col-lg-6 mb-3">
                          {/*begin:Menu item*/}
                          <div className="menu-item p-0 m-0">
                            {/*begin:Menu link*/}
                            <a
                              href="../dashboards/pos.html"
                              className="menu-link"
                            >
                              <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                <i className="ki-duotone ki-abstract-42 text-danger fs-1">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>
                              </span>
                              <span className="d-flex flex-column">
                                <span className="fs-6 fw-bold text-gray-800">
                                  POS System
                                </span>
                                <span className="fs-7 fw-semibold text-muted">
                                  Campaings &amp; conversions
                                </span>
                              </span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                        </div>
                        {/*end:Col*/}
                        {/*begin:Col*/}
                        <div className="col-lg-6 mb-3">
                          {/*begin:Menu item*/}
                          <div className="menu-item p-0 m-0">
                            {/*begin:Menu link*/}
                            <a
                              href="../dashboards/call-center.html"
                              className="menu-link"
                            >
                              <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                <i className="ki-duotone ki-call text-primary fs-1">
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
                              <span className="d-flex flex-column">
                                <span className="fs-6 fw-bold text-gray-800">
                                  Call Center
                                </span>
                                <span className="fs-7 fw-semibold text-muted">
                                  Campaings &amp; conversions
                                </span>
                              </span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                        </div>
                        {/*end:Col*/}
                      </div>
                      {/*end:Row*/}
                      <div className="separator separator-dashed mx-5 my-5" />
                      {/*begin:Landing*/}
                      <div className="d-flex flex-stack flex-wrap flex-lg-nowrap gap-2 mx-5">
                        <div className="d-flex flex-column me-5">
                          <div className="fs-6 fw-bold text-gray-800">
                            Landing Page Template
                          </div>
                          <div className="fs-7 fw-semibold text-muted">
                            Onpe page landing template with pricing
                            &amp; others
                          </div>
                        </div>
                        <a
                          href="../landing.html"
                          className="btn btn-sm btn-primary fw-bold"
                        >
                          Explore
                        </a>
                      </div>
                      {/*end:Landing*/}
                    </div>
                    {/*end:Col*/}
                    {/*begin:Col*/}
                    <div className="menu-more bg-light col-lg-4 py-3 px-3 py-lg-6 px-lg-6 rounded-end">
                      {/*begin:Heading*/}
                      <h4 className="fs-6 fs-lg-4 text-gray-800 fw-bold mt-3 mb-3 ms-4">
                        More Dashboards
                      </h4>
                      {/*end:Heading*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item p-0 m-0">
                        {/*begin:Menu link*/}
                        <a
                          href="../dashboards/logistics.html"
                          className="menu-link py-2"
                        >
                          <span className="menu-title">
                            {" "}
                            Logistics{" "}
                          </span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item p-0 m-0">
                        {/*begin:Menu link*/}
                        <a
                          href="../dashboards/website-analytics.html"
                          className="menu-link py-2"
                        >
                          <span className="menu-title">
                            Website Analytics
                          </span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item p-0 m-0">
                        {/*begin:Menu link*/}
                        <a
                          href="../dashboards/finance-performance.html"
                          className="menu-link py-2"
                        >
                          <span className="menu-title">
                            Finance Performance
                          </span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item p-0 m-0">
                        {/*begin:Menu link*/}
                        <a
                          href="../dashboards/store-analytics.html"
                          className="menu-link py-2"
                        >
                          <span className="menu-title">
                            Store Analytics
                          </span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item p-0 m-0">
                        {/*begin:Menu link*/}
                        <a
                          href="../dashboards/social.html"
                          className="menu-link py-2"
                        >
                          <span className="menu-title"> Social </span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item p-0 m-0">
                        {/*begin:Menu link*/}
                        <a
                          href="../dashboards/delivery.html"
                          className="menu-link py-2"
                        >
                          <span className="menu-title"> Delivery </span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item p-0 m-0">
                        {/*begin:Menu link*/}
                        <a
                          href="../dashboards/crypto.html"
                          className="menu-link py-2"
                        >
                          <span className="menu-title"> Crypto </span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item p-0 m-0">
                        {/*begin:Menu link*/}
                        <a
                          href="../dashboards/school.html"
                          className="menu-link py-2"
                        >
                          <span className="menu-title"> School </span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item p-0 m-0">
                        {/*begin:Menu link*/}
                        <a
                          href="../dashboards/podcast.html"
                          className="menu-link py-2"
                        >
                          <span className="menu-title"> Podcast </span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                    </div>
                    {/*end:Col*/}
                  </div>
                  {/*end:Row*/}
                </div>
                {/*end:Dashboards menu*/}
              </div>
              {/*end:Menu sub*/}
            </div>
            {/*end:Menu item*/}
            {/*begin:Menu item*/}
            <div
              data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
              data-kt-menu-placement="bottom-start"
              className="menu-item menu-lg-down-accordion me-0 me-lg-2"
            >
              {/*begin:Menu link*/}
              <span className="menu-link">
                <span className="menu-title">Pages</span>
                <span className="menu-arrow d-lg-none" />
              </span>
              {/*end:Menu link*/}
              {/*begin:Menu sub*/}
              <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown p-0">
                {/*begin:Pages menu*/}
                <div className="menu-active-bg px-4 px-lg-0">
                  {/*begin:Tabs nav*/}
                  <div className="d-flex w-100 overflow-auto">
                    <ul className="nav nav-stretch nav-line-tabs fw-bold fs-6 p-0 p-lg-10 flex-nowrap flex-grow-1">
                      {/*begin:Nav item*/}
                      <li className="nav-item mx-lg-1">
                        <a
                          className="nav-link py-3 py-lg-6 active text-active-primary"
                          href="#"
                          data-bs-toggle="tab"
                          data-bs-target="#kt_app_header_menu_pages_pages"
                        >
                          General
                        </a>
                      </li>
                      {/*end:Nav item*/}
                      {/*begin:Nav item*/}
                      <li className="nav-item mx-lg-1">
                        <a
                          className="nav-link py-3 py-lg-6 text-active-primary"
                          href="#"
                          data-bs-toggle="tab"
                          data-bs-target="#kt_app_header_menu_pages_account"
                        >
                          Account
                        </a>
                      </li>
                      {/*end:Nav item*/}
                      {/*begin:Nav item*/}
                      <li className="nav-item mx-lg-1">
                        <a
                          className="nav-link py-3 py-lg-6 text-active-primary"
                          href="#"
                          data-bs-toggle="tab"
                          data-bs-target="#kt_app_header_menu_pages_authentication"
                        >
                          Authentication
                        </a>
                      </li>
                      {/*end:Nav item*/}
                      {/*begin:Nav item*/}
                      <li className="nav-item mx-lg-1">
                        <a
                          className="nav-link py-3 py-lg-6 text-active-primary"
                          href="#"
                          data-bs-toggle="tab"
                          data-bs-target="#kt_app_header_menu_pages_utilities"
                        >
                          Utilities
                        </a>
                      </li>
                      {/*end:Nav item*/}
                      {/*begin:Nav item*/}
                      <li className="nav-item mx-lg-1">
                        <a
                          className="nav-link py-3 py-lg-6 text-active-primary"
                          href="#"
                          data-bs-toggle="tab"
                          data-bs-target="#kt_app_header_menu_pages_widgets"
                        >
                          Widgets
                        </a>
                      </li>
                      {/*end:Nav item*/}
                    </ul>
                  </div>
                  {/*end:Tabs nav*/}
                  {/*begin:Tab content*/}
                  <div className="tab-content py-4 py-lg-8 px-lg-7">
                    {/*begin:Tab pane*/}
                    <div
                      className="tab-pane active w-lg-1000px"
                      id="kt_app_header_menu_pages_pages"
                    >
                      {/*begin:Row*/}
                      <div className="row">
                        {/*begin:Col*/}
                        <div className="col-lg-8">
                          {/*begin:Row*/}
                          <div className="row">
                            {/*begin:Col*/}
                            <div className="col-lg-3 mb-6 mb-lg-0">
                              {/*begin:Menu heading*/}
                              <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                User Profiles
                              </h4>
                              {/*end:Menu heading*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item p-0 m-0">
                                {/*begin:Menu link*/}
                                <a
                                  href="../pages/user-profile/overview.html"
                                  className="menu-link"
                                >
                                  <span className="menu-title">
                                    Overview
                                  </span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item p-0 m-0">
                                {/*begin:Menu link*/}
                                <a
                                  href="../pages/user-profile/projects.html"
                                  className="menu-link"
                                >
                                  <span className="menu-title">
                                    Projects
                                  </span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item p-0 m-0">
                                {/*begin:Menu link*/}
                                <a
                                  href="../pages/user-profile/campaigns.html"
                                  className="menu-link"
                                >
                                  <span className="menu-title">
                                    Campaigns
                                  </span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item p-0 m-0">
                                {/*begin:Menu link*/}
                                <a
                                  href="../pages/user-profile/documents.html"
                                  className="menu-link"
                                >
                                  <span className="menu-title">
                                    Documents
                                  </span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item p-0 m-0">
                                {/*begin:Menu link*/}
                                <a
                                  href="../pages/user-profile/followers.html"
                                  className="menu-link"
                                >
                                  <span className="menu-title">
                                    Followers
                                  </span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item p-0 m-0">
                                {/*begin:Menu link*/}
                                <a
                                  href="../pages/user-profile/activity.html"
                                  className="menu-link"
                                >
                                  <span className="menu-title">
                                    Activity
                                  </span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                            </div>
                            {/*end:Col*/}
                            {/*begin:Col*/}
                            <div className="col-lg-3 mb-6 mb-lg-0">
                              {/*begin:Menu section*/}
                              <div className="mb-6">
                                {/*begin:Menu heading*/}
                                <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                  Corporate
                                </h4>
                                {/*end:Menu heading*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="../pages/about.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">
                                      About
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="../pages/team.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">
                                      Our Team
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="../pages/contact.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">
                                      Contact Us
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="../pages/licenses.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">
                                      Licenses
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="../pages/sitemap.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">
                                      Sitemap
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                              </div>
                              {/*end:Menu section*/}
                              {/*begin:Menu section*/}
                              <div className="mb-0">
                                {/*begin:Menu heading*/}
                                <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                  Careers
                                </h4>
                                {/*end:Menu heading*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="../pages/careers/list.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">
                                      Careers List
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="../pages/careers/apply.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">
                                      Careers Apply
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                              </div>
                              {/*end:Menu section*/}
                            </div>
                            {/*end:Col*/}
                            {/*begin:Col*/}
                            <div className="col-lg-3 mb-6 mb-lg-0">
                              {/*begin:Menu section*/}
                              <div className="mb-6">
                                {/*begin:Menu heading*/}
                                <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                  FAQ
                                </h4>
                                {/*end:Menu heading*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="../pages/faq/classic.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">
                                      FAQ Classic
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="../pages/faq/extended.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">
                                      FAQ Extended
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                              </div>
                              {/*end:Menu section*/}
                              {/*begin:Menu section*/}
                              <div className="mb-6">
                                {/*begin:Menu heading*/}
                                <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                  Blog
                                </h4>
                                {/*end:Menu heading*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="../pages/blog/home.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">
                                      Blog Home
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="../pages/blog/post.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">
                                      Blog Post
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                              </div>
                              {/*end:Menu section*/}
                              {/*begin:Menu section*/}
                              <div className="mb-0">
                                {/*begin:Menu heading*/}
                                <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                  Pricing
                                </h4>
                                {/*end:Menu heading*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="../pages/pricing.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">
                                      Column Pricing
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="../pages/pricing/table.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">
                                      Table Pricing
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                              </div>
                              {/*end:Menu section*/}
                            </div>
                            {/*end:Col*/}
                            {/*begin:Col*/}
                            <div className="col-lg-3 mb-6 mb-lg-0">
                              {/*begin:Menu section*/}
                              <div className="mb-0">
                                {/*begin:Menu heading*/}
                                <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                  Social
                                </h4>
                                {/*end:Menu heading*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="../pages/social/feeds.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">
                                      Feeds
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="../pages/social/activity.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">
                                      Activty
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="../pages/social/followers.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">
                                      Followers
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="../pages/social/settings.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">
                                      Settings
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                              </div>
                              {/*end:Menu section*/}
                            </div>
                            {/*end:Col*/}
                          </div>
                          {/*end:Row*/}
                        </div>
                        {/*end:Col*/}
                        {/*begin:Col*/}
                        <div className="col-lg-4">
                          <img
                            src="../assets/media/stock/600x600/img-82.jpg"
                            className="rounded mw-100"
                            alt=""
                          />
                        </div>
                        {/*end:Col*/}
                      </div>
                      {/*end:Row*/}
                    </div>
                    {/*end:Tab pane*/}
                    {/*begin:Tab pane*/}
                    <div
                      className="tab-pane w-lg-600px"
                      id="kt_app_header_menu_pages_account"
                    >
                      {/*begin:Row*/}
                      <div className="row">
                        {/*begin:Col*/}
                        <div className="col-lg-5 mb-6 mb-lg-0">
                          {/*begin:Row*/}
                          <div className="row">
                            {/*begin:Col*/}
                            <div className="col-lg-6">
                              {/*begin:Menu item*/}
                              <div className="menu-item p-0 m-0">
                                {/*begin:Menu link*/}
                                <a
                                  href="../account/overview.html"
                                  className="menu-link"
                                >
                                  <span className="menu-title">
                                    Overview
                                  </span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item p-0 m-0">
                                {/*begin:Menu link*/}
                                <a
                                  href="../account/settings.html"
                                  className="menu-link"
                                >
                                  <span className="menu-title">
                                    Settings
                                  </span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item p-0 m-0">
                                {/*begin:Menu link*/}
                                <a
                                  href="../account/security.html"
                                  className="menu-link"
                                >
                                  <span className="menu-title">
                                    Security
                                  </span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item p-0 m-0">
                                {/*begin:Menu link*/}
                                <a
                                  href="../account/activity.html"
                                  className="menu-link"
                                >
                                  <span className="menu-title">
                                    Activity
                                  </span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item p-0 m-0">
                                {/*begin:Menu link*/}
                                <a
                                  href="../account/billing.html"
                                  className="menu-link"
                                >
                                  <span className="menu-title">
                                    Billing
                                  </span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                            </div>
                            {/*end:Col*/}
                            {/*begin:Col*/}
                            <div className="col-lg-6">
                              {/*begin:Menu item*/}
                              <div className="menu-item p-0 m-0">
                                {/*begin:Menu link*/}
                                <a
                                  href="../account/statements.html"
                                  className="menu-link"
                                >
                                  <span className="menu-title">
                                    Statements
                                  </span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item p-0 m-0">
                                {/*begin:Menu link*/}
                                <a
                                  href="../account/referrals.html"
                                  className="menu-link"
                                >
                                  <span className="menu-title">
                                    Referrals
                                  </span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item p-0 m-0">
                                {/*begin:Menu link*/}
                                <a
                                  href="../account/api-keys.html"
                                  className="menu-link"
                                >
                                  <span className="menu-title">
                                    API Keys
                                  </span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item p-0 m-0">
                                {/*begin:Menu link*/}
                                <a
                                  href="../account/logs.html"
                                  className="menu-link"
                                >
                                  <span className="menu-title">
                                    Logs
                                  </span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                            </div>
                            {/*end:Col*/}
                          </div>
                          {/*end:Row*/}
                        </div>
                        {/*end:Col*/}
                        {/*begin:Col*/}
                        <div className="col-lg-7">
                          <img
                            src="../assets/media/stock/900x600/46.jpg"
                            className="rounded mw-100"
                            alt=""
                          />
                        </div>
                        {/*end:Col*/}
                      </div>
                      {/*end:Row*/}
                    </div>
                    {/*end:Tab pane*/}
                    {/*begin:Tab pane*/}
                    <div
                      className="tab-pane w-lg-1000px"
                      id="kt_app_header_menu_pages_authentication"
                    >
                      {/*begin:Row*/}
                      <div className="row">
                        {/*begin:Col*/}
                        <div className="col-lg-3 mb-6 mb-lg-0">
                          {/*begin:Menu section*/}
                          <div className="mb-6">
                            {/*begin:Menu heading*/}
                            <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                              Corporate Layout
                            </h4>
                            {/*end:Menu heading*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item p-0 m-0">
                              {/*begin:Menu link*/}
                              <a
                                href="../authentication/layouts/corporate/sign-in.html"
                                className="menu-link"
                              >
                                <span className="menu-title">
                                  Sign-In
                                </span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item p-0 m-0">
                              {/*begin:Menu link*/}
                              <a
                                href="../authentication/layouts/corporate/sign-up.html"
                                className="menu-link"
                              >
                                <span className="menu-title">
                                  Sign-Up
                                </span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item p-0 m-0">
                              {/*begin:Menu link*/}
                              <a
                                href="../authentication/layouts/corporate/two-factor.html"
                                className="menu-link"
                              >
                                <span className="menu-title">
                                  Two-Factor
                                </span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item p-0 m-0">
                              {/*begin:Menu link*/}
                              <a
                                href="../authentication/layouts/corporate/reset-password.html"
                                className="menu-link"
                              >
                                <span className="menu-title">
                                  Reset Password
                                </span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item p-0 m-0">
                              {/*begin:Menu link*/}
                              <a
                                href="../authentication/layouts/corporate/new-password.html"
                                className="menu-link"
                              >
                                <span className="menu-title">
                                  New Password
                                </span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                          </div>
                          {/*end:Menu section*/}
                          {/*begin:Menu section*/}
                          <div className="mb-0">
                            {/*begin:Menu heading*/}
                            <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                              Overlay Layout
                            </h4>
                            {/*end:Menu heading*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item p-0 m-0">
                              {/*begin:Menu link*/}
                              <a
                                href="../authentication/layouts/overlay/sign-in.html"
                                className="menu-link"
                              >
                                <span className="menu-title">
                                  Sign-In
                                </span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item p-0 m-0">
                              {/*begin:Menu link*/}
                              <a
                                href="../authentication/layouts/overlay/sign-up.html"
                                className="menu-link"
                              >
                                <span className="menu-title">
                                  Sign-Up
                                </span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item p-0 m-0">
                              {/*begin:Menu link*/}
                              <a
                                href="../authentication/layouts/overlay/two-factor.html"
                                className="menu-link"
                              >
                                <span className="menu-title">
                                  Two-Factor
                                </span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item p-0 m-0">
                              {/*begin:Menu link*/}
                              <a
                                href="../authentication/layouts/overlay/reset-password.html"
                                className="menu-link"
                              >
                                <span className="menu-title">
                                  Reset Password
                                </span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item p-0 m-0">
                              {/*begin:Menu link*/}
                              <a
                                href="../authentication/layouts/overlay/new-password.html"
                                className="menu-link"
                              >
                                <span className="menu-title">
                                  New Password
                                </span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                          </div>
                          {/*end:Menu section*/}
                        </div>
                        {/*end:Col*/}
                        {/*begin:Col*/}
                        <div className="col-lg-3 mb-6 mb-lg-0">
                          {/*begin:Menu section*/}
                          <div className="mb-6">
                            {/*begin:Menu heading*/}
                            <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                              Creative Layout
                            </h4>
                            {/*end:Menu heading*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item p-0 m-0">
                              {/*begin:Menu link*/}
                              <a
                                href="../authentication/layouts/creative/sign-in.html"
                                className="menu-link"
                              >
                                <span className="menu-title">
                                  Sign-in
                                </span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item p-0 m-0">
                              {/*begin:Menu link*/}
                              <a
                                href="../authentication/layouts/creative/sign-up.html"
                                className="menu-link"
                              >
                                <span className="menu-title">
                                  Sign-up
                                </span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item p-0 m-0">
                              {/*begin:Menu link*/}
                              <a
                                href="../authentication/layouts/creative/two-factor.html"
                                className="menu-link"
                              >
                                <span className="menu-title">
                                  Two-Factor
                                </span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item p-0 m-0">
                              {/*begin:Menu link*/}
                              <a
                                href="../authentication/layouts/creative/reset-password.html"
                                className="menu-link"
                              >
                                <span className="menu-title">
                                  Reset Password
                                </span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item p-0 m-0">
                              {/*begin:Menu link*/}
                              <a
                                href="../authentication/layouts/creative/new-password.html"
                                className="menu-link"
                              >
                                <span className="menu-title">
                                  New Password
                                </span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                          </div>
                          {/*end:Menu section*/}
                          {/*begin:Menu section*/}
                          <div className="mb-6">
                            {/*begin:Menu heading*/}
                            <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                              Fancy Layout
                            </h4>
                            {/*end:Menu heading*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item p-0 m-0">
                              {/*begin:Menu link*/}
                              <a
                                href="../authentication/layouts/fancy/sign-in.html"
                                className="menu-link"
                              >
                                <span className="menu-title">
                                  Sign-In
                                </span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item p-0 m-0">
                              {/*begin:Menu link*/}
                              <a
                                href="../authentication/layouts/fancy/sign-up.html"
                                className="menu-link"
                              >
                                <span className="menu-title">
                                  Sign-Up
                                </span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item p-0 m-0">
                              {/*begin:Menu link*/}
                              <a
                                href="../authentication/layouts/fancy/two-factor.html"
                                className="menu-link"
                              >
                                <span className="menu-title">
                                  Two-Factor
                                </span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item p-0 m-0">
                              {/*begin:Menu link*/}
                              <a
                                href="../authentication/layouts/fancy/reset-password.html"
                                className="menu-link"
                              >
                                <span className="menu-title">
                                  Reset Password
                                </span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item p-0 m-0">
                              {/*begin:Menu link*/}
                              <a
                                href="../authentication/layouts/fancy/new-password.html"
                                className="menu-link"
                              >
                                <span className="menu-title">
                                  New Password
                                </span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                          </div>
                          {/*end:Menu section*/}
                        </div>
                        {/*end:Col*/}
                        {/*begin:Col*/}
                        <div className="col-lg-3 mb-6 mb-lg-0">
                          {/*begin:Menu section*/}
                          <div className="mb-0">
                            {/*begin:Menu heading*/}
                            <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                              General
                            </h4>
                            {/*end:Menu heading*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item p-0 m-0">
                              {/*begin:Menu link*/}
                              <a
                                href="../authentication/extended/multi-steps-sign-up.html"
                                className="menu-link"
                              >
                                <span className="menu-title">
                                  Multi-Steps Sign-Up
                                </span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item p-0 m-0">
                              {/*begin:Menu link*/}
                              <a
                                href="../authentication/general/welcome.html"
                                className="menu-link"
                              >
                                <span className="menu-title">
                                  Welcome Message
                                </span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item p-0 m-0">
                              {/*begin:Menu link*/}
                              <a
                                href="../authentication/general/verify-email.html"
                                className="menu-link"
                              >
                                <span className="menu-title">
                                  Verify Email
                                </span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item p-0 m-0">
                              {/*begin:Menu link*/}
                              <a
                                href="../authentication/general/coming-soon.html"
                                className="menu-link"
                              >
                                <span className="menu-title">
                                  Coming Soon
                                </span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item p-0 m-0">
                              {/*begin:Menu link*/}
                              <a
                                href="../authentication/general/password-confirmation.html"
                                className="menu-link"
                              >
                                <span className="menu-title">
                                  Password Confirmation
                                </span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item p-0 m-0">
                              {/*begin:Menu link*/}
                              <a
                                href="../authentication/general/account-deactivated.html"
                                className="menu-link"
                              >
                                <span className="menu-title">
                                  Account Deactivation
                                </span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item p-0 m-0">
                              {/*begin:Menu link*/}
                              <a
                                href="../authentication/general/error-404.html"
                                className="menu-link"
                              >
                                <span className="menu-title">
                                  Error 404
                                </span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item p-0 m-0">
                              {/*begin:Menu link*/}
                              <a
                                href="../authentication/general/error-500.html"
                                className="menu-link"
                              >
                                <span className="menu-title">
                                  Error 500
                                </span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                          </div>
                          {/*end:Menu section*/}
                        </div>
                        {/*end:Col*/}
                        {/*begin:Col*/}
                        <div className="col-lg-3 mb-6 mb-lg-0">
                          {/*begin:Menu section*/}
                          <div className="mb-0">
                            {/*begin:Menu heading*/}
                            <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                              Email Templates
                            </h4>
                            {/*end:Menu heading*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item p-0 m-0">
                              {/*begin:Menu link*/}
                              <a
                                href="../authentication/email/welcome-message.html"
                                className="menu-link"
                              >
                                <span className="menu-title">
                                  Welcome Message
                                </span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item p-0 m-0">
                              {/*begin:Menu link*/}
                              <a
                                href="../authentication/email/reset-password.html"
                                className="menu-link"
                              >
                                <span className="menu-title">
                                  Reset Password
                                </span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item p-0 m-0">
                              {/*begin:Menu link*/}
                              <a
                                href="../authentication/email/subscription-confirmed.html"
                                className="menu-link"
                              >
                                <span className="menu-title">
                                  Subscription Confirmed
                                </span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item p-0 m-0">
                              {/*begin:Menu link*/}
                              <a
                                href="../authentication/email/card-declined.html"
                                className="menu-link"
                              >
                                <span className="menu-title">
                                  Credit Card Declined
                                </span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item p-0 m-0">
                              {/*begin:Menu link*/}
                              <a
                                href="../authentication/email/promo-1.html"
                                className="menu-link"
                              >
                                <span className="menu-title">
                                  Promo 1
                                </span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item p-0 m-0">
                              {/*begin:Menu link*/}
                              <a
                                href="../authentication/email/promo-2.html"
                                className="menu-link"
                              >
                                <span className="menu-title">
                                  Promo 2
                                </span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item p-0 m-0">
                              {/*begin:Menu link*/}
                              <a
                                href="../authentication/email/promo-3.html"
                                className="menu-link"
                              >
                                <span className="menu-title">
                                  Promo 3
                                </span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                          </div>
                          {/*end:Menu section*/}
                        </div>
                        {/*end:Col*/}
                      </div>
                      {/*end:Row*/}
                    </div>
                    {/*end:Tab pane*/}
                    {/*begin:Tab pane*/}
                    <div
                      className="tab-pane w-lg-1000px"
                      id="kt_app_header_menu_pages_utilities"
                    >
                      {/*begin:Row*/}
                      <div className="row">
                        {/*begin:Col*/}
                        <div className="col-lg-7">
                          {/*begin:Row*/}
                          <div className="row">
                            {/*begin:Col*/}
                            <div className="col-lg-4 mb-6 mb-lg-0">
                              {/*begin:Menu section*/}
                              <div className="mb-0">
                                {/*begin:Menu heading*/}
                                <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                  General Modals
                                </h4>
                                {/*end:Menu heading*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="../utilities/modals/general/invite-friends.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">
                                      Invite Friends
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="../utilities/modals/general/view-users.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">
                                      View Users
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="../utilities/modals/general/select-users.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">
                                      Select Users
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="../utilities/modals/general/upgrade-plan.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">
                                      Upgrade Plan
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="../utilities/modals/general/share-earn.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">
                                      Share &amp; Earn
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="../utilities/modals/forms/new-target.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">
                                      New Target
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="../utilities/modals/forms/new-card.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">
                                      New Card
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="../utilities/modals/forms/new-address.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">
                                      New Address
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="../utilities/modals/forms/create-api-key.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">
                                      Create API Key
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="../utilities/modals/forms/bidding.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">
                                      Bidding
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                              </div>
                              {/*end:Menu section*/}
                            </div>
                            {/*end:Col*/}
                            {/*begin:Col*/}
                            <div className="col-lg-4 mb-6 mb-lg-0">
                              {/*begin:Menu section*/}
                              <div className="mb-6">
                                {/*begin:Menu heading*/}
                                <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                  Advanced Modals
                                </h4>
                                {/*end:Menu heading*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="../utilities/modals/wizards/create-app.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">
                                      Create App
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="../utilities/modals/wizards/create-campaign.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">
                                      Create Campaign
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="../utilities/modals/wizards/create-account.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">
                                      Create Business Acc
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="../utilities/modals/wizards/create-project.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">
                                      Create Project
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="../utilities/modals/wizards/top-up-wallet.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">
                                      Top Up Wallet
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="../utilities/modals/wizards/offer-a-deal.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">
                                      Offer a Deal
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="../utilities/modals/wizards/two-factor-authentication.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">
                                      Two Factor Auth
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                              </div>
                              {/*end:Menu section*/}
                              {/*begin:Menu section*/}
                              <div className="mb-0">
                                {/*begin:Menu heading*/}
                                <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                  Search
                                </h4>
                                {/*end:Menu heading*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="../utilities/search/horizontal.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">
                                      Horizontal
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="../utilities/search/vertical.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">
                                      Vertical
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="../utilities/modals/search/users.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">
                                      Users
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="../utilities/modals/search/select-location.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">
                                      Select Location
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                              </div>
                              {/*end:Menu section*/}
                            </div>
                            {/*end:Col*/}
                            {/*begin:Col*/}
                            <div className="col-lg-4 mb-6 mb-lg-0">
                              {/*begin:Menu section*/}
                              <div className="mb-0">
                                {/*begin:Menu heading*/}
                                <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                  Wizards
                                </h4>
                                {/*end:Menu heading*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="../utilities/wizards/horizontal.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">
                                      Horizontal
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="../utilities/wizards/vertical.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">
                                      Vertical
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="../utilities/wizards/two-factor-authentication.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">
                                      Two Factor Auth
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="../utilities/wizards/create-app.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">
                                      Create App
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="../utilities/wizards/create-campaign.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">
                                      Create Campaign
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="../utilities/wizards/create-account.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">
                                      Create Account
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="../utilities/wizards/create-project.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">
                                      Create Project
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="../utilities/modals/wizards/top-up-wallet.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">
                                      Top Up Wallet
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="../utilities/wizards/offer-a-deal.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">
                                      Offer a Deal
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                              </div>
                              {/*end:Menu section*/}
                            </div>
                            {/*end:Col*/}
                          </div>
                          {/*end:Row*/}
                        </div>
                        {/*end:Col*/}
                        {/*begin:Col*/}
                        <div className="col-lg-5 pe-lg-5">
                          <img
                            src="../assets/media/stock/600x600/img-84.jpg"
                            className="rounded mw-100"
                            alt=""
                          />
                        </div>
                        {/*end:Col*/}
                      </div>
                      {/*end:Row*/}
                    </div>
                    {/*end:Tab pane*/}
                    {/*begin:Tab pane*/}
                    <div
                      className="tab-pane w-lg-500px"
                      id="kt_app_header_menu_pages_widgets"
                    >
                      {/*begin:Row*/}
                      <div className="row">
                        {/*begin:Col*/}
                        <div className="col-lg-4 mb-6 mb-lg-0">
                          {/*begin:Menu item*/}
                          <div className="menu-item p-0 m-0">
                            {/*begin:Menu link*/}
                            <a
                              href="../widgets/lists.html"
                              className="menu-link"
                            >
                              <span className="menu-title">Lists</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item p-0 m-0">
                            {/*begin:Menu link*/}
                            <a
                              href="../widgets/statistics.html"
                              className="menu-link"
                            >
                              <span className="menu-title">
                                Statistics
                              </span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item p-0 m-0">
                            {/*begin:Menu link*/}
                            <a
                              href="../widgets/charts.html"
                              className="menu-link"
                            >
                              <span className="menu-title">Charts</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item p-0 m-0">
                            {/*begin:Menu link*/}
                            <a
                              href="../widgets/mixed.html"
                              className="menu-link"
                            >
                              <span className="menu-title">Mixed</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item p-0 m-0">
                            {/*begin:Menu link*/}
                            <a
                              href="../widgets/tables.html"
                              className="menu-link"
                            >
                              <span className="menu-title">Tables</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item p-0 m-0">
                            {/*begin:Menu link*/}
                            <a
                              href="../widgets/feeds.html"
                              className="menu-link"
                            >
                              <span className="menu-title">Feeds</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                        </div>
                        {/*end:Col*/}
                        {/*begin:Col*/}
                        <div className="col-lg-8">
                          <img
                            src="../assets/media/stock/900x600/44.jpg"
                            className="rounded mw-100"
                            alt=""
                          />
                        </div>
                        {/*end:Col*/}
                      </div>
                      {/*end:Row*/}
                    </div>
                    {/*end:Tab pane*/}
                  </div>
                  {/*end:Tab content*/}
                </div>
                {/*end:Pages menu*/}
              </div>
              {/*end:Menu sub*/}
            </div>
            {/*end:Menu item*/}
            {/*begin:Menu item*/}
            <div
              data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
              data-kt-menu-placement="bottom-start"
              className="menu-item menu-lg-down-accordion menu-sub-lg-down-indention me-0 me-lg-2"
            >
              {/*begin:Menu link*/}
              <span className="menu-link">
                <span className="menu-title">Apps</span>
                <span className="menu-arrow d-lg-none" />
              </span>
              {/*end:Menu link*/}
              {/*begin:Menu sub*/}
              <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown px-lg-2 py-lg-4 w-lg-250px">
                {/*begin:Menu item*/}
                <div
                  data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                  data-kt-menu-placement="right-start"
                  className="menu-item menu-lg-down-accordion"
                >
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                    <span className="menu-icon">
                      <i className="ki-duotone ki-rocket fs-2">
                        <span className="path1" />
                        <span className="path2" />
                      </i>
                    </span>
                    <span className="menu-title">Projects</span>
                    <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="../apps/projects/list.html"
                      >
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
                        href="../apps/projects/project.html"
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
                        href="../apps/projects/targets.html"
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
                      <a
                        className="menu-link"
                        href="../apps/projects/budget.html"
                      >
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
                      <a
                        className="menu-link"
                        href="../apps/projects/users.html"
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
                        href="../apps/projects/files.html"
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
                        href="../apps/projects/activity.html"
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
                        href="../apps/projects/settings.html"
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
                  data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                  data-kt-menu-placement="right-start"
                  className="menu-item menu-lg-down-accordion"
                >
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                    <span className="menu-icon">
                      <i className="ki-duotone ki-handcart fs-2" />
                    </span>
                    <span className="menu-title">eCommerce</span>
                    <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                    {/*begin:Menu item*/}
                    <div
                      data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                      data-kt-menu-placement="right-start"
                      className="menu-item menu-lg-down-accordion"
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
                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="../apps/ecommerce/catalog/products.html"
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
                            href="../apps/ecommerce/catalog/categories.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">
                              Categories
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
                            href="../apps/ecommerce/catalog/add-product.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">
                              Add Product
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
                            href="../apps/ecommerce/catalog/edit-product.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">
                              Edit Product
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
                            href="../apps/ecommerce/catalog/add-category.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">
                              Add Category
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
                            href="../apps/ecommerce/catalog/edit-category.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">
                              Edit Category
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
                      className="menu-item menu-accordion menu-sub-indention"
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
                            href="../apps/ecommerce/sales/listing.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">
                              Orders Listing
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
                            href="../apps/ecommerce/sales/details.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">
                              Order Details
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
                            href="../apps/ecommerce/sales/add-order.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">
                              Add Order
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
                            href="../apps/ecommerce/sales/edit-order.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">
                              Edit Order
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
                      className="menu-item menu-accordion menu-sub-indention"
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
                            href="../apps/ecommerce/customers/listing.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">
                              Customers Listing
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
                            href="../apps/ecommerce/customers/details.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">
                              Customers Details
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
                      className="menu-item menu-accordion menu-sub-indention"
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
                            href="../apps/ecommerce/reports/view.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">
                              Products Viewed
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
                            href="../apps/ecommerce/reports/sales.html"
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
                            href="../apps/ecommerce/reports/returns.html"
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
                            href="../apps/ecommerce/reports/customer-orders.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">
                              Customer Orders
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
                            href="../apps/ecommerce/reports/shipping.html"
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
                        href="../apps/ecommerce/settings.html"
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
                  data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                  data-kt-menu-placement="right-start"
                  className="menu-item menu-lg-down-accordion"
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
                  <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="../apps/support-center/overview.html"
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
                      data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                      data-kt-menu-placement="right-start"
                      className="menu-item menu-lg-down-accordion"
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
                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="../apps/support-center/tickets/list.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">
                              Ticket List
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
                            href="../apps/support-center/tickets/view.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">
                              Ticket View
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
                      data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                      data-kt-menu-placement="right-start"
                      className="menu-item menu-lg-down-accordion"
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
                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="../apps/support-center/tutorials/list.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">
                              Tutorials List
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
                            href="../apps/support-center/tutorials/post.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">
                              Tutorials Post
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
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="../apps/support-center/faq.html"
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
                        href="../apps/support-center/licenses.html"
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
                        href="../apps/support-center/contact.html"
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
                  data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                  data-kt-menu-placement="right-start"
                  className="menu-item menu-lg-down-accordion"
                >
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                    <span className="menu-icon">
                      <i className="ki-duotone ki-shield-tick fs-2">
                        <span className="path1" />
                        <span className="path2" />
                      </i>
                    </span>
                    <span className="menu-title">User Management</span>
                    <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                    {/*begin:Menu item*/}
                    <div
                      data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                      data-kt-menu-placement="right-start"
                      className="menu-item menu-lg-down-accordion"
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
                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="../apps/user-management/users/list.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">
                              Users List
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
                            href="../apps/user-management/users/view.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">
                              View User
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
                      data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                      data-kt-menu-placement="right-start"
                      className="menu-item menu-lg-down-accordion"
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
                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="../apps/user-management/roles/list.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">
                              Roles List
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
                            href="../apps/user-management/roles/view.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">
                              View Roles
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
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="../apps/user-management/permissions.html"
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
                  data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                  data-kt-menu-placement="right-start"
                  className="menu-item menu-lg-down-accordion"
                >
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                    <span className="menu-icon">
                      <i className="ki-duotone ki-phone fs-2">
                        <span className="path1" />
                        <span className="path2" />
                      </i>
                    </span>
                    <span className="menu-title">Contacts</span>
                    <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="../apps/contacts/getting-started.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">
                          Getting Started
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
                        href="../apps/contacts/add-contact.html"
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
                        href="../apps/contacts/edit-contact.html"
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
                        href="../apps/contacts/view-contact.html"
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
                  data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                  data-kt-menu-placement="right-start"
                  className="menu-item menu-lg-down-accordion"
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
                    <span className="menu-title">Subscriptions</span>
                    <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="../apps/subscriptions/getting-started.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">
                          Getting Started
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
                        href="../apps/subscriptions/list.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">
                          Subscription List
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
                        href="../apps/subscriptions/add.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">
                          Add Subscription
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
                        href="../apps/subscriptions/view.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">
                          View Subscription
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
                  data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                  data-kt-menu-placement="right-start"
                  className="menu-item menu-lg-down-accordion"
                >
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                    <span className="menu-icon">
                      <i className="ki-duotone ki-briefcase fs-2">
                        <span className="path1" />
                        <span className="path2" />
                      </i>
                    </span>
                    <span className="menu-title">Customers</span>
                    <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="../apps/customers/getting-started.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">
                          Getting Started
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
                        href="../apps/customers/list.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">
                          Customer Listing
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
                        href="../apps/customers/view.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">
                          Customer Details
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
                  data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                  data-kt-menu-placement="right-start"
                  className="menu-item menu-lg-down-accordion"
                >
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                    <span className="menu-icon">
                      <i className="ki-duotone ki-credit-cart fs-2">
                        <span className="path1" />
                        <span className="path2" />
                      </i>
                    </span>
                    <span className="menu-title">
                      Invoice Management
                    </span>
                    <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                    {/*begin:Menu item*/}
                    <div
                      data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                      data-kt-menu-placement="right-start"
                      className="menu-item menu-lg-down-accordion"
                    >
                      {/*begin:Menu link*/}
                      <span className="menu-link">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Profile</span>
                        <span className="menu-arrow" />
                      </span>
                      {/*end:Menu link*/}
                      {/*begin:Menu sub*/}
                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="../apps/invoices/view/invoice-1.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">
                              Invoice 1
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
                            href="../apps/invoices/view/invoice-2.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">
                              Invoice 2
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
                            href="../apps/invoices/view/invoice-3.html"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">
                              Invoice 3
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
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="../apps/invoices/create.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">
                          Create Invoice
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
                  data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                  data-kt-menu-placement="right-start"
                  className="menu-item menu-lg-down-accordion"
                >
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                    <span className="menu-icon">
                      <i className="ki-duotone ki-file-added fs-2">
                        <span className="path1" />
                        <span className="path2" />
                      </i>
                    </span>
                    <span className="menu-title">File Manager</span>
                    <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="../apps/file-manager/folders.html"
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
                        href="../apps/file-manager/files.html"
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
                        href="../apps/file-manager/blank.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">
                          Blank Directory
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
                        href="../apps/file-manager/settings.html"
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
                  data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                  data-kt-menu-placement="right-start"
                  className="menu-item menu-lg-down-accordion"
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
                  <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="../apps/inbox/listing.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Messages</span>
                        <span className="menu-badge">
                          <span className="badge badge-light-success">
                            3
                          </span>
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
                        href="../apps/inbox/compose.html"
                      >
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
                      <a
                        className="menu-link"
                        href="../apps/inbox/reply.html"
                      >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">
                          View &amp; Reply
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
                  data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                  data-kt-menu-placement="right-start"
                  className="menu-item menu-lg-down-accordion"
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
                  <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="../apps/chat/private.html"
                      >
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
                      <a
                        className="menu-link"
                        href="../apps/chat/group.html"
                      >
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
                      <a
                        className="menu-link"
                        href="../apps/chat/drawer.html"
                      >
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
                  <a className="menu-link" href="../apps/calendar.html">
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
              </div>
              {/*end:Menu sub*/}
            </div>
            {/*end:Menu item*/}
            {/*begin:Menu item*/}
            <div
              data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
              data-kt-menu-placement="bottom-start"
              className="menu-item here show"
            >
              {/*begin:Menu link*/}
              <span className="menu-link">
                <span className="menu-title">Layouts</span>
                <span className="menu-arrow d-lg-none" />
              </span>
              {/*end:Menu link*/}
              {/*begin:Menu sub*/}
              <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown p-0 w-100 w-lg-900px w-xxl-950px">
                {/*begin:Dashboards menu*/}
                <div
                  className="menu-active-bg pt-1 pb-3 px-3 py-lg-6 px-lg-6"
                  data-kt-menu-dismiss="true"
                >
                  {/*begin:Row*/}
                  <div className="row">
                    {/*begin:Col*/}
                    <div className="col-lg-7">
                      {/*begin:Row*/}
                      <div className="row">
                        {/*begin:Col*/}
                        <div className="col-lg-4 mb-3">
                          {/*begin:Heading*/}
                          <h4 className="fs-6 fs-lg-4 text-gray-800 fw-bold mt-3 mb-3 ms-4">
                            Layouts
                          </h4>
                          {/*end:Heading*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item p-0 m-0">
                            {/*begin:Menu link*/}
                            <a
                              href="../layouts/light-sidebar.html"
                              className="menu-link"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot bg-gray-300i h-6px w-6px" />
                              </span>
                              <span className="menu-title">
                                Light Sidebar
                              </span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item p-0 m-0">
                            {/*begin:Menu link*/}
                            <a
                              href="../layouts/dark-sidebar.html"
                              className="menu-link"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot bg-gray-300i h-6px w-6px" />
                              </span>
                              <span className="menu-title">
                                Dark Sidebar
                              </span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item p-0 m-0">
                            {/*begin:Menu link*/}
                            <a
                              href="../layouts/light-header.html"
                              className="menu-link"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot bg-gray-300i h-6px w-6px" />
                              </span>
                              <span className="menu-title">
                                Light Header
                              </span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item p-0 m-0">
                            {/*begin:Menu link*/}
                            <a
                              href="../layouts/dark-header.html"
                              className="menu-link"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot bg-gray-300i h-6px w-6px" />
                              </span>
                              <span className="menu-title">
                                Dark Header
                              </span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                        </div>
                        {/*end:Col*/}
                        {/*begin:Col*/}
                        <div className="col-lg-4 mb-3">
                          {/*begin:Heading*/}
                          <h4 className="fs-6 fs-lg-4 text-gray-800 fw-bold mt-3 mb-3 ms-4">
                            Toolbars
                          </h4>
                          {/*end:Heading*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item p-0 m-0">
                            {/*begin:Menu link*/}
                            <a
                              href="../toolbars/classic.html"
                              className="menu-link"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot bg-gray-300i h-6px w-6px" />
                              </span>
                              <span className="menu-title">
                                Classic
                              </span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item p-0 m-0">
                            {/*begin:Menu link*/}
                            <a
                              href="../toolbars/saas.html"
                              className="menu-link"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot bg-gray-300i h-6px w-6px" />
                              </span>
                              <span className="menu-title">SaaS</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item p-0 m-0">
                            {/*begin:Menu link*/}
                            <a
                              href="../toolbars/accounting.html"
                              className="menu-link"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot bg-gray-300i h-6px w-6px" />
                              </span>
                              <span className="menu-title">
                                Accounting
                              </span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item p-0 m-0">
                            {/*begin:Menu link*/}
                            <a
                              href="../toolbars/extended.html"
                              className="menu-link"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot bg-gray-300i h-6px w-6px" />
                              </span>
                              <span className="menu-title">
                                Extended
                              </span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item p-0 m-0">
                            {/*begin:Menu link*/}
                            <a
                              href="../toolbars/reports.html"
                              className="menu-link"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot bg-gray-300i h-6px w-6px" />
                              </span>
                              <span className="menu-title">
                                Reports
                              </span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                        </div>
                        {/*end:Col*/}
                        {/*begin:Col*/}
                        <div className="col-lg-4 mb-3">
                          {/*begin:Heading*/}
                          <h4 className="fs-6 fs-lg-4 text-gray-800 fw-bold mt-3 mb-3 ms-4">
                            Asides
                          </h4>
                          {/*end:Heading*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item p-0 m-0">
                            {/*begin:Menu link*/}
                            <a
                              href="aside-1.html"
                              className="menu-link"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot bg-gray-300i h-6px w-6px" />
                              </span>
                              <span className="menu-title">
                                Filters
                              </span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item p-0 m-0">
                            {/*begin:Menu link*/}
                            <a
                              href="aside-2.html"
                              className="menu-link"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot bg-gray-300i h-6px w-6px" />
                              </span>
                              <span className="menu-title">
                                Segments
                              </span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item p-0 m-0">
                            {/*begin:Menu link*/}
                            <a
                              href="aside-3.html"
                              className="menu-link"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot bg-gray-300i h-6px w-6px" />
                              </span>
                              <span className="menu-title">
                                Shipment History
                              </span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item p-0 m-0">
                            {/*begin:Menu link*/}
                            <a
                              href="aside-4.html"
                              className="menu-link"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot bg-gray-300i h-6px w-6px" />
                              </span>
                              <span className="menu-title">
                                Courier Activity
                              </span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item p-0 m-0">
                            {/*begin:Menu link*/}
                            <a
                              href="aside-5.html"
                              className="menu-link active"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot bg-gray-300i h-6px w-6px" />
                              </span>
                              <span className="menu-title">
                                Calendar
                              </span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                        </div>
                        {/*end:Col*/}
                      </div>
                      {/*end:Row*/}
                      <div className="separator separator-dashed mx-lg-5 mt-2 mb-6" />
                      {/*begin:Layout Builder*/}
                      <div className="d-flex flex-stack flex-wrap flex-lg-nowrap gap-2 mb-5 mb-lg-0 mx-lg-5">
                        <div className="d-flex flex-column me-5">
                          <div className="fs-6 fw-bold text-gray-800">
                            Layout Builder
                          </div>
                          <div className="fs-7 fw-semibold text-muted">
                            Customize, preview and export
                          </div>
                        </div>
                        <a
                          href="../layout-builder.html"
                          className="btn btn-sm btn-primary fw-bold"
                        >
                          Try Builder
                        </a>
                      </div>
                      {/*end:Layout Builder*/}
                    </div>
                    {/*end:Col*/}
                    {/*begin:Col*/}
                    <div className="col-lg-5 mb-3 py-lg-3 pe-lg-8 d-flex align-items-center">
                      <img
                        src="../assets/media/stock/900x600/45.jpg"
                        className="rounded mw-100"
                        alt=""
                      />
                    </div>
                    {/*end:Col*/}
                  </div>
                  {/*end:Row*/}
                </div>
                {/*end:Dashboards menu*/}
              </div>
              {/*end:Menu sub*/}
            </div>
            {/*end:Menu item*/}
            {/*begin:Menu item*/}
            <div
              data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
              data-kt-menu-placement="bottom-start"
              className="menu-item menu-lg-down-accordion menu-sub-lg-down-indention me-0 me-lg-2"
            >
              {/*begin:Menu link*/}
              <span className="menu-link">
                <span className="menu-title">Help</span>
                <span className="menu-arrow d-lg-none" />
              </span>
              {/*end:Menu link*/}
              {/*begin:Menu sub*/}
              <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown px-lg-2 py-lg-4 w-lg-200px">
                {/*begin:Menu item*/}
                <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a
                    className="menu-link"
                    href="https://preview.keenthemes.com/html/metronic/docs/base/utilities"
                    target="_blank"
                    title="Check out over 200 in-house components, plugins and ready for use solutions"
                    data-bs-toggle="tooltip"
                    data-bs-trigger="hover"
                    data-bs-dismiss="click"
                    data-bs-placement="right"
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
                    href="https://preview.keenthemes.com/html/metronic/docs"
                    target="_blank"
                    title="Check out the complete documentation"
                    data-bs-toggle="tooltip"
                    data-bs-trigger="hover"
                    data-bs-dismiss="click"
                    data-bs-placement="right"
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
                    href="https://preview.keenthemes.com/html/metronic/docs/getting-started/changelog"
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
                    <span className="menu-title">Changelog v8.2.9</span>
                  </a>
                  {/*end:Menu link*/}
                </div>
                {/*end:Menu item*/}
              </div>
              {/*end:Menu sub*/}
            </div>
            {/*end:Menu item*/}
          </div>
          {/*end::Menu*/}
        </div>
        {/*end::Menu wrapper*/}
        {/*begin::Navbar*/}
        <div className="app-navbar flex-shrink-0">
          {/*begin::Search*/}
          <div className="app-navbar-item align-items-stretch ms-1 ms-md-4">
            {/*begin::Search*/}
            <div
              id="kt_header_search"
              className="header-search d-flex align-items-stretch"
              data-kt-search-keypress="true"
              data-kt-search-min-length={2}
              data-kt-search-enter="enter"
              data-kt-search-layout="menu"
              data-kt-menu-trigger="auto"
              data-kt-menu-overflow="false"
              data-kt-menu-permanent="true"
              data-kt-menu-placement="bottom-end"
            >
              {/*begin::Search toggle*/}
              <div
                className="d-flex align-items-center"
                data-kt-search-element="toggle"
                id="kt_header_search_toggle"
              >
                <div className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px">
                  <i className="ki-duotone ki-magnifier fs-2">
                    <span className="path1" />
                    <span className="path2" />
                  </i>
                </div>
              </div>
              {/*end::Search toggle*/}
              {/*begin::Menu*/}
              <div
                data-kt-search-element="content"
                className="menu menu-sub menu-sub-dropdown p-7 w-325px w-md-375px"
              >
                {/*begin::Wrapper*/}
                <div data-kt-search-element="wrapper">
                  {/*begin::Form*/}
                  <form
                    data-kt-search-element="form"
                    className="w-100 position-relative mb-3"
                    autoComplete="off"
                  >
                    {/*begin::Icon*/}
                    <i className="ki-duotone ki-magnifier fs-2 text-gray-500 position-absolute top-50 translate-middle-y ms-0">
                      <span className="path1" />
                      <span className="path2" />
                    </i>
                    {/*end::Icon*/}
                    {/*begin::Input*/}
                    <input
                      type="text"
                      className="search-input form-control form-control-flush ps-10"
                      name="search"
                      defaultValue=""
                      placeholder="Search..."
                      data-kt-search-element="input"
                    />
                    {/*end::Input*/}
                    {/*begin::Spinner*/}
                    <span
                      className="search-spinner position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-1"
                      data-kt-search-element="spinner"
                    >
                      <span className="spinner-border h-15px w-15px align-middle text-gray-500" />
                    </span>
                    {/*end::Spinner*/}
                    {/*begin::Reset*/}
                    <span
                      className="search-reset btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 d-none"
                      data-kt-search-element="clear"
                    >
                      <i className="ki-duotone ki-cross fs-2 fs-lg-1 me-0">
                        <span className="path1" />
                        <span className="path2" />
                      </i>
                    </span>
                    {/*end::Reset*/}
                    {/*begin::Toolbar*/}
                    <div
                      className="position-absolute top-50 end-0 translate-middle-y"
                      data-kt-search-element="toolbar"
                    >
                      {/*begin::Preferences toggle*/}
                      <div
                        data-kt-search-element="preferences-show"
                        className="btn btn-icon w-20px btn-sm btn-active-color-primary me-1"
                        data-bs-toggle="tooltip"
                        title="Show search preferences"
                      >
                        <i className="ki-duotone ki-setting-2 fs-2">
                          <span className="path1" />
                          <span className="path2" />
                        </i>
                      </div>
                      {/*end::Preferences toggle*/}
                      {/*begin::Advanced search toggle*/}
                      <div
                        data-kt-search-element="advanced-options-form-show"
                        className="btn btn-icon w-20px btn-sm btn-active-color-primary"
                        data-bs-toggle="tooltip"
                        title="Show more search options"
                      >
                        <i className="ki-duotone ki-down fs-2" />
                      </div>
                      {/*end::Advanced search toggle*/}
                    </div>
                    {/*end::Toolbar*/}
                  </form>
                  {/*end::Form*/}
                  {/*begin::Separator*/}
                  <div className="separator border-gray-200 mb-6" />
                  {/*end::Separator*/}
                  {/*begin::Recently viewed*/}
                  <div
                    data-kt-search-element="results"
                    className="d-none"
                  >
                    {/*begin::Items*/}
                    <div className="scroll-y mh-200px mh-lg-350px">
                      {/*begin::Category title*/}
                      <h3
                        className="fs-5 text-muted m-0 pb-5"
                        data-kt-search-element="category-title"
                      >
                        Users
                      </h3>
                      {/*end::Category title*/}
                      {/*begin::Item*/}
                      <a
                        href="#"
                        className="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                      >
                        {/*begin::Symbol*/}
                        <div className="symbol symbol-40px me-4">
                          <img
                            src="../assets/media/avatars/300-6.jpg"
                            alt=""
                          />
                        </div>
                        {/*end::Symbol*/}
                        {/*begin::Title*/}
                        <div className="d-flex flex-column justify-content-start fw-semibold">
                          <span className="fs-6 fw-semibold">
                            Karina Clark
                          </span>
                          <span className="fs-7 fw-semibold text-muted">
                            Marketing Manager
                          </span>
                        </div>
                        {/*end::Title*/}
                      </a>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <a
                        href="#"
                        className="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                      >
                        {/*begin::Symbol*/}
                        <div className="symbol symbol-40px me-4">
                          <img
                            src="../assets/media/avatars/300-2.jpg"
                            alt=""
                          />
                        </div>
                        {/*end::Symbol*/}
                        {/*begin::Title*/}
                        <div className="d-flex flex-column justify-content-start fw-semibold">
                          <span className="fs-6 fw-semibold">
                            Olivia Bold
                          </span>
                          <span className="fs-7 fw-semibold text-muted">
                            Software Engineer
                          </span>
                        </div>
                        {/*end::Title*/}
                      </a>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <a
                        href="#"
                        className="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                      >
                        {/*begin::Symbol*/}
                        <div className="symbol symbol-40px me-4">
                          <img
                            src="../assets/media/avatars/300-9.jpg"
                            alt=""
                          />
                        </div>
                        {/*end::Symbol*/}
                        {/*begin::Title*/}
                        <div className="d-flex flex-column justify-content-start fw-semibold">
                          <span className="fs-6 fw-semibold">
                            Ana Clark
                          </span>
                          <span className="fs-7 fw-semibold text-muted">
                            UI/UX Designer
                          </span>
                        </div>
                        {/*end::Title*/}
                      </a>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <a
                        href="#"
                        className="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                      >
                        {/*begin::Symbol*/}
                        <div className="symbol symbol-40px me-4">
                          <img
                            src="../assets/media/avatars/300-14.jpg"
                            alt=""
                          />
                        </div>
                        {/*end::Symbol*/}
                        {/*begin::Title*/}
                        <div className="d-flex flex-column justify-content-start fw-semibold">
                          <span className="fs-6 fw-semibold">
                            Nick Pitola
                          </span>
                          <span className="fs-7 fw-semibold text-muted">
                            Art Director
                          </span>
                        </div>
                        {/*end::Title*/}
                      </a>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <a
                        href="#"
                        className="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                      >
                        {/*begin::Symbol*/}
                        <div className="symbol symbol-40px me-4">
                          <img
                            src="../assets/media/avatars/300-11.jpg"
                            alt=""
                          />
                        </div>
                        {/*end::Symbol*/}
                        {/*begin::Title*/}
                        <div className="d-flex flex-column justify-content-start fw-semibold">
                          <span className="fs-6 fw-semibold">
                            Edward Kulnic
                          </span>
                          <span className="fs-7 fw-semibold text-muted">
                            System Administrator
                          </span>
                        </div>
                        {/*end::Title*/}
                      </a>
                      {/*end::Item*/}
                      {/*begin::Category title*/}
                      <h3
                        className="fs-5 text-muted m-0 pt-5 pb-5"
                        data-kt-search-element="category-title"
                      >
                        Customers
                      </h3>
                      {/*end::Category title*/}
                      {/*begin::Item*/}
                      <a
                        href="#"
                        className="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                      >
                        {/*begin::Symbol*/}
                        <div className="symbol symbol-40px me-4">
                          <span className="symbol-label bg-light">
                            <img
                              className="w-20px h-20px"
                              src="../assets/media/svg/brand-logos/volicity-9.svg"
                              alt=""
                            />
                          </span>
                        </div>
                        {/*end::Symbol*/}
                        {/*begin::Title*/}
                        <div className="d-flex flex-column justify-content-start fw-semibold">
                          <span className="fs-6 fw-semibold">
                            Company Rbranding
                          </span>
                          <span className="fs-7 fw-semibold text-muted">
                            UI Design
                          </span>
                        </div>
                        {/*end::Title*/}
                      </a>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <a
                        href="#"
                        className="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                      >
                        {/*begin::Symbol*/}
                        <div className="symbol symbol-40px me-4">
                          <span className="symbol-label bg-light">
                            <img
                              className="w-20px h-20px"
                              src="../assets/media/svg/brand-logos/tvit.svg"
                              alt=""
                            />
                          </span>
                        </div>
                        {/*end::Symbol*/}
                        {/*begin::Title*/}
                        <div className="d-flex flex-column justify-content-start fw-semibold">
                          <span className="fs-6 fw-semibold">
                            Company Re-branding
                          </span>
                          <span className="fs-7 fw-semibold text-muted">
                            Web Development
                          </span>
                        </div>
                        {/*end::Title*/}
                      </a>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <a
                        href="#"
                        className="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                      >
                        {/*begin::Symbol*/}
                        <div className="symbol symbol-40px me-4">
                          <span className="symbol-label bg-light">
                            <img
                              className="w-20px h-20px"
                              src="../assets/media/svg/misc/infography.svg"
                              alt=""
                            />
                          </span>
                        </div>
                        {/*end::Symbol*/}
                        {/*begin::Title*/}
                        <div className="d-flex flex-column justify-content-start fw-semibold">
                          <span className="fs-6 fw-semibold">
                            Business Analytics App
                          </span>
                          <span className="fs-7 fw-semibold text-muted">
                            Administration
                          </span>
                        </div>
                        {/*end::Title*/}
                      </a>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <a
                        href="#"
                        className="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                      >
                        {/*begin::Symbol*/}
                        <div className="symbol symbol-40px me-4">
                          <span className="symbol-label bg-light">
                            <img
                              className="w-20px h-20px"
                              src="../assets/media/svg/brand-logos/leaf.svg"
                              alt=""
                            />
                          </span>
                        </div>
                        {/*end::Symbol*/}
                        {/*begin::Title*/}
                        <div className="d-flex flex-column justify-content-start fw-semibold">
                          <span className="fs-6 fw-semibold">
                            EcoLeaf App Launch
                          </span>
                          <span className="fs-7 fw-semibold text-muted">
                            Marketing
                          </span>
                        </div>
                        {/*end::Title*/}
                      </a>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <a
                        href="#"
                        className="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                      >
                        {/*begin::Symbol*/}
                        <div className="symbol symbol-40px me-4">
                          <span className="symbol-label bg-light">
                            <img
                              className="w-20px h-20px"
                              src="../assets/media/svg/brand-logos/tower.svg"
                              alt=""
                            />
                          </span>
                        </div>
                        {/*end::Symbol*/}
                        {/*begin::Title*/}
                        <div className="d-flex flex-column justify-content-start fw-semibold">
                          <span className="fs-6 fw-semibold">
                            Tower Group Website
                          </span>
                          <span className="fs-7 fw-semibold text-muted">
                            Google Adwords
                          </span>
                        </div>
                        {/*end::Title*/}
                      </a>
                      {/*end::Item*/}
                      {/*begin::Category title*/}
                      <h3
                        className="fs-5 text-muted m-0 pt-5 pb-5"
                        data-kt-search-element="category-title"
                      >
                        Projects
                      </h3>
                      {/*end::Category title*/}
                      {/*begin::Item*/}
                      <a
                        href="#"
                        className="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                      >
                        {/*begin::Symbol*/}
                        <div className="symbol symbol-40px me-4">
                          <span className="symbol-label bg-light">
                            <i className="ki-duotone ki-notepad fs-2 text-primary">
                              <span className="path1" />
                              <span className="path2" />
                              <span className="path3" />
                              <span className="path4" />
                              <span className="path5" />
                            </i>
                          </span>
                        </div>
                        {/*end::Symbol*/}
                        {/*begin::Title*/}
                        <div className="d-flex flex-column">
                          <span className="fs-6 fw-semibold">
                            Si-Fi Project by AU Themes
                          </span>
                          <span className="fs-7 fw-semibold text-muted">
                            #45670
                          </span>
                        </div>
                        {/*end::Title*/}
                      </a>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <a
                        href="#"
                        className="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                      >
                        {/*begin::Symbol*/}
                        <div className="symbol symbol-40px me-4">
                          <span className="symbol-label bg-light">
                            <i className="ki-duotone ki-frame fs-2 text-primary">
                              <span className="path1" />
                              <span className="path2" />
                              <span className="path3" />
                              <span className="path4" />
                            </i>
                          </span>
                        </div>
                        {/*end::Symbol*/}
                        {/*begin::Title*/}
                        <div className="d-flex flex-column">
                          <span className="fs-6 fw-semibold">
                            Shopix Mobile App Planning
                          </span>
                          <span className="fs-7 fw-semibold text-muted">
                            #45690
                          </span>
                        </div>
                        {/*end::Title*/}
                      </a>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <a
                        href="#"
                        className="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                      >
                        {/*begin::Symbol*/}
                        <div className="symbol symbol-40px me-4">
                          <span className="symbol-label bg-light">
                            <i className="ki-duotone ki-message-text-2 fs-2 text-primary">
                              <span className="path1" />
                              <span className="path2" />
                              <span className="path3" />
                            </i>
                          </span>
                        </div>
                        {/*end::Symbol*/}
                        {/*begin::Title*/}
                        <div className="d-flex flex-column">
                          <span className="fs-6 fw-semibold">
                            Finance Monitoring SAAS Discussion
                          </span>
                          <span className="fs-7 fw-semibold text-muted">
                            #21090
                          </span>
                        </div>
                        {/*end::Title*/}
                      </a>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <a
                        href="#"
                        className="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                      >
                        {/*begin::Symbol*/}
                        <div className="symbol symbol-40px me-4">
                          <span className="symbol-label bg-light">
                            <i className="ki-duotone ki-profile-circle fs-2 text-primary">
                              <span className="path1" />
                              <span className="path2" />
                              <span className="path3" />
                            </i>
                          </span>
                        </div>
                        {/*end::Symbol*/}
                        {/*begin::Title*/}
                        <div className="d-flex flex-column">
                          <span className="fs-6 fw-semibold">
                            Dashboard Analitics Launch
                          </span>
                          <span className="fs-7 fw-semibold text-muted">
                            #34560
                          </span>
                        </div>
                        {/*end::Title*/}
                      </a>
                      {/*end::Item*/}
                    </div>
                    {/*end::Items*/}
                  </div>
                  {/*end::Recently viewed*/}
                  {/*begin::Recently viewed*/}
                  <div className="mb-5" data-kt-search-element="main">
                    {/*begin::Heading*/}
                    <div className="d-flex flex-stack fw-semibold mb-4">
                      {/*begin::Label*/}
                      <span className="text-muted fs-6 me-2">
                        Recently Searched:
                      </span>
                      {/*end::Label*/}
                    </div>
                    {/*end::Heading*/}
                    {/*begin::Items*/}
                    <div className="scroll-y mh-200px mh-lg-325px">
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-5">
                        {/*begin::Symbol*/}
                        <div className="symbol symbol-40px me-4">
                          <span className="symbol-label bg-light">
                            <i className="ki-duotone ki-laptop fs-2 text-primary">
                              <span className="path1" />
                              <span className="path2" />
                            </i>
                          </span>
                        </div>
                        {/*end::Symbol*/}
                        {/*begin::Title*/}
                        <div className="d-flex flex-column">
                          <a
                            href="#"
                            className="fs-6 text-gray-800 text-hover-primary fw-semibold"
                          >
                            BoomApp by Keenthemes
                          </a>
                          <span className="fs-7 text-muted fw-semibold">
                            #45789
                          </span>
                        </div>
                        {/*end::Title*/}
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-5">
                        {/*begin::Symbol*/}
                        <div className="symbol symbol-40px me-4">
                          <span className="symbol-label bg-light">
                            <i className="ki-duotone ki-chart-simple fs-2 text-primary">
                              <span className="path1" />
                              <span className="path2" />
                              <span className="path3" />
                              <span className="path4" />
                            </i>
                          </span>
                        </div>
                        {/*end::Symbol*/}
                        {/*begin::Title*/}
                        <div className="d-flex flex-column">
                          <a
                            href="#"
                            className="fs-6 text-gray-800 text-hover-primary fw-semibold"
                          >
                            "Kept API Project Meeting
                          </a>
                          <span className="fs-7 text-muted fw-semibold">
                            #84050
                          </span>
                        </div>
                        {/*end::Title*/}
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-5">
                        {/*begin::Symbol*/}
                        <div className="symbol symbol-40px me-4">
                          <span className="symbol-label bg-light">
                            <i className="ki-duotone ki-chart fs-2 text-primary">
                              <span className="path1" />
                              <span className="path2" />
                            </i>
                          </span>
                        </div>
                        {/*end::Symbol*/}
                        {/*begin::Title*/}
                        <div className="d-flex flex-column">
                          <a
                            href="#"
                            className="fs-6 text-gray-800 text-hover-primary fw-semibold"
                          >
                            "KPI Monitoring App Launch
                          </a>
                          <span className="fs-7 text-muted fw-semibold">
                            #84250
                          </span>
                        </div>
                        {/*end::Title*/}
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-5">
                        {/*begin::Symbol*/}
                        <div className="symbol symbol-40px me-4">
                          <span className="symbol-label bg-light">
                            <i className="ki-duotone ki-chart-line-down fs-2 text-primary">
                              <span className="path1" />
                              <span className="path2" />
                            </i>
                          </span>
                        </div>
                        {/*end::Symbol*/}
                        {/*begin::Title*/}
                        <div className="d-flex flex-column">
                          <a
                            href="#"
                            className="fs-6 text-gray-800 text-hover-primary fw-semibold"
                          >
                            Project Reference FAQ
                          </a>
                          <span className="fs-7 text-muted fw-semibold">
                            #67945
                          </span>
                        </div>
                        {/*end::Title*/}
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-5">
                        {/*begin::Symbol*/}
                        <div className="symbol symbol-40px me-4">
                          <span className="symbol-label bg-light">
                            <i className="ki-duotone ki-sms fs-2 text-primary">
                              <span className="path1" />
                              <span className="path2" />
                            </i>
                          </span>
                        </div>
                        {/*end::Symbol*/}
                        {/*begin::Title*/}
                        <div className="d-flex flex-column">
                          <a
                            href="#"
                            className="fs-6 text-gray-800 text-hover-primary fw-semibold"
                          >
                            "FitPro App Development
                          </a>
                          <span className="fs-7 text-muted fw-semibold">
                            #84250
                          </span>
                        </div>
                        {/*end::Title*/}
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-5">
                        {/*begin::Symbol*/}
                        <div className="symbol symbol-40px me-4">
                          <span className="symbol-label bg-light">
                            <i className="ki-duotone ki-bank fs-2 text-primary">
                              <span className="path1" />
                              <span className="path2" />
                            </i>
                          </span>
                        </div>
                        {/*end::Symbol*/}
                        {/*begin::Title*/}
                        <div className="d-flex flex-column">
                          <a
                            href="#"
                            className="fs-6 text-gray-800 text-hover-primary fw-semibold"
                          >
                            Shopix Mobile App
                          </a>
                          <span className="fs-7 text-muted fw-semibold">
                            #45690
                          </span>
                        </div>
                        {/*end::Title*/}
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-5">
                        {/*begin::Symbol*/}
                        <div className="symbol symbol-40px me-4">
                          <span className="symbol-label bg-light">
                            <i className="ki-duotone ki-chart-line-down fs-2 text-primary">
                              <span className="path1" />
                              <span className="path2" />
                            </i>
                          </span>
                        </div>
                        {/*end::Symbol*/}
                        {/*begin::Title*/}
                        <div className="d-flex flex-column">
                          <a
                            href="#"
                            className="fs-6 text-gray-800 text-hover-primary fw-semibold"
                          >
                            "Landing UI Design" Launch
                          </a>
                          <span className="fs-7 text-muted fw-semibold">
                            #24005
                          </span>
                        </div>
                        {/*end::Title*/}
                      </div>
                      {/*end::Item*/}
                    </div>
                    {/*end::Items*/}
                  </div>
                  {/*end::Recently viewed*/}
                  {/*begin::Empty*/}
                  <div
                    data-kt-search-element="empty"
                    className="text-center d-none"
                  >
                    {/*begin::Icon*/}
                    <div className="pt-10 pb-10">
                      <i className="ki-duotone ki-search-list fs-4x opacity-50">
                        <span className="path1" />
                        <span className="path2" />
                        <span className="path3" />
                      </i>
                    </div>
                    {/*end::Icon*/}
                    {/*begin::Message*/}
                    <div className="pb-15 fw-semibold">
                      <h3 className="text-gray-600 fs-5 mb-2">
                        No result found
                      </h3>
                      <div className="text-muted fs-7">
                        Please try again with a different query
                      </div>
                    </div>
                    {/*end::Message*/}
                  </div>
                  {/*end::Empty*/}
                </div>
                {/*end::Wrapper*/}
                {/*begin::Preferences*/}
                <form
                  data-kt-search-element="advanced-options-form"
                  className="pt-1 d-none"
                >
                  {/*begin::Heading*/}
                  <h3 className="fw-semibold text-gray-900 mb-7">
                    Advanced Search
                  </h3>
                  {/*end::Heading*/}
                  {/*begin::Input group*/}
                  <div className="mb-5">
                    <input
                      type="text"
                      className="form-control form-control-sm form-control-solid"
                      placeholder="Contains the word"
                      name="query"
                    />
                  </div>
                  {/*end::Input group*/}
                  {/*begin::Input group*/}
                  <div className="mb-5">
                    {/*begin::Radio group*/}
                    <div className="nav-group nav-group-fluid">
                      {/*begin::Option*/}
                      <label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="type"
                          defaultValue="has"
                          defaultChecked="checked"
                        />
                        <span className="btn btn-sm btn-color-muted btn-active btn-active-primary">
                          All
                        </span>
                      </label>
                      {/*end::Option*/}
                      {/*begin::Option*/}
                      <label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="type"
                          defaultValue="users"
                        />
                        <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">
                          Users
                        </span>
                      </label>
                      {/*end::Option*/}
                      {/*begin::Option*/}
                      <label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="type"
                          defaultValue="orders"
                        />
                        <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">
                          Orders
                        </span>
                      </label>
                      {/*end::Option*/}
                      {/*begin::Option*/}
                      <label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="type"
                          defaultValue="projects"
                        />
                        <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">
                          Projects
                        </span>
                      </label>
                      {/*end::Option*/}
                    </div>
                    {/*end::Radio group*/}
                  </div>
                  {/*end::Input group*/}
                  {/*begin::Input group*/}
                  <div className="mb-5">
                    <input
                      type="text"
                      name="assignedto"
                      className="form-control form-control-sm form-control-solid"
                      placeholder="Assigned to"
                      defaultValue=""
                    />
                  </div>
                  {/*end::Input group*/}
                  {/*begin::Input group*/}
                  <div className="mb-5">
                    <input
                      type="text"
                      name="collaborators"
                      className="form-control form-control-sm form-control-solid"
                      placeholder="Collaborators"
                      defaultValue=""
                    />
                  </div>
                  {/*end::Input group*/}
                  {/*begin::Input group*/}
                  <div className="mb-5">
                    {/*begin::Radio group*/}
                    <div className="nav-group nav-group-fluid">
                      {/*begin::Option*/}
                      <label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="attachment"
                          defaultValue="has"
                          defaultChecked="checked"
                        />
                        <span className="btn btn-sm btn-color-muted btn-active btn-active-primary">
                          Has attachment
                        </span>
                      </label>
                      {/*end::Option*/}
                      {/*begin::Option*/}
                      <label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="attachment"
                          defaultValue="any"
                        />
                        <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">
                          Any
                        </span>
                      </label>
                      {/*end::Option*/}
                    </div>
                    {/*end::Radio group*/}
                  </div>
                  {/*end::Input group*/}
                  {/*begin::Input group*/}
                  <div className="mb-5">
                    <select
                      name="timezone"
                      aria-label="Select a Timezone"
                      data-control="select2"
                      data-dropdown-parent="#kt_header_search"
                      data-placeholder="date_period"
                      className="form-select form-select-sm form-select-solid"
                    >
                      <option value="next">Within the next</option>
                      <option value="last">Within the last</option>
                      <option value="between">Between</option>
                      <option value="on">On</option>
                    </select>
                  </div>
                  {/*end::Input group*/}
                  {/*begin::Input group*/}
                  <div className="row mb-8">
                    {/*begin::Col*/}
                    <div className="col-6">
                      <input
                        type="number"
                        name="date_number"
                        className="form-control form-control-sm form-control-solid"
                        placeholder="Lenght"
                        defaultValue=""
                      />
                    </div>
                    {/*end::Col*/}
                    {/*begin::Col*/}
                    <div className="col-6">
                      <select
                        name="date_typer"
                        aria-label="Select a Timezone"
                        data-control="select2"
                        data-dropdown-parent="#kt_header_search"
                        data-placeholder="Period"
                        className="form-select form-select-sm form-select-solid"
                      >
                        <option value="days">Days</option>
                        <option value="weeks">Weeks</option>
                        <option value="months">Months</option>
                        <option value="years">Years</option>
                      </select>
                    </div>
                    {/*end::Col*/}
                  </div>
                  {/*end::Input group*/}
                  {/*begin::Actions*/}
                  <div className="d-flex justify-content-end">
                    <button
                      type="reset"
                      className="btn btn-sm btn-light fw-bold btn-active-light-primary me-2"
                      data-kt-search-element="advanced-options-form-cancel"
                    >
                      Cancel
                    </button>
                    <a
                      href="../utilities/search/horizontal.html"
                      className="btn btn-sm fw-bold btn-primary"
                      data-kt-search-element="advanced-options-form-search"
                    >
                      Search
                    </a>
                  </div>
                  {/*end::Actions*/}
                </form>
                {/*end::Preferences*/}
                {/*begin::Preferences*/}
                <form
                  data-kt-search-element="preferences"
                  className="pt-1 d-none"
                >
                  {/*begin::Heading*/}
                  <h3 className="fw-semibold text-gray-900 mb-7">
                    Search Preferences
                  </h3>
                  {/*end::Heading*/}
                  {/*begin::Input group*/}
                  <div className="pb-4 border-bottom">
                    <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                      <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">
                        Projects
                      </span>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue={1}
                        defaultChecked="checked"
                      />
                    </label>
                  </div>
                  {/*end::Input group*/}
                  {/*begin::Input group*/}
                  <div className="py-4 border-bottom">
                    <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                      <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">
                        Targets
                      </span>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue={1}
                        defaultChecked="checked"
                      />
                    </label>
                  </div>
                  {/*end::Input group*/}
                  {/*begin::Input group*/}
                  <div className="py-4 border-bottom">
                    <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                      <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">
                        Affiliate Programs
                      </span>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue={1}
                      />
                    </label>
                  </div>
                  {/*end::Input group*/}
                  {/*begin::Input group*/}
                  <div className="py-4 border-bottom">
                    <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                      <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">
                        Referrals
                      </span>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue={1}
                        defaultChecked="checked"
                      />
                    </label>
                  </div>
                  {/*end::Input group*/}
                  {/*begin::Input group*/}
                  <div className="py-4 border-bottom">
                    <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                      <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">
                        Users
                      </span>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue={1}
                      />
                    </label>
                  </div>
                  {/*end::Input group*/}
                  {/*begin::Actions*/}
                  <div className="d-flex justify-content-end pt-7">
                    <button
                      type="reset"
                      className="btn btn-sm btn-light fw-bold btn-active-light-primary me-2"
                      data-kt-search-element="preferences-dismiss"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="btn btn-sm fw-bold btn-primary"
                    >
                      Save Changes
                    </button>
                  </div>
                  {/*end::Actions*/}
                </form>
                {/*end::Preferences*/}
              </div>
              {/*end::Menu*/}
            </div>
            {/*end::Search*/}
          </div>
          {/*end::Search*/}
          {/*begin::Activities*/}
          <div className="app-navbar-item ms-1 ms-md-4">
            {/*begin::Drawer toggle*/}
            <div
              className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px"
              id="kt_activities_toggle"
            >
              <i className="ki-duotone ki-messages fs-2">
                <span className="path1" />
                <span className="path2" />
                <span className="path3" />
                <span className="path4" />
                <span className="path5" />
              </i>
            </div>
            {/*end::Drawer toggle*/}
          </div>
          {/*end::Activities*/}
          {/*begin::Notifications*/}
          <div className="app-navbar-item ms-1 ms-md-4">
            {/*begin::Menu- wrapper*/}
            <div
              className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px"
              data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
              data-kt-menu-attach="parent"
              data-kt-menu-placement="bottom-end"
              id="kt_menu_item_wow"
            >
              <i className="ki-duotone ki-notification-status fs-2">
                <span className="path1" />
                <span className="path2" />
                <span className="path3" />
                <span className="path4" />
              </i>
            </div>
            {/*begin::Menu*/}
            <div
              className="menu menu-sub menu-sub-dropdown menu-column w-350px w-lg-375px"
              data-kt-menu="true"
              id="kt_menu_notifications"
            >
              {/*begin::Heading*/}
              <div
                className="d-flex flex-column bgi-no-repeat rounded-top"
                style={{
                  backgroundImage:
                    'url("../assets/media/misc/menu-header-bg.jpg")',
                }}
              >
                {/*begin::Title*/}
                <h3 className="text-white fw-semibold px-9 mt-10 mb-6">
                  Notifications
                  <span className="fs-8 opacity-75 ps-3">
                    24 reports
                  </span>
                </h3>
                {/*end::Title*/}
                {/*begin::Tabs*/}
                <ul className="nav nav-line-tabs nav-line-tabs-2x nav-stretch fw-semibold px-9">
                  <li className="nav-item">
                    <a
                      className="nav-link text-white opacity-75 opacity-state-100 pb-4"
                      data-bs-toggle="tab"
                      href="#kt_topbar_notifications_1"
                    >
                      Alerts
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link text-white opacity-75 opacity-state-100 pb-4 active"
                      data-bs-toggle="tab"
                      href="#kt_topbar_notifications_2"
                    >
                      Updates
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link text-white opacity-75 opacity-state-100 pb-4"
                      data-bs-toggle="tab"
                      href="#kt_topbar_notifications_3"
                    >
                      Logs
                    </a>
                  </li>
                </ul>
                {/*end::Tabs*/}
              </div>
              {/*end::Heading*/}
              {/*begin::Tab content*/}
              <div className="tab-content">
                {/*begin::Tab panel*/}
                <div
                  className="tab-pane fade"
                  id="kt_topbar_notifications_1"
                  role="tabpanel"
                >
                  {/*begin::Items*/}
                  <div className="scroll-y mh-325px my-5 px-8">
                    {/*begin::Item*/}
                    <div className="d-flex flex-stack py-4">
                      {/*begin::Section*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Symbol*/}
                        <div className="symbol symbol-35px me-4">
                          <span className="symbol-label bg-light-primary">
                            <i className="ki-duotone ki-abstract-28 fs-2 text-primary">
                              <span className="path1" />
                              <span className="path2" />
                            </i>
                          </span>
                        </div>
                        {/*end::Symbol*/}
                        {/*begin::Title*/}
                        <div className="mb-0 me-2">
                          <a
                            href="#"
                            className="fs-6 text-gray-800 text-hover-primary fw-bold"
                          >
                            Project Alice
                          </a>
                          <div className="text-gray-500 fs-7">
                            Phase 1 development
                          </div>
                        </div>
                        {/*end::Title*/}
                      </div>
                      {/*end::Section*/}
                      {/*begin::Label*/}
                      <span className="badge badge-light fs-8">
                        1 hr
                      </span>
                      {/*end::Label*/}
                    </div>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <div className="d-flex flex-stack py-4">
                      {/*begin::Section*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Symbol*/}
                        <div className="symbol symbol-35px me-4">
                          <span className="symbol-label bg-light-danger">
                            <i className="ki-duotone ki-information fs-2 text-danger">
                              <span className="path1" />
                              <span className="path2" />
                              <span className="path3" />
                            </i>
                          </span>
                        </div>
                        {/*end::Symbol*/}
                        {/*begin::Title*/}
                        <div className="mb-0 me-2">
                          <a
                            href="#"
                            className="fs-6 text-gray-800 text-hover-primary fw-bold"
                          >
                            HR Confidential
                          </a>
                          <div className="text-gray-500 fs-7">
                            Confidential staff documents
                          </div>
                        </div>
                        {/*end::Title*/}
                      </div>
                      {/*end::Section*/}
                      {/*begin::Label*/}
                      <span className="badge badge-light fs-8">
                        2 hrs
                      </span>
                      {/*end::Label*/}
                    </div>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <div className="d-flex flex-stack py-4">
                      {/*begin::Section*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Symbol*/}
                        <div className="symbol symbol-35px me-4">
                          <span className="symbol-label bg-light-warning">
                            <i className="ki-duotone ki-briefcase fs-2 text-warning">
                              <span className="path1" />
                              <span className="path2" />
                            </i>
                          </span>
                        </div>
                        {/*end::Symbol*/}
                        {/*begin::Title*/}
                        <div className="mb-0 me-2">
                          <a
                            href="#"
                            className="fs-6 text-gray-800 text-hover-primary fw-bold"
                          >
                            Company HR
                          </a>
                          <div className="text-gray-500 fs-7">
                            Corporeate staff profiles
                          </div>
                        </div>
                        {/*end::Title*/}
                      </div>
                      {/*end::Section*/}
                      {/*begin::Label*/}
                      <span className="badge badge-light fs-8">
                        5 hrs
                      </span>
                      {/*end::Label*/}
                    </div>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <div className="d-flex flex-stack py-4">
                      {/*begin::Section*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Symbol*/}
                        <div className="symbol symbol-35px me-4">
                          <span className="symbol-label bg-light-success">
                            <i className="ki-duotone ki-abstract-12 fs-2 text-success">
                              <span className="path1" />
                              <span className="path2" />
                            </i>
                          </span>
                        </div>
                        {/*end::Symbol*/}
                        {/*begin::Title*/}
                        <div className="mb-0 me-2">
                          <a
                            href="#"
                            className="fs-6 text-gray-800 text-hover-primary fw-bold"
                          >
                            Project Redux
                          </a>
                          <div className="text-gray-500 fs-7">
                            New frontend admin theme
                          </div>
                        </div>
                        {/*end::Title*/}
                      </div>
                      {/*end::Section*/}
                      {/*begin::Label*/}
                      <span className="badge badge-light fs-8">
                        2 days
                      </span>
                      {/*end::Label*/}
                    </div>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <div className="d-flex flex-stack py-4">
                      {/*begin::Section*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Symbol*/}
                        <div className="symbol symbol-35px me-4">
                          <span className="symbol-label bg-light-primary">
                            <i className="ki-duotone ki-colors-square fs-2 text-primary">
                              <span className="path1" />
                              <span className="path2" />
                              <span className="path3" />
                              <span className="path4" />
                            </i>
                          </span>
                        </div>
                        {/*end::Symbol*/}
                        {/*begin::Title*/}
                        <div className="mb-0 me-2">
                          <a
                            href="#"
                            className="fs-6 text-gray-800 text-hover-primary fw-bold"
                          >
                            Project Breafing
                          </a>
                          <div className="text-gray-500 fs-7">
                            Product launch status update
                          </div>
                        </div>
                        {/*end::Title*/}
                      </div>
                      {/*end::Section*/}
                      {/*begin::Label*/}
                      <span className="badge badge-light fs-8">
                        21 Jan
                      </span>
                      {/*end::Label*/}
                    </div>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <div className="d-flex flex-stack py-4">
                      {/*begin::Section*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Symbol*/}
                        <div className="symbol symbol-35px me-4">
                          <span className="symbol-label bg-light-info">
                            <i className="ki-duotone ki-picture fs-2 text-info" />
                          </span>
                        </div>
                        {/*end::Symbol*/}
                        {/*begin::Title*/}
                        <div className="mb-0 me-2">
                          <a
                            href="#"
                            className="fs-6 text-gray-800 text-hover-primary fw-bold"
                          >
                            Banner Assets
                          </a>
                          <div className="text-gray-500 fs-7">
                            Collection of banner images
                          </div>
                        </div>
                        {/*end::Title*/}
                      </div>
                      {/*end::Section*/}
                      {/*begin::Label*/}
                      <span className="badge badge-light fs-8">
                        21 Jan
                      </span>
                      {/*end::Label*/}
                    </div>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <div className="d-flex flex-stack py-4">
                      {/*begin::Section*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Symbol*/}
                        <div className="symbol symbol-35px me-4">
                          <span className="symbol-label bg-light-warning">
                            <i className="ki-duotone ki-color-swatch fs-2 text-warning">
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
                        </div>
                        {/*end::Symbol*/}
                        {/*begin::Title*/}
                        <div className="mb-0 me-2">
                          <a
                            href="#"
                            className="fs-6 text-gray-800 text-hover-primary fw-bold"
                          >
                            Icon Assets
                          </a>
                          <div className="text-gray-500 fs-7">
                            Collection of SVG icons
                          </div>
                        </div>
                        {/*end::Title*/}
                      </div>
                      {/*end::Section*/}
                      {/*begin::Label*/}
                      <span className="badge badge-light fs-8">
                        20 March
                      </span>
                      {/*end::Label*/}
                    </div>
                    {/*end::Item*/}
                  </div>
                  {/*end::Items*/}
                  {/*begin::View more*/}
                  <div className="py-3 text-center border-top">
                    <a
                      href="../pages/user-profile/activity.html"
                      className="btn btn-color-gray-600 btn-active-color-primary"
                    >
                      View All
                      <i className="ki-duotone ki-arrow-right fs-5">
                        <span className="path1" />
                        <span className="path2" />
                      </i>
                    </a>
                  </div>
                  {/*end::View more*/}
                </div>
                {/*end::Tab panel*/}
                {/*begin::Tab panel*/}
                <div
                  className="tab-pane fade show active"
                  id="kt_topbar_notifications_2"
                  role="tabpanel"
                >
                  {/*begin::Wrapper*/}
                  <div className="d-flex flex-column px-9">
                    {/*begin::Section*/}
                    <div className="pt-10 pb-0">
                      {/*begin::Title*/}
                      <h3 className="text-gray-900 text-center fw-bold">
                        Get Pro Access
                      </h3>
                      {/*end::Title*/}
                      {/*begin::Text*/}
                      <div className="text-center text-gray-600 fw-semibold pt-1">
                        Outlines keep you honest. They stoping you from
                        amazing poorly about drive
                      </div>
                      {/*end::Text*/}
                      {/*begin::Action*/}
                      <div className="text-center mt-5 mb-9">
                        <a
                          href="#"
                          className="btn btn-sm btn-primary px-6"
                          data-bs-toggle="modal"
                          data-bs-target="#kt_modal_upgrade_plan"
                        >
                          Upgrade
                        </a>
                      </div>
                      {/*end::Action*/}
                    </div>
                    {/*end::Section*/}
                    {/*begin::Illustration*/}
                    <div className="text-center px-4">
                      <img
                        className="mw-100 mh-200px"
                        alt="image"
                        src="../assets/media/illustrations/sketchy-1/1.png"
                      />
                    </div>
                    {/*end::Illustration*/}
                  </div>
                  {/*end::Wrapper*/}
                </div>
                {/*end::Tab panel*/}
                {/*begin::Tab panel*/}
                <div
                  className="tab-pane fade"
                  id="kt_topbar_notifications_3"
                  role="tabpanel"
                >
                  {/*begin::Items*/}
                  <div className="scroll-y mh-325px my-5 px-8">
                    {/*begin::Item*/}
                    <div className="d-flex flex-stack py-4">
                      {/*begin::Section*/}
                      <div className="d-flex align-items-center me-2">
                        {/*begin::Code*/}
                        <span className="w-70px badge badge-light-success me-4">
                          200 OK
                        </span>
                        {/*end::Code*/}
                        {/*begin::Title*/}
                        <a
                          href="#"
                          className="text-gray-800 text-hover-primary fw-semibold"
                        >
                          New order
                        </a>
                        {/*end::Title*/}
                      </div>
                      {/*end::Section*/}
                      {/*begin::Label*/}
                      <span className="badge badge-light fs-8">
                        Just now
                      </span>
                      {/*end::Label*/}
                    </div>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <div className="d-flex flex-stack py-4">
                      {/*begin::Section*/}
                      <div className="d-flex align-items-center me-2">
                        {/*begin::Code*/}
                        <span className="w-70px badge badge-light-danger me-4">
                          500 ERR
                        </span>
                        {/*end::Code*/}
                        {/*begin::Title*/}
                        <a
                          href="#"
                          className="text-gray-800 text-hover-primary fw-semibold"
                        >
                          New customer
                        </a>
                        {/*end::Title*/}
                      </div>
                      {/*end::Section*/}
                      {/*begin::Label*/}
                      <span className="badge badge-light fs-8">
                        2 hrs
                      </span>
                      {/*end::Label*/}
                    </div>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <div className="d-flex flex-stack py-4">
                      {/*begin::Section*/}
                      <div className="d-flex align-items-center me-2">
                        {/*begin::Code*/}
                        <span className="w-70px badge badge-light-success me-4">
                          200 OK
                        </span>
                        {/*end::Code*/}
                        {/*begin::Title*/}
                        <a
                          href="#"
                          className="text-gray-800 text-hover-primary fw-semibold"
                        >
                          Payment process
                        </a>
                        {/*end::Title*/}
                      </div>
                      {/*end::Section*/}
                      {/*begin::Label*/}
                      <span className="badge badge-light fs-8">
                        5 hrs
                      </span>
                      {/*end::Label*/}
                    </div>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <div className="d-flex flex-stack py-4">
                      {/*begin::Section*/}
                      <div className="d-flex align-items-center me-2">
                        {/*begin::Code*/}
                        <span className="w-70px badge badge-light-warning me-4">
                          300 WRN
                        </span>
                        {/*end::Code*/}
                        {/*begin::Title*/}
                        <a
                          href="#"
                          className="text-gray-800 text-hover-primary fw-semibold"
                        >
                          Search query
                        </a>
                        {/*end::Title*/}
                      </div>
                      {/*end::Section*/}
                      {/*begin::Label*/}
                      <span className="badge badge-light fs-8">
                        2 days
                      </span>
                      {/*end::Label*/}
                    </div>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <div className="d-flex flex-stack py-4">
                      {/*begin::Section*/}
                      <div className="d-flex align-items-center me-2">
                        {/*begin::Code*/}
                        <span className="w-70px badge badge-light-success me-4">
                          200 OK
                        </span>
                        {/*end::Code*/}
                        {/*begin::Title*/}
                        <a
                          href="#"
                          className="text-gray-800 text-hover-primary fw-semibold"
                        >
                          API connection
                        </a>
                        {/*end::Title*/}
                      </div>
                      {/*end::Section*/}
                      {/*begin::Label*/}
                      <span className="badge badge-light fs-8">
                        1 week
                      </span>
                      {/*end::Label*/}
                    </div>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <div className="d-flex flex-stack py-4">
                      {/*begin::Section*/}
                      <div className="d-flex align-items-center me-2">
                        {/*begin::Code*/}
                        <span className="w-70px badge badge-light-success me-4">
                          200 OK
                        </span>
                        {/*end::Code*/}
                        {/*begin::Title*/}
                        <a
                          href="#"
                          className="text-gray-800 text-hover-primary fw-semibold"
                        >
                          Database restore
                        </a>
                        {/*end::Title*/}
                      </div>
                      {/*end::Section*/}
                      {/*begin::Label*/}
                      <span className="badge badge-light fs-8">
                        Mar 5
                      </span>
                      {/*end::Label*/}
                    </div>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <div className="d-flex flex-stack py-4">
                      {/*begin::Section*/}
                      <div className="d-flex align-items-center me-2">
                        {/*begin::Code*/}
                        <span className="w-70px badge badge-light-warning me-4">
                          300 WRN
                        </span>
                        {/*end::Code*/}
                        {/*begin::Title*/}
                        <a
                          href="#"
                          className="text-gray-800 text-hover-primary fw-semibold"
                        >
                          System update
                        </a>
                        {/*end::Title*/}
                      </div>
                      {/*end::Section*/}
                      {/*begin::Label*/}
                      <span className="badge badge-light fs-8">
                        May 15
                      </span>
                      {/*end::Label*/}
                    </div>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <div className="d-flex flex-stack py-4">
                      {/*begin::Section*/}
                      <div className="d-flex align-items-center me-2">
                        {/*begin::Code*/}
                        <span className="w-70px badge badge-light-warning me-4">
                          300 WRN
                        </span>
                        {/*end::Code*/}
                        {/*begin::Title*/}
                        <a
                          href="#"
                          className="text-gray-800 text-hover-primary fw-semibold"
                        >
                          Server OS update
                        </a>
                        {/*end::Title*/}
                      </div>
                      {/*end::Section*/}
                      {/*begin::Label*/}
                      <span className="badge badge-light fs-8">
                        Apr 3
                      </span>
                      {/*end::Label*/}
                    </div>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <div className="d-flex flex-stack py-4">
                      {/*begin::Section*/}
                      <div className="d-flex align-items-center me-2">
                        {/*begin::Code*/}
                        <span className="w-70px badge badge-light-warning me-4">
                          300 WRN
                        </span>
                        {/*end::Code*/}
                        {/*begin::Title*/}
                        <a
                          href="#"
                          className="text-gray-800 text-hover-primary fw-semibold"
                        >
                          API rollback
                        </a>
                        {/*end::Title*/}
                      </div>
                      {/*end::Section*/}
                      {/*begin::Label*/}
                      <span className="badge badge-light fs-8">
                        Jun 30
                      </span>
                      {/*end::Label*/}
                    </div>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <div className="d-flex flex-stack py-4">
                      {/*begin::Section*/}
                      <div className="d-flex align-items-center me-2">
                        {/*begin::Code*/}
                        <span className="w-70px badge badge-light-danger me-4">
                          500 ERR
                        </span>
                        {/*end::Code*/}
                        {/*begin::Title*/}
                        <a
                          href="#"
                          className="text-gray-800 text-hover-primary fw-semibold"
                        >
                          Refund process
                        </a>
                        {/*end::Title*/}
                      </div>
                      {/*end::Section*/}
                      {/*begin::Label*/}
                      <span className="badge badge-light fs-8">
                        Jul 10
                      </span>
                      {/*end::Label*/}
                    </div>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <div className="d-flex flex-stack py-4">
                      {/*begin::Section*/}
                      <div className="d-flex align-items-center me-2">
                        {/*begin::Code*/}
                        <span className="w-70px badge badge-light-danger me-4">
                          500 ERR
                        </span>
                        {/*end::Code*/}
                        {/*begin::Title*/}
                        <a
                          href="#"
                          className="text-gray-800 text-hover-primary fw-semibold"
                        >
                          Withdrawal process
                        </a>
                        {/*end::Title*/}
                      </div>
                      {/*end::Section*/}
                      {/*begin::Label*/}
                      <span className="badge badge-light fs-8">
                        Sep 10
                      </span>
                      {/*end::Label*/}
                    </div>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <div className="d-flex flex-stack py-4">
                      {/*begin::Section*/}
                      <div className="d-flex align-items-center me-2">
                        {/*begin::Code*/}
                        <span className="w-70px badge badge-light-danger me-4">
                          500 ERR
                        </span>
                        {/*end::Code*/}
                        {/*begin::Title*/}
                        <a
                          href="#"
                          className="text-gray-800 text-hover-primary fw-semibold"
                        >
                          Mail tasks
                        </a>
                        {/*end::Title*/}
                      </div>
                      {/*end::Section*/}
                      {/*begin::Label*/}
                      <span className="badge badge-light fs-8">
                        Dec 10
                      </span>
                      {/*end::Label*/}
                    </div>
                    {/*end::Item*/}
                  </div>
                  {/*end::Items*/}
                  {/*begin::View more*/}
                  <div className="py-3 text-center border-top">
                    <a
                      href="../pages/user-profile/activity.html"
                      className="btn btn-color-gray-600 btn-active-color-primary"
                    >
                      View All
                      <i className="ki-duotone ki-arrow-right fs-5">
                        <span className="path1" />
                        <span className="path2" />
                      </i>
                    </a>
                  </div>
                  {/*end::View more*/}
                </div>
                {/*end::Tab panel*/}
              </div>
              {/*end::Tab content*/}
            </div>
            {/*end::Menu*/}
            {/*end::Menu wrapper*/}
          </div>
          {/*end::Notifications*/}
          {/*begin::Chat*/}
          <div className="app-navbar-item ms-1 ms-md-4">
            {/*begin::Menu wrapper*/}
            <div
              className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px position-relative"
              id="kt_drawer_chat_toggle"
            >
              <i className="ki-duotone ki-message-text-2 fs-2">
                <span className="path1" />
                <span className="path2" />
                <span className="path3" />
              </i>
              <span className="bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink"></span>
            </div>
            {/*end::Menu wrapper*/}
          </div>
          {/*end::Chat*/}
          {/*begin::My apps links*/}
          <div className="app-navbar-item ms-1 ms-md-4">
            {/*begin::Menu wrapper*/}
            <div
              className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px"
              data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
              data-kt-menu-attach="parent"
              data-kt-menu-placement="bottom-end"
            >
              <i className="ki-duotone ki-element-11 fs-2">
                <span className="path1" />
                <span className="path2" />
                <span className="path3" />
                <span className="path4" />
              </i>
            </div>
            {/*begin::My apps*/}
            <div
              className="menu menu-sub menu-sub-dropdown menu-column w-100 w-sm-350px"
              data-kt-menu="true"
            >
              {/*begin::Card*/}
              <div className="card">
                {/*begin::Card header*/}
                <div className="card-header">
                  {/*begin::Card title*/}
                  <div className="card-title">My Apps</div>
                  {/*end::Card title*/}
                  {/*begin::Card toolbar*/}
                  <div className="card-toolbar">
                    {/*begin::Menu*/}
                    <button
                      type="button"
                      className="btn btn-sm btn-icon btn-active-light-primary me-n3"
                      data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                      data-kt-menu-placement="bottom-end"
                    >
                      <i className="ki-duotone ki-setting-3 fs-2">
                        <span className="path1" />
                        <span className="path2" />
                        <span className="path3" />
                        <span className="path4" />
                        <span className="path5" />
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
                          Payments
                        </div>
                      </div>
                      {/*end::Heading*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">
                          Create Invoice
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a
                          href="#"
                          className="menu-link flex-stack px-3"
                        >
                          Create Payment
                          <span
                            className="ms-2"
                            data-bs-toggle="tooltip"
                            title="Specify a target name for future usage and reference"
                          >
                            <i className="ki-duotone ki-information fs-6">
                              <span className="path1" />
                              <span className="path2" />
                              <span className="path3" />
                            </i>
                          </span>
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">
                          Generate Bill
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div
                        className="menu-item px-3"
                        data-kt-menu-trigger="hover"
                        data-kt-menu-placement="right-end"
                      >
                        <a href="#" className="menu-link px-3">
                          <span className="menu-title">
                            Subscription
                          </span>
                          <span className="menu-arrow" />
                        </a>
                        {/*begin::Menu sub*/}
                        <div className="menu-sub menu-sub-dropdown w-175px py-4">
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">
                              {" "}
                              Plans{" "}
                            </a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">
                              Billing
                            </a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">
                              Statements
                            </a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu separator*/}
                          <div className="separator my-2" />
                          {/*end::Menu separator*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3">
                            <div className="menu-content px-3">
                              {/*begin::Switch*/}
                              <label className="form-check form-switch form-check-custom form-check-solid">
                                {/*begin::Input*/}
                                <input
                                  className="form-check-input w-30px h-20px"
                                  type="checkbox"
                                  defaultValue={1}
                                  defaultChecked="checked"
                                  name="notifications"
                                />
                                {/*end::Input*/}
                                {/*end::Label*/}
                                <span className="form-check-label text-muted fs-6">
                                  Recuring
                                </span>
                                {/*end::Label*/}
                              </label>
                              {/*end::Switch*/}
                            </div>
                          </div>
                          {/*end::Menu item*/}
                        </div>
                        {/*end::Menu sub*/}
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3 my-1">
                        <a href="#" className="menu-link px-3">
                          {" "}
                          Settings{" "}
                        </a>
                      </div>
                      {/*end::Menu item*/}
                    </div>
                    {/*end::Menu 3*/}
                    {/*end::Menu*/}
                  </div>
                  {/*end::Card toolbar*/}
                </div>
                {/*end::Card header*/}
                {/*begin::Card body*/}
                <div className="card-body py-5">
                  {/*begin::Scroll*/}
                  <div className="mh-450px scroll-y me-n5 pe-5">
                    {/*begin::Row*/}
                    <div className="row g-2">
                      {/*begin::Col*/}
                      <div className="col-4">
                        <a
                          href="#"
                          className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                        >
                          <img
                            src="../assets/media/svg/brand-logos/amazon.svg"
                            className="w-25px h-25px mb-2"
                            alt=""
                          />
                          <span className="fw-semibold">AWS</span>
                        </a>
                      </div>
                      {/*end::Col*/}
                      {/*begin::Col*/}
                      <div className="col-4">
                        <a
                          href="#"
                          className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                        >
                          <img
                            src="../assets/media/svg/brand-logos/angular-icon-1.svg"
                            className="w-25px h-25px mb-2"
                            alt=""
                          />
                          <span className="fw-semibold">AngularJS</span>
                        </a>
                      </div>
                      {/*end::Col*/}
                      {/*begin::Col*/}
                      <div className="col-4">
                        <a
                          href="#"
                          className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                        >
                          <img
                            src="../assets/media/svg/brand-logos/atica.svg"
                            className="w-25px h-25px mb-2"
                            alt=""
                          />
                          <span className="fw-semibold">Atica</span>
                        </a>
                      </div>
                      {/*end::Col*/}
                      {/*begin::Col*/}
                      <div className="col-4">
                        <a
                          href="#"
                          className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                        >
                          <img
                            src="../assets/media/svg/brand-logos/beats-electronics.svg"
                            className="w-25px h-25px mb-2"
                            alt=""
                          />
                          <span className="fw-semibold">Music</span>
                        </a>
                      </div>
                      {/*end::Col*/}
                      {/*begin::Col*/}
                      <div className="col-4">
                        <a
                          href="#"
                          className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                        >
                          <img
                            src="../assets/media/svg/brand-logos/codeigniter.svg"
                            className="w-25px h-25px mb-2"
                            alt=""
                          />
                          <span className="fw-semibold">
                            Codeigniter
                          </span>
                        </a>
                      </div>
                      {/*end::Col*/}
                      {/*begin::Col*/}
                      <div className="col-4">
                        <a
                          href="#"
                          className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                        >
                          <img
                            src="../assets/media/svg/brand-logos/bootstrap-4.svg"
                            className="w-25px h-25px mb-2"
                            alt=""
                          />
                          <span className="fw-semibold">Bootstrap</span>
                        </a>
                      </div>
                      {/*end::Col*/}
                      {/*begin::Col*/}
                      <div className="col-4">
                        <a
                          href="#"
                          className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                        >
                          <img
                            src="../assets/media/svg/brand-logos/google-tag-manager.svg"
                            className="w-25px h-25px mb-2"
                            alt=""
                          />
                          <span className="fw-semibold">GTM</span>
                        </a>
                      </div>
                      {/*end::Col*/}
                      {/*begin::Col*/}
                      <div className="col-4">
                        <a
                          href="#"
                          className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                        >
                          <img
                            src="../assets/media/svg/brand-logos/disqus.svg"
                            className="w-25px h-25px mb-2"
                            alt=""
                          />
                          <span className="fw-semibold">Disqus</span>
                        </a>
                      </div>
                      {/*end::Col*/}
                      {/*begin::Col*/}
                      <div className="col-4">
                        <a
                          href="#"
                          className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                        >
                          <img
                            src="../assets/media/svg/brand-logos/dribbble-icon-1.svg"
                            className="w-25px h-25px mb-2"
                            alt=""
                          />
                          <span className="fw-semibold">Dribble</span>
                        </a>
                      </div>
                      {/*end::Col*/}
                      {/*begin::Col*/}
                      <div className="col-4">
                        <a
                          href="#"
                          className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                        >
                          <img
                            src="../assets/media/svg/brand-logos/google-play-store.svg"
                            className="w-25px h-25px mb-2"
                            alt=""
                          />
                          <span className="fw-semibold">
                            Play Store
                          </span>
                        </a>
                      </div>
                      {/*end::Col*/}
                      {/*begin::Col*/}
                      <div className="col-4">
                        <a
                          href="#"
                          className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                        >
                          <img
                            src="../assets/media/svg/brand-logos/google-podcasts.svg"
                            className="w-25px h-25px mb-2"
                            alt=""
                          />
                          <span className="fw-semibold">Podcasts</span>
                        </a>
                      </div>
                      {/*end::Col*/}
                      {/*begin::Col*/}
                      <div className="col-4">
                        <a
                          href="#"
                          className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                        >
                          <img
                            src="../assets/media/svg/brand-logos/figma-1.svg"
                            className="w-25px h-25px mb-2"
                            alt=""
                          />
                          <span className="fw-semibold">Figma</span>
                        </a>
                      </div>
                      {/*end::Col*/}
                      {/*begin::Col*/}
                      <div className="col-4">
                        <a
                          href="#"
                          className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                        >
                          <img
                            src="../assets/media/svg/brand-logos/github.svg"
                            className="w-25px h-25px mb-2"
                            alt=""
                          />
                          <span className="fw-semibold">Github</span>
                        </a>
                      </div>
                      {/*end::Col*/}
                      {/*begin::Col*/}
                      <div className="col-4">
                        <a
                          href="#"
                          className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                        >
                          <img
                            src="../assets/media/svg/brand-logos/gitlab.svg"
                            className="w-25px h-25px mb-2"
                            alt=""
                          />
                          <span className="fw-semibold">Gitlab</span>
                        </a>
                      </div>
                      {/*end::Col*/}
                      {/*begin::Col*/}
                      <div className="col-4">
                        <a
                          href="#"
                          className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                        >
                          <img
                            src="../assets/media/svg/brand-logos/instagram-2-1.svg"
                            className="w-25px h-25px mb-2"
                            alt=""
                          />
                          <span className="fw-semibold">Instagram</span>
                        </a>
                      </div>
                      {/*end::Col*/}
                      {/*begin::Col*/}
                      <div className="col-4">
                        <a
                          href="#"
                          className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                        >
                          <img
                            src="../assets/media/svg/brand-logos/pinterest-p.svg"
                            className="w-25px h-25px mb-2"
                            alt=""
                          />
                          <span className="fw-semibold">Pinterest</span>
                        </a>
                      </div>
                      {/*end::Col*/}
                    </div>
                    {/*end::Row*/}
                  </div>
                  {/*end::Scroll*/}
                </div>
                {/*end::Card body*/}
              </div>
              {/*end::Card*/}
            </div>
            {/*end::My apps*/}
            {/*end::Menu wrapper*/}
          </div>
          {/*end::My apps links*/}
          {/*begin::Theme mode*/}
          <div className="app-navbar-item ms-1 ms-md-4">
            {/*begin::Menu toggle*/}
            <a
              href="#"
              className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px"
              data-kt-menu-trigger="{default:'click', lg: 'hover'}"
              data-kt-menu-attach="parent"
              data-kt-menu-placement="bottom-end"
            >
              <i className="ki-duotone ki-night-day theme-light-show fs-1">
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
              </i>
              <i className="ki-duotone ki-moon theme-dark-show fs-1">
                <span className="path1" />
                <span className="path2" />
              </i>
            </a>
            {/*begin::Menu toggle*/}
            {/*begin::Menu*/}
            <div
              className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-gray-500 menu-active-bg menu-state-color fw-semibold py-4 fs-base w-150px"
              data-kt-menu="true"
              data-kt-element="theme-mode-menu"
            >
              {/*begin::Menu item*/}
              <div className="menu-item px-3 my-0">
                <a
                  href="#"
                  className="menu-link px-3 py-2"
                  data-kt-element="mode"
                  data-kt-value="light"
                >
                  <span className="menu-icon" data-kt-element="icon">
                    <i className="ki-duotone ki-night-day fs-2">
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
                    </i>
                  </span>
                  <span className="menu-title"> Light </span>
                </a>
              </div>
              {/*end::Menu item*/}
              {/*begin::Menu item*/}
              <div className="menu-item px-3 my-0">
                <a
                  href="#"
                  className="menu-link px-3 py-2"
                  data-kt-element="mode"
                  data-kt-value="dark"
                >
                  <span className="menu-icon" data-kt-element="icon">
                    <i className="ki-duotone ki-moon fs-2">
                      <span className="path1" />
                      <span className="path2" />
                    </i>
                  </span>
                  <span className="menu-title"> Dark </span>
                </a>
              </div>
              {/*end::Menu item*/}
              {/*begin::Menu item*/}
              <div className="menu-item px-3 my-0">
                <a
                  href="#"
                  className="menu-link px-3 py-2"
                  data-kt-element="mode"
                  data-kt-value="system"
                >
                  <span className="menu-icon" data-kt-element="icon">
                    <i className="ki-duotone ki-screen fs-2">
                      <span className="path1" />
                      <span className="path2" />
                      <span className="path3" />
                      <span className="path4" />
                    </i>
                  </span>
                  <span className="menu-title"> System </span>
                </a>
              </div>
              {/*end::Menu item*/}
            </div>
            {/*end::Menu*/}
          </div>
          {/*end::Theme mode*/}
          {/*begin::User menu*/}
          <div
            className="app-navbar-item ms-1 ms-md-4"
            id="kt_header_user_menu_toggle"
          >
            {/*begin::Menu wrapper*/}
            <div
              className="cursor-pointer symbol symbol-35px"
              data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
              data-kt-menu-attach="parent"
              data-kt-menu-placement="bottom-end"
            >
              <img
                src="../assets/media/avatars/300-3.jpg"
                className="rounded-3"
                alt="user"
              />
            </div>
            {/*begin::User account menu*/}
            <div
              className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px"
              data-kt-menu="true"
            >
              {/*begin::Menu item*/}
              <div className="menu-item px-3">
                <div className="menu-content d-flex align-items-center px-3">
                  {/*begin::Avatar*/}
                  <div className="symbol symbol-50px me-5">
                    <img
                      alt="Logo"
                      src="../assets/media/avatars/300-3.jpg"
                    />
                  </div>
                  {/*end::Avatar*/}
                  {/*begin::Username*/}
                  <div className="d-flex flex-column">
                    <div className="fw-bold d-flex align-items-center fs-5">
                      Robert Fox
                      <span className="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">
                        Pro
                      </span>
                    </div>
                    <a
                      href="#"
                      className="fw-semibold text-muted text-hover-primary fs-7"
                    >
                      robert@kt.com
                    </a>
                  </div>
                  {/*end::Username*/}
                </div>
              </div>
              {/*end::Menu item*/}
              {/*begin::Menu separator*/}
              <div className="separator my-2" />
              {/*end::Menu separator*/}
              {/*begin::Menu item*/}
              <div className="menu-item px-5">
                <a
                  href="../account/overview.html"
                  className="menu-link px-5"
                >
                  My Profile
                </a>
              </div>
              {/*end::Menu item*/}
              {/*begin::Menu item*/}
              <div className="menu-item px-5">
                <a
                  href="../apps/projects/list.html"
                  className="menu-link px-5"
                >
                  <span className="menu-text">My Projects</span>
                  <span className="menu-badge">
                    <span className="badge badge-light-danger badge-circle fw-bold fs-7">
                      3
                    </span>
                  </span>
                </a>
              </div>
              {/*end::Menu item*/}
              {/*begin::Menu item*/}
              <div
                className="menu-item px-5"
                data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                data-kt-menu-placement="left-start"
                data-kt-menu-offset="-15px, 0"
              >
                <a href="#" className="menu-link px-5">
                  <span className="menu-title">My Subscription</span>
                  <span className="menu-arrow" />
                </a>
                {/*begin::Menu sub*/}
                <div className="menu-sub menu-sub-dropdown w-175px py-4">
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a
                      href="../account/referrals.html"
                      className="menu-link px-5"
                    >
                      Referrals
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a
                      href="../account/billing.html"
                      className="menu-link px-5"
                    >
                      Billing
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a
                      href="../account/statements.html"
                      className="menu-link px-5"
                    >
                      Payments
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a
                      href="../account/statements.html"
                      className="menu-link d-flex flex-stack px-5"
                    >
                      Statements
                      <span
                        className="ms-2 lh-0"
                        data-bs-toggle="tooltip"
                        title="View your statements"
                      >
                        <i className="ki-duotone ki-information-5 fs-5">
                          <span className="path1" />
                          <span className="path2" />
                          <span className="path3" />
                        </i>
                      </span>
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu separator*/}
                  <div className="separator my-2" />
                  {/*end::Menu separator*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <div className="menu-content px-3">
                      <label className="form-check form-switch form-check-custom form-check-solid">
                        <input
                          className="form-check-input w-30px h-20px"
                          type="checkbox"
                          defaultValue={1}
                          defaultChecked="checked"
                          name="notifications"
                        />
                        <span className="form-check-label text-muted fs-7">
                          Notifications
                        </span>
                      </label>
                    </div>
                  </div>
                  {/*end::Menu item*/}
                </div>
                {/*end::Menu sub*/}
              </div>
              {/*end::Menu item*/}
              {/*begin::Menu item*/}
              <div className="menu-item px-5">
                <a
                  href="../account/statements.html"
                  className="menu-link px-5"
                >
                  My Statements
                </a>
              </div>
              {/*end::Menu item*/}
              {/*begin::Menu separator*/}
              <div className="separator my-2" />
              {/*end::Menu separator*/}
              {/*begin::Menu item*/}
              <div
                className="menu-item px-5"
                data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                data-kt-menu-placement="left-start"
                data-kt-menu-offset="-15px, 0"
              >
                <a href="#" className="menu-link px-5">
                  <span className="menu-title position-relative">
                    Mode
                    <span className="ms-5 position-absolute translate-middle-y top-50 end-0">
                      <i className="ki-duotone ki-night-day theme-light-show fs-2">
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
                      </i>
                      <i className="ki-duotone ki-moon theme-dark-show fs-2">
                        <span className="path1" />
                        <span className="path2" />
                      </i>
                    </span>
                  </span>
                </a>
                {/*begin::Menu*/}
                <div
                  className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-gray-500 menu-active-bg menu-state-color fw-semibold py-4 fs-base w-150px"
                  data-kt-menu="true"
                  data-kt-element="theme-mode-menu"
                >
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3 my-0">
                    <a
                      href="#"
                      className="menu-link px-3 py-2"
                      data-kt-element="mode"
                      data-kt-value="light"
                    >
                      <span
                        className="menu-icon"
                        data-kt-element="icon"
                      >
                        <i className="ki-duotone ki-night-day fs-2">
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
                        </i>
                      </span>
                      <span className="menu-title"> Light </span>
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3 my-0">
                    <a
                      href="#"
                      className="menu-link px-3 py-2"
                      data-kt-element="mode"
                      data-kt-value="dark"
                    >
                      <span
                        className="menu-icon"
                        data-kt-element="icon"
                      >
                        <i className="ki-duotone ki-moon fs-2">
                          <span className="path1" />
                          <span className="path2" />
                        </i>
                      </span>
                      <span className="menu-title"> Dark </span>
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3 my-0">
                    <a
                      href="#"
                      className="menu-link px-3 py-2"
                      data-kt-element="mode"
                      data-kt-value="system"
                    >
                      <span
                        className="menu-icon"
                        data-kt-element="icon"
                      >
                        <i className="ki-duotone ki-screen fs-2">
                          <span className="path1" />
                          <span className="path2" />
                          <span className="path3" />
                          <span className="path4" />
                        </i>
                      </span>
                      <span className="menu-title"> System </span>
                    </a>
                  </div>
                  {/*end::Menu item*/}
                </div>
                {/*end::Menu*/}
              </div>
              {/*end::Menu item*/}
              {/*begin::Menu item*/}
              <div
                className="menu-item px-5"
                data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                data-kt-menu-placement="left-start"
                data-kt-menu-offset="-15px, 0"
              >
                <a href="#" className="menu-link px-5">
                  <span className="menu-title position-relative">
                    Language
                    <span className="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0">
                      English
                      <img
                        className="w-15px h-15px rounded-1 ms-2"
                        src="../assets/media/flags/united-states.svg"
                        alt=""
                      />
                    </span>
                  </span>
                </a>
                {/*begin::Menu sub*/}
                <div className="menu-sub menu-sub-dropdown w-175px py-4">
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a
                      href="../account/settings.html"
                      className="menu-link d-flex px-5 active"
                    >
                      <span className="symbol symbol-20px me-4">
                        <img
                          className="rounded-1"
                          src="../assets/media/flags/united-states.svg"
                          alt=""
                        />
                      </span>
                      English
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a
                      href="../account/settings.html"
                      className="menu-link d-flex px-5"
                    >
                      <span className="symbol symbol-20px me-4">
                        <img
                          className="rounded-1"
                          src="../assets/media/flags/spain.svg"
                          alt=""
                        />
                      </span>
                      Spanish
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a
                      href="../account/settings.html"
                      className="menu-link d-flex px-5"
                    >
                      <span className="symbol symbol-20px me-4">
                        <img
                          className="rounded-1"
                          src="../assets/media/flags/germany.svg"
                          alt=""
                        />
                      </span>
                      German
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a
                      href="../account/settings.html"
                      className="menu-link d-flex px-5"
                    >
                      <span className="symbol symbol-20px me-4">
                        <img
                          className="rounded-1"
                          src="../assets/media/flags/japan.svg"
                          alt=""
                        />
                      </span>
                      Japanese
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a
                      href="../account/settings.html"
                      className="menu-link d-flex px-5"
                    >
                      <span className="symbol symbol-20px me-4">
                        <img
                          className="rounded-1"
                          src="../assets/media/flags/france.svg"
                          alt=""
                        />
                      </span>
                      French
                    </a>
                  </div>
                  {/*end::Menu item*/}
                </div>
                {/*end::Menu sub*/}
              </div>
              {/*end::Menu item*/}
              {/*begin::Menu item*/}
              <div className="menu-item px-5 my-1">
                <a
                  href="../account/settings.html"
                  className="menu-link px-5"
                >
                  Account Settings
                </a>
              </div>
              {/*end::Menu item*/}
              {/*begin::Menu item*/}
              <div className="menu-item px-5">
                <a
                  href="../authentication/layouts/corporate/sign-in.html"
                  className="menu-link px-5"
                >
                  Sign Out
                </a>
              </div>
              {/*end::Menu item*/}
            </div>
            {/*end::User account menu*/}
            {/*end::Menu wrapper*/}
          </div>
          {/*end::User menu*/}
          {/*begin::Header menu toggle*/}
          <div
            className="app-navbar-item d-lg-none ms-2 me-n2"
            title="Show header menu"
          >
            <div
              className="btn btn-flex btn-icon btn-active-color-primary w-30px h-30px"
              id="kt_app_header_menu_toggle"
            >
              <i className="ki-duotone ki-element-4 fs-1">
                <span className="path1" />
                <span className="path2" />
              </i>
            </div>
          </div>
          {/*end::Header menu toggle*/}
          {/*begin::Aside toggle*/}
          <div
            className="app-navbar-item d-lg-none ms-2 me-n2"
            title="Show aside"
          >
            <div
              className="btn btn-flex btn-icon btn-active-color-primary w-30px h-30px"
              id="kt_app_aside_toggle"
            >
              <i className="ki-duotone ki-trello fs-1">
                <span className="path1" />
                <span className="path2" />
                <span className="path3" />
              </i>
            </div>
          </div>
          {/*end::Header menu toggle*/}
        </div>
        {/*end::Navbar*/}
      </div>
      {/*end::Header wrapper*/}
    </>
  );
};

export default HeaderWrapper;
