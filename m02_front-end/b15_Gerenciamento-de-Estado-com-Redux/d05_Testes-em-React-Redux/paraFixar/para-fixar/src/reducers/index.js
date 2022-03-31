const INICIAL_STATE = {
  counter: 0,
};
const ADD_CLICK = 'ADD_CLICK';

const clickReducer = (state = INICIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CLICK:
      return { counter: state.counter + 1 };
    default:
      return state;
  }
}

export default clickReducer;