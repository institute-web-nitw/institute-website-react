import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PageHeader from "../../components/PageHeader";

const AcademicServicesPage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Academic Services</title>
        <script src="js/core.min.js"></script>
        <script src="js/script.js"></script>
      </Helmet>
      <div className="page text-center">
        <Header></Header>
        <PageHeader heading="Academic Services"></PageHeader>

        <section className="section text-md-start section-xl bg-default">
          <div className="container">
            {/* DO's */}
            <div className="row justify-content-sm-center justify-content-xl-start">
              <div className="col-sm-10 col-xl-8">
                <h2 className="fw-bold">Do's</h2>
                <hr className="divider divider-md-0 bg-madison" />
                <div className="offset-top-35 offset-lg-top-60">
                  <ol className="list list-ordered text-start">
                    <li>
                      <span>
                        All the students are to send the
                        request/application/form by email to the concerned seat
                        through proper channel.
                      </span>
                    </li>
                    <li>
                      <span>
                        All requests will be handled by the concerned seat.
                      </span>
                    </li>
                    <li>
                      <span>
                        Minimum 5 working days are required to address the
                        request.
                      </span>
                    </li>
                    <li>
                      <span>
                        Applicants should provide complete details required for
                        the request including contact details.
                      </span>
                    </li>
                    <li>
                      <span>
                        Please write emails from official email address
                        (xxxx@student.nitw.ac.in) only. The requests from
                        personal email address will not be entertained due to
                        authenticity issue.
                      </span>
                    </li>
                    <li>
                      <span>
                        Always plan ahead of time and give sufficient time to
                        process applications. Urgent requests are difficult to
                        accommodate.
                      </span>
                    </li>
                    <li>
                      <span>
                        Other than the bonafide certificate, TC and MC, Study
                        cum Conduct certificates, Scholarships for UG students,
                        a recommendation from the head of the department is
                        required. In all such cases, student can write an email
                        to their Head and request to send the recommendation to
                        academic section. This is responsibility of the student.
                      </span>
                    </li>
                    <li>
                      <span>
                        Contact Student Fee Seat of Accounts Section for any
                        issues related to fee payment, refund, fee receipt, fee
                        estimate, loans and any other financial/money matter.
                        Contact details are given at the end of the page
                      </span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Dont's */}
            <div className="row offset-top-50 offset-lg-top-133 justify-content-sm-center justify-content-xl-start">
              <div className="col-sm-10 col-xl-8">
                <h2 className="fw-bold">Dont's</h2>
                <hr className="divider divider-md-0 bg-madison" />
                <div className="offset-top-35 offset-lg-top-60">
                  <ol className="list list-ordered text-start">
                    <li>
                      <span>
                        There is no need to make a CC of the email to higher
                        authorities like Associate Dean, Dean, Registrar,
                        Director, which is also not appropriate.
                      </span>
                    </li>
                    <li>
                      <span>
                        Do not send reminders before 5 working days from the
                        date of submission of the request.
                      </span>
                    </li>
                    <li>
                      <span>
                        Do not call any officials through phone unless there is
                        an emergency.
                      </span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="row justify-content-sm-center justify-content-xl-start offset-top-50 offset-lg-top-110">
              <div>
                <h2 className="fw-bold">Contact Information</h2>
                <hr className="divider divider-md-0 bg-madison" />
                <div className="col-sm-12 col-xl-8 inset-xl-left-30 order-xl-2">
                  {/* EXAMINATION CONTACT DETAILS */}
                  <div class="offset-top-20">
                    <h3>Examinations</h3>

                    <ol className="list list-ordered text-start">
                      <li>
                        <span>Contact Details</span>
                      </li>
                      <li>
                        <span>Academic Verification for Genuineness</span>
                      </li>
                      <li>
                        <span>Medium of Instruction</span>
                      </li>
                      <li>
                        <span>CGPA to Percentage Conversion Certificate</span>
                      </li>
                      <li>
                        <span>Original Certificates and Grade Sheets</span>
                      </li>
                      <li>
                        <span>Duplicate Certificates</span>
                      </li>
                      <li>
                        <span>Exam Schedules and Time Tables</span>
                      </li>
                      <li>
                        <span>Medals and Awards</span>
                      </li>
                      <li>
                        <span>Notices and Circulars</span>
                      </li>
                      <li>
                        <span>Transcripts</span>
                      </li>
                    </ol>
                  </div>

                  {/* UNDERGRAD CONTACT DETAILS */}
                  <div class="offset-top-20">
                    <h3>Undergraduate</h3>
                    <div className="row justify-content-sm-center">
                      <div className="inset-xl-left-30 col-md-10">
                        <table
                          className="table table-custom table-fixed striped-table"
                          data-responsive="true"
                        >
                          <tbody>
                            <tr>
                              <th>Issue</th>
                              <th>Contact</th>
                            </tr>
                            <tr>
                              <td>
                                All UG matters except related to examination
                                section
                              </td>
                              <td>acad_ugseat@nitw.ac.in </td>
                            </tr>
                            <tr>
                              <td>NSP and Institute Merit Scholarships</td>
                              <td>acad_nspscholarships@nitw.ac.in</td>
                            </tr>
                            <tr>
                              <td>Academic Other State Scholarships</td>
                              <td>acad_statescholarships@nitw.ac.in</td>
                            </tr>
                            <tr>
                              <td>Academic Foreign Seat</td>
                              <td>acad_foreignseat@nitw.ac.in</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  {/* POSTGRAD CONTACT DETAILS */}
                  <div class="offset-top-20">
                    <h3>Postgraduate</h3>
                    <div className="row justify-content-sm-center">
                      <div className="inset-xl-left-30 col-md-10">
                        <table
                          className="table table-custom table-fixed striped-table"
                          data-responsive="true"
                        >
                          <tbody>
                            <tr>
                              <th>Issue</th>
                              <th>Contact</th>
                            </tr>
                            <tr>
                              <td>
                                All PG matters except related to examination
                                section
                              </td>
                              <td>acad_pgseat@nitw.ac.in</td>
                            </tr>
                            <tr>
                              <td>Academic Foreign Seat</td>
                              <td>acad_foreignseat@nitw.ac.in</td>
                            </tr>
                            <tr>
                              <td>NSP and Institute Merit Scholarships</td>
                              <td>acad_nspscholarships@nitw.ac.in</td>
                            </tr>
                            <tr>
                              <td>Academic Other State Scholarships</td>
                              <td>acad_statescholarships@nitw.ac.in</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  {/* PHD CONTACT DETAILS */}
                  <div class="offset-top-20">
                    <h3>Ph. D</h3>
                    <div className="row justify-content-sm-center">
                      <div className="inset-xl-left-30 col-md-10">
                        <table
                          className="table table-custom table-fixed striped-table"
                          data-responsive="true"
                        >
                          <tbody>
                            <tr>
                              <th>Issue</th>
                              <th>Contact</th>
                            </tr>
                            <tr>
                              <td>All PhD matter</td>
                              <td>acad_phdseat@nitw.ac.in</td>
                            </tr>
                            <tr>
                              <td>Academic Foreign Seat</td>
                              <td>acad_foreignseat@nitw.ac.in</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
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

export default AcademicServicesPage;
