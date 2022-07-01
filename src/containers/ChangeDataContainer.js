import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { change_data } from '../modules/data';
import { initialization } from '../modules/cart';
import Selector from '../components/LanguageChoicePopIp/Selector';

export const ChangeLanguageContainer = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const onChangeLang = (lang) => dispatch(change_data(lang));
  const onInitialization = () => dispatch(initialization());

  return (
    <Selector
      onInitialization={onInitialization}
      currentLanguage={data.currentLang}
      onChangeLang={onChangeLang}
    />
  );
};
