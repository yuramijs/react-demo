import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Login.scss';
import Title from "../../components/Title/index";
import FooterButton from "../../components/FooterButton/index";

const Login = ({title}) =>
  <div className="card">
    <Title title={title}/>
    <form action="/login" method="post">
      <div className="card-body">
        <label className={s.label} htmlFor="usernameOrEmail">Username</label>
        <input className="form-control" name="username"/>
        <label className={s.label} htmlFor="password">Password:</label>
        <input className="form-control" type="password" name="password"/>
      </div>
      <FooterButton text={'Log in'}/>
    </form>
  </div>;

Login.propTypes = {
  title: PropTypes.string.isRequired,
};


export default withStyles(s)(Login);
