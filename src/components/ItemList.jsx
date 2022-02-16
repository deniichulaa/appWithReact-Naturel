
import Item from "./Item";

const ItemList = ({productsItemList}) => {
console.log("🚀 ~ file: ItemList.jsx ~ line 5 ~ ItemList ~ productsItemList", productsItemList)

    const container = {
        padding: "5rem 2rem",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(17rem, 1fr))",
        gap: "3rem 1rem",
    }
    
    return(

        <div style={container}>
            
            { productsItemList ? 
            (productsItemList.map((prod) => (
                <Item key={prod.id} product={prod}/> 
            )))
            : null
            }  
            
        </div> 
    ) 
}

export default ItemList 
