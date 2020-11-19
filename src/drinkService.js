import axios from 'axios';

const COCKTAILDB = process.env.REACT_APP_COCKTAILDB;
const APIKEY = process.env.REACT_APP_APIKEY;
// cocktail by name: search.php?s=margarita
// cocktail by first letter: search.php?f=a
// ingredient by name: search.php?i=vodka
// random cocktail: random.php

export const fetchDrinksByName = async (name) => {
  try {
    const url = new URL(`${COCKTAILDB}${APIKEY}/search.php?s=${name}`);
    const { data } = await axios.get(url.href);
    console.log('fetchedDrink', data.drinks[0].strDrink);
  } catch (err) {
    console.log(err);
  }
};
