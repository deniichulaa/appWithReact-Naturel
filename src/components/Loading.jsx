import {Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Loading = () => {

    const spinnerStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        width:"100%",
        height:"100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }

    return(
        <div style={spinnerStyle}>
            <Spinner animation="grow" variant="light" />
        </div>
        
    )
}

export default Loading;
