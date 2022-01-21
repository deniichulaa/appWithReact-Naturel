/* import react from "react"; */
import { Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from "./ItemCount";

const Item = (img, name, price, stock) => {


    return (
        <div>
            <div> <img src={img} alt={name}/></div>
            <div>
                <h4>{name}</h4>
                <p>{price}</p>
                <Button variant="outline-secondary">Ver detalle</Button>{' '}

                <ItemCount stock={stock} />
            </div>
        </div>
    )
}

export default Item 
