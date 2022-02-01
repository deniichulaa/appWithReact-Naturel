
import ItemList from "./ItemList";


const ItemListContainer = ({products}) => {

   
    return(
        
        <div>
             
            <ItemList productsItemList={products}/>

        </div>
        
    )
} 

export default ItemListContainer;
