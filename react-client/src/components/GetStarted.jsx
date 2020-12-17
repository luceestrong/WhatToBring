import React from 'react';
import { Button } from 'react-bootstrap';

const GetStarted = ({handleGetStarted})=> {
  return (
    <Button variant="dark" onClick = {
      handleGetStarted
    }>Get Started</Button>
  );
};
export default GetStarted;
