import { useState } from "react"
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import {collection, addDoc} from "firebase/firestore"
import { db } from "../firebase";
import {getStorage, ref, uploadBytes} from "firebase/storage";

const AddProduct = () => {
    const [image, setImage] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        
        if(typeof image !== 'undefined'){
            console.log("imafgen",image);
            const imgid= image.lasModified;
            const storage = getStorage();
            const storageRef = ref(storage, `items/${imgid}`);

            uploadBytes(storageRef, image).then(snapshot => {
                console.log("archivo subido ", snapshot)
            }) 
        }
        //const thumbnail = image;
        const title = event.target.elements.title.value;
        const description = event.target.elements.description.value;
        const initial_quantity = event.target.elements.initial_quantity.value;
        const price = event.target.elements.price.value;
        const sold_quantity = event.target.elements.sold_quantity.value;
        const category = event.target.elements.category.value;

        addtoFirebase(title,description,initial_quantity,price,sold_quantity,category);
    }

    const addtoFirebase = async(title, description, initial_quantity, price, sold_quantity, category) => {
        
        addDoc(collection(db, "items"),{
            title: title,
            description: description,
            initial_quantity: initial_quantity,
            price: price,
            sold_quantity: sold_quantity,
            category: category,
            //thumbnail: thumbnail
        }).then(doc => {
            console.log("se creo el docu con el id ", doc.id)
        }).catch(err => {
            console.log(err)
        })
    }

    return(
        <Container style={{marginTop:50}}>
            <Form onSubmit={onSubmit}>
                <Form.Group as={Row} className="mb-3" controlId="title">
                    <Form.Label column sm="2">Nombre del producto </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="description">
                    <Form.Label column sm="2">Descripcion</Form.Label>
                    <Col sm="10">
                        <Form.Control type="textarea" rows={3} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="initial_quantity">
                    <Form.Label column sm="2">Stock inicial</Form.Label>
                    <Col sm="10">
                        <Form.Control type="number"  />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="price">
                    <Form.Label column sm="2">Precio</Form.Label>
                    <Col sm="10">
                        <Form.Control type="number" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="sold_quantity">
                    <Form.Label column sm="2">Vendidos </Form.Label>
                    <Col sm="10">
                        <Form.Control type="number"/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="category">
                    <Form.Label column sm="2">Categoria </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text"/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="thumbnail" onChange={(e)=>{setImage(e.target.files[0])}}>
                    <Form.Label column sm="2">Imagen URL </Form.Label>
                    <Col sm="10">
                        <Form.Control type="file"/>
                    </Col>
                </Form.Group>

                <Button variant="secondary" type="submit" style={{marginTop:30}}>Agregar Producto</Button>
            </Form>
        </Container>
    )
}

export default AddProduct