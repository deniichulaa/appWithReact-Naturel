import React from 'react';

import Item from "./Item";

const ItemList = ({productsItemList}) => {
    
    const container = {
        padding: "5rem 2rem",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(17rem, 1fr))",
        gap: "1rem 2rem",
    }
    
    return(
        <div style={container} >
            { productsItemList !== undefined && 
                productsItemList.map((prod) => (
                    <Item key={prod.id} product={prod}/> 
                    
                ))
            }  
        </div> 
    ) 
}

export default ItemList ;
