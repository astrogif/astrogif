import React, { PropTypes } from 'react';
import cn from 'classnames';
import styles from './styles.css';
import Icon from '../icons/icons';

const Select = ({ children, className, onChange, value }) => (<div className={cn(styles.container, className)}>
  <select className={styles.select} onChange={onChange} value={value}>
    {children}
  </select>
  <Icon glyph="down" className={styles.down} height="15" width="15" />
</div>);

Select.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  onChange: PropTypes.func,
  value: PropTypes.string
};

export default Select;
