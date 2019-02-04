import React from 'react'
import Category from './Category'
import v4 from 'uuid' // another way of generating unique ids (useful for keys)



class CategoryContainer extends React.Component {

  // componentDidMount() {
  //   fetch(specificCategories)
  // }

  renderCategories = () => {
// console.log(this.props.updateSelectedCategory());
    // console.log(this.props.categories)
    return this.props.categories.map( category => {
      return <Category
        key={category.idCategory}
        name={category.strCategory}
        description={category.strCategoryDescription}
        image={category.strCategoryThumb}
        updateSelectedCategory={this.props.updateSelectedCategory}
        />
    })
    }


  render() {
    return (
        <div>
          {this.renderCategories()}

        </div>
    )
  }
}

export default CategoryContainer
