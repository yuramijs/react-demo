import React, {Component} from 'react';
import {connect} from 'react-redux';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Admin.scss';

import getAccounts from '../../actions/account';
import getUsers from '../../actions/users';
import getPublishers from '../../actions/publisher';
import getProperty from '../../actions/property';

import AccountCreator from '../../components/creators/AccountCreator';
import PublisherCreator from '../../components/creators/PublisherCreator';
import UserCreator from '../../components/creators/UserCreator';
import PropertyCreator from '../../components/creators/PropertyCreator';

import CardList from '../../components/CardList';


class Admin extends Component {
  componentDidMount() {
    //TODO refactor with one action, cause many request and renders
    this.props.getUsers();
    this.props.getAccounts();
    this.props.getPublishers();
    this.props.getProperty();
  }

  render() {
    const {users, accounts, publishers, properties} = this.props;

    //TODO refactor with fabric
    const usersData = {
      title: 'Users',
      users,
    };
    const accountsData = {
      title: 'Accounts',
      accounts,
    };
    const propertiesData = {
      title: 'Properties',
      properties,
    };
    const publishersData = {
      title: 'Publishers',
      publishers,
    };

    return (
        <div className="row">
          <div className="col-6">
            <UserCreator/>
            <AccountCreator
              title='Create an account'
              action='/create-account'
              label='Account name'
              button='Create account'
            />
            <PropertyCreator/>
            <PublisherCreator
              title='Create a publisher'
              action='/create-publisher'
              label='Publisher name'
              button='Create publisher'
            />
          </div>
          <div className="col-6">
            <CardList {...usersData}/>
            <CardList {...accountsData}/>
            <CardList {...propertiesData}/>
            <CardList {...publishersData}/>
          </div>
        </div>
    );
  }
}

const mapStateToProps = ({getUsers, getAccounts, getPublishers, getProperties}) => ({
  users: getUsers.users,
  accounts: getAccounts.accounts,
  publishers: getPublishers.publishers,
  properties: getProperties.properties,
});
const mapDispatchToProps = {
  getUsers,
  getAccounts,
  getPublishers,
  getProperty,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(s)(Admin));

