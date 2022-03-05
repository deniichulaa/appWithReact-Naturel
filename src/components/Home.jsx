import React, {useState, useEffect, useContext} from "react";

import { Container } from 'react-bootstrap';
import {collection, getDocs} from "firebase/firestore";
import {db} from "../firebase"

import ItemListContainer from './ItemListContainer';
import Loading from './Loading';
import ProdContext from '../context/ProdContext'
import HomeBanner from "./HomeBanner";

const Home = () => {
  const [prodList, setProdList] = useState();
  const [loading, setLoading] = useState(false);

  //const {setProducts} = useContext(ProdContext);
  
  useEffect(() => {
    const getFromFirebase = async () => {
      const query = collection(db, "items");
      const snapshot = await getDocs(query)
      const prodArray =  snapshot.docs.map( (doc) =>  ({ id: doc.id, ...doc.data() }))
      setProdList(prodArray)
      //setProducts(prodArray)
      setTimeout(() => {
        setLoading(true)
      },1000)
    }
    getFromFirebase()
  }, []); 
  
  return (
    <>
      <HomeBanner/>
      <Container >
        {
          prodList !== undefined &&
          (loading ? <ItemListContainer products={prodList}/> : <Loading />)
        }
      </Container>
    </>
  );
}

export default Home;