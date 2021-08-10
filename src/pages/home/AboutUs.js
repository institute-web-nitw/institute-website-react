import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PageHeader from "../../components/PageHeader";


const AboutUs = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>About Us</title>
        <script src="js/core.min.js"></script>
        <script src="js/script.js"></script>
      </Helmet>

      <div className="page text-center">
        <Header></Header>
        
        <PageHeader heading="About Us"></PageHeader>

          <section className="section section-xl bg-default">
          <div className="container">
            <div className="row row-50">
              <div className="col-md-4 order-md-2 text-md-start">
                <div className="inset-md-left-30">
                  <br /> <br />
                  <img
                    className="img-responsive d-inline-block img-rounded"
                    src="images/nit-rec.jpg"
                    // width={50}
                    // height={300}
                    alt = "nitw"
                  />
                  {/* <div className="offset-top-20">
                    <h6 className="text-primary fw-bold">Christopher Smith</h6>
                  </div>
                  <p>
                    First president of the Jonathan Carroll University, served from
                    1876 to 1897.
                  </p> */}
                </div>
              </div>
              <div className="col-md-8 order-md-1 text-md-start">
                <h2 className="fw-bold">A Meeting of Minds</h2>
                <hr className="divider bg-madison divider-md-0" />
                <div className="offset-top-30 offset-sm-top-60">
                  <p>
                  <b> National Institute of Technology, Warangal (Deemed University) </b> , 
                  formerly known as Regional Engineering College, was established in 1959.
                  <br />
                  <b>Pandit Jawaharlal Nehru</b> laid the foundation stone for this institute on October 10, 1959, 
                  the first in the chain of 30 NITs (formerly known as RECs) in the country.
                  </p>
                </div>
                <p>
                The Institute is well known for its dedicated faculty, 
                staff and the state-of-the art infrastructure conducive to a
                healthy academic environment.The Institute is constantly striving 
                to achieve higher levels of technical excellence.  Evolving a socially 
                relevant and yet internationally acceptable curriculum, implementing 
                innovative and effective teaching methodologies and focusing on the 
                wholesome development of the students are our concerns.  Thanks to 
                UNESCO and UK assistance in the past, many developmental activities 
                were undertaken.The World Bank Assistance under Technical Education 
                Quality Improvement Programme (TEQIP during 2004-09) had been a timely 
                help in the overall development of the Institute.
                </p>
                <p>
                The Institute currently has thirteen academic departments and a few advanced 
                research centres in various disciplines of engineering, pure sciences and 
                management, with nearly 100 laboratories organized in a unique pattern of 
                functioning, Central Library with state of the art facilities, Auditorium, 
                Student Activity Centre, Mega Computer Centre, Indoor Games Complex, big stadium, 
                Seminar Halls with required infrastructure, Dispensary with state of art of 
                facilities, etc. Faculty of repute, brilliant student community, excellent 
                technical and supporting staff and an effective administration have all contributed 
                to the pre-eminent status of N.I.T., Warangal.The Institute offers eight undergraduate 
                programmes (B.Tech.,) in engineering, Twenty nine post graduate programmes 
                (M.Tech., M.Sc., MCA and MBA) in engineering, sciences and management and 
                research programmes in engineering, sciences, humanities, physical education 
                and management.The institute is well-known for its Research and Development, 
                Industrial consultancy, Continuing education and Training programmes for teachers 
                and industrial personnel.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-xl bg-default">
          <div className="container">
            <div className="row justify-content-sm-center justify-content-md-start">
              <div className="col-md-4 order-md-2 text-md-start">
                <div className="inset-md-left-30">
                  <br /> <br />
                  <img
                    className="img-responsive d-inline-block img-rounded"
                    src="images/nitw.jpg"
                    // width={340}
                    // height={300}
                    alt = "nitw"
                  />
                  {/* <div className="offset-top-20">
                    <h6 className="text-primary fw-bold">Christopher Smith</h6>
                  </div>
                  <p>
                    First president of the Jonathan Carroll University, served from
                    1876 to 1897.
                  </p> */}
                </div>
              </div>
              <div className="col-md-8 text-md-start">
                <h2 className="fw-bold">A Singular Focus</h2>
                <hr className="divider bg-madison divider-md-0" />
                <div className="offset-top-30 offset-sm-top-60">
                  <p>
                  N.I.T., Warangal is a residential institute with nearly 3355 (UG : 2251 & PG : 1104) 
                  students apart from nearly 269 Ph.D., (150 Full Time and 119 Part time) Scholars.  
                  It has 16 residential blocks including one mega & one ultra-mega hostel for boys, 
                  two hostels for girls and one hostel for foreign students.  It has five messes for 
                  boys, one mess exclusively for girls and one mega mess with present state of art 
                  facilities for boys, foreign students and girls.  It has nearly 200 teaching staff 
                  and 360 administrative and supporting staff apart from outsource personnel.It is a 
                  self contained residential campus located in a beautiful wooded land of about 248 
                  acres.It is located on either side of Hyderabad - Warangal highway at a distance of 
                  3 Kms from Kazipet Railway Station and 12Kms from Warangal Railway Station. It is 
                  located at a distance of 140 Kms from Hyderabad. Warangal enjoys a unique position 
                  in the cultural and historical map of the state. The exquisite and intricate architecture 
                  in Ramappa, Thousand Pillar Temple, Badrakali Temple and the Warangal Fort have been 
                  centres of attraction. Lovely gardens, wild life sanctuaries, lakes and rocks in the 
                  vicinity are other places of interest for students. The place enjoys a good climate 
                  throughout the year except for the patches of hot summer during May-June.
                  </p>
                </div>
                <p>
                It is a residential campus with all the basic facilities for both the students and staff 
                to live on the campus. The following statistical figures might give an idea about the 
                buildings in the campus. The plinth area occupied by the different buildings on the campus 
                are: Administrative Building (3,331 Sqm), Academic Buildings (34,448 sqm), Library Building 
                (3,610 sqm), Students Hostels (32,642 sqm), Sports Pavilion and Gallery (784 Sqm), 
                Director's Bungalow, Staff Quarters and Guest House (31,598 sqm.) The road network in the 
                campus runs to a length of 12 kms. Work is in progress in creating more space for the varied 
                purposes referred above and also for the extension of network of roads.
                </p>
                <p>
                The placement service at the institute is one of the best of its kind in the country. 
                The alumni of the institute hold responsible and enviable positions all over the world 
                and are in constant touch with the institute. Every new entrant into the portals of this 
                institution is poised for partaking a rich heritage and tradition that is unique to NITW. 
                According to 2015 Outlook Survey, NITW clinches the 11th rank among the technical institutes 
                in the country.
                </p>
                <p>
                  
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </div>
    </React.Fragment>
  );
};

export default AboutUs;
