import { Col, Layout, Row, Card } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import React from 'react'

const MyProjects = () => {
  return (
    <>
    <Layout id="projects">
        <Content style={{ marginTop: 15}}>
            <h1> <b><u>My Projects</u></b> </h1>
            <Row>
                <Col xxl={2} xl={2} lg={2} xs={2} md={2} sm={2} />
                <Col xxl={6} xl={6} lg={6} xs={18} md={18} sm={18} >
                    <Card
                        title="College Fest-Frontend+Integration"
                        // extra={<a href="#">More</a>}
                        style={{
                            width: '100%',
                        }}
                        >
                        <p><b>Events - </b>PISB(IEEE) - Credenz & RC(Reverse Coding)</p>
                        <p><b>Task - </b>Static Responsive webpages creation, Integration tasks(Pagination, Timer, Logout functionality with Django)</p>
                        <p><b>Tech Stack used/learned - </b> HTML, CSS, Bootstrap, Javascript, Django, JQuery </p>
                        <p><b>Used By - </b> Hundreds of students (intercollge and intracollege)</p>
                    </Card>
                </Col>
                <Col xxl={1} xl={1} lg={1} xs={2} md={2} sm={2} />
                <Col xxl={6} xl={6} lg={6} xs={18} md={18} sm={18} >
                    <Card
                        title="Ecommerce site(Frontend+Backend)"
                        // extra={<a href="#">More</a>}
                        style={{
                            width: '100%',
                        }}
                        >
                        <p><b>Features - </b>CRUD(Products, Orders) using RESTful API, Authentication with , Authorization, Page-Routing, Pagination, Error-handeling </p>
                        <p><b>Tech Stack used/learned - </b> MERN(Node js, React js, MongoDB, Express), Postman, Semantic UI, </p>
                        <p><b>Dependencies used/learned - </b> NodeMailer, react-router-dom, react-paginator, </p>
                        <p><b>Used By - </b> Deploying in process </p>
                    </Card>
                </Col>
                <Col xxl={1} xl={1} lg={1} xs={2} md={2} sm={2} />
                <Col xxl={6} xl={6} lg={6} xs={18} md={18} sm={18} >
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