import React, {Component} from 'react';
import PropType from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './HtmlGenerator.scss';

import Output from '../../../components/Output';
import {getData, handleInputChange} from './../../../helpers';
import Title from "../../../components/Title/index";
import FooterButton from "../../../components/FooterButton/index";

class HtmlGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      output: '',
    };
  }

  static propTypes = {
    title: PropType.string,
  };

  createHTML = async (event) => {
    event.preventDefault();
    const state = this.state;
    const link = event.target.action;

    //TODO add error handling
    const {data} = await getData(link, state);

    this.setState(() => ({output: data}));

    this.form.reset();
  };

  render() {
    const {output} = this.state;

    return (
      <div className="card">
        <Title title={'HTML generator'}/>
        <form
          action="/html-generator"
          ref={el => this.form = el}
          onSubmit={data => this.createHTML(data)}>
          <div className="card-body">
            <div className="form-group flex__between">
              <div className="flex__grow">
                <label htmlFor="html">HTML</label>
                <textarea
                  className="form-control"
                  name="html"
                  rows="5"
                  onChange={event => handleInputChange(event, this)}/>
              </div>
              <div className="flex__grow">
                <label htmlFor="css">CSS</label>
                <textarea
                  className="form-control"
                  name="css"
                  rows="5"
                  onChange={event => handleInputChange(event, this)}/>
              </div>
              <div className="flex__grow">
                <label htmlFor="js">JS</label>
                <textarea
                  className="form-control"
                  name="js"
                  rows="5"
                  onChange={event => handleInputChange(event, this)}/>
              </div>
            </div>
          </div>
          <FooterButton text={'Send'}/>
          <Output output={output}/>
        </form>
      </div>
    );
  }
}

export default withStyles(s)(HtmlGenerator);

