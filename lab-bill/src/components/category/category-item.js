import React from 'react';
import CategoryForm from './category-form';
// import { renderIf } from '../lib/index';

class CategoryItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      display:false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChangeState = this.handleChangeState.bind(this);
    this.getOrSetState = this.getOrSetState.bind(this);
  }

  handleClick(event){
    event.preventDefault();
    this.props.destroy(this.props.category);
  }

  handleChangeState(){
    this.setState({display:true});
  }

  getOrSetState() {
    return {
      state: this.state,
      setState: this.setState.bind(this),
    };
  }

  render(){
    return(
        <li>
          <h2>{this.props.category.name}</h2>
          <p>{this.props.category.budget}</p>
          <button type='submit' onClick={this.handleClick}> delete </button>
          <CategoryForm buttonText='update' update={this.props.update} category={this.props.category}/>
        </li>
    );
  }
}
export default CategoryItem;