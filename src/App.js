import React from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Nav from './components/navbar/Nav'
import { useState} from 'react';

export default function App() {

  const [acticeNav , setActiveNav] = useState('#')
 

  const acthome = ()=> {
    setActiveNav('#')
  }

  const actabout = ()=> {
    setActiveNav('#about')
  }

  const actexperience = ()=> {
    setActiveNav('#experience')
  }

  const actcontact = ()=> {
    setActiveNav('#contact')
  }

  return (
    <div>
      <Header contact={actcontact} acticeNav={acticeNav}/>
      <Nav home={acthome} about={actabout} experience={actexperience} contact={actcontact} acticeNav={acticeNav}/>
      <About contact={actcontact} acticeNav={acticeNav}/>
      <Experience />
      <Contact />
      <Footer home={acthome} about={actabout} experience={actexperience} contact={actcontact} acticeNav={acticeNav}/>
    </div>
  )
}
