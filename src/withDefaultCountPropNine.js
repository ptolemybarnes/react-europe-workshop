import React from 'react';

export default Component => (
  props => <Component count={ 9 } { ...props }></Component>
);
