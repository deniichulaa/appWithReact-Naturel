import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const UpButton = () => {


    return(
        <Link to={""} style={{color:"#755353"}}> <FontAwesomeIcon icon={faShoppingCart} pull="right" style={{height: 35}}/> </Link>

    )
}

export default UpButton