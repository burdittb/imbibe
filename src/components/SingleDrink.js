import React from 'react';
import { fetchDrinkById } from '../drinkService';

class SingleDrink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drink: {},
    };
  }

  async componentDidMount() {
    const [drink] = await fetchDrinkById(this.props.id);
    this.setState({ drink: drink });
  }
  render() {
    return (
      <div className="singleDrinkView">
        {this.state.drink.name && (
          <div className="singleDrinkCard">
            <h1>{this.state.drink.name}</h1>
            <div className="singleDrinkImage">
              <img
                src={this.state.drink.image}
                alt={`${this.state.drink.name} provided by Cocktail Database Users`}
              />
            </div>
            <div className="singleDrinkIngredints">
              <h3>Ingredients:</h3>
              <div className="singleDrinkIngredientRow">
                <p>{this.state.drink.ingredients}</p>
              </div>
            </div>
            <div className="singleDrinkDirections">
              <h3>Instructions:</h3>
              <p>{this.state.drink.instructions}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default SingleDrink;
