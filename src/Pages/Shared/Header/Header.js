import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut=()=>{
        signOut(auth);
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img height={40} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home#services">Services</Nav.Link>
                            <Nav.Link href="home#experts">Experts</Nav.Link>
                            <NavDropdown title="Admin" id="collasible-nav-dropdown">

                                {
                                    user && <>
                                    <NavDropdown.Item  as={Link} to="/addservice">Add Service </NavDropdown.Item>
                                    <NavDropdown.Item  as={Link} to="/manage">Manage Service </NavDropdown.Item>
                                    <NavDropdown.Item  as={Link} to="/orders"> Order </NavDropdown.Item>
                                    </>
                                }

                                <NavDropdown.Item href="#action/3.2">Something 1</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something 2</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item   as={Link} to="location"> Google Map Location</NavDropdown.Item>
                            
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            {
                                user
                                    ?
                                    // <button onClick={handleSignOut} >Sign Out</button>
                                    <Nav.Link  onClick={handleSignOut} as={Link} to="/login">
                                        Sign Out
                                    </Nav.Link>
                                    :
                                    <Nav.Link as={Link} to="/login">
                                        Login
                                    </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;