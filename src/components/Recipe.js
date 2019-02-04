import React from 'react'
import { Card, CardTitle } from 'react-materialize'
import v4 from 'uuid'

const Recipe = (props) => {
  // console.log(props);

const handleRecipeClick = (e) => {
  console.log('inside click', props);
  props.updateMyRecipes(props.recipe)
}


  return (
    <Card
      key={v4()}
      header={<CardTitle key={v4()} image={props.recipe.strMealThumb} />}
      title={props.recipe.strMeal}
      onClick={() => handleRecipeClick()}
    />
  )
}

export default Recipe
