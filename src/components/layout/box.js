import React from 'react';
import './layout.scss';

const Box = (props) => {
  const justify = props.justify || 'start';
  const align = props.align || 'stretch';
  const self = props.self || 'auto';
  const wrap = props.wrap ? 'wrap' : '';
  const expand = props.expand || false;
  let padding = null;
  let width = null;
  let height = null;
  if (props.width) {
    if (typeof props.width === 'number') {
      width = `${props.width}px`;
    } else if (typeof props.width === 'string') {
      // eslint-disable-next-line prefer-destructuring
      width = props.width;
    }
  }
  if (props.height) {
    if (typeof props.height === 'number') {
      height = `${props.height}px`;
    } else if (typeof props.height === 'string') {
      // eslint-disable-next-line prefer-destructuring
      height = props.height;
    }
  }
  if (props.pad) {
    if (typeof props.pad === 'number') {
      padding = `${props.pad}px`;
    } else if (typeof props.pad === 'string') {
      padding = props.pad;
    } else if (Array.isArray(props.pad)) {
      padding = `${props.pad.reduce((prev, curr) => { return `${prev}px ${curr}`; })}px`.trim();
    }
  }
  const style = { padding, width, height };
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div id={props.id ? props.id : null} className={`${props.className ? props.className : ''} doc-box doc-box-${props.dir} justify-${justify} align-self-${self} align-${align} ${wrap} ${expand ? 'expand' : ''}`} style={style} onClick={props.onClick} role={props.role} tabIndex={props.tabIndex}>
      {props.children}
    </div>
  );
};

export default Box;
