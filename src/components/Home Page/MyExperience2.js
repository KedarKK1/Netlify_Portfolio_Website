// import { Card, Col, Layout, Row, Timeline } from 'antd';
import { Col, Row, Timeline } from 'antd'
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

    return (
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
            {/* <Layout> */}
                {/* <Content style={{ paddingTop: 15, paddingBottom: 15, backgroundColor: props.color.myBackgroundColor }} > */}
                    <h1 style={{ color: textColor, backgroundColor: props.color.myBackgroundColor, marginBottom: '0px' }}> <b><u>My Experience</u></b> </h1>
                    <Row className="myExperience" style={{width: '100%', paddingTop: '10px', paddingBottom: '10px', justifyContent: 'center', backgroundColor: props.color.myBackgroundColor, color: textColor }}>
                        <Col>
                            {/* <Timeline> */}
                            <Timeline mode="alternate">
                                <Timeline.Item color="green">
                                    <p style={{ color:textColor }}><b><h4 style={{ color:textColor }}><u>IEEE Fest Credenz`22 - Frontend+Integration</u></h4>(Nov 21 - Mar 22)</b></p>
                                    <p style={{ color:textColor }}><h6 style={{ color:textColor }}><b>Event -</b></h6><i>Credenz`22 by PICT IEEE - Clash round-2 & RC(Reverse Coding) round-1</i></p>
                                    <p style={{ color:textColor }}><b>Task</b> - <b><i>Static Responsive webpages creation, Integration tasks(Pagination, Timer, Logout functionality with Django), </i></b>Responsiveness (using CSS and bootstrap)</p>
                                    <p style={{ color:textColor }}><h6 style={{ color:textColor }}><b>Tech Stack used/learned -</b></h6><i>HTML, CSS, Bootstrap, Javascript, Django, JQuery</i></p>
                                    <p style={{ color:textColor }}><h6 style={{ color:textColor }}><b>Used by - </b>Hundreds of students (intercollge and intracollege) </h6></p>
                                    <p style={{ color:textColor }}><h6 style={{ color:textColor }}><a target="_blank" rel="noreferrer"  href="https://github.com/KedarKK1/credenz21.git/">link</a></h6></p>

                                </Timeline.Item>
                                <Timeline.Item color="red">
                                    <p style={{ color:textColor }}><b><h4 style={{ color:textColor }}>Freelancing - (React-Native + Django-Rest-framework)<u></u></h4>(Jun 22 - Sep 22)</b></p>
                                    <p style={{ color:textColor }}><small>Created an Prototype of an App for a client who had an idea to implement E-commerce website with AI based Search/Sort products</small></p>
                                    <p style={{ color:textColor }}><h6 style={{ color:textColor }}><b>Tech Stack used/learned -</b></h6><i>Django-Rest-Framework, React-Native(expo), TailwindCSS, React-native-Paper, React-navigation, JWT(Djoser), React-maps, Formik</i></p>
                                    <p style={{ color:textColor }}><h6 style={{ color:textColor }}><a target="_blank" rel="noreferrer"  href="https://github.com/KedarKK1/Glokit/">link</a></h6></p>
                                </Timeline.Item>
                                <Timeline.Item color="green">
                                    <p style={{ color:textColor }}><b><h4 style={{ color:textColor }}> PICT FOSS club - MERN(Backend) PICT Placement Portal<u></u></h4>(Aug 22 - Oct 22)</b></p>
                                    <p style={{ color:textColor }}><small>Created an website for student to apply to companies coming to campus, with pre-eligibility checking, exceptional-cases handling, company registration by TnpCell, reducing human error & saving report generation time from 45 days to few min</small></p>
                                    <p style={{ color:textColor }}><h6 style={{ color:textColor }}><b>Tech Stack used/learned -</b></h6><i>MongoDB, NodeJs, ExpressJS, ReactJS, NodeMailer, JOI (validation), JWT, Postman</i></p>
                                    <p style={{ color:textColor }}><h6 style={{ color:textColor }}><b>Features - Job CRUD(admin), Job apply(students), 15+ eligibility check (exceptional student forgiving routes), Status Mail, Report Generation, Authentication, Authorization</b></h6></p>
                                    <p style={{ color:textColor }}><h6 style={{ color:textColor }}><b>My Contribution - Job apply(students) + (15+)criteria checking, Nested deletion of mongodb collections using remove and pre mongodb, Report generation, Status mail sending, integration of jwt with frontend</b></h6></p>
                                    <p style={{ color:textColor }}><h6 style={{ color:textColor }}><a target="_blank" rel="noreferrer"  href="https://kedarkoshti.netlify.app/">To be officially deployed as soon as college approves funds (last stage)...</a></h6></p>
                                </Timeline.Item>
                                <Timeline.Item color="green">
                                    <p style={{ color:textColor }}><b><h4 style={{ color:textColor }}> IEEE Fest - Credenz Tech Days (CTD) - Frontend(React JS) + Integration<u></u></h4>(Jul 22 - Nov 22)</b></p>
                                    <p style={{ color:textColor }}><h6 style={{ color:textColor }}><b>Event -</b></h6><i>Credenz Tech Days (CTD)`22 by PICT IEEE - RC(Reverse Coding) Head</i></p>
                                    <p style={{ color:textColor }}><b>Task</b> - <b><i>Entire frontend Responsive webpages creation, Integration tasks(Ace-editor, Pagination, Timer, Logout functionality with Django), </i></b>Responsiveness along with beautiful UI</p>
                                    <p style={{ color:textColor }}><h6 style={{ color:textColor }}><b>Tech Stack used/learned -</b></h6><i>ReactJS, Ace-editor, HTML, CSS, React-Bootstrap, React-Pagination, Django, JQuery</i></p>
                                    <p style={{ color:textColor }}><h6 style={{ color:textColor }}><b>Used by - </b>40+ college juniors</h6></p>
                                    <p style={{ color:textColor }}><h6 style={{ color:textColor }}><a target="_blank" rel="noreferrer"  href="https://github.com/KedarKK1/CTD.git/">link</a></h6></p>
                                </Timeline.Item>
                                <Timeline.Item color="green">
                                    <p style={{ color:textColor }}><b><h4 style={{ color:textColor }}> Backend Development Internship(Full-Time Remote Intern) - Solvevolve Pvt. Lmt. - ExpressJs, Apollo GraphQl<u></u></h4>(26-Oct 2022 - 26-Dec 2022)</b></p>
                                    <p style={{ color:textColor }}><small>Created entire backend from scratch for an web(ReactJs) & mobile(React-Native) application using Node, ExpressJS and Apollo GraphQl, fetching, storing dynamic no. of data and fields for IOT based devices</small></p>
                                    <p style={{ color:textColor }}><h6 style={{ color:textColor }}><b>Tech Stack used/learned -</b></h6><i>MERN(backend) (+ React-Native frontend PR review), Apollo GraphQl, OAuth2.0(passportJs), Bull cron job scheduling, Triggers handling logic(created by users), Dynamic no. of Data storing and fetching using aggregation of unique values, NodeMailer, validatorJs(validation), JWT based authentication(Rest API), Nanoid for random key generation, Postman</i></p>
                                    <p style={{ color:textColor }}><h6 style={{ color:textColor }}><b>Features - device creation(admin) with unique keys for an device(using nanoid), Scheduling(user), Subscription(user), Oauth 2.0(PassportJs), Error Handling(REST + Apollo GraphQl), Authentication, Authorization(admin, user), Email sending using NodeMailer</b></h6></p>
                                    <p style={{ color:textColor }}><h6 style={{ color:textColor }}><b>My Contribution - Created entire backend for an web(ReactJs) & mobile(React-Native) application</b></h6></p>
                                    <p style={{ color:textColor }}><h6 style={{ color:textColor }}><a target="_blank" rel="noreferrer"  href="https://solvevolve.com/">Deployed on AWS & currently being used by US-based company....</a></h6></p>
                                </Timeline.Item>
                                <Timeline.Item color="red">
                                    <p style={{ color:textColor }}><b><h4 style={{ color:textColor }}>Available for your internship<u></u></h4></b></p>
                                    <p style={{ color:textColor }}>Applying for internships for selecting best one out there</p>
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