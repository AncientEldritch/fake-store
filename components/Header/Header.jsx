
import React, { useContext } from 'react'
import './Header.css'
import {AiOutlineShoppingCart} from "react-icons/ai";
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../../src/contexts/FavoritesContext';



function Header() {
  const {favorites} = useContext(FavoritesContext)

  return (
    <header>
      <Link className="homepage-link" to='/'>Fake Store</Link>
      <Link className="cart-icon-container" to='/cart'><AiOutlineShoppingCart className="cart-icon" />{favorites.length !== 0 ? 
        <p className="cart-num">{favorites.length}</p>: null}</Link>
      
    </header>
  )
}

export default Header 