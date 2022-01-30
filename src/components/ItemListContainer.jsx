import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";

import limpFacial from "../assets/facLimp.jpeg";
import shampoo from "../assets/cabShampoo.jpeg";
import acond from "../assets/cabAcond.jpeg";
import cremaCorp from "../assets/corCrema.jpeg";
import cremaFac from "../assets/facCrema.jpeg"; 

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    const data = [
        {id: "f001", category: "face", name: "Limpiador Facial", price: 500, img: {limpFacial}, stock: 10},
        {id: "s001", category: "hair", name: "Shampoo Solido", price: 800, img: {shampoo}, stock:20 },
        {id: "s002", category: "hair", name: "Acondicionador Solido", price: 900, img: {acond}, stock:15 },
        {id: "s002", category: "face", name: "Crema Facial todo tipo de piel", price: 600, img: {cremaFac}, stock:30 },
        {id: "b001", category: "body", name: "Crema Corporal ", price: 750, img: {cremaCorp}, stock:20 }, 
    ];
    console.log("🚀 ~ file: ItemListContainer.jsx ~ line 21 ~ ItemListContainer ~ data", data)

    const callData = new Promise ((resolve, reject) => {
        setTimeout(resolve(data), 2000)
    });
    
    useEffect(() => {
        callData.then((response) => {
            setProducts(response);
        });
    },[]);

    console.log("en el itemContainer", products) //ACA COMIENZA EL ERROR, products esta vacio
    return(
        
        <div>
             
            <ItemList productsItemList={products}/>

        </div>
        
    )
} 

export default ItemListContainer;
