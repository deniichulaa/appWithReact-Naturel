import React, { Fragment } from "react";
import LogoTipo from'../assets/logoTipo.png'

import CartWidget from "./CartWidget";

import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Link, NavLink} from "react-router-dom";

const NavBar = () => {
    const LogoStyle = {
        height: 90,
    }
    const NavBg ={
        backgroundColor: "#d1bdc4"
    }

    return(
        
        <Fragment>
            
            <Navbar style={NavBg} expand="lg">
                <Container>
                    <Link to={"/"}><Navbar.Brand href="#home"><img src={LogoTipo} alt="" style={LogoStyle}/></Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to="/" >Inicio</Nav.Link>
                            <Nav.Link as={NavLink} to="/contact" >Contacto</Nav.Link>
                            <NavDropdown title="Categoría" id="basic-nav-dropdown">
                                <NavDropdown.Item > <Link to="/category/face">Facial</Link> </NavDropdown.Item>
                                <NavDropdown.Item > <Link to="/category/body">Corporal</Link> </NavDropdown.Item>
                                <NavDropdown.Item > <Link to="/category/hair">Capilar</Link> </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>

                    <CartWidget/>
                </Container>
            </Navbar> 

            
            
        </Fragment>
    )
}

export default NavBar;
