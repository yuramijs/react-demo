import {combineReducers} from 'redux';

import getUsers from './getUsers';
import getAccounts from './getAccounts';
import getPublishers from './getPublishers';
import getProperties from './getProperties';
import getCurrentPublisher from './getCurrentPublisher';

import getCurrentMacro from './macro/getCurrentMacro';
import getMacros from './macro/getMacros';

import getCurrentTag from './tag/getCurrentTag';
import getTags from './tag/getTags';

import getCurrentDefinition from './definition/getCurrentDefinition';
import getDefinitions from './definition/getDefinitions';

import runtime from './runtime';

export default combineReducers({
  getUsers,
  getAccounts,
  getPublishers,
  getProperties,
  getCurrentPublisher,
  getCurrentMacro,
  getCurrentDefinition,
  getCurrentTag,
  getMacros,
  getDefinitions,
  getTags,
  runtime,
});
