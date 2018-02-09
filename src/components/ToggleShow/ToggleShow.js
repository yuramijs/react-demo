import React from 'react';

const ToggleShow = ({onClick, show}) =>
  <div className="right" onClick={onClick}>
    {show ?
      <i className="fa fa-arrow-down" aria-hidden="true"></i> :
      <i className="fa fa-arrow-up" aria-hidden="true"></i>
    }
  </div>;

export default ToggleShow;