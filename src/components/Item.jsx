/* import react from "react"; */
import { Button, Card, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useNavigate } from 'react-router-dom';

const Item = ({product}) => {

    //console.log("en item ", product);
    const {id, title, thumbnail, price } = product;
    

    const cardContainer = {
        marginRight: 20, 
        marginLeft: 20,
        marginBottom: 50,
        width: '15rem',
    }

    const navigate = useNavigate()
    const details = () => {
        navigate(`/product/${id}`)
    }
   
    return (

        <div Id={id} style={cardContainer}>

            <Card>
                <Card.Img variant="top" src={thumbnail} />
                <Card.Body style={{textAlign:"center", fontFamily:"georgia"}}> 
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        $ {price}
                    </Card.Text>
                    <Button variant="outline-secondary" onClick={() => details()}>Ver Detalle</Button>
                </Card.Body>
            </Card>
        </div>
        
    )
}

export default Item 
