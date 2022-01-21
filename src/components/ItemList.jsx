import React from "react";
import Item from "./Item";

const ItemList = (prodItemlist) => {

   console.log("en el itemlist", prodItemlist)
   // product es un objeto y adentro tiene el array de objetos 


    return(

        <div>
            <p>555</p>
            
            {prodItemlist.productItemlist.map(prod => {
                <div key={prod.id}>
                    <Item img={prod.img} name={prod.name} price={prod.price} stock={prod.stock}/>
                </div>
            })}  

            <p>asdfas</p>

        </div> 
    ) 
}

export default ItemList 
