import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './AccountDetails.scss';

import getPublishers from '../../../actions/publisher';
import getProperty from '../../../actions/property';

import PublisherCreator from '../../../components/creators/PublisherCreator';
import PropertyCreator from '../../../components/creators/PropertyCreator';
import CardList from '../../../components/CardList';

class AccountDetails extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  componentDidMount() {
    this.props.getPublishers();
    this.props.getProperty();
  }

  render() {
    const {publishers, properties} = this.props;

    const accountPublishers = {
      title: 'Account publishers',
      publishers,
      subproperties: properties,
    };
    const publisherCreator = {
      title: 'Create a publisher',
      action: '/create-publisher',
      label: 'Publisher name',
      button: 'Create publisher',
    };

    return (
      <Fragment>
        <CardList {...accountPublishers}/>
        <PublisherCreator {...publisherCreator}/>
        <PropertyCreator/>
      </Fragment>
    );
  }
}

const mapStateToProps = ({getPublishers, getProperties}) => ({
  publishers: getPublishers.publishers,
  property: getProperties.property,
});
const mapDispatchToProps = {
  getPublishers,
  getProperty,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(s)(AccountDetails));

