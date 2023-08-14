
import React from 'react'
import './Header.css'
import {AiOutlineShoppingCart} from "react-icons/ai";



function Header() {
  return (
    <header>
      <h1>Fake Store</h1>
      <AiOutlineShoppingCart className="cart-icon" />
    </header>
  )
}

export default Header 