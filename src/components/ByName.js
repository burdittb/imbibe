import React from 'react';
import NavBar from './NavBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// import { fetchDrinksByName } from '../drinkService';

class ByName extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      name: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    console.log('state?', this.state.name);
    // fetchDrinksByName(e.target.value)
  }

  render() {
    return (
      <div className="byName">
        <NavBar />
        <form onSubmit={this.handleSubmit}>
          <TextField
            variant="outlined"
            placeholder="search..."
            color="secondary"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <Button type="submit">Submit</Button>
        </form>
      </div>
    );
  }
}

export default ByName;
