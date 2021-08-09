import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

const NotFoundPage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title> 404 </title>
        <script src="js/core.min.js"></script>
        <script src="js/script.js"></script>
      </Helmet>

      <div className="page text-center">
        {/* Page Content*/}
        <section className="section page-content section-cover section-404 section-30 bg-default">
          <div>
            <Link to="/">
              <img
                src="images/logo-170x172.png"
                width={110}
                height={110}
                alt="nitw logo"
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
                  You may have mistyped the address or the page may have moved.
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
                    to="/contact"
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
              © <span className="copyright-year" /> All Rights Reserved,
              National Institute of Technology, Warangal.
            </p>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default NotFoundPage;
