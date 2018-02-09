import React, {Component} from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {connect} from 'react-redux';

import getProperty from '../../../actions/property';

import s from './PropertyCreator.scss';

import {sendData} from '../../../helpers';
import ToggleShow from '../../ToggleShow/ToggleShow';
import FooterButton from "../../FooterButton/index";

class PropertyCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  static propTypes = {
    accounts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ),
  };

  createProperty = event => {
    event.preventDefault();
    const data = this.state;
    const link = event.target.action;

    sendData(link, data);

    this.props.getProperty();

    this.form.reset();
  };

  handleInputChange = event => {
    const {value, name} = event.target;

    this.setState(() => ({
      [name]: value
    }));
  };

  show = () => this.setState(() => ({show: !this.state.show}));

  render() {
    const {show} = this.state;
    const collapse = show ? 'collapse show' : 'collapse';

    return (
      <div className="card">
        <div className="card-header bg__blue">
          <div className="flex__between">
            <h5>Create a property</h5>
            <ToggleShow show={show} onClick={this.show}/>
          </div>
        </div>
        <form
          className={collapse}
          ref={el => this.form = el}
          action="/create-property"
          onSubmit={event => this.createProperty(event)}>
          <div className="card-body">
            <label htmlFor="propertyURL">Property URL</label>
            <input
              className="form-control"
              ref="propertyURL"
              name="propertyURL"
              type="url"
              onChange={event => this.handleInputChange(event)}
              required
            />
            <br/>
            <label htmlFor="propertyPlatform">Property platform</label>
            <input
              className="form-control"
              ref="propertyPlatform"
              name="propertyPlatform"
              onChange={event => this.handleInputChange(event)}
              required
            />
          </div>
          <FooterButton text={'Send'}/>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  accounts: state.getProperty,
});
const mapDispatchToProps = {
  getProperty,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(s)(PropertyCreator));