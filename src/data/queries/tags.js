import {GraphQLInt as Int, GraphQLList as List, GraphQLString as String} from 'graphql';
import axios from 'axios';

import TagType from '../types/TagType';

const url = 'https://nbrork881h.execute-api.eu-west-1.amazonaws.com/dev';

const id = {
  type: Int
};
const uuid = {
  type: String
};
const idTag = {
  type: Int
};
const idDef = {
  type: Int
};
const name = {
  type: String
};
const macro = {
  type: String
};

const tag = {
  name: 'tag',
  type: TagType,
  args: {
    id
  },
  resolve: async (parentValue, {id}) => {
    const urlTag = `${url}/tag/${id}`;
    const res = await axios.get(urlTag);

    try {
      return res.data;
    }
    catch (err) {
      return res.err;
    }
  },
};

const tagsForMacro = {
  name: 'tagsForMacro',
  type: new List(TagType),
  args: {
    uuid,
  },
  resolve: async (parentValue, {uuid}) => {
    const urlTagsForMacro = `${url}/macro/${uuid}/tags`;
    const res = await axios.get(urlTagsForMacro);

    try {
      return res.data;
    }
    catch (err) {
      return res.err;
    }
  },
};

const createTagForMacro = {
  name: 'createTagForMacro',
  type: TagType,
  args: {
    name,
    id,
    macro
  },
  resolve: async (parentValue, {macro, name, id}) => {
    const urlCreateTagForMacro = `${url}/macro/${macro}/tags`;

    const res = await axios.post(urlCreateTagForMacro,
      {
        "name": name,
        "definition": {
          "id": id
        }
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

const deleteTagForMacro = {
  name: 'deleteTagForMacro',
  type: TagType,
  args: {
    id,
  },
  resolve: async (parentValue, {id}) => {
    const urlCreateTagForMacro = `${url}/tag/${id}`;

    const res = await axios.delete(urlCreateTagForMacro);

    try {
      return res.data;
    }
    catch (err) {
      return res.err;
    }
  },
};

const updateTag = {
  name: 'updateTag',
  type: TagType,
  args: {
    name,
    idTag,
    idDef,
  },
  resolve: async (parentValue, {name, idTag, idDef}) => {
    const urlCreateTagForMacro = `${url}/tag/${idTag}`;
    const res = await axios.put(urlCreateTagForMacro,
      {
        "name": name,
        "definition": {
          "id": idDef
        }
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

export {tag, tagsForMacro, createTagForMacro, deleteTagForMacro, updateTag};