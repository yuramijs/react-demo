import {GraphQLObjectType as ObjectType, GraphQLString as StringType} from 'graphql';

const PublishersType = new ObjectType({
  name: 'Publisher',
  fields: {
    id: {type: StringType},
    name: {type: StringType},
  },
});

export default PublishersType;
