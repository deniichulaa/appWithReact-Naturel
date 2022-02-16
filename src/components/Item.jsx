/* import react from "react"; */
import { Button, Card, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useNavigate } from 'react-router-dom';

const Item = ({product}) => {

    console.log("en item ", product);
    
    const {id, title, thumbnail, price } = product;

    const navigate = useNavigate()
    const details = () => {
        navigate(`/product/${id}`)
    }
   
    const cardStyle = {
        boxShadow: "0 0 30px 0 rgba(0,0,0,.3)",
        
    }

    return (

        <>

            <Card style={cardStyle}>
                <Card.Img variant="top" src={thumbnail} style={{widht: 300}}/>
                <Card.Body style={{textAlign:"center", fontFamily:"georgia"}}> 
                    <Card.Title style={{fontSize: "1.2rem"}}>{title}</Card.Title>
                    <Card.Text style={{fontSize: "1rem"}}>
                        $ {price}
                    </Card.Text>
                    <Button variant="outline-secondary" onClick={() => details()}>Ver Detalle</Button>
                </Card.Body>
            </Card>
        </>
        
    )
}

export default Item 
