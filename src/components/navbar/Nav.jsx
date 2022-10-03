import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {TbMessage} from 'react-icons/tb'
import {BiBook} from 'react-icons/bi'
import './nav.css'
// import {useState} from 'react'


function Nav(props) {
  // const [acticeNav , setActiveNav] = useState('#')
  // ()=> setActiveNav('#about')
  return (
    <nav>
      <a href="#" onClick={props.home} className={props.acticeNav=== '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={props.about} className={props.acticeNav=== '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={props.experience} className={props.acticeNav=== '#experience' ? 'active' : ''}><BiBook /></a>
      <a href="#contact" onClick={props.contact} className={props.acticeNav=== '#contact' ? 'active' : ''} ><TbMessage /></a>
    </nav>
  )
}

export default Nav
