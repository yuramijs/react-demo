import {graphQueryResp} from './../helpers';

export const FETCH_PUBLISHER = 'FETCH_PUBLISHER';

const getPublishers = async () => {

  const query = `publishers { id, name }`;
  const resp = await graphQueryResp(query);
  const {publishers} = await resp.data.data;

  return {
    type: FETCH_PUBLISHER,
    payload: publishers,
  };
};

export default getPublishers;
