import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Account.scss';

import getAccounts from '../../actions/account';
import getCurrentPublisher from '../../actions/currentPublisher';

import AccountList from './AccountList';

class Account extends Component {
  componentDidMount() {
    this.props.getAccounts();
  }

  render() {
    const {accounts, currentPublisher} = this.props;

    return (
      <div className={s.publisher__overflow}>
        {accounts && accounts.map((account, index) =>
          <Fragment key={index}>
            <AccountList accounts={account} currentPublisher={currentPublisher}/>
          </Fragment>
        )}
      </div>
    );
  }
}


const mapStateToProps = state => ({
  accounts: state.getAccounts.accounts,
  currentPublisher: state.getCurrentPublisher.currentPublisher,
});
const mapDispatchToProps = {
  getAccounts,
  getCurrentPublisher,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(s)(Account));