import React from 'react';
import { Form, Button, Figure, Container, Row, Col, Image } from 'react-bootstrap';
const QueryForm = ({handleFormChange, handleFormSubmit, mealType, intolerances, prepTime})=> {
  return (
    <>
      <h1 style={{fontSize: '30px'}}>
      Select your preferences below
      </h1>
      <form onSubmit={handleFormSubmit}>
        <label>Meal Type
          <select value={mealType} name ='mealType' onChange= {handleFormChange}>
            <option value='any'>any</option>
            <option value='main course'>main course</option>
            <option value= 'appetizer'>appetizer</option>
            <option value='side dish'>side dish</option>
            <option value='salad'>salad</option>
            <option value='breakfast'>breakfast</option>
            <option value='snack'>snack</option>
            <option value='drink'>drink</option>
            <option value='sauce'>sauce</option>
            <option value='fingergood'>fingerfood</option>
          </select>
        </label>

        <label> Do you or your guests have any food allergies/intolerances?
          <select value={intolerances} name='intolerances' onChange= {handleFormChange}>
            <option value='none'>none</option>
            <option value='Dairy'>Dairy</option>
            <option value='Egg'>Egg</option>
            <option value='Gluten'>Gluten</option>
            <option value='Grain'>Grain</option>
            <option value='Peanut'>Peanut</option>
            <option value='Sesame'>Sesame</option>
            <option value='Shellfish'>Shellfish</option>
            <option value='Soy'>Soy</option>
            <option value='Sulfite'>Sulfite</option>
          </select>
        </label>

        <label> What is your maximum desired prep time in mins?
          <select value={prepTime} name='prepTime' onChange= {handleFormChange}>
            <option value= {'doesn\'t matter'}>doesn't matter </option>
            <option value='10'>10</option>
            <option value='20'>20</option>
            <option value='30'>30</option>
            <option value='45'>45</option>
            <option value='60'>120</option>
            <option value='200'>200</option>
          </select>
        </label>
        <Row style={{paddingLeft: '10px'}}>
          <Button variant="dark" type="submit">Submit</Button>
        </Row>
      </form>
    </>
    //        </Form.Control>
    //     </Form.Group>

  //     <Form.Group as={Col} controlId="intolerances">
  //       <Form.Label>Do you or your guests have any food allergies/intolerances?</Form.Label>
  //       <Form.Control as="select">
  //         <option>choose....</option>
  //         <option>none</option>
  //         <option>Dairy</option>
  //         <option>Egg</option>
  //         <option>Gluten</option>
  //         <option>Grain</option>
  //         <option>Peanut</option>
  //         <option>Sesame</option>
  //         <option>Shellfist</option>
  //         <option>Soy</option>
  //         <option>Sulfite</option>
  //       </Form.Control>
  //     </Form.Group>
  //     <Form.Group as={Col} controlId="intolerances">
  //       <Form.Label>What is your maximum desired prep time in mins?</Form.Label>
  //       <Form.Control as="select">
  //         <option>choose....</option>
  //         <option>doesn't matter</option>
  //         <option>10</option>
  //         <option>20</option>
  //         <option>30</option>
  //         <option>45</option>
  //         <option>60</option>
  //         <option>120</option>
  //       </Form.Control>
  //     </Form.Group>
  //     <Button variant="dark" type="submit">
  // Submit
  //     </Button>
  //   </Form>
  // </div>

  );
};

export default QueryForm;
