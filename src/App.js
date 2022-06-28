import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Cart, Order, Home, PopUp, Info } from './pages';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<PopUp />} />
      <Route path='/home' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/order' element={<Order />} />
      <Route path='/info' element={<Info />} />
    </Routes>
  );
}

export default App;
