import React from 'react';
import NavBar from './NavBar';
import SingleDrink from './SingleDrink';
import { fetchEveryDrink } from '../drinkService';

class EveryDrink extends React.Component {
  constructor() {
    super();
    this.state = {
      drinks: [],
    };
  }
  async componentDidMount() {
    const drinks = await fetchEveryDrink();
    this.setState({ drinks: drinks });
  }
  render() {
    return (
      <div className="fullScreen">
        <NavBar />
        <div className="screenBelowNav">
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

export default EveryDrink;
