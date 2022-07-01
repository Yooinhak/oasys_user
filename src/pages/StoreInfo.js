import React from 'react';
import '../scss/restaurant.scss';
import { useSelector } from 'react-redux';

const StoreInfo = () => {
  const store = useSelector((state) => state.data);
  const jsonData =
    require(`../sampleData/${store.currentStore}_${store.currentLang}.json`).storeInfo;
  return (
    <div className='infoHoleContainer'>
      <h1>{jsonData.name}</h1>
      {jsonData.guide.map((v) => {
        return (
          <div key={v.id} className='eachContainer'>
            <b>{v.title}</b>
            <div>{v.content}</div>
          </div>
        );
      })}
    </div>
  );
};

export default StoreInfo;
