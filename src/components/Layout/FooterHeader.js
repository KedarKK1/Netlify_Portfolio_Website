import React from 'react';
// import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Layout } from 'antd';
const { Footer } = Layout;

const FooterHeader = () => {
  return (
    // <div>
    //   <Navbar bg="dark" variant="dark" fixed="bottom">
    //     <Container className="flex-row justify-content-center">
    //       <h5 className='text-success text-center'>footer</h5>
    //     </Container>
    //   </Navbar>
    // </div>
    <>
      <Layout>
        <Footer theme="dark" mode="horizontal" style={{
                position: 'relative',
                left: '0',
                bottom: '0',
                width: '100%',
              }}>
          Made with ❤️ by Kedar Koshti
        </Footer>
      </Layout>
    </>
  )
}

export default FooterHeader;