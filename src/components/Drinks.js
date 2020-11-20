import React from 'react';
import NavBar from './NavBar';

class Drinks extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="list">
        <NavBar />
      </div>
    );
  }
}

export default Drinks;
