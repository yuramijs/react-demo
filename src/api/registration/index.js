const register = require('express').Router();

import {UserRegister} from './../../data/controllers';

register.post('/sign-up', (req, res) => {
  const {name, password} = req.body;
  UserRegister.signUp(name, password, res);
});

export default register;