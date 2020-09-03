import React, {useContext} from 'react'
import {Context} from '../context' 

export function Current(props) {
const {state} = useContext(Context)
const {currency, name, amount} = props
let currentValue

if(currency === name) {
  currentValue = amount
} else if(currency === "uah") {
  currentValue = (1 / state[name].sale * amount).toFixed(2)
} else {
  let toUAH = (state[currency].buy * amount).toFixed(2)
  currentValue = (1 / state[name].sale * toUAH).toFixed(2)
}

  return (
    <div className="Current">
      <h4>{name}:</h4>
      {currentValue}
    </div>
  )
}