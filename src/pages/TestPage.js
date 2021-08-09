import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Header from "../components/Header";

const TestPage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Test</title>
        <script src="js/core.min.js"></script>
        <script src="js/script.js"></script>
      </Helmet>

      <div className="page text-center">
        <Header></Header>
        <h1>This is a test</h1>
        <Footer></Footer>
      </div>
    </React.Fragment>
  );
};

export default TestPage;
