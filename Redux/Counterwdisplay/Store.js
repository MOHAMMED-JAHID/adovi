import { createStore } from "redux";

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const valueReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_VALUE":
      return [...state, action.payload];
    case "POP_VALUE":
      return [];
    default:
      return state;
  }
};

const store = createStore(counterReducer, valueReducer);

export default store;
