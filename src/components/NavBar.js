import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap'

const NavBar = () => {
    return(
       <React.Fragment>
         <nav>
         <Navbar bg="primary" expand="lg" id='headerbg'>
  <Container fluid>
    <Navbar.Brand href="#" id='headerbg'> NestLibrary </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll>
      </Nav>
    
      <Nav.Link href="#action1" id='headerbg'>Home</Nav.Link>
        <Nav.Link href="#action2" id='headerbg'>Library</Nav.Link>
    </Navbar.Collapse>
  </Container>
</Navbar>
         </nav>

       </React.Fragment>
    );
}

export default NavBar;