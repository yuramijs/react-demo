import {GraphQLInt as Int, GraphQLObjectType as ObjectType, GraphQLString as String} from 'graphql';
import GraphQLJSON from 'graphql-type-json';

const DefinitionType = new ObjectType({
  name: 'Defs',
  fields: {
    id: {
      type: Int
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
    },
    updated_at: {
      type: String
    }
  }
});

const TagType = new ObjectType({
  name: 'Tag',
  fields: {
    id: {
      type: Int
    },
    name: {
      type: String
    },
    definition: {
      type: DefinitionType
    },
    created_at: {
      type: String
    }
  },
});

export default TagType;
