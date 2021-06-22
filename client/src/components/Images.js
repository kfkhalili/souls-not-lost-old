import Image from "./Image/Image";
import './Images.css'

const Images = ({ images }) => {

  return (
    <div id="imagesContainer">
      {images.map((image, index) => (
        <Image key={index} image={image} />
      ))}
    </div>
  );
};

export default Images;
