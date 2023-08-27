import React from 'react'
import './Categories.css'

function Categories({category}) {
  return (
    <button className="category">{category}</button>
  )
}

export default Categories