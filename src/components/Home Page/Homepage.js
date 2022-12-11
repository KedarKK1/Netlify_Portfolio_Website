import React, { useState } from 'react';
// import {Card, Button, Row, Col, Container} from 'react-bootstrap';
// import Pagination from 'react-bootstrap/Pagination';
import NavbarHeader from "../Layout/NavbarHeader";
import FooterHeader from "../Layout/FooterHeader";
import MySkills from "../Home Page/MySkills.js"
// import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, Switch, Layout } from 'antd';
import MyLayout from "./MyLayout";
import MyProjects from "./MyProjects";
import ContactMe from "./ContactMe";
// import VisitorsCount from './VisitorsCount';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
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

    const [theme, setTheme] = useState('dark');
    const [current, setCurrent] = useState('mail');

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    const changeTheme = (value) => {
        setTheme(value ? 'dark' : 'light');
    };

    const { Header, Footer, Sider, Content } = Layout;

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

    return (
        <div>
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
            {/* <Layout  style={{backgroundColor: "#111d2c"}} >
            <Content>my content</Content>
        </Layout> */}
            <div className="random_div">
                <MyLayout />
                {/* Note giving id here will not make it work, give ID's to divs inside components */}
                <MySkills id="skills" />
                <MyProjects />
                <ContactMe />
            </div>



            <FooterHeader />
        </div>
    )
}

export default HomePage