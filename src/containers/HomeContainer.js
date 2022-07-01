import React from 'react';
import { useSelector } from 'react-redux';
import { About } from '../components/homeMain';

export const AboutContainer = () => {
  const currentStore = require('../sampleData/jangs_eng.json').storeInfo.name;
  const currentLang = useSelector((state) => state.data.currentLang);

  return <About currentStore={currentStore} currentLang={currentLang} />;
};
