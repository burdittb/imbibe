import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import ByName from './ByName';
import ByIngredient from './ByIngredient';
import Drinks from './Drinks';
import SingleDrink from './SingleDrink';
import '../stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <main>
            <Switch>
              <Route exact path="/byName" component={ByName} />
              <Route exact path="/byIngredient" component={ByIngredient} />
              {/* <Route exact path="/nonAlcoholic" component={ByName} />
              <Route exact path="/shakeItUp" component={ByName} />
              <Route exact path="/everything" component={ByName} /> */}
              <Route exact path="/" component={Home} />
              <Route exact path="/drinks" component={Drinks} />
              <Route path="/drinks/:drinkId" component={SingleDrink} />
              <Redirect to="/" />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
