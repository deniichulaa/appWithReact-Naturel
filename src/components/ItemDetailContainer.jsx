
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {doc, getDoc} from "firebase/firestore";
import {db} from "../firebase"

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [product, setProduct] = useState(null)

    useEffect(() => {
        const getFromFirebase = async () => {
            const docRef = doc(db, "items", id)
            const docSnapshot = await getDoc(docRef)
            setProduct({id: docSnapshot.id, ...docSnapshot.data()})
        }
        getFromFirebase()
    }, []); 

    return(
        <>
            <Container style={{marginTop:50}}>
                {product ? <ItemDetail product={product} /> : null}
            </Container>
        </>
    )

}

export default ItemDetailContainer;