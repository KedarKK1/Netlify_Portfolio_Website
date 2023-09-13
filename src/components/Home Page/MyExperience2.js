// import { Card, Col, Layout, Row, Timeline } from 'antd';
import { Col, Row, Timeline, Tag } from 'antd'
// import { Content } from 'antd/lib/layout/layout'
// import React, { Fragment } from 'react';
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
// const { Meta } = Card;
import "./MyExperience.css";
import { CheckOutlined } from '@ant-design/icons';
// import jobImg from "../../images/jobImg.jpg";
import pictIeeeImage2 from '../../images/session conducted on frontend, html, css, js, bootstrap & intro-to-reactjs4.jpeg';

const MyExperience2 = (props) => {
    const theme = useSelector((state) => state.themeReducer);
    // const textColor = props.textColor.myTextcolor
    const textColor = theme.theme !== "light" ? "white" : "black";
    // const myCardColor = theme.theme != "light" ? "#222222" : "";
    // const myCardColor = theme.theme !== "light" ? "#141E27" : "";

    const [mylayout, setMyLayout] = useState(window.innerWidth > 650 ? 'alternate' : 'left');

    useEffect(() => {
        // Update layout state when window is resized
        const handleResize = () => {
            setMyLayout(window.innerWidth > 650 ? 'alternate' : 'left');
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    let colorsArr = ["magenta", "red", "volcano", "orange", "gold", "lime", "green", "cyan", "blue", "geekblue", "purple"]
    const getIntoTags = (tags) => {
        return tags.map((tag, index) => {
            return (
                <Tag key={index} className="scaleUp" style={{ fontSize: '20px', padding: '10px', margin: "2px" }} color={colorsArr[index % colorsArr.length]}>{tag}</Tag>
            )
        })
    }

    return (
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
            {/* <Layout> */}
            {/* <Content style={{ paddingTop: 15, paddingBottom: 15, backgroundColor: props.color.myBackgroundColor }} > */}
            <h1 style={{ color: textColor, backgroundColor: props.color.myBackgroundColor, marginBottom: '0px' }}> <b><u>My Experience</u></b> </h1>
            <Row className="myExperience" style={{ width: '100%', paddingTop: '10px', paddingBottom: '10px', justifyContent: 'center', backgroundColor: props.color.myBackgroundColor, color: textColor }}>
                <Col>
                    {/* <Timeline> */}
                    {/* <Timeline mode="alternate"> */}
                    <Timeline mode={mylayout}>
                        <Timeline.Item color="red">
                            <p style={{ color: textColor }}><img src={pictIeeeImage2} width={"50%"} alt="pictIeeeImage2" /></p>
                            <p style={{ color: textColor }}><h4 style={{ color: textColor }}>1. IEEE Fest - Credenz Tech Days (CTD) - Frontend(React JS) + Integration<u></u></h4>(Jul 22 - Nov 06, <b>[5 MONTHS])</b></p>
                            <p style={{ color: textColor }}><div style={{ color: textColor }}><b>Event -</b><i>Credenz Tech Days (CTD)`22 by PICT IEEE - RC(Reverse Coding) Head</i></div></p>
                            <p style={{ color: textColor }}><b>Task</b> - <b><i>Entire frontend Responsive webpages creation, Integration tasks(Ace-editor, Pagination, Timer, Logout functionality with Django), </i></b>Responsiveness along with beautiful UI</p>
                            {/* <p style={{ color: textColor }}><h6 style={{ color: textColor }}><b>Tech Stack used/learned -</b></h6><i>{getIntoTags(["ReactJS", "Ace-editor", "HTML", "CSS", "React-Bootstrap", "React-Pagination", "Django", "JQuery"])}</i></p> */}
                            <p style={{ color: textColor }}><i>{getIntoTags(["ReactJS", "Ace-editor", "HTML", "CSS", "React-Bootstrap", "React-Pagination", "Django", "JQuery"])}</i></p>
                            <p style={{ color: textColor }}><h6 style={{ color: textColor }}><b>Used by - </b>40+ college juniors</h6></p>
                            <p style={{ color: textColor }}><h6 style={{ color: textColor }}><a target="_blank" rel="noreferrer" href="https://github.com/KedarKK1/CTD.git/">See project - link 🔗</a></h6></p>

                            {/* </Timeline.Item>
                        <Timeline.Item color="red"> */}
                            <p style={{ color: textColor }}><h4 style={{ color: textColor }}><u>2. IEEE Fest Credenz`22 - Frontend+Integration</u></h4>(Nov 21 - Mar 22, <b>[4 MONTHS])</b></p>
                            <p style={{ color: textColor }}><div style={{ color: textColor }}><b>Event -</b> <i>Credenz`22 by PICT IEEE - Clash round-2 & RC(Reverse Coding) round-1</i> </div></p>
                            <p style={{ color: textColor }}><b>Task</b> - <b><i>Static Responsive webpages creation, Integration tasks(Pagination, Timer, Logout functionality with Django), </i></b>Responsiveness (using CSS and bootstrap)</p>
                            {/* <p style={{ color: textColor }}><h6 style={{ color: textColor }}><b>Tech Stack used/learned -</b></h6><i>{getIntoTags(["HTML", "CSS", "Bootstrap", "Javascript", "Django", "JQuery"])}</i></p> */}
                            <p style={{ color: textColor }}><i>{getIntoTags(["HTML", "CSS", "Bootstrap", "Javascript", "Django", "JQuery"])}</i></p>
                            <p style={{ color: textColor }}><h6 style={{ color: textColor }}><b>Used by - </b>200+ students (intercollge and intracollege) </h6></p>
                            <p style={{ color: textColor }}><h6 style={{ color: textColor }}><a target="_blank" rel="noreferrer" href="https://github.com/KedarKK1/credenz21.git/">See project - link🔗</a></h6></p>

                        </Timeline.Item>
                        {/* <Timeline.Item color="red">
                                    <p style={{ color:textColor }}><b><h4 style={{ color:textColor }}>Freelancing - (React-Native + Django-Rest-framework)<u></u></h4>(Jun 22 - Sep 22)</b></p>
                                    <p style={{ color:textColor }}><small>Created an Prototype of an App for a client who had an idea to implement E-commerce website with AI based Search/Sort products</small></p>
                                    <p style={{ color:textColor }}><h6 style={{ color:textColor }}><b>Tech Stack used/learned -</b></h6><i>{getIntoTags(["Django-Rest-Framework", "React-Native(expo)", "TailwindCSS", "React-native-Paper", "React-navigation", "JWT(Djoser)", "React-maps", "Formik"])}</i></p>
                                    <p style={{ color:textColor }}><h6 style={{ color:textColor }}><a target="_blank" rel="noreferrer"  href="https://github.com/KedarKK1/Glokit/">link</a></h6></p>
                                </Timeline.Item> */}
                        {/* <Timeline.Item color="green" dot={<img src={jobImg} width="30px" height="30px" alt="alt for job" />} > */}
                        <Timeline.Item color="green">
                            {/* <p style={{ color:textColor }}><b><h4 style={{ color:textColor }}> <u>PICT FOSS club - MERN(Fullstack Developer Intern) PICT Placement Portal</u></h4>(Aug 22 - Oct 22) <a href="https://drive.google.com/file/d/1qEtcdS9D9niNs9HLaGt0wxxB5ecUXlsb/view?usp=sharing">Internship Certicate</a></b></p> */}
                            <p style={{ color: textColor }}><h4 style={{ color: textColor }}> <u><a target="_blank" rel="noreferrer" href="https://pict-foss-club.github.io/">Fullstack Developer Intern - Part time <br /> Foss Club, PICT <br /> Created Placement Portal 🔗</a> </u></h4>(Sep 01 - Feb 15, <b>[6 MONTHS]) <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1qEtcdS9D9niNs9HLaGt0wxxB5ecUXlsb/view?usp=sharing">Internship Certificate</a> & <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1NXaep422yxfN_MtoY0d5Ey52b79V2m5g/view?usp=sharing">Project Expanation Video</a> </b></p>
                            <p style={{ color: textColor }}><small>Created an website for student to apply to companies coming to campus, with pre-eligibility checking, exceptional-cases handling, company registration by TnpCell, <b>reducing human error & saving report generation time from 45 days to few min</b></small></p>
                            <p style={{ color: textColor }}><i>{getIntoTags(["MongoDB", "NodeJs", "ExpressJS", "ReactJS", "NodeMailer", "JOI (validation)", "JWT", "Multer", "Postman", "Algorithms"])}</i></p>
                            {/* <p style={{ color: textColor }}><h6 style={{ color: textColor }}><b>Features - Job CRUD(admin), Job apply(students), 15+ eligibility check (exceptional student forgiving routes), Status Mail, Report Generation, Authentication, Authorization</b></h6></p> */}
                            <p style={{ color: textColor }}><h6 style={{ color: textColor }}><b>My Contribution - • Job apply(students) + (15+)criteria checking, <br /> • Nested deletion of mongodb collections using remove and pre mongodb, <br /> • Report generation algorithm, <br /> • Status mail sending, <br /> • integration of jwt auth. with frontend(ReactJS)</b></h6></p>
                            <p style={{ color: textColor }}><h6 style={{ color: textColor }}><a target="_blank" rel="noreferrer" href="https://pict-foss-club.github.io/">To be officially deployed as soon as college approves funds (last stage)...</a></h6></p>
                        </Timeline.Item>

                        {/* <Timeline.Item color="red" dot={<SmileOutlined />} > */}
                        <Timeline.Item color="red" >
                            <p style={{ color: textColor }}><h4 style={{ color: textColor }}>  <u>Backend Developer Intern(Full-Time Remote) <br /> <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/solvevolve/" >Solvevolve Pvt. Lmt.</a></u></h4>(26 Oct'22 - 30 Dec'22, <b>[2 MONTHS]) <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1NpJBOZSOmPhopOs9O53GFUQ0_KVFdW1H/view?usp=sharing">Internship Certificate 🔗</a> & <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/124C0A2QCg7x_jg2YLB_1g9OIg5c5lJnk/view?usp=sharing">Letter Of Recommendation(LOR) 🔗</a>
                                <h5>{getIntoTags(["Node.js", "ExpressJs", "Apollo GraphQl", "MongoDB", "Firebase(for react-native push notification)", "Bull Job Schedule", "Razorpay Webhooks", "Google Auth Library", "Multer", "Nodemailer", "JWT (Access & Refresh Token)", "Aggregation Pipelines", "Algorithms"])}<u></u></h5></b></p>
                            {/* <p style={{ color: textColor }}><small>Created <b>entire backend from scratch within short period of 2 MONTHS</b> for an web (ReactJs, Typescript and Apollo GraphQl) & mobile(React-Native (android)) application, for <b><u>dynamic Subscription Plans (razorpay),</u></b> <b>fetching, storing dynamic no. fields of data over protected REST APIs & fields values for manipulating it (using complex aggregation functions) & showing user their device's data over user's search querry</b> like period, field names(AMP, VOL) & <b>show network error (using Bull job every few min to check last 30 min data)</b> and <b>allow user to perform scheduling for starting ON/OFF device using scheduling algorithm</b> that I created and pushing that job for that device, <b> subscription Plan (Razorpay webhooks fetching from backend)</b></small></p> */}
                            {/* <p style={{ color: textColor }}><h6 style={{ color: textColor }}><b>Tech Stack & Skills used/learned -</b></h6><ul><i><li><b><u>MERN(backend)</u></b> (+ React-Native frontend PR review),</li><b><u><li>Apollo GraphQl,</li></u></b> <li><b><u>Authentication & authorization using OAuth2.0(passportJs + google-auth-library) & JWT based authentication(Rest API),</u></b></li>  <li><b><u>Firebase</u></b> cron job scheduling for push notifications,</li> <li><b><u>Triggers handling algorithm & Bull job queue for checking it every 1 min</u></b>,</li> <li><b><u>Dynamic no. of input Data-fields</u></b>,</li>  <li><b><u>complex aggregation pipeline</u></b> (for multiple search related features like time-range, unique field related data only for graph plotting),</li>  <li><u><b>Razorpay webhooks integration</b></u>,</li> <li><b><u>NodeMailer</u></b>,</li>  <li><b><u>Multer(image upload)</u></b>,</li>  <li><b><u>Pagination-Filter-Sorting API</u></b> (for admin to view all user's data),</li>  validatorJs(mongoDB validation), Nanoid for random key generation, Postman</i></ul></p> */}
                            <p style={{ color: textColor }}><div style={{ color: textColor }}><b>Features</b> -<li>• Device creation(admin) with unique keys for an device(using nanoid),</li>  <li><b>• Trigger Scheduling(by user for device on/off automation scheduling)</b>,</li> <li><b>• Subscription</b> to device using <b>Razorpay (user) Webhooks(Tested using NgRok)</b>,</li> <li><b>• Firebase push notification</b> (<b>for - i. Alert</b> received from hardware Data & <br /> for <b> ii. Network Error identification</b>),</li> <li><b>• Data manipulation query using aggregation pipeline for supplying data for graphs</b> for users to search unique fields(Voltage, current, Freq., etc and their data on specific time-period),</li> <li><b>• Job scheduling</b> for Network error(device ON & data not received for GTE 30 min),</li> <li><b>• Google Oauth 2.0(PassportJs & Google-Auth-Library) & JWT(REST)</b>,</li> <li>• Pagination-Filter-Sorting API(for admin to see all user's data),</li> <li><b>• Error Handling(REST + Apollo GraphQl)</b>,</li> <li>• Authentication, Authorization(admin, user),</li> <li>• Email sending using NodeMailer,</li> <li><b>• Image handling (Multer)</b></li> </div></p>
                            <p style={{ color: textColor }}><h6 style={{ color: textColor }}><b>My Contribution - Created entire backend</b> for an web(ReactJs) & mobile(React-Native) application within short period of 2 MONTHS in a team of 3 developers(me-backend, 1 in React & other 1 in React-Native)</h6></p>
                            <p style={{ color: textColor }}><h6 style={{ color: textColor }}><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/solvevolve/">Deployed on AWS & currently being used by Gurgaon-based IOT startup client....</a></h6></p>
                        </Timeline.Item>
                        <Timeline.Item color="green">
                            <p style={{ color: textColor }}><h4 style={{ color: textColor }}>  <u>Frontend Development Intern(Part-Time Remote) <br /> <a target="_blank" rel="noreferrer" href="https://www.intertwinetechnologies.com/">Intertwine Technologies(Previously Offeraya), Pune 🔗</a></u></h4>(10 Apr'23 - 10 July'23, <b>[3 MONTHS]) <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1nr5MDQHyRgUgOQmq6RicyB1Lvtmdcihd/view?usp=sharing">Internship Certificate 🔗</a>
                                <h5>{getIntoTags(["React js", "Redux", "Ant Design", "Material UI", "Formik"])}<u></u></h5></b></p>
                            <p style={{ color: textColor }}>Worked on  <b>2 SaaS projects: </b> </p>
                            <p style={{ color: textColor }}><b >1. Invoice Discounting webApp</b> : • Created <b>frontend responsive dashboards & from scratch using function based components</b> and <b>validated fields using Formik</b> for form state for an web application for clients • <b>Integrated searching, sorting and filtering functionality on tables </b> & Used <b>optimisation techniques like debouncing</b> in dashboard page</p>
                            <p style={{ color: textColor }}><b>2. Twistoe CRM webApp</b>: • Created Separate Module for customer email <b>listing using fetchting & implemented pagination, sorting using redux</b>• <b>Improvised code efficiency</b> by <b>identifying reusable code & modularizing it using class-based component</b> code</p>
                        </Timeline.Item>
                        <Timeline.Item color="green" dot={<CheckOutlined />}>
                            <p style={{ color: textColor }}><b><h4 style={{ color: textColor }}>Available for your internship/job opportunities<u></u></h4></b></p>
                            <p style={{ color: textColor }}>Applying for internships/jobs for longterm opportunities!</p>
                            {/* <p style={{ color:textColor }}><h6 style={{ color:textColor }}><b>Dependencies used/learned -</b></h6><i>NodeMailer, react-router-dom, react-paginator,</i></p> */}
                            {/* <p style={{ color:textColor }}><h6 style={{ color:textColor }}><b>Features - CRUD(Products, Orders) using RESTful API, Authentication with , Authorization, Page-Routing, Pagination, Error-handeling</b></h6></p> */}
                            {/* <p style={{ color:textColor }}><h6 style={{ color:textColor }}><a href="https://kedarkoshti.netlify.app/">To be deployed...</a></h6></p> */}
                        </Timeline.Item>
                    </Timeline>
                </Col>
            </Row>
            {/* </Content> */}
            {/* </Layout> */}
        </div>
    )
}

export default MyExperience2