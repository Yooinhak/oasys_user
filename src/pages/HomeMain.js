import React from 'react';
import '../scss/homeMain.scss';
import { Title, About, Content } from '../components/homeMain/index';

const HomeMain = () => {
  return (
    <div className='homeMainHoleContainer'>
      <Title />
      <About />
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
                    "essential": "Y"
                  }
                ],
                "id": 1
              }
          ]
      }
  ]
}
*/
