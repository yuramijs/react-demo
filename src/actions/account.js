import {graphQueryResp} from './../helpers';

export const FETCH_ACCOUNT = 'FETCH_ACCOUNT';

const getAccounts = async () => {
  const query = `accounts { id, name }`;
  const resp = await graphQueryResp(query);

  const {accounts} = await resp.data.data;

  return {
    type: FETCH_ACCOUNT,
    payload: accounts,
  };
};

export default getAccounts;
