import limpFacial from "../assets/facLimp.jpeg";
import shampoo from "../assets/cabShampoo.jpeg";
import acond from "../assets/cabAcond.jpeg";
import cremaCorp from "../assets/corCrema.jpeg";
import cremaFac from "../assets/facCrema.jpeg"; 

import { useEffect, useState } from "react";
import ItemListContainer from "./ItemListContainer";

const Natural = () => {

    const [products, setProducts] = useState([]);

    const data = [
        {id: "f001", category: "face", title: "Limpiador Facial", price: 500, thumbnail: {limpFacial}, stock: 10},
        {id: "s001", category: "hair", title: "Shampoo Solido", price: 800, thumbnail: {shampoo}, stock:20 },
        {id: "s002", category: "hair", title: "Acondicionador Solido", price: 900, thumbnail: {acond}, stock:15 },
        {id: "f002", category: "face", title: "Crema Facial todo tipo de piel", price: 600, thumbnail: {cremaFac}, stock:30 },
        {id: "b001", category: "body", title: "Crema Corporal ", price: 750, thumbnail: {cremaCorp}, stock:20 }, 
    ];


    const callData = new Promise ((resolve, reject) => {
        setTimeout(resolve(data), 2000)
    });

    useEffect(() => {
        callData.then((response) => {
            setProducts(response);
        });
    },[]); 

    //console.log("en el itemContainer", products)

    return(
        <ItemListContainer products={products} />
    )

}

export default Natural
