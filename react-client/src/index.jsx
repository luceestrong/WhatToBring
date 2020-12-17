import React from 'react';
import ReactDOM from 'react-dom';
import QueryForm from './components/QueryForm.jsx';
import RecipeList from './components/RecipeList.jsx';
import sampleData from './sampledata.jsx';
import HomePage from './components/HomePage.jsx';
import MainPage from './components/MainPage.jsx';
import axios from 'axios';
import apikey from './keys.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myRecipes: [],
      hasRecipes: false,
      recipes: sampleData,
      getStarted: false,
      mealType: 'any',
      intolerances: 'none',
      prepTime: 'doesn\'t matter'
    };
    this.handleGetStarted = this.handleGetStarted.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  handleGetStarted () {
    this.setState({getStarted: true});
  }

  handleFormChange (e) {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({[name]: value});
  }

  handleFormSubmit (e) {
    this.getRecipes(this.state.mealType, this.state.intolerances, this.state.prepTime);
    e.preventDefault();
  }
  getRecipes(type, allergies, time) {
    axios.get(`https://api.spoonacular.com/recipes/complexSearch?type=${type}&intolerances=${allergies}&maxReadyTime=${time}&number=20&apiKey=${apikey}`).then((data)=> {
      this.setState({recipes: data.data.results});
    }).then(()=>{
      this.setState({hasRecipes: true});
    }).catch((err)=> {
      console.log(err);
    });
  }
  render () {
    return (
      this.state.getStarted ? <> <MainPage handleFormChange= {this.handleFormChange} handleFormSubmit={this.handleFormSubmit} mealType = {this.state.mealType} intolerances={this.state.intolerances} prepTime= {this.state.prepTime} hasRecipes={this.state.hasRecipes} recipes={this.state.recipes} myRecipes={this.state.myRecipes}/> </> : <> <HomePage handleGetStarted = {this.handleGetStarted} /> </>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));