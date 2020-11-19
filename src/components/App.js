import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
// import { fetchDrinksByName } from '../drinkService';
import '../stylesheets/App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <ButtonGroup variant="contained">
            <Button>Search By Name</Button>
            <Button>Search By Ingredient</Button>
            <Button>Non-Alcoholic</Button>
            <Button>Shake It Up</Button>
            <Button>Show Me Everything</Button>
          </ButtonGroup>
          <TextField variant="outlined" placeholder="search..." />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
