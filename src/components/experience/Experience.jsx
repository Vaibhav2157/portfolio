import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">

        <div className="experience__language">
           <h3>Languages</h3> 
           <div className="experience__content">
                <article className='experience__details'>
                    <BsPatchCheckFill className ='experience__details-icons'  />
                    <div>
                        <h4>C</h4>
                        <small className='text-light'>Experienced</small>
                    </div>  
                </article>

                <article className='experience__details'>
                    <BsPatchCheckFill className ='experience__details-icons' />
                    <div>
                        <h4>C++</h4>
                        <small className='text-light'>Experienced</small>
                    </div>     
                </article>

                <article className='experience__details'>
                    <BsPatchCheckFill className ='experience__details-icons' />
                    <div>
                        <h4>Java</h4>
                        <small className='text-light'>Intermidiate</small>
                    </div>                 
                </article>

                <article className='experience__details'>
                    <BsPatchCheckFill className ='experience__details-icons' />
                    <div>
                        <h4>Python</h4>
                        <small className='text-light'>Intermidiate</small>
                    </div>                   
                </article>

                <article className='experience__details'>
                    <BsPatchCheckFill className ='experience__details-icons' />
                    <div>
                        <h4>Rubi</h4>
                        <small className='text-light'>Intermidiate</small>
                    </div>                   
                </article>
           </div>
        </div>

        <div className="experience__frontend">
        <h3>Frontend Development</h3> 
           <div className="experience__content">
                <article className='experience__details'>
                    <BsPatchCheckFill className ='experience__details-icons' />
                    <div>
                        <h4>HTML</h4>
                        <small className='text-light'>Experienced</small>
                    </div>
                </article>

                <article className='experience__details'>
                    <BsPatchCheckFill className ='experience__details-icons' />
                    <div>
                        <h4>CSS</h4>
                        <small className='text-light'>Experienced</small>
                    </div>
                </article>

                <article className='experience__details'>
                    <BsPatchCheckFill className ='experience__details-icons' />
                    <div>
                        <h4>JavaScrpt</h4>
                        <small className='text-light'>Intermidiate</small>
                    </div>
                </article>

                <article className='experience__details'>
                    <BsPatchCheckFill className ='experience__details-icons' />
                    <div>
                        <h4>React</h4>
                        <small className='text-light'>Experienced</small>
                    </div>
                </article>

                <article className='experience__details'>
                    <BsPatchCheckFill className ='experience__details-icons' />
                    <div>
                        <h4>Bootstrap</h4>
                        <small className='text-light'>Intermidiate</small>
                    </div>
                </article>
           </div>
        </div>

      </div>

    </section>
  )
}

export default Experience
