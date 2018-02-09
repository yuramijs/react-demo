import DataType from 'sequelize';
import Model from '../sequelize';

const Account = Model.define('Account', {
  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
  },
  name: {
    type: DataType.STRING(255),
    validate: {
      notEmpty: true,
    },
  },
});

export default Account;
