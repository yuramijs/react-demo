import {GraphQLList as List} from 'graphql';
import AccountsType from '../types/AccountsType';
import {Accounts} from './../controllers';

const accounts = {
  type: new List(AccountsType),
  resolve: async () => {
    const getAccounts = await Accounts.get();
    return getAccounts.map(item => item);
  },
};

export default accounts;
