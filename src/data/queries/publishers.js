import {GraphQLList as List} from 'graphql';
import PublishersType from '../types/PublishersType';
import {Publishers} from './../controllers';

const publishers = {
  type: new List(PublishersType),
  resolve: async () => {
    const getPublishers = await Publishers.get();
    return getPublishers.map(item => item);
  },
};

export default publishers;
