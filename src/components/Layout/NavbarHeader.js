import { Layout, Row, Col, Menu, Switch } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import kLogo from "../../images/kLogo.jpg"
import { setTheme } from '../../redux/actions';
import './NavbarHeader.css'
// import { AppstoreOutlined, MailOutlined, SettingOutlined, heckOutlined, CloseOutlined, CheckOutlined } from '@ant-design/icons';

const NavbarHeader = () => {
  const theme = useSelector((state)=>state.themeReducer);
  const dispatch = useDispatch();
  const changeTheme = () => {
    console.log("curerent theme ",theme.theme)
    if(theme.theme === "light"){
      dispatch(setTheme("dark"));
      console.log("switched to dark theme")
    }else{
      dispatch(setTheme("light"));
      console.log("switched to light theme")
    }
  };
  return (
    // <div>
    //   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    //     <div className="container-xxl">
    //       <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    //       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //       <Navbar.Collapse id="responsive-navbar-nav">
    //         <Nav className="me-auto">
    //           <Nav.Link href="#features">Features</Nav.Link>
    //           <Nav.Link href="#pricing">Pricing</Nav.Link>
    //           <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
    //             <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //             <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
    //             <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //             <NavDropdown.Divider />
    //             <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    //           </NavDropdown>
    //         </Nav>

    //         {/* your page here */}


    //         <Nav>
    //           <Nav.Link href="#deets">More deets</Nav.Link>
    //           <Nav.Link eventKey={2} href="#memes">
    //             Dank memes
    //           </Nav.Link>
    //         </Nav>
    //       </Navbar.Collapse>
    //     </div>
    //   </Navbar>
    // </div>


    <>
    {/* Ant Design is based on 12 Grids System, antd divided the design area into 24 sections */}
      <Layout>
        <Header style={{ padding: 0, margin: 0 }}>
          <Row style={{height: '100%',color: 'white'}} className="myRow" >
            <Col xxl={1} xl={1} lg={1} xs={0} md={0} sm={0} />
            <Col xxl={22} xl={22} lg={22} xs={24} md={24} sm={24} style={{textAlign: 'left'}} >
              <Link to="/Portfolio_Website"><img src={kLogo} alt="Logo" className="myLogo" /></Link>

              <Menu theme="dark" mode="horizontal" style={{
                float: 'right',
                textAlign: 'right',
                border: 'none',
                width: '70%',
              }}>

                {/* <Menu.Item key={'skills'} ><a href="/Portfolio_Website/#skills"> My Skills</a></Menu.Item> 
                <Menu.Item key={'projects'} ><a href="/Portfolio_Website/#projects">My Projects</a></Menu.Item> 
                <Menu.Item key={'resume'} ><a href="https://drive.google.com/file/d/1irKYMaF0unbquoIK_J5jkHi5qiOM2MfJ/view?usp=sharing">My Resumé</a></Menu.Item> 
                <Menu.Item key={'contact'} ><a href="/Portfolio_Website/#contact">Contact Me</a></Menu.Item> 
                <Menu.Item key={'Funpage'} ><Link to="/Portfolio_Website/Fun_Page">Fun Page</Link></Menu.Item>  */}
                
                <Menu.Item key={'landing'} ><Link to="/">Landing Page</Link></Menu.Item> 
                <Menu.Item key={'skills'} ><a href="/Homepage#skills"> My Skills</a></Menu.Item> 
                <Menu.Item key={'projects'} ><a href="/Homepage#projects">My Projects</a></Menu.Item> 
                <Menu.Item key={'resume'} ><a href="https://drive.google.com/file/d/1pBtvhj1HzP0p5T1aUwUMgp2KbfuQRAPm/view?usp=sharing">My Resumé</a></Menu.Item> 
                <Menu.Item key={'contact'} ><a href="/Homepage#contact">Contact Me</a></Menu.Item> 
                <Menu.Item key={'Funpage'} ><Link to="/Funpage">Fun Page</Link></Menu.Item>
                {/* <Switch checkedChildren="DARK" unCheckedChildren="LIGHT" defaultChecked onChange={onChange} /> */}
                <Menu.Item key={'darklight'} style={{display: 'flex', alignItems: 'center'}}><Switch checked={theme.theme === "light" ? false : true } checkedChildren="DARK MODE" unCheckedChildren="LIGHT MODE" onChange={()=>changeTheme()} /></Menu.Item>
              </Menu>
            </Col>
            <Col  xxl={1} xl={1} lg={1} xs={0} md={0} sm={0} />
          </Row>
        </Header>
      </Layout>
      {/* <hr /> */}
    </>
  )
}

export default NavbarHeader;