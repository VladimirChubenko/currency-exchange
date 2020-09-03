import React, {useContext} from 'react'
import {Context} from '../context' 

export function CurrentToUAH(props) {
const {state} = useContext(Context)
const {currency, amount} = props
let currentValue

if(currency !== "uah") {
  currentValue = (state[currency].buy * amount).toFixed(2)
} else {
  currentValue = amount
}

  return (
    <div className="Current">
      <h4>UAH:</h4>
      {currentValue}
    </div>
  )
}