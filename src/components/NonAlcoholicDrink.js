import React from 'react';
import NavBar from './NavBar';
import SingleDrink from './SingleDrink';
import { fetchNonAlcoholicDrinks } from '../drinkService';

class NonAlcoholicDrink extends React.Component {
  constructor() {
    super();
    this.state = {
      drinks: [],
    };
  }
  async componentDidMount() {
    const drinks = await fetchNonAlcoholicDrinks();
    this.setState({ drinks: drinks });
  }
  render() {
    return (
      <div className="fullScreen">
        <NavBar />
        <div className="nonSearchBelowNav">
          {this.state.drinks.length > 0 ? (
            this.state.drinks.map((drink) => {
              return <SingleDrink key={drink.id} id={drink.id} />;
            })
          ) : (
            <img
              src="/images/shaker.svg"
              className="shaker"
              alt="cute graphic of a cocktail shaker shaking"
            />
          )}
        </div>
      </div>
    );
  }
}

export default NonAlcoholicDrink;
