import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Images from './components/Images'
import About from './components/About'

const App = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    const getImages = async () => {
      const imagesFromServer = [{name: "Ghassan", url: "https://images.gr-assets.com/authors/1506632700p8/16473822.jpg"}]
      setImages(imagesFromServer)
    }

    getImages()
  }, [])

  return (
    <Router>
      <div className='container'>
        <Route
          path='/'
          exact
          render={(props) => (
            <>
              {images.length > 0 ? (
                <Images
                  images={images}
                />
              ) : (
                'No Images To Show'
              )}
            </>
          )}
        />
        <Route path='/about' component={About} />
        <Footer />
      </div>
    </Router>
  )
}

export default App




