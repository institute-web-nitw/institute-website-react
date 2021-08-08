import React from "react";
import { Helmet } from "react-helmet";

const Footer = () => {
  return (
    <React.Fragment>
      <Helmet>
        <script src="js/core.min.js"></script>
        <script src="js/script.js"></script>
      </Helmet>
      <footer className="section-xs page-footer">
        <div className="container">
          <div className="row row-20 justify-content-sm-center align-items-md-center text-lg-start">
            <div className="col-sm-10 col-lg-6">
              {/*Footer brand*/}
              <a className="d-inline-block" href="index.html">
                <div className="unit align-items-sm-center unit-md flex-column flex-lg-row unit-spacing-xxs">
                  <div className="unit-left">
                    <img
                      className="img-responsive d-inline-block"
                      src="images/logo-170x172.png"
                      width={70}
                      height={70}
                      alt
                    />
                  </div>
                  <div className="unit-body text-xxl-start">
                    <div>
                      <h6 className="barnd-name text-ubold">
                        National Institute of Technology Warangal
                      </h6>
                    </div>
                    <div className="offset-top-0">
                      <p className="brand-slogan text-gray fst-italic font-accent">
                        Warangal, Telangana
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-sm-10 col-lg-6 text-lg-end">
              <p className="text-dark rights">
                <span>©&nbsp;</span>
                <span className="copyright-year" />
                <span>.&nbsp;</span>
                <span>All Rights Reserved</span>
                <span>.&nbsp;</span>
                <a className="text-dark" href="privacy-policy.html">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
