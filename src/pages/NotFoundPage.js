import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title> 404 Page Not Found </title>
        <script src="js/core.min.js"></script>
        <script src="js/script.js"></script>
      </Helmet>

      <div>
        <div className="ie-panel">
          <a href="http://windows.microsoft.com/en-US/internet-explorer/">
            <img
              src="images/ie8-panel/warning_bar_0000_us.jpg"
              height={42}
              width={820}
              alt="You are using an outdated browser. For a faster, safer browsing experience, upgrade for free today."
            />
          </a>
        </div>
        <div className="preloader">
          <div className="preloader-body">
            <div className="cssload-container">
              <div className="cssload-speeding-wheel" />
            </div>
            <p>Loading...</p>
          </div>
        </div>
        {/* Page*/}
        <div className="page text-center">
          {/* Page Content*/}
          <section className="section page-content section-cover section-404 section-30 bg-default">
            <div>
              <Link to="/">
                <img
                  src="images/logo-170x172.png"
                  width={110}
                  height={110}
                  alt
                />
              </Link>
            </div>
            <div className="section-xxs">
              <div className="container">
                <div>
                  <h1 className="font-default">
                    <span className="big text-light fw-bold">404</span>
                  </h1>
                </div>
                <div className="offset-top-10">
                  <h2 className="fw-bold">Sorry, the page was not found</h2>
                </div>
                <div className="offset-top-15 offset-lg-top-30">
                  <hr className="divider bg-madison" />
                </div>
                <div className="offset-top-30 offset-lg-top-60">
                  <p>
                    You may have mistyped the address or the page may have
                    moved.
                  </p>
                </div>
                <div className="offset-top-15 offset-lg-top-30">
                  <div className="group group-xl">
                    <Link
                      className="btn button-primary btn-icon btn-icon btn-icon-left"
                      to="/"
                    >
                      <span className="icon fa fa-arrow-left" />
                      <span>Back to Home Page</span>
                    </Link>
                    <Link
                      className="btn button-default btn-icon btn-icon btn-icon-left"
                      to="/contacts"
                    >
                      <span className="icon fa fa-envelope" />
                      <span>Contact Us</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p>
                © <span className="copyright-year" /> All Rights Reserved Terms
                of Use. Design&nbsp;by&nbsp; NITW
              </p>
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NotFoundPage;
