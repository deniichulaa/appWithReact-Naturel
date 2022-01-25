import {useEffect, useState} from "react";
import react from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const [apiProducts, setApiProducts] = useState([])

    const meliProducts = (category) => {
        return fetch(`https://api.mercadolibre.com/sites/MLA/search?category=${category}`)
        .then(data => data.json())
    }

    useEffect(() => {
        let mounted = true
        meliProducts("MLA1246").then(item => {
            if(mounted){
                setApiProducts(item.results)
            }
        })
        return () => mounted = false
    }, [])

    console.log(apiProducts)

    return(
        <div>
            <h1>mi item</h1>
            <div>
                {apiProducts.map(prod => {
                    if(prod.id == "MLA1118603224"){
                    return <ItemDetail name={prod.title} img={prod.thumbnail} ubi={prod.address.city_name} price={prod.price}/> }
                })}
            </div>
        </div>
    )

}

export default ItemDetailContainer;