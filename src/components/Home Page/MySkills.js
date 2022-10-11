// import { Layout } from 'antd';
// import { Content } from 'antd/lib/layout/layout';
import React, { Fragment, useEffect } from 'react';
/*this is for importing dark theme of antd  */
// import 'antd/dist/antd.dark.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import "./mySkills.css";

const MySkills = (props) => {

    useEffect(() => {
        Aos.init({
            duration: 500,
        });

    }, [])

    const textColor = props.textColor.myTextcolor

    return (
        <Fragment style={{ backgroundColor: props.color.myBackgroundColor, }}>
            {/* <Layout id="skills" style={{color: textColor, backgroundColor: props.color.myBackgroundColor}}> */}
            {/* <Content style={{ marginTop: 15, paddingBottom: 15 }} data-aos="zoom-in-down"> */}
            <h1 style={{ color: textColor, backgroundColor: props.color.myBackgroundColor, marginBottom: '0px' }}> <b><u>My Skills</u></b> </h1>
            <ul className="mySkills" style={{ paddingRight: 30, paddingLeft: 30, backgroundColor: props.color.myBackgroundColor, marginBottom: '0px' }} align={'start'} >
                <li>
                    {/* below align start is from antD, if not aligned right, then all text and badges will be at center */}
                    <h4 style={{ color: textColor }}>Languages - </h4>
                    <img src="https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue" alt="badge" />
                    <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="badge" />
                    <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white" alt="badge" />
                    <img src="https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white" alt="badge" />
                </li>
                <li style={{ marginTop: 15 }} align={'start'}>
                    <h4 style={{ color: textColor }}>Web Development Tech Stack - </h4>
                    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML_badge" />
                    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS_badge" />
                    <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap_badge" />
                    <img src="https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white" alt="Font_Awesome_badge" />
                    <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JavaScript_badge" />
                    <img src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white" alt="jQuery_badge" />
                    <img src="https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white" alt="Chart.js_badge" />
                    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React_badge" />
                    <img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" alt="Redux_badge" />
                    <img src="https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white" alt="Material_badge" />
                    <img src="https://img.shields.io/badge/Ant%20Design-1890FF?style=for-the-badge&logo=antdesign&logoColor=white" alt="Ant Design_badge" />
                </li>
                <li style={{ marginTop: 15 }}>
                    <h4 align={'start'} style={{ color: textColor }}>Web Development Frameworks/Libraries - </h4>
                    <img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=green" alt="Django_badge" />
                    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node js_badge" />
                    <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express js_badge" />
                    <img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="next js_badge" />
                    <img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white" alt="Flask_badge" />
                </li>
                <li style={{ marginTop: 15, color: textColor }} align={'start'}>
                    <h4 style={{ color: textColor }}>Deployment - </h4>
                    <img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" alt="Docker_badge" />
                    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub_badge" />
                    <img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white" alt="GIT_badge" />
                    <img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="Netlify_badge" />
                    <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" alt="Heroku_badge" />
                </li>
                <li style={{ marginTop: 15, color: textColor }} align={'start'}>
                    <h4 style={{ color: textColor }}>Database - </h4>
                    <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB_badge" />
                    <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL_badge" />
                    <img src="https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white" alt="SQLite_badge" />
                    <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL_badge" />

                </li>
            </ul>
            {/* </Content> */}
            {/* </Layout> */}
            {/* <hr /> */}
        </Fragment>
    )
}

export default MySkills