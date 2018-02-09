import {isEmpty} from 'lodash';

import {UserRegister as Register} from './../../models';
import User from './User';
import {success, failure} from './status';

//TODO add status
export default class UserRegister {

  static signUp = (name, password, res) => {
    const dataEmpty = ( isEmpty(name) || isEmpty(password) );

    if (dataEmpty) {
      res.send( failure('Password or name cannot be empty') );
      return;
    }

    const user = new User(name, password);

    Register
      .create(user)
      .then( () => res.send( success('New user registered!') ) )
      .catch(err => res.send(err));

  };

  static findAll(username, password, done) {
    Register.findAll()
      .then(users => {
        users.map(user => {
          if (!user) return;
          if (user.password !== password) return;
          return done(null, true, user);
        });
      })
  }

}
