import React from 'react';
import '../../scss/order.scss';

const Preference = () => {
  return (
    <div className='orderPrefContainer'>
      <b>preference, Add Special Instructions</b>
      <div className='addItem'>
        <input type='checkbox' />
        please make it less spicy
      </div>
      <div className='addItem' style={{ marginTop: '6%' }}>
        <b>Something else to say?</b>
        <textarea
          style={{ width: '100%', height: '10vh', marginTop: '5%' }}
          onChange={(e) => console.log(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default Preference;
