import React from 'react';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

const Home = () => {
  return (
    <div className="homeButtons">
      <Link href="/byName">
        <Button variant="contained">Search By Name</Button>
      </Link>
      <Link href="byIngredient">
        <Button variant="contained">Search By Ingredient</Button>
      </Link>
      <Link href="nonAlcoholic">
        <Button variant="contained">Non-Alcoholic</Button>
      </Link>
      <Link href="shakeItUp">
        <Button variant="contained">Shake It Up</Button>
      </Link>
      <Link href="everything">
        <Button variant="contained">Show Me Everything</Button>
      </Link>
    </div>
  );
};

export default Home;
