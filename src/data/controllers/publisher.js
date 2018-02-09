import {Property, Publisher} from './../models';

export default class Publishers {
  static create(data, res) {
    const {publisherName} = data;

    Publisher.create({name: publisherName})
      .then(() => res.send('Create publisher sucessed!'))
      .catch(err => res.send(err));
  }
  static get(res) {
    if (res) {
      Publisher.findAll({
        include: [{
          model: Property,
        }]
      }).then(publisher => res.send(publisher))
        .catch(err => res.send(err));
      return;
    }

    return Publisher.findAll({
      include: [{
        model: Property,
      }]
    });
  }
  static attach(id, name, res) {

    Publisher.update({AccountId: id},
      {where: {name: name}})
      .then(() => res.send('Attach publisher sucessed!'))
      .catch(err => res.send(err));
  }
}


