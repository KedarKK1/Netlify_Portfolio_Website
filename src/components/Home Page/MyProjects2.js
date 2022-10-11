// import { Col, Layout, Row, Card, Timeline } from 'antd';
import { Col, Row, Timeline } from 'antd';
// import { Content } from 'antd/lib/layout/layout'
// import React, { Fragment, useEffect } from 'react';
import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
// import { useSelector } from 'react-redux';
import "./MyProjects.css";

const MyProjects2 = (props) => {

    // const theme = useSelector((state) => state.themeReducer);
    const textColor = props.textColor.myTextcolor
    // const myCardColor = theme.theme !== "light" ? "#141E27" : "";

    useEffect(() => {
        Aos.init({
            duration: 500,
        });

    }, [])

    return (
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
            {/* <Layout id="projects"> */}
            {/* <Content style={{ backgroundColor: props.color.myBackgroundColor, paddingTop: 15, paddingBottom: 15 }} data-aos="fade-up" data-aos-anchor-placement="top-center"> */}
            <h1 style={{ color: textColor, backgroundColor: props.color.myBackgroundColor, marginBottom: '0px'}}> <b><u>My Projects</u></b> </h1>
            <Row className="myProjects" style={{ paddingTop:"15px",width: '100%', justifyContent: 'center', color: textColor, backgroundColor: props.color.myBackgroundColor }}>
                <Col>
                    {/* <Timeline> */}
                    <Timeline mode="alternate">
                        <Timeline.Item color="green">
                            <p style={{ color:textColor }}><b><h4 style={{ color:textColor }}><u>Portfolio Website (Solo)</u></h4></b></p>
                            <p style={{ color:textColor }}><h6 style={{ color:textColor }}><b>Tech Stack used/learned -</b></h6><i>React JS, Ant Design, Firebase, Google Analytics</i></p>
                            <p style={{ color:textColor }}><>Features</> - <b><i>Meme sharing(CRUD), Redux for (dark - light mode), total visits count, </i></b>Responsive</p>
                            <p style={{ color:textColor }}><h6 style={{ color:textColor }}><a href="https://kedarkoshti.netlify.app/">link</a></h6></p>
                        </Timeline.Item>
                        <Timeline.Item color="red">
                            <p style={{ color:textColor }}><b><h4 style={{ color:textColor }}>B'day Reminder & Daily Task Manager (Solo)<u></u></h4></b></p>
                            <p style={{ color:textColor }}><h6 style={{ color:textColor }}><b>Tech Stack used/learned -</b></h6><i>Django-Rest-Framework, ReactJS, HTML, CSS, Bootstrap, Javascript, JQuery</i></p>
                            <p style={{ color:textColor }}><h6 style={{ color:textColor }}><a href="https://kedarkoshti.netlify.app/">link</a></h6></p>
                        </Timeline.Item>
                        <Timeline.Item color="green">
                            <p style={{ color:textColor }}><b><h4 style={{ color:textColor }}>PanditMitra - Pandit Booking Website (Team)<u></u></h4></b></p>
                            <p style={{ color:textColor }}><h6 style={{ color:textColor }}><b>Tech Stack used/learned -</b></h6><i>Django, Bootstrap</i></p>
                            <p style={{ color:textColor }}><h6 style={{ color:textColor }}><b>Features - Static Responsive webpages creation, Backend RESTful API, Sort, Integration</b></h6></p>
                            <p style={{ color:textColor }}><h6 style={{ color:textColor }}><a href="https://kedarkoshti.netlify.app/">To be deployed...</a></h6></p>
                        </Timeline.Item>
                        <Timeline.Item color="red">
                            <p style={{ color:textColor }}><b><h4 style={{ color:textColor }}>Ecommerce site(Solo project Backend done)<u></u></h4></b></p>
                            <p style={{ color:textColor }}><h6 style={{ color:textColor }}><b>Tech Stack used/learned -</b></h6><i>MERN(Node js, React js, MongoDB, Express), Postman, Semantic UI,</i></p>
                            <p style={{ color:textColor }}><h6 style={{ color:textColor }}><b>Dependencies used/learned -</b></h6><i>NodeMailer, react-router-dom, react-paginator,</i></p>
                            <p style={{ color:textColor }}><h6 style={{ color:textColor }}><b>Features - CRUD(Products, Orders) using RESTful API, Authentication with , Authorization, Page-Routing, Pagination, Error-handeling</b></h6></p>
                            <p style={{ color:textColor }}><h6 style={{ color:textColor }}><a href="https://kedarkoshti.netlify.app/">To be deployed...</a></h6></p>
                        </Timeline.Item>
                    </Timeline>
                </Col>
            </Row>
            {/* </Content> */}
            {/* </Layout> */}
        </div>
    )
}

export default MyProjects2;