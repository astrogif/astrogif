import React, { Component } from 'react';

import styles from './buttonGroup.css';

export default class ButtonGroup extends Component {
  render() {
    return <div className={styles.container}>{this.props.children}</div>;
  }
}
