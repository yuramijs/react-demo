import {graphQueryResp} from './../../helpers';

export const DELETE_MACRO = 'DELETE_MACRO';

const deleteMacro = async (id) => {

  const query = `deleteMacro(uuid: "${id}") {uuid}`;
  const resp = await graphQueryResp(query);

  const {data} = await resp.data;
  const {uuid} = data.deleteMacro;

  return {
    type: DELETE_MACRO,
    payload: uuid,
  };
};

export default deleteMacro;
