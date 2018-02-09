import {graphQueryResp} from './../helpers';

export const FETCH_PROPERTY = 'FETCH_PROPERTY';

const getProperty = async () => {

  const query = `properties { id, url, platform}`;
  const resp = await graphQueryResp(query);
  const {properties} = await resp.data.data;

  return {
    type: FETCH_PROPERTY,
    payload: properties,
  };
};

export default getProperty;
