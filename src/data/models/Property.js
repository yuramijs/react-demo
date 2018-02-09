import DataType from 'sequelize';
import Model from '../sequelize';

const Property = Model.define('Property', {
  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
    validate: {
      notEmpty: true,
    },
  },
  url: {
    type: DataType.STRING(100),
    validate: {
      notEmpty: true,
      isUrl: true,
    },
  },
  platform: {
    type: DataType.STRING(255),
    validate: {
      notEmpty: true,
    },
  },
  PublisherId: {
    type: DataType.UUID,
  }
});

export default Property;
