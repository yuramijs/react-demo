import {GraphQLObjectType as ObjectType, GraphQLString as StringType} from 'graphql';

const AccountsType = new ObjectType({
  name: 'Account',
  fields: {
    id: {
      type: StringType
    },
    name: {
      type: StringType
    },
  },
});

export default AccountsType;
