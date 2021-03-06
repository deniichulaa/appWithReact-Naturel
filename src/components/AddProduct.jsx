import { useState } from "react";
import {Link} from "react-router-dom";

import { Button, Container, Form, Row, Col } from "react-bootstrap";
import {collection, addDoc} from "firebase/firestore"
import { db } from "../firebase";
import {getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const AddProduct = () => {
    const [image, setImage] = useState('');
    const [success, setSuccess] = useState(false)

    const onSubmit = (event) => {
        event.preventDefault();
        const title = event.target.elements.title.value;
        const description = event.target.elements.description.value;
        const initial_quantity = event.target.elements.initial_quantity.value;
        const price = event.target.elements.price.value;
        const sold_quantity = event.target.elements.sold_quantity.value;
        const category = event.target.elements.category.value;

        addtoFirebase(title,description,initial_quantity,price,sold_quantity,category);
        setSuccess(true);
    }

    const addtoFirebase = async(title, description, initial_quantity, price, sold_quantity, category) => {
        let imageUrl = ""
        if(typeof image !== 'undefined'){
            const storage = getStorage();
            const imageName = (+new Date).toString(36);
            const storageRef = ref(storage, `items/${imageName}`);

            const uploadTask = await uploadBytes(storageRef, image)
            imageUrl = await getDownloadURL(uploadTask.ref)
        }

        addDoc( collection(db, "items"),{
            title: title,
            description: description,
            initial_quantity: initial_quantity,
            price: price,
            sold_quantity: sold_quantity,
            category: category,
            thumbnail: imageUrl
        }).then(doc => {
            console.log("se creo el docu con el id ", doc.id)
        }).catch(err => {
            console.log(err)
        })
    }

    const succesStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        width:"100%",
        height:"100%",
        backgroundColor: "rgba(0,0,0,0.8)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "georgia",
    }
    const information ={
        color: "white", 
        fontSize: 40,
        marginBottom: 60,
    }
    const refreshPage = () => {
        window.location.reload(false);
    }

    return(
        <>
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
        {success ?
            (<div style={succesStyle}> 
                <p style={information}>Producto Agregado Correctamente!</p>
                <FontAwesomeIcon icon={faCheckCircle} style={{fontSize:80, color:'white', marginBottom: 100}}/>
                <Button variant="outline-light" as={Link} to="/" style={{marginBottom: 20}}>Ir al inicio</Button>
                <Button variant="outline-light" onClick={() => refreshPage()} >Agregar otro Producto</Button>
            </div>)
        : null 
        }
        </>
    )
}

export default AddProduct