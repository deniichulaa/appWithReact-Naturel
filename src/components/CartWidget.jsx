import React, { Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";

const CartWidget = () => {
    const iconStyle = {
        fontSize:50,
        positionRight:20,
        paddingRight:40
    }
    return(
        <Fragment>
            <div style={iconStyle}>
                <Link to={"/cart"} style={{color:"#9a607b"}}> <FontAwesomeIcon icon={faShoppingCart} pull="right"/> </Link>
            
            </div>
        </Fragment>
    )
}

export default CartWidget ;