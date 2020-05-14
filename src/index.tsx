import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { ApolloProvider } from '@apollo/react-hooks';
import { apolloClient } from './plugins/apolloPlugin'

import { Home } from './pages/home'

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <Router> 
      <Route path="/" component={Home} />
    </Router>
  </ApolloProvider>
  , 
  document.getElementById('root')
);
