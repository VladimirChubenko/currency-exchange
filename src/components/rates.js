import React, {useContext} from 'react'
import {Context} from '../context'

export function Rates() {
  const {state} = useContext(Context)
  
  return (
    <div>
      <h2>Exchange Rates</h2>
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