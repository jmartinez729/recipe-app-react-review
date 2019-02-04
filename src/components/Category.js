import React from 'react'
import { Card, CardTitle, Button } from 'react-materialize'
import v4 from 'uuid'
// import CATEGORY_HERE from 'src/App.js'
/*

*/
// key={v4()} pulled out of const Category return

// helper function that onClick sets CATEGORY_HERE to the strCategory of the item that was clicked


const Category = (props) => {
    // console.log("in category.js", props.updateSelectedCategory())

  const handleFindRecipes = () => {
    // console.log(props.name)
    // this is passing up the name that is clicked. 
     props.updateSelectedCategory(props.name)
  }

  return (
    <Card
      header={<CardTitle key={v4(props.id)} image={props.image} />}
      title={props.name}
      actions={[<Button key={v4(props.id)} onClick={() => handleFindRecipes()} waves='light'>Find Recipes</Button>]}
    >
      {props.description}
    </Card>
  )
}

export default Category
