import React, { Fragment, useEffect, useState } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";
import { Col, Row, Timeline } from 'antd';
import "./Archievements.css";

const Archievements = (props) => {
const textColor = props.textColor.myTextcolor;
const [layout3, setLayout3] = useState(window.innerWidth > 659 ? 'alternate' : 'left');

  useEffect(() => {
    // Update layout state when window is resized
    const handleResize = () => {
      setLayout3(window.innerWidth > 650 ? 'alternate' : 'left');
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



useEffect(() => {
    Aos.init({
        duration: 500,
    });

}, [])

  return (
    <div style={{ color:textColor, backgroundColor: props.color.myBackgroundColor }} data-aos="fade-up" data-aos-anchor-placement="top-center">
        <h1 style={{color: textColor, backgroundColor: props.color.myBackgroundColor, marginBottom: '0px', paddingBottom: "15px" }}><b><u>Archievements</u></b> </h1>
            <Row className="myProjectsForArchievements" style={{ paddingTop:"15px",width: '100%', justifyContent: 'center', color: textColor, backgroundColor: props.color.myBackgroundColor }}>
                <Col>
                    {/* <Timeline> */}
                    {/* <Timeline mode="alternate"> */}
                    <Timeline mode={layout3}>
                        <Timeline.Item color="green">
                            <p style={{ color:textColor }}><b><h4 style={{ color:textColor }}><u>1st Runner-Up 🏆</u></h4></b></p>
                            <p style={{ color:textColor }}><>At</> - <b><i>Webster - Ignite5.0 TechFest Hackathon</i></b></p>
                            <p style={{ color:textColor }}><>Org. by</> - <b><i>NMIMS, Navi Mumbai</i></b></p>
                            <p style={{ color:textColor }}><h6 style={{ color:textColor }}><a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1bjudMlmYM3Z5KciRKNPilyKhMpul-XDg/view?usp=sharing">Certificate link 🔗</a></h6><h6 style={{ color:textColor }}><a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1iiV_1geCyPXEO9blV_vwt4scLPNBfkGY/view">Link 🔗</a></h6></p>
                        </Timeline.Item>
                        <Timeline.Item color="red">
                            <p style={{ color:textColor }}><b><h4 style={{ color:textColor }}>Winner/1st Rank (Solo)🏅<u></u></h4></b></p>
                            <p style={{ color:textColor }}><>At</> - <b><i>Web-On-Eye Hackathon (offline)</i></b></p>
                            <p style={{ color:textColor }}><>Org. by</> - <b><i>APCOE, Pune</i></b></p>
                            <p style={{ color:textColor }}><h6 style={{ color:textColor }}><a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/11jfm4UzbZlHsg5RT5umz18bHLhSYVI33/view?usp=sharing">Certificate Link 🔗</a></h6></p>
                        </Timeline.Item>
                        <Timeline.Item color="green">
                            <p style={{ color:textColor }}><b><h4 style={{ color:textColor }}>Secured 99.21 percentile(1150 rank)🎖️ among 3,00,000 students in MHT-CET'20<u></u></h4></b></p>
                            {/* <p style={{ color:textColor }}><h6 style={{ color:textColor }}><b>Features - Static Responsive webpages creation, Backend RESTful API, Sort, Integration</b></h6></p> */}
                        </Timeline.Item>
                        <Timeline.Item color="red">
                            <p style={{ color:textColor }}><b><h4 style={{ color:textColor }}>400+ DSA questions solved at Leetcode<u></u></h4></b></p>
                            <p style={{ color:textColor }}><h6 style={{ color:textColor }}><a target="_blank" rel="noreferrer" href="https://www.leetcode.com/KedarKK1/"><img style={{ marginTop: 15}} src="https://img.shields.io/badge/LeetCode-000000?style=for-the-badge&logo=LeetCode&logoColor=#d16c06" alt="leetcode_badge" /> leetcode.com/KedarKK1/ 🔗</a></h6></p>
                        </Timeline.Item>
                        <Timeline.Item color="green">
                            <p style={{ color:textColor }}><b><h4 style={{ color:textColor }}>5 star ⭐ coder in Problem Solving at HackerRank (55+ Questions Solved)<u></u></h4></b></p>
                            <p style={{ color:textColor }}><h6 style={{ color:textColor }}><a target="_blank" rel="noreferrer" href="https://www.hackerrank.com/officialkedark1/"><img style={{ marginTop: 15}} src="https://img.shields.io/badge/-Hackerrank-2EC866?style=for-the-badge&logo=HackerRank&logoColor=white" alt="hackerrank_badge" />hackerrank.com/officialkedark1/ 🔗</a></h6></p>
                        </Timeline.Item>
                    </Timeline>
                </Col>
            </Row>
    </div>
  )
}

export default Archievements