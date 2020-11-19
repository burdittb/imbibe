import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { fetchDrinksByName } from '../drinkService';
import '../stylesheets/App.css';
import Button from '@material-ui/core/Button';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="appButtons">
          <Button variant="contained">Search By Name</Button>
          <Button variant="contained">Search By Ingredient</Button>
          <Button variant="contained">Non-Alcoholic</Button>
          <Button variant="contained">Shake It Up</Button>
          <Button variant="contained">Show Me Everything</Button>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
