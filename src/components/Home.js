import React from 'react';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="homeButtons">
        <div className="appTitle">
          <img src="/logo192.png" alt="cute graphic of a cocktail glass" />
          imbibe
        </div>
        <Link to="/byName" component={RouterLink}>
          <Button variant="contained">Search By Name</Button>
        </Link>
        <Link to="byIngredient" component={RouterLink}>
          <Button variant="contained">Search By Ingredient</Button>
        </Link>
        <Link to="nonAlcoholic" component={RouterLink}>
          <Button variant="contained">Non-Alcoholic</Button>
        </Link>
        <Link to="shakeItUp" component={RouterLink}>
          <Button variant="contained">Shake It Up</Button>
        </Link>
        <Link to="everything" component={RouterLink}>
          <Button variant="contained">Show Me Everything</Button>
        </Link>
      </div>
    </>
  );
};

export default Home;
