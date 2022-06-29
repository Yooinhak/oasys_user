import React from 'react';
import '../../scss/cart.scss';

const Preference = ({ currentFoods, lang }) => {
  return (
    <div className='prefContainer'>
      {lang.slice(-7, -5) === 'kr'
        ? '추가 요청사항'
        : 'Preference and Instructions'}
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
