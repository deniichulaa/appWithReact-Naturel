

const Footer = () => {
    const style = {
        backgroundColor: "#ccb7ae",
        height: 200,
        marginTop: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    }
    const design = {
        borderTop: "solid rgb(117, 83, 83)",
        color: "#755353",
        padding: "20px 60px 0 60px",
        fontSize: 25,
        fontFamily: "georgia",
    }

    return(
        <div style={style}>
            <div style={design}>Web design by Denise Mayra</div>
        </div>
    )
}

export default Footer;