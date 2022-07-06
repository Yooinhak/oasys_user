import React, { useEffect, useState } from 'react';
import '../../scss/cart.scss';
import axios from 'axios';

const PrefContainer = ({ food }) => {
  return (
    // <div className='foodPrefBox'>
    //   {food.name}
    //   {food.pref.map((foodPref) => {
    //     return (
    //       <div key={foodPref.id} className='prefItem'>
    //         {foodPref.text ? `-> ${foodPref.text}` : null}
    //       </div>
    //     );
    //   })}
    // </div>
    <div className='foodPrefBox'>
      {console.log(food)}
      {food ? food.split(':')[0] : null}
      {food
        ? food
            .split(':')[1]
            .split('+')
            .map((value, index2) => {
              return (
                <div key={index2} className='prefItem'>
                  {value ? `-> ${value}` : null}
                </div>
              );
            })
        : null}
    </div>
  );
};

const Preference = ({ currentFoods, currentLang }) => {
  const [allFoodPref, setAllFoodPref] = useState('');
  const [allFoodPrefEng, setAllFoodPrefEng] = useState('');
  const [Lang, setLang] = useState(true);

  useEffect(() => {
    allFoodPref
      ? axios
          .post(
            '/api/v1/papago/n2mt',
            {
              source: 'ko',
              target: 'en',
              text: allFoodPref,
            },
            {
              headers: {
                'X-Naver-Client-Id': 'Yvknb_Q5yHFA8mxRbwUQ',
                'X-Naver-Client-Secret': 'kNfQu56UpW',
              },
            },
          )
          .then((response) => {
            setAllFoodPrefEng(response.data.message.result.translatedText);
          })
          .catch((e) => {
            console.log(e);
          })
      : setAllFoodPrefEng('');
  }, [allFoodPref]);

  useEffect(() => {
    setAllFoodPref(
      currentFoods
        .map((food) => {
          return [
            food.name,
            food.pref
              .map((foodPref) => {
                if (foodPref.text) return foodPref.text;
                // eslint-disable-next-line array-callback-return
                else return;
              })
              .join('+'),
          ].join(':');
        })
        .join(','),
    );
  }, [currentFoods]);

  return (
    // <div className='prefContainer'>
    //   <button onClick={() => console.log(allFoodPref)}>ggg</button>
    //   {currentLang === 'kr' ? '추가 요청사항' : 'Preference and Instructions'}
    //   <div className='prefInfo'>
    //     {currentFoods.map((food) => {
    //       return <PrefContainer key={food.id} food={food} />;
    //     })}
    //   </div>
    // </div>
    <div className='prefContainer'>
      <button onClick={() => setLang(!Lang)}>번역해서 보여드리기!!</button>
      <div className='prefInfo'>
        {(Lang ? allFoodPref : allFoodPrefEng).split(',').map((food, index) => {
          return <PrefContainer key={index} food={food} />;
        })}
      </div>
    </div>
  );
};

export default Preference;
