import template from './template';

//create string from size array
const createSize = data => {
  const getStringSize = JSON.stringify(data);
  const size = `[${getStringSize}]`;
  return size;
};

const createDefinition = data => {
  const definitions = data.map(item => {
    const {name, path, size} = item.definition;

    const getSize = createSize(size);
    return template(name, path, getSize);
  });

  const definition = definitions.join('');
  return definition;
};

export default createDefinition;