import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CLickers from './Clickers'
import Header from './Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CLickers/>
        <Header content='buna'/>
      </div>
    );
  }
}

export default App;
