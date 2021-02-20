/* const initialState = {
  locale: "en-GB",
};
 */
export const setLang = (code) => {
  return {
    type:"SET_LANG",
    code:code,
  };
};


