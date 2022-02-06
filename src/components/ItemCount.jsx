
import { Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {useContext} from "react";
import { CartContext } from '../context/CartContext'; 

const ItemCount = ({product, qty, setQty, setQtyDetail, setButonOnAdd}) => {
    const { initial_quantity} = product
    

    const SpanStyle = {
        marginRight: 10,
        marginLeft: 10,
        fontSize:20
    }
    const plusOne = (qty, initial_quantity) => {
        if (qty <= initial_quantity) {
            let final = qty + 1;
            setQty(final);
        }
    }
    const lessOne = (qty) => {
        if (qty >= 1) {
            let final = qty - 1;
            setQty(final);
        }
    }

    const {addItem} = useContext(CartContext)

    const onAdd = (qty, product) => {
        setButonOnAdd(false);

        const {thumbnail, title, price, id} = product;
        const productItem = {
            id: id,
            img: thumbnail,
            name: title,
            price: price, 
            qty: qty
        };
        
        addItem(productItem);
    }

    return (
        <>
            <div style={{marginBottom:20}}>
                <Button variant="outline-secondary" onClick={() => lessOne(qty)}> - </Button>
                <span style={SpanStyle}> {qty} </span>
                <Button variant="outline-secondary" onClick={() => plusOne(qty,initial_quantity)}> + </Button>
                
            </div>
            <Button variant="secondary" onClick={() => onAdd(qty, product)}>Agregar al Carrito</Button>
        </>
    )

}

export default ItemCount