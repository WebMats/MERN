import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './store/actions';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppNavbar from './components/AppNavbar/AppNavbar';
import ShoppingList from './containers/ShoppingList/ShoppingList';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      	<AppNavbar isOpen={this.props.isOpen} toggle={this.props.onToggle} />
      	<ShoppingList />
      </div>
    );
  }
}

const mapStateToProps = state => {
	return {
		isOpen: state.isOpen
	}
}
const mapDispatchToProps = dispatch => {
	return {
		onToggle: () => (dispatch(actions.toggleSideDrawerHandler()))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
