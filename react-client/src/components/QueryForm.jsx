import React from 'react';
import { Form, Button, Figure, Container, Row, Col, Image } from 'react-bootstrap';
const QueryForm = ()=> {
  return (
    <div>

      Select your preferences below
      <Form>
        <Form.Group as={Col} controlId="mealtype">
          <Form.Label>Meal Type</Form.Label>
          <Form.Control as="select">
            <option>choose....</option>
            <option>any</option>
            <option>main course</option>
            <option>appetizer</option>
            <option>side dish</option>
            <option>salad</option>
            <option>breakfast</option>
            <option>snack</option>
            <option>drink</option>
            <option>sauce</option>
            <option>fingerfood</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="intolerances">
          <Form.Label>Do you or your guests have any food allergies/intolerances?</Form.Label>
          <Form.Control as="select">
            <option>choose....</option>
            <option>none</option>
            <option>Dairy</option>
            <option>Egg</option>
            <option>Gluten</option>
            <option>Grain</option>
            <option>Peanut</option>
            <option>Sesame</option>
            <option>Shellfist</option>
            <option>Soy</option>
            <option>Sulfite</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col} controlId="intolerances">
          <Form.Label>What is your maximum desired prep time in mins?</Form.Label>
          <Form.Control as="select">
            <option>choose....</option>
            <option>doesn't matter</option>
            <option>10</option>
            <option>20</option>
            <option>30</option>
            <option>45</option>
            <option>60</option>
            <option>120</option>
          </Form.Control>
        </Form.Group>
        <Button variant="dark" type="submit">
    Submit
        </Button>
      </Form>
    </div>
  );
};

export default QueryForm;
