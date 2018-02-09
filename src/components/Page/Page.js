import React from 'react';
import PropTypes from 'prop-types';
import s from './Page.css';

const Page = ({title, html}) => (
  <div className={s.root}>
    <div className={s.container}>
      <h1>{title}</h1>
    </div>
    <div
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: html}}
    />
  </div>
);


Page.propTypes = {
  title: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
};

export default Page;
