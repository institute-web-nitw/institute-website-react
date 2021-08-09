import React from "react";
import { Helmet } from "react-helmet";

const Loader = () => {
  return (
    <React.Fragment>
      <Helmet>
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
      </div>
    </React.Fragment>
  );
};

export default Loader;
