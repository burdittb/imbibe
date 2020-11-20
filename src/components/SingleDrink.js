import React from 'react';

const props = {
  idDrink: '11007',
  strDrink: 'Margarita',
  strDrinkAlternate: null,
  strDrinkES: null,
  strTags: 'IBA,ContemporaryClassic',
  strVideo: null,
  strCategory: 'Ordinary Drink',
  strIBA: 'Contemporary Classics',
  strAlcoholic: 'Alcoholic',
  strInstructions:
    'Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.',
  strDrinkThumb:
    'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg',
  strIngredient1: 'Tequila',
  strIngredient2: 'Triple sec',
  strIngredient3: 'Lime juice',
  strIngredient4: 'Salt',
  strIngredient5: null,
  strIngredient6: null,
  strIngredient7: null,
  strIngredient8: null,
  strIngredient9: null,
  strIngredient10: null,
  strIngredient11: null,
  strIngredient12: null,
  strIngredient13: null,
  strIngredient14: null,
  strIngredient15: null,
  strMeasure1: '1 1/2 oz ',
  strMeasure2: '1/2 oz ',
  strMeasure3: '1 oz ',
  strMeasure4: null,
  strMeasure5: null,
  strMeasure6: null,
  strMeasure7: null,
  strMeasure8: null,
  strMeasure9: null,
  strMeasure10: null,
  strMeasure11: null,
  strMeasure12: null,
  strMeasure13: null,
  strMeasure14: null,
  strMeasure15: null,
};

const SingleProduct = () => {
  return (
    <div className="singleDrinkView">
      <div className="singleDrinkCard">
        <h1>{props.strDrink}</h1>
        <div className="singleDrinkImage">
          <img src={props.strDrinkThumb} alt={`${props.strDrink}`} />
        </div>
        <div className="singleDrinkIngredints">
          <h3>Ingredients:</h3>
          <div className="singleDrinkIngredientRow">
            <p>{props.strMeasure1}</p>
            <p>{props.strIngredient1}</p>
          </div>
        </div>
        <div className="singleDrinkDirections">
          <h3>Directions:</h3>
          <p>{props.strInstructions}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
