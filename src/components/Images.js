import React from "react";

import Image from "./Image";
import './Images.css'

const Images = ({ images }) => {
  const imagesContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    float: "left",
  };

  return (
    <div className="imagesContainer" style={imagesContainerStyle}>
      {images.map((image, index) => (
        <Image key={index} image={image} />
      ))}
    </div>
  );
};

export default Images;
