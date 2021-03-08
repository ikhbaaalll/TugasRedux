import { INCREMENT, DECREMENT } from "./actionType";

const initialState = {
  counter: 0
};

export const mReducers = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: action.payload + 1 };
    case DECREMENT:
      return { ...state, counter: action.payload - 1 };
    default:
      return state;
  }
};