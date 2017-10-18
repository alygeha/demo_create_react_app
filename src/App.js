import React, { Component } from 'react';
import logo from './logo.svg';
import DemoForm from './components/demo/DemoForm';
import './App.css';
import './App2.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <DemoForm/>
        </div>
      </div>
    );
  }
}

export default App;
