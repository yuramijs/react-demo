import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {isEmpty, remove} from 'lodash';
import uuidv1 from 'uuid/v1';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './convertGPT.scss';

import outputTemplate from './templates/define';
import outputTemplateEnd from './templates/display';

import {getFormValues} from './../../../helpers';
import Title from "../../../components/Title/index";
import FooterButton from "../../../components/FooterButton/index";


class ConvertGPT extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  getMatch = (tag, pattern) => {
    console.log(tag);
    const match = pattern.exec(tag) && pattern.exec(tag)[0].slice(0, -1);
    if (isEmpty(match)) {
      console.error('Your regular expression does not match the subject string.');
      return false;
    }
    return match;
  };
  converterPatternsToObject = (tag, patterns) => {
    const {forSize, forPath} = patterns;
    const size = this.getMatch(tag, forSize);
    const path = this.getMatch(tag, forPath);
    return {
      size,
      path,
    }
  };

  settings = [];
  output = [];
  outputEnd = [];
  convert = event => {
    event.preventDefault();
    const form = event.target;
    const patterns = {
      forSize: /\[(.*?)\]\)/,
      forPath: /'\/(.*?)',/,
    };
    const {name, tag} = getFormValues(this);
    const {size, path} = this.converterPatternsToObject(tag, patterns);
    const id = uuidv1();
    const configuration = {id, name};

    if (size) {
      this.output = [...this.output, outputTemplate(name, path, size)];
    }
    if (path) {
      this.outputEnd = [...this.outputEnd, outputTemplateEnd(name)];
    }
    if (size || path) {
      this.settings = [...this.settings, configuration];
    }

    this.setState(() => ({
        config: this.settings,
        output: this.output.join('') + this.outputEnd.join(''),
    }));

    form.reset();
  };
  removeMacro = (item, index) => {

    const removeFromSettings = setting =>
      setting.filter(config => config.id !== item.id);

    const removeFromOutput = (inset, current) =>
      remove(inset, (output) => output !== inset[current]);

    this.settings = removeFromSettings(this.state.config);
    this.output = removeFromOutput(this.output, index);
    this.outputEnd = removeFromOutput(this.outputEnd, index);

    this.setState(() => ({
      config: this.settings,
      output: this.output.join('') + this.outputEnd.join(''),
    }));
  };

  render() {
    const {output, config} = this.state;

    return (
      <div>
        <div className="card">
          <Title title={'GPT to Macro converter'}/>
          <form onSubmit={this.convert}>
            <div className="card-body">
              <div className="row">
                <div className="col-md-5">
                  <label htmlFor="name">Name</label>
                  <input
                    className={`${s.name__input} form-control`}
                    name="name"
                    ref="name"/>
                  <label className={s.label} htmlFor="tag">Tag</label>
                  <textarea
                    className={`${s.tag__textarea} form-control`}
                    name="tag"
                    ref="tag"
                    rows="5"/>
                </div>
                <div className="col-md-2">
                  <h5 className={s.configurationTitle}>Configuration</h5>
                  {config &&
                  config.map(({name}, index) =>
                    <div className="list-group-item list-group-item-action" key={index}>
                      <div className="flex__between">
                        <div>{name}</div>
                        <div className={s.close} onClick={() => this.removeMacro(item, index)}>
                          <i className="fa fa-times" aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="col-md-5">
                  <label htmlFor="output">Output</label>
                  <textarea
                    className={`${s.output} form-control`}
                    name="output"
                    value={output}
                    rows="5"/>
                </div>
              </div>
            </div>
            <FooterButton text={'Convert'}/>
          </form>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(ConvertGPT);

