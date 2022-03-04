import React, {useEffect, useRef} from 'react';
import lottie from 'lottie-web';

const LottieAnim = () => {
    const container = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current, // the dom element that will contain the animation
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require("../assets/desert.json") // the path to the animation json
          });
    }, [])

    return(
        <div style={{marginTop: 50}}>
            <div ref={container}></div>
        </div>
    )
}

export default LottieAnim;