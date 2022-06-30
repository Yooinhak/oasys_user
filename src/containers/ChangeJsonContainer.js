import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { change_lang } from '../modules/json';
import Selector from '../components/LanguageChoicePopIp/Selector';

export const ChangeLanguageContainer = () => {
  const currentLanguage = useSelector((state) => state.lang);
  const dispatch = useDispatch();
  const onChangeLanguage = (lang) => dispatch(change_lang(lang));

  return (
    <Selector
      currentLanguage={currentLanguage}
      onChangeLanguage={onChangeLanguage}
    />
  );
};
