import {GraphQLID as Id, GraphQLInt as Int, GraphQLList as List, GraphQLString as String} from 'graphql';
import axios from 'axios';

import MacroType from '../types/MacroType';

const url = 'https://nbrork881h.execute-api.eu-west-1.amazonaws.com/dev/macro';

//types
const name = {
  type: String
};
const uuid = {
  type: Id
};
const type = {
  type: Int
};

const macros = {
  name: 'Macros',
  type: new List(MacroType),
  resolve() {
    return axios.get(url)
      .then(res => res.data)
      .catch(err => err)
  },
};

const macro = {
  name: 'Macro',
  type: MacroType,
  args: {
    uuid
  },
  resolve(parentValue, {uuid}) {
    const singleMacro = `${url}/${uuid}`;

    return axios
      .get(singleMacro)
      .then(res => res.data)
      .catch(err => err)
  }
};

const addMacro = {
  name: 'addMacro',
  type: MacroType,
  args: {
    name,
    type
  },
  resolve: (parentValue, {name, type}) =>
    axios.post(url,
      {
        "name": name,
        "type": type
      },
      {headers: {'Content-Type': 'text/plain'}}).then(res => res.data)
      .catch(err => err)

};

const deleteMacro = {
  name: 'deleteMacro',
  type: MacroType,
  args: {
    uuid
  },
  resolve(parentValue, {uuid}) {
    const deleteUrl = `${url}/${uuid}`;

    return axios
      .delete(deleteUrl)
      .then(res => res.data)
      .catch(err => err)
  }
};

const updateMacro = {
  name: 'updateMacro',
  type: MacroType,
  args: {
    uuid,
    name,
    type
  },
  resolve: (parentValue, {uuid, name, type}) =>
    axios
      .put(`${url}/${uuid}`,
        {
          "name": name,
          "type": type
        },
        {headers: {'Content-Type': 'text/plain'}})
      .then(res => res.data)
      .catch(err => err)
};

export {macros, macro, addMacro, deleteMacro, updateMacro};