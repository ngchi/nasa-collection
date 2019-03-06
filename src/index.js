import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App/App.jsx'
import configureStore from './configureStore'
import api from './utils/api'
import './assets/scss/main.scss'

api.install()

ReactDOM.render(
  <App store={configureStore()} />,
  document.getElementById('root')
)