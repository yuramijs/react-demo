import React, {Component} from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {connect} from 'react-redux';

import ShowStatus from './../../ShowStatus';
import getUsers from '../../../actions/users';

import s from './UserCreator.scss';

import {graphQueryResp} from '../../../helpers';
import ToggleShow from '../../ToggleShow/ToggleShow';
import FooterButton from "../../FooterButton/index";

class UserCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      status: null,
      message: null,
    };
  }

  static propTypes = {
    accounts: PropTypes.object.isRequired,
  };

  createUser = async (event) => {
    event.preventDefault();

    const data = this.state;
    const {first_name, last_name, email, password} = data;
    const query = `createUser(first_name: "${first_name}", last_name: "${last_name}", email: "${email}", password: "${password}") {id}`;

    try {
      const resp = await graphQueryResp(query);
      const {id} = resp.data.data.createUser;
      const status = true;
      const message = `User with id ${id} created!`;

      this.setState(() => ({status, message}))
    }
    catch (err) {
      const status = false;
      const message = err.toString();

      this.setState(() => ({status, message}))
    }

    //TODO refactor
    this.props.getUsers();

    this.form.reset();
  };

  handleInputChange = event => {
    const {value, name} = event.target;

    this.setState(() => ({
      [name]: value
    }));
  };

  show = () => this.setState(() => ({show: !this.state.show}));

  render() {
    const {show, status, message} = this.state;
    const collapse = show ? 'collapse show' : 'collapse';

    return (
      <div className="card">
        <div className="card-header bg__blue">
          <div className="flex__between">
            <h5>Create a user</h5>
            <ToggleShow show={show} onClick={this.show}/>
          </div>
        </div>
        <ShowStatus status={status} message={message}/>
        {show ?
          <form
            className={collapse}
            ref={el => this.form = el}
            onSubmit={event => this.createUser(event)}>
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
          </form> : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  accounts: state.getUsers,
});
const mapDispatchToProps = {
  getUsers,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(s)(UserCreator));