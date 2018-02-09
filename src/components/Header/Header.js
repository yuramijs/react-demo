import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './Header.scss';

const Header = ({header}) =>
  <div className={s.header}>
    <h2 className={s.header__title}>
      {header.props.title}
    </h2>
  </div>;

Header.propTypes = {
  header: PropTypes.object.isRequired,
};

export default withStyles(s)(Header);
