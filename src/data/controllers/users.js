import {User} from './../models';

export default class Users {
  static create(firstName, lastName, email, password, res) {
    User.create({
      firstName,
      lastName,
      email,
      password
    }).then(() => res.send('Create user sucessed!'))
      .catch(err => res.send(err));
  }
  static get(res) {
    if (res) {
      User
        .findAll()
        .then(users => res.send(users))
        .catch(err => res.send(err));
      return;
    }

    return User.findAll();
  }
  static attach(id, name, res) {

    User.update({AccountId: id},
      {where: {firstName: name}})
      .then(() => res.send('Attach user sucessed!'))
      .catch(err => res.send(err));
  }
}
