import React, { Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
    const iconStyle = {
        fontSize:50,
        positionRight:20,
        color:"#9a607b",
        paddingRight:40
    }
    return(
        <Fragment>
            <div style={iconStyle}>
            <FontAwesomeIcon icon={faShoppingCart} pull="right"/>

            </div>
        </Fragment>
    )
}

export default CartWidget ;