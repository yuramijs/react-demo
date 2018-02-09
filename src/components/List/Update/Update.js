import React, {Component, Fragment} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';


import s from './Update.scss';

import {graphQueryResp} from "../../../helpers/index";
import FooterButton from "../../FooterButton/index";

class Update extends Component {
  constructor() {
    super();
    this.state = {
      showUpdate: false,
    }
  }

  showUpdateFiled = id => this.setState(() => ({showUpdate: !this.state.showUpdate}));

  createUser = (event, id) => {
    event.preventDefault();

    const {first_name, last_name, email} = this.state;
    const link = event.target.action;
    const query = `updateUser(id: ${id}, first_name: "${first_name}", last_name: "${last_name}", email: "${email}") {id}`;

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

    //TODO refactor isEmpty
    return (
      <Fragment>
        <div className={s.list__item__delete} onClick={() => this.showUpdateFiled(id)}>update</div>
        {this.state.showUpdate &&
        <form
          className={s.list__form}
          ref={el => this.form = el}
          onSubmit={event => this.createUser(event, id)}>
          <div className="card-body">
            <label htmlFor="firstName">First name</label>
            <input
              className="form-control"
              ref="first_name"
              name="first_name"
              onChange={event => this.handleInputChange(event)}
              required/>
            <br/>
            <label htmlFor="lastName">Last name</label>
            <input
              className="form-control"
              ref="last_name"
              name="last_name"
              onChange={event => this.handleInputChange(event)}
              required/>
            <br/>
            <label htmlFor="email">Email</label>
            <input
              className="form-control"
              ref="email"
              name="email"
              onChange={event => this.handleInputChange(event)}
              required/>
            <br/>
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

export default withStyles(s)(Update);