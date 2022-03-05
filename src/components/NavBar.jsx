import  { Fragment } from "react";
import {Link, NavLink} from "react-router-dom";

import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import CartWidget from "./CartWidget";
import LogoTipo from'../assets/logoTipo.png'

const NavBar = () => {
    const LogoStyle = {
        height: 90,
    }
    const NavBg ={
        backgroundColor: "#ccb7ae",
        fontSize: 20,
        color:"#755353",
    }
    const dropstyle = {
        textDecoration:"none", 
        color:"#755353",
        fontSize: 20
    }

    return(
        <Fragment>
            <Navbar style={NavBg} expand="lg">
                <Container>
                    <Link to={"/"}><Navbar.Brand href="#home"><img src={LogoTipo} alt="" style={LogoStyle}/></Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse  id="basic-navbar-nav">
                        <Nav className="me-auto" style={{fontFamily:"georgia", color:"#755353"}}>
                            <Nav.Link as={NavLink} to="/" >Inicio</Nav.Link>
                            <Nav.Link as={NavLink} to="/contact" >Contacto</Nav.Link>
                            {/* <NavDropdown title="Categoría" id="basic-nav-dropdown" style={dropstyle}>
                                <NavDropdown.Item> <Link to="/category/body" style={dropstyle}>Corporal</Link> </NavDropdown.Item>
                                <NavDropdown.Item> <Link to="/category/hair" style={dropstyle}>Capilar</Link> </NavDropdown.Item>
                                <NavDropdown.Item> <Link to="/category/face" style={dropstyle}>Facial</Link> </NavDropdown.Item>
                                <NavDropdown.Item> <Link to="/category/oral" style={dropstyle}>Dental</Link> </NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>

                        <CartWidget/>
                    </Navbar.Collapse>
                </Container>
            </Navbar> 
        </Fragment>
    )
}

export default NavBar;
