import {GET_MACROS} from '../../actions/macro/getMacros';

const INITIAL_STATE = {};

const getMacros = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_MACROS:
      return {...state, macros: action.payload};
    default:
      return state;
  }
};

export default getMacros;

