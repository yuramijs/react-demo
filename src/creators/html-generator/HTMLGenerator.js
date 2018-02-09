import fs from 'fs';
import uuidv1 from 'uuid/v1';
import escapeQuotes from 'escape-quotes';
import minifier from 'html-minifier';

import template from './templates/html';
import {checkFolder} from './../../helpers';


const {minify} = minifier;
const id = uuidv1();
const output = `./src/creators/html-generator/output/file_${id}.html`;
const outputFolder = './src/creators/html-generator/output';
const settings = {
  minifyCSS: false,
  minifyJS: true,
  conservativeCollapse: true,
  collapseWhitespace: true,
};

const replaceDoubleQuotes = str => str.replace(new RegExp(`"`, 'g'), `'`);

class HTMLGenerator {
  static async create(data, res) {
    const html = template(data);

    const getMinifiedHtml = minify(html, settings);
    const singleQuotesHtml = replaceDoubleQuotes(getMinifiedHtml);
    const outputHtml = escapeQuotes(singleQuotesHtml);

    await checkFolder(outputFolder);
    
    //write minified html to output folder with new id and then send this html to front end
    fs.writeFile(output, outputHtml, err => {
      if (err) {
        console.error('Cannot write minified html to output folder', err);
        return err;
      }
      res.send(outputHtml)
    });
  }
}

export default HTMLGenerator;