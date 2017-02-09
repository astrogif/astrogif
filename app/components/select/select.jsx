import React, { PropTypes } from 'react';
import styles from './styles.css';
import down from './down.png';

const Select = ({ children, onChange, value }) => (<div className={styles.container}>
  <select className={styles.select} onChange={onChange} value={value}>
    {children}
  </select>
  <img className={styles.down} src={down} alt="down" />
</div>);


Select.propTypes = {
  children: PropTypes.any,
  onChange: PropTypes.func,
  value: PropTypes.string
};

export default Select;
