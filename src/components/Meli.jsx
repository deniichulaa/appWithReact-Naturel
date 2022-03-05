import React, {useState, useEffect} from 'react';

import { Container } from 'react-bootstrap';

import Loading from './Loading';
import ItemListContainer from './ItemListContainer';

const Meli = () => {
    const [apiProducts, setApiProducts] = useState([])
    const [loading, setLoading] = useState(false)

    const meliProducts = (category) => {
        return fetch(`https://api.mercadolibre.com/sites/MLA/search?category=${category}`)
        .then(data => data.json())
    }
    console.log("se renderizo meli")
  
    useEffect(() => {
        let mounted = true
        meliProducts("MLA1246").then(item => {
            if(mounted){
              setApiProducts(item.results)
              
              setTimeout(() => {
                setLoading(true)
              },2000)
            }
        })
        return () => mounted = false
    }, []) 

    return (
        <Container>
         
          {loading ? 
            <ItemListContainer products={apiProducts}/>  
            : <Loading />
          }
          
        </Container>
    );
}

export default Meli;