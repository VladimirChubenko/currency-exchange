import React, {useEffect} from 'react'
import './App.scss'
import {Rates} from './components/rates'
import {Converter} from './components/converter'
import {Footer} from './components/footer'
import {useDispatch} from 'react-redux'
import {loadData} from './redux/actions'

function App() {
const dispatch = useDispatch(loadData)

useEffect(() => {
  dispatch(loadData())
}, [dispatch])

  return (
    <div className="App">
      <Rates />
      <Converter />
      <Footer/>
    </div>
  );
}

export default App;
