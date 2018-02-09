import DataType from 'sequelize';

import Model from '../sequelize';

const customDefinition = Model.define('customDefinition', {
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
  MacroOverviewId: {
    type: DataType.STRING(255),
  }
});

export default customDefinition;
