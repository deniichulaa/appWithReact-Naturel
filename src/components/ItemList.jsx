import React from "react";
import Item from "./Item";

const ItemList = (prodItemlist) => {

   console.log("en el itemlist", prodItemlist)
   // product es un objeto y adentro tiene el array de objetos 

    let ProductArray = prodItemlist.productItemlist
    console.log("🚀 ~ file: ItemList.jsx ~ line 10 ~ ItemList ~ ProductArray", ProductArray)

    let [productList, prototype] = ProductArray
    console.log("🚀 ~ file: ItemList.jsx ~ line 13 ~ ItemList ~ productList", productList)

    return(

        <div>
            <p>555</p>
            <div>
                {/* {productList.map((prod) => {
                    return(<div key={prod.id}>
                        <Item img={prod.img} name={prod.name} price={prod.price} stock={prod.stock}/>
                    </div>)
            })}   */}
            </div>
            

            <p>asdfas</p>

        </div> 
    ) 
}

export default ItemList 
