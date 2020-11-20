import React from 'react';
import NavBar from './NavBar';
import '../stylesheets/index.css';

class ShakeItUp extends React.Component {
  render() {
    return (
      <div className="byName">
        <NavBar />
        <img
          src="/images/shaker.svg"
          className="shaker"
          alt="cute graphic of a cocktail shaker shaking"
        />
      </div>
    );
  }
}

export default ShakeItUp;
