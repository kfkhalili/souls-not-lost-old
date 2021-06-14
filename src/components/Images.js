import Image from './Image'

const Images = ({ images }) => {
  return (
    <>
      {images.map((image, index) => (
        <Image key={index} image={image}/>
      ))}
    </>
  )
}

export default Images