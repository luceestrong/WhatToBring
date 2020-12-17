import React from 'react';
import QueryForm from './QueryForm.jsx';
import RecipeList from './RecipeList.jsx';
import MyRecipes from './MyRecipes.jsx';
import { Container, Row, Col, Image } from 'react-bootstrap';

const MainPage = ({/*addRecipe*/ handleFormChange, handleFormSubmit, mealType, prepTime, intolerances, hasRecipes, recipes, myRecipes})=> {
  return (
    <>
      <Row>
        <Col style={{fontFamily: 'cambira', paddingLeft: '30px'}}>
          <QueryForm handleFormSubmit={handleFormSubmit} handleFormChange={handleFormChange} mealType={mealType} prepTime={prepTime} intolerances={intolerances}/>
        </Col>
        {/* <Col>
          <MyRecipes myRecipes={myRecipes}/>
        </Col> */}
      </Row>
      <Row>
        {hasRecipes ? <RecipeList /*addRecipe={addRecipe}*/ recipes={recipes}/> : <></>}
      </Row>
    </>
  );
};
export default MainPage;
