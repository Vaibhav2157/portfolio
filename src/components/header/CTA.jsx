import React from 'react'
import CV from "../../assets/MyResume.pdf"

function CTA(props) {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>Download CV</a>
      <a href="#contact" className={`btn btn-primary ${props.actheadactivNav=== '#contact' ? 'active' : ''}`} onClick={props.actheadcontact} >Let's Talk</a>
    </div>
  )
}

export default CTA
