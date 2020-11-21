import React from 'react';
import NavBar from './NavBar';
import SingleDrink from './SingleDrink';
import { fetchRandomDrink } from '../drinkService';

class RandomDrink extends React.Component {
  constructor() {
    super();
    this.state = {
      drink: {},
    };
    this.handleClick = this.handleClick.bind(this);
  }
  async componentDidMount() {
    const [drink] = await fetchRandomDrink();
    this.setState({ drink: drink });
  }

  async handleClick() {
    const [drink] = await fetchRandomDrink();
    this.setState({ drink: drink });
  }

  render() {
    return (
      <div className="fullScreen">
        <NavBar />

        <div className="shaker-icon" onClick={this.handleClick}>
          <p>Still thirsty?</p>
          <img
            src="/images/shaker.svg"
            className="shaker-button"
            alt="cute icon of a cocktail shaker button that finds another random drink"
          />
        </div>
        <div className="nonSearchBelowNav">
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
