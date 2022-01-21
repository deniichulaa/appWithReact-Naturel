import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";

import limpFacial from "../assets/limpFacial.jpeg"
import shampoo from "../assets/shampoo.jpeg"

const ItemListContainer = () => {

    const [Products, setProducts] = useState([]);

    const data = [
        {id: "f001", name: "Limpiador Facial", price: 500, img: {limpFacial}, stock: 10},
        {id: "s001", name: "Shampoo Solido", price: 800, img: {shampoo}, stock:20 }
    ];

    const callData = new Promise ((resolve, reject) => {
        setTimeout(resolve(data), 2000)
    });
    
    useEffect(() => {
        callData.then((response) => {
            setProducts(response);
        });
    },[]);

    console.log("itemContainer", Products)
    return(
        
        <div>
            
            <ItemList productItemlist={Products}/>

        </div>
        
    )
} 

export default ItemListContainer;
