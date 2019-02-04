import React, { Component } from 'react'
import { Row, Col } from 'react-materialize'
import Header from './components/Header'
import CategoryContainer from './components/CategoryContainer.js'
import RecipeContainer from './components/RecipeContainer.js'
import MyRecipesContainer from './components/MyRecipesContainer.js'

// const CATEGORY_HERE = ""
const categoriesURL = 'https://www.themealdb.com/api/json/v1/1/categories.php'
// const specificCategories = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${CATEGORY_HERE}`
// fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${CATEGORY_HERE}`)


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      categories: [],
      selectedCategory: [],
      myRecipes: []
    }
  }


  componentDidMount() {
    fetch(categoriesURL)
      .then( response => response.json() )
      .then( categoriesData => this.setState({
        categories: categoriesData.categories

        // make sure to set the state to the specific array rather than the entire object with an array inside it.
        // this way you don't do something like this.state.categories.categories
      }) )
  } // end of componentDidMount()

  //helper function will change the selectedCategory state to the name of the category that was clicked.

  //this needs an argument.
  updateSelectedCategory = (categoryName) => {
    console.log('categoryName', categoryName);
    console.log('inside the updateSelectedCategory');
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
    .then(res => res.json())
    .then(mealsData => this.setState({
      selectedCategory: mealsData.meals
    }, /* Need to use this syntax to log what state is () => console.log(this.state)*/))

  }

  updateMyRecipes = (recipe) => {
    console.log("updateMyRecipes", recipe)
    this.setState({
      myRecipes: [...this.state.myRecipes, recipe]
    })

  }

  // a function that will remove a recipe from the MyRecipesContainer

  removeRecipeFromMyRecipes = (indexOfRecipe) => {
    // debugger
    this.setState({
      myRecipes: [...this.state.myRecipes, ]
    })
  }



    // create helper method that will take the categories and create a categories container for each one
    // we'll need a map function
    // renderCategories = () => {
    //   this.state.categories.map( category => {
    //     console.log(this.state.categories)
    //     return <Category categories={this.state.categories}/>
    //   })
    // }


  render() {
    return (
      <div>
        <Header />

        <Row>
          <Col s={4} className='grid-example'>
            <h4>Categories</h4>
            <CategoryContainer categories={this.state.categories} updateSelectedCategory={this.updateSelectedCategory}/>

            {/* how can we render categories here? */}
          </Col>

          <Col s={4} className='grid-example'>
            <h4>Recipes</h4>
            <RecipeContainer recipes={this.state.selectedCategory} updateMyRecipes={this.updateMyRecipes} />
            {/* how can we render recipes here? */}
          </Col>

          <Col s={4} className='grid-example'>
            <h4>My Recipes</h4>
            <MyRecipesContainer myRecipes={this.state.myRecipes} removeRecipes={this.removeRecipeFromMyRecipes}/>
            {/* how can we render recipes here? */}
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
