
import { Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemCount = ({stock, qty, setQty, setQtyDetail, setButonOnAdd}) => {
    const stockNum = parseInt(stock)

    const SpanStyle = {
        marginRight: 10,
        marginLeft: 10,
        fontSize:20
    }
    const plusOne = (qty, stock) => {
        if (qty <= stock) {
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

    const onAdd = (qty) => {
        setQtyDetail(qty);
        setButonOnAdd(false);
    }

    return (
        <>
            <div style={{marginBottom:20}}>
                <Button variant="outline-secondary" onClick={() => lessOne(qty)}> - </Button>
                <span style={SpanStyle}> {qty} </span>
                <Button variant="outline-secondary" onClick={() => plusOne(qty,stockNum)}> + </Button>
                
            </div>
            <Button variant="secondary" onClick={() => onAdd(qty)}>Agregar al Carrito</Button>
        </>
    )

}

export default ItemCount