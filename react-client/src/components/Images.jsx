import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import buratta from '../images/burratta.png';
import friends from '../images/friends.png';
import cookies from '../images/cookies.png';
import orangesalad from '../images/orangesalad.png';

const Images = ()=> {
  return (
    <>
      <Row>
        <Col>
          <img src = {buratta} width = '500px' height = '600px' alt = "Buratta" class = 'center'/>
        </Col>
        <Col>
          <img src = {cookies} width = '500px' height = '600px' alt = "Cookies"/>
        </Col>
        <Col>
          <img src = {friends} width = '500px' height = '600px' alt = "Friends" />
        </Col>
        <Col>
          <img src = {orangesalad} width = '500px' height = '600px' alt = "OrangeSalad" />
        </Col>
      </Row>
    </>
  );
};

export default Images;
