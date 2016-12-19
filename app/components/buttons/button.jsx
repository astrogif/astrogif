import React, { Component, PropTypes } from 'react';
import cn from 'classnames';

import styles from './button.css';

export default class Button extends Component {
  render() {
    const { children, isActive } = this.props;
    const classes = cn(styles.container, {
      [styles.active]: isActive
    });

    return <div className={classes}>{this.props.children}</div>;
  }
}

Button.propTypes = {
  isActive: PropTypes.bool,
  children: PropTypes.any
};
