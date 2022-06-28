import React from 'react';
import '../../scss/order.scss';
import { AddItemToCart } from '../../containers/AddCartContainer';

const Preference = ({ currentFood, onChangePref, onAddPref }) => {
  return (
    <div className='orderPrefContainer'>
      <b>preference, Add Special Instructions</b>
      {currentFood.info.preference.map((v) => {
        return (
          <div key={v.id} className='addItem'>
            <input
              type='checkbox'
              onChange={(e) => onAddPref(v, e.target.checked)}
            />
            {v.text}
          </div>
        );
      })}
      <div className='addItem' style={{ marginTop: '6%' }}>
        <b>Something else to say?</b>
        <textarea
          style={{ width: '100%', height: '10vh', marginTop: '5%' }}
          onChange={(e) => onChangePref(e.target.value)}
        ></textarea>
      </div>
      <AddItemToCart />
    </div>
  );
};

export default Preference;
