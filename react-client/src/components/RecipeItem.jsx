
import { Card, Button, Figure, Container, Row, Col, Image } from 'react-bootstrap';
import React from 'react';

const RecipeItem = ({recipe})=> {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={recipe.image} />
      <Card.Body>
        <Card.Text>
          {recipe.title}
        </Card.Text>
        <Button variant="dark">Get Recipe</Button>
      </Card.Body>
    </Card>
    // <Col>
    //   <Figure>
    //     <Figure.Image
    //       width={250}
    //       height={300}
    //       alt="171x180"
    //       src={recipe.image}
    //     />
    //     <Figure.Caption>
    //       {recipe.title}
    //     </Figure.Caption>
    //     {/*Insert recipe.url which will format in server*/}
    //   </Figure>
    //   <Row>
    //     <Button variant="outline-dark">Get Recipe</Button>
    //   </Row>
    // </Col>

  );
};
export default RecipeItem;


