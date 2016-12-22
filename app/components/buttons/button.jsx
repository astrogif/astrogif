import React, { Component, PropTypes } from 'react';
import cn from 'classnames';
import styles from './button.css';

export default ({ isActive, children, onClick }) => {
  const classes = cn(styles.container, {
    [styles.active]: isActive
  });

  return <button onClick={onClick} className={classes}>{children}</button>;
}
