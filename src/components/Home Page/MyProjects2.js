// import { Col, Layout, Row, Card, Timeline } from 'antd';
import { Col, Row, Tag, Timeline } from 'antd';
// import { Content } from 'antd/lib/layout/layout'
// import React, { Fragment, useEffect } from 'react';
import React, { useState, useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
// import { useSelector } from 'react-redux';
import "./MyProjects.css";

const MyProjects2 = (props) => {

    // const theme = useSelector((state) => state.themeReducer);
    const textColor = props.textColor.myTextcolor
    // const myCardColor = theme.theme !== "light" ? "#141E27" : "";

    const [mylayout2, setMyLayout2] = useState(window.innerWidth > 650 ? 'alternate' : 'left');

    useEffect(() => {
        Aos.init({
            duration: 500,
        });

      // Update layout state when window is resized
      const handleResize = () => {
        setMyLayout2(window.innerWidth > 650 ? 'alternate' : 'left');
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    let colorsArr = ["magenta", "red", "volcano", "orange", "gold", "lime", "green", "cyan", "blue", "geekblue", "purple"]
    const getIntoTags = (tags) => {
        return tags.map((tag, index) => {
            return (
                <Tag key={index} className="scaleUp" style={{ fontSize: '20px', padding: '10px', margin: "2px" }} color={colorsArr[index % colorsArr.length]}>{tag}</Tag>
            )
        })
    }

    return (
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
            {/* <Layout id="projects"> */}
            {/* <Content style={{ backgroundColor: props.color.myBackgroundColor, paddingTop: 15, paddingBottom: 15 }} data-aos="fade-up" data-aos-anchor-placement="top-center"> */}
            <h1 style={{ color: textColor, backgroundColor: props.color.myBackgroundColor, marginBottom: '0px' }}> <b><u>My Projects</u></b> </h1>
            <Row className="myProjects" style={{ paddingTop: "15px", width: '100%', justifyContent: 'center', color: textColor, backgroundColor: props.color.myBackgroundColor }}>
                <Col>
                    {/* <Timeline> */}
                    {/* <Timeline mode="alternate"> */}
                    <Timeline mode={mylayout2}>
                        <Timeline.Item color="red">
                            <p style={{ color: textColor }}><b><h4 style={{ color: textColor }}>Quiz App using Springboot (Solo)<u></u></h4></b></p>
                            <p><b><h5>{getIntoTags(["Springboot", "Angular", "Hibernate", "PostgreSQL", "JPA", "JAVA 11", "JPQL", "HQL", "Microservices"])}<u></u></h5></b></p>
                            {/* <p style={{ color:textColor }}><h6 style={{ color:textColor }}><b>Tech Stack used/learned -</b></h6><i>Django, Bootstrap</i></p> */}
                            <p style={{ color: textColor }}><h6 style={{ color: textColor }}><b>Features - • Questions CRUD operations, <br />• Quiz Generation based on Language Type (Java, Py,..), <br />• Result Calculation</b> <br />• Integrated microservices' APIs with frontend(Angular) <br /> <b>v1 - Monolithic & v2 - microservices architecture(question service, quiz service, service-registry, api-gateway).</b></h6></p>
                            <p style={{ color: textColor }}><h6 style={{ color: textColor }}><a target="_blank" rel="noreferrer" href="https://github.com/KedarKK1/SpringBoot-projects/">Link 🔗</a></h6></p>
                        </Timeline.Item>
                        <Timeline.Item color="green">
                            <p style={{ color: textColor }}><b><h4 style={{ color: textColor }}>AWS Project - Birthday Reminder App(Solo)<u></u></h4></b></p>
                            <p><b><h5>{getIntoTags(["AWS S3 Bucket", "AWS Lambda", "AWS DynamoDB", "AWS API Gateway", "AWS EventBridge Scheduler", "AWS SES", "AWS Cloudwatch",])}<u></u></h5></b></p>
                            <p style={{ color: textColor }}><>Features</> - • Static Website <b>Hosted</b> on <b><i>AWS S3, <br /> • Add new Birthdays, • view all BDs list, • view today's BDs list via API(API Gateway & Lambda fn), <br /> • Automated Email sending (AWS SES & AWS EventBridge Scheduler)</i></b> to remind today's birthday list, <br /> <b><i>• AWS Cloudwatch</i></b> to see metrics</p>
                            <p style={{ color: textColor }}><h6 style={{ color: textColor }}><a target="_blank" rel="noreferrer" href="https://github.com/KedarKK1/My-AWS-Practical-Experience-Projects-and-Screenshots">Link 🔗</a></h6> <br /> <h6 style={{ color: textColor }}><a target="_blank" rel="noreferrer" href="https://clipchamp.com/watch/Iuuqu75ZzqQ">Project Exploration Link 🔗</a></h6></p>
                        </Timeline.Item>
                        <Timeline.Item color="red">
                            <p style={{ color: textColor }}><b><h4 style={{ color: textColor }}>BiDefi:  Auction Website(Group Project)<u></u></h4></b></p>
                            <p><b><h5>{getIntoTags(["Django-Rest-Framework", "Next JS", "Django-channels", "Redis", "PostgreSQL", "JWT", "Djoser", "Razorpay"])}<u></u></h5></b></p>
                            <p style={{ color: textColor }}>• Build  <b><i>entire backend </i></b>for auction website for users to <b><i>post an item for auction.
                                <br />• User can increasingly bet on that item.
                                <br />• Used, WebSockets for real-time betting & within 2 min of previous bid.</i></b></p>
                            <p style={{ color: textColor }}><h6 style={{ color: textColor }}><a target="_blank" rel="noreferrer" href="https://github.com/KedarKK1/auction_website_WTL">Link 🔗</a></h6></p>

                        </Timeline.Item>
                        <Timeline.Item color="green">
                            <p style={{ color: textColor }}><b><h4 style={{ color: textColor }}><u>Portfolio Website (Solo)</u></h4></b></p>
                            <p><b><h5>{getIntoTags(["React JS", "Redux", "Ant Design", "Firebase", "Google Analytics",])}<u></u></h5></b></p>
                            {/* <p style={{ color:textColor }}><h6 style={{ color:textColor }}><b>Tech Stack used/learned -</b></h6><i>React JS, Redux, Ant Design, Firebase, Google Analytics</i></p> */}
                            <p style={{ color: textColor }}><>Features</> - <b><i>• Fun page-Meme sharing(CRUD using Firebase), • Redux for (dark - light mode), • total visits count(stored on firebase), • animate-on-scroll(AOS), • contact-me form validations, </i></b>• Responsive</p>
                            <p style={{ color: textColor }}><h6 style={{ color: textColor }}><a target="_blank" rel="noreferrer" href="https://github.com/KedarKK1/Netlify_Portfolio_Website/">Github link 🔗</a></h6><h6 style={{ color: textColor }}><a target="_blank" rel="noreferrer" href="https://kedarkoshti.netlify.app/">Deployed Link 🔗</a></h6></p>
                        </Timeline.Item>
                        <Timeline.Item color="red">
                            <p style={{ color: textColor }}><b><h4 style={{ color: textColor }}>PanditMitra - Pandit Booking Website (Team)<u></u></h4></b></p>
                            <p><b><h5>{getIntoTags(["Django", "Bootstrap", "PostgreSQL"])}<u></u></h5></b></p>
                            {/* <p style={{ color:textColor }}><h6 style={{ color:textColor }}><b>Tech Stack used/learned -</b></h6><i>Django, Bootstrap</i></p> */}
                            <p style={{ color: textColor }}><div style={{ color: textColor }}><b>Features - • Static Responsive webpages creation, • Backend RESTful API, • Sort, • Integration, • Slot booking(CRUD), • email-sending, • authentication, • authorization</b></div></p>
                            <p style={{ color: textColor }}><h6 style={{ color: textColor }}><a target="_blank" rel="noreferrer" href="https://github.com/KedarKK1/PBL_2_PanditMitra_22-02-2022/tree/main">Link 🔗</a></h6></p>
                        </Timeline.Item>
                        {/* <Timeline.Item color="green">
                            <p style={{ color: textColor }}><b><h4 style={{ color: textColor }}>Ecommerce site(Solo project)<u></u></h4></b></p>
                            <p><b><h5>{getIntoTags(["MERN(Node js, React js, MongoDB, Express)", "Postman", "Semantic UI",])}<u></u></h5></b></p>
                            <p style={{ color: textColor }}><h6 style={{ color: textColor }}><b>Dependencies used/learned -</b></h6><i>NodeMailer, react-router-dom, react-paginator,</i></p>
                            <p style={{ color: textColor }}><h6 style={{ color: textColor }}><b>Features - CRUD(Products, Orders) using RESTful API, Authentication with JWT, Authorization, Page-Routing, Pagination, Error-handeling</b></h6></p>
                            <p style={{ color: textColor }}><h6 style={{ color: textColor }}><a target="_blank" rel="noreferrer" href="https://github.com/KedarKK1/MERN-E-COMMERCE/tree/latestBranch/">Link 🔗</a></h6></p>
                        </Timeline.Item> */}
                        {/* <p style={{ color:textColor }}><h6 style={{ color:textColor }}><b>Tech Stack used/learned -</b></h6><i>MERN(Node js, React js, MongoDB, Express), Postman, Semantic UI,</i></p> */}
                        <Timeline.Item color="green">
                            <p style={{ color: textColor }}><b><h4 style={{ color: textColor }}>California Housing Price Prediction Model ML-WebApp (Solo)<u></u></h4></b></p>
                            <p><b><h5>{getIntoTags(["Django", "Docker", "YAML", "Linear Regression", "Scaling", "Railways App", "Gunicorn", "Jinja2 Template"])}<u></u></h5></b></p>
                            <p style={{ color: textColor }}><div style={{ color: textColor }}><b>Features</b> - • Scaling using <b>StandardScaler</b> then trained data, used <b>LinearRegression</b> from <b>sklearn</b>, • R^2 score 0.60, <b>• converted to Pickle file</b> for deployment, <b>• Deployment workflow automation using .yaml file</b>, • written Docker file </div></p>
                            <p style={{ color: textColor }}><h6 style={{ color: textColor }}><a target="_blank" rel="noreferrer" href="https://github.com/KedarKK1/California-Housing-Price-Prediction-Model-ML_WebApp">Link 🔗</a></h6></p>
                        </Timeline.Item>
                        {/* <Timeline.Item color="red">
                            <p style={{ color: textColor }}><b><h4 style={{ color: textColor }}>Amazon Web-Scrapper</h4></b></p>
                            <p><b><h5>{getIntoTags(["BeautifulSoup", "Selenium", "CSV Writer",])}<u></u></h5></b></p>
                            <p style={{ color: textColor }}><div style={{ color: textColor }}><b>Features</b> - • Scraping top 20 products from amazon, then <b>converting</b> it to <b>CSV File</b>, • learned about XPath for web-scraping and automation </div></p>
                            <p style={{ color: textColor }}><h6 style={{ color: textColor }}><a target="_blank" rel="noreferrer" href="https://github.com/KedarKK1/Web-Scrapper-for-amazon">Link 🔗</a></h6></p>
                        </Timeline.Item> */}

                    </Timeline>
                </Col>
            </Row>
            {/* </Content> */}
            {/* </Layout> */}
        </div>
    )
}

export default MyProjects2;