import {useState, useEffect} from 'react';
import Loading from './Loading';
import { Container } from 'react-bootstrap';
import ItemListContainer from './ItemListContainer';

const Meli = () => {
    const [apiProducts, setApiProducts] = useState([])

    const meliProducts = (category) => {
        return fetch(`https://api.mercadolibre.com/sites/MLA/search?category=${category}`)
        .then(data => data.json())
    }
  
    useEffect(() => {
        let mounted = true
        meliProducts("MLA1246").then(item => {
            if(mounted){
              setApiProducts(item.results)
              setTimeout(() => {
                <Loading/>
              },3000)
            }
        })
        return () => mounted = false
    }, []) 

    return (
        <Container >
          <ItemListContainer products={apiProducts}/>
        </Container>
    );
}

export default Meli