import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/header';
import Tab from './components/Tab';
import Recommend from './containers/Recommend'
import Singer from './containers/Singer';
import Rank from './containers/Rank'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Tab />
        <Switch>
        	<Redirect exact from="/" to="/recommend" />
        	<Route path="/recommend" component={Recommend} />
          <Route path="/singer" component={Singer} />
          <Route path="/rank" component={Rank} />
        </Switch>
      </div>
    );
  }
}

export default App;
