import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Output.scss';

const Output = ({output, rows}) =>
  <Fragment>
    <div className="card-header">
      <h2 className={s.admin__caption}>Output</h2>
    </div>
    <div className="card-body">
      <textarea className="form-control" value={output} rows={rows}/>
    </div>
  </Fragment>;


Output.propTypes = {
  rows: PropTypes.number,
};

export default withStyles(s)(Output);