import React, {Component} from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {connect} from 'react-redux';

import getPublishers from '../../../actions/publisher';

import s from './PublisherCreator.scss';

import {sendData} from '../../../helpers';
import ToggleShow from '../../ToggleShow/ToggleShow';
import FooterButton from "../../FooterButton/index";

class PublisherCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
  };

  createPublisher = event => {
    event.preventDefault();
    const data = this.state;
    const link = event.target.action;
    sendData(link, data);

    this.props.getPublishers();

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
    const {title, action, label, button} = this.props;
    const {show} = this.state;
    const collapse = show ? 'collapse show' : 'collapse';

    return (
      <div className="card">
        <div className="card-header bg__blue">
          <div className="flex__between">
            <h5>{title}</h5>
            <ToggleShow show={show} onClick={this.show}/>
          </div>
        </div>
        <form
          className={collapse}
          ref={el => this.form = el}
          action={action}
          onSubmit={event => this.createPublisher(event)}>
          <div className="card-body">
            <label htmlFor="publisherName">{label}</label>
            <input
              className="form-control"
              ref="publisherName"
              name="publisherName"
              onChange={event => this.handleInputChange(event)}
              required
            />
          </div>
          <FooterButton text={button}/>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  accounts: state.getPublishers,
});
const mapDispatchToProps = {
  getPublishers,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(s)(PublisherCreator));