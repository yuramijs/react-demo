import React, {Component} from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './NotFound.css';

const NotFound = () => {

  const {title} = this.props;

  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1>{title}</h1>
        <p>Sorry, the page you were trying to view does not exist.</p>
      </div>
    </div>
  );
};

NotFound.propTypes = {
  title: PropTypes.string.isRequired,
};

export default withStyles(s)(NotFound);
