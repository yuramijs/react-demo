import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.scss';

import FooterLogoColor from './footer-logo-color.png';

const Footer = () =>
  <div className={s.footer}>
    <img className={s.footer__logo} src={FooterLogoColor} alt="Adnami footer logo"/>
  </div>;

export default withStyles(s)(Footer);
