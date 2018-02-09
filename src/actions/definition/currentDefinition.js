export const GET_CURRENT_DEFINITION = 'GET_CURRENT_DEFINITION';

const currentDefinition = id => ({
  type: GET_CURRENT_DEFINITION,
  payload: id,
});

export default currentDefinition;
