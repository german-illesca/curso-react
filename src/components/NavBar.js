import React from 'react';
import { Navbar,Nav,NavDropdown, Container } from 'react-bootstrap';
class NavBar extends React.Component{
    render(){
        return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">VeruVeru bebés</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#contacto">Contacto</Nav.Link>
                <NavDropdown title="Opciones" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Tabla de Medidas</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Medios de Pago</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Formas de Envío</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Como comprar?</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                <Nav.Link href="#carrito">Carrito</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        )  
    }
}

export default NavBar;