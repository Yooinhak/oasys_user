import React, { useRef } from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { Link } from 'react-router-dom';
import '../../scss/homeMain.scss';
import { set_state } from '../../modules/food';
import { useDispatch, useSelector } from 'react-redux';

// 음식 카테고리별로
const FoodCategoriComponent = ({ categori, categoriRef }) => {
  return (
    <div
      ref={(e) => (categoriRef.current[categori.id] = e)}
      className='categoriBox'
    >
      <h1>{categori.name}</h1>
      {categori.menu.map((v) => {
        return <FoodComponent key={v.id} food={v} />;
      })}
    </div>
  );
};

// 각각의 음식별로
const FoodComponent = ({ food }) => {
  const dispatch = useDispatch();
  const onChangeState = () => dispatch(set_state(food));
  return (
    <Link to='/order' style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className='foodBox' onClick={onChangeState}>
        <div>
          <b className='foodExplain'>{food.name}</b>
          <div className='foodExplain'>
            {food.price.toLocaleString('ko-KR')}
          </div>
          <div className='foodExplain'>
            {/* 이미지가 있을때는 글자수 제한 */}
            {/* {food.info.length < 30 ? food.info : `${food.info.slice(0, 30)}...`} */}
            {food.info}
          </div>
        </div>
        {/* <div className='foodImg' /> */}
      </div>
    </Link>
  );
};

const Content = () => {
  const [language, cartAmount] = useSelector((state) => [
    state.lang,
    state.cart.items.length,
  ]);
  const categori = require(`../../sampleData/${language}`).categori;

  const categoriRef = useRef([]);
  const onFocusCategori = (id) => {
    categoriRef.current[id].scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className='contentContainer'>
      <div className='categoriesContainer'>
        <h1>
          {language.slice(-7, -5) === 'kr'
            ? '메뉴 카테고리'
            : 'menu categories'}
        </h1>
        <div className='categoriesScrollContainer'>
          <ScrollMenu>
            {categori.map((v) => {
              return (
                <button
                  key={v.id}
                  className='categoriItem'
                  onClick={() => onFocusCategori(v.id)}
                >
                  {v.name}
                </button>
              );
            })}
          </ScrollMenu>
        </div>
      </div>
      <div className='foodContainer'>
        {categori.map((v) => {
          return (
            <FoodCategoriComponent
              categoriRef={categoriRef}
              key={v.id}
              categori={v}
            />
          );
        })}
      </div>
      <Link className='homeGoCartLink' to='/cart'>
        <div className='cartAmount'>{cartAmount}</div>
        <button className='goCartBtn'>Cart</button>
      </Link>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className='scrollToTopBtn'
      >
        Top
      </button>
    </div>
  );
};

export default Content;
