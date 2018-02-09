import {FETCH_PUBLISHER} from '../actions/publisher';

const INITIAL_STATE = {};

const getPublishers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PUBLISHER:
      return {...state, publishers: action.payload};
    default:
      return state;
  }
};

export default getPublishers;

