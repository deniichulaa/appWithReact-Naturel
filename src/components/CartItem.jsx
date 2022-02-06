
import { useContext } from "react";
import { CartContext } from '../context/CartContext';

const CartItem = ({product}) => {

    const {id, img, name, qty, price} = product
    const {deleteItem} = useContext(CartContext);

    return(
        <tr> 
            <td><img src={img} alt="Imagen del Producto" /></td>
            <td>{name}</td>
            <td><input type="number" value={qty}/></td>
            <td>{price}</td>
            <td><button onClick={() => deleteItem({id})}> X </button></td>
        </tr>
    )
}

export default CartItem