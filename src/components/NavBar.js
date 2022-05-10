import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import CartWidget from "./CartWidget";

export default function NavBar() {
    return (

        <div>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">NodoDos Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0" 
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#">Home</Nav.Link>
                            <Nav.Link href="#">Nosotros</Nav.Link>
                            
                            <Nav.Link href="#">Envios</Nav.Link>
                            <NavDropdown title="Categorías" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#">Motherboards</NavDropdown.Item>
                                <NavDropdown.Item href="#">Procesadores</NavDropdown.Item>
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