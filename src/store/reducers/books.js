import * as actionTypes from "../actionTypes";

const INITIAL_STATE = {
	products: [
    {
      id: 1,
      title: "Elon Musk",
      desc: "Ashlee Vange",
      nrPages: 253,
      category: "Technology",
      price: 40,
      rating: 4.7,
      img: "img1",
      NumberRating: 7523,
      date:"May 19, 2015",
    },
    {
      id: 2,
      title: "The Future is Faster than You Think",
      desc: "Peter Diamandis and Steven Kotler",
      nrPages: 487,
      category: "Technology",
      price: 45,
      rating: 4.6,
      img: "img2",
      NumberRating: 8523,
      date:"May 12, 2016",
    },
    {
      id: 3,
      title: "Steve Jobs",
      desc: "Walter Isaacson",
      nrPages: 348,
      category: "Technology",
      price: 35,
      rating: 4.9,
      img: "img3",
      NumberRating: 15523,
      date:"Jul 19, 2020",
    },
    {
      id: 4,
      title: "Life 3.0",
      desc: "Max Tegmark",
      nrPages: 187,
      category: "psychology",
      price: 60,
      rating: 4.4,
      img: "img4",
      NumberRating: 4523,
      date:"Feb 03, 2018",
    },
    {
      id: 5,
      title: "Digital Minimalism",
      desc: "Cal Newport",
      nrPages: 247,
      category: "Technology",
      price: 70,
      rating: 4.5,
      img: "img5",
      NumberRating: 3523,
      date:"Jan 29, 2021",
    },
    {
      id: 6,
      title: "The Innovators",
      desc: "Walter Isaacson",
      nrPages: 187,
      category: "electronics",
      price: 40,
      rating: 4.8,
      img: "img6",
      NumberRating: 2523,
      date:"Sep 09, 2013",
    },
    {
      id: 7,
      title: "The Phoenix Project",
      desc: "Gene Kim, Kevin Behr, and George Spafford",
      nrPages: 348,
      category: "Technology",
      price: 75,
      rating: 4.6,
      img: "img7",
      NumberRating: 6523,
      date:"Mar 11, 2020",
    },
    {
      id: 8,
      title: "Irresistible",
      desc: "Adam Alter",
      nrPages: 118,
      category: "Technology",
      price: 48,
      img: "img8",
      rating: 4.3,
      NumberRating: 8523,
      date:"May 24, 2011",
    },
  ],
  cart: [],
  currentItem: null,
};

const bookReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // marrum te dhanat nga vargu i librave
      const item = state.products.find((products) => products.id === action.payload.id);
      // shikojm a ka te dhena ne Cart tashme
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};
export default bookReducer;
