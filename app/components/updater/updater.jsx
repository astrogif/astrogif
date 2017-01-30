import React, { Component, PropTypes } from 'react';
import styles from './styles.css';

export default class Updater extends Component {
  render() {
    return null;
  }
}

Updater.propTypes = {
  checking: PropTypes.bool,
  available: PropTypes.bool,
  downloaded: PropTypes.bool,
  error: PropTypes.bool
};
