
import { Card, Button, Figure, Container, Row, Col, Image } from 'react-bootstrap';
import React from 'react';

const RecipeItem = ({/*addRecipe*/ recipe})=> {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={recipe.image} />
      <Card.Body>
        <Card.Text>
          {recipe.title}
        </Card.Text>
        <Button variant="dark">Get Recipe</Button>
        <Button variant="warning" /*onClick={ addRecipe(recipe) }*/ >Add to My Recipes</Button>
      </Card.Body>
    </Card>
  );
};
export default RecipeItem;


