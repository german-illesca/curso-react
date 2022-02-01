import React from 'react';
import { Navbar,Nav, Container } from 'react-bootstrap';
import CartWidget from '../components/CartWidget';

class NavBar extends React.Component{
    render(){
        return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">VeruVeru bebés</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="/category/1">Lana</Nav.Link>
                <Nav.Link href="/category/2">Tela</Nav.Link>
                <Nav.Link href="/category/3">Juguetes</Nav.Link>
                <Nav.Link href="/category/4">Combos</Nav.Link>
                </Nav>
                <Nav>
                <Nav.Link href="#carrito"><CartWidget /></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        )  
    }
}

export default NavBar;