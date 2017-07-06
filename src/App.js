import React, { Component } from 'react';
import Home from './container/HomePage/index';
import './App.css';
import LoginPage from './container/account/LoginPage';
import {connect} from 'react-redux';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                {/*<Route exact path="/" component={Home}/>*/}
                {/*<Route path="/login" component={LoginPage}/>*/}
            </div>
        </Router>
    );
  }
}
const mapStateToProps = (state) => {
    const {login} = state;
    return {
        login,
    }
}

export default  connect(mapStateToProps)(App);
