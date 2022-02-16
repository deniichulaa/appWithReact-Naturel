import { Container } from 'react-bootstrap';
import {useState, useEffect} from "react";

import {collection, getDocs} from "firebase/firestore";
import {db} from "../firebase"

import ItemListContainer from './ItemListContainer';
//import Loading from './Loading';


function Home() {

  const prodArray = []
  const [prodList, setProdList] = useState()
  

  useEffect(() => {
    const getFromFirebase = async () => {

      const query = collection(db, "items");
      const snapshot = await getDocs(query)

      snapshot.forEach((doc) => {
        //el id esta fuera del objeto y los datos se obtienen con data(). no funciona con map()

        const prodId = doc.id;
        
        prodArray.forEach(item => {
          if(prodId === item.id){
            return null
          }
        })
        const {category, description, initial_quantity, price, sold_quantity, thumbnail, title} =  doc.data();
        const product = {
          id: prodId,
          category:category,
          description: description,
          initial_quantity: initial_quantity, 
          price: price,
          sold_quantity:sold_quantity,
          thumbnail:thumbnail, 
          title:title
        };
        prodArray.push(product);
        console.log("🚀 ~ file: Home.jsx ~ line 51 ~ snapshot.forEach ~ prodArray", prodArray)
        
      })
    }
    
    getFromFirebase()
    
    setProdList(prodArray)
    
  }, []); 
console.log("🚀 ~ file: Home.jsx ~ line 14 ~ Home ~ prodList", prodList)

  return (
    <Container >
      
      <ItemListContainer products={prodList}/>

    </Container>
  );
}

export default Home;


 