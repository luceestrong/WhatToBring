import React from 'react';
import ReactDOM from 'react-dom';
import QueryForm from './components/QueryForm.jsx';
import RecipeList from './components/RecipeList.jsx';
import sampleData from './sampledata.jsx';
import HomePage from './components/HomePage.jsx';
import MainPage from './components/MainPage.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myRecipes: [],
      hasRecipes: false,
      recipes: sampleData,
      getStarted: false
    };
    this.handleGetStarted = this.handleGetStarted.bind(this);
  }
  handleGetStarted () {
    this.setState({getStarted: true});
  }

  getRecipes() {


  }
  render () {
    return (
      this.state.getStarted ? <> <MainPage hasRecipes={this.state.hasRecipes} recipes={this.state.recipes} myRecipes={this.state.myRecipes}/> </> : <> <HomePage handleGetStarted = {this.handleGetStarted} /> </>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));