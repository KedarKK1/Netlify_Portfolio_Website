import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React, { useEffect } from 'react';
/*this is for importing dark theme of antd  */
// import 'antd/dist/antd.dark.css';
import Aos from 'aos';
import "aos/dist/aos.css";

const MySkills = () => {

    useEffect(() => {
        Aos.init({
            duration: 500,
        });
    
    }, [])

  return (
    <>
        <Layout id="skills" >
            <Content style={{ marginTop: 15}} data-aos="zoom-in-down">
                <h1> <b><u>My Skills</u></b> </h1>
                <ul style={{ marginRight: 30, marginLeft: 30 }} align={'start'} >
                    <li>
                        {/* below align start is from antD, if not aligned right, then all text and badges will be at center */}
                        <h4>Languages - </h4>
                        <img src="https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue" alt="badge" />
                        <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="badge" />
                        <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white" alt="badge" />
                        <img src="https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white" alt="badge" />
                    </li>
                    <li style={{ marginTop: 15}} align={'start'}>
                        <h4>Web Development Tech Stack - </h4>
                            <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="badge" />
                            <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="badge" />
                            <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="badge" />
                            <img src="https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white" alt="badge" />
                            <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="badge" />
                            <img src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white" alt="badge" />
                            <img src="https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white" alt="badge" />
                            <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="badge" />
                            <img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" alt="badge" />
                            <img src="https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white" alt="badge" />
                            <img src="https://img.shields.io/badge/Ant%20Design-1890FF?style=for-the-badge&logo=antdesign&logoColor=white" alt="badge" />
                    </li>
                    <li style={{ marginTop: 15}}>
                        <h4 align={'start'}>Web Development Frameworks/Libraries - </h4>
                            <img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=green" alt="badge" />
                            <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="badge" />
                            <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="badge" />
                            <img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="badge" />
                            <img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white" alt="badge" />
                    </li>
                    <li style={{ marginTop: 15}} align={'start'}>
                        <h4 >Deployment - </h4>
                            <img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" alt="badge" />
                            <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="badge" />
                            <img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white" alt="badge" />
                    </li>
                    <li style={{ marginTop: 15}} align={'start'}>
                        <h4 >Database - </h4>
                            <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="badge" />
                            <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" alt="badge" />
                            <img src="https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white" alt="badge" />
                            <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="badge" />
                           
                    </li>
                </ul>
            </Content>
        </Layout>
        {/* <hr /> */}
    </>
  )
}

export default MySkills