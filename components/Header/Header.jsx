
import React from 'react'
import './Header.css'
import {AiOutlineShoppingCart} from "react-icons/ai";
import { Link } from 'react-router-dom';



function Header() {
  return (
    <header>
      <Link className="homepage-link" to='/homepage'>Fake Store</Link>
      <AiOutlineShoppingCart className="cart-icon" />
    </header>
  )
}

export default Header 