import React from 'react'
import {Link} from 'react-router-dom'
import '../stylesheets/Navbar.css';

const Navbar = (props) => {
  return (
    <div className={'navbar'}>
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <Link to={'/shows'}>Shows</Link>
      <Link to={'/music'}>Music</Link>
      <Link to={'/store'}>Store</Link>
    </div>
  )
}

export default Navbar