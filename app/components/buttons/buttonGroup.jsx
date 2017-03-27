import React, { PropTypes } from 'react';
import cn from 'classnames';
import styles from './buttonGroup.css';

const ButtonGroup = ({ children, className }) => <div className={cn(styles.container, className)}>{children}</div>;

ButtonGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
};

export default ButtonGroup;
