import axios from 'axios';

const COCKTAILDB = process.env.REACT_APP_COCKTAILDB;
const APIKEY = process.env.REACT_APP_APIKEY;
// cocktail by name: search.php?s=margarita
// cocktail by first letter: search.php?f=a
// ingredient by name: search.php?i=vodka
// random cocktail: random.php

const drinksReducer = (results) => {
  let drinks = [];
  if (!results || results.drinks.length <= 0) {
    return;
  }

  results.drinks.forEach((drinkObj, index) => {
    let streamlinedDrink = {
      id: drinkObj.idDrink,
      name: drinkObj.strDrink,
      alcoholic: true,
      instructions: drinkObj.strInstructions,
      image: drinkObj.strDrinkThumb,
      ingredients: [],
    };
    if (drinkObj.strAlcoholic !== 'Alcoholic') {
      streamlinedDrink.alcoholic = false;
    }
    while (drinkObj['strIngredient' + (index + 1)]) {
      let measurement =
        drinkObj['strMeasure' + (index + 1)] !== null
          ? drinkObj['strMeasure' + (index + 1)]
          : 'A dash of ';
      let ingredient = drinkObj['strIngredient' + (index + 1)];
      streamlinedDrink.ingredients.push([`${measurement}${ingredient}`]);
      index++;
    }
    drinks.push(streamlinedDrink);
  });
  return drinks;
};

export const fetchDrinksByName = async (name) => {
  try {
    const url = new URL(`${COCKTAILDB}${APIKEY}/search.php?s=${name}`);
    const { data } = await axios.get(url.href);
    return drinksReducer(data);
  } catch (err) {
    console.log(err);
  }
};
