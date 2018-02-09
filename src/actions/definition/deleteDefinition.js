import {graphQueryResp} from './../../helpers';

export const DELETE_DEFINITION = 'DELETE_DEFINITION';

const deleteDefinition = async (id) => {

  const query = `deleteDefinition(id: ${id}) {id}`;
  const resp = await graphQueryResp(query);

  const {data} = await resp.data;

  return {
    type: DELETE_DEFINITION,
    payload: data,
  };
};

export default deleteDefinition;
