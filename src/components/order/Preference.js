import React from 'react';
import '../../scss/order.scss';
import { AddItemToCart } from '../../containers/AddCartContainer';
import { useSelector } from 'react-redux';

const Preference = ({ currentFood, onChangePref, onAddPref }) => {
  const lang = useSelector((state) => state.lang);
  return (
    <div className='orderPrefContainer'>
      <b>
        {lang.slice(-7, -5) === 'kr'
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
          {lang.slice(-7, -5) === 'kr'
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
