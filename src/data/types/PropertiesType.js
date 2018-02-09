import {GraphQLObjectType as ObjectType, GraphQLString as StringType} from 'graphql';

const PropertiesType = new ObjectType({
  name: 'Property',
  fields: {
    id: {type: StringType},
    url: {type: StringType},
    platform: {type: StringType},
  },
});

export default PropertiesType;
