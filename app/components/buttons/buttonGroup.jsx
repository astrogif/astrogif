import React, { PropTypes } from 'react';
import styles from './buttonGroup.css';

const ButtonGroup = ({ children }) => <div className={styles.container}>{children}</div>;

ButtonGroup.propTypes = {
  children: PropTypes.any
};

export default ButtonGroup;
