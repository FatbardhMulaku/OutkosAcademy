const initialState = {
  locale: "en-GB",
};

const langReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LANG":
      return { ...state, locale: action.lang };
    default:
      return state;
  }
};

export default langReducer;
