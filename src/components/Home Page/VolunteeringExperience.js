import React, { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";
import { Col, Row, Card, Carousel } from 'antd';
// import { EditOutlined, EllipsisOutlined, SettingOutlined, PaperClipOutlined } from '@ant-design/icons';
import django_sessoion from "./../../images/django_contribution_certificate.PNG";
import pictIeeeImage from "./../../images/pictieee_instagram _post_on_sessions_conducted.jpeg";
import pictIeeeImage2 from '../../images/session conducted on frontend, html, css, js, bootstrap & intro-to-reactjs4.jpeg';
import pictIeeeImage3 from '../../images/session conducted on frontend, html, css, js, bootstrap & intro-to-reactjs5.jpeg';
import pictIeeeImage4 from '../../images/session conducted on frontend, html, css, js, bootstrap & intro-to-reactjs2.jpeg';
import ethereumBankAccount from '../../images/blockchain bank acc.PNG';
import hacktoberfestImage1 from '../../images/hacktoberfest_image1.PNG';
import hacktoberfestImage2 from '../../images/hacktoberfest_image2.PNG';
import hacktoberfestImage3 from '../../images/hacktoberfest_image3.PNG';
import hacktoberfestImage4 from '../../images/hacktoberfest_image4.PNG';
import "./VolunteeringExperience.css"

const { Meta } = Card;

const contentStyle = {
    // height: '100%',
    // width: '100%',
    height: 225,
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    maxHeight: '300px',
};


const VolunteeringExperience = (props) => {

    let textColor = props.textColor.myTextcolor;

    useEffect(() => {
        Aos.init({
            duration: 500,
        });

    }, [])

    return (
        <div style={{ color: textColor, backgroundColor: props.color.myBackgroundColor }} data-aos="fade-up" data-aos-anchor-placement="top-center">
            <h1 style={{ color: textColor, backgroundColor: props.color.myBackgroundColor, marginBottom: '0px', paddingBottom: "15px" }}><b><u>Volunteering Experience</u></b> </h1>
            <Row className="myProjects" style={{ paddingTop: "15px", width: '100%', color: textColor, backgroundColor: props.color.myBackgroundColor }} justify="space-evenly">
                <Col >
                    <Card
                        style={{
                            width: 300,
                            color: textColor, backgroundColor: props.color.myBackgroundColor
                        }}
                        className="giveHoverToCard"
                        cover={
                            <img
                                style={contentStyle}
                                src={django_sessoion}
                                alt="django session"
                            />
                        }
                        // cover={
                        //     <iframe title="certificate" src="https://drive.google.com/file/d/1-oUDQpyhCMScrSEwQsQHrq2rZZtrrVFO/preview" width="500" height="480" allow="autoplay"></iframe>
                        // }
                        actions={[
                            // <SettingOutlined key="setting" />,
                            // <EditOutlined key="edit" />,
                            // <EllipsisOutlined key="ellipsis" />,
                            <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1-oUDQpyhCMScrSEwQsQHrq2rZZtrrVFO/view?usp=sharing">See Certificate of Contribution - link 🔗</a>
                        ]}
                    >
                        <Meta
                            style={{
                                color: textColor,
                                backgroundColor: props.color.myBackgroundColor
                            }}
                            className={
                                textColor === "black" ? "giveStyleBlackColor" : "giveStyleWhiteColor"
                            }
                            // avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                            title="SIG Django course Sessions"
                            description="3 sessions for PICT college's official Django Certification Programme(in an team of 3)"
                        />
                    </Card>

                </Col>
                <Col >
                    <Card
                        style={{
                            width: 300,
                            color: textColor, backgroundColor: props.color.myBackgroundColor
                        }}
                        className="giveHoverToCard"
                        cover={
                            <Carousel autoplay>
                                <div>
                                    <img
                                        style={contentStyle}
                                        src={pictIeeeImage}
                                        // width="500" height="480" allow="autoplay"
                                        alt="PICT IEEE official Post"
                                    />
                                </div>
                                <div>
                                    <img
                                        style={contentStyle}
                                        src={pictIeeeImage2}
                                        alt="PICT IEEE official Post"
                                    />
                                </div>
                                <div>
                                    <img
                                        style={contentStyle}
                                        src={pictIeeeImage3}
                                        alt="PICT IEEE official Post"
                                    />
                                </div>
                                <div>
                                    <img
                                        style={contentStyle}
                                        src={pictIeeeImage4}
                                        alt="PICT IEEE official Post"
                                    />
                                </div>
                            </Carousel>

                        }
                        actions={[
                            <a target="_blank" rel="noreferrer" href="https://drive.google.com/drive/folders/1fcSIBvKQVCDkh8zUL9C-A7EfvazEECgY?usp=sharing/">See Resources - link 🔗</a>

                        ]}
                    >
                        <Meta
                            style={{
                                color: textColor,
                                backgroundColor: props.color.myBackgroundColor
                            }}
                            className={
                                textColor === "black" ? "giveStyleBlackColor" : "giveStyleWhiteColor"
                            }
                            title="SIG sessions at PICT IEEE for juniors"
                            description="Conducted 3 offline sessions on Front-end development(HTML, CSS, JS, Bootstrap & intro-to-ReactJS). Impacted 30+ juniors(in an team of 2)"
                        />
                    </Card>
                </Col>
                <Col>
                    <Card
                        style={{
                            width: 300,
                            color: textColor, backgroundColor: props.color.myBackgroundColor
                        }}
                        className="giveHoverToCard"
                        cover={
                            <img
                                style={contentStyle}
                                src={ethereumBankAccount}
                                alt="Blockchain Session ss"
                            />
                        }
                        actions={[
                            <a target="_blank" rel="noreferrer" href="https://drive.google.com/drive/folders/1kR9RT4u7lxr32pb_kZ7ZGkYTlwyUmrAI/">See Resources - link 🔗</a>
                        ]}
                    >
                        <Meta
                            style={{
                                color: textColor,
                                backgroundColor: props.color.myBackgroundColor
                            }}
                            className={
                                textColor === "black" ? "giveStyleBlackColor" : "giveStyleWhiteColor"
                            }
                            title="Conducted Blockchain Sessions"
                            description="Conducted majority of 3 sessions on blockchain along with 1 capstone project (Decentralized Bank Account) as GDSC Blockchain core member"
                        />
                    </Card>

                </Col>
                <Col>
                    <Card
                        style={{
                            width: 300,
                            backgroundColor: props.color.myBackgroundColor
                        }}
                        className="giveHoverToCard"
                        cover={
                            // <img
                            //     style={contentStyle}
                            //     src={hacktoberfestImage1}
                            //     alt="Hacktoberfest'22 ss"
                            // />
                            <Carousel autoplay>
                                <div>
                                    <img
                                        style={contentStyle}
                                        src={hacktoberfestImage1}
                                        alt="Hacktoberfest'22 ss"
                                    />
                                </div>
                                <div>
                                    <img
                                        style={contentStyle}
                                        src={hacktoberfestImage2}
                                        alt="Hacktoberfest'22 ss2"
                                    />
                                </div>
                                <div>
                                    <img
                                        style={contentStyle}
                                        src={hacktoberfestImage3}
                                        alt="Hacktoberfest'22 ss3"
                                    />
                                </div>
                                <div>
                                    <img
                                        style={contentStyle}
                                        src={hacktoberfestImage4}
                                        alt="Hacktoberfest'22 ss4"
                                    />
                                </div>
                            </Carousel>
                        }
                        actions={[
                            <>
                                <a target="_blank" rel="noreferrer" href="https://github.com/KedarKK1?tab=repositories">Repositories - link 🔗 </a>
                                <a target="_blank" rel="noreferrer" href="https://www.holopin.io/@kedarkk1##">See Resources - link 🔗</a>
                            </>
                        ]}
                    >
                        <Meta
                            className={
                                textColor === "black" ? "giveStyleBlackColor" : "giveStyleWhiteColor"
                            }
                            style={{ backgroundColor: props.color.myBackgroundColor }}
                            title="Hackoberfest'22 Open Source Contributions"
                            description='
                            Open Source Contributions - 
                            1. added Dark-Light functionality using js for online notepad,
                            2. Live-reloading to a quote generator & reload again button for "Guess the Number" game using JQuery, 
                            3. AJAX for calculator app, 
                            4. enhanced webpage-designs & fixed responsiveness of sites, 
                            '
                        // 5.added documentation to projects, 
                        />
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default VolunteeringExperience