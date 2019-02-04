import React from 'react'
import { Card, CardTitle } from 'react-materialize'
import v4 from 'uuid'

const MyRecipes = (props) => {
  // console.log(props);

// const handleRecipeClick = (e) => {
//   console.log('inside click', props);
//   props.updateMyRecipes(props.recipe)
// }

const handleMyRecipeClick = () => {
  // this needs to remove the recipe being clicked
  props.removeRecipes(props.recipe)

}


  return (
    <Card
      key={v4()}
      header={<CardTitle key={v4()} image={props.recipe.strMealThumb} />}
      title={props.recipe.strMeal}
      onClick={() => handleMyRecipeClick()}
    />
  )
}

export default MyRecipes
