import { Increment, decrement } from "../actions/countActions";

// creating the InitialState
let InitialState = {
  count: 0,
};

// creating the Reducers
export let countReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "INCREMENT": //static type-action (manually changed when ever required)
      return { count: state.count + 1 };
    case decrement: // dynamic type (dynamically changed when ever required)
      return { count: state.count + 1 };

    default:
      return state;
  }
};
