import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap'

const NavBar = () => {
    return(
       <React.Fragment>
         <Navbar className='navbar' expand="lg" id='headerbg'>
            <Container fluid>
               <div className='d-flex '>
                <Navbar.Brand href="/" id='headerbg'> NestLibrary </Navbar.Brand>
                  
                <Navbar.Collapse  id="navbarScroll">
                    <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll>
                  </Nav>
                  <Nav.Link className="mx-2"  href="/" id='headerbg'>Home</Nav.Link>
                  <Nav.Link className="mx-2" href="/library" id='headerbg'>Library</Nav.Link>
                </Navbar.Collapse>
                  
                </div>

              <Navbar.Toggle aria-controls="navbarScroll" />

            </Container>
          </Navbar>

       </React.Fragment>
    );
}

export default NavBar;