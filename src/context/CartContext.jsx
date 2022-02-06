import { createContext, useState} from "react";


export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [items, setItems] = useState([])

    const addItem = (product) => {
        //console.log("🚀 ~ file: CartContext.jsx ~ line 11 ~ addItem ~ product", product)

        /* const newProduct = items.map( prod => {
            console.log("entro en el map")
            if(prod.id === product.id){
                prod.qty = prod.qty + product.qty;

                return{...items, prod }
            }
            return items
        })
        setItems(newProduct) */

        setItems([...items, product])
     
        console.log("productos en el carrito ", items)
    }

    const deleteAll = () => {
        setItems([])
    }

    // no funciona!
    const deleteItem = (id) => {
        const newItems = items.filter((prod) => prod.id !== id);
        setItems([newItems])
        console.log(items)
    }

    return(
        <CartContext.Provider value={{items, setItems, addItem, deleteAll, deleteItem}} >
            {children}
        </CartContext.Provider>
    )
}