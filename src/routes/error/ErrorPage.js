import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ErrorPage.css';

const ErrorPage = props => {
  if (__DEV__ && props.error) {
      return (
        <Fragment>
          <h1>{props.error.name}</h1>
          <pre>{props.error.stack}</pre>
        </Fragment>
      );
    }

    return (
      <Fragment>
        <h1>Error</h1>
        <p>Sorry, a critical error occurred on this page.</p>
      </Fragment>
    );
};

ErrorPage.propTypes = {
  error: PropTypes.shape({
    name: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    stack: PropTypes.string.isRequired,
  }),
};

ErrorPage.defaultProps = {
  error: null,
};

export { ErrorPage as ErrorPageWithoutStyle };
export default withStyles(s)(ErrorPage);
