import React from 'react'
import './contact.css'
import {CgMail} from 'react-icons/cg'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {useState} from 'react'

function Contact(props) {
  const form = useRef();
  const[name , setName] = useState('');
  const[email , setEmail] = useState('');
  const[text , setText] = useState('');
  // const[alert, setAlert] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jesqpbs', 'template_k6juuug', form.current, '1u6pWqQLfKtReSd0U')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    let newtext = ''
    setName(newtext) 
    setEmail(newtext) 
    setText(newtext) 

    
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
            <article className="contact__option">
              <CgMail className='contact__option-icon' />
              <h4>Email</h4>
              <h5 className='text-light'>vaibhavdesale103@gmail.com</h5>
              <a href="mailto:vaibhavdesale103@gmail.com" target='_blank'>Send a message</a>
            </article>

            <article className="contact__option">
              <RiMessengerLine className='contact__option-icon'/>
              <h4>Messanger</h4>
              <h5 className='text-light'>vaibhavdesale</h5>
              <a href="">Send a message</a>
            </article>

            <article className="contact__option">
              <BsWhatsapp className='contact__option-icon'/>
              <h4>WhatsApp</h4>
              <h5 className='text-light'>+917875543720</h5>
              <a href="">Send a message</a>
            </article> 
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" value={name} onChange={(event)=>setName(event.target.value)} placeholder='Your Full Name' required/>
          <input type="email" name='email' value={email} onChange={(event)=>setEmail(event.target.value)} placeholder='Your Email' required/>
          <textarea name="message" rows="7" value={text} onChange={(event)=>setText(event.target.value)} placeholder='Your Message' required></textarea>

          <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>
      </div>
    </section>
  )
}

export default Contact
