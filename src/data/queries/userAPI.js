import {GraphQLInt as Int, GraphQLList as List, GraphQLString as String} from 'graphql';
import axios from 'axios';

import UserType from '../types/UserType';

const url = 'https://nbrork881h.execute-api.eu-west-1.amazonaws.com/dev/users';

//types
const id = {
  type: Int
};
const first_name = {
  type: String
};
const last_name = {
  type: String
};
const email = {
  type: String
};
const password = {
  type: String
};
const previous_password = {
  type: String
};

const users = {
  name: 'Users',
  type: new List(UserType),
  resolve() {
    return axios.get(url)
      .then(res => res.data)
      .catch(err => err)
  },
};

const user = {
  name: 'User',
  type: UserType,
  args: {
    id
  },
  resolve: (parentValue, {id}) =>
    axios.get(`${url}/${id}`)
      .then(res => res.data)
      .catch(err => err)
};

const createUser = {
  name: 'createUser',
  type: UserType,
  args: {
    id,
    first_name,
    last_name,
    email,
    password
  },
  resolve: (parentValue, {id, first_name, last_name, email, password}) =>
    axios.post(url,
      {
        "id": id,
        "first_name": first_name,
        "last_name": last_name,
        "email": email,
        "password": password,
      },
      {headers: {'Content-Type': 'text/plain'}})
      .then(res => res.data)
      .catch(err => err)
};

const updateUser = {
  name: 'updateUser',
  type: UserType,
  args: {
    id,
    first_name,
    last_name,
    email,
  },
  resolve(parentValue, {id, first_name, last_name, email}) {
    const updateUrl = `${url}/${id}`;

    return axios.put(updateUrl,
      {
        "first_name": first_name,
        "last_name": last_name,
        "email": email,
      },
      {headers: {'Content-Type': 'text/plain'}})
      .then(res => res.data)
      .catch(err => err)
  },
};

const deleteUser = {
  name: 'deleteUser',
  type: UserType,
  args: {
    id
  },
  resolve(parentValue, {id}) {
    const deleteUrl = `${url}/${id}`;

    return axios
      .delete(deleteUrl)
      .then(res => res.data)
      .catch(err => err)
  }
};

const changeUserPassword = {
  name: 'changeUserPassword',
  type: UserType,
  args: {
    id,
    previous_password,
    password,
  },
  resolve(parentValue, {id, previous_password, password}) {
    const changeUserPasswordUrl = `${url}/${id}/password`;

    return axios.put(changeUserPasswordUrl,
      {
        "previous_password": previous_password,
        "password": password,
      },
      {headers: {'Content-Type': 'text/plain'}})
      .then(res => res.data)
      .catch(err => err)
  },
};

const setUserPassword = {
  name: 'createUser',
  type: UserType,
  args: {
    id,
    password
  },
  resolve(parentValue, {id, password}) {
    const setUserPasswordUrl = `${url}/${id}/password`;

    return axios.post(setUserPasswordUrl,
      {
        "password": password,
      },
      {headers: {'Content-Type': 'text/plain'}})
      .then(res => res.data)
      .catch(err => err)
  },
};


export {users, user, createUser, updateUser, deleteUser, changeUserPassword, setUserPassword};