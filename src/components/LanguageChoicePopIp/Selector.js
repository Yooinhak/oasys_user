import React from 'react';

export default function Selector({ onChangeLanguage }) {
  return (
    <select onChange={(e) => onChangeLanguage(e.target.value)}>
      <option key='korean' value='kr'>
        한국어
      </option>
      <option key='english' value='eng'>
        English
      </option>
    </select>
  );
}
