import DataType from 'sequelize';
import Model from '../sequelize';

const Definition = Model.define('Definition', {
  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
  },
  name: {
    type: DataType.STRING(255),
  },
  path: {
    type: DataType.STRING(255),
  },
  size: {
    type: DataType.JSON,
  },
  inview: {
    type: DataType.STRING(255),
  },
  refresh: {
    type: DataType.STRING(255),
  },
  dependencies: {
    type: DataType.STRING(255),
  },
});

export default Definition;
