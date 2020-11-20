import React from 'react';
import NavBar from './NavBar';
import SingleDrink from './SingleDrink';
import { fetchRandomDrink } from '../drinkService';
import '../stylesheets/index.css';

class RandomDrink extends React.Component {
  constructor() {
    super();
    this.state = {
      drink: {},
    };
  }
  async componentDidMount() {
    const [drink] = await fetchRandomDrink();
    this.setState({ drink: drink });
  }
  render() {
    return (
      <div className="fullScreen">
        <NavBar />
        <div className="screenBelowNav">
          {this.state.drink.name ? (
            <SingleDrink key={this.state.drink.id} id={this.state.drink.id} />
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

export default RandomDrink;
