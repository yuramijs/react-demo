import {DELETE_MACRO} from '../../actions/macro/deleteMacro';

const INITIAL_STATE = {};

const deleteMacro = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DELETE_MACRO:
      return {...state, macros: [{name: 'name'}]};
    default:
      return state;
  }
};

export default deleteMacro;

