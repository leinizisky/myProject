import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import MHeader from 'components/MHeader'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MHeader/>
      </div>
    );
  }
}

export default App;
