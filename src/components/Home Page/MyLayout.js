import { Col, Layout, Row,  } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React from 'react';
import kkImg from '../../images/kkImg.jpeg';
import './MyLayout.css';

const MyLayout = () => {
  return (
    <>
        <Layout >
            <Content style={{ marginTop: 30 }}>
                <Row>
                    <Col  xxl={1} xl={1} lg={1} xs={1} md={1} sm={1} />

                    <Col xxl={10} xl={10} lg={10} xs={22} md={22} sm={22} className="myCol" >
                        {/* AOS - Animate On Scroll Library data-aos="zoom-out" data-aos-delay="700" data-aos-once */}
                        <img src={kkImg} alt="img" className="myImg"  />
                    </Col>
                    <Col  xxl={1} xl={1} lg={1} xs={0} md={0} sm={0} />
                    <Col  xxl={10} xl={10} lg={10} xs={22} md={22} sm={22} style={{ overflow: 'hidden' }}>
                        <h2 className="my-3" >
                            Arigato! <span><img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="45px" height="45px" /></span>
                        </h2>  
                        <h2>
                            I am <span><b><u>Kedar Koshti</u></b></span>
                            <br />
                            Welcome to my website
                        </h2>
                        <h5>
                           I'm second year Computer Engineering student at Pune Institute of Computer Technology, Pune. I am interested in Web development and blockchain. Currently exploring Full Stack Web Development and Cloud Applications. I love watching anime and sit-coms.   
                        </h5>
                    </Col>

                    <Col  xxl={1} xl={1} lg={1} xs={1} md={1} sm={1} />
                </Row>
            </Content>
        </Layout>
    </>
  )
}

export default MyLayout;