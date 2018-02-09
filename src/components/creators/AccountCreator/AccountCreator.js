import React, {Component} from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {connect} from 'react-redux';

import getAccounts from '../../../actions/account';

import s from './AccountCreator.scss';

import {handleInputChange, sendData} from '../../../helpers';
import ToggleShow from '../../ToggleShow/ToggleShow';
import FooterButton from "../../FooterButton/index";

class AccountCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
  }
  static propTypes = {
    title: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
  };

  createAccount = event => {
    event.preventDefault();
    const data = this.state;
    const link = event.target.action;

    sendData(link, data);

    this.props.getAccounts();

    this.form.reset();
  };

  show = () => this.setState(() => ({show: !this.state.show}));

  render() {
    const {title, action, label, button} = this.props;
    const {show} = this.state;
    const collapse = show ? 'collapse show' : 'collapse';

    return (
      <div className="card">
        <div className="card-header bg__blue">
          <div className="flex__between">
            <h5>{title}</h5>
            <ToggleShow show={show} onClick={this.show}/>
          </div>
        </div>
        <form
          className={collapse}
          ref={el => this.form = el}
          action={action}
          method='post'
          onSubmit={event => this.createAccount(event)}>
          <div className="card-body">
            <label htmlFor="accountName">{label}</label>
            <input
              className="form-control"
              ref="accountName"
              name="accountName"
              onChange={event => handleInputChange(event, this)}
              required
            />
          </div>
          <FooterButton text={button}/>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  accounts: state.getAccounts,
});
const mapDispatchToProps = {
  getAccounts,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(s)(AccountCreator));