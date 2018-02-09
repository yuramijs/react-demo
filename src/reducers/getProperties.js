import {FETCH_PROPERTY} from '../actions/property';

const INITIAL_STATE = {};

const getProperties = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PROPERTY:
      return {...state, properties: action.payload};
    default:
      return state;
  }
};

export default getProperties;

