import {Link} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import imagen from "../assets/background.JPG";

const Contact = () => {

    const container = {
        display: "flex",
        width: "100%",
        justifyContent: "center",
        fontFamily: "georgia",
        marginTop: 50,
        flexWrap: "wrap-reverse",
    }
    const information ={
        backgroundImage: `url(${imagen})`, 
        padding: "20px 50px 40px 50px",
        color: "wheat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        boxShadow: "0 0 60px 0 rgba(0,0,0,.5)"
    }
    const contact = {
        backgroundColor: "#fafafa", 
        padding: "20px 50px 40px 50px", 
        boxShadow: "0 0 60px 0 rgba(0,0,0,.5)"
    }
    const input = {
        display: "flex",
        flexDirection: "column",
    }
    const infoInput = {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 30,
        marginTop: 20,
    }
    
    return(
        <div style={container}>
            <div style={information}>
                <h2 >Información de contacto</h2>
                <div >
                    <h5>Contacto:</h5>
                    <p>Denise Mayra Higa</p>
                </div>
                <div >
                    <h5>Mail:</h5>
                    <p>naturel@gmail.com.ar</p>
                </div>
                <div style={{display: "flex", justifyContent: "space-evenly"}}>
                    <Link to={"https://www.instagram.com/denuu.mayra/?hl=es-la"} style={{color:"wheat"}}> <FontAwesomeIcon icon={faInstagram} style={{fontSize: 40}}/> </Link>
                    <FontAwesomeIcon icon={faWhatsapp} style={{fontSize: 40, color: "wheat"}}/>
                </div>
            </div>
            <div style={contact}>
                <p>Si tenés alguna consulta, no dudes en contactarnos.</p>
                <form action="">
                    <div style={infoInput}>
                        <div style={input}>
                            <label for="name">Nombre y Apellido</label>
                            <input type="text" id="name" placeholder="Ingrese su nombre" />
                        </div>
                        <div style={input}>
                            <label for="mail">Correo Electrónico</label>
                            <input type="text" id="mail" placeholder="Ingrese su mail" />
                        </div>
                    </div>
                    <div style={input}> 
                        <label for="message">Mensaje</label>
                        <textarea name="" id="message" cols="30" rows="10" />
                    </div>
                </form>
                
            </div>
        
        </div>
    )
}

export default Contact;
