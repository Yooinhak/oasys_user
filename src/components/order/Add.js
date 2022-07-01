import React from 'react';
import '../../scss/order.scss';

const EachCategori = ({ value, onChangePrice }) => {
  return (
    <div className='addItem'>
      <input
        type='checkbox'
        onChange={(e) =>
          onChangePrice(value.price, e.target.checked, {
            id: value.id,
            item: `${value.name} (${`+${value.price.toLocaleString(
              'ko-KR',
            )}`})`,
          })
        }
      />
      {value.name} ({`+${value.price.toLocaleString('ko-KR')}`})
    </div>
  );
};

const Add = ({ currentFood, onChangePrice }) => {
  return (
    <div className='addContainer'>
      {currentFood.info.more_info.map((v) => {
        return (
          <div className='addCategori' key={v.id}>
            <b>{v.title}</b>
            {v.selector.map((v2) => {
              return (
                <EachCategori
                  key={v2.id}
                  value={v2}
                  onChangePrice={onChangePrice}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Add;
