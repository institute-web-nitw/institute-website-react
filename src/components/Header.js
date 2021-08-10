import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Header = ({ selectedTab }) => {
  return (
    <React.Fragment>
      <Helmet>
        <script src="js/core.min.js"></script>
        <script src="js/script.js"></script>
      </Helmet>
      <header className="page-head">
        {/* RD Navbar Transparent*/}
        <div className="rd-navbar-wrap">
          <nav
            className="rd-navbar rd-navbar-default"
            data-md-device-layout="rd-navbar-static"
            data-lg-device-layout="rd-navbar-static"
            data-xl-device-layout="rd-navbar-static"
            data-stick-up-offset={210}
            data-xl-stick-up-offset={85}
            data-lg-auto-height="true"
            data-auto-height="false"
            data-md-layout="rd-navbar-static"
            data-lg-layout="rd-navbar-static"
            data-lg-stick-up="true"
          >
            <div className="rd-navbar-inner">
              {/* RD Navbar Panel*/}
              <div className="rd-navbar-panel">
                {/* RD Navbar Toggle*/}
                <button
                  className="rd-navbar-toggle"
                  data-rd-navbar-toggle=".rd-navbar, .rd-navbar-nav-wrap"
                >
                  <span />
                </button>
                <h4 className="panel-title d-lg-none">NIT Warangal</h4>
                {/* RD Navbar Right Side Toggle*/}
                <button
                  className="rd-navbar-top-panel-toggle d-lg-none"
                  data-rd-navbar-toggle=".rd-navbar-top-panel"
                >
                  <span />
                </button>
                {/* <div className="rd-navbar-top-panel">
                  <div className="rd-navbar-top-panel-left-part">
                    <ul className="list-unstyled">
                      <li>
                        <div className="unit flex-row align-items-center unit-spacing-xs">
                          <div className="unit-left">
                            <span className="icon mdi mdi-phone text-middle" />
                          </div>
                          <div className="unit-body">
                            <a href="tel:#">1-800-1234-567,</a>{" "}
                            <a
                              className="d-block d-lg-inline-block"
                              href="tel:#"
                            >
                              1-800-6547-321
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="unit flex-row align-items-center unit-spacing-xs">
                          <div className="unit-left">
                            <span className="icon mdi mdi-map-marker text-middle" />
                          </div>
                          <div className="unit-body">
                            <a href="#">
                              2130 Fulton Street San Diego, CA 94117-1080 USA
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="unit flex-row align-items-center unit-spacing-xs">
                          <div className="unit-left">
                            <span className="icon mdi mdi-email-open text-middle" />
                          </div>
                          <div className="unit-body">
                            <a href="mailto:#">info@demolink.org</a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div> */}
              </div>
              <div className="rd-navbar-menu-wrap clearfix">
                {/*Navbar Brand*/}
                <div className="rd-navbar-brand">
                  <a className="d-inline-block" href="index.html">
                    <div className="unit align-items-sm-center unit-xl flex-column flex-xxl-row unit-spacing-custom">
                      <div className="unit-left">
                        <img
                          width={170}
                          height={172}
                          src="images/logo-170x172.png"
                          alt
                        />
                      </div>
                      <div className="unit-body text-xxl-start">
                        <div className="rd-navbar-brand-title">
                          National Institute of Technology, Warangal
                        </div>
                        <div className="rd-navbar-brand-slogan">
                          Telangana, India
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="rd-navbar-nav-wrap">
                  <div className="rd-navbar-mobile-scroll">
                    <div className="rd-navbar-mobile-header-wrap">
                      {/*Navbar Brand Mobile*/}
                      <div className="rd-navbar-mobile-brand">
                        <a href="index.html">
                          <img
                            width={136}
                            height={138}
                            src="images/logo-170x172.png"
                            alt
                          />
                        </a>
                      </div>
                    </div>
                    {/* RD Navbar Nav*/}
                    <ul className="rd-navbar-nav">
                      {/* HOME NAVBAR ITEMS */}
                      <li className="active">
                        <a href="index.html">Home</a>
                        <ul className="rd-navbar-dropdown">
                          <li>
                            <a href="home-1.html">About Us</a>
                          </li>
                          <li>
                            <a href="home-2.html">Board of Governers</a>
                          </li>
                          <li>
                            <a href="home-3.html">
                              Building and Works Committee
                            </a>
                          </li>
                          <li>
                            <a href="home-3.html">Finance Committee</a>
                          </li>
                          <li>
                            <a href="home-3.html">Gallery</a>
                          </li>
                          <li>
                            <a href="home-3.html">Mission</a>
                          </li>
                          <li>
                            <a href="home-3.html">Vision</a>
                          </li>
                          <li>
                            <a href="home-3.html">Visiting NITW</a>
                          </li>
                        </ul>
                      </li>

                      {/* ADMINISTRATION NAVBAR ITEMS */}
                      <li>
                        <a href="#">Administration</a>
                        <ul className="rd-navbar-dropdown">
                          <li>
                            <a href="grid.html">Academic Administration</a>
                          </li>
                          <li>
                            <a href="icons.html">Registrar</a>
                          </li>
                          <li>
                            <a href="tables.html">Chairman</a>
                          </li>
                          <li>
                            <a href="progress-bars.html">
                              Chief Vigilance Officer
                            </a>
                          </li>
                          <li>
                            <a href="tabs-and-accordions.html">Director</a>
                          </li>
                          <li>
                            <a href="forms.html">Emergency Contact Numbers</a>
                          </li>
                          <li>
                            <a href="buttons.html">
                              Faculty Information System
                            </a>
                          </li>
                          <li>
                            <a href="typography.html">Annual Report</a>
                          </li>
                          <li>
                            <a href="typography.html">
                              Memorandum of Association
                            </a>
                          </li>
                          <li>
                            <a href="typography.html">
                              Memorandum of Understanding
                            </a>
                          </li>
                          <li>
                            <a href="typography.html">About NITs Council</a>
                          </li>
                          <li>
                            <a href="typography.html">Organization Chart</a>
                          </li>
                          <li>
                            <a href="typography.html">Right to Information</a>
                          </li>
                          <li>
                            <a href="typography.html">Statutory Policies</a>
                          </li>
                        </ul>
                      </li>

                      {/* ACADEMICS NAVBAR ITEMS */}
                      <li>
                        <a href="#">Academics</a>
                        <div className="rd-navbar-megamenu">
                          <div className="row section-relative">
                            {/* GENERAL LINKS COLUMN */}
                            <ul className="col-lg-3">
                              <li>
                                <h6>General Links</h6>
                                <ul className="list-unstyled offset-lg-top-20">
                                  <li>
                                    <a href="academics.html">
                                      Academic Services
                                    </a>
                                  </li>
                                  <li>
                                    <a href="academics.html">Departments</a>
                                  </li>
                                  <li>
                                    <a href="academics.html">Announcements</a>
                                  </li>
                                  <li>
                                    <a href="academics.html">Academic Report</a>
                                  </li>
                                  <li>
                                    <a href="academics.html">Academic Team</a>
                                  </li>
                                  <li>
                                    <a href="academics.html">Admissions</a>
                                  </li>
                                  <li>
                                    <a href="academics.html">Fee Structure</a>
                                  </li>
                                  <li>
                                    <a href="academics.html">Forms</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>

                            {/* DEPARTMENTSCOLUMN */}
                            <ul className="col-lg-3">
                              <li>
                                <h6>Departments</h6>
                                <ul className="list-unstyled offset-lg-top-20">
                                  <li>
                                    <a href="header-minimal.html">
                                      Electrical Engineering
                                    </a>
                                  </li>
                                  <li>
                                    <a href="header-minimal.html">
                                      Mechanical Engineering
                                    </a>
                                  </li>
                                  <li>
                                    <a href="header-minimal.html">
                                      Chemical Engineering
                                    </a>
                                  </li>
                                  <li>
                                    <a href="header-minimal.html">
                                      Civil Engineering
                                    </a>
                                  </li>
                                  <li>
                                    <a href="header-minimal.html">
                                      Biotechnology
                                    </a>
                                  </li>
                                  <li>
                                    <a href="header-minimal.html">
                                      Humanities and Social Science
                                    </a>
                                  </li>
                                  <li>
                                    <a href="header-minimal.html">
                                      Chemistry Department
                                    </a>
                                  </li>
                                  <li>
                                    <a href="header-minimal.html">
                                      Maths Department
                                    </a>
                                  </li>
                                  <li>
                                    <a href="header-minimal.html">
                                      Physics Department
                                    </a>
                                  </li>
                                  <li>
                                    <a href="header-minimal.html">
                                      Physical Education
                                    </a>
                                  </li>
                                  <li>
                                    <a href="header-minimal.html">
                                      School of Management
                                    </a>
                                  </li>
                                  <li>
                                    <a href="header-minimal.html">
                                      Metallurgical and Materials Engineering
                                    </a>
                                  </li>
                                  <li>
                                    <a href="header-center.html">
                                      Electronics and Communication Engineering
                                    </a>
                                  </li>
                                  <li>
                                    <a href="header-transparent.html">
                                      Computer Science and Engineering
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>

                            {/* RULES AND REGULATIONS COLUMN */}
                            <ul className="col-lg-3">
                              <li>
                                <h6>Rules and Regulations</h6>
                                <ul className="list-unstyled offset-lg-top-20">
                                  <li>
                                    <a href="header-transparent.html">
                                      Ph. D Programmes
                                    </a>
                                  </li>
                                  <li>
                                    <a href="header-center.html">
                                      PG Programmes
                                    </a>
                                  </li>
                                  <li>
                                    <a href="header-minimal.html">
                                      Undergraduate Programmes
                                    </a>
                                  </li>
                                </ul>
                              </li>

                              <li>
                                <h6>Academic Calendar</h6>
                                <ul className="list-unstyled offset-lg-top-20">
                                  <li>
                                    <a href="404.html">Odd Semester</a>
                                  </li>
                                  <li>
                                    <a href="privacy-policy.html">
                                      Even Semester
                                    </a>
                                  </li>
                                  <li>
                                    <a href="maintenance.html">
                                      Summer Quarter
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>

                            {/* ACADEMIC PROGRAMMES COLUMN */}
                            <ul className="col-lg-3">
                              <li>
                                <h6>Academic Programmes</h6>
                                <ul className="list-unstyled offset-lg-top-20">
                                  <li>
                                    <a href="history.html">
                                      Doctor of Philosophy
                                    </a>
                                  </li>
                                  <li>
                                    <a href="people.html">Postgraduate</a>
                                  </li>
                                  <li>
                                    <a href="team-member-profile.html">
                                      Undergraduate
                                    </a>
                                  </li>
                                </ul>
                              </li>

                              <li>
                                <h6>Time Table</h6>
                                <ul className="list-unstyled offset-lg-top-20">
                                  <li>
                                    <a href="calendar.html">Even Semester</a>
                                  </li>
                                  <li>
                                    <a href="day-event.html">Odd Semester</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>

                      {/* RESEARCH NAVBAR ITEMS */}
                      <li>
                        <a href="#">Research</a>
                        <ul className="rd-navbar-dropdown">
                          <li>
                            <a href="classic-news.html">Classic news</a>
                          </li>
                          <li>
                            <a href="grid-news.html">Grid News</a>
                          </li>
                          <li>
                            <a href="masonry-news.html">Masonry News</a>
                          </li>
                          <li>
                            <a href="grid-news-3-columns.html">
                              3 Column Grid News
                            </a>
                          </li>
                          <li>
                            <a href="modern-news.html">Modern News</a>
                          </li>
                          <li>
                            <a href="news-post-page.html">News Post Page</a>
                          </li>
                        </ul>
                      </li>

                      {/* CAMPUS LIFE NAVBAR ITEMS */}
                      <li>
                        <a href="#">Campus Life</a>
                        <ul className="rd-navbar-dropdown">
                          <li>
                            <a href="grid-gallery.html">Grid Gallery</a>
                          </li>
                          <li>
                            <a href="grid-without-padding-gallery.html">
                              Grid Without Padding Gallery
                            </a>
                          </li>
                          <li>
                            <a href="masonry-gallery.html">Masonry Gallery</a>
                          </li>
                          <li>
                            <a href="cobbles-gallery.html">Cobbles Gallery</a>
                          </li>
                        </ul>
                      </li>

                      {/* MORE NAVBAR ITEMS */}
                      <li>
                        <a href="#">More</a>
                        <ul className="rd-navbar-dropdown">
                          <li>
                            <a href="product-catalog.html">Product Catalog</a>
                          </li>
                          <li>
                            <a href="single-product.html">Single Product</a>
                          </li>
                          <li>
                            <a href="shopping-cart.html">Shopping Cart</a>
                          </li>
                          <li>
                            <a href="checkout.html">Checkout</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
