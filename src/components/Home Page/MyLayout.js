import { Col, Layout, Row,Typography } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React, { Fragment } from 'react';
import kkImg from '../../images/kkImg.jpeg';
import './MyLayout.css';

const { Title } = Typography;

const MyLayout = () => {
    return (
        <Fragment>
            <Layout >
                <Content style={{ marginTop: 30 }} >
                    <Row justify="space-around" align="middle" >
                        <Col xxl={1} xl={1} lg={1} xs={1} md={1} sm={1} />

                        <Col xxl={9} xl={9} lg={9} xs={22} md={22} sm={22} className="myCol" >
                            {/* AOS - Animate On Scroll Library data-aos="zoom-out" data-aos-delay="700" data-aos-once */}
                            <img src={kkImg} alt="img" className="myImg" />
                        </Col>
                        <Col xxl={1} xl={1} lg={1} xs={0} md={0} sm={0} />
                        <Col xxl={11} xl={11} lg={11} xs={22} md={22} sm={22} style={{ overflow: 'hidden' }}>
                            <div style={{ marginTop: '20px' }}>
                                <h3 >
                                    Arigato! <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="45px" height="45px" alt="hiImg" />
                                    <br />
                                    
                                    <Title style={{fontWeight: "100", textAlign: 'center' }} > <span style={{width: '100%', justifyContent: 'center'}}>I am&nbsp;<span style={{fontWeight: "600"}}> Kedar Koshti</span></span></Title>

                                    <h4 style={{fontWeight: "500"}}>Welcome to my website</h4>
                                </h3>

                                <h5 style={{fontWeight: "300"}}>
                                    I'm second year Computer Engineering student at Pune Institute of Computer Technology, Pune. I am interested in Web development and blockchain. Currently exploring Full Stack Web Development and AWS. I love watching anime and sit-coms.
                                </h5>
                            </div>
                        </Col>

                        <Col xxl={1} xl={1} lg={1} xs={1} md={1} sm={1} />
                    </Row>
                </Content>
            </Layout>
        </Fragment>
    )
}

export default MyLayout;