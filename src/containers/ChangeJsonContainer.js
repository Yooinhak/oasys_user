import React from 'react';
import { useDispatch } from 'react-redux';
import { change_lang } from '../modules/json';
import Selector from '../components/LanguageChoicePopIp/Selector';

export const ChangeLanguageContainer = () => {
  const dispatch = useDispatch();
  const onChangeLanguage = (lang) => dispatch(change_lang(lang));

  return <Selector onChangeLanguage={onChangeLanguage} />;
};
