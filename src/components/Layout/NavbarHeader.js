import { Layout, Row, Col, Menu } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React from 'react';
import { Link } from 'react-router-dom';
// import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import kLogo from "../../images/kLogo.jpg"
import './NavbarHeader.css'

const NavbarHeader = () => {
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
                width: '40%',
              }}>

                <Menu.Item key={'skills'} ><a href="#skills" />My Skills</Menu.Item> 
                <Menu.Item key={'projects'} ><a href="#projects" />My Projects</Menu.Item> 
                <Menu.Item key={'resume'} ><a href="#resume" />My Resumé</Menu.Item> 
                <Menu.Item key={'contact'} ><a href="#contact" />Contact Me</Menu.Item> 

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