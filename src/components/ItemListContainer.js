import React, { Fragment } from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = ({greeting}) => {
    return(
        <Fragment>
            <div>
                <ItemCount/>
            </div>
        </Fragment>
    )
} 

export default ItemListContainer;