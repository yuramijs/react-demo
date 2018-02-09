import DataType from 'sequelize';
import Model from '../sequelize';

const MacroOverview = Model.define('MacroOverview', {
  id: {
    type: DataType.STRING(255),
    primaryKey: true,
    validate: {
      notEmpty: true,
    },
  },
  name: {
    type: DataType.STRING(255),
    validate: {
      notEmpty: true,
    },
  },
  publisherId: {
    type: DataType.STRING(255),
  },
});

export default MacroOverview;
