import React, { Fragment } from "react";
import logo from'../logoHblanco.png'

const NavBar = () => {

    const NavStyle = {
        display:"flex",
        height:110,
        paddingTop:10,
        paddingLeft:30,
        backgroundColor: "Black",
        alingItems:"center",
        
    }    
    const List = {
        display: "flex",
        paddingLeft: 20,
        listStyleType: "none",
        alingItems:"center",
        justifyContent:"center",
    }
    const Link= {
        textDecoration:"none",
        paddingLeft:15,
        color:"white",
    }


    return(
        <Fragment>
            <div style={NavStyle}>
                <a href="#"><img src={logo} alt="Logo" /></a>
                <ul style={List}>
                    <li><a href="#" style={Link}>Home</a></li>
                    <li><a href="#" style={Link}>Productos </a></li>
                    <li><a href="#" style={Link}>Contacto</a></li>
                </ul>

            </div>
        </Fragment>
    )
}

export default NavBar;
