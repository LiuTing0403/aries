import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './pages/home'
import SignIn from './pages/signin'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/signIn' component={SignIn} />
        </div>
      </Router>
    );
  }
}

export default App;
