import React from 'react';
import '../../scss/order.scss';

const Add = ({ currentFood, onChangePrice }) => {
  return (
    <div className='addContainer'>
      {currentFood.info.more_info.map((v) => {
        return (
          <div className='addCategori' key={v.id}>
            <b>{v.title}</b>
            {v.selector.map((v2) => {
              return (
                <div key={v2.id} className='addItem'>
                  <input
                    type='checkbox'
                    onChange={(e) => onChangePrice(v2.price, e.target.checked)}
                  />
                  {v2.name} ({`+${v2.price}`})
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Add;
