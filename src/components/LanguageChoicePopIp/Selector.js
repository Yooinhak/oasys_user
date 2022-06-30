import React from 'react';

export default function Selector({ currentLanguage, onChangeLanguage }) {
  return (
    <select
      value={currentLanguage.slice(-7, -5) === 'kr' ? 'kr' : 'eng'}
      onChange={(e) => onChangeLanguage(e.target.value)}
    >
      <option key='korean' value='kr'>
        한국어
      </option>
      <option key='english' value='eng'>
        English
      </option>
    </select>
  );
}
