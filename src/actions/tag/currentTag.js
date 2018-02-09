export const GET_CURRENT_TAG = 'GET_CURRENT_TAG';

const currentTag = id => ({
  type: GET_CURRENT_TAG,
  payload: id,
});

export default currentTag;
