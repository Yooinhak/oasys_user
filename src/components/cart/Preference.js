import React from 'react';
import '../../scss/cart.scss';

const Preference = ({ currentFoods, currentLang }) => {
  return (
    <div className='prefContainer'>
      {currentLang === 'kr' ? '추가 요청사항' : 'Preference and Instructions'}
      <div className='prefInfo'>
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
