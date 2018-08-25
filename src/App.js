import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom'
import createHistory from 'history/createHashHistory'
import Home from './pages/home'
import SignIn from './pages/signin'

window.G = {
  history: createHistory()
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path='/signIn' component={SignIn} />
          <Route path='/' component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
