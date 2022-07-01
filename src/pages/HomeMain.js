import React from 'react';
import '../scss/homeMain.scss';
import { Title, Content } from '../components/homeMain/index';
import { AboutContainer } from '../containers/HomeContainer';

const HomeMain = () => {
  return (
    <div className='homeMainHoleContainer'>
      <Title />
      <AboutContainer />
      <Content />
    </div>
  );
};

export default HomeMain;

/*
{
  "storeName": "",
  "storeInfo": "",
  "storeIntro": "",
  "categori": [
      {
          "name": "",
          "menu": [
              {
                "name": "",
                "price": 0,
                "info": "",
                "more_info": [
                  {
                    "title": "",
                    "selector": [
                      {
                        "name": "",
                        "price": 0
                      }
                    ],
                  }
                ],
                "id": 1
              }
          ]
      }
  ]
}
*/
