import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {isEmpty} from 'lodash';

import {graphQueryResp} from '../../../helpers';

import s from './Li.scss';

import Attach from "./../Attach";
import Update from "./../Update";
import SetPassword from "../../SetPassword/SetPassword";

const deleteUser = id => {
  const query = `deleteUser(id: ${id}) {id}`;
  graphQueryResp(query);
};

//TODO refactor isEmpty
const Li = ({users, accounts, publishers, properties, subusers, subproperties, subpublishers}) =>
  <Fragment>
    {!isEmpty(users) &&
    users.map(({id, first_name}, index) => (
      <li className={`list-group-item flex__between ${s.list__item__update}`} key={index}>
        <div>User name - {first_name}</div>
        <div className="flex__between">
          <div onClick={() => deleteUser(id)} className={s.list__item__delete}>Delete</div>
          <Update id={id}/>
          <SetPassword id={id}/>
        </div>
      </li>
    ))}
    {!isEmpty(publishers) &&
    publishers.map(({id, name, Properties}, index) => (
      <li className="list-group-item" key={index}>
        <div className="flex__between">
          <h5>Publisher name - {name}</h5>
          <Attach id={id} subproperties={subproperties}/>
        </div>
        {Properties &&
        Properties.map(({url}, index) =>
          <span className="list-group-item" key={index}>Property URL - {url}</span>
        )}
      </li>
    ))}
    {!isEmpty(properties) &&
    properties.map(({url}, index) =>
      <li className="list-group-item" key={index}>Property url - {url}</li>
    )}
    {!isEmpty(accounts) &&
    accounts.map(({id, name, Users}, index) =>
      <li className="list-group-item" key={index}>
        <div className="flex__between">
          <h5>Account name - {name}</h5>
          <Attach id={id} subusers={subusers} subpublishers={subpublishers}/>
        </div>
        <Fragment>
          {Users &&
          Users.map(({firstName}, index) =>
            <span className="list-group-item" key={index}>User name - {firstName}</span>
          )}
        </Fragment>
      </li>
    )}
  </Fragment>;

Li.propTypes = {
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

export default withStyles(s)(Li);