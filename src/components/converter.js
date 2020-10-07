import React, {useState} from 'react'
import {Current} from './current'
import {CurrentToUAH} from './currentToUAH'

export function Converter() {
  const [currency, setСurrency] = useState("uah")
  const [amount, setAmount] = useState(1)

  return (
    <div>
      <h2>Currency Converter</h2>
      <div className="Converter">
        <div className="sale">
          <div className="sale-select_wrapper">
            <select
              className="sale-select"
              onChange={event => setСurrency(event.target.value)}
              >
              <option value="uah">UAH</option>
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="rub">RUB</option>
            </select>
          </div>
          <input 
            className="sale-input"
            inputMode="numeric"
            type="number"
            placeholder="1"
            onChange={event => setAmount(event.target.value)}
            />
        </div>
        <div className="values">
          <Current 
            name="usd"
            currency={currency}
            amount={amount}
          />
          <Current 
            name="eur"
            currency={currency}
            amount={amount}
          />
          <Current 
            name="rub"
            currency={currency}
            amount={amount}
          />
          <CurrentToUAH 
            currency={currency}
            amount={amount}
          />
        </div>
      </div>
    </div>
  )
}