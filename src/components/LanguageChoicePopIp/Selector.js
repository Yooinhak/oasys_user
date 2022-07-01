import React from 'react';

export default function Selector({ currentLanguage, onChangeLang }) {
  return (
    <select
      value={currentLanguage === 'kr' ? 'kr' : 'eng'}
      onChange={(e) => onChangeLang(e.target.value)}
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
