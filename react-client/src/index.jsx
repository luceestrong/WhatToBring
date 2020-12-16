import React from 'react';
import ReactDOM from 'react-dom';
import QueryForm from './components/QueryForm.jsx';
import RecipeList from './components/RecipeList.jsx';
import sampleData from './sampledata.jsx';
import { Container, Row, Col } from 'react-bootstrap';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <Container>
        <Row>
          <Col>
            <h1>What to Bring</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));