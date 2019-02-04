import React from 'react'
import Recipe from './Recipe'
import v4 from 'uuid' // another way of generating unique ids (useful for keys)

class RecipeContainer extends React.Component {
  // constructor(props) {
  //   super(props)
  //   // what are you!!!????????
  //   // creating a reference to the element being render
  //   // this.myRef = React.createRef(props);
  //   // console.log(this.myRef);
  // }

  renderRecipes = () => {
    return this.props.recipes.map(recipe => {
      return <Recipe
        key={recipe.idMeal}
        recipe={recipe}
        updateMyRecipes={this.props.updateMyRecipes}

        />
    })
  }

  render() {
    // console.log(this.myRef);
    return (
      <div>
        {this.renderRecipes()}

      </div>
    )
  }
}

export default RecipeContainer
