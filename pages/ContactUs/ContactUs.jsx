import React from 'react'
import "./ContactUs.css"


function ContactUs() {
  return (
    <form className="contact-us-form">
        <h1 className="contact-us-title">Contact Us</h1>
        <input className="name-input" type="text" placeholder='First Name' />
        <input className="name-input" type="text" placeholder='Last Name' />
        <input className="message-input" type="textarea" placeholder='Write your message here' />
        <input className="submit-button" type="submit" />
    </form>
  )
}

export default ContactUs