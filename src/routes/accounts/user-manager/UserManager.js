import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './UserManager.scss';

import getAccounts from '../../../actions/account';
import getUsers from '../../../actions/users';

import CardList from '../../../components/CardList';


class UserManager extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  componentDidMount() {
    this.props.getAccounts();
    this.props.getUsers();
  }

  render() {
    const {accounts, subusers} = this.props;

    const userManager = {
      title: 'User manager',
      accounts,
      subusers,
    };

    return <CardList {...userManager}/>;
  }
}

const mapStateToProps = ({getAccounts, getUsers}) => ({
  accounts: getAccounts.accounts,
  subusers: getUsers.users,
});
const mapDispatchToProps = {
  getAccounts,
  getUsers,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(s)(UserManager));

