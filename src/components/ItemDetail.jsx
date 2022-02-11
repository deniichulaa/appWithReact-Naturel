import { Row, Col, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from "./ItemCount"
import {useState} from "react";
import {Link} from "react-router-dom";

const ItemDetail = ({product}) => {

    //console.log("en item detail ", product )
    const {thumbnail, title, price , initial_quantity, description, sold_quantity} = product

    const [butonOnAdd, setButonOnAdd] = useState(true);
    const [qty, setQty] = useState(1); //estado del contador 

 
    return(
        <>
            <Row style={{textAlign: "center"}}>
                <Col>
                    <img src={thumbnail} alt="Imagen del Producto" style={{height:300}} />
                </Col>
                <Col>
                    
                    <p>{sold_quantity} vendidos</p>
                    <h2>{title}</h2>

                    <p style={{fontSize:30}}>$ {price}</p>
                    <p>Estamos en Villa Ballester </p>
                    <p>stock: {initial_quantity}</p>

                    {butonOnAdd ? 
                        <ItemCount product={product} qty={qty} setQty={setQty} setButonOnAdd={setButonOnAdd}/> 
                        : ( <div>
                                <Link to ={"/cart"}> <Button variant="secondary" >Finalizar compra</Button></Link>
                            </div>
                        )
                    }
                    
                </Col>
               
            </Row>
            <Row>
                <div style={{marginTop: 80}}>
                    <h3>Descripción del producto</h3>
                    <div>
                        {description}
                    </div>
                    
                </div>
            </Row>
            
        </>
    )
}

export default ItemDetail