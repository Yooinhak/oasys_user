import React from 'react';
import '../scss/restaurant.scss';
import { useSelector } from 'react-redux';

const RestaurantInfo = () => {
  const language = useSelector((state) => state.lang);
  const jsonData = require(`../sampleData/${language}`);
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
