import {graphQueryResp} from './../helpers';
import {isEmpty} from 'lodash';

export const GET_CURRENT_PUBLISHER = 'GET_CURRENT_PUBLISHER';

const currentPublisher = async (publisher) => {

  const query = `currentPublisher { id }`;
  const resp = await graphQueryResp(query);

  const {data} = await resp.data;

  //TODO refactor get
  let publisherId = null;
  if (isEmpty(publisher)) {
    publisherId = data.currentPublisher[0] && data.currentPublisher[0].id;
  }
  else {
    publisherId = publisher;
  }

  return {
    type: GET_CURRENT_PUBLISHER,
    payload: publisherId,
  };
};

export default currentPublisher;
