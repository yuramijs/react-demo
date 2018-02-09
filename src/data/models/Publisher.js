import DataType from 'sequelize';
import Model from '../sequelize';

const Publisher = Model.define('Publisher', {
  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
    validate: {
      notEmpty: true,
    },
  },
  name: {
    type: DataType.STRING(100),
    validate: {
      notEmpty: true,
    },
  },
});

export default Publisher;
