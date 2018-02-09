import {customDefinition, Macro, MacroOverview} from './../models';

const success = {
  success: true,
  message: 'Create macro successfully!',
};

const macros = {
  include: [Macro],
};

const definitions = {
  include: [customDefinition],
};

const includes = {
  include: [customDefinition, Macro],
};

export default class MacroOverviews {
  static create(id, name, res) {
    MacroOverview
      .create({
        id, name,
        Macro: macros
      })
      .then(() => res.send(success))
      .catch(err => res.send(err));
  }

  static get(res) {
    return MacroOverview
      .findAll(macros)
      .then(macro => res.send(macro))
      .catch(err => res.send(err));
  }

  static delete(id, res) {
    MacroOverview
      .destroy({where: {id}})
      .then(() => res.send({
        message: `Delete macro with ${id}`,
        uuid: id
      }))
      .catch(err => res.send(err));
  }
}
