import React from 'react'
import {useSelector} from 'react-redux'

export function CurrentToUAH(props) {
const state = useSelector(state => state)
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