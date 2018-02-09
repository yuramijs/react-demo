import {GraphQLInt as Int, GraphQLObjectType as ObjectType, GraphQLString as String} from 'graphql';
import GraphQLJSON from 'graphql-type-json';

const DefinitionType = new ObjectType({
  name: 'Definition',
  fields: {
    id: {
      type: Int
    },
    uuid: {
      type: String
    },
    name: {
      type: String
    },
    path: {
      type: String
    },
    size: {
      type: GraphQLJSON
    },
    created_at: {
      type: String
    }
  },
});

export default DefinitionType;
