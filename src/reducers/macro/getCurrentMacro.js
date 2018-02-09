import {GET_CURRENT_MACRO} from '../../actions/macro/currentMacro';

const INITIAL_STATE = {};

const getCurrentMacro = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CURRENT_MACRO:
      return {...state, macro: action.payload};
    default:
      return state;
  }
};

export default getCurrentMacro;

