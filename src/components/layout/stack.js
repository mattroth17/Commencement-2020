import React from 'react';
import './layout.scss';

const Stack = (props) => {
  let height = null;
  if (props.size) {
    if (typeof props.size === 'number') {
      height = `${props.size}px`;
    } else if (typeof props.size === 'string') {
      // eslint-disable-next-line prefer-destructuring
      height = props.size;
    }
  }
  return (
    <div className={`doc-stack${props.expand ? ' expand' : ''}`} style={{ height, minHeight: height }} />
  );
};

export default Stack;
