import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'


function Footer(props) {
  return (
    <footer>
      <a href="#" className='footer__logo' onClick={props.home}>VAIBHAV</a>

      <ul className='permalinks'>
        <li><a href="#" onClick={props.home}>Home</a></li>
        <li><a href="#about" onClick={props.about}>About</a></li>
        <li><a href="#experience" onClick={props.experience}>Experience</a></li>
        <li><a href="#contact" onClick={props.contact}>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com" target='_blank' rel='noreferrer'><FaFacebook /></a>
        <a href="https://www.instagram.com" target='_blank' rel='noreferrer'><FiInstagram /></a>
        <a href="https://www.twitter.com" target='_blank' rel='noreferrer'
        ><IoLogoTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Vaibhav Desale ,All rights reserved </small>
      </div>
    </footer>
  )
}

export default Footer
