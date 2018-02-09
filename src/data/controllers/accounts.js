import {Account, Publisher, User} from './../models';

const success = {
  success: true,
  message: 'Create account successfully!',
};

export default class Accounts {
  static create(accountName, res) {
    Account
      .create({name: accountName})
      .then(() => res.send(success))
      .catch(err => res.send(err));
  }
  static get(res) {
    if (res) {
      Account.findAll({
        include: [{
          model: User,
        }, {
          model: Publisher,
        }]
      }).then(accounts => res.send(accounts))
        .catch(err => res.send(err));
      return;
    }

    return Account.findAll({
      include: [{
        model: User,
      }, {
        model: Publisher,
      }]
    });

  }
  static attach(id, name, res) {
    User.update({
      AccountId: name
    }, {
      where: {firstName: id}
    }).then(() => res.send('Attach user sucessed!'))
      .catch(err => res.send(err));
  }
}
