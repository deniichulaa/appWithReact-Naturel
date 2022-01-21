import {React, useState} from "react";
import { Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemCount = (stock) => {

    const [Qty, setQty] = useState(0);
    

    const SpanStyle = {
        marginRight: 10,
        marginLeft: 10,
        fontSize:20
    }
    const plusOne = () => {
        if (Qty < {stock}) {
            setQty(Qty + 1)
        }
    }
    const lessOne = () => {
        if (Qty > 0) {
            setQty(Qty - 1)
        }
    }

    return (
        <div>
            
            <Button variant="outline-secondary" onClick={lessOne}>-</Button>{' '}
            <span style={SpanStyle}>{Qty}</span>
            <Button variant="outline-secondary" onClick={plusOne}>+</Button>{' '}
            
            
        </div>
    )

}

export default ItemCount