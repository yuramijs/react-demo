const routes = require('express').Router();
import {isEmpty} from 'lodash';
import path from 'path';

import {Properties, Publishers, Users} from './../data/controllers/';
import Tag from "./../creators/creator-tag/Tag";
import HTMLGenerator from "./../creators/html-generator/HTMLGenerator";

import {createMacro, uploadFile} from "./../creators/create-macro";


//property
routes.post('/create-property', (req, res) => {
  const {propertyURL, propertyPlatform} = req.body;
  if (req.body) {
    Properties.create(propertyURL, propertyPlatform, res);
  }
});
routes.get('/get-property', (req, res) => Properties.get(res));
routes.post('/attach-property', (req, res) => {
  const {id, name} = req.body;
  Properties.attach(id, name, res);
});
//property

// // publisher
routes.post('/create-publisher', (req, res) => Publishers.create(req.body, res));
routes.get('/get-publishers', (req, res) => Publishers.get(res));
routes.post('/attach-publisher', (req, res) => {
  const {id, name} = req.body;
  Publishers.attach(id, name, res);
});
routes.get('/get-current-publisher', (req, res) => Publishers.getFirst(res));
// // publisher

//users
routes.post('/attach-user', (req, res) => {
  const {id, name} = req.body;
  //TODO refactor
  Users.attach(id, name, res);
});
//users


//tag
//create tags
routes.post('/create-tag', (req, res) => Tag.createTag(req.body, res));
routes.post('/create-inter-tag', (req, res) => Tag.createInterScrollsTag(req.body, res));
//create tags
//get tags
routes.get('/tag_:id', (req, res) => {
  const id = req.params.id,
    query = req.query,
    paths = path.resolve(`./src/creators/creator-tag/output/tag_min_${id}.js`);

  if (!isEmpty(query)) {
    const changes = {
      change: true,
      path: {
        input: paths,
        output: paths,
      },
      changes: query,
    };
    Tag.createTag(changes);
    res.sendFile(paths)
  }
  else {
    res.sendFile(paths)
  }
});
routes.get('/inter-tag_:id', (req, res) => {
  const id = req.params.id,
    query = req.query,
    paths = path.resolve(`./src/creators/creator-tag/output/inter-tag_min_${id}.js`);

  if (!isEmpty(query)) {
    const changes = {
      change: true,
      path: {
        input: paths,
        output: paths,
      },
      changes: query,
    };
    Tag.createInterScrollsTag(changes);
    res.sendFile(paths)
  }
  else {
    res.sendFile(paths)
  }
});
//get tags
//tag

//html-generator
routes.post('/html-generator', (req, res) => HTMLGenerator.create(req.body, res));
//html-generator

routes.post('/upload-macro', (req, res) => {
  const {tags, currentMacroId} = req.body;
  const macro = createMacro(tags, currentMacroId);

  uploadFile(macro, currentMacroId, 'macro.js', res);
});

routes.post('/upload-file', (req, res) => {
  const {data, currentMacro, type} = req.body;
  uploadFile(data, currentMacro, type, res);
});

export default routes;