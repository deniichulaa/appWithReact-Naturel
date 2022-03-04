
import { Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemCount = ({product, qty, setQty}) => {
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

    return (
        <>
            <div>
                <Button variant="outline-secondary" onClick={() => lessOne(qty)}> - </Button>
                <span style={SpanStyle}> {qty} </span>
                <Button variant="outline-secondary" onClick={() => plusOne(qty,initial_quantity)}> + </Button>
            </div>
        </>
    )

}

export default ItemCount