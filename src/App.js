import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Images from './components/Images'
import About from './components/About'

const App = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const imagesFromServer = [
        {name: 'Ghassan Kanafani', url: 'https://images.gr-assets.com/authors/1506632700p8/16473822.jpg',},
        {name: 'Yusuf Abu Hussein', url: 'https://www.egypttoday.com/siteimages/Larg/202105190238173817.jpg',},
        {name: 'Razan Al Najjar', url: 'https://www.medico.de/fileadmin/_processed_/6/a/csm_Razan_Al-Najja_dc6cf4f633.jpg',},
        {name: 'Ali Abu Alia', url:'https://live-production.wcms.abc-cdn.net.au/f8ac396c7bcce4e317819445ebb1a4a0',},
        {name: 'Tom Hurndall', url:'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/cartoons/2010/7/20/1279616891136/Tom-Hurndall-006.jpg?width=620&quality=45&auto=format&fit=max&dpr=2&s=ba2bb33c5b24a9c0d8556f192ebae014',},
        {name: 'Wadie Haddad', url: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Wadie_Addad2.jpg'},
        {name: 'Ahmed Bouchikhi', url: 'https://upload.wikimedia.org/wikipedia/en/7/71/Ahmed_Bouchiki.jpg'},
        {name: 'Imad Mughniyeh', url: 'https://upload.wikimedia.org/wikipedia/en/e/ed/Imad_Mughniyeh.jpeg'}
      ]
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




