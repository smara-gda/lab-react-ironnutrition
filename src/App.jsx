import React, { Component } from 'react';
import AddNewMeal from './AddNewMeal';
import './App.scss';
import MealBox from './MealBox';
import meals from './meals.json';
import Search from './Search';

class App extends Component {
  state = {
    meals, 
    showForm: false,
    searchTerm: ''
  };
  toggleForm = () => {
      this.setState({
        showForm: !this.state.showForm
      });
    };
  createNewMeal = (meal) => {
    this.setState({
      meals: [meal, ...this.state.meals]
    });
    this.toggleForm();
  };
  search = (value) =>{
    // const searchItems = this.state.meals.filter(meal => meal.toLowerCase().includes(value))
    this.setState({searchTerm: value})
  }
  
  render() {
   
    return (
      <div className='container'>

          {/* itaration 3 */}
          <button onClick={this.toggleForm}>Add meal</button>
            {this.state.showForm && (
              <AddNewMeal onCreateNewMeal={this.createNewMeal} />
            )}

         {/* iteration 4 */}
         <Search onSearchTerm={this.search}/>
         {this.state.meals.filter((meal) => meal.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())

        // iteration 2
         ).map(meal => (
          <MealBox 
            key={Math.random().toString()}
            name={meal.name}
            calories={meal.calories}
            image= {meal.image}
            quantity= {meal.quantity} 
          />
      ))}
      </div>
    );
  }
}

export default App;
