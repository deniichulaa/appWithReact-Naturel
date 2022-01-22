import {React, useState} from "react";
import { Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemCount = (stock) => {

    const [qty, setQty] = useState(0);
    

    const SpanStyle = {
        marginRight: 10,
        marginLeft: 10,
        fontSize:20
    }
    const plusOne = () => {
        if (qty < {stock}) {
            setQty(qty + 1)
        }
    }
    const lessOne = () => {
        if (qty > 0) {
            setQty(qty - 1)
        }
    }

    return (
        <div>
            
            <Button variant="outline-secondary" onClick={lessOne}>-</Button>{' '}
            <span style={SpanStyle}>{qty}</span>
            <Button variant="outline-secondary" onClick={plusOne}>+</Button>{' '}
            
            
        </div>
    )

}

export default ItemCount