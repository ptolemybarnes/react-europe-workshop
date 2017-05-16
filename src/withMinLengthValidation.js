import React from 'react';

const renderWarning = (min) => (
  <span>
    { 'Minimum ' }
    { min }
    { ' required.' }
  </span>
)

export default (Component, minimumLength) => (
  props => {
    const { value } = props;
    const showWarning = ('' + value).length < minimumLength;
    return (
      <div>
        <Component { ...props } />
        { showWarning && renderWarning(minimumLength) }
      </div>
    )
  }
)
