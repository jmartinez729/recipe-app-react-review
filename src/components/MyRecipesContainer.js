import React from 'react'
import MyRecipes from './MyRecipes'
import v4 from 'uuid' // another way of generating unique ids (useful for keys)

class MyRecipesContainer extends React.Component {

  renderMyRecipes = () => {
    return this.props.myRecipes.map(recipe => {
      return <MyRecipes
        key={recipe.idMeal}
        recipe={recipe}
        updateMyRecipes={this.props.updateMyRecipes}
        removeRecipes={this.props.removeRecipes}
        />
    })
  }

  render() {
    return (
      <div>{this.renderMyRecipes()}</div>
    )
  }
}

export default MyRecipesContainer
