import React from 'react'

const Electronic = (props) => {
  return (
    <div className={`electronic ${props.active? "active": "non-active"}`}>Electronic</div>
  )
}

export default Electronic