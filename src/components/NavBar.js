import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import CartWidget from "./CartWidget";
import {LinkContainer} from 'react-router-bootstrap'

export default function NavBar() {
    return (

        <div>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <LinkContainer to='/'><Navbar.Brand>NodoDos Shop</Navbar.Brand></LinkContainer>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0" 
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <LinkContainer to='/'><Nav.Link>Home</Nav.Link></LinkContainer>
                            <LinkContainer to='/about'><Nav.Link>Nosotros</Nav.Link></LinkContainer>
                            <LinkContainer to='/contact'><Nav.Link>Contacto</Nav.Link></LinkContainer>
                            <NavDropdown title="Categorías" id="navbarScrollingDropdown">
                                <LinkContainer to ='/categoria/monitores'><NavDropdown.Item>Monitores</NavDropdown.Item></LinkContainer>
                                <LinkContainer to ='/categoria/alimentacion'><NavDropdown.Item>Alimentación</NavDropdown.Item></LinkContainer>
                                <LinkContainer to ='/categoria/mobiliario'><NavDropdown.Item>Mobiliario</NavDropdown.Item></LinkContainer>
                                <LinkContainer to ='/categoria/audio'><NavDropdown.Item>Audio</NavDropdown.Item></LinkContainer>
                                <LinkContainer to ='/categoria/motherboard'><NavDropdown.Item>MotherBoard</NavDropdown.Item></LinkContainer>
                                <LinkContainer to ='/categoria/teclados'><NavDropdown.Item>Teclados</NavDropdown.Item></LinkContainer>
                                <LinkContainer to ='/categoria/webcams'><NavDropdown.Item>Web Cams</NavDropdown.Item></LinkContainer>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#">SALE</NavDropdown.Item>
                            </NavDropdown>
                               
                        </Nav>
                        <CartWidget />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}