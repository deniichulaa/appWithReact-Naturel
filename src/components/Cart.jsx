import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { Row, Table, Col, Button, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {collection, addDoc} from "firebase/firestore";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import {db} from "../firebase";

import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';
import LottieAnim from './LottieAnim';

const Cart = () => {
    const [success, setSuccess] = useState(false);
    const {items, setItems, deleteAll, total} = useContext(CartContext);
    //console.log("en el carrito " , items)

    const checkout = () => {
        if(items.length === 0){
            alert("No tiene productos en el carrito")
            return
        }
        const itemToBuy = items.map(item => {
            return {
                id: item.id,
                title: item.name,
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

        try {
            const docRef = addDoc(collection(db, "orders"), order);
            setSuccess(true);
            setItems([]);
        } catch (e) {
            console.log("algo salio mal: ", e);
        }

    }
    const succesStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        width:"100%",
        height:"100%",
        backgroundColor: "rgba(0,0,0,0.8)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "georgia",
    }
    const information ={
        color: "white", 
        fontSize: 40,
        marginBottom: 60,
    }
    
    return(
        <>
        <Container style={{fontFamily: "georgia"}}>
            { items.length === 0 ?
                <LottieAnim />
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
            (<div style={succesStyle}> 
                <p style={information}>Gracias por su Compra!</p>
                <FontAwesomeIcon icon={faCheckCircle} style={{fontSize:80, color:'white'}}/>
                <Button variant="outline-light" as={Link} to="/" style={{marginTop:100}}>Continuar Compras</Button>
            </div>)
        : null 
        }
        </>
    );
}

export default Cart