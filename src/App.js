import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/Home/HomePage';
import FunPage from './pages/Fun/FunPage';
import LandingPage from './pages/LandingPage/LandingPage.js';
import ReactGA from 'react-ga';
import Error404 from './components/Error Page/Error404';
import { useEffect } from 'react';
// import { Helmet } from 'react-helmet';
// import LandingPage3 from './components/LandingPage/LandingPage3';
// import AOS from 'aos';
// import { useEffect } from 'react';
// import LandingPage from './components/LandingPage/LandingPage';
// import CodeEditor from './components/Coding/CodeEditor';
import { Provider } from 'react-redux'
import { Store } from './redux/store';

function App() {
  
  // useEffect(() => {

  //   AOS.init();
  //   AOS.refresh();
  // }, []);
  useEffect(() => {
    ReactGA.initialize('G-914TRTHS5H');
    ReactGA.pageview(window.location.pathname + window.location.search);
    //  console.log("test");
  }, [])

  return (
    <div className="App">
      {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <div className="container-xxl">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar> */}

      {/* <Coding /> */}

      {/* react helmet for seo */}
      {/* <Helmet>
        <title>my Title</title>
        <meta name="This will be name in gsearch" content="This is what gonna show in google search" />
      </Helmet> */}
    <Provider store={Store}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Homepage" index element={<HomePage />} />
        <Route path="/Funpage" element={<FunPage />} />
        {/* for 404 error */}
        <Route path="*" element={<Error404 />} />
        {/* <Route path="/codeEditor" element={<CodeEditor />} /> */}
      </Routes>
    </Provider>

      {/* <Navbar bg="dark" variant="dark" fixed="bottom">
        <Container className="flex-row justify-content-center">
          <h5 className='text-success text-center'>footer</h5>
        </Container>
      </Navbar> */}
    </div>
  );
}

export default App;
