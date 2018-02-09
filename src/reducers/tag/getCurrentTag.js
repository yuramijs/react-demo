import {GET_CURRENT_TAG} from '../../actions/tag/currentTag';

const INITIAL_STATE = {};

const getCurrentTag = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CURRENT_TAG:
      return {...state, tag: action.payload};
    default:
      return state;
  }
};

export default getCurrentTag;

