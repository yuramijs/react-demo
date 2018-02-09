import {GraphQLObjectType as ObjectType, GraphQLString as StringType} from 'graphql';

const UsersType = new ObjectType({
  name: 'User',
  fields: {
    id: {type: StringType},
    firstName: {type: StringType},
    lastName: {type: StringType},
    email: {type: StringType},
    password: {type: StringType},
  },
});

export default UsersType;
