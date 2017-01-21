import React, { PropTypes } from 'react';
import cn from 'classnames';
import styles from './button.css';

const Button = ({ isActive, children, onClick }) => {
  const classes = cn(styles.container, {
    [styles.active]: isActive
  });

  return <button onClick={onClick} className={classes}>{children}</button>;
};

Button.propTypes = {
  isActive: PropTypes.bool,
  children: PropTypes.any,
  onClick: PropTypes.func
};

export default Button;
