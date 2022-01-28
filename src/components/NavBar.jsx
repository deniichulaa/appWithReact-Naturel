import React, { Fragment } from "react";
import LogoTipo from'../assets/logoTipo.png'

import CartWidget from "./CartWidget";

import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Link} from "react-router-dom";

const NavBar = () => {
    const LogoStyle = {
        height: 90,
    }
    const NavBg ={
        backgroundColor: "#d1bdc4"
    }

    return(
        <Fragment>
            <div>
                <Navbar style={NavBg} expand="lg">
                    <Container>
                        <Link to={"/"}><Navbar.Brand href="#home"><img src={LogoTipo} alt="" style={LogoStyle}/></Navbar.Brand></Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Contacto</Nav.Link>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Productos</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Facial</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Corporal</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Cabello</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>

                        <CartWidget/>
                    </Container>
                </Navbar> 

            </div>
            
        </Fragment>
    )
}

export default NavBar;
