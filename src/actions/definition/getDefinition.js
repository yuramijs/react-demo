import {graphQueryResp} from './../../helpers';


export const GET_DEFINITION = 'GET_DEFINITION';

const getDefinition = async () => {

  const query = `macros {uuid name type created_at}`;
  const resp = await graphQueryResp(query);

  const {data} = await resp.data;

  return {
    type: GET_DEFINITION,
    payload: data,
  };
};

export default getDefinition;
