import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import {rootReducer} from './redux/rootReducer'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
<<<<<<< HEAD
    applyMiddleware(thunk) 
=======
    applyMiddleware(thunk)
>>>>>>> df34a8098b9fd6af83b56603d15d66f01872d5a0
  )
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> 
      <App />
    </Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
