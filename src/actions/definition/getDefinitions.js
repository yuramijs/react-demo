import {graphQueryResp} from './../../helpers';

export const GET_DEFINITIONS = 'GET_DEFINITIONS';

const getDefinitions = async (macro) => {

  const query = `definitions(macro: "${macro}") {
    id
    name
    path
    size
    created_at
  }`;

  const resp = await graphQueryResp(query);

  const {data} = await resp.data;
  const {definitions} = data;

  return {
    type: GET_DEFINITIONS,
    payload: definitions,
  };
};

export default getDefinitions;
