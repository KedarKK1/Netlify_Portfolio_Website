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
              <Link to="/" className="myLogo" ><span><img src={kLogo} alt="Logo" className="myLogo" /></span></Link>
  
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
                <Menu.Item key={'resume'} ><a target="_blank" rel="noreferrer" href={`${process.env.REACT_APP_RESUME_LINK}`}>My Resumé</a></Menu.Item> 
                <Menu.Item key={'contact'} ><a href="/Homepage#contact">Contact Me</a></Menu.Item> 
                <Menu.Item key={'Funpage'} ><Link to="/Funpage">Fun Page</Link></Menu.Item>
                {/* <Switch checkedChildren="DARK" unCheckedChildren="LIGHT" defaultChecked onChange={onChange} /> */}
                <Menu.Item key={'darklight'} 
                 style={{display: 'flex', alignItems: 'center'}}>
                  <Switch checked={theme.theme === "light" ? false : true } 
                    checkedChildren={<span><img src={`data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHJva2U9IndoaXRlIiBmaWxsPSJ3aGl0ZSIgbGluZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLXN1biI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iNSI+PC9jaXJjbGU+PGxpbmUgeDE9IjEyIiB5MT0iMSIgeDI9IjEyIiB5Mj0iMyI+PC9saW5lPjxsaW5lIHgxPSIxMiIgeTE9IjIxIiB4Mj0iMTIiIHkyPSIyMyI+PC9saW5lPjxsaW5lIHgxPSI0LjIyIiB5MT0iNC4yMiIgeDI9IjUuNjQiIHkyPSI1LjY0Ij48L2xpbmU+PGxpbmUgeDE9IjE4LjM2IiB5MT0iMTguMzYiIHgyPSIxOS43OCIgeTI9IjE5Ljc4Ij48L2xpbmU+PGxpbmUgeDE9IjEiIHkxPSIxMiIgeDI9IjMiIHkyPSIxMiI+PC9saW5lPjxsaW5lIHgxPSIyMSIgeTE9IjEyIiB4Mj0iMjMiIHkyPSIxMiI+PC9saW5lPjxsaW5lIHgxPSI0LjIyIiB5MT0iMTkuNzgiIHgyPSI1LjY0IiB5Mj0iMTguMzYiPjwvbGluZT48bGluZSB4MT0iMTguMzYiIHkxPSI1LjY0IiB4Mj0iMTkuNzgiIHkyPSI0LjIyIj48L2xpbmU+PC9zdmc+`} 
                    alt="dark" /></span>} 
                    unCheckedChildren={<span><img src={`data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItbW9vbiI+PHBhdGggZD0iTTIxIDEyLjc5QTkgOSAwIDEgMSAxMS4yMSAzIDcgNyAwIDAgMCAyMSAxMi43OXoiPjwvcGF0aD48L3N2Zz4=`} 
                    alt="light" /></span>} onChange={()=>changeTheme()} /></Menu.Item>
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