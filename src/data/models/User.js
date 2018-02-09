import DataType from 'sequelize';
import Model from '../sequelize';

const User = Model.define('User', {
  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
    validate: {
      notEmpty: true,
    },
  },
  firstName: {
    type: DataType.STRING(255),
    validate: {
      notEmpty: true,
      isAlpha: true,
    },
  },
  lastName: {
    type: DataType.STRING(255),
    validate: {
      notEmpty: true,
      isAlpha: true,
    },
  },
  email: {
    type: DataType.STRING(255),
    validate: {
      notEmpty: true,
      isEmail: true
    },
  },
  password: {
    type: DataType.STRING(255),
    defaultValue: false,
    validate: {
      notEmpty: true,
    },
  },
  AccountId: {
    type: DataType.UUID,
  }
});


export default User;
