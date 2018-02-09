import {GraphQLList as List} from 'graphql';
import UsersType from '../types/UsersType';
import {Users} from './../controllers';

let items = [];
const users = {
  type: new List(UsersType),
  resolve: async () => {
    const getUsers = await Users.get();
    return getUsers.map(item => item);
  },
};

export default users;
