import React, { Fragment } from "react";

const ItemListContainer = ({greeting}) => {
    return(
        <Fragment>
            <div>
                <p>El mensaje es: {greeting}</p>
            </div>
        </Fragment>
    )
} 

export default ItemListContainer;