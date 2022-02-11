import { Container } from 'react-bootstrap';
import {useState, useEffect} from "react";

import ItemListContainer from './ItemListContainer';
//import Loading from './Loading';

import {collection, getDocs} from "firebase/firestore";
import {db} from "../firebase"

function Home() {

  const [prodList, setProdList] = useState([])

  useEffect(() => {
    const getFromFirebase = async () => {

      const query = collection(db, "items");
      //copia de la referencia de la base de datos
      const snapshot = await getDocs(query)

      snapshot.forEach((doc) => {
        //el id esta en otro lado y los datos se obtienen con data(). no funciona con map()
        //console.log("el id es ", doc.id)
        //console.log(doc.data())

        const prodId = doc.id;

        const isinList = prodList.every(item => {
          console.log("en el home " , item.id)
          return item.id !== prodId;
        })

        if(isinList){
          setProdList([...prodList, {id: prodId, ...doc.data()}]) 
        }
        else{return null}
        
      })
    }
    getFromFirebase()
  }, []); 

  console.log("en el array de productos",prodList)
  
  

  return (
    <Container >
      
      <ItemListContainer products={prodList}/>


    </Container>
  );
}

export default Home;

// -------------------------------- API DE MERCADOLIBRE ------------------------------
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

  /* const [apiProducts, setApiProducts] = useState([])

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
  }, []) */

  //console.log(apiProducts)