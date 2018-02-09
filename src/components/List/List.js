import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './List.scss';

import Li from "./Li";

const List = ({users, accounts, publishers, properties, subusers, subproperties, subpublishers}) => {

  const userData = {
    users,
  };
  const publishersData = {
    publishers,
    subproperties,
  };
  const accountsData = {
    accounts,
    subusers,
    subpublishers,
  };
  const propertiesData = {
    properties,
  };

  return (
    <ul className={`list-group list-group-flush ${s.list}`}>
      <Li {...userData}/>
      <Li {...publishersData}/>
      <Li {...accountsData}/>
      <Li {...propertiesData}/>
    </ul>
  );
};

List.propTypes = {
  users: PropTypes.array,
  accounts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
  publishers: PropTypes.array,
  properties: PropTypes.array,
  subusers: PropTypes.array,
  subproperties: PropTypes.array,
  subpublishers: PropTypes.array,
};

export default withStyles(s)(List);
