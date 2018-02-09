import {graphQueryResp} from './../../helpers';

export const GET_MACROS = 'GET_MACROS';

const getMacros = async () => {

  const query = `macros {uuid name type created_at}`;
  const resp = await graphQueryResp(query);

  const {data} = await resp.data;

  return {
    type: GET_MACROS,
    payload: data,
  };
};

export default getMacros;
