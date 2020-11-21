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
    this.setState({ drinks, ingredient: '' });
  }

  async handleClick() {}
  render() {
    return (
      <div className="fullScreen">
        <NavBar />
        <div className="screenBelowNav">
          <form onSubmit={this.handleSubmit}>
            <TextField
              variant="outlined"
              placeholder="search..."
              color="secondary"
              name="ingredient"
              value={this.state.ingredient}
              onChange={this.handleChange}
            />
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </form>
        </div>
        <div className="byNameList">
          {this.state.drinks.length > 0 &&
            this.state.drinks.map((drink) => {
              return <SingleDrink key={drink.id} id={drink.id} />;
            })}
        </div>
      </div>
    );
  }
}

export default ByIngredient;
