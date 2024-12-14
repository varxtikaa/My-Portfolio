import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact container section" id='contact'>
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Ready to debug life? Let's chat tech, code, or caffeine! ☕️</h3>
          <p className="contact__details">Don't like forms? 🤔</p>
          <a href="mailto:vartikayadav.269@gmail.com" className="btn">Email me</a>
        </div>

        <form action="" className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input type="text" className="contact__form-input" placeholder='Insert your name' />
            </div>

            <div className="contact__form-div">
              <input type="email" className="contact__form-input" placeholder='Insert your email' />
            </div>
          </div>

          <div className="contact__form-div">
            <input type="text" className="contact__form-input" placeholder='Insert your subject' />
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea name="" id="" cols="30" rows="10" className='contact__form-input' placeholder='Write your messge'></textarea>
          </div>

          <button className="btn contact__send-message">Send Message</button>

        </form>

      </div>
    </section>
  )
}

export default Contact
