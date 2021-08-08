import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { Helmet } from "react-helmet";

const DepartmentPage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <script src="js/core.min.js"></script>
        <script src="js/script.js"></script>
      </Helmet>
      <div className="page-head">
        <Header selectedTab="home" />
      </div>
      <section className="section breadcrumb-classic context-dark">
        <div className="container">
          <h2>Computer Science and Engineering</h2>
          <div className="offset-top-10 offset-md-top-35">
            {/* <ul className="list-inline list-inline-lg list-inline-dashed p">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="#">Pages</a>
                </li>
                <li>Programs</li>
              </ul> */}
          </div>
        </div>
      </section>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default DepartmentPage;
