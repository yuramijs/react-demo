import {GET_CURRENT_PUBLISHER} from '../actions/currentPublisher';

const INITIAL_STATE = {};

const getCurrentPublisher = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CURRENT_PUBLISHER:
      return {...state, currentPublisher: action.payload};
    default:
      return state;
  }
};

export default getCurrentPublisher;

