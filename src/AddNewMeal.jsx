import React, { Component } from 'react';

class AddNewMeal extends Component {
    state = {
    name: '',
    calories: '',
    image: '',
    quantity: ''
    
  };
    handleFormSubmission = (event) => {
        event.preventDefault();
        const addingNewMeal = this.state;
       
        if (addingNewMeal.name && addingNewMeal.image && addingNewMeal.quantity) {
          this.props.onCreateNewMeal(addingNewMeal);
          console.log(addingNewMeal)
        } else{

          return alert('Please fill in the form')
        }
      };    
    handleNewMeal = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
          [name]: value
        });
      };
	  render() {
		  return (
			<div className='media container' >
				  <form onSubmit={this.handleFormSubmission}>
              <div> 
                <label htmlFor="foodName">Food name</label>
                <input
                   type="text"
                   id="foodName"
                   name="name"
                   onChange={this.handleNewMeal}
                   value={this.state.name}
                   placeholder="Food name"
                />
                <label htmlFor="Kcal">Number of Kcal</label>
                <input
                   type="text"
                   id="Kcal"
                   name="calories"
                   onChange={this.handleNewMeal}
                   value={this.state.calories}
                   placeholder="Number of Kcal"
                />
                <label htmlFor="imgURL">URL image</label>
                <input
                   type="url"
                   id="imgURL"
                   name="image"
                   onChange={this.handleNewMeal}
                   value={this.state.image}
                   placeholder="URL image"
                />
                <label htmlFor="quantity">Quantity</label>
                <input
                   type="number"
                   id="quantity"
                   name="quantity"
                   onChange={this.handleNewMeal}
                   value={this.state.quantity}
                />
                <button>Add new meal</button> 
             </div>
          </form>
      </div>
		 );
	}
}

export default AddNewMeal;