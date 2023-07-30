// import { Layout, Row, Col, Button, Form, Input, InputNumber } from 'antd';
import { Row, Col, Button, Form, Input } from 'antd';
// import { Content } from 'antd/lib/layout/layout'
import React, { useEffect, useState } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";
import './MyContact.css';
import { Fragment } from 'react';
// import { useSelector } from 'react-redux';

const ContactMe = (props) => {
    const [nameVal, setNameVal] = useState("")
    const [emailVal, setEmailVal] = useState("")
    const [descVal, setDescVal] = useState("")
    const textColor = props.textColor.myTextcolor
    // const theme = useSelector((state) => state.themeReducer);
    // const myCardColor = theme.theme !== "light" ? "#141E27" : "";

    const handleSubmit = () => {
        try {
            
            // to trim spaces between and place %20 in them
            let descVal2 = encodeURIComponent(descVal.trim())
            let nameVal2 = encodeURIComponent(nameVal.trim())
            let emailVal2 = encodeURIComponent(emailVal.trim())
            console.log(descVal2)
            const message = `mailto: officialkedark1@gmail.com?Subject=Kedar%20You've%20got%20message%20from-%20${nameVal2}%20&Email=${emailVal2}%20&Body=${descVal2}`
            // console.log(message);
            window.location.assign(message)
            // alert("Submting 'Contact Me' is not done yet. Please try Gmail link or LinkedIn link on left/up.")
        } catch (err) {
            alert('Some error occured: ',err)
        }
    }

    useEffect(() => {
        Aos.init({
            duration: 500,
        });
    
    }, [])

  return (
    <Fragment style={{ color:textColor, backgroundColor: props.color.myBackgroundColor }}>
    {/* <Layout id="contact"> */}
        {/* <Content style={{ backgroundColor: props.color.myBackgroundColor, paddingTop: 15}} data-aos="fade-up" data-aos-anchor-placement="top-bottom"> */}
            <h1 style={{color: textColor, backgroundColor: props.color.myBackgroundColor, marginBottom: '0px', paddingBottom: "15px" }}><b><u>Contact Me</u></b> </h1>
            <Row className="myContact" style={{ color: textColor, backgroundColor: props.color.myBackgroundColor }}>
                <Col xxl={2} xl={2} lg={2} xs={2} md={2} sm={2} style={{backgroundColor: props.color.myBackgroundColor  }} />

                <Col xxl={9} xl={9} lg={9} xs={9} md={9} sm={9} style={{backgroundColor: props.color.myBackgroundColor  }} >
                    <a href="mailto:officialkedark1@gmail.com" className="px-3"><img style={{ marginTop: "15px"}} src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="gmail_badge" /></a>
                    <a target="_href" href="https://www.linkedin.com/in/kedar-koshti-700804218/"><img style={{ marginTop: 15}} src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="linkedin_badge" /></a>
                </Col>

                <Col xxl={2} xl={2} lg={2} xs={2} md={2} sm={2} style={{backgroundColor: props.color.myBackgroundColor  }} />

                <Col xxl={9} xl={9} lg={9} xs={9} md={9} sm={9} style={{backgroundColor: props.color.myBackgroundColor  }} >
                    <Form style={{ paddingTop: "15px"}}>
                        <Form.Item
                            name={['user', 'name']}
                            // label="Name"
                            label={
                                <div style={{color: textColor}}>Name</div>
                            }
                            rules={[
                            {
                                required: true,
                            },
                            ]}
                            value={nameVal}
                            onChange={(e)=>{setNameVal(e.target.value)}}
                        >
                            <Input />
                        </Form.Item>   
                        <Form.Item
                            name={['email']}
                            label={
                                <div style={{color: textColor}}>Email</div>
                            }
                            rules={[
                            {
                                type: 'email',
                                error: 'Please enter valid email address'
                            },
                            {
                                required: true,
                                error: 'Please enter email'
                            },
                            ]}
                            value={emailVal}
                            onChange={(e)=>{setEmailVal(e.target.value)}}
                        >
                            <Input />
                        </Form.Item>      
                        <Form.Item 
                            name={['user', 'description']} 
                            // label="Description"
                            label={
                                <div style={{color: textColor}}>Description</div>
                            }
                            rules={[
                                {
                                    required: true,
                                },
                                ]}
                            value={descVal}
                            onChange={(e)=>{setDescVal(e.target.value)}}
                        >
                            <Input.TextArea />
                        </Form.Item>    
                        <Form.Item >
                            <Button type="primary" htmlType="submit" onClick={handleSubmit} >
                                Submit
                            </Button>
                        </Form.Item>   
                    </Form>
                </Col>

                <Col xxl={2} xl={2} lg={2} xs={2} md={2} sm={2} style={{backgroundColor: props.color.myBackgroundColor  }}/>
            </Row>
        {/* </Content> */}
    {/* </Layout> */}
    </Fragment>
  )
}

export default ContactMe