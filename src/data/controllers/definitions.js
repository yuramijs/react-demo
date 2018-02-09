import {Definition} from './../models';

const success = {
  success: true,
  message: 'Create Definition successfully!'
};

export default class Definitions {
  static create(data, res) {
    //TODO refactor
    const {name, path, size, inview, refresh, dependencies, MacroOverviewId} = data;
    Definition.create({
      id,
      name,
      path,
      size,
      inview,
      refresh,
      dependencies
    }).then(() => res.send(success))
      .catch(err => res.send(err));
  }

  static get(res) {
    Definition
      .findAll()
      .then(definitions => res.send(definitions))
      .catch(err => res.send(err));
  }

  static attach(id, name, res) {
    Definition.update({
      MacroId: id
    }, {
      where: {name}
    }).then(() => res.send('Attach MacroId sucessed!'))
      .catch(err => res.send(err));
  }
}
