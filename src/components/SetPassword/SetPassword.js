import React, {Component, Fragment} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';


import s from './SetPassword.scss';

import {graphQueryResp} from "../../helpers/index";
import FooterButton from "../FooterButton/index";

class SetPassword extends Component {
  constructor() {
    super();
    this.state = {
      showSetPassword: false,
    }
  }

  showSetPasswordFiled = id => this.setState(() => ({showSetPassword: !this.state.showSetPassword}));

  setPassword = (event, id) => {
    event.preventDefault();

    const {password} = this.state;
    const query = `setUserPassword(id: ${id}, password: "${password}") {id}`;

    graphQueryResp(query);

    this.form.reset();
  };

  handleInputChange = event => {
    const {value, name} = event.target;

    this.setState(() => ({
      [name]: value
    }));
  };

  render() {
    const {id} = this.props;
    const {showSetPassword} = this.state;

    //TODO refactor isEmpty
    return (
      <Fragment>
        <div className={s.list__item__delete} onClick={() => this.showSetPasswordFiled(id)}>Set Password</div>
        {showSetPassword &&
        <form
          className={s.list__form}
          ref={el => this.form = el}
          onSubmit={event => this.setPassword(event, id)}>
          <div className="card-body">
            <label htmlFor="password">Password</label>
            <input
              className="form-control"
              ref="password"
              name="password"
              type="password"
              onChange={event => this.handleInputChange(event)}
              required/>
            {/* add button and e.prventDefault */}
          </div>
          <FooterButton text={'Send'}/>
        </form>}
      </Fragment>
    )
  }
}

export default withStyles(s)(SetPassword);