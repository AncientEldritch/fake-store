
import React from 'react'
import './Header.css'
import {AiOutlineShoppingCart} from "react-icons/ai";
import { Link } from 'react-router-dom';



function Header() {
  return (
    <header>
      <Link className="homepage-link" to='/'>Fake Store</Link>
      <Link to='/cart'><AiOutlineShoppingCart className="cart-icon" /></Link>
    </header>
  )
}

export default Header 