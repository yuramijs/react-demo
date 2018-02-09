import {Definition, Macro} from './../models';

const definitions = {
  include: [Definition],
};

const success = {
  success: true,
  message: 'Create macro successfully!',
};

export default class Macros {

  static create(data, res) {
    const {id, name, publisherId, macroOverviewId, definition} = data;
    Macro.create({
        id,
        name,
        publisherId,
        MacroOverviewId: macroOverviewId,
        Definitions: [
          {name: definition}
        ]
      },
      definitions)
      .then(() => res.send(success))
      .catch(err => res.send(err));
  }
  static getAll(res) {
    Macro
      .findAll(definitions)
      .then(publisher => res.send(publisher))
      .catch(err => res.send(err));
  }
  static get(publisherId, macroOverviewId, res) {
    Macro
      .findAll(definitions)
      .then(publisher => res.send(publisher))
      .catch(err => res.send(err));
  }

  static getById(id, res) {
    Macro
      .findAll(id)
      .then(tag => res.send(tag))
      .catch(err => res.send(err));
  }

  static update(name, id, res) {
    Macro
      .update({name},
        {where: {id}})
      .then(tag => res.send(tag))
      .catch(err => res.send(err));
  }

  static delete(id, res) {
    Macro
      .destroy({where: {id}})
      .then(() => res.send({
        message: `Delete tag with ${id}`,
        uuid: id
      }))
      .catch(err => res.send(err));
  }
}
