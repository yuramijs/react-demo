import React, {Component} from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import ShowStatus from './../../components/ShowStatus';

import s from './Register.scss';

import {handleInputChange, sendData} from '../../helpers';
import Title from "../../components/Title/index";
import FooterButton from "../../components/FooterButton/index";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      password: null,
      status: null,
      message: null
    };
  }
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  submit = async (event) => {
    event.preventDefault();

    const state = this.state;
    const link = event.target.action;

    try {
      const resp = await sendData(link, state);
      const {status, message} = resp.data;
      this.setState(() => ({status, message}))
    }
    catch (err) {
      console.log(err);
    }

    this.form.reset();
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.status !== nextState.status) {
      return true;
    }
    return false;
  }

  render() {
    const {title, status, message} = this.state;

    return (
      <div className="card">
        <Title title={title}/>
        <ShowStatus status={status} message={message}/>
        <form
          action="/sign-up"
          ref={el => this.form = el}
          onSubmit={event => this.submit(event)}>
          <div className="card-body">
            <label
              className={s.register__form__label}
              htmlFor="firstName">
              Name
            </label>
            <input
              ref="name"
              name="name"
              className="form-control"
              onChange={event => handleInputChange(event, this)}
            />
            <label
              className={s.register__form__label}
              htmlFor="firstName">
              Password
            </label>
            <input
              ref="password"
              name="password"
              className="form-control"
              type="password"
              onChange={event => handleInputChange(event, this)}
            />
          </div>
          <FooterButton text={'Sign up'}/>
        </form>
      </div>
    );
  }
}

export default withStyles(s)(Register);
