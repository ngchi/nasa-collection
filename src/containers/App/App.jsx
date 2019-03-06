import React from 'react'
import { Provider } from 'react-redux'
import Home from '../Home/Home.jsx'
import Search from '../Search/Search.jsx'
import { BrowserRouter as Router, Route } from "react-router-dom"

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path='/' component={Home}></Route>
        <Route path='/nasa-search' component={Search}></Route>
      </div> 
    </Router>
  </Provider>
)

export default App