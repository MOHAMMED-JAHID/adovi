import { createStore } from 'redux';

// Define initial state
const initialState = {
todos: []
};

// Define reducer function
const todoReducer = (state = initialState, action) => {
switch (action.type) {
case 'ADD_TODO':
return {
...state,
todos: [...state.todos, { id: action.id, text: action.text }]
};
case 'REMOVE_TODO':
return {
...state,
todos: state.todos.filter(todo => todo.id !== action.id)
};
case 'EDIT_TODO':
return {
...state,
todos: state.todos.map(todo =>
todo.id === action.id ? { ...todo, text: action.text } : todo
)
};
default:
return state;
}
};

// Create Redux store
const store = createStore(todoReducer);

export default store;
