import React from 'react'

const Clothes = (props) => {
  return (
    <div className={`clothes ${props.active? "active": "non-active"}`}>Clothes</div>
  )
}

export default Clothes