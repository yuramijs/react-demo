import DataType from 'sequelize';
import Model from '../sequelize';

const Macro = Model.define('Macro', {
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
  MacroOverviewId: {
    type: DataType.STRING(255),
  },
});

export default Macro;
