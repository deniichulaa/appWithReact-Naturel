import { useEffect,createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0);

    const addItem = (product) => { 
        const {id} = product;

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

    const deleteItem = (id) => {
        const propId = id.id;
        const newItems = items.filter((prod) => {return prod.id !== propId});
        setItems(newItems) 
    }

    const changeItemQty = (id, changeQty) => {
        const update = items.map((prod) => {
            if(prod.id === id){
                prod.qty = changeQty
            }
            return prod
        })
        setItems(update)
    }

    useEffect(() => {
        const getTotal = () => {
            const res = items.reduce((prev, item) => {
                return prev + (item.price * item.qty);
            }, 0)
            setTotal(res)
        }
        getTotal()
    }, [items])

    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem('cartData'))
        if(cartData){
            setItems(cartData)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('cartData', JSON.stringify(items))
    },[items])

    return(
        <CartContext.Provider value={{items, setItems, addItem, deleteAll, deleteItem, total,setTotal, changeItemQty}} >
            {children}
        </CartContext.Provider>
    )
}