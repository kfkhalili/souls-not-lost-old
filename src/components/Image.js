import React, { useState } from "react";

const Image = ({ image }) => {
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(true);
    };

    const onLeave = () => {
        setHover(false);
    };

    const imgDescriptionLayerStyle = {
        position:'absolute', top:0, bottom:0, left:0, right:0,
        background:'rgba(36, 62, 206, 0.6)', color:'#fff',
        display:'flex', alignItems:'center', justifyContent:'center',
        transition:'opacity 0.2s, visibility 0.2s',
    }
    const imgDescriptionLayerNoHoverStyle = Object.assign(
        {}, imgDescriptionLayerStyle, { visibility:'hidden', opacity:0 })
    const imgDescriptionLayerHoverStyle = Object.assign(
        {}, imgDescriptionLayerStyle, { visibility:'visible', opacity:'1' })

    const imgDescriptionStyle = {
        transition:'0.2s',
        textAlign:'center',
    }
    const imgDescriptionNoHoverStyle = Object.assign(
        {}, imgDescriptionStyle, { transform: 'translateY(1em)' })
    const imgDescriptionHoverStyle = Object.assign(
        {}, imgDescriptionStyle, { transform: 'translateY(0)' })

    return (
    <figure className="img__wrap" onMouseEnter={onHover} onMouseLeave={onLeave} style={{position:'relative'}}>
        <img className="img__img" src={image.url} alt={image.name}/>
            { hover ? 
            <div id="img__description_layer" style={imgDescriptionLayerHoverStyle} className="img__description_layer">
            <h1 className="img__description" style={imgDescriptionHoverStyle}>{image.name}</h1>
            </div>
            :
            <div id="img__description_layer" style={imgDescriptionLayerNoHoverStyle} className="img__description_layer">
            <h1 className="img__description" style={imgDescriptionNoHoverStyle}>{image.name}</h1>
            </div>
            }
    </figure>
  )
}

export default Image