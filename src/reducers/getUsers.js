import {FETCH_USERS} from '../actions/users';

const INITIAL_STATE = {};

const getUsers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {...state, users: action.payload};
    default:
      return state;
  }
};

export default getUsers;
