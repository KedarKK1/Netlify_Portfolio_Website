// import { Card, Col, Layout, Row, Timeline } from 'antd';
import { Col, Row, Timeline, Tag } from 'antd'
// import { Content } from 'antd/lib/layout/layout'
// import React, { Fragment } from 'react';
import React from 'react'
import { useSelector } from 'react-redux';
// const { Meta } = Card;
import "./MyExperience.css";

const MyExperience2 = (props) => {
    const theme = useSelector((state) => state.themeReducer);
    // const textColor = props.textColor.myTextcolor
    const textColor = theme.theme !== "light" ? "white" : "black"
    // const myCardColor = theme.theme != "light" ? "#222222" : "";
    // const myCardColor = theme.theme !== "light" ? "#141E27" : "";

    let colorsArr = ["magenta", "red", "volcano", "orange", "gold", "lime", "green", "cyan", "blue", "geekblue", "purple"]
    const getIntoTags = (tags) => {
        return tags.map((tag, index) => {
            return (
                <Tag className="scaleUp" style={{ fontSize: '20px', padding: '10px', margin: "2px" }} color={colorsArr[index % colorsArr.length]}>{tag}</Tag>
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
                    <Timeline mode="alternate">
                        <Timeline.Item color="green">
                            <p style={{ color: textColor }}><b><h4 style={{ color: textColor }}><u>IEEE Fest Credenz`22 - Frontend+Integration</u></h4>(Nov 21 - Mar 22)</b></p>
                            <p style={{ color: textColor }}><h6 style={{ color: textColor }}><b>Event -</b></h6><i>Credenz`22 by PICT IEEE - Clash round-2 & RC(Reverse Coding) round-1</i></p>
                            <p style={{ color: textColor }}><b>Task</b> - <b><i>Static Responsive webpages creation, Integration tasks(Pagination, Timer, Logout functionality with Django), </i></b>Responsiveness (using CSS and bootstrap)</p>
                            <p style={{ color: textColor }}><h6 style={{ color: textColor }}><b>Tech Stack used/learned -</b></h6><i>{getIntoTags(["HTML", "CSS", "Bootstrap", "Javascript", "Django", "JQuery"])}</i></p>
                            <p style={{ color: textColor }}><h6 style={{ color: textColor }}><b>Used by - </b>Hundreds of students (intercollge and intracollege) </h6></p>
                            <p style={{ color: textColor }}><h6 style={{ color: textColor }}><a target="_blank" rel="noreferrer" href="https://github.com/KedarKK1/credenz21.git/">link</a></h6></p>

                        </Timeline.Item>
                        {/* <Timeline.Item color="red">
                                    <p style={{ color:textColor }}><b><h4 style={{ color:textColor }}>Freelancing - (React-Native + Django-Rest-framework)<u></u></h4>(Jun 22 - Sep 22)</b></p>
                                    <p style={{ color:textColor }}><small>Created an Prototype of an App for a client who had an idea to implement E-commerce website with AI based Search/Sort products</small></p>
                                    <p style={{ color:textColor }}><h6 style={{ color:textColor }}><b>Tech Stack used/learned -</b></h6><i>{getIntoTags(["Django-Rest-Framework", "React-Native(expo)", "TailwindCSS", "React-native-Paper", "React-navigation", "JWT(Djoser)", "React-maps", "Formik"])}</i></p>
                                    <p style={{ color:textColor }}><h6 style={{ color:textColor }}><a target="_blank" rel="noreferrer"  href="https://github.com/KedarKK1/Glokit/">link</a></h6></p>
                                </Timeline.Item> */}
                        <Timeline.Item color="green">
                            {/* <p style={{ color:textColor }}><b><h4 style={{ color:textColor }}> <u>PICT FOSS club - MERN(Fullstack Developer Intern) PICT Placement Portal</u></h4>(Aug 22 - Oct 22) <a href="https://drive.google.com/file/d/1qEtcdS9D9niNs9HLaGt0wxxB5ecUXlsb/view?usp=sharing">Internship Certicate</a></b></p> */}
                            <p style={{ color: textColor }}><b><h4 style={{ color: textColor }}> <u><a target="_blank" rel="noreferrer" href="https://pict-foss-club.github.io/">FOSS club, PICT - MERN(Fullstack Developer Intern - Part time) PICT Placement Portal 🔗</a> </u></h4>(Sep 01 - Feb 15) <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1qEtcdS9D9niNs9HLaGt0wxxB5ecUXlsb/view?usp=sharing">Internship Certificate</a> & <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1NXaep422yxfN_MtoY0d5Ey52b79V2m5g/view?usp=sharing">Project Expanation Video</a> </b></p>
                            <p style={{ color: textColor }}><small>Created an website for student to apply to companies coming to campus, with pre-eligibility checking, exceptional-cases handling, company registration by TnpCell, <b>reducing human error & saving report generation time from 45 days to few min</b></small></p>
                            <p style={{ color: textColor }}><h6 style={{ color: textColor }}><b>Tech Stack used/learned -</b></h6><i>{getIntoTags(["MongoDB", "NodeJs", "ExpressJS", "ReactJS", "NodeMailer", "JOI (validation)", "JWT", "Multer", "Postman", "Algorithms"])}</i></p>
                            <p style={{ color: textColor }}><h6 style={{ color: textColor }}><b>Features - Job CRUD(admin), Job apply(students), 15+ eligibility check (exceptional student forgiving routes), Status Mail, Report Generation, Authentication, Authorization</b></h6></p>
                            <p style={{ color: textColor }}><h6 style={{ color: textColor }}><b>My Contribution - Job apply(students) + (15+)criteria checking, Nested deletion of mongodb collections using remove and pre mongodb, Report generation, Status mail sending, integration of jwt with frontend</b></h6></p>
                            <p style={{ color: textColor }}><h6 style={{ color: textColor }}><a target="_blank" rel="noreferrer" href="https://kedarkoshti.netlify.app/">To be officially deployed as soon as college approves funds (last stage)...</a></h6></p>
                        </Timeline.Item>
                        <Timeline.Item color="red">
                            <p style={{ color: textColor }}><b><h4 style={{ color: textColor }}> IEEE Fest - Credenz Tech Days (CTD) - Frontend(React JS) + Integration<u></u></h4>(Jul 22 - Nov 06)</b></p>
                            <p style={{ color: textColor }}><h6 style={{ color: textColor }}><b>Event -</b></h6><i>Credenz Tech Days (CTD)`22 by PICT IEEE - RC(Reverse Coding) Head</i></p>
                            <p style={{ color: textColor }}><b>Task</b> - <b><i>Entire frontend Responsive webpages creation, Integration tasks(Ace-editor, Pagination, Timer, Logout functionality with Django), </i></b>Responsiveness along with beautiful UI</p>
                            <p style={{ color: textColor }}><h6 style={{ color: textColor }}><b>Tech Stack used/learned -</b></h6><i>{getIntoTags(["ReactJS", "Ace-editor", "HTML", "CSS", "React-Bootstrap", "React-Pagination", "Django", "JQuery"])}</i></p>
                            <p style={{ color: textColor }}><h6 style={{ color: textColor }}><b>Used by - </b>40+ college juniors</h6></p>
                            <p style={{ color: textColor }}><h6 style={{ color: textColor }}><a target="_blank" rel="noreferrer" href="https://github.com/KedarKK1/CTD.git/">link</a></h6></p>
                        </Timeline.Item>
                        <Timeline.Item color="green">
                            <p style={{ color: textColor }}><b><h4 style={{ color: textColor }}>  <u>Backend Development Internship(Full-Time Remote Intern) - <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/solvevolve/" >Solvevolve Pvt. Lmt.</a></u></h4>(26 Oct'22 - 30 Dec'22) <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1NpJBOZSOmPhopOs9O53GFUQ0_KVFdW1H/view?usp=sharing">Internship Certificate</a> & <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/124C0A2QCg7x_jg2YLB_1g9OIg5c5lJnk/view?usp=sharing">Letter Of Recommendation(LOR)</a>
                                <h5>{getIntoTags(["Node.js", "ExpressJs", "Apollo GraphQl", "MongoDB", "Firebase(for react-native push notification)", "Bull Job Schedule", "Razorpay Webhooks", "Google Auth Library", "Multer", "Nodemailer", "JWT (Access & Refresh Token)", "MongoDB Aggregations", "Algorithms"])}<u></u></h5></b></p>
                            <p style={{ color: textColor }}><small>Created <b>entire backend from scratch within short period of 2 months</b> for an web (ReactJs, Typescript and Apollo GraphQl) & mobile(React-Native (android)) application, for <b><u>dynamic Subscription Plans (razorpay),</u></b> <b>fetching, storing dynamic no. fields of data over protected REST APIs & fields values for manipulating it (using complex aggregation functions) & showing user their device's data over user's search querry</b> like period, field names(AMP, VOL) & <b>show network error (using Bull job every few min to check last 30 min data)</b> and <b>allow user to perform scheduling for starting ON/OFF device using scheduling algorithm</b> that I created and pushing that job for that device, <b> subscription Plan (Razorpay webhooks fetching from backend)</b></small></p>
                            <p style={{ color: textColor }}><h6 style={{ color: textColor }}><b>Tech Stack & Skills used/learned -</b></h6><ul><i><li><b><u>MERN(backend)</u></b> (+ React-Native frontend PR review),</li><b><u><li>Apollo GraphQl,</li></u></b> <li><b><u>Authentication & authorization using OAuth2.0(passportJs + google-auth-library) & JWT based authentication(Rest API),</u></b></li>  <li><b><u>Firebase</u></b> cron job scheduling for push notifications,</li> <li><b><u>Triggers handling algorithm & Bull job queue for checking it every 1 min</u></b>,</li> <li><b><u>Dynamic no. of input Data-fields</u></b>,</li>  <li><b><u>complex aggregation pipeline</u></b> (for multiple search related features like time-range, unique field related data only for graph plotting),</li>  <li><u><b>Razorpay webhooks integration</b></u>,</li> <li><b><u>NodeMailer</u></b>,</li>  <li><b><u>Multer(image upload)</u></b>,</li>  <li><b><u>Pagination-Filter-Sorting API</u></b> (for admin to view all user's data),</li>  validatorJs(mongoDB validation), Nanoid for random key generation, Postman</i></ul></p>
                            <p style={{ color: textColor }}><h6 style={{ color: textColor }}><b>Features -<li>Device creation(admin) with unique keys for an device(using nanoid),</li>  <li>Trigger Scheduling(user),</li> <li>Subscription to device using Razorpay (user) Webhooks(Tested using NgRok),</li> <li>Firebase push notification (on Alert received from hardware Data & for Network Error identification),</li> <li>Data manipulation querry for user to search unique fields(Voltage, current, Freq., etc and their data on specific time-period),</li> <li>Job scheduling for Network error(device ON & data not received for GTE 30 min),</li> <li>Google Oauth 2.0(PassportJs & Google-Auth-Library) & JWT(REST),</li> <li>Pagination-Filter-Sorting API(for admin to see all user's data),</li> <li>Error Handling(REST + Apollo GraphQl),</li> <li>Authentication, Authorization(admin, user),</li> <li>Email sending using NodeMailer,</li> <li>Image handling (Multer)</li> </b></h6></p>
                            <p style={{ color: textColor }}><h6 style={{ color: textColor }}><b>My Contribution - Created entire backend</b> for an web(ReactJs) & mobile(React-Native) application within short period of 2 months in a team of 3 developers(me-backend, 1 in React & other 1 in React-Native)</h6></p>
                            <p style={{ color: textColor }}><h6 style={{ color: textColor }}><a target="_blank" rel="noreferrer" href="https://solvevolve.com/">Deployed on AWS & currently being used by Gurgaon-based IOT startup client....</a></h6></p>
                        </Timeline.Item>
                        <Timeline.Item color="red">
                                <p style={{ color: textColor }}><b><h4 style={{ color: textColor }}>  <u>Frontend Development Internship(Part-Time Remote Intern) - <a href="https://www.intertwinetechnologies.com/" >Intertwine Technologies(Previously Offeraya), Pune</a></u></h4>(10 Apr'23 - 11 July'23) <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1nr5MDQHyRgUgOQmq6RicyB1Lvtmdcihd/view?usp=sharing">Internship Certificate</a>
                                <h5>{getIntoTags(["React js", "Redux", "Ant Design", "Material UI", "Formik"])}<u></u></h5></b></p>
                                <p style={{ color: textColor }}>Worked on  <b>2 SaaS projects: Invoice Discounting webApp & Twistoe - CRM webApp</b> for gyms for business growth</p>
                                <p style={{ color: textColor }}>Invoice Discounting webApp: : Created <b>frontend responsive dashboards & from scratch using function based components</b> and <b>validated fields using Formik</b> for form state for an web application for clients</p>
                                <p style={{ color: textColor }}>Invoice Discounting webApp: : <b>Integrated searching, sorting and filtering functionality on tables </b> & Used <b>optimisation techniques like debouncing</b> in dashboard page</p>
                                <p style={{ color: textColor }}>Twistoe CRM webApp: Created Separate Module for customer email <b>listing using fetchting & implemented pagination, sorting using redux</b></p>
                                <p style={{ color: textColor }}>Twistoe CRM webApp: <b>Improvised code efficiency</b> by <b>identifying reusable code & modularizing it using class-based component</b> code</p>
                        </Timeline.Item>
                        <Timeline.Item color="green">
                            <p style={{ color: textColor }}><b><h4 style={{ color: textColor }}>Available for your internship/job opportunities<u></u></h4></b></p>
                            <p style={{ color: textColor }}>Applying for internships/jobs for selecting best one out there!</p>
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