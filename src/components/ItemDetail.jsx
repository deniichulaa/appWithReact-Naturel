import {Container, Row, Col, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemDetail = ({name, img, ubi, price}) => {



    return(
        <Container>
            <Row>
                <Col>
                    <img src={img} alt="" style={{height:300}} />
                </Col>
                <Col>
                    <h3>{name}</h3>

                    <p style={{fontSize:30}}>$ {price}</p>
                    <p>Estamos en {ubi}</p>

                    <Button variant="secondary">Comprar</Button>{' '}
                    <Button variant="outline-dark">Agregar al Carrito</Button>
                </Col>
               
                    
                
            </Row>
            
        </Container>
    )
}

export default ItemDetail