import React from 'react';
import NavBar from './NavBar';
import SingleDrinkByName from './SingleDrinkByName';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { fetchDrinksByName } from '../drinkService';

class ByName extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      drinks: [],
      drinksFound: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      name: e.target.value,
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    const drinks = await fetchDrinksByName(this.state.name);
    if (drinks) {
      this.setState({ drinks, name: '', drinksFound: true });
    } else {
      this.setState({ name: '', drinksFound: false });
    }
  }

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
              name="name"
              value={this.state.name}
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
              return <SingleDrinkByName key={drink.id} drink={drink} />;
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

export default ByName;
