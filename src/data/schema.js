import {GraphQLObjectType as ObjectType, GraphQLSchema as Schema} from 'graphql';

import {accounts, currentPublisher, properties, publishers} from './queries/';
import {addMacro, deleteMacro, macro, macros, updateMacro} from './queries/macro';
import {createTagForMacro, deleteTagForMacro, tag, tagsForMacro, updateTag} from './queries/tags';
import {createDefinition, definition, definitions, deleteDefinition, updateDefinition} from './queries/definitions';
import {changeUserPassword, createUser, deleteUser, setUserPassword, updateUser, user, users} from './queries/userAPI';

const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: {
      accounts,
      properties,
      publishers,
      currentPublisher,

      macros,
      macro,
      addMacro,
      deleteMacro,
      updateMacro,

      tag,
      tagsForMacro,
      createTagForMacro,
      deleteTagForMacro,
      updateTag,

      definitions,
      definition,
      createDefinition,
      updateDefinition,
      deleteDefinition,

      users,
      user,
      createUser,
      updateUser,
      deleteUser,
      changeUserPassword,
      setUserPassword,
    },
  }),
});

export default schema;
