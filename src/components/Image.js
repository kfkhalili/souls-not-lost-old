import React, { useState } from "react";

const Image = ({ image }) => {
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(true);
    };

    const onLeave = () => {
        setHover(false);
    };

    const getRandomSize = (min, max) => 
        Math.round(Math.random() * (max - min) + min);
    
    const height = getRandomSize(200,400).toString()+'px'

    const imgWrapStyle = {position:'relative', display:'inline-block'}
    const imgImgStyle = {height:height, verticalAlign:'bottom'}

    const imgDescriptionLayerStyle = {
        position:'absolute', top:0, bottom:0, left:0, right:0,
        background:'rgba(36, 62, 206, 0.6)', color:'#fff',
        visibility:'hidden', opacity:0, display:'flex',
        alignItems:'center', justifyContent:'center',
        transition:'opacity 0.2s, visibility 0.2s',
    }
    const imgDescriptionLayerHoverStyle = {
        position:'absolute', top:0, bottom:0, left:0, right:0,
        background:'rgba(36, 62, 206, 0.6)', color:'#fff',
        visibility:'visible', opacity:'1', display:'flex',
        alignItems:'center', justifyContent:'center',
        transition:'opacity 0.2s, visibility 0.2s',
    }

    const imgDescriptionStyle = {
        transition:'0.2s',
        transform:'translateY(1em)',
        textAlign:'center',
    }
    const imgDescriptionHoverStyle = {
        transition:'0.2s',
        transform:'translateY(0)',
        textAlign:'center',
    }

    return (
    <figure className="img__wrap" onMouseEnter={onHover} onMouseLeave={onLeave} style={imgWrapStyle}>
        <img className="img__img" style={imgImgStyle} src={image.url} alt={image.name}/>
            { hover ? 
            <div id="img__description_layer" style={imgDescriptionLayerHoverStyle} className="img__description_layer">
            <h1 className="img__description" style={imgDescriptionHoverStyle}>{image.name}</h1>
            </div>
            :
            <div id="img__description_layer" style={imgDescriptionLayerStyle} className="img__description_layer">
            <h1 className="img__description" style={imgDescriptionStyle}>{image.name}</h1>
            </div>
            }
    </figure>
  )
}

export default Image