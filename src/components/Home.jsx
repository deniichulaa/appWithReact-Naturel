import { Container } from 'react-bootstrap';
import {useState, useEffect} from "react";

import ItemListContainer from './ItemListContainer';
import Loading from './Loading';


function Home() {

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

  //console.log(apiProducts)


  return (
    <Container >
      
      <ItemListContainer products={apiProducts}/>


    </Container>
  );
}

export default Home;
