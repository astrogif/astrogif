import React, { Component, PropTypes } from 'react';
import cn from 'classnames';

import styles from './button.css';

export default class Button extends Component {
  render() {
    const { children, isActive, onClick } = this.props;
    const classes = cn(styles.container, {
      [styles.active]: isActive
    });

    return <button onClick={onClick} className={classes}>{this.props.children}</button>;
  }
}

Button.propTypes = {
  isActive: PropTypes.bool,
  children: PropTypes.any,
  onClick: PropTypes.func.isActive
};
