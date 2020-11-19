import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { fetchDrinksByName } from '../drinkService';
import '../stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div></div>
      </BrowserRouter>
    );
  }
}

export default App;
