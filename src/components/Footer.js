import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faTwitterSquare} from "@fortawesome/free-brands-svg-icons"
import '../stylesheets/Footer.css'

const Footer = (props) => {
  return (
    <div className={'Footer'}>
      <div className={'SocialMediaLinks'}>
        <FontAwesomeIcon icon={faFacebook} size={'3x'} color={'white'}/>
        <FontAwesomeIcon icon={faTwitterSquare} size={'3x'} color={'white'}/>
      </div>
    </div>
  )
}

export default Footer