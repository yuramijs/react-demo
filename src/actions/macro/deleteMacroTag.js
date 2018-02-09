import {graphQueryResp} from './../../helpers';

export const DELETE_MACRO_TAG = 'DELETE_MACRO_TAG';

const deleteMacro = async (id) => {

  const query = `deleteTagForMacro(id: ${id}) { id }`;
  const resp = await graphQueryResp(query);

  const {data} = await resp.data;

  return {
    type: DELETE_MACRO_TAG,
    payload: data,
  };
};

export default deleteMacro;
