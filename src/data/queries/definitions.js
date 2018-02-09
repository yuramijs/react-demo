import {GraphQLInt as Int, GraphQLList as List, GraphQLString as String} from 'graphql';
import GraphQLJSON from 'graphql-type-json';
import axios from 'axios';

import DefinitionType from '../types/DefinitionType';

const url = 'https://nbrork881h.execute-api.eu-west-1.amazonaws.com/dev';

const id = {
  type: Int
};
const uuid = {
  type: String
};
const macro = {
  type: String
};
const name = {
  type: String
};
const path = {
  type: String
};
const size = {
  type: GraphQLJSON
};

const definitions = {
  name: 'definitions',
  type: new List(DefinitionType),
  args: {
    macro
  },
  resolve: async (parentValue, {macro}) => {
    const urlDefinitions = `${url}/macro/${macro}/definitions`;
    const res = await axios.get(urlDefinitions);

    try {
      return res.data;
    }
    catch (err) {
      return res.err;
    }
  },
};

const definition = {
  name: 'definition',
  type: DefinitionType,
  args: {
    id
  },
  resolve: async (parentValue, {id}) => {
    const urlDefinition = `${url}/definition/${id}`;

    const res = await axios.get(urlDefinition);

    try {
      return res.data;
    }
    catch (err) {
      return res.err;
    }
  },
};

const createDefinition = {
  name: 'createDefinition',
  type: DefinitionType,
  args: {
    uuid,
    name,
    path,
    size,
  },
  resolve: async (parentValue, {uuid, name, path, size}) => {
    const urlDefinition = `${url}/macro/${uuid}/definitions`;
    const res = await axios.post(urlDefinition,
      {
        "name": name,
        "path": path,
        "size": size
      },
      {headers: {'Content-Type': 'text/plain'}});

    try {
      return res.data;
    }
    catch (err) {
      return res.err;
    }
  },
};

const updateDefinition = {
  name: 'updateDefinition',
  type: DefinitionType,
  args: {
    id,
    name,
    path,
    size,
  },
  resolve: async (parentValue, {id, name, path, size}) => {
    const urlDefinition = `${url}/definition/${id}`;
    const res = await axios.put(urlDefinition,
      {
        "name": name,
        "path": path,
        "size": size,
      },
      {headers: {'Content-Type': 'text/plain'}});

    try {
      return res.data;
    }
    catch (err) {
      return res.err;
    }
  },
};

const deleteDefinition = {
  name: 'deleteDefinition',
  type: DefinitionType,
  args: {
    id,
  },
  resolve: async (parentValue, {id}) => {
    const urlDefinition = `${url}/definition/${id}`;
    const res = await axios.delete(urlDefinition);

    try {
      return res.data;
    }
    catch (err) {
      return res.err;
    }
  },
};

export {definitions, definition, createDefinition, deleteDefinition, updateDefinition};