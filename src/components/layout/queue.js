import React from 'react';
import './layout.scss';

const Queue = (props) => {
  let width = null;
  if (props.size) {
    if (typeof props.size === 'number') {
      width = `${props.size}px`;
    } else if (typeof props.size === 'string') {
      // eslint-disable-next-line prefer-destructuring
      width = props.size;
    }
  }
  return (
    <div className={`doc-queue${props.expand ? ' expand' : ''}`} style={{ width, minWidth: width }} />
  );
};

export default Queue;
