import React, { Component } from 'react';
import './App.scss';
import MealBox from './MealBox';
import meals from './meals.json';

class App extends Component {
  state = {
    meals, 
  };

  render() {
    // const {name, calories, image, quantity} = this.state
    return (
      <div>
      
        {meals.map(meal => (
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
