import {GraphQLList as List} from 'graphql';
import currentPublisherType from '../types/currentPublisherType';
import {Publishers} from './../controllers';

const currentPublisher = {
  type: new List(currentPublisherType),
  resolve: async () => {
    const getPublishers = await Publishers.get();
    return getPublishers.map(item => item);
  },
};

export default currentPublisher;