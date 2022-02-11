import React from 'react';
import { Navbar,Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
                <Link className="linkMenu" to="/category/1">Lana</Link>
                <Link className="linkMenu" to="/category/2">Tela</Link>
                <Link className="linkMenu" to="/category/3">Juguetes</Link>
                <Link className="linkMenu" to="/category/4">Combos</Link>
                </Nav>
                <Nav>
                <Link to="/cart"><CartWidget /></Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        )  
    }
}

export default NavBar;