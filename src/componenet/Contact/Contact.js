import React, { useState } from 'react';
import svg from "../../cont.svg";
import "./contact.css"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {

    const form = useRef();
    const [input , setInput] = useState({
        name:"",
        email:"",
        textarea:""
      })
    

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kuv1l9e', 'template_d25jrp6', form.current, 'vqCFLk2iKYYKNXLX_')
      .then((result) => {
          alert("Email sent, We will contact you soon :)");
          setInput({
            name:"",
            email:"",
            textarea:""
          })
      }, (error) => {
          alert("Something went wrong, Try again later :(");
      });
  };

  return (
    <div className='contact'>
        <div className='contact-image'>
            <img src={svg} alt='svg contact' />
        </div>
        <form className='contact-form' ref={form} onSubmit={sendEmail}>
              <h4>Contact Us</h4>
              <div className='input-name input'>
                  <span>Name :</span>
                  <input type="text" required name='user_name' value={input.name} onChange={(e)=>setInput(e.target.value)} />
              </div>
              <div className='input-email input'>
                  <span>Email :</span>
                  <input type="email" required name='user_email' value={input.email} onChange={(e)=>setInput(e.target.value)}/>
              </div>
              <div className='input-textarea input'>
                  <span>Message :</span>
                  <textarea type="text" rows="5" cols="5" required name='message' value={input.textarea} onChange={(e)=>setInput(e.target.value)} />
              </div>
              <button className='send' type='submit'>Send</button>
          </form>
    </div>
  )
}

export default Contact
