import React from 'react'
import '../stylesheets/Home.css'
import Navbar from './Navbar'

const Home = (props) => {
  return (
    <div className={'Content'} id={'Home'}>
      <Navbar />
      Hello from home
    </div>
  )
}

export default Home;