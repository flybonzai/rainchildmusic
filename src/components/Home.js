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
          A shirtful of sand, and organs created from stone...
          <br/>
          Here's to finding a way back home
          <br/>
          <br/>
          - <em>Bones</em>
        </span>
        <img src={photoImg} alt="Artist photo"/>
      </div>
      <Footer />
    </div>
  )
}

export default Home