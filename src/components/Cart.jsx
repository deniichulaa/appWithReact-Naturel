import { Row, Table, Col, Button, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';

const Cart = () => {
    
    const {items, deleteAll} = useContext(CartContext);
    //console.log("en el carrito " , items)

    return(
        <Container>
            <Table striped bordered hover size="sm" style={{marginTop: 50, marginBottom:40}}>
                <thead>
                    <tr>
                        <th></th>
                        <th>Producto</th>
                        <th>Cant </th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    
                    { items.lenght === 0 ?
                    
                        (<h3>Nada por acá </h3>  )
                        
                        : (items.map((prod) =>  
                            <CartItem product={prod} key={prod.id}/>  
                        ))
                    }
                        
                </tbody>
            </Table>

            <Row>
                <Col style={{paddingLeft: "4rem"}}>
                    <p>Total: $ </p><span>  </span>
                </Col>
                <Col>
                    <Button variant="outline-secondary" style={{marginRight: 9}} onClick={() => {deleteAll()}}>Vaciar Carrito</Button>
                    <Button variant="secondary" >Finalizar compra</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Cart