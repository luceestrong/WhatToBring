import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import GetStarted from './GetStarted.jsx';
import Images from './Images.jsx';

const HomePage = ({handleGetStarted})=> {
  return (
    <>
      <Row style={{justifyContent: 'center', fontFamily: 'candara', fontSize: '30px' }}>
          ? What to Bring ?
      </Row>
      <Row style={{backgroundColor: '#000000'}}>
            hi
      </Row>
      <Row style={{justifyContent: 'center', fontFamily: 'cambira', fontSize: '60px'}}>
            Easy Recipes in Seconds!
      </Row>
      <Row style={{justifyContent: 'center', fontFamily: 'cambira', fontSize: '20px'}}>
            Cooking for Friends should be fun and stress-free!
      </Row>
      <Row style= {{justifyContent: 'center', paddingBottom: '10px'}}>
        <GetStarted handleGetStarted={handleGetStarted}/>
      </Row>
      <Images/>
    </>
  );
};

export default HomePage;
