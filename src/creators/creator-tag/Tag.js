import fs from 'fs';
import uuidv1 from 'uuid/v1';
import compressor from 'node-minify';
import replace from 'replace-in-file';

import tag from './templates/tag';
import interScroll from './templates/interScroll';

import {checkFolder} from './../../helpers';

const sendLinkInterTag = (res, id) => res.send(`/inter-tag_${id}`);
const sendTag = (res, id) => res.send(`/tag_${id}`);

const changeFile = (path, changes) => {
  const decChanges = decodeURI(changes);
  const options = {
    disableGlobs: true,
    files: path,
    from: /click:\"/,
    to: `click:"${decChanges}`,
  };
  replace(options);
};

const writeFile = async (path, template) => {
  const {input, output} = path;
  const dirPath = './src/creators/creator-tag/output';
  await checkFolder(dirPath);

  if (template.click) {
    changeFile(output, template.click);
    return;
  }

  fs.writeFile(input, template, () => {
    compressor.minify({
      compressor: 'uglifyjs',
      input,
      output,
    });
  });
};
const writeTag = async (path, template) => {
  const dirPath = './src/creators/creator-tag/input';
  await checkFolder(dirPath);
  await writeFile(path, template);
};

class Tag {
  static async createTag(data, res) {
    const id = uuidv1();
    const path = {
      input: `./src/creators/creator-tag/input/tag_${id}.js`,
      output: `./src/creators/creator-tag/output/tag_min_${id}.js`
    };
    const templateTag = tag(id, data);

    if (data.change) {
      const {path, changes} = data;
      await writeTag(path, changes);
    }
    else {
      writeTag(path, templateTag)
        .then(() => sendTag(res, id));
    }
  }
  static async createInterScrollsTag(data, res) {
    const id = uuidv1();
    const path = {
      input: `./src/creators/creator-tag/input/inter-tag_${id}.js`,
      output: `./src/creators/creator-tag/output/inter-tag_min_${id}.js`
    };
    const templateInter = interScroll(id, data);

    if (data.change) {
      const {path, changes, id} = data;
      await writeTag(path, changes, res, id);
    }
    else {
      await writeTag(path, templateInter, res, id);
      sendLinkInterTag(res, id);
    }

  }
}

export default Tag;
