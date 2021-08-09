import React from "react";

const PageHeader = ({ heading }) => {
  return (
    <section className="section breadcrumb-classic context-dark">
      <div className="container">
        <h1>{heading}</h1>
        {/* <div className="offset-top-10 offset-md-top-35">
            <ul className="list-inline list-inline-lg list-inline-dashed p">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="#">Elements</a>
              </li>
              <li>Typography</li>
            </ul>
          </div> */}
      </div>
    </section>
  );
};

export default PageHeader;
