import {FETCH_ACCOUNT} from '../actions/account';

const INITIAL_STATE = {};

const getAccounts = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ACCOUNT:
      return {...state, accounts: action.payload};
    default:
      return state;
  }
};

export default getAccounts;

