import React from 'react';
import QueryForm from './QueryForm.jsx';
import RecipeList from './RecipeList.jsx';
import MyRecipes from './MyRecipes.jsx';
import { Container, Row, Col, Image } from 'react-bootstrap';

const MainPage = ({hasRecipes, recipes, myRecipes})=> {
  return (
    <>
      <Row>
        <Col>
          <QueryForm/>
        </Col>
        <Col>
          <MyRecipes myRecipes={myRecipes}/>
        </Col>
      </Row>
      <Row>
        {hasRecipes ? <RecipeList recipes={recipes}/> : <></>}
      </Row>
    </>
  );
};
export default MainPage;
