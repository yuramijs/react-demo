import {GET_CURRENT_DEFINITION} from '../../actions/definition/currentDefinition';

const INITIAL_STATE = {};

const getCurrentDefinitions = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CURRENT_DEFINITION:
      return {...state, definition: action.payload};
    default:
      return state;
  }
};

export default getCurrentDefinitions;

