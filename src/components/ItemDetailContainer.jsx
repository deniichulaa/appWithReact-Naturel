
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemDetailContainer = () => {
    const {id} = useParams();

    const productDetail = (id) => {
        return fetch(`https://api.mercadolibre.com/items/${id}`)
            .then(data => data.json())
    }
    
    const productDescription = (id) => {
        return fetch(`https://api.mercadolibre.com/items/${id}/description`)
            .then(data => data.json())
    }

    const [product, setProduct] = useState(null)
    useEffect(() => {
        let mounted = true
        Promise.all([productDetail(id), productDescription(id)]).then(results => {
            let item = results[0] 
            item.description = results[1].plain_text

            if(mounted){
                setProduct(item)
            }
        })
        return () => mounted=false
    }, [id]);

   

    return(
        <>
            <Container style={{marginTop:50}}>
                {product ? <ItemDetail product={product} /> : null}
            </Container>
        </>
    )

}

export default ItemDetailContainer;