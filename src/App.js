import React, {useEffect, useState} from 'react'
import './App.scss';
import {Rates} from './components/rates'
import {Context} from './context'
import {Converter} from './components/converter'
import {Footer} from './components/footer'

function App() {

  const [state, setState] = useState({
    usd: {buy: 0, sale: 0},
    eur: {buy: 0, sale: 0},
    rub: {buy: 0, sale: 0}
  })

  useEffect(() => {
    loadData()
  }, [])

  const url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'

  const loadData = async () => {
    const response = await fetch(url)
    const data = await response.json()
    const state = {
      usd: {buy: (+data[0].buy).toFixed(2), sale: (+data[0].sale).toFixed(2)},
      eur: {buy: (+data[1].buy).toFixed(2), sale: (+data[1].sale).toFixed(2)},
      rub: {buy: (+data[2].buy).toFixed(3), sale: (+data[2].sale).toFixed(3)}
    }
    setState(state)
  }

  return (
    <Context.Provider value={{
      state
    }}>
      <div className="App">
        <Rates />
        <Converter />
        <Footer/>
      </div>
    </Context.Provider>
  );
}

export default App;
