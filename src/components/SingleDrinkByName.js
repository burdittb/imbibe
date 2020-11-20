import React from 'react';

const SingleDrinkByName = (props) => {
  const { name, instructions, image, ingredients } = props.drink;
  return (
    <div className="singleDrinkView">
      <div className="singleDrinkCard">
        <h1>{name}</h1>
        <div className="singleDrinkImage">
          <img
            src={image}
            alt={`${name} provided by Cocktail Database Users`}
          />
        </div>
        <div className="singleDrinkIngredints">
          <h3>Ingredients:</h3>
          <div className="singleDrinkIngredientRow">
            {ingredients.map((ingredient, index) => {
              return <p key={index}>{ingredient}</p>;
            })}
          </div>
        </div>
        <div className="singleDrinkDirections">
          <h3>Instructions:</h3>
          <p>{instructions}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleDrinkByName;
