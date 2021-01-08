import React from 'react'
import '../stylesheets/Home.css'
import Header from './Header'
import photoImg from '../assets/images/artist_photo.jpg';

const Home = (props) => {
  return (
    <div className={'Content'} id={'Home'}>
      <Header />
      <div className="ArtistPhotoAndDesc">
        <span className="ArtistShortDesc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <br />
          <br />
          Sem nulla pharetra diam sit amet nisl suscipit. Suspendisse faucibus interdum posuere lorem ipsum. Integer malesuada nunc vel risus commodo 
          <br />
          <br />
          viverra maecenas accumsan lacus. Sodales neque sodales ut etiam sit. Eleifend donec pretium vulputate sapien nec. Amet justo donec enim diam vulputate. Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit. Mi proin sed libero enim sed faucibus turpis in eu. Pellentesque nec nam aliquam sem et.
          <br />
          <br />
          - <em>Something Times</em>
        </span>
        <img src={photoImg} alt="Artist photo" />
      </div>
    </div>
  )
}

export default Home;