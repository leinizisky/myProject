import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Header from './components/header'
import Tab from './components/Tab'
import Recommend from './pages/Recommend'
import Singer from './pages/Singer'
import Rank from './pages/Rank'
import Search from './pages/Search'

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
