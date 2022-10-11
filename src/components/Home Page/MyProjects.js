import { Col, Layout, Row, Card } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import React, { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";
import { useSelector } from 'react-redux';

const MyProjects = (props) => {

    const theme = useSelector((state) => state.themeReducer);
    const textColor = props.textColor.myTextcolor
    const myCardColor = theme.theme !== "light" ? "#141E27" : "";

    useEffect(() => {
        Aos.init({
            duration: 500,
        });

    }, [])

    return (
        <>
            <Layout id="projects">
                <Content style={{ backgroundColor: props.color.myBackgroundColor, paddingTop: 15, paddingBottom: 15 }} data-aos="fade-up" data-aos-anchor-placement="top-center">
                    <h1 style={{ color: textColor }}> <b><u>My Projects</u></b> </h1>
                    <Row>
                        <Col xxl={2} xl={2} lg={2} xs={2} md={2} sm={2} />
                        <Col xxl={6} xl={6} lg={6} xs={20} md={20} sm={20} >
                            <Card bodyStyle={{ backgroundColor: myCardColor, color: textColor }}
                                title="PanditMitra - Pandit Booking Website (Frontend + Backend)"
                                // extra={<a href="#">More</a>}
                                style={{
                                    width: '100%',
                                    marginTop: 15,
                                }}
                            >
                                <p><b>Features - </b>Static Responsive webpages creation, Backend RESTful API, Sort, Integration </p>
                                <p><b>Tech Stack used/learned - </b> Django, Bootstrap </p>
                                <p><b>Used By - </b> To be deployed...</p>
                                {/* <br /> */}
                                <Row justify="space-around" align="middle" >
                                    <a href="http://www.pictTnp.com">Link </a>
                                    {/* <a href="http://www.pictTnp.com/about-us">Team FOSS club Link</a> */}
                                </Row>
                            </Card>
                        </Col>
                        <Col xxl={1} xl={1} lg={1} xs={2} md={2} sm={2} />
                        <Col xxl={0} xl={0} lg={0} xs={2} md={2} sm={2} />
                        <Col xxl={6} xl={6} lg={6} xs={20} md={20} sm={20} >
                            <Card bodyStyle={{ backgroundColor: myCardColor, color: textColor }}
                                title="Ecommerce site(Solo project Backend+Frontend)"
                                // extra={<a href="#">More</a>}
                                style={{
                                    width: '100%',
                                    marginTop: 15,
                                }}
                            >
                                <p><b>Features - </b>CRUD(Products, Orders) using RESTful API, Authentication with JWT, Authorization, Page-Routing, Pagination, Error-handeling </p>
                                <p><b>Tech Stack used/learned - </b> MERN(Node js, React js, MongoDB, Express), Postman, Semantic UI, </p>
                                <p><b>Dependencies used/learned - </b> NodeMailer, react-router-dom, react-paginator, </p>
                                <p><b>Used By - </b> Deploying in process </p>
                                {/* <br /> */}
                                <Row justify="space-around" align="middle" >
                                    <a href="http://www.pictTnp.com">Link </a>
                                    {/* <a href="http://www.pictTnp.com/about-us">Team FOSS club Link</a> */}
                                </Row>
                            </Card>
                        </Col>
                        <Col xxl={1} xl={1} lg={1} xs={2} md={2} sm={2} />
                        <Col xxl={0} xl={0} lg={0} xs={2} md={2} sm={2} />
                        <Col xxl={6} xl={6} lg={6} xs={20} md={20} sm={20} >
                            {/* <Card bodyStyle={{ backgroundColor: myCardColor, color: textColor}}
                                title="College Fest-Frontend+Integration"
                                // extra={<a href="#">More</a>}
                                subTitle="This is a subtitle"
                                style={{
                                    width: '100%',
                                    marginTop: 15,
                                }}
                            >
                                <p><b>Events - </b>PISB(IEEE) - Credenz & RC(Reverse Coding)</p>
                                <p><b>Task - </b>Static Responsive webpages creation, Integration tasks(Pagination, Timer, Logout functionality with Django)</p>
                                <p><b>Tech Stack used/learned - </b> HTML, CSS, Bootstrap, Javascript, Django, JQuery </p>
                                <p><b>Used By - </b> Hundreds of students (intercollge and intracollege)</p>
                            </Card> */}
                            <Card bodyStyle={{ backgroundColor: myCardColor, color: textColor }}
                                title="B'day Reminder & Daily Task Manager"
                                // extra={<h6>More</h6>}
                                // subTitle="This is a subtitle"
                                style={{
                                    width: '100%',
                                    marginTop: 15,
                                }}
                            >
                                {/* <p><b>Events - </b>PISB(IEEE) - Credenz & RC(Reverse Coding)</p> */}
                                {/* <p><b>Task - </b>Static Responsive webpages creation, Integration tasks(Pagination, Timer, Logout functionality with Django)</p> */}
                                <p><b>Tech Stack used/learned - </b> Django-Rest-Framework, ReactJS, HTML, CSS, Bootstrap, Javascript, JQuery </p>
                                {/* <p><b>Used By - </b> Hundreds of students (intercollge and intracollege)</p> */}
                                {/* <br /> */}
                                <Row justify="space-around" align="middle" >
                                    <a href="http://www.pictTnp.com">Link </a>
                                    {/* <a href="http://www.pictTnp.com/about-us">Team FOSS club Link</a> */}
                                </Row>
                            </Card>
                        </Col>
                        <Col xxl={1} xl={1} lg={1} xs={2} md={2} sm={2} />
                        {/* <Col span={1} />
                <Col span={7}>
                    <Card
                        title="PISB(IEEE) Credenz - Frontend, Integration"
                        // extra={<a href="#">More</a>}
                        style={{
                            width: '100%',
                        }}
                        >
                        <p><b>Events - </b>Credenz, RC(Reverse Coding)</p>
                        <p><b>Task - </b>Static Responsive webpages creation, Integration tasks(Pagination, Timer, Logout functionality with Django)</p>
                        <p><b>Tech Stack used/learned - </b> HTML, CSS, Bootstrap, Javascript, Django, JQuery </p>
                        <p><b>Used By - </b> Hundreds of students (intercollge and intracollege)</p>
                    </Card>
                </Col>
                <Col span={7}>
                    <Card
                        title="Ecommerce Website (Frontend + Backend)"
                        // extra={<a href="#">More</a>}
                        style={{
                            width: '100%',
                        }}
                        >
                        <p><b>Features - </b>CRUD(Products, Orders), Authentication with , Authorization, Page-Routing, Pagination, Error-handeling </p>
                        <p><b>Tech Stack used/learned - </b> MERN(Node js, React js, MongoDB, Express), Postman, Semantic UI, </p>
                        <p><b>Dependencies used/learned - </b> NodeMailer, react-router-dom, react-paginator, </p>
                        <p><b>Used By - </b> Deploying in process </p>
                    </Card>
                </Col>
                <Col span={7}>
                    <Card
                        title="PanditMitra - Pandit Booking Website (Frontend + Backend)"
                        // extra={<a href="#">More</a>}
                        style={{
                            width: '100%',
                        }}
                        >
                        <p><b>Features - </b>Static Responsive webpages creation, Backend RESTful API, Sort, Integration </p>
                        <p><b>Tech Stack used/learned - </b> Django, Bootstrap </p>
                        <p><b>Used By - </b> To be deployed...</p>
                    </Card>
                </Col>
                <Col span={1} /> */}
                    </Row>
                </Content>
            </Layout>
        </>
    )
}

export default MyProjects;