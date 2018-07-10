import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Header from './components/header'
import Tab from './components/Tab'
import Recommend from './containers/Recommend'
import Singer from './containers/Singer'
import Rank from './containers/Rank'
import Search from './containers/Search'

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
          <Route path="/search" component={Search} />
        </Switch>
      </div>
    );
  }
}

export default App;
