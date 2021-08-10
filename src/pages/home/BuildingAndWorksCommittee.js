import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PageHeader from "../../components/PageHeader";

const BuildingAndWorksCommittee = () => {
    return (
      <React.Fragment> 
        
        <Helmet> 
          <title> Building & Works Committee </title>
          <script src="js/core.min.js"></script>
          <script src="js/script.js"></script>
        </Helmet>

        <div className="page text-center">
          <Header> </Header>
          <PageHeader heading="Building And Works Committee" ></PageHeader>

          <section className="section text-md-start section-xl bg-default">
            <div className="container">
              <div className="row justify-content-sm-center justify-content-xl-start offset-top-50 offset-lg-top-110">
                <div className="col-sm-10 col-xl-8">
                <h3 className="fw-bold">There shall be a Building &amp; Works Committee for each of the
                Institute, consisting of the following members namely: </h3>
                  <hr className="divider divider-md-0 bg-madison" />
                  <div className="offset-top-35 offset-lg-top-60">
                    <ol className="list list-ordered text-start">
                      <li>
                        <span>The Director, ex-officio Chairman. </span>
                      </li>
                      <li>
                        <span>One member nominated by the Central Government nor below the rank
                        of Director or Deputy Secretary.</span>
                      </li>
                      <li>
                        <span>One member nominated by the Board of Governors.</span>
                      </li>
                      <li>
                        <span>Registrar, ex-officio, Member Secretary.</span>
                      </li>
                      <li>
                        <span>Dean, planning &amp; development or similar position - member, and</span>
                      </li>
                      <li>
                        <span>One expert each from Civil and Electrical Engineering Wing of
                        Central or State Government or any autonomous body of repute - Member.</span>
                      </li>
                      <li>
                        <span>Three Special Invitees as per the administrative instructions of
                        the M.H.R.D., GoI., New Delhi. (Out of which, one is from IFD of
                        M.H.R.D., and two experts from State R&amp;B or from CPWD if R&amp;B
                        experts represent the BWC as Members under sub-statute 1(vi) of
                        Statute 12 of the First Statutes of NITs.</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section section-lg bg-default">
            <div className="container">
              <h4 className="fw-bold"> DETAILS OF CHAIRMAN AND MEMBERS OF THE BUILDING AND WORKS
              COMMITTEE OF N.I.T. WARANGAL AS PER STATUTE 12 OF THE FIRST
              STATUTES OF NITs &amp; ADMIN. INSTRUCTIONS OF MHRD VIDE
              Lr.No.F.23-14/2010-TS.III, DATED 23-08-2010
              </h4>

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
                        <th>RULE NO</th>
                        <th>NAME, DESIGNATION &amp; ADDRESS</th>
                        <th>POSITION</th>
                        <th>E-MAIL ID, PHONE &amp; FAX NOS.</th>
                      </tr>

                      <tr>
                        <td> 1.</td>
                        <td> 
                          12 (1) (i)
                        </td>
                        <td>
                          <a href="https://www.nitw.ac.in/main/administration/director/">
                            <span>
                              <strong>Prof. N.V. Ramana Rao,</strong>
                            </span> <br />
                            Director, <br />
                            NIT Warangal - 506 004.
                          </a>
                        </td>
                        <td>
                          
                          Ex-officio Chairman
                          
                        </td>
                        <td>
                        <a href="mailto:director@mail.nitw.ac.in">
                            <strong>director@nitw.ac.in</strong>  
                        </a>
                        </td>
                      </tr>
                      
                      <tr>
                        <td> 2.</td>
                        <td> 
                          12 (1) (ii)
                        </td>
                        <td>
                          <a href="https://www.nitw.ac.in/main/administration/bogbwcfc/">
                            <strong>Shri Madan Mohan</strong>
                          </a>
                          <br />
                            <span >
                              DDG (HE)
                              <br />
                              Department of Higher Education,<br />
                            </span>
                            <span >
                              M.H.R.D., GoI, New Delhi
                            </span>
                        </td>
                        <td>
                          Member 
                        </td>
                        <td>
                            <strong><a href="mailto:mmohan.edu@nic.in">mmohan.edu@nic.in</a></strong> <br />
                            Phone: 011-23381484 <br />
                            Mobile: 9971035557
                        </td>
                      </tr>

                      <tr>
                        <td> 3.</td>
                        <td> 
                          12 (1) (iii)
                        </td>
                        <td>
                          <strong>-</strong>
                        </td>
                        <td>
                          Member
                        </td>
                        <td>
                          <strong>
                            <span style={{ fontSize: 14 }}>
                              <a href="#">-</a>
                            </span>
                          </strong>
                        </td>
                      </tr>
                      
                      <tr>
                        <td> 4.</td>
                        <td> 
                        12 (1) (iv)
                        </td>
                        <td>
                          <strong>
                          <a href="https://nitw.ac.in/main/" target="_blank">
                            <span >
                              <span
                              >
                                Shri S. Goverdhan Rao
                              </span>
                            </span>
                          </a>
                          </strong> <br />
                          Registrar ,<br />
                          N.I.T., Warangal.
                          
                        </td>
                        <td>
                          Member Secretary 
                        </td>
                        <td>
                        <strong>
                        <span >
                          <a href="mailto:registrar@nitw.ac.in">
                            registrar@nitw.ac.in
                          </a>
                        </span>
                        </strong>
                        </td>
                      </tr>

                      <tr>
                        <td> 5.</td>
                        <td>
                          12 (1) (v)
                        </td>
                        <td>
                          <strong>
                          <a
                            href="https://www.nitw.ac.in/faculty/id/16257/"
                            target="_blank"
                          >
                            Dr. P. Bangaru Babu,
                          </a>
                          </strong> <br />
                          <span >
                            Dean (Planning &amp; Development)
                            <br />
                            N.I.T., Warangal – 506 004.&nbsp;
                            <br />
                            Telangana
                          </span>
                        </td>
                        <td>
                          Member
                        </td>
                        <td>
                        <strong > 
                          <a href="mailto:anand@nitw.ac.in">
                            bangaru@nitw.ac.in
                          </a>
                          </strong>
                        </td>
                      </tr>

                      <tr>
                        <td> 6.</td>
                        <td> 
                          12 (1) (vi)
                        </td>
                        <td>
                          Superintending Engineer (Civil),&nbsp;
                          <br />
                          Vijayawada Central Circle,
                          <br />
                          Central Public Works Dept.
                          <br />
                          Vijayawada.
                        </td>
                        <td>
                        Member
                        </td>
                        <td>
                          <strong >
                          <a href="#">-</a>
                          </strong>
                        </td>
                      </tr>

                      <tr>
                        <td> 7.</td>
                        <td> 
                          -do-
                        </td>
                        <td>
                          Superintending Engineer (Electrical),
                          <br />
                          HCEC, Cental Public Works Dept.,
                          <br />
                          Nirman Bhawan, Sultan Bazar,
                          <br />
                          Hyderabad – 500 095.
                          
                        </td>
                        <td>
                        Member
                        </td>
                        <td>
                        <strong> <a href="#">-</a> </strong>
                        </td>
                      </tr>

                      <tr>
                        <td> 8.</td>
                        <td>
                        Admin. instructions of MHRD
                        </td>
                        <td>
                          <strong>
                            -
                          </strong> 
                          
                        </td>
                        <td>
                        Special Invitee
                          
                        </td>
                        <td><strong > - </strong></td>
                      </tr>

                      <tr>
                        <td> 9.</td>
                        <td>
                        Admin. instructions of MHRD
                        </td>
                        <td>
                          <strong>
                            -
                          </strong> 
                          
                        </td>
                        <td>
                        Special Invitee
                          
                        </td>
                        <td><strong > - </strong></td>
                      </tr>

                      <tr>
                        <td> 10.</td>
                        <td>
                        Admin. instructions of MHRD
                        </td>
                        <td>
                          <strong>
                            -
                          </strong> 
                          
                        </td>
                        <td>
                        Special Invitee
                          
                        </td>
                        <td>
                          <strong > 
                            -
                          </strong>
                        </td>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>
              <h5 className="fw-bold" > Statute 12 of the First Statutes of National Institutes of
                  Technology. </h5>
            </div>
          </section>

          <section className="section text-md-start section-xl bg-default">
            <div className="container">
              <div className="row justify-content-sm-center justify-content-xl-start offset-top-50 offset-lg-top-110">
                <div className="col-sm-10 col-xl-8">
                <h3 className="fw-bold">POWERS AND FUNCTIONS OF THE BUILDING AND WORKS COMMITTEE&nbsp;: </h3>
                  <hr className="divider divider-md-0 bg-madison" />
                  <div className="offset-top-35 offset-lg-top-60">
                    <ol className="list list-ordered text-start">
                      <li>
                        <span>The Building and Works Committee shall :- </span>
                        <ul class="list-marked list offset-top-10">
                          <li>Under the directions of the Board shall carry on
                              construction of all major works, after the necessary
                              administrative approval and expenditure sanction from the
                              Board.</li>
                          <li>Have the power to give the necessary administrative
                              approval and expenditure sanction for minor works and works
                              pertaining to repair and maintenance within the approved
                              budgetary provision of the Institute.</li>
                          <li>Cause to prepare estimates of cost of buildings and other
                              capital works minor works, repairs, maintenance and the like.</li>
                          <li>Be responsible for making technical scrutiny of the
                              design, estimates and specifications of the material as may be
                              considered necessary.</li>
                          <li>Have the power to settle rates not covered by tender and
                              settle claims and disputes with contractors.</li>
                        </ul>
                      </li>
                      <li>
                        <span> If, in the opinion on the Chairman of the Building and
                              Works Committee, any emergency has arisen which required
                              immediate action to be taken, he shall take such action and
                              report the same to the Building and Works Committee and the
                              Board at their next meeting.</span>
                      </li>
                      <li>
                        <span>The Building and Works Committee shall also perform such
                              function and exercise such powers as may be entrusted by the
                              Board, from time to time.</span>
                      </li>
                      
                    </ol>
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

export default BuildingAndWorksCommittee;

