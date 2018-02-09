import {GET_TAGS} from '../../actions/macro/getTags';

const INITIAL_STATE = {};

const getTags = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_TAGS:
      return {...state, tags: action.payload};
    default:
      return state;
  }
}

export default getTags;

