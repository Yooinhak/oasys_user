import React from 'react';
import '../../scss/cart.scss';

const Preference = ({ currentFoods }) => {
  return (
    <div className='prefContainer'>
      Preference and Instructions
      <div className='prefInfo'>
        {/* <div className='prefItem'>please make the food less spicy.</div>
        <div className='prefItem'>Thank you.</div> */}
        {currentFoods.map((food) => {
          return (
            <div key={food.id} className='foodPrefBox'>
              {food.name}
              {food.pref.map((foodPref) => {
                return (
                  <div key={foodPref.id} className='prefItem'>
                    {foodPref.text ? `-> ${foodPref.text}` : null}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Preference;
