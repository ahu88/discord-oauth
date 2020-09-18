import React from 'react';
import './App.css';
import { Button } from '@chakra-ui/core';
import { Switch, Route } from 'react-router-dom'; //allows us to visit different routes
import { LandingPage, MenuPage, DashboardPage } from './pages';

function App() {
  return (
    //set up routes
    <Switch> 
      <Route path="/" exact={true} component={LandingPage} />
      <Route path="/menu" exact={true} component={MenuPage} />
      <Route path="/dashboard" exact={true} component={DashboardPage} />
    </Switch>
    // <div className="App">
    //   <Button variantColor="orange">Button</Button>
    // </div>
  );
}

export default App;
