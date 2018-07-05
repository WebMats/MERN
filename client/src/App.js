import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppNavbar from './containers/AppNavbar/AppNavbar';
import ShoppingList from './containers/ShoppingList/ShoppingList';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      <AppNavbar />
      <ShoppingList />
      </div>
    );
  }
}

export default App;
