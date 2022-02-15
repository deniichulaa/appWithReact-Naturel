import { Row, Table, Col, Button, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';
import {collection, addDoc} from "firebase/firestore";
import {db} from "../firebase"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Cart = () => {
    const [success, setSuccess] = useState(false);
    const [orderId, setOrderId] = useState("")
    const {items, deleteAll, total} = useContext(CartContext);
    //console.log("en el carrito " , items)

    const checkout = () => {
        if(items.length === 0){
            alert("No tiene productos en el carrito")
            return
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
            phone: "1521762389",
            mail: "deniiise.mayra@gmail.com"
        }
        const order = { 
            buyer: buyer,
            items: itemToBuy,
            total: {total},
            date: new Date()
        }

        addDoc(collection(db, "orders"), order)
        .then(doc => {
            setOrderId(doc.id)
            setSuccess(true)
            console.log("todo correcto, el id del documento es ", doc.id)
        })
        .catch(err => {
            console.log("algo salio mal ",err)
        })
    }
    
    const succesStyle = {
        top: 0,
        left: 0,
        width:"100%",
        height:"100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItem: "center",
    }
    return(
        <>
        <Container>
            { items.length === 0 ?
            
                (<h3 style={{textAlign: "center", marginTop:80}}>Nada por acá </h3> )
                
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

        {success ?
            (<div style={succesStyle}> <FontAwesomeIcon icon="fa-solid fa-circle-check" /></div>)
        : null 
        }
        
        </>
    )
}

export default Cart