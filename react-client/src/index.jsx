import React from 'react';
import ReactDOM from 'react-dom';
import QueryForm from './components/QueryForm.jsx';
import RecipeList from './components/RecipeList.jsx';
import sampleData from './sampledata.jsx';
import { Container, Row, Col } from 'react-bootstrap';
import GetStarted from './components/GetStarted.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render () {
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
        <Row style= {{justifyContent: 'center'}}>
          <GetStarted/>
        </Row>
      </>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));