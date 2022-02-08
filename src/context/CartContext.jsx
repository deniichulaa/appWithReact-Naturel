import { useEffect } from "react";
import { createContext, useState} from "react";


export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0);

    const addItem = (product) => { 
        //console.log("🚀 ~ file: CartContext.jsx ~ line 11 ~ addItem ~ product", product)
        const {id} = product;
        console.log("🚀 ~ file: CartContext.jsx ~ line 12 ~ addItem ~ id", id)

        const isInCart = items.every(item => {
            return item.id !== id
        })
        if(isInCart){
           setItems([...items, product]) 
        }
        else{
            alert("El producto ya esta en el Carrito")
        }
    }

    const deleteAll = () => {
        setItems([])
    }

    const qtyChange = () => {
        console.log("cambio valor")
    }

    // no funciona! ---------------------------------------------------
    const deleteItem = (id) => {
        console.log("🚀 ~ file: CartContext.jsx ~ line 34 ~ deleteItem ~ id", id)
        const newItems = items.filter((prod) => { return prod.id !== id});
        console.log("🚀 ~ file: CartContext.jsx ~ line 34 ~ deleteItem ~ newItems", newItems)
        setItems(newItems) 

    }
    // --------------------------------------------------------------------

    useEffect(() => {
        const getTotal = () => {
            const res = items.reduce((prev, item) => {
                return prev + (item.price * item.qty);
            }, 0)
            setTotal(res)
        }
        getTotal()
    }, [items])

    return(
        <CartContext.Provider value={{items, setItems, addItem, deleteAll, deleteItem, qtyChange, total,setTotal}} >
            {children}
        </CartContext.Provider>
    )
}