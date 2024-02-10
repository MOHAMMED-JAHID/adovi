export const increment = () => ({
  type: "INCREMENT",
});

export const decrement = () => ({
  type: "DECREMENT",
});

export const addValue = (value) => ({
  type: "ADD_VALUE",
  payload: value,
});

export const popValue = () => ({
  type: "POP_VALUE",
});
