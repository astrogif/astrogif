import React, { Component, PropTypes } from 'react';
import { Update } from '../icons/icons';
import styles from './styles.css';

export default class Updater extends Component {
  render() {
    const { installAndRestart, available, downloaded } = this.props;

    if (available && downloaded) {
      return (<button className={styles.container} onClick={installAndRestart} >
        <Update height={20} width={20} />
        <span className={styles.text}>New version!</span>
      </button>);
    }
    return null;
  }
}

Updater.propTypes = {
  available: PropTypes.bool,
  downloaded: PropTypes.bool,
  installAndRestart: PropTypes.func.isRequired
};
