import '../index.css'
import image from '../assets/banner.JPG'

const HomeBanner = () => {
    const banner = {
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: 300,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "wheat",
        fontWeight: 500,
    }
    return(
        <div style={banner}>
            <p style={{fontFamily: "Ballet", fontSize:60, paddingBottom: 15}}>Naturel</p>
            <p style={{fontFamily: "georgia", fontSize:30}}>Productos Naturales Para El Cuidado Personal</p>
        </div>
    )
}

export default HomeBanner;