/* import react from "react"; */
import { Button, Card, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from "./ItemCount";

const Item = ({product}) => {

    console.log("en item ", product)
    const {id, category, name, price,img, stock} = product
    //console.log("🚀 ~ file: Item.jsx ~ line 10 ~ Item ~ img", img)

    const cardContainer = {
        marginRight: 30
    }

    const cardDesc= {
        textAling: "center",
    }

    return (

        <>
            <div Id={id}>

                <Card style={{ width: '18rem' }} style={cardContainer} >
                    <Card.Img variant="top" src={img} />
                    <Card.Body style={cardDesc}> 
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {price}
                        </Card.Text>
                        <ItemCount stock={stock}/>
                        <Button variant="outline-secondary">Ver Detalle</Button>
                    </Card.Body>
                </Card>
            </div>
            
        
        </>


    )
}

export default Item 
