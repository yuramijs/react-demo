import {graphQueryResp} from './../helpers';

export const FETCH_USERS = 'FETCH_USERS';

const getUsers = async () => {

  const query = `users { id, first_name, last_name, email }`;
  const resp = await graphQueryResp(query);

  const {users} = await resp.data.data;

  return {
    type: FETCH_USERS,
    payload: users,
  };
};

export default getUsers;
