import { INCREMENT, DECREMENT } from "./actionType";

export const tambah = counter => ({
  type: INCREMENT,
  payload: counter
});

export const kurang = counter => ({
  type: DECREMENT,
  payload: counter
});