
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {doc, getDoc} from "firebase/firestore";
import {db} from "../firebase"

import ItemDetail from "./ItemDetail";
import Loading from "./Loading";

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(false)

    const productDetail = (id) => {
        return fetch(`https://api.mercadolibre.com/items/${id}`)
            .then(data => data.json())
    }
    
    const productDescription = (id) => {
        return fetch(`https://api.mercadolibre.com/items/${id}/description`)
            .then(data => data.json())
    }


    useEffect(() => {

        if(id.includes("MLA")){
            let mounted = true
            Promise.all([productDetail(id), productDescription(id)]).then(results => {
                let item = results[0] 
                item.description = results[1].plain_text

                if(mounted){
                    setProduct(item)
                    setLoading(true)
                }
            })
        return () => mounted=false
        }
        else{
            const getFromFirebase = async () => {
                const docRef = doc(db, "items", id)
                const docSnapshot = await getDoc(docRef)
                setProduct({id: docSnapshot.id, ...docSnapshot.data()})
                setLoading(true)
            }
            getFromFirebase()
        }
        
    }, [id]); 

    return(
        <>
            <Container style={{marginTop:50}}>
                {loading ? <ItemDetail product={product} /> : <Loading/>}
            </Container>
        </>
    )

}

export default ItemDetailContainer;