const SET_RUNTIME_VARIABLE = 'SET_RUNTIME_VARIABLE';

const runtime = (state = {}, action) => {
  switch (action.type) {
    case SET_RUNTIME_VARIABLE:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    default:
      return state;
  }
};

export default runtime;
