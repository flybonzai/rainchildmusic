import React from 'react'
import {Link} from 'react-router-dom'
import '../stylesheets/Navbar.css';

const Navbar = (props) => {
  return (
      <div className={'Navbar'}>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/music'}>Music</Link>
        <Link to={'/blog'}>Blog</Link>
        <Link to={'/store'}>Store</Link>
      </div>
  )
}

export default Navbar