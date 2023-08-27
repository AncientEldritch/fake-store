import React, {useState} from 'react'
import './Categories.css'



function Categories({category, handleCategoryClick}) {
  return (
    <button onClick={() => handleCategoryClick(category)} className="category">{category}</button>
  )
}

export default Categories