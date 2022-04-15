import React from 'react'

const Laptop = (props) => {
  return (
    <div className={`laptop ${props.active? "active": "non-active"}`}>Laptop</div>
  )
}

export default Laptop