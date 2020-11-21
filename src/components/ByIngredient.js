import React from 'react';
import NavBar from './NavBar';
import SingleDrink from './SingleDrink';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { fetchDrinksByIngredient } from '../drinkService';

class ByIngredient extends React.Component {
  constructor() {
    super();
    this.state = {
      ingredient: '',
      drinks: [],
      drinksFound: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      ingredient: e.target.value,
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    const drinks = await fetchDrinksByIngredient(this.state.ingredient);
    if (drinks) {
      this.setState({ drinks, name: '', drinksFound: true });
    } else {
      this.setState({ name: '', drinksFound: false });
    }
  }

  async handleClick() {}
  render() {
    return (
      <div className="fullScreen">
        <NavBar />
        <div className="screenBelowNav">
          <form onSubmit={this.handleSubmit}>
            <TextField
              id="nameInput"
              variant="outlined"
              placeholder="search..."
              name="ingredient"
              value={this.state.ingredient}
              onChange={this.handleChange}
            />
            <Button id="nameButton" type="submit" variant="contained">
              Submit
            </Button>
          </form>
        </div>
        <div className="byNameList">
          {this.state.drinksFound === true ? (
            this.state.drinks.map((drink) => {
              return <SingleDrink key={drink.id} id={drink.id} />;
            })
          ) : (
            <div className="sorry">
              <h3>Sorry, we couldn't find what you were looking for.</h3>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ByIngredient;
