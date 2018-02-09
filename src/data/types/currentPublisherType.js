import {GraphQLObjectType as ObjectType, GraphQLString as StringType} from 'graphql';

const currentPublisherType = new ObjectType({
  name: 'currentPublisher',
  fields: {
    id: {type: StringType},
  },
});

export default currentPublisherType;
