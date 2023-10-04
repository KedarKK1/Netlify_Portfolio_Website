import { Card, Col, Layout, Row } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import React from 'react'
import { useSelector } from 'react-redux';
// const { Meta } = Card;
import "./MyExperience.css"

const MyExperience = (props) => {
    const theme = useSelector((state) => state.themeReducer);
    const textColor = props.textColor.myTextcolor
    // const myCardColor = theme.theme != "light" ? "#222222" : "";
    const myCardColor = theme.theme !== "light" ? "#141E27" : "";

    return (
        <>
            <Layout>
                <Content style={{ paddingTop: 15, paddingBottom: 15, backgroundColor: props.color.myBackgroundColor }} >
                    <h1 style={{ color: textColor }}> <b><u>My Experience</u></b> </h1>
                    <Row >
                        <Col xxl={2} xl={2} lg={2} xs={2} md={2} sm={2} />

                        <Col xxl={6} xl={6} lg={6} xs={20} md={20} sm={20} >
                            <Card bodyStyle={{ backgroundColor: myCardColor, color: textColor }}
                                // headStyle={{ backgroundColor: myCardColor, color: textColor }}
                                title="PICT Training & Placement Portal Backend MERN"
                                
                                // actions={["July-August 2022"]}
                                // extra={["Jul-Aug 22"]}
                                >
                                Website for students to apply for companies coming on campus, reducing human errors & quick placement report generation for authority by <b>FOSS Club, PICT</b>
                                <br />
                                <b>My contribution - </b>
                                <ul>
                                    <li><b>Report Generation</b></li>
                                    <li><b>Eligibility criteria checking</b></li>
                                    <li>Used pre, save & remove concepts in mongodb for<b> deletion of company, job, application & saved large no. of lines of code</b></li>
                                    <li>Email sending using <b>nodeMailer</b> to qualified students</li>
                                    <li>etc</li>
                                </ul>
                                {/* <br /> */}
                                <Row justify="space-around" align="middle" >
                                    {/* <a href="http://www.pictTnp.com">Link to Portal</a> */}
                                    <a href="https://www.pict-foss-club.github.io">Link to Portal</a>
                                    <a href="https://www.pict-foss-club.github.io/#team">Team FOSS club Link</a>
                                </Row>
                            </Card>
                        </Col>

                        <Col xxl={1} xl={1} lg={1} xs={2} md={2} sm={2} />

                        <Col xxl={6} xl={6} lg={6} xs={20} md={20} sm={20} >
                            <Card bodyStyle={{ backgroundColor: myCardColor, color: textColor }}
                                // headStyle={{ backgroundColor: myCardColor, color: textColor }}
                                title="Freelancing - React-Native" >
                                Created an Prototype of an App for a client who had an idea to implement E-commerce website with AI based Search/Sort products 
                                <br />
                                <b>My contribution - </b>
                                <ul>
                                    <li><b>Google Map integration + Marker-related settings</b></li>
                                    <li>Shop-owner & Product Registration Forms</li>
                                    <li>Used <b> React-navigation</b> for linking between pages</li>
                                    <li>Used <b> Formik</b> for form handeling</li>
                                </ul>
                                {/* <br /> */}
                                <Row justify="space-around" align="middle" >
                                    <a href="http://www.pictTnp.com">Link </a>
                                    {/* <a href="http://www.pictTnp.com/about-us">Team FOSS club Link</a> */}
                                </Row>
                            </Card>
                        </Col>

                        <Col xxl={1} xl={1} lg={1} xs={2} md={2} sm={2} />

                        <Col xxl={6} xl={6} lg={6} xs={20} md={20} sm={20} >
                            <Card bodyStyle={{ backgroundColor: myCardColor, color: textColor}}
                                title="IEEE Fest-Frontend+Integration"
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
                                {/* <br /> */}
                                <Row justify="space-around" align="middle" >
                                    <a href="http://www.pictTnp.com">Link </a>
                                    {/* <a href="http://www.pictTnp.com/about-us">Team FOSS club Link</a> */}
                                </Row>
                            </Card>
                             
                        </Col>
                        <Col xxl={2} xl={2} lg={2} xs={2} md={2} sm={2} />
                    </Row>
                </Content>
            </Layout>
        </>
    )
}

export default MyExperience