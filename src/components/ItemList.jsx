
import Item from "./Item";

const ItemList = ({productsItemList}) => {

   console.log("en el itemlist", productsItemList)
   console.log("🚀 ~ file: ItemList.jsx ~ line 7 ~ ItemList ~ productsItemList", productsItemList)
   // product es un objeto y adentro tiene el array de objetos 

    let ProductArray = productsItemList.productItemlist
    console.log("🚀 ~ file: ItemList.jsx ~ line 10 ~ ItemList ~ ProductArray", ProductArray)

    const container = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "spaceAround",
        alingItems: "center",
        marginTop: 40
    }
    
    return(

        <div style={container}>
            
            {ProductArray.map((prod) => (
                <div key={prod.id}>
                    <Item key={prod.id} product={prod}/>
                </div>
            ))}  
            
        </div> 
    ) 
}

export default ItemList 
