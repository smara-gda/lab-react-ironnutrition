import React, { Component } from 'react';
import './App.scss';
import MealBox from './MealBox';
import meals from './meals';

class App extends Component {
  state = {
    name: 'Salad',
    calories: '145',
    image: 'https://i.imgur.com/eTmWoAN.png',
    quantity: '1',
  }

  render() {
    const {name, calories, image, quantity} = this.state
    return (
      <div>
        {/* <MealBox /> 
        {meals.map(meal => {
          <MealBox meal={meal} />
        })} */}

        <MealBox 
        name={name}
        calories={calories}
        image= {image}
        quantity= {quantity} />
      </div>
    );
  }
}

export default App;
