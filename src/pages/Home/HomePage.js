// import React, {useState} from 'react';
import React from 'react';
// import {Card, Button, Row, Col, Container} from 'react-bootstrap';
// import Pagination from 'react-bootstrap/Pagination';
import NavbarHeader from "../../components/Layout/NavbarHeader";
import FooterHeader from "../../components/Layout/FooterHeader";
// import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
// import { Menu, Switch, Layout, Affix, Button } from 'antd';
// import { Layout} from 'antd';
import MyLayout from "../../components/Home Page/MyLayout";
import MySkills from "../../components/Home Page/MySkills"
// import MyProjects from "../../components/Home Page/MyProjects";
import ContactMe from "../../components/Home Page/ContactMe";
import { Helmet } from 'react-helmet';
// import MyExperience from '../../components/Home Page/MyExperience';
import { useSelector } from 'react-redux';
import MyProjects2 from '../../components/Home Page/MyProjects2';
import MyExperience2 from '../../components/Home Page/MyExperience2';
import VisitorsCount from '../../components/Home Page/VisitorsCount';
import Archievements from '../../components/Home Page/Archievements';
import VolunteeringExperience from '../../components/Home Page/VolunteeringExperience';
import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollToTopButton';

// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;
/*this is for importing dark theme of antd  */
// {
//     label: (
//     <Switch
//         checked={theme === 'dark'}
//         onChange={changeTheme}
//         checkedChildren="Dark"
//         unCheckedChildren="Light"
//     />

//     ),
//     key: 'theme',
// },
const HomePage = () => {
    // const [container, setContainer] = useState(null);
    // const [theme, setTheme] = useState('light');
    // const [current, setCurrent] = useState('mail');

    // const onClick = (e) => {
    //   console.log('click ', e);
    //   setCurrent(e.key);
    // };

    // const changeTheme = (value) => {
    //     setTheme(value ? 'light' : 'dark');
    // };

    // const { Header, Footer, Sider, Content } = Layout;

    // const items = [
    // {
    //     label: 'Navigation One',
    //     key: 'mail',
    //     icon: <MailOutlined />,
    // },
    // {
    //     label: 'Navigation Two',
    //     key: 'app',
    //     icon: <AppstoreOutlined />,
    //     disabled: true,
    // },
    // {
    //     label: 'Navigation Three - Submenu',
    //     key: 'SubMenu',
    //     icon: <SettingOutlined />,
    //     style: {marginLeft: 'auto' },
    //     children: [
    //     {
    //         type: 'group',
    //         label: 'Item 1',
    //         children: [
    //         {
    //             label: 'Option 1',
    //             key: 'setting:1',
    //         },
    //         {
    //             label: 'Option 2',
    //             key: 'setting:2',
    //         },
    //         ],
    //     },
    //     {
    //         type: 'group',
    //         label: 'Item 2',
    //         children: [
    //         {
    //             label: 'Option 3',
    //             key: 'setting:3',
    //         },
    //         {
    //             label: 'Option 4',
    //             key: 'setting:4',
    //         },
    //         ],
    //     },
    //     ],
    // },
    // {
    //     label: (
    //     <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
    //         Navigation Four - Link
    //     </a>
    //     ),
    //     key: 'alipay',
    // },
    // {
    //     label: (
    //     <Switch
    //         checked={theme === 'dark'}
    //         onChange={changeTheme}
    //         checkedChildren="Dark"
    //         unCheckedChildren="Light"
    //     />

    //     ),
    //     key: 'theme',
    // },
    // ];
    const theme = useSelector((state) => state.themeReducer);
    const myBackgroundColor = theme.theme !== "light" ? "#222831" : "";
    const myTextcolor = theme.theme === "light" ? "black" : "white";
    const myCardColor = theme.theme !== "light" ? "black" : "";
    // console.log("color",myBackgroundColor)

    return (
        <div >
            <Helmet>
                <title>Portfolio Website</title>
                <meta name="Portfolio" content="Fortfolio page website skills projects contact me about me fun page " />
            </Helmet>
            {/* <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" theme={theme} items={items} >

           <SubMenu style={{float: 'right'}} title={<span>Navigation Three - Submenu</span>}>
                <MenuItemGroup title="Item 1">
                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup title="Item 2">
                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                    <Menu.Item key="setting:4">Option 4</Menu.Item>
                </MenuItemGroup>
            </SubMenu>

        
        </Menu> */}

            <NavbarHeader />

            {/* <div className="container-fluid text-white">
            Hello
        </div> */}
            {/* <Layout  style={{backgroundColor: "#111d2c"}} > */}
            {/* <Layout >
            <Content align={'end'}>
                Light theme/Dark Theme
                <Switch
                    checkedChildren={'Dark'}
                    unCheckedChildren={'Light'}
                    defaultChecked
                />
            </Content>
        </Layout> */}
            <div className="random_div" >
                <MyLayout color={{ myBackgroundColor }} textColor={{ myTextcolor }} />
                {/* Note giving id here will not make it work, give ID's to divs inside components */}
                <MySkills id="skills" color={{ myBackgroundColor }} textColor={{ myTextcolor }} />
                {/* <MyExperience color={{myBackgroundColor}} textColor={{myTextcolor}} cardColor={{myCardColor}} /> */}
                <MyExperience2 color={{ myBackgroundColor }} textColor={{ myTextcolor }} cardColor={{ myCardColor }} />
                {/* <MyProjects color={{myBackgroundColor}} textColor={{myTextcolor}} cardColor={{myCardColor}} /> */}
                <MyProjects2 id="projects" color={{ myBackgroundColor }} textColor={{ myTextcolor }} cardColor={{ myCardColor }} />
                <Archievements color={{ myBackgroundColor }} textColor={{ myTextcolor }} />
                <VolunteeringExperience color={{ myBackgroundColor }} textColor={{ myTextcolor }} />
                <ContactMe id="contact" color={{ myBackgroundColor }} textColor={{ myTextcolor }} />

                <VisitorsCount color={{myBackgroundColor}} textColor={{myTextcolor}} />

            </div>



            <FooterHeader />

            <ScrollToTopButton />
        </div>
    )
}

export default HomePage