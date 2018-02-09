import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './Account.scss';
import getAccounts from '../../../actions/account';
import getPublishers from '../../../actions/publisher';

import CardList from '../../../components/CardList';
import AccountCreator from '../../../components/creators/AccountCreator/AccountCreator';

class Account extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  componentDidMount() {
    if (!this.props.accounts) {
      this.props.getAccounts();
    }
    this.props.getPublishers();
  }

  render() {
    const {accounts, publishers} = this.props;

    const account = {
      title: 'Account',
      accounts,
      subpublishers: publishers,
    };
    const accountCreator = {
      title: 'Create an account',
      action: '/account/create',
      label: 'Account name',
      button: 'Create account',
    };

    return (
      <Fragment>
        <CardList {...account}/>
        <AccountCreator {...accountCreator}/>
      </Fragment>);
  }
}

const mapStateToProps = ({getAccounts, getPublishers}) => ({
  accounts: getAccounts.accounts,
  publishers: getPublishers.publishers,
});
const mapDispatchToProps = {
  getAccounts,
  getPublishers,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(s)(Account));

