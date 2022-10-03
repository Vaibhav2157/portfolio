import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import me from '../../assets/IMG20220328101504.jpg'

function Header(props) {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Vaibhav Desale</h1>
        <h5 className="text-light">Frontend Developer</h5>

        <CTA actheadcontact={props.contact} actheadactivNav={props.activNav}/>
        <HeaderSocials />

        <div className="me">
            <img className='my__img' src={me} alt="me" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
 
      </div>
    </header>
  )
}

export default Header
