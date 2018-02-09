import {GraphQLInt as Int, GraphQLObjectType as ObjectType, GraphQLString as String} from 'graphql';

const UserType = new ObjectType({
  name: 'User',
  fields: {
    id: {
      type: Int
    },
    first_name: {
      type: String
    },
    last_name: {
      type: String
    },
    email: {
      type: String
    },
    created_at: {
      type: String
    },
    updated_at: {
      type: String
    },
  },
});

export default UserType;
