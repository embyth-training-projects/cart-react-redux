import React from 'react';

import './error-indicator.css';

const ErrorIndicator = ({errorBody}) => {
  return (
    <div className="card text-white bg-danger mb-3">
      <h4 className="card-header text-center">Error</h4>
      <div className="card-body">
        <p className="card-text">{errorBody}</p>
      </div>
    </div>
  );
};

export default ErrorIndicator;
