const account = require('express').Router();
import {Accounts} from './../../../data/controllers/';

account.post('/create', (req, res) => {
  const {accountName} = req.body;
  Accounts.create(accountName, res)
});
account.get('/get', (req, res) => Accounts.get(res));

export default account;