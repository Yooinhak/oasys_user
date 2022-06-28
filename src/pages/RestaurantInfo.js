import React from 'react';
import '../scss/restaurant.scss';

const RestaurantInfo = () => {
  const jsonData = require('../sampleData/jangs_eng.json');
  const stInfo = jsonData.storeInfo;
  return (
    <div className='infoHoleContainer'>
      <div>가게 이름: {stInfo.storeName}</div>
      <div>가게 정보: {stInfo.storeInfo}</div>
      <div>가게 소개: {stInfo.storeIntro}</div>
    </div>
  );
};

export default RestaurantInfo;
