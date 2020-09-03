import React from 'react'
import logo from '../assets/logo-api.svg'

export function Footer() {
  const date = new Date().toLocaleDateString()
  
  return(
    <footer>
      <div className="logo">
        <img src={logo} alt="logo"/>
        API
      </div>
      {date}
    </footer>
  )
}
