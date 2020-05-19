import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import {store} from './store'

import './index.scss'

import { Home } from './pages/home'
import { Tournament } from './pages/tournament'
import { Fixtures } from './pages/fixtures'

ReactDOM.render(
  <Provider store={store}>
    <Router> 
      <Route exact path="/" component={Home} />
      <Route exact path="/tournament" component={Tournament} />
      <Route exact path="/fixtures" component={Fixtures} />
    </Router>
  </Provider>
  , 
  document.getElementById('root')
);
