import DataType from 'sequelize';
import Model from '../sequelize';

const UserRegister = Model.define('UserRegister', {
  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
    validate: {
      notEmpty: true,
    },
  },
  name: {
    type: DataType.STRING(50),
    validate: {
      notEmpty: true,
    },
  },
  password: {
    type: DataType.STRING(100),
    validate: {
      notEmpty: true,
    },
  },
});

export default UserRegister;
