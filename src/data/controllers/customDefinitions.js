import {customDefinition} from './../models';

const success = {
  success: true,
  message: 'Create definition successfully!',
};

export default class customDefinitions {
  static create(data, res) {
    customDefinition
      .create(data)
      .then(() => res.send(success))
      .catch(err => res.send(err));
  }

  static get(res) {
    customDefinition
      .findAll()
      .then(definitions => res.send(definitions))
      .catch(err => res.send(err));
  }

  static getOne(name, res) {
    return customDefinition
      .findOne({where: {name}})
  }

  static attach(id, name, res) {
    customDefinition
      .update({MacroId: id},
        {where: {name}})
      .then(() => res.send('Attach MacroId sucessed!'))
      .catch(err => res.send(err));
  }

  static delete(id, res) {
    customDefinition
      .destroy({where: {id}})
      .then(() => res.send(`Delete definition with ${id}`))
      .catch(err => res.send(err));
  }
}
