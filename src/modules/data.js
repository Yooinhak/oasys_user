const CHANGE_DATA = 'data/CHANGE_DATA';

export const change_data = (lang) => ({
  type: CHANGE_DATA,
  lang,
});

// const currentJson = 'jangs_kr.json';
const dataState = {
  currentStore: 'jangs',
  currentLang: 'kr',
};

export default function data(state = dataState, action) {
  switch (action.type) {
    case CHANGE_DATA:
      return {
        ...state,
        currentLang: action.lang,
      };
    default:
      return state;
  }
}
