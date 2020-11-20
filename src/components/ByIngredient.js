import React from 'react';
import NavBar from './NavBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const ByIngredient = () => {
  return (
    <div className="byName">
      <NavBar />
      <TextField variant="outlined" placeholder="search..." />
      <Button>Submit</Button>
    </div>
  );
};

export default ByIngredient;
