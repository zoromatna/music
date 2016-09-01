import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import Content from './components/Content';
import MenuTop from './components/MenuTop';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuTop />
      </div>
    );
  }
}

export default App;
