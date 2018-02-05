import React, { Component } from 'react';
import logo from './logo.svg';
import DemoForm from './components/demo/DemoForm';
import {JurWidgetApp} from '../../widgetpj/static/js/main.cf7abf43.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <h1>Hello From My Awesome App </h1>
        </div>
        <div className="App-content">          
          <JurWidgetApp/>
        </div>
      </div>
    );
  }
}

export default App;
