import Sequelize from 'sequelize';

import config from '../config';

const sequelize = new Sequelize(config.databaseUrl, {
  define: {
    freezeTableName: true,
  },
  logging: false,
});

export default sequelize;
