import React from 'react'
import '../stylesheets/Home.css'
import Header from './Header'
import Footer from './Footer'
import photoImg from '../assets/images/artist_photo.jpg'

const Home = (props) => {
  return (
    <div className={'Content'} id={'Home'}>
      <Header/>
      <div className="ArtistPhotoAndDesc">
        <span className="ArtistShortDesc">
          The best thing I've ever seen.  This kid has a future.
          <br/>
          <br/>
          - <em>Something Times</em>
        </span>
        <img src={photoImg} alt="Artist photo"/>
      </div>
      <Footer />
    </div>
  )
}

export default Home