import { Container } from 'react-bootstrap';
import {useState, useEffect} from "react";

import ItemListContainer from './ItemListContainer';
//import Loading from './Loading';

import {collection, getDocs} from "firebase/firestore";
import {db} from "../firebase"

function Home() {

  const [prodArray, setProdArray] = useState([])
  const [prodList, setProdList] = useState()

  const setproducts = () =>{
    setProdList(prodArray)
  }

  useEffect(() => {
    const getFromFirebase = async () => {

      const query = collection(db, "items");
      //copia de la referencia de la base de datos
      const snapshot = await getDocs(query)

      snapshot.forEach((doc) => {
        //el id esta fuera del objeto y los datos se obtienen con data(). no funciona con map()

        const prodId = doc.id;
        console.log("🚀 ~ file: Home.jsx ~ line 30 ~ snapshot.forEach ~ prodId", prodId)
        
        
        prodArray.forEach(item => {
          console.log("en el foreach " , item.id)
          if(prodId === item.id){
            return null
          }
        })
        const {category, description, initial_quantity, price, sold_quantity, thumbnail, title} =  doc.data()
        const product = {
          id: prodId,
          category:category,
          description: description,
          initial_quantity: initial_quantity, 
          price: price,
          sold_quantity:sold_quantity,
          thumbnail:thumbnail, 
          title:title
        }
        setProdArray([...prodArray, product]) 
        console.log("ingreso un producto?")
        
      })
    }
    
    getFromFirebase()
    setproducts()
  }, []); 
console.log("array de productos", prodArray)
  console.log("array a renderizar", prodList)

  return (
    <Container >
      
      <ItemListContainer products={prodList}/>


    </Container>
  );
}

export default Home;

// -------------------------------------------------------------
//para traer algo en especifico a partir de los filtros
  /* useEffect(() => {
    
    const getFromFirebase = async () => {
      const q = query(collection((db), "items"), where("name", "==", "Shampoo Solido"))
      const snapshot = await getDocs(q)
      snapshot.forEach(doc => {
        console.log("el id es ", doc.id)
        console.log(doc.data())
      })
      const docRef = doc(db, "items", "i6ojulQF0nHEOp63ZTaI")
      const docSnapshot = await getDoc(docRef)
      console.log(docSnapshot.data())
    }
    getFromFirebase()
  }, []); */

 