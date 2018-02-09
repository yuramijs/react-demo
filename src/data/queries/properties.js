import {GraphQLList as List} from 'graphql';
import PropertiesType from '../types/PropertiesType';
import {Properties} from './../controllers';

const properties = {
  type: new List(PropertiesType),
  resolve: async () => {
    const getProperties = await Properties.get();
    return getProperties.map(item => item);
  },
};

export default properties;
