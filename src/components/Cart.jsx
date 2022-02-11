import { Row, Table, Col, Button, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';
import {collection, addDoc} from "firebase/firestore";
import {db} from "../firebase"

const Cart = () => {
    //const [success, setSuccess] = useState()
    const {items, deleteAll, total} = useContext(CartContext);
    //console.log("en el carrito " , items)

    const checkout = () => {
        if(items.length === 0){
            alert("No tiene productos en el carrito")
        }
        
        const itemToBuy = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                price: item.price,
                qty: item.qty
            }
        })
        const buyer = {
            name: "Denu",
            phone: 1521762389,
            mail: "deniiise.mayra@gmail.com"
        }

        const order = { 
            buyer: buyer,
            items: itemToBuy,
            total: 123
        }

        addDoc( collection(db, "orders"), order)
        .then(doc => {
            console.log("todo correcto " , doc.id)
        })
        .catch(err => {
            console.log("algo salio mal " , err)
        })
    }
    

    return(
        <Container>
            { items.length === 0 ?
            
                (<h3 style={{textAlign: "center"}}>Nada por acá </h3> )
                
                : (
                    <div>
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
                    
                                { items.map((prod) =>  
                                <CartItem product={prod} key={prod.id}/>  
                                ) }
                            </tbody>
                        </Table>

                        <Row>
                            <Col style={{paddingLeft: "4rem"}}>
                                <p>Total: $ {total}</p>
                            </Col>
                            <Col>
                                <Button variant="outline-secondary" style={{marginRight: 9}} onClick={() => {deleteAll()}}>Vaciar Carrito</Button>
                                <Button variant="secondary" onClick={() => checkout()}>Finalizar compra</Button>
                            </Col>
                        </Row>
                    </div>
                )
            }

         
        </Container>
    )
}

export default Cart