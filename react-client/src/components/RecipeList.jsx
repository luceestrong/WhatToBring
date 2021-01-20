import RecipeItem from './RecipeItem.jsx';
import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';

const RecipeList = ({addRecipe, recipes})=> {
  return (
    <>
      {recipes.map((recipe) => (
        <RecipeItem addRecipe = {addRecipe} recipe={recipe}/>
      ))}
    </>
  );
};
export default RecipeList;

