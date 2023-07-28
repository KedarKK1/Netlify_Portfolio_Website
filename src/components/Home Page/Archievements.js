import React, { Fragment, useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";
import { Col, Row, Timeline } from 'antd';

const Archievements = (props) => {
const textColor = props.textColor.myTextcolor;

useEffect(() => {
    Aos.init({
        duration: 500,
    });

}, [])

  return (
    <div style={{ color:textColor, backgroundColor: props.color.myBackgroundColor }} data-aos="fade-up" data-aos-anchor-placement="top-center">
        <h1 style={{color: textColor, backgroundColor: props.color.myBackgroundColor, marginBottom: '0px', paddingBottom: "15px" }}><b><u>Archievements</u></b> </h1>
            <Row className="myProjects" style={{ paddingTop:"15px",width: '100%', justifyContent: 'center', color: textColor, backgroundColor: props.color.myBackgroundColor }}>
                <Col>
                    {/* <Timeline> */}
                    <Timeline mode="alternate">
                        <Timeline.Item color="green">
                            <p style={{ color:textColor }}><b><h4 style={{ color:textColor }}><u>1st Runner-Up 🏆</u></h4></b></p>
                            <p style={{ color:textColor }}><>At</> - <b><i>Webster - Ignite5.0 TechFest Hackathon</i></b></p>
                            <p style={{ color:textColor }}><>Org. by</> - <b><i>NMIMS, Navi Mumbai</i></b></p>
                            <p style={{ color:textColor }}><h6 style={{ color:textColor }}><a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1bjudMlmYM3Z5KciRKNPilyKhMpul-XDg/view?usp=sharing">Certificate link</a></h6><h6 style={{ color:textColor }}><a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1iiV_1geCyPXEO9blV_vwt4scLPNBfkGY/view">Link</a></h6></p>
                        </Timeline.Item>
                        <Timeline.Item color="red">
                            <p style={{ color:textColor }}><b><h4 style={{ color:textColor }}>Winner/1st Rank (Solo)🏅<u></u></h4></b></p>
                            <p style={{ color:textColor }}><>At</> - <b><i>Web-On-Eye Hackathon (offline)</i></b></p>
                            <p style={{ color:textColor }}><>Org. by</> - <b><i>APCOE, Pune</i></b></p>
                            <p style={{ color:textColor }}><h6 style={{ color:textColor }}><a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/11jfm4UzbZlHsg5RT5umz18bHLhSYVI33/view?usp=sharing">Certificate Link</a></h6></p>
                        </Timeline.Item>
                        <Timeline.Item color="green">
                            <p style={{ color:textColor }}><b><h4 style={{ color:textColor }}>Secured 99.21 percentile(1150 rank)🎖️ among 3,00,000 students in MHT-CET'20<u></u></h4></b></p>
                            {/* <p style={{ color:textColor }}><h6 style={{ color:textColor }}><b>Features - Static Responsive webpages creation, Backend RESTful API, Sort, Integration</b></h6></p> */}
                        </Timeline.Item>
                        <Timeline.Item color="red">
                            <p style={{ color:textColor }}><b><h4 style={{ color:textColor }}>300+ DSA questions solved at HackerRank<u></u></h4></b></p>
                            <p style={{ color:textColor }}><h6 style={{ color:textColor }}><a target="_blank" rel="noreferrer" href="https://www.leetcode.com/KedarKK1/">leetcode.com/KedarKK1/</a></h6></p>
                        </Timeline.Item>
                        <Timeline.Item color="green">
                            <p style={{ color:textColor }}><b><h4 style={{ color:textColor }}>5 star ⭐ coder in Problem Solving at HackerRank (55+ Questions Solved)<u></u></h4></b></p>
                            <p style={{ color:textColor }}><h6 style={{ color:textColor }}><a target="_blank" rel="noreferrer" href="https://www.hackerrank.com/officialkedark1/">hackerrank.com/officialkedark1/</a></h6></p>
                        </Timeline.Item>
                    </Timeline>
                </Col>
            </Row>
    </div>
  )
}

export default Archievements