import RecipeItem from './RecipeItem.jsx';
import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';

const RecipeList = ({recipes})=> {
  return (
    <>
      {recipes.map((recipe) => (
        <RecipeItem recipe={recipe}/>
      ))}
    </>
  );
};
export default RecipeList;

