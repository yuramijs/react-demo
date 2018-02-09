import React, {Component, Fragment} from 'react';
import {Badge, Nav, NavItem, NavLink as RsNavLink} from 'reactstrap';
import classNames from 'classnames';
import nav from './_nav';

import Link from '../../Link';
import Account from '../../Account';
import Logo from './footer-logo.png';

class Sidebar extends Component {

  handleClick(e) {
    e.preventDefault();
    e.target.nextSibling.classList.toggle('open');
  }

  activeRoute(routeName) {
    let pathname = null;
    if (typeof window !== 'undefined') {
      pathname = window.location.pathname;
    }
    if (routeName && routeName.url === pathname) {
      return 'active';
    }
    //TODO reafactor
    return null;
  }

  render() {
    const activeRoute = this.activeRoute;
    const handleClick = this.handleClick;

    const badge = badge => {
      if (badge) {
        const classes = classNames(badge.class);
        return (<Badge className={classes} color={badge.variant}>{badge.text}</Badge>)
      }
    };
    const wrapper = item => (item.wrapper && item.wrapper.element ?
      (React.createElement(item.wrapper.element, item.wrapper.attributes, item.name)) : item.name );

    const title = (title, key) => {
      const classes = classNames("nav-title", title.class);
      return (<li key={key} className={classes}>{wrapper(title)} </li>);
    };
    const divider = (divider, key) => (<li key={key} className="divider"></li>);

    const navItem = (item, key) => {
      const active = activeRoute(item);
      const classes = classNames(item.class);
      const isExternal = url => url.substring(0, 4) === 'http' ? true : false;

      const variant = classNames("nav-link", item.variant ? `nav-link-${item.variant}` : "");
      return (
        <NavItem key={key} className={classes}>
          {isExternal(item.url) ?
            <RsNavLink href={item.url} className={variant} active>
              <i className={item.icon}></i>
              {item.name}{badge(item.badge)}
            </RsNavLink>
            :
            <Link to={item.url} className={variant}>
              <i className={item.icon}></i>
              {item.name}{badge(item.badge)}
            </Link>
          }
        </NavItem>
      )
    };

    const navDropdown = (item, key) => (
      <li key={key}>
        <a className="nav-link nav-dropdown-toggle" href="#" onClick={handleClick.bind(this)}>
          <i className={item.icon}></i>{item.name}</a>
        <ul className="nav-dropdown-items">
          {navList(item.children)}
        </ul>
      </li>
    );

    // nav link
    const navLink = (item, idx) =>
      item.title ? title(item, idx) :
        item.divider ? divider(item, idx) :
          item.children ? navDropdown(item, idx)
            : navItem(item, idx);


    const navList = items => items.map((item, index) => navLink(item, index));

    return (
      <Fragment>
        <img className="sidebar__logo" src={Logo} alt="Logo Adnami"/>
        <Account/>
        <div className="sidebar">
          <nav className="sidebar-nav">
            <Nav>
              {navList(nav.items)}
            </Nav>
          </nav>
        </div>
      </Fragment>
    )
  }
}

export default Sidebar;
