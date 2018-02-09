import createDefinition from './create-definition';
import macro from './template';
import upload from '../aws-upload';

const createMacro = (definitions, tag) => {
  const definition = createDefinition(definitions);
  return macro(tag, definition);
};

const uploadFile = (fileData, currentMacroId, fileName, res) => upload(fileData, currentMacroId, fileName, res);

export {createMacro, uploadFile};