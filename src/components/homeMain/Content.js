import React from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { Link } from 'react-router-dom';
import '../../scss/homeMain.scss';
import { set_state } from '../../modules/food';
import { useDispatch } from 'react-redux';

// 음식 카테고리별로
const FoodCategoriComponent = ({ categori }) => {
  return (
    <div className='categoriBox'>
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
            {food.info.length < 30 ? food.info : `${food.info.slice(0, 30)}...`}
          </div>
        </div>
        <div className='foodImg' />
      </div>
    </Link>
  );
};

const Content = () => {
  const categori = require('../../sampleData/jangs_eng.json').categori;
  return (
    <div className='contentContainer'>
      <div className='categoriesContainer'>
        <h1>menu categories</h1>
        <div className='categoriesScrollContainer'>
          <ScrollMenu>
            {categori.map((v) => {
              return (
                <button key={v.id} className='categoriItem'>
                  {v.name}
                </button>
              );
            })}
          </ScrollMenu>
        </div>
      </div>
      <div className='foodContainer'>
        {categori.map((v) => {
          return <FoodCategoriComponent key={v.id} categori={v} />;
        })}
      </div>
      <Link to='/cart'>
        <button className='goCartBtn'>Cart</button>
      </Link>
    </div>
  );
};

export default Content;