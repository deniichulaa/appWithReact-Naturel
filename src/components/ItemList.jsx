
import Item from "./Item";

const ItemList = ({productsItemList}) => {

  
    //let ProductArray = productsItemList.productItemlist
    //console.log("🚀 ~ file: ItemList.jsx ~ line 10 ~ ItemList ~ ProductArray", ProductArray)

    const container = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "spaceAround",
        alingItems: "center",
        marginTop: 40,
        width: "100%"
    }
    
    return(

        <div style={container}>
            
            {productsItemList.map((prod) => (
                <div key={prod.id}>
                    <Item key={prod.id} product={prod}/>
                </div>
            ))}  
            
        </div> 
    ) 
}

export default ItemList 
