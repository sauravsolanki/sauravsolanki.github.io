import React from 'react';
import logo from './logo.svg';
import 'antd/dist/antd.css';
import './App.css';
import { Layout, Menu, Typography, Row, Col, Card } from 'antd';
const { Header, Content, Footer } = Layout;
const { Title } = Typography;

function App() {
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        {/* <div className="logo" /> */}
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" ><a href="#home">Home</a></Menu.Item>
          <Menu.Item key="2" ><a href="#publications">Publications</a></Menu.Item>
          <Menu.Item key="3" ><a href="#national_symposium">National Symposium</a></Menu.Item>
          <Menu.Item key="4" ><a href="#awards">Awards</a></Menu.Item>
          <Menu.Item key="5" ><a href="#administrative_experience">Administrative Experience</a></Menu.Item>
          <Menu.Item key="6" ><a href="#courses_taught">Courses Taught</a></Menu.Item>
          <Menu.Item key="7" ><a href="#contribution_in_institute_building">Contribution in Institute Building</a></Menu.Item>
          <Menu.Item key="8" ><a href="#projects_guidance">Projects Guidance</a></Menu.Item>
          <Menu.Item key="9" ><a href="#memberships">Memberships</a></Menu.Item>

        </Menu>
      </Header>
      <Content className="site-layout" style={{ padding: '0px 250px' }}>

        {/*   */}
        <div id="home" className="site-layout-background" style={{ padding: 24, paddingTop: 100, minHeight: 380 }}>
          <Row>
            <Col span={8}>
              <Card
                bordered={false}
                style={{ width: 300 }}
                cover={<img alt="profile_pic" src="https://lh6.googleusercontent.com/GhLe85aXH7RNgTrjkuOkAmlP3Vl58lTnjA_NTybtvkXDnSFJV7GqnbL7GYyFPa7vhwXfWYMicckjfqamoGmmVohKkE5C-6khyYcTpyoc1F2SzHpPMQ=w1280" />}
              >
                <div>
                  <p>
                    E-mail: sandeep@nitandhra.ac.in <br />
                  Mobile no : +91- 8861290060 <br />
                  </p>
                </div>

              </Card>
            </Col>

            <Col span={16}>
              <Row glutter={[10, 20]} >
                <Col span={12}>
                  <Col span={24}>
                    <Title level={3}>Dr. V Sandeep</Title>
                    Assistant Professor &amp; Head <br />
               Department of Electrical Engineering <br />
               National Institute of Technology (NIT) Andhra Pradesh <br />
               Tadepalligudem, West Godavari District <br />
               Andhra Pradesh - 534101, INDIA <br />

                  </Col>

                  <Col span={24}>

                    <h1>Research Interest</h1>
                    <ul>
                      <li>Renewable Energy Systems</li>
                      <li>Micro grids & Smart Grids,</li>
                      <li>Electric Vehicles,</li>
                      <li>Computer-aided design of Electric Machines,</li>
                      <li>Power Electronics & Drives,</li>
                      <li>Energy Conversion and Energy Management</li>
                    </ul>
                  </Col>



                </Col>

                <Col span={12}>
                  <h1>Qualification: M. Tech, Ph.D (IIT Delhi) </h1>

                  <h1> Professional Memberships:</h1>
                  <ul>
                    <li>IEEE SENIOR MEMBER ,(Power & Energy Society, Power Electronics Society,</li>
                    <li>Industrial Applications Society and Industrial Electronics Society)</li>
                    <li>IEEE Young Professional</li>
                    <li>Member, E4C Community (Supported by ASME, IEEE, ASCE)</li>
                    <li>Member, International Association for the Engineers (IAENG)</li>
                    <li>Life Member, Indian Society for Technical Education (ISTE)</li>
                  </ul>
                </Col>



              </Row>

            </Col>
          </Row>
          <div>

            <h1>Teaching Experience</h1>
            <ul>
              <li>Assistant Professor, Dept. of Electrical Engineering, NIT Andhra Pradesh, 22 Nov 2019 to till date.</li>
              <li>Assistant Professor, Dept. of Electrical Engineering, Central University of Karnataka, 25 Nov 2013 to 21 Nov 2019.</li>
              <li>Teaching Assistant, Dept. of Electrical Engineering, IIT Delhi, Aug 2009 – May 2013.</li>
              <li>Teaching Assistant, Dept. of Electrical Engineering, IIT Ropar, Jan 2010 – May 2010.</li></ul>
          </div>


          <div>
            <h1>Academic Qualifications:</h1>
            <ul>
              <li>Ph.D - Electrical Engineering, Indian Institute of Technology (IIT) Delhi, New Delhi, 2009 - 2013.<br />
     Thesis: Investigations on Renewable Energy based Single Phase Power Generation using
     Self Excited Induction Generators (Supervisors : Prof. S.S. Murthy &amp; Prof. Bhim Singh) </li>
              <li>M.Tech - Power Electronics and Drives, Vellore Institute of Technology (VIT), Vellore, 2007 – 2009. </li>
              <li>B.Tech - Electrical &amp; Electronics Engg, Jawaharlal Nehru Technological University, Hyderabad, 2003 – 2007. </li>
            </ul>
          </div>

          <div>
            <h1>Industrial Experience:</h1>
            <p> Intern Researcher, General Electric (GE) Global Research Centre, Bangalore, May 2010 – July 2010. Project Title: Design, Simulation and Optimization of Energy Efficient Single phase Induction Motor for
domestic appliance applications </p>

            <h1>Sponsored Projects Undertaken:</h1>
            <p>UGC Research Grant for “Design and Development of Energy Efficient Electric Generators for Renewable Energy Applications </p>


            <h1>Software Proficiency</h1>
            <p>MATLAB/Simulink, SPEED, Magnet, Motorsolve, Flux, Motor-CAD, Ansys -Maxwell, MiPower, Homer –Pro, DigSILENT, PSPICE.</p>
          </div>



          <div id="publications" className="link-item">
            <h1>Publications:</h1>
            <h2>International Journals:</h2>
            <ol>

              <li> S.S. Murthy, Bhim Singh and V. Sandeep, “A Novel and Comprehensive Performance Analysis of Single Phase
              Two Winding Self- Excited Induction Generator” IEEE Transactions on Energy Conversion. vo1. 27, no.1, pp.
              117- 127, March 2012, DOI: 10.1109/TEC.2011.2170072.
</li> <li> S.S. Murthy, Bhim Singh, and V. Sandeep, “Design-Based Computational Procedure for Performance
              Prediction and Analysis of Single Phase Self-Excited Induction Generator” IET Electric Power Applications,
              vo1. 7, no. 6, pp. 477 - 486, 2013, DOI: 10.1049/iet-epa.2011.0360.
</li> <li> S.S. Murthy, Bhim Singh, and V. Sandeep, “An Analytical Performance Comparison of Two Winding and Three
              Winding Single Phase SEIGs” Electric Power Systems Research, Elsevier Journal, vol. 107, pp. 36-44, Feb.
              2014, DOI: https://doi.org/10.1016/j.epsr.2013.09.006.
</li> <li> S.S. Murthy, Bhim Singh, and V. Sandeep, “Experience in Developing a Single-Phase Two Winding 5 kW Self-
              Excited Induction Generator for Off-grid Renewable Energy based Power Generation” Journal of The

              Institution of Engineers (India): Series-B – Springer Journal, vol. 97, no.2, pp. 127-137, June 2016, DOI
              https://doi.org/10.1007/s40031-014-0111-2
</li> <li> S. Surender Reddy, Vuddanti Sandeep, and Chan-Mook Jung “Review of Stochastic Optimization Methods for
              Smart Grid” Frontiers in Energy – Springer Journal, vol. 11, no.2, pp. 197-209, June 2017. DOI:
              https://doi.org/10.1007/s11708-017-0457-7
</li> <li> S. Surender Reddy, Vuddanti Sandeep, B. Chitti Babu and Chan-Mook Jung “Multi-Objective based Optimal
              Generation Scheduling Considering Wind and Solar Energy Systems” International Journal of Emerging
              Electric Power Systems, De Gruyter (De Gruyter, vol. 19, no.5, Sep 2018. DOI: 10.1515/ijeeps-2018-0006.
  </li> <li> Govindu P, Basavaprabhu H; Smriti M, Dhananjeyan V; Asha S; Varun N John, Sandeep V, Gowd Konkallu
              “Glutathione as a photo-stabilizer of avobenzone: An evaluation under glass-filtered sunlight using UV-
              spectroscopy” Photochemical &amp; Photobiological Sciences Royal Society of Chemistry, vol. 18, no.1, pp. 198-
              207, Jan 2019, DOI: 10.1039/c8pp00343b.
</li> <li> P. Sudheer and V Sandeep, “Performance Analysis of Parallel Inverters for Accurate Proportional Power
              Sharing in Single Phase Microgrid” International Journal of Power and Energy Systems, ACTA Press, Aug
              2019 (Accepted).
</li> <li> B. Murali Krishna V, V. Sandeep and Ruparani “Design and Simulation of Voltage Sensor-based Electronic
              Load Balance Controllerfor SEIG based Isolated Load Applications”, Journal of Advanced Research in
              Dynamical and Control Systems, vol. 12, no. 3, 2020, pp. 345-352.
</li> <li> V. Sandeep, Pallavi V Honagond, Pooja S Pujari, Surender Reddy Salkuti “A Comprehensive Study on Smart
              Cities: Recent Developments, Challenges and Opportunities” Indonesian Journal of Electrical Engineering
              and Computer Science, vol. 14, no. 2, April 2020.
</li> <li> V. Sandeep, Suchitra Shastri, Arghya Sardar, Surender Reddy Salkuti “Modeling of Battery Pack Sizing for
              Electric Vehicles” International Journal of Power Electronics and Drive Systems (IJPEDS), vol. 9, no. 1, May
              2020.
</li> <li> P. Sudheer and V Sandeep, “A Study on Grid Interfaced Renewable Energy and Battery Storage Based Hybrid
              Systems for Supplying AC and DC Load” Journal of Advanced Research in Dynamical and Control Systems,
July 2020 (Accepted). </li>
            </ol>


            <h2>Conference Proceedings:</h2>
            <ol>

              <li> S.S. Murthy, Bhim Singh, V. Sandeep and Gurdiyal Singh “Design and Development of a Novel Single-Phase Self-Excited Induction Generator for Bio-Energy Based Power Generation” Proceedings of Centenary Conference, 2011 - EE, Indian Institute of Science, Bangalore, Dec. 14-17, 2011, pp. 204-209.

</li> <li> V. Sandeep, S.S. Murthy and Bhim Singh “A Comparative Study on Approaches to Curve Fitting of Magnetization Characteristics for Induction Generators” IEEE International Conference on Power Electronic, Drives and Energy Systems (PEDES 2012) 16-19, December 2012, Benguluru India, pp. 1-6.

</li> <li> S.S. Murthy, Bhim Singh, and V. Sandeep, “An Analytical Performance Comparison of Two Winding and Three
              Winding Single Phase SEIGs” Electric Power Systems Research, Elsevier Journal, vol. 107, pp. 36-44, Feb.
              2014, DOI: https://doi.org/10.1016/j.epsr.2013.09.006.
</li> <li> Adlan Pradana, V. Sandeep, S.S. Murthy, and Bhim Singh “A Comprehensive MATLAB –GUI Based Analysis and Performance Evolution of Single Phase SEIG” IEEE International Conference on Power Electronic, Drives and Energy Systems (PEDES 2012) 16-19, December 2012, Benguluru India, pp. 1-6.

</li> <li> Ankur Garg, Ankit Singhal, S.S. Murthy and V. Sandeep “Online Parameter Determination and Performance Analysis of Three Phase Induction Motor using Virtual Instrumentation” IEEE International Conference on Power Electronic, Drives and Energy Systems (PEDES 2012) 16-19, December 2012, Benguluru India, pp. 1-6.
</li> <li> V. Sandeep, Bala Murali krishna.V,  Kiran Kumar Namala and Nagesrara Rao.D “Grid Connected Wind Power System Driven by PMSG With MPPT Technique using Neural Network Compensator” IEEE International Conference on Energy Efficient Technologies for Sustainability, 7-8 April 2016, Nagercoil, India, pp. 917-921.

  </li> <li> Sandeep Vuddanti, Adlan Pradana, S S Murthy and Bhim Singh “An Optimum solution for Field Development of Single Phase Power Generation using 3-Phase Self Excited Induction Generator” IEEE International Conference on Power Electronic, Drives and Energy Systems (PEDES 2016), 14-19, December 2016, Trivandrum, India, pp. 1-6.

</li> <li> C. Sreenath and V. Sandeep “SWOT Analysis of Smart DC Microgrids” IEEE International Conference on Innovative Technologies in Engineering (ICITE2018), Hyderabad, 11 – 13, April 2018

</li> <li> C. Sreenath and V. Sandeep “Smart Microgrids: Mission, Ecosystem, Standards and Transformation” IEEE International Conference on New Trends in Engineering & Technology (ICNTET 2018), Chennai, 7 – 8, September 2018.

</li> <li> P. Sudheer and V. Sandeep “Analytical Study of Two Diode Model PV and Comparison of MPPT Techniques” IEEE International Conference on New Trends in Engineering & Technology (ICNTET 2018), Chennai, 7 – 8, September 2018.

</li> <li> P. Sudheer and V. Sandeep “The Growth of Renewables and Review of Microgrids in Indian Perspective” IEEE International Conference on Innovations in Engineering, Technology and Sciences (ICIETS), 20th & 21st September 2018.

</li> <li> Murali Krishna B K and V. Sandeep “An Investigative study on Electric Generators in Isolated Operation”,  IEI Conference : 33rd Indian Engineering Congress, 21-23 Dec 2018, Udaipur.
 </li>

              <li>V. Sandeep and Sharankumar Shastri “Analysis and Design of PMBLDC Motor for Three Wheeler EV Application” International Conference on Sustainable Energy and Future Electric Transportation –SEFET 2019, 14 -16 Feb 2019, Hyderaba, E3S web of conference proceedings, vol. 87
</li>

              <li>Shivanand M N, Maruthi Y, Phaneendra Babu Bobba and Sandeep Vuddanti “A case Study on wired and Wireless charger standards in India for Electric Vehicle Applications” International Conference on Sustainable Energy and Future Electric Transportation –SEFET 2019, 14 -16 Feb 2019, Hyderabad, E3S web of conference proceedings, vol. 87.
</li>
            </ol>


            <div id="national_symposium" className="link-item">
              <h2>National Symposiums / Workshops: </h2>
              <ol>

                <li>V. Sandeep “FACTS for Effective & Reliable Transmission of Electrical Power” National Level Technical Symposium, B.I.T.S, WARANGAL, A.P., 24- 25 Feb. 2006</li>
                <li>V. Sandeep “Information Technology in Electrical Power Systems” National Level Technical Symposium, K.S.R.M College of Engineering, KADAPA, A.P., 4th March 2006</li>
                <li>V. Sandeep “Advanced HVDC Technologies” National Level Technical Symposium, VITS, KAVALI, A.P., 2005. Sharankumar Shastri, Shubhojit Ghosh, V.Sandeep “Novel Smart Bladed Wind Turbine Design” IEEE UVCE's Fourteenth National Annual Technical Symposium, KAGADA 2017, 14 Oct 2017.</li>
                <li>V. Sandeep, Pallavi V H and Pooja S P “A Comprehensive Study on Smart Cities: Architecture, Technologies, Applications, Initiatives and Challenges“ IEEE Workshop on Smart Sustainable Cities – Vision to reality, Indian Institute of Science, Bangalore on 10 August 2018</li>
              </ol>

            </div>

            <div id="awards" className="link-item">
              <h2>Awards/ Achievements:</h2>
              <ol>
                <li>Gandhian Young Technological Innovation Award 2013 for “Novel Stand-alone 1-Phase AC Generator for Rural Electrification using Renewable Energy” by SRISTI Foundation and Supported by National Innovation Foundation & Dept. of Science & Technology, Govt. of India.</li>

                <li>Selected as amongst the top 24 innovators across the country by Economic Times NOW and Times NOW for the show “Power of Shunya - Challenge for Zero” in Sep. 2013. </li>
                <li>Recognized as a “Corporate Finalist” at the 3M-CII Innovation Challenge 2014.</li>
                <li>Selected in Top 10 Innovative Projects Award 2014 at Doctoral Level by Indian National Academy of Engineering (INAE), Govt of India.</li>
                <li>Best Research Paper Award and Silver Medal, by Railway Board and Institution of Engineers, Dec 2017</li>
                <li>Dr. APJ Abdul Kalam Life Time Achievement National Award 2017 for remarkable achievements in field of Teaching, Research and Publications by International Institute for Social and Economic Reforms. </li>
                <li>Participated in Festival of Innovation at Rashtrapati Bhavan on 07th March 2015 by National Innovation Foundation, Govt of India.</li>
                <li>Best socially relevant academic project on “Design and Development of a novel 5 kW 1- Phase AC Generator for Bio-energy based power generation” at Gandhi Jayanti Celebrations, NRCVEE, IIT Delhi, 2nd Oct. 2011.</li>
                <li>Best Poster presentation Award for “Analysis, Design and Development of a novel 1- phase 5 kW Self Excited Induction Generator for Renewable Energy Applications” at Seminar cum exhibition on “Renewable Energy – Technology, Production, Finance & Research  organized by IIT Delhi Alumni Association on 12th Nov. 2011.</li>
                <li>Best Poster presentation Award for “Low Carbon Novel Stand-Alone Green Technology for Renewable Energy Based Power Generation” at National Science Day celebrations at IIT Delhi, 28th Feb, 2012.</li>
                <li>One of Finalist of IITD Class of 89 Innovation Award –2012 for the topic on Standalone Single Phase AC Generator for Rural Electrification in India – A Novel Green Energy Technology.  </li>
                <li>Guided the project “IoT based Smart Garbage Monitoring System” by Sneha & Adwaith selected for IEEE Bangalore Section Student Innovation Fund 2018. </li>
                <li>Most Promising IEEE Student Branch 2018 Award, from IEEE Bangalore Section </li>
                <li>Proctor for IEEEXtreme 12.0 Programming Competition held on 20 Oct 2018 at CUK.</li>
                <li>Proctor for IEEEXtreme 13.0 Programming Competition held on 19 Oct 2019 at CUK.</li>
                <li>Elevated to Senior Member of IEEE in March 2018 by IEEE USA.</li>
                <li>IEEE Regional Exemplary Student Branch Award 2019, from IEEE USA Head Qauters. </li>
                <li>Secured 5th Rank in Proctor’s programming at IEEEXtreme 13.0 Programming Competition (World’s biggest online 24 hours programming) on 19 Oct 2019.</li>
                <li>Mentor, IEEE Student Team, CUK – Winners of prestigious "IEEE Student Ethics Competition 2019" flagship event of IEEE Bangalore Section and awarded with 400 US Dollars.</li>
                <li>IEEE Young Professional from 2014 till date</li>
                <li>IEEE Brand Ambassador from Jan 2020 to till date.</li>

              </ol>

            </div>





            <h2>Special / Popular lectures delivered:</h2>
            <ol>



              <li>“Opportunities for a B.Tech Graduate – Job & Higher Education” at PBR VITS, Kavali on 22 Aug 2013.</li>
              <li>“Current Research Trends and Innovations” at Dept of Mathematics, CUK on 25 Nov 2016</li>
              <li>“Power Generation using Biomass” at Centre for Information and Demonstration of Bio Fuel Production and Research (CIDBPR), CUK, 23rd March 2017.</li>
              <li>“Linkage of Knowledge through Engineering Education, Project Work, Research & Innovation” at SECAB,    </li>
              <li>  Bijapur, 17 Oct 2017.</li>
              <li>“Recent Technologies in Power Electronics and their Applications” at SECAB, Bijapur, 17 Oct 2017.</li>
              <li>“Successful Journey of A Student in 21st Century” at JNTU, Hyderabad on 12 Dec 2017</li>
              <li>“Successful Journey of A Student in 21st Century” at University of Mysore on 20 March 2018</li>
              <li>“Emerging Smart Grids” at MSRIT Bangalore on 13 April 2018</li>
              <li>“Renewable Energy, Microgrids and Smart Grids” at GRIET, Hyderabad on 10 May 2018</li>
              <li>“ICT and Pedagogy” at School of Education, CUK on 05 Nov 2018</li>
              <li>“Emerging Areas and Technologies in Power and Energy Systems” at IEEE PES Student Congress 2018,</li>
              <li>BEC, Bagalkot on 02 Nov 2018 </li>
              <li>“ICT Tools for Schools and their Utility” at School of Education, CUK on 05 Nov 2018</li>
              <li>“How to execute an Academic Project successfully ?” at PDA College of Engineering, Gulbarga on 1 Dec 2018 </li>
              <li>“Current Research in Microgrids and Smart Grids” at MHVR College of Engg, Vizianagaram on 19 Dec 2018.</li>
              <li>“Current Research in Electric Vehicles : Challenges” at MHVR College of Engg, Vizianagaram on 19 Dec 2018.</li>
              <li>“Applications of IOT, ML, Bigdata, Deep Learning etc. in Electrical Engineering” at MHVR College of Engg, Vizianagaram on 20 Dec 2018.</li>
              <li>“Applications of Power Electronics in Microgrids” at NIT Andhra Pradesh on 21 Dec 2018.</li>
              <li>“Recent Advances in Smart Grid Technologies” at UBDT Davanagere, on 25 Jan 2019.</li>
              <li>"Exploring Emerging Technologies in Electrical Engineering for Students' Projects & Research" GNDEC, Bidar, on 8th April 2019</li>
              <li>“Recent Technologies in Microgrid and Smart Grids” VIT University, Vellore, 25 & 26 April 2019. </li>
              <li>“ICT Tools for Effective Teaching and Learning” Sri Ramakrishna Students Home, Bangalore on 02 August 2019.</li>
              <li>“Roadmap for Engineering Students: An Induction Program” BKIT, Bhalki on 7th August 2019</li>
              <li>Technical Writing Skills and Seminar Presentation, CUK on 22 Aug 2019</li>
              <li>“Emerging Electric Vehicles: An IEEE Prospective”, PDA College of Engineering, Kalaburagi, on 4 Sep 2019. </li>
              <li>“Successful Journey of An Electrical Engineering Student in 21st Century”, NIT AP on 3 January 2020​ </li>
              <li>“Smart Grids : An IEA & IEEE Prospective”, FDP, NIT AP on 26 Feb 2020 </li>
              <li>“Electric Vehicles : Introduction, Challenges & Opportunities”, FDP, NIT AP on 27 Feb 2020</li>
              <li>“Source of Knowledge and Skill Development for Electrical Engineering Students & Faculty” FDP, NIT AP on 28 Feb 2020 </li>
              <li>“Promoting Linkage of Engineering Education, Knowledge, Technologies, Projects, Research & Innovation” PVPSIT, Vijayawada on 15 Feb 2020 </li>
              <li> “How to Write a Thesis / Dissertation / Project Report” , IEEE Webinar on 17 May 2020.</li>
              <li>“Artificial Intelligence, Machine Learning, Internet of Things and Big data Applications in Energy Sector :</li>
              <li>An IEEE Prospective” , Online FDP, GRIET on 06 June 2020.</li>
            </ol>





            <h2>Session Chair / Technical Chairs at Conferences</h2>

            <li>Organizing Chair, SeFet 2019: International Conference on Sustainable Energy and Future Electric Transportation, 14 -16 Feb 2020, Hyderabad.</li>
            <li>Session Chair, SeFet 2019: International Conference on Sustainable Energy and Future Electric Transportation, 14 -16 Feb 2020, Hyderabad.</li>
            <li>Session Chair, ICDEM 2020: International Conference on Design and Manufacturing Aspects for Sustainable Energy, 10 – 12 July 2020, Hyderabad.</li>




            <div id="administrative_experience" className="link-item">
              <h2>Administrative Experience :</h2>
              <ol>

                <li>Head, Department of Electrical Engineering, National Institute of Technology (NIT) Andhra Pradesh, Tadepalligudem, Jan 2020 to till date.</li>
                <li>Coordinator, NIRF Committee, NIT AP, from July 2020 to till date.</li>
                <li>Branch Counselor, IEEE Student Branch, NIT Andhra Pradesh from Jan 2020 till date.</li>
                <li>Interim Chair- PES / PELS / IAS Jt Chapter, IEEE Vizag Bay Section, from July 2020 till date</li>
                <li>Faculty Coordinator – IBM Academic Initiative Program, NIT AP</li>
                <li>Coordinator - Coursera for Campus program, NIT AP from 12 July 2020 till date.</li>
                <li>Faculty Coordinator – TCS iON Digital Glass Room, NIT AP</li>
                <li>Chairman, Departmental Academic Committee –UG (DAC-UG), EE Dept, NIT AP from Jan 2020 till date.</li>
                <li>Chairman, Departmental Academic Appeals Committee (DAAC) EE Dept, NIT AP from Jan 2020 till date.</li>
                <li>Chairman, Departmental Board of studies, EE Dept, NIT AP from Jan 2020 till date.</li>
                <li>Chairman, Class Review Committee, EE Dept, NIT AP from Jan 2020 till date.</li>
                <li>Chairman, Question Moderation Committee, EE Dept, NIT AP from Jan 2020 till date.</li>
                <li>President, Electrical Engineering Association, EE Dept, NIT AP from Jan 2020 till date.</li>
                <li>Chairman, Project Review Committee, EE Dept, NIT AP from Jan 2020 till date.</li>
                <li>Member, Institute Purchase Committee and Subcommittee, NIT AP from Jan 2020 till date.</li>
                <li>Coordinator, School of Engineering, CUK, 25 Nov 2013 to 21 Nov 2019.</li>
                <li>Faculty In-charge, Placement and Training Cell, School of Engineering, CUK, Sep 2016 to Nov 2019.</li>
                <li>Coordinator, Examination Section, CUK, 17 Oct 2014 to 11 March 2016.</li>
                <li>Faculty In-charge, Guest House, CUK, 25 Nov 2013 to 18 April 2016.</li>
                <li>Member, Local Purchase Committee, School of Engineering, CUK, 16 March 2015 to Nov 2019.</li>
                <li>Member, Board of Studies, Integrated Engineering programs, CUK, from 2013 till date.</li>
                <li>Member, Board of Studies, Integrated Science Programs, CUK, from 2013 till date.</li>
                <li>Member, Board of Studies, Community College Programs, CUK, from 2013 till date.</li>
                <li>Member, Board of Studies, Aerospace Engineering programs, CUK, from 2013 to 2018</li>
                <li>Head & Member, Selection Committee, Contractual faculty - Engineering CUK, from 2015 to 2019</li>
                <li>Convenor, Prospectus Committee – 2015 - 16, CUK.</li>
                <li>Convenor, Committee for recognition of Credit Marks for Academic Electives specified by CBSE, 2017</li>
                <li>Member, Core Committee for VIKASA Campaign, CUK, 2017</li>
                <li>Member, Core Automation Group, 2013-14</li>
                <li>Member, Editorial Board, CUK Newsletter, 2018.</li>
                <li>Member, CIJK Lecture Series Committee 2016-17</li>
                <li>Member, Purchase Committee For Furniture, Infrastructure Facilities and Bulk Requirements, (PC - FIFBR)</li>
                <li>Member, Working Committee, Rashtriya Avishkar Abhiyan, CUK</li>
                <li>Member, Prospectus Committee – 2016-17, CUK.</li>
                <li>Member, Prospectus Committee – 2019-20, CUK.</li>
                <li>Member, Calendar Committee – 2020, CUK</li>
                <li>Coordinator & Convener – Admission Committee, School of Engineering, from 2014 to 2019.</li>
                <li>Coordinator, School of Engineering – NAAC Accreditation 2016, CUK.</li>
                <li>Member, Expert Committee, Karnataka German Technical Training Institute, Gulbarga, Govt of Karnataka, from 2017 to 2018.</li>
                <li>SWAYAM - NPTEL Brand Ambassador & SPOC - Local Chapter, Central University of Karnataka from 26 July 2016 to Dec 2019.</li>
                <li>Branch Counselor, IEEE Student Branch, Central University of Karnataka from 24 July 2018 to Dec 2019.</li>
                <li>Branch Advisor, IEEE Power & Energy Student Chapter, CUK from 12 March 2019 to Dec 2019.</li>
                <li>Active expert member of IEEE Bangalore Section Mentor Network, from 2018 to 2019.</li>
                <li>Convener – Steering committee, CUK – IIT Hyderabad MoU, 2018 - 19</li>
                <li>Convener – Steering committee, CUK – JNTU Hyderabad MoU, 2018 -19</li>
                <li>Convener – Steering committee, CUK – Woosang University, South Korea MoU, 2019.</li>
                <li>Coordinator, Industry Interface Cell, CUK from Nov 2018 to Nov 2019</li>
                <li>Faulty In-charge, Internshla program (internships & placements), CUK from 2017 to 2019.</li>
                <li>Nodal Coordinator, VIRTUAL LABS, An MHRD Govt of India Initiative, CUK, from 2016 to 2019.</li>

              </ol>

            </div>
          </div>




          <div id="courses_taught" className="link-item">
            <h1>Courses taught :</h1>
            <h2>Undergraduate level:</h2>
            <ul>
              <li> Introduction to Engineering, Interdisciplinary Engineering, Electric Circuits, Magnetic Circuits, Control Systems, Measurements and Instrumentation, Elements of Electrical Engineering, Power Systems Analysis and Stability, Power Systems Control and Protection, Power Systems (Generation and Tranmission) Environmental Science and Technology, Engineering Workshop, Modeling of Electric Machines, Electric Drives, Smart grids, Micro grids, Electric Vehicles, Electrical Machines, Power Electronics, Measurement and Instrumentation Lab, Control Systems Lab, Power Electronics Lab, Power Systems Lab, Electro Mechanics Lab, Electric Machine Design Lab. </li>
            </ul>

            <h2>Post-Graduate level:</h2>
            <ul>
              <li>
                Electric Drives, Smart grids, Micro grids, Electric Vehicles, Modeling of Electrical Machines, Emerging Technologies in Energy Systems, Machine Design Lab, Renewable Energy Lab, Modeling of Energy Systems Lab, Electric Drives Lab, Emerging Technologies in Power and Energy Systems.
              </li>
            </ul>



            <h2>Seminars/ Workshops / Programs organized at CUK, Kalaburagi: </h2>
            <ul>

              <li>1-day Seminar on Biology for Engineers by Dr. Narendra Jawali (BARC, Mumbai) on 20th Aug 2014</li>
              <li>1-day Seminar on Biomedical Applications by Dr. P. Anil Kumar (UoH, Hyderabad) on 25th Aug 2014</li>
              <li>1-day Seminar on Distinguishing Science, Engineering and Technology: The Joy of Research by Prof. Jagadheesh, Dept of Aerospace Engineering, IISc Bangalore on 15th Sep 2014</li>
              <li>Competitions like Essay, Speech, Quiz, and Photo exhibition on the occasion of Gandhi Jayanthi Celebration, held on 2nd Oct 2014.</li>
              <li>1-day Seminar on Sustainable Energy Technologies by Dr. YB Ramakrishna (Chairman, Biofuel Board, Karnataka) on 22 Oct 2014.</li>
              <li>1-day Seminar on “Inclusive Innovation” by Prof. Aravind Chinchure, Former Vice- President, Reliance Innovation Leadership Centre, Pune on 28th Feb 2015.</li>
              <li>1-day Seminar on “Decoding the Life” by Dr. Gopalan Gnanaguru, Harvard Medical School, Boston, USA on 12thJan 2015</li>
              <li>2-day workshop on “Mathematical Modeling & Simulation, Integral Transforms, Probability and Statistics” by Dr. Odelu Ojjela, Defence Institute of Advanced Technology, Pune on 29th and 30th Jan 2015.</li>
              <li>various competitions like Essay, Speech, Quiz, and Photo exhibition on National Science Day,28th Feb 2015 </li>
              <li>Organized special lecture on Bio-fuel & Applications by Dr. Y B Ramakrishna, Former Chairman, KSBDB on 20th August 2015.</li>
              <li>Series of Events - Scientific Quiz, Logo Competition, Seminar, Poster presentation and Exhibition on 15th Sep 2015 in view of ‘’Engineers Day 2015’’ Celebrations </li>
              <li>One-day seminar on the eve of “A. P. J Abdul Kalam’s Birthday Celebration” on 15th Oct 2015.</li>
              <li>Essay competition and Speech competition in view of ‘’National Youth Day 2016’’ on 12th Jan 2016</li>
              <li>1-day seminar on “Patents and intellectual property Rights” by Dr. Debankur, General Electric India on 17th Feb 2016.</li>
              <li>2-day workshop on “Auto Robotics” in association with BARC- IITD, 26-27 Feb 2016.</li>
              <li>2-day workshop on “Home Automation” in association with BARC- IITD, 26-27 Feb 2016.</li>
              <li>National Science Day celebrations on 28th Feb 2016.</li>
              <li>1-day Seminar on “Power Electronics” by Dr. Bsavaraj Banakar, UBDT College of Engineering, Davangere on 26th March 2016.</li>
              <li>1-day Seminar on Biology for Engineers by Dr. P. Anil Kumar (UoH, Hyderabad) on 29th March 2016.</li>
              <li>2-day workshop on “Solar Panel Development” in association with Radiance - IITB, Aug 2016.</li>
              <li>2-day workshop on “Android App Development” in association with Radiance - IITB, Aug 2016.</li>
              <li>1-day seminar on “Space Research and Applications” by Dr. Shankar, Ex- Director, ISRO on 15 Sep 2016.</li>
              <li>3- day Training Programme on Occupation health and Safety  by SrinivasKatti, CEO Kavach safety Solution on 19th, 20th and 21st Oct 2016</li>
              <li>1-day Seminar on “Power Electronics Applications in Smart Grid” by Dr. Chandrasekhar, NIT Warangal on 25 Nov 2016</li>
              <li>National Science Day Celebrations on 28th Feb 2017.</li>
              <li>1-day seminar on “Applications of Power Electronics in Solar Energy Systems” by Dr. Chinmay Jain, Shakti Pumps, Indore on 11 March 2017.</li>
              <li>3-day workshop on “Bio-Diesel Production, Analysis, and Commercialization” during 22-24 March 2017 in collaboration with Department of Chemistry, CUK. </li>
              <li>1-day seminar on “Career opportunities for Engineers” by Mr. Anish Kaulgud, IIM Bangalore, on 28th Mar 2017</li>
              <li>5-day workshop on Machine learning and Internet of Things for students and faculty of Computer science engineering in April 2017 by Prof. Suryakanyth Ganganshetty (IIIT Hyderabad) and Prof. Manish kumar (Mangalore University)</li>
              <li>1-day seminar on “HVDC Technologies” by Prof. Arunachalam, BHEL on 27 July 2017.</li>
              <li>2-day workshop on “Internet of Things” in association with Radiance - IITB, Oct 2017.</li>
              <li>2-day workshop on “Quadcopter” in association with Radiance - IITB, Oct 2017.</li>
              <li>10-day workshop on Career Oriented Pre-Placement Training Program during 7 – 16 Dec 2017 by Bizotic solutions, Bangalore.</li>
              <li>1-day workshop on “Arduirno Programming and Applications” on 13 Jan 2018.</li>
              <li>2-day workshop on Programming with Arduino for faculty and students on 10 – 11 Feb 2018 in collaboration with IIT Hyderabad.</li>
              <li>2-day event “Festival of Innovations 2018” on 27th & 28th Feb 2018.</li>
              <li>1-day workshop on Programming with Python for faculty on 10 March 2018 in collaboration with IIT Hyd.</li>
              <li>1-day workshop on “Scilab” by Dr. Vijay Babu, IIIT Dharwad on 24 March 2018.</li>
              <li>workshop on Programming with Python for students on 07 April 2018 in collaboration with IIT Hyderabad</li>
              <li>one week short term course on “Programming and prototyping” for students on 6 – 11 July 2018 in collaboration with TLC, IIT Hyderabad</li>
              <li>1-day workshop on Awareness programs on MOOCS / NPTEL / SWAYAM courses on 25 July 2018</li>
              <li>IEEE Lecture series by Dr. Surender Reddy, Woosang University, South Korea on 20th Aug 2018.</li>
              <li>IEEE Distinguished Lecture by Prof. S S Murthy, Life Fellow on 30th Aug 2018.</li>
              <li>IEEE Distinguished Lecture by Dr. B Sathyanarayana, TIFR Mumbai on 30th Aug 2018.</li>
              <li>IEEE Poster Presentation Competition “Digital Transformation” on 5th Sep 2018.</li>
              <li>Seminar on “Role of Engineers in 21st century” by Mr. Mahagaonkar on 17th Sep 2018.</li>
              <li>IEEE Essay Competition “Pros and Cons of Digitalization” on 18th Sep 2018.</li>
              <li>IEEE Paper Presentation “Cyber Security” on 18th Sep 2018.</li>
              <li>IEEE ‘Blink’- Led Blinking Competition with Arduino on 19th Sep 2018.</li>
              <li>IEEE Smart Quiz on “Technology” on 20th Sep 2018.</li>
              <li>Dr. Adbul Kalam Memorial Lecture by Dr. R. R. Sonde, Vice President – THERMAX, on 15th Oct 2018.</li>
              <li>IEEEXtreme Programming Competition (World’s Biggest Coding event) on 20 Oct 2018</li>
              <li>IEEE Lecture by Prof. N.R. Shetty on 29 Oct 2018</li>
              <li>IEEE Workshop on “LabView” on 30 Oct 2018.</li>
              <li>Seminar on Reconfigurable Computing by Prof. Nanda Kulkarni on 03 Nov 2018</li>
              <li>IEEE Student innovative projects Exhibition on 05 Dec 2018.</li>
              <li>Educational Awareness Program to X standard students at Kadaganchi Govt. School on 19 Dec 2018</li>
              <li>CUK - IEEE SB Annual General Meeting 2018 on 18 Jan 2019</li>
              <li>IEEE Lecture on Signal Processing by Dr. Aditya Siripuram, IIT Hyderabad on 21 Jan 2019.</li>
              <li>Techno- Nirman - I, Students innovative projects exhibition on 26 Jan 2019. </li>
              <li>Educational Awareness and Career Guidance Program on 20 Feb 2019</li>
              <li>IEEE Distinguished Lecture by Prof. L.M. Patnaik, Former VC, DIAT Pune on 27 Feb 2019</li>
              <li>National Science Day Celebrations on 28 Feb 2019</li>
              <li>Eminent Lecture by Prof. N. R. Shetty, Chancellor, CUK on 28 Feb 2019</li>
              <li>IEEE Lecture on Robotics by Dr. Kiran Kumar, Hyd on 10 March 2019</li>
              <li>IEEE lecture on Philosophical foundations in Science & Technology by Mr. A.H. Sagar on 12 March 2019</li>
              <li>Arduino workshop on 14 – 15 March 2019</li>
              <li>Arduino Hackathon on 16 March 2019</li>
              <li>IEEE Lecture on Programming with Python by Mr. Prasanna Kumar, IITH on 24 April 2019</li>
              <li>Special Talk on Benefits with IEEE by Prof. Suresh Jagamshetty, BEC on 24 April 2019</li>
              <li>IEEE Lecture on Machine Learning by Mr. Saurav Solanki, on 01 Aug 2019</li>
              <li>Career Guidance for Engineering students by Mr. Anish Kaulgud, IIM B on 05 Aug 2019</li>
              <li>IEEE Computer Society Expert Lecture Series by Prof. Viswas and Prof. Nithin on 09 Aug 2019</li>
              <li>Techno- Nirman - II, Students innovative projects exhibition on 15 Aug 2019. </li>
              <li>Quiz On ‘IEEE’ on 29 Aug 2019.</li>
              <li>IEEE Poster Presentation Competition on 30 August 2019</li>
              <li>First Annual Celebrations of CUK –IEEE Student Branch on 30 Aug 2019</li>
              <li>Teacher’s Day Celebration on 5 Sep 2019.</li>
              <li>Educational Awareness for Village School Children on 09 Sep 2019</li>
              <li>SIGHT Event - Literacy day on 8 Sep 2020</li>
              <li>Workshop on 3D Printing and Model Demonstration by Prof. G.V.V. Sharma, IIT Hyderabad on 13 Sep 2019.</li>
              <li>Debate on Engineers for A Change on 15 Sept 2019</li>
              <li>Engineers Day Celebration on 16 Sep 2019</li>
              <li>IEEEXTREME Awareness Program on 20 Sept 2019</li>
              <li>Workshop on Microcontrollers by Dr. Vijay Babu, Dept of Electrical Engineering, MIT Manipal, 21 Sep 2019</li>
              <li>IEEEDAY Celebration on 01 Oct 2019</li>
              <li>Online Quiz on 01 Oct 2019</li>
              <li>Plantation Drive on 01 Oct 2019</li>
              <li>Innovative Ideas Submission on 01 Oct 2019</li>
              <li>Ethics Competition Screening on 06 Oct 2019</li>
              <li>Essay Writing Competition on 15 Oct 2019</li>
              <li>APJ  Abdul Kalam Jayanti on 15 Oct 2019</li>
              <li>Wheebox Workshop on 17 Oct 2019</li>
              <li>IEEEXTREME 13.0 Competition on 19 Oct 2019</li>
              <li>Workshop On Learning How To Learn on 25 Oct 2019</li>
              <li>Dr. Kalam Memorial Lecture by Shri BHVS Narayana Murthy,  Director RCI, DRDO on 5 Nov 2019</li>
              <li>Business Incubation/ Start Up Outreach Program on 7 Nov 2019</li>
              <li>3D Printing Workshop on 8 Nov 2019</li>
              <li>Arduino With SSD Interfacing Workshop on 8 Nov 2019</li>
              <li>Exhibition of 500+ Creative Experiments on 11 Nov 2019</li>
            </ul>

            <div id="contribution_in_institute_building" className="link-item"></div>

            <h2>Seminars/ Workshops / Programs organized at NIT AP :</h2>
            <ul>
              <li>Industry Expert Talk by Dr. Bharat Babu, Director, InstaSine Power Technologies on 20 Jan 2020.</li>
              <li>A Five Day Faculty Development Program (FDP) on Power Electronics Applications In Smart Grids and Electric Vehicles (PEASE - 2020) during 25th – 29th February 2020, organized By Electrical Engineering Department and supported by DST and Industry.     </li>
              <li>Student – Teacher Interactive Council (STIC) program with 1st year students on 14 March 2020.</li>
              <li>IEEE Eminent Lecture by Dr. Kasturirangan, in collaboration with IEEE Vizag Bag Section on 27 May 2020 </li>
              <li>IEEE Eminent Lecture by Prof. L.M. Patnaik, in collaboration with IEEE Vizag Bag Section on 05 June 2020 </li>
              <li>IEEE Eminent Lecture by Dr. R.R. Sonde, in collaboration with IEEE Vizag Bag Section on 11 June 2020 </li>
            </ul>


            <h2>Industrial Visits arranged for CUK Students :</h2>
            <ul>
              <li>Raichur Thermal Power Station (RTPS) on 12th April 2015.</li>
              <li>Qualcomm, Hyderabad on 29th December 2015.</li>
              <li>GE Projects (Alstom) Ltd on 14th November 2016</li>
              <li>Raichur Thermal Power Station (RTPS) on 10th Feb 2017.</li>
              <li>Central Power Research Institute (CPRI) Bangalore on 1st March 2017.</li>
              <li>GE Global Research Centre Bangalore on 2nd March 2017. </li>
              <li>IISc Bangalore on 3rd March 2017.</li>
              <li>IND LABS Pvt Ltd, Bangalore on 25th May 2017</li>
              <li>Super Thermal Power Plant (STPP), Kudgi on 11th Oct 2018</li>
              <li>IISc Bangalore on 23rd March 2019.</li>

            </ul>


            <h2>Contribution to CUK, Kalaburagi : </h2>
            <ul>
              <li>Instrumental in developing course structure and curriculum of electrical engineering programs of CUK</li>
              <li>Instrumental in developing course structure of electronics & communication, computer science, mechanical, civil engineering programs of CUK</li>
              <li>Convener of National Advisory Committee for curriculum development of engineering programs </li>
              <li>Established electrical engineering labs at CUK (Analog & Digital Circuits Lab, Measurement & Instrumentation Lab, Control Systems Lab, Microprocessor & Microcontroller Lab, Power Electronics Lab, Power Systems Lab, CAD of Electrical Machines Lab, Renewable Energy Lab).</li>
              <li>Instrumental in conducting All India Common Entrance Test (CUK-CET) in 2014 and 2015.</li>
              <li>Instrumental in setting up Chemistry Laboratory at CUK</li>
              <li>Instrumental in setting up 250 kW ground mounted Solar energy plant at CUK</li>
              <li>Member, Expert committee, in setting up 500 kW Roof top energy plant at CUK</li>
              <li>Convener of 1st Curriculum development workshop for M.Sc. Chemistry program at CUK</li>
              <li>Established SWAYAM – NPTEL Local Chapter at CUK</li>
              <li>Instrumental in implementing MOOCs for students in CUK.</li>
              <li>Instrumental in formulating MOU between CUK and Centre of Excellence on Disaster Management, JNTUH University, Hyderabad</li>
              <li>Instrumental in formulating MOU between CUK and IIT Hyderabad. </li>
              <li>Established Innovation Club at School of Engineering, CUK</li>
              <li>Established CUK – IEEE Student Branch.</li>
              <li>Established CUK – IEEE Power & Energy Student Chapter.</li>
              <li>Established Nodal Centre, Virtual Labs.</li>
              <li>Launched Innovative Project Exhibition on 26 Jan and 15 Aug every year. </li>

            </ul>


            <h2>Contribution to NIT AP: </h2>
            <ul>
              <li>Online Summer Research Internship Program</li>
              <li>THE ECLECTIC – Official Newsletter of EE Department</li>
              <li>Student – Teacher Interactive Council (STIC) at EE Department</li>
              <li>Strengthening IEEE Student Branch under IEEE Vizag Bay Section</li>
              <li>Eminent Lecture Series </li>
              <li>Launch of Best B.Tech Thesis Award </li>
              <li>Proposal of Skill Development Cell </li>
              <li>Linkage with Teaching Learning Centre, IIT Hyderabad</li>
              <li>Industry Interaction sessions</li>
              <li>Faculty Coordinator – IBM Academic Initiative Program </li>
              <li>Initiator – Coursera for Campus program </li>
              <li>Initiator – TCS iON Digital Glass Room</li>
            </ul>
          </div>




          <div id="projects_guidance" className="link-item">
            <h1>Projects guidance:</h1>

            <h2> Ph.D Thesis: (on-going) : 04 </h2>
            <ol>


              <li>Bala Murali krishna “Investigations on High Voltage Electric Generators for Renewable Energy Applications” </li>
              <li>Sudheer P “Analysis and Design of Smart Grids with High Voltage Engineering”</li>
              <li>Madhu Sagar Babu “Investigations on Different Energy Conversion Routes for EV Charging” </li>
              <li>Amrutha Raju “AI based Optimization Methods for Energy Management in Microgrids Connected with Electric Vehicles”</li>

              <h2>M.Tech Thesis: (completed) : 28</h2>
              <li>Afshan Nausheen “Study of Self-Excited Induction Generator for Wind Energy Systems” April 2018.</li>
              <li>Avijeet B “Power Quality Improvement in Solar PV System using UPFC” April 2018.</li>
              <li>Biswanath Hajoary “Performance Analysis of Single Phase Induction Motor in Ceiling Fan Application” April 2018.</li>
              <li>Mohd Sohail Jafar “Borewell Rescue Robot” April 2018.</li>
              <li>Sana Sumeen “Predictive Control of Battery / Ultra Capacitors based Hybrid Energy System in Electrical Vehicles” April 2018.</li>
              <li>Sharankumar “Design of Brushless PMDC Motor for Electric Vehicle Traction Application” April 2018.</li>
              <li>Spandana R M “Technology Foresight Study of Electric Aircrafts” April 2018.</li>
              <li>Suchitra “Investigations on Future Electrochemical Energy Storage Technologies & their Impacts in Electric Vehicles” April 2018.</li>
              <li>Varun N John “Design and Analysis of C-dump Converter for Switched Reluctance Motors” April 2018.</li>
              <li>Shivanand “Design and Development of a 1kW Wireless Charging System for Electric Vehicle in line with Bharath EV Standards”, April 2019</li>
              <li>Vishnuvardhan “Design, Modeling and Performance Analysis of PV –Wind Hybrid Energy System in Grid Connected and Islanded Mode”, April 2019</li>
              <li>Maruthi Siva Prasad Y “Design and Performance Analysis of Three Phase Solar Integrated UPQC”, April 2019</li>
              <li>Chandana Ronad “Comparative Analysis of Battery Electric Vehicle vs Fuel Cell Electric Vehicle”, April 2019</li>
              <li>Chandrika B H “Modeling and Simulation of Small Wind Energy System using Permanent Magnet Synchronous Generator (PMSG) feed with Single Phase Loads”, April 2019</li>
              <li>Pallavi  Gajare “Design of Cloud based Electricity Metering and Billing System using IOT”, April 2019</li>
              <li>Pragati “Solar Power Automatic Grass Cutter” ”, April 2019</li>
              <li>Pujari Rahul “Study and Analysis on Investigation of Solar and Wind Power Generation”, April 2019</li>
              <li>Samvedana Benkin “An Adjustable Speed PFC Bridgeless Buck Boost converter Fed BLDC Motor Drive”, April 2019</li>
              <li>P Divyashree “Embedded Solution for Motile Dialysis Targeting Wearable Artificial Kidney”, April 2019</li>
              <li>Gaurav Chatterjee “Real Time Pothole Detection using Deep Learning” April 2019.</li>
              <li>Atmadeep Arya “Deep Learning based Navigation Methods for Aerial Robots”, July 2020.</li>
              <li>Pavan Patil “Design and Development of IoT Based Aquaponics System” July 2020.</li>
              <li>Vinuta SB '' Techno-Economic Assessment and Power Sharing Analysis of Hybrid Energy System '' July 2020</li>
              <li>Suraksha "Integration of Photovoltaics with Electric Vehicle", July 2020.</li>
              <li>Rooprani “Investigation on self excited induction generator (SEIG) for small scale renewable energy system”, July 2020.</li>
              <li>Vinod Karknalli “Design, simulation and Finite Element Analysis of Switched Reluctance Motor for EV Application” July 2020.</li>
              <li>Saurav Solanki “Edge Computing for MAVI” July 2020.</li>
              <li>Bhagyashree “Wireless Power Charging Infrastructure on Road for EVs” July 2020. </li>

            </ol>


            <h2>B.Tech Thesis: (completed) : 17</h2>
            <ol>
              <li>Avijeet and Biswanath “Design and Development of Electric Bicycle” Aug 2017</li>
              <li>Varun John “Design of Switched Reluctance Motor for Small Electric vehicles” Aug 2017</li>
              <li>Sharan Shastri “Design of Brushless DC Motor for Small Electric vehicles” Aug 2017</li>
              <li>Afshan Nausheen “Modeling and Simulation of Solar Charging Station for Electric Vehicles using MATLAB” Aug 2017</li>
              <li>Spandana “Analysis and Control of Grid Interfaced Renewable Energy Systems” Aug 2017</li>
              <li>Suchitra “Analysis and Control of DC Micro Grid” Aug 2017</li>
              <li>Chandrika B H and Pooja S P and Vishnuvardhan “Design and Development of Small Scale Wind Energy Systems” April 2018.</li>
              <li>Maruti Siva Prasad Y and Shivanand M N “Design and Modelling of Microgrid” April 2018.</li>
              <li>Ajith and Anusha “Hand Gestured Smart Luggage Bag” April 2019</li>
              <li>Ambresh Metri, Channabasava, Shubham, and Vishal Reddy “ Induction Machine based Power Drive for Electric Vehicles” April 2019</li>
              <li>Vinod “Modeling and Simulation of 1-phase Permanent Magnet Synchronous Motor” April 2019.</li>
              <li>Bhagyashree and Suraksha Hirani “Load Management through Smart Inverter” April 2019</li>
              <li>Sangeetha, Rooparani and Laxmi, “Electrical Energy Management Using Solar Array” April 2019</li>
              <li>Supriya, Vinuta, and Sweta Rani “Analysis and Simulation of Hybrid Energy Storage System Technologies for EV Application” April 2019.</li>
              <li>Saurav Solanki “Start of Art and COCO Dataset” April 2019.</li>
              <li>Atmadeep Arya “Visual and Visual-inertial based Methods for Semi –Autonomous Quadrotor” April 2019. </li>

            </ol>

            <div id="memberships" className="link-item">

              <h2 >Professional Memberships</h2>
              <ul>
                <li>IEEE SENIOR MEMBER (Power & Energy Society, Power Electronics Society, Industrial Applications Society and Industrial Electronics Society)</li>
                <li>IEEE Young Professional</li>
                <li>Member, Institute of Engineers (India)</li>
                <li>Member, E4C Community (Supported by ASME, IEEE, ASCE)</li>
                <li>Member, International Association of Engineers (IAENG)</li>
                <li>Life Member, Indian Society for Technical Education (ISTE)</li>
                <li>IEEE Brand Ambassador</li>

              </ul>

            </div>

          </div>

        </div>



        {/* 


        <div id="nav2" className="site-layout-background" style={{ padding: 24, paddingTop: 100, minHeight: 380 }}>
      </div>





        <div id="nav3" className="site-layout-background" style={{ padding: 24, paddingTop: 100, minHeight: 380 }}>
      </div> */}







      </Content>
      <Footer style={{ textAlign: 'center' }}>Made with love by Saurav Solanki</Footer>
    </Layout>
  );
}

export default App;
