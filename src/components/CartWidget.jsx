import React from "react";
import { useContext } from "react";
import {Link} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { CartContext } from "../context/CartContext";

const CartWidget = () => {
    const {items} = useContext(CartContext)

    const iconStyle = {
        paddingRight:40,
        position: "relative",
        cursor: "pointer",
    }
    const spanStyle = {
        position: "absolute",
        top: "-1rem",
        right: "1.2rem",
        width: "2rem",
        height: "2rem",
        borderRadius: "50%",
        border: "1px solid #d1bdc4",
        color: "white",
        backgroundColor: "#9a607b",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1rem",
        fontWeight: 700
    }

    return(
        
        <div style={iconStyle}>
            <Link to={"/cart"} style={{color:"#9a607b"}}> <FontAwesomeIcon icon={faShoppingCart} pull="right" style={{height: 35}}/> </Link>
            <span className="item_total" style={spanStyle}>{items.length}</span>
        
        </div>
        
    )
}

export default CartWidget ;