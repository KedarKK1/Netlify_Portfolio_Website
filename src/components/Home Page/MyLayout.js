import { Col, Layout, Row,Typography } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React, { Fragment, useEffect } from 'react';
import kkImg from '../../images/kkImg.jpeg';
import './MyLayout.css';
import Aos from 'aos';
import "aos/dist/aos.css";

const { Title } = Typography;

const MyLayout = () => {

    useEffect(() => {
        Aos.init({
            duration: 6000,
        });
    
    }, [])

    return (
        <Fragment>
            <Layout >
                <Content style={{ marginTop: 30 }} >
                    <Row justify="space-around" align="middle" >
                        <Col xxl={1} xl={1} lg={1} xs={1} md={1} sm={1} />

                        <Col xxl={9} xl={9} lg={9} xs={22} md={22} sm={22} className="myCol" >
                            {/* AOS - Animate On Scroll Library data-aos="zoom-out" data-aos-delay="700" data-aos-once */}
                            <img src={kkImg} alt="img" className="myImg" data-aos="flip-left"  />
                        </Col>
                        <Col xxl={0} xl={0} lg={0} xs={1} md={1} sm={1} />
                        <Col xxl={1} xl={1} lg={1} xs={1} md={1} sm={1} />
                        <Col xxl={11} xl={11} lg={11} xs={22} md={22} sm={22} style={{ overflow: 'hidden' }}>
                            <div style={{ marginTop: '20px' }} data-aos="zoom-out">
                                <Row justify="space-around" align="middle" >
                                        <span data-aos="zoom-out-right" data-aos-delay="200"><h3>N</h3></span>
                                        <span data-aos="zoom-out-right" data-aos-delay="400"><h3>a</h3></span>
                                        <span data-aos="zoom-out-right" data-aos-delay="600"><h3>m</h3></span>
                                        <span data-aos="zoom-out-right" data-aos-delay="800"><h3>a</h3></span>
                                        <span data-aos="zoom-out-right" data-aos-delay="1000"><h3>s</h3></span>
                                        <span data-aos="zoom-out-right" data-aos-delay="1200"><h3>t</h3></span>
                                        <span data-aos="zoom-out-right" data-aos-delay="1400"><h3>e</h3></span>
                                        <span data-aos="zoom-out-right" data-aos-delay="1600"><h3>!</h3></span>
                                        <span data-aos="zoom-out-right" data-aos-delay="1800"><img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="45px" height="45px" alt="hiImg" /></span>
                                </Row>
                                <h3 >
                                    {/* Arigato! <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="45px" height="45px" alt="hiImg" />
                                    <br /> */}
                                    
                                    <Title style={{fontWeight: "100", textAlign: 'center' }} > <span style={{width: '100%', justifyContent: 'center'}}>I am&nbsp;<span style={{fontWeight: "600",textDecoration:"underline"}}> Kedar Koshti</span></span></Title>

                                    <h4 style={{fontWeight: "500"}}>Welcome to my website</h4>
                                </h3>

                                <h5 style={{fontWeight: "300"}} data-aos="zoom-out" data-aos-delay="200" data-aos-once >
                                    I'm Third year Computer Engineering student at Pune Institute of Computer Technology, Pune. I am interested in Web development and blockchain. Currently exploring AWS and cloud computing. I love watching anime and sit-coms.
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