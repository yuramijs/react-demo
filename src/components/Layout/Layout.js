import React, {Component} from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
// external-global styles must be imported in your JS.
import normalizeCss from 'normalize.css';
import s from './Layout.css';
import Footer from '../Footer';
import Sidebar from '../sidebars/Sidebar';
import Header from '../Header';

import coreUI from './../../../scss/style.scss';
import FontAwesome from './../../../node_modules/font-awesome/scss/font-awesome.scss';

import {connect} from 'react-redux';

import getCurrentPublisher from '../../actions/currentPublisher';

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    currentPublisher: PropTypes.object.isRequired,
  };

  componentDidMount(props) {
    this.props.getCurrentPublisher();
  }

  render() {
    const {children} = this.props;

    return (
      <div className="app">
        <div className="app-body">
          <aside className="aside-menu">
            <Sidebar/>
          </aside>
          <main className="main">
            {/*TODO reafactor and set  tiltle*/}
            <Header header={children}/>
            <div className="container-fluid">
              <div className="wrapper">
                {children}
              </div>
            </div>
            <footer className="app-footer">
              <Footer/>
            </footer>
          </main>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  currentPublisher: state.getCurrentPublisher,
});
const mapDispatchToProps = {
  getCurrentPublisher
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(normalizeCss, s, coreUI, FontAwesome)(Layout));
