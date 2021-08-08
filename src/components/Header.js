import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

// TODO : - Add states, so selected tab can be highlighted

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
                {/* TITLE FOR MOBILE VIEW NAV BAR, ADD STATE TO HANDLE DYNAMIC TAB SWITCHING */}
                <h4 className="panel-title d-lg-none">Pages</h4>
                {/* RD Navbar Right Side Toggle*/}
                <button
                  className="rd-navbar-top-panel-toggle d-lg-none"
                  data-rd-navbar-toggle=".rd-navbar-top-panel"
                >
                  <span />
                </button>
                <div className="rd-navbar-top-panel">
                  <div className="rd-navbar-top-panel-left-part">
                    <ul className="list-unstyled">
                      <li>
                        <div className="unit flex-row align-items-center unit-spacing-xs">
                          <div className="unit-left">
                            <span className="icon mdi mdi-phone text-middle" />
                          </div>
                          <div className="unit-body">
                            <a href="tel:#">0870 245 9191</a>{" "}
                            {/* <a
                              className="d-block d-lg-inline-block"
                              href="tel:#"
                            >
                              1-800-6547-321
                            </a> */}
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="unit flex-row align-items-center unit-spacing-xs">
                          <div className="unit-left">
                            <span className="icon mdi mdi-map-marker text-middle" />
                          </div>
                          <div className="unit-body">
                            <a href="#">Fathimanagar, Telangana, 506004</a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="unit flex-row align-items-center unit-spacing-xs">
                          <div className="unit-left">
                            <span className="icon mdi mdi-email-open text-middle" />
                          </div>
                          <div className="unit-body">
                            <a href="mailto:#">email@nitw.ac.in</a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
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
                          National Institute of Technology Warangal
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
                      <li className={selectedTab == "home" ? "active" : ""}>
                        <Link to="/">Home</Link>
                        <ul className="rd-navbar-dropdown">
                          <li>
                            <a href="home-1.html">Home 1</a>
                          </li>
                          <li>
                            <a href="home-2.html">Home 2</a>
                          </li>
                          <li>
                            <a href="home-3.html">Home 3</a>
                          </li>
                        </ul>
                      </li>
                      <li
                        className={
                          selectedTab == "administration" ? "active" : ""
                        }
                      >
                        <Link to="/administration">Administration</Link>
                        <ul className="rd-navbar-dropdown">
                          <li>
                            <a href="grid.html">Grid</a>
                          </li>
                          <li>
                            <a href="icons.html">Icons</a>
                          </li>
                          <li>
                            <a href="tables.html">Tables</a>
                          </li>
                          <li>
                            <a href="progress-bars.html">Progress bars</a>
                          </li>
                          <li>
                            <a href="tabs-and-accordions.html">
                              Tabs &amp; Accordions
                            </a>
                          </li>
                          <li>
                            <a href="forms.html">Forms</a>
                          </li>
                          <li>
                            <a href="buttons.html">Buttons</a>
                          </li>
                          <li>
                            <a href="typography.html">Typography</a>
                          </li>
                        </ul>
                      </li>
                      <li
                        className={selectedTab == "academics" ? "active" : ""}
                      >
                        <a href="#">Academics</a>
                        <div className="rd-navbar-megamenu">
                          <div className="row section-relative">
                            <ul className="col-lg-3">
                              <li>
                                <h6>Programs</h6>
                                <ul className="list-unstyled offset-lg-top-20">
                                  <li>
                                    <a href="academics.html">Academics</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                            <ul className="col-lg-3">
                              <li>
                                <h6>Pages</h6>
                                <ul className="list-unstyled offset-lg-top-20">
                                  <li>
                                    <a href="404.html">404</a>
                                  </li>
                                  <li>
                                    <a href="privacy-policy.html">
                                      Privacy Policy
                                    </a>
                                  </li>
                                  <li>
                                    <a href="maintenance.html">Maintenance</a>
                                  </li>
                                  <li>
                                    <a href="login-register.html">
                                      Login/Register
                                    </a>
                                  </li>
                                  <li>
                                    <a href="coming-soon.html">Coming Soon</a>
                                  </li>
                                  <li>
                                    <a href="search-results.html">
                                      Search Results
                                    </a>
                                  </li>
                                  <li>
                                    <a href="apply.html">Apply</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                            <ul className="col-lg-3">
                              <li>
                                <h6>Layouts</h6>
                                <ul className="list-unstyled offset-lg-top-20">
                                  <li>
                                    <a href="header-transparent.html">
                                      Header Transparent
                                    </a>
                                  </li>
                                  <li>
                                    <a href="header-center.html">
                                      Header Center, Footer Center
                                    </a>
                                  </li>
                                  <li>
                                    <a href="header-minimal.html">
                                      Header Minimal, Footer Center
                                    </a>
                                  </li>
                                  <li>
                                    <a href="header-corporate.html">
                                      Header Corporate
                                    </a>
                                  </li>
                                  <li>
                                    <a href="header-hamburger-menu.html">
                                      Header Hamburger Menu
                                    </a>
                                  </li>
                                  <li>
                                    <a href="footer-minimal.html">
                                      Footer Minimal
                                    </a>
                                  </li>
                                  <li>
                                    <a href="footer-widget.html">
                                      Footer Widget
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                            <ul className="col-lg-3">
                              <li>
                                <h6>About</h6>
                                <ul className="list-unstyled offset-lg-top-20">
                                  <li>
                                    <a href="history.html">History</a>
                                  </li>
                                  <li>
                                    <a href="people.html">People</a>
                                  </li>
                                  <li>
                                    <a href="team-member-profile.html">
                                      Team Member Profile
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <h6>Event Calendar</h6>
                                <ul className="list-unstyled offset-lg-top-20">
                                  <li>
                                    <a href="calendar.html">Calendar</a>
                                  </li>
                                  <li>
                                    <a href="day-event.html">Day Event</a>
                                  </li>
                                  <li>
                                    <a href="event-page.html">Event Page</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li className={selectedTab == "research" ? "active" : ""}>
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
                      <li
                        className={selectedTab == "campus_life" ? "active" : ""}
                      >
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
                      <li className={selectedTab == "more" ? "active" : ""}>
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
                      {/* <li>
                        <a href="donate.html">Donate</a>
                      </li>
                      <li>
                        <a href="contacts.html">Contacts</a>
                      </li>
                      <li className="d-lg-none">
                        <a href="shopping-cart.html">Shopping Cart (2)</a>
                      </li> */}
                    </ul>
                    {/*RD Navbar Mobile Search*/}
                    <div
                      className="rd-navbar-search-mobile"
                      id="rd-navbar-search-mobile"
                    >
                      <form
                        className="rd-navbar-search-form search-form-icon-right rd-search"
                        action="search-results.html"
                        method="GET"
                      >
                        <div className="form-wrap">
                          <label
                            className="form-label"
                            htmlFor="rd-navbar-mobile-search-form-input"
                          >
                            Search...
                          </label>
                          <input
                            className="rd-navbar-search-form-input form-input form-input-gray-lightest"
                            id="rd-navbar-mobile-search-form-input"
                            type="text"
                            name="s"
                            autoComplete="off"
                          />
                        </div>
                        <button
                          className="icon fa fa-search rd-navbar-search-button"
                          type="submit"
                        />
                      </form>
                    </div>
                  </div>
                </div>
                {/*RD Navbar Search*/}
                <div className="rd-navbar-search">
                  <a
                    className="rd-navbar-search-toggle mdi"
                    data-rd-navbar-toggle=".rd-navbar-search"
                    href="#"
                  >
                    <span />
                  </a>
                  <form
                    className="rd-navbar-search-form search-form-icon-right rd-search"
                    action="search-results.html"
                    data-search-live="rd-search-results-live"
                    method="GET"
                  >
                    <div className="form-wrap">
                      <label
                        className="form-label"
                        htmlFor="rd-navbar-search-form-input"
                      >
                        Search
                      </label>
                      <input
                        className="rd-navbar-search-form-input form-input form-input-gray-lightest"
                        id="rd-navbar-search-form-input"
                        type="text"
                        name="s"
                        autoComplete="off"
                      />
                      <div
                        className="rd-search-results-live"
                        id="rd-search-results-live"
                      />
                    </div>
                  </form>
                </div>
                {/*RD Navbar shop*/}
                <div className="rd-navbar-cart">
                  <span className="icon fa fa-shopping-cart" />
                  <a className="inset-left-10" href="shopping-cart.html">
                    2
                  </a>
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
