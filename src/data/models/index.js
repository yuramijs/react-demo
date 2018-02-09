import sequelize from '../sequelize';

import User from './User';
import UserRegister from './UserRegister';
import Account from './Account';
import Property from './Property';
import Publisher from './Publisher';
import Macro from './Macro';
import Definition from './Definition';
import customDefinition from './customDefinition';
import MacroOverview from './MacroOverview';

Account.hasMany(User);
Account.hasMany(Publisher);
Publisher.hasMany(Property);
MacroOverview.hasMany(Macro);
Macro.belongsToMany(Definition, {through: 'Macroses'});

User.hasMany(UserRegister, {
  foreignKey: 'userId',
  as: 'logins',
  onUpdate: 'cascade',
  onDelete: 'cascade',
});

const sync = (...args) => sequelize.sync(...args);

export default { sync };
export {
  User,
  UserRegister,
  Account,
  Property,
  Publisher,
  Macro,
  Definition,
  customDefinition,
  MacroOverview
}