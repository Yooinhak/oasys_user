const CHANGE_LANG = 'json/CHANGE_LANG';

export const change_lang = (lang) => ({
  type: CHANGE_LANG,
  lang,
});

const currentJson = 'jangs_kr.json';

export default function lang(state = currentJson, action) {
  switch (action.type) {
    case CHANGE_LANG:
      return `jangs_${action.lang}.json`;
    default:
      return state;
  }
}
