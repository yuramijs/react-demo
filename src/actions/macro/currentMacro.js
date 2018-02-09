export const GET_CURRENT_MACRO = 'GET_CURRENT_MACRO';

const currentMacro = id => ({
  type: GET_CURRENT_MACRO,
  payload: id,
});

export default currentMacro;
