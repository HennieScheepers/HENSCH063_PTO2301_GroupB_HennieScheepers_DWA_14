// Define an initial state
const initialState = {
  count: 0,
};

// Define actions
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// Action creators
export function increment() {
  return { type: INCREMENT };
}

export function decrement() {
  return { type: DECREMENT };
}

// Reducer function
function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

// Create a store
function createStore(reducer) {
  let state = reducer(undefined, {}); // Initialize state
  const listeners = [];

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  }

  function subscribe(listener) {
    listeners.push(listener);
  }

  return {
    getState,
    dispatch,
    subscribe,
  };
}

export const store = createStore(reducer);

export default { store, increment, decrement };
