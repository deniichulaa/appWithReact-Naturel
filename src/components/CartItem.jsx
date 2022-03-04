
import { useContext, useState } from "react";
import { CartContext } from '../context/CartContext';
import ItemCount from "./ItemCount";

const CartItem = ({product}) => {

    const {id, img, name, qty, price} = product;
    const {deleteItem,changeItemQty} = useContext(CartContext);
    const [changeQty, setChangeQty] = useState(qty);

    if(changeQty!== qty){
        changeItemQty(id, changeQty)
    } 

    return(
        <tr> 
            <td><img src={img} alt="Imagen del Producto" style={{height: 80}}/></td>
            <td>{name}</td>
            <td><ItemCount product={product} qty={changeQty} setQty={setChangeQty}/></td>
            <td>{price}</td>
            <td><button onClick={() => deleteItem({id})}> X </button></td>
        </tr>
    )
}

export default CartItem