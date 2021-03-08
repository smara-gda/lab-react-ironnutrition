import React, { Component } from 'react';
import AddNewMeal from './AddNewMeal';
import './App.scss';
import MealBox from './MealBox';
import meals from './meals.json';

class App extends Component {
  state = {
    meals, 
    showForm: false
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

 

  render() {
   
    return (
      <div>
          <button onClick={this.toggleForm}>Add meal</button>
          {this.state.showForm && (
            <AddNewMeal onCreateNewMeal={this.createNewMeal} />
          )}


        {this.state.meals.map(meal => (
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
