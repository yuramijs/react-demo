import {GET_DEFINITIONS} from '../../actions/definition/getDefinitions';

const INITIAL_STATE = {};

const getDefinitions = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_DEFINITIONS:
      return {...state, definitions: action.payload};
    default:
      return state;
  }
};

export default getDefinitions;

