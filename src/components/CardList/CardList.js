import React, {Component} from 'react';
import PropTypes from 'prop-types';

import List from '../List';
import ToggleShow from '../ToggleShow/ToggleShow';

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  static propTypes = {
    title: PropTypes.string.isRequired,
    users: PropTypes.array,
    publishers: PropTypes.array,
    accounts: PropTypes.array,
    properties: PropTypes.array,
  };

  show = () => this.setState(() => ({show: !this.state.show}));

  render() {
    const {title, accounts, users, publishers, properties, subusers, subproperties, subpublishers} = this.props;
    const {show} = this.state;

    const accountsData = {
      accounts,
      subusers,
      subpublishers,
    };
    const usersData = {
      users,
    };
    const publishersData = {
      publishers,
      subproperties,
    };
    const propertiesData = {
      properties,
    };

    const collapse = show ? 'collapse show card-body' : 'collapse card-body';

    return (
      <div className="card">
        <div className="card-header bg__blue">
          <div className="flex__between">
            <h5>{title}</h5>
            <ToggleShow show={show} onClick={this.show}/>
          </div>
        </div>
        <div className={collapse}>
          {accounts && <List {...accountsData}/>}
          {users && <List {...usersData}/>}
          {publishers && <List {...publishersData}/>}
          {properties && <List {...propertiesData}/>}
        </div>
      </div>
    );
  }
}

export default CardList;