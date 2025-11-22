import React from 'react'

const Header = (props) => {
  return (
    <div>
        <h1 className="text-3xl font-medium">Hello {props.username}</h1>
        <p>I help ypu mange your activity :)</p>
    </div>
  )
}

export default Header