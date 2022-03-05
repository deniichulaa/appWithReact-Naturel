import { useParams } from "react-router-dom";

import { Container } from "react-bootstrap";


const CategoryId = () => {
    const {id} = useParams();
    /* const [prodList, setProdList] = useState()
    const [loading, setLoading] = useState(false)
    
    const filterId = () => {
        const filterbyId = prodList.filter(prod => prod.category === id)
        setProdList(filterbyId)
    } */

   // obtener la lista de productos desde el context y renderizar 
   // Home.jsx:16 Uncaught TypeError: Cannot destructure property 'setProducts' of '(0 , react__WEBPACK_IMPORTED_MODULE_0__.useContext)(...)' as it is undefined.

    return(
        <Container>
           <p>proximamente apareceran los productos de la categoria {id}</p>
        </Container>
    )
}

export default CategoryId