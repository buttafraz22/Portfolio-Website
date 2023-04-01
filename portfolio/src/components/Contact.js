import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();
  const [clear, setClear] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cq0yvn9', 'template_i0gvj09', form.current, 'bCzBaxDrsO6hT9K36')
      .then((result) => {
          console.log(result.text);
          
      }, (error) => {
          console.log(error.text);
          
      });

      setClear('')
      setMessage('')
      setEmail('')
  };
  function handleInputChange(event) {
    setClear(event.target.value);
  }
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handleMessageChange(event) {
    setMessage(event.target.value);
  }
  return (
    <div className='contact-forms' id='connect-button'>
    <h2 > Contact Me </h2>
        <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" value={clear} onChange={handleInputChange} placeholder='Name' required />
        <input type="email" name="user_email" value={email} onChange={handleEmailChange} placeholder='example@gmail.com' required/>
        <textarea name="message" value={message} onChange={handleMessageChange} placeholder='Message' required/>
        <input type="submit" value="Send" />
        </form>
    </div>
  );
};