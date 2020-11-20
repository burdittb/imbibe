import React from 'react';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

const Home = () => {
  return (
    <div className="homeButtons">
      <Link href="/byName">
        <Button>Search By Name</Button>
      </Link>
      <Link href="byIngredient">
        <Button>Search By Ingredient</Button>
      </Link>
      <Link href="nonAlcoholic">
        <Button>Non-Alcoholic</Button>
      </Link>
      <Link href="shakeItUp">
        <Button>Shake It Up</Button>
      </Link>
      <Link href="everything">
        <Button>Show Me Everything</Button>
      </Link>
    </div>
  );
};

export default Home;
