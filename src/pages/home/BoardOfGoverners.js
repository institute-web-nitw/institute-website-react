import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PageHeader from "../../components/PageHeader";

const BoardOfGoverners = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Board of Governers</title>
        <script src="js/core.min.js"></script>
        <script src="js/script.js"></script>
      </Helmet>

      <div className="page text-center">
        <Header></Header>
        <PageHeader heading="Board of Governers"> </PageHeader>

        <section className="section section-lg bg-default">
          <div className="container">
            <h4 className="fw-bold"> The Board of every Institute shall consist of the members as laid down
                under section 11 of the NITs Act, 2007. At present the following are
                the members of the Institute:- </h4>
            <h3 className="fw-bold">DETAILS OF THE CHAIRMAN AND THE MEMBERS OF THE BOARD OF&nbsp;GOVERNORS
                OF NATIONAL INSTITUTE OF TECHNOLOGY, WARANGAL.</h3>
            <hr className="divider bg-madison" />
            <div className="row offset-md-top-60 justify-content-sm-center">
              <div className="col-md-10 col-xl-10">
                {/* Classic Responsive Table*/}
                <table
                  className="table table-custom table-dark-blue table-fixed bordered-table"
                  data-responsive="true"
                >
                  <tbody>
                    <tr>
                      <th>SL. NO.</th>
                      <th>POSITION</th>
                      <th>NAME, DESIGNATION &amp; ADDRESS</th>
                      <th>E-MAIL ID, PHONE &amp; FAX NOS.</th>
                    </tr>
                    <tr>
                      <td> 1.</td>
                      <td> Chairman  <br />
                          (Sec. 11 Cl. (a) )
                        
                      </td>
                      <td>
                        <strong>
                          <a href="https://www.nitw.ac.in/main/administration/director/">
                          Prof. N.V. Ramana Rao <br />
                          </a> 
                          </strong> 
                          Chairman In-charge, <br /> 
                          N.I.T. , Warangal - 506004. 
                        
                      </td>
                      <td>
                        <a href="mailto:director@mail.nitw.ac.in">
                         <strong> director@nitw.ac.in </strong>
                        </a>
                      </td>
                    </tr>
                    
                    <tr>
                      <td> 2.</td>
                      <td> Member  <br />
                      (Sec. 11 Cl. (b) )
                        
                      </td>
                      <td>
                        <strong>
                          <a href="https://www.nitw.ac.in/main/administration/director/">
                          Prof. N.V. Ramana Rao <br />
                          </a> 
                          </strong> 
                          Director, <br /> 
                          N.I.T., Warangal - 506004. 
                        
                      </td>
                      <td>
                        <a href="mailto:director@mail.nitw.ac.in">
                        <strong> director@nitw.ac.in </strong>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td> 3.</td>
                      <td> Member  <br />
                        (Sec. 11 Cl. (c) ) 
                      </td>
                      <td>
                        <strong>
                          <a href="https://www.nitw.ac.in/main/administration/bogbwcfc/">
                          Dr. Sukhbir Singh Sandhu
                          </a>
                        </strong>  <br />
                        Addl. Secretary, <br />
                        Dept. of Higher Education, <br /> 
                        Ministry of Human Resource Development, <br />
                        Govt. of India, Shastri Bhavan, <br /> 
                        New Delhi-110 015. <br /> <br />
                        <strong>
                            <a href="https://www.nitw.ac.in/main/administration/bogbwcfc/">
                              Shri Madan mohan
                            </a>
                        </strong> <br />
                        Addl. Director General (TE)
                      </td>
                      <td>
                        <a href="mailto:sandhu.edu@nic.in"> <strong>sandhu.edu@nic.in</strong> </a> <br />
                        Phone : 011-23381097 (O)<br />
                        Fax : 011-23386903 
                      </td>
                    </tr>
                    <tr>
                      <td> 4.</td>
                      <td> Member  <br />
                      (Sec. 11 Cl. (c) )
                        
                      </td>
                      <td>
                        <a href="https://www.nitw.ac.in/main/administration/bogbwcfc/">
                          <strong>
                            Ms. Darshana M Dabral
                          </strong>
                        </a>
                        Jt. Secretary &amp; Financial Advisor, <br />
                        Dept. of Higher Education, <br />
                        Ministry of Human Resource Development, <br />
                        Govt. of India, Shastri Bhavan, <br /> 
                        New Delhi-110 015. 
                        
                      </td>
                      <td>
                        <strong>
                          <a href="mailto:Jsfa.edu@gov.in">Jsfa.edu@gov.in</a> <br />
                          <a href="mailto:dm.dabral@nic.in">dm.dabral@nic.in</a>
                        </strong> 
                        <br />
                        Phone :&nbsp;011-23382696
                        <br />
                        Phone :&nbsp;011-24101299
                      </td>
                    </tr>

                    <tr>
                      <td> 5.</td>
                      <td> Member  <br />
                      (Sec. 11 Cl. (d) )
                      </td>
                      <td>
                        <strong>
                          -
                        </strong> 
                        
                      </td>
                      <td>
                        <strong > - </strong>
                      </td>
                    </tr>

                    <tr>
                      <td> 6.</td>
                      <td> Member  <br />
                      (Sec. 11 Cl. (d) )
                      </td>
                      <td>
                        <a href="https://www.nitw.ac.in/faculty/id/16264/">
                          <strong>
                            Dr. Ravi Kumar Puli
                          </strong>
                        </a> 
                        <br />
                        Member Secretary <br />
                        Telangana State Council of science &amp; technology, (TSCOST){" "} <br />
                        4th Floor, Aranya Bhavan, Saifabad,<br /> 
                        Hyderabad - 500 004{" "}
                      </td>
                      <td>
                        <strong >
                          <a href="mailto:pravi@nitw.ac.in">pravi@nitw.ac.in</a>
                        </strong>
                      </td>
                    </tr>

                    <tr>
                      <td> 7.</td>
                      <td> Member  <br />
                      (Sec. 11 Cl. (e) ) 
                      </td>
                      <td>
                        <strong>
                          -
                        </strong> 
                        
                      </td>
                      <td>
                        <strong > - </strong>
                      </td>
                    </tr>

                    <tr>
                      <td> 8.</td>
                      <td> Member  <br />
                      (Sec. 11 Cl. (e) )
                      </td>
                      <td>
                        <strong>
                          -
                        </strong> 
                        
                      </td>
                      <td>
                        <strong > - </strong>
                      </td>
                    </tr>

                    <tr>
                      <td> 9.</td>
                      <td> Member  <br />
                      (Sec. 11 Cl. (f) ) 
                        
                      </td>
                      <td>
                        <strong>
                          <a href="https://www.nitw.ac.in/faculty/id/16194/">
                          Dr. M. Sydulu
                          </a>
                        </strong> 
                        <br />
                        Professor,
                        <br />
                        Department of Electrical Engineering,
                        <br />
                        National Institute of Technology,<br /> 
                        Warangal - 506 004.
                      </td>
                      <td>
                        <strong >
                          <a href="mailto:msydulu@nitw.ac.in">msydulu@nitw.ac.in</a>
                        </strong>
                          <br />
                          <span>Phone :&nbsp;</span> <br />
                          <span>Mobile :&nbsp;</span>
                      </td>
                    </tr>

                    <tr>
                      <td> 10.</td>
                      <td> Member  <br />
                      (Sec. 11 Cl. (f) )
                      </td>
                      <td>
                        <strong>
                        <a
                          href="https://www.nitw.ac.in/faculty/id/16339/"
                          target="_blank"
                        >
                          Dr. K. Ramesh ,
                        </a>
                        </strong> 
                        <br />
                        Associate Professor,
                        <br />
                        Dept. of CSE,
                        <br />
                        National Institute of Technology,<br /> 
                        Warangal - 506 004.
                      </td>
                      <td>
                        <strong> - </strong>
                        {/* <strong > <span >
                          <a href="mailto:..">..</a>
                        </span>
                        </strong>
                        <br />
                          <span >Phone : </span> <br />
                          <span >Mobile : </span> */}
                      </td>
                    </tr>

                    <tr>
                      <td> 11.</td>
                      <td> Member  <br />
                      (Sec. 11 Cl. (g) ) 
                      
                      </td>
                      <td>
                        <strong>
                        <a href="https://www.nitw.ac.in/main/administration/bogbwcfc/">
                          Director ,
                        </a>
                        </strong> 
                         <br />
                        Indian Institute of Technology Hyderabad,
                        <br />
                        Ordinance Factory Estate,<br /> 
                        Yeddumailaram-502 205.
                      </td>
                      <td>
                        <strong >
                          <span >
                            <a href="mailto:director@iith.ac.in">director@iith.ac.in</a>
                          </span>
                        </strong> <br />
                        <span >Phone :&nbsp;</span>040-2301-6002
                        <br />
                        <span >Phone :&nbsp;</span>040-2301-6003
                      </td>
                    </tr>

                    <tr>
                      <td> 12.</td>
                      <td> Secretary <br />
                        (Sec. 18. Cl. (2) )
                      </td>
                      <td>
                        <strong>
                        <a
                          href="https://www.nitw.ac.in/main/administration/fc/"
                          target="_blank"
                        >
                          Sri S. Goverdhan Rao
                        </a>
                        </strong> 
                        <br />
                        <span >
                          Registrar,
                          <br />
                          National Institute of Technology, Warangal - 506 004.
                        </span> 
                      </td>
                      <td>
                        <strong > 
                          <span >
                            <a href="mailto:registrar@nitw.ac.in">registrar@nitw.ac.in</a>
                          </span> 
                        </strong>
                      </td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        
        {/* POWERS OF BOARD OF BOARD  */}

        <section className="section text-md-start section-xl bg-default">
          <div className="container">
            <div className="row justify-content-sm-center justify-content-xl-start text-xl-start offset-top-60 offset-sm-top-110">
              <div className="col-sm-10 col-xl-10">

                <h2 className="fw-bold">POWERS OF BOARD :</h2>
                <hr className="divider divider-md-0 bg-madison" />
                <div class="offset-top-35 offset-lg-top-60">
                  <p>In addition to the powers provided under sub-section (1) of section 13
                    of the NITs Act, 2007, the Board shall be empowered:</p>
                  <ul class="list-marked list offset-top-10">
                    <li> To abolish, re-designate or change the nomenclature of any post in
                        the Institute.</li>
                    <li>To make, modify or cancel the statutes with the approval of the
                        Visitor from time to time. Provided that the new Statute, additions or
                        amendments of existing Statutes shall be applicable only after the
                        assent of the Visitor and</li>
                    <li>To make, modify and cancel all or any ordinances on the
                        recommendation of the Finance Committee or Senate of the Institute
                        subject to the condition that making, modification and cancellation
                        shall not be in contravention of the Act and (or) Statutes.</li>
                  </ul>
                </div>
                
                <br /> <br />

                {/* POWERS OF THE CHAIRPERSON, BOARD OF GOVERNORS: */}

                <h2 className="fw-bold">POWERS OF THE CHAIRPERSON, BOARD OF GOVERNORS:</h2>
                <hr className="divider divider-md-0 bg-madison" />
                <div class="offset-top-35 offset-lg-top-60">
                  <p>In addition to the powers provided in the Act, the Chairperson of the
                      Board of Governors shall have the following powers as laid down under
                      Statute 14 of the First Statutes of NITs, namely:-</p>
                  <ul class="list-marked list offset-top-10">
                    <li>He shall have the power to fix, on the recommendations of the
                        Selection Committee, the initial pay of an incumbent at a stage higher
                        than the minimum of the scale in respect of posts to which the
                        appointments can be made by the Board under the provisions of the Act:</li>
                    <li>He shall have the power to send members of the staff except the
                        Director of the Institute for training or for a course of instruction
                        outside India subject to such terms and conditions as may be laid down
                        by the Board from time to time. Incidentally the visit abroad by the
                        Director shall be approved by the Chairman, National Institutes of
                        Technology Council:-</li>
                    <li>He shall execute the contract of service between the Institute
                        and the Director or Deputy Director on behalf of the Central
                        Government, but he shall not be personally liable of anything under
                        such contract; and</li>
                    <li>In emergent cases, the Chairperson may exercise the powers of the
                        Board and inform the Board of the action taken by him for confirmation
                        and ratification.</li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </section>
        
        <Footer></Footer>
      </div>
    </React.Fragment>
  );
};

export default BoardOfGoverners;
