import { Container } from 'react-bootstrap';
import React, {useState, useEffect, memo} from "react";

import {collection, getDocs} from "firebase/firestore";
import {db} from "../firebase"

import ItemListContainer from './ItemListContainer';
import Loading from './Loading';


const Home = memo(() => {
  console.log("ESTOY EN EL HOME ")

  const prodArray = []
  const [prodList, setProdList] = useState()
  const [loading, setLoading] = useState(false)
  
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
    setLoading(true)
    
  }, []); 
  
console.log("🚀 ~ file: Home.jsx ~ line 14 ~ Home ~ prodList", prodList)

  return (
    <Container >
      {
        prodList !== undefined &&
        (loading ? <ItemListContainer products={prodList}/> : <Loading />)
      }
    </Container>
  );
})

export default Home;


 