import {React, useState} from "react";
import { Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemCount = () => {

    const [Qty, setQty] = useState(0);
    const [Data, setData] = useState({
    name: "Limpiador Facial",
    stock: 3
    })

    const SpanStyle = {
        marginRight: 10,
        marginLeft: 10,
        fontSize:20
    }
    const titleProduct ={
        fontSize:30,
        fontWeight:600
    }
    const itemContainer = {
        display: "flex",
        flexDirection: "column",
        alingItem: "center"
    }

    const plusOne = () => {
        if (Qty < Data.stock) {
            setQty(Qty + 1)
        }
    }
    const lessOne = () => {
        if (Qty > 0) {
            setQty(Qty - 1)
        }
    }

    return (
        <div style={itemContainer}>
            <p style={titleProduct}>{Data.name}</p>
            <div>
                <Button variant="outline-secondary" onClick={lessOne}>-</Button>{' '}
                <span style={SpanStyle}>{Qty}</span>
                <Button variant="outline-secondary" onClick={plusOne}>+</Button>{' '}
            </div>
            
        </div>
    )

}

export default ItemCount