import React from 'react'
import {useSelector} from 'react-redux'
import logo from '../assets/logo1.png'


export function Rates() {
  const state = useSelector(state => state)
  
  return (
    <div>
      <header className="head">
      <h2>Exchange Rates</h2>
        <a href="https://github.com/VladimirChubenko/currency-exchange" target="_blank" rel="noopener noreferrer">
          <img src={logo} alt="Logo GitHub" style={{width: '32px', paddingRight: '15px'}}/>
        </a>
      </header>
      <div className="Course">
        <div>
          <span>$</span>
          {state.usd.buy} / {state.usd.sale}
        </div>
        <div>
          <span>&euro;</span>
          {state.eur.buy} / {state.eur.sale}
        </div>
        <div>
          <span>&#8381;</span>
          {state.rub.buy} / {state.rub.sale}        
        </div>
      </div>
    </div>
  )
}  
