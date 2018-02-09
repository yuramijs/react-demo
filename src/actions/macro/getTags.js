import {graphQueryResp} from './../../helpers';


export const GET_TAGS = 'GET_TAGS';

const getTags = async (uuid) => {

  const query = `tagsForMacro(uuid: "${uuid}") { id name definition { id name path size created_at updated_at } }`;
  const resp = await graphQueryResp(query);

  const {data} = await resp.data;

  return {
    type: GET_TAGS,
    payload: data.tagsForMacro,
  };
};

export default getTags;
