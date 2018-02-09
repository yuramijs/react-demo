import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {getData} from '../../../helpers';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './InterTag.scss';

import Output from '../../../components/Output';
import Title from "../../../components/Title/index";
import FooterButton from "../../../components/FooterButton/index";

class Tag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileLink: ''
    };
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  handleInputChange = event => {
    const {value, name} = event.target;

    this.setState(() => ({[name]: value}));
  };

  createTag = event => {
    event.preventDefault();
    const data = this.state;
    const link = event.target.action;
    const fileLink = getData(link, data);

    fileLink.then(({data}) => {
      const fileLink = data;
      this.setState(() => ({fileLink}))
    });

    this.form.reset();
  };

  render() {
    const {fileLink} = this.state;

    return (
      <div className="card">
        <Title title={'Create a inter scroll'}/>
        <form
          ref={el => this.form = el}
          action="/create-inter-tag"
          onSubmit={event => this.createTag(event)}
          className={s.admin__form}>
          <div className="card-body">
            <label htmlFor="backgroundURL">Background URL</label>
            <input
              className="form-control"
              ref="backgroundURL"
              name="backgroundURL"
              onChange={event => this.handleInputChange(event)}
              required
            />
            <br/>
            <label htmlFor="clickURL">Click URL</label>
            <input
              className="form-control"
              ref="clickURL"
              name="clickURL"
              onChange={event => this.handleInputChange(event)}
              required
            />
          </div>
          <FooterButton text={'Send'}/>
        </form>
        <Output output={fileLink}/>
      </div>
    );
  }
}

export default withStyles(s)(Tag);

