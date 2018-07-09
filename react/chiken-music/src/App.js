import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/header';
import Tab from './components/Tab';
import Singer from './containers/Singer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Tab />
        <Switch>
        	<Redirect exact from="/" to="/recommend" />
        	<Route path="/recommend" component={Singer} />
          <Route path="/singer" component={Singer} />
        </Switch>
      </div>
    );
  }
}

export default App;
