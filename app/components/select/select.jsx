import React, { PropTypes } from 'react';
import styles from './styles.css';
import Icon from '../icons/icons';

const Select = ({ children, onChange, value }) => (<div className={styles.container}>
  <select className={styles.select} onChange={onChange} value={value}>
    {children}
  </select>
  <Icon glyph="down" className={styles.down} height="15" width="15" />
</div>);

Select.propTypes = {
  children: PropTypes.any,
  onChange: PropTypes.func,
  value: PropTypes.string
};

export default Select;
