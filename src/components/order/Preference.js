import React from 'react';
import '../../scss/order.scss';
import { AddItemToCart } from '../../containers/AddCartContainer';

const Preference = ({ currentLang, currentFood, onChangePref, onAddPref }) => {
  return (
    <div className='orderPrefContainer'>
      <b>
        {currentLang === 'kr'
          ? '추가 요청사항'
          : 'Preference, Add Special Instructions'}
      </b>
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
      <div className='addTextItem' style={{ marginTop: '6%' }}>
        <b>
          {currentLang === 'kr'
            ? '추가 요청사항이 더 있을까요?'
            : 'Something else to say?'}
        </b>
        <textarea
          className='textAreaContainer'
          onChange={(e) => onChangePref(e.target.value)}
        ></textarea>
      </div>
      <AddItemToCart />
    </div>
  );
};

export default Preference;
