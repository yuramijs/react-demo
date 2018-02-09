import {Property} from './../models';

export default class Properties {
  static create(url, platform, res) {
    Property.create({
      url,
      platform,
    }).then(() => res.send('Create property sucessed!'))
      .catch(err => res.send(err));
  }
  static get(res) {
    if (res) {
      Property.findAll()
        .then(property => res.send(property))
        .catch(err => res.send(err));
      return
    }

    return Property.findAll();
  }
  static attach(id, name, res) {
    Property.update({PublisherId: id},
      {where: {url: name}})
      .then(() => res.send('Attach property sucessed!'))
      .catch(err => res.send(err));
  }
}
