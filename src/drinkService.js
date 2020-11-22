import axios from 'axios';

const COCKTAILDB = process.env.REACT_APP_COCKTAILDB;
const APIKEY = process.env.REACT_APP_APIKEY;

const drinksReducer = (results) => {
  let drinks = [];
  if (!results || results.drinks.length <= 0) {
    return;
  }

  results.drinks.forEach((drinkObj) => {
    let streamlinedDrink = {
      id: drinkObj.idDrink,
      name: drinkObj.strDrink,
      alcoholic: true,
      instructions: drinkObj.strInstructions,
      image: drinkObj.strDrinkThumb,
      ingredients: [],
    };
    if (streamlinedDrink.image === null) {
      streamlinedDrink.image = '/images/singleDrinkalt.png';
    }
    if (drinkObj.strAlcoholic !== 'Alcoholic') {
      streamlinedDrink.alcoholic = false;
    }
    let counter = 1;
    while (drinkObj['strIngredient' + counter]) {
      let measurement =
        drinkObj['strMeasure' + counter] !== null
          ? drinkObj['strMeasure' + counter]
          : '';
      let ingredient = drinkObj['strIngredient' + counter];
      streamlinedDrink.ingredients.push(`${measurement} ${ingredient}`);
      counter++;
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

export const fetchDrinksByIngredient = async (ingredient) => {
  try {
    const url = new URL(`${COCKTAILDB}${APIKEY}/filter.php?i=${ingredient}`);
    const { data } = await axios.get(url.href);
    return drinksReducer(data);
  } catch (err) {
    console.log(err);
  }
};

export const fetchDrinkById = async (id) => {
  try {
    const url = new URL(`${COCKTAILDB}${APIKEY}/lookup.php?i=${id}`);
    const { data } = await axios.get(url.href);
    return drinksReducer(data);
  } catch (err) {
    console.log(err);
  }
};

export const fetchNonAlcoholicDrinks = async () => {
  try {
    const url = new URL(`${COCKTAILDB}${APIKEY}/filter.php?a=Non_Alcoholic`);
    const { data } = await axios.get(url.href);
    return drinksReducer(data);
  } catch (err) {
    console.log(err);
  }
};

export const fetchRandomDrink = async () => {
  try {
    const url = new URL(`${COCKTAILDB}${APIKEY}/random.php`);
    const { data } = await axios.get(url.href);
    return drinksReducer(data);
  } catch (err) {
    console.log(err);
  }
};

export const fetchEveryDrink = async () => {
  try {
    const url = new URL(`${COCKTAILDB}${APIKEY}/filter.php?c=Cocktail`);
    const { data } = await axios.get(url.href);
    return drinksReducer(data);
  } catch (err) {
    console.log(err);
  }
};
