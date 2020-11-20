import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import ByName from './ByName';
import ByIngredient from './ByIngredient';
import NonAlcoholicDrink from './NonAlcoholicDrink';
import RandomDrink from './RandomDrink';
import EveryDrink from './EveryDrink';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <main>
            <Switch>
              <Route path="/byName" component={ByName} />
              <Route path="/byIngredient" component={ByIngredient} />
              <Route path="/shakeItUp" component={RandomDrink} />
              <Route path="/everything" component={EveryDrink} />
              <Route exact path="/nonAlcoholic" component={NonAlcoholicDrink} />
              <Route exact path="/" component={Home} />
              <Redirect to="/" />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
