import React from 'react'
import './about.css'
import me from '../../assets/IMG_20221003_194451.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

function About(props) {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="About Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="content__cards">

            <article className="content__card">
              <FaAward className='content__icon'/>
              <h5>Experience</h5>
              <small>-----</small>
            </article>

            <article className="content__card">
              <FiUsers className='content__icon' />
              <h5>Clients</h5>
              <small>-----</small>
            </article>

            <article className="content__card">
              <VscFolderLibrary className='content__icon'/>
              <h5>Projects</h5>
              <small>-----</small>
            </article>
          </div>

        <p>
        Hard working college student with knowledge in programming language and data structure and algorithms. A critical thinker with the ability to build quality web websites and applications with HTML, CSS , Jvascript and Reactjs
        </p>

        <a href="#contact" className={`btn btn-primary ${props.activeNav=== '#contact' ?'active' :''}`} onClick ={props.contact}>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About
