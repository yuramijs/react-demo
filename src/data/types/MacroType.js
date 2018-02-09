import {GraphQLID as Id, GraphQLInt as Int, GraphQLObjectType as ObjectType, GraphQLString as String} from 'graphql';

const MacroType = new ObjectType({
  name: 'Macro',
  fields: {
    uuid: {
      type: Id
    },
    name: {
      type: String
    },
    type: {
      type: Int
    },
    created_at: {
      type: String
    }
  },
});

export default MacroType;
