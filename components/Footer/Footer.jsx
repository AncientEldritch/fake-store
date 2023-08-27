import React from 'react'
import  './Footer.css'
import { AiFillHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="footer">
        <p>Made with <AiFillHeart /> by mimo</p>
        <Link className="contact-us-link"  to='/contactus'>Contact Us</Link>
    </div>
  )
}

export default Footer