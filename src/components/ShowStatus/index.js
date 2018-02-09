import React from 'react';

const ShowStatus = ({status, message}) => {

  if (status === true) {
    return <div className="alert alert-warning">{message}</div>
  }
  if (status === false) {
    return <div className="alert alert-danger">{message}</div>
  }
  else {
    return null;
  }

};

export default ShowStatus;