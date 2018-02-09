import {compact, isEmpty} from 'lodash';
import React from 'react';

const replacer = (insert, regex, output) => insert.replace(regex, output);

const getScript = (insert, regex) => {
  const scriptData = regex.exec(insert)[0];
  const output = scriptData + ';click=${CLICK_URL}';
  return replacer(insert, regex, output);
};
const getIns = (insert, regex) => {
  const insData = regex.exec(insert)[0];
  const output = 'data-dcm-click-tracker=\'${CLICK_URL}\' \n' + '     ' + insData;
  return replacer(insert, regex, output);
};
const macroInserts = [
  {
    regex: /\?bn=\d*/,
    getOutput: getScript,
  },
  {
    regex: /data-dcm-placement='.*'/,
    getOutput: getIns,
  }
];
const checkRegex = (insert, regex) => {
  if (insert) {
    const httpsIns = insert.replace(/http:\/\//g, 'https://');
    const scriptData = regex.exec(httpsIns);
    return scriptData;
  }
};
const tagDetection = insert => {
  const macroInsert = macroInserts.map(({regex, getOutput}) => {
    if (!isEmpty(checkRegex(insert, regex))) {
      return getOutput(insert, regex);
    }
  });

  return compact(macroInsert);
};

export default class MacroCreateInsert {
  static create(that) {
    const insert = that.state.macroInsert;

    that.setState(() => ({macroOutput: tagDetection(insert),}));
  }
}