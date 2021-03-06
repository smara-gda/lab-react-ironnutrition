import React from 'react';
import meals from './meals.json';

class MealBox  extends React.Component{
    render() {
        const {image,name,calories, quantity} = this.props
        // const meal = this.props.meal;
        return (
          <div className="media">
            <img
            //   src="https://i.imgur.com/eTmWoAN.png"
              src={image}
              className="img-thumbnail mr-3 mw-25 border-0"
              style={{ maxWidth: '10em' }}
            />
            <div className="media-body align-self-center">
              <h5 className="mt-0 mb-1">{name}</h5>
              <small>{calories} cal</small>
            </div>
            <form className="row align-self-center">
              
              <input
                className="form-control col-9"
                type="number"
                value={quantity}
              />
              <button className="btn btn-primary col-3">+</button>
            </form>
          </div>
    
    )

}
}

export default MealBox;