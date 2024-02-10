export const increment = () => ({
  type: "INCREMENT",
});

export const decrement = () => ({
  type: "DECREMENT",
});

export const addRandom = (value) => ({
  type: "ADD_RANDOM",
  payload: value,
});
