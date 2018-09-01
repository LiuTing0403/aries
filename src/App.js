import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import createHistory from 'history/createHashHistory'
import Home from './pages/home'
import SignIn from './pages/signin'
import Guest from './pages/guest'

window.G = {
  history: createHistory()
}

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/signIn' component={SignIn} />
          <Route path='/guest/:cfId/:guestId' component={Guest} />
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
