import React, { useEffect, useState } from 'react';
import '../../scss/cart.scss';
import axios from 'axios';

const PrefItemContainer = ({ food }) => {
  return (
    <div className='foodPrefBox'>
      {food ? food.split(':')[0] : null}
      {food
        ? food
            .split(':')[1]
            .split('+')
            .map((value, index2) => {
              return (
                <div key={index2} className='prefItem'>
                  {value.trim() ? `-> ${value}` : null}
                </div>
              );
            })
        : null}
    </div>
  );
};

const Preference = ({ currentFoods, currentLang }) => {
  const [mkSentences, setMkSentences] = useState('');
  const [anotherLangSentences, setanotherLangSentences] = useState('');
  const [reverseLang, setreverseLang] = useState(false);

  // 한 번에 번역할 수 있게 문장화 시키기.
  // => 카트에 담겨온 state가 변할때마다 바꿔주기.
  useEffect(() => {
    setMkSentences(
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
        .join('='),
    );
  }, [currentFoods]);

  // 문장화 시킨 문장을 papago API로 번역해서
  // anotherLangSentences에 넣어주기.
  // 계속 번역을 돌리는것 보다는 state에 넣어 두고 사용하는게 좋을것 같다는 판단.
  useEffect(() => {
    mkSentences
      ? axios
          .post(
            '/api/v1/papago/n2mt', //proxy target: 'https://openapi.naver.com'
            {
              source: currentLang === 'kr' ? 'ko' : 'en',
              target: currentLang === 'kr' ? 'en' : 'ko',
              text: mkSentences,
            },
            {
              headers: {
                'X-Naver-Client-Id': 'Yvknb_Q5yHFA8mxRbwUQ',
                'X-Naver-Client-Secret': 'kNfQu56UpW',
              },
            },
          )
          .then((response) => {
            setanotherLangSentences(
              response.data.message.result.translatedText,
            );
          })
          .catch((e) => {
            console.log(e);
          })
      : setanotherLangSentences('');
  }, [mkSentences, currentLang]);

  return (
    <div className='prefContainer'>
      <button onClick={() => setreverseLang(!reverseLang)}>
        번역해서 보여드리기!!
      </button>
      <div className='prefInfo'>
        {console.log(mkSentences)}
        {console.log(anotherLangSentences)}
        {(reverseLang ? anotherLangSentences : mkSentences)
          .split('=')
          .map((food, index) => {
            return <PrefItemContainer key={index} food={food} />;
          })}
      </div>
    </div>
  );
};

export default Preference;
