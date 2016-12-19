import React, { Component, PropTypes } from 'react';
import { ipcRenderer } from 'electron';

import styles from './settings.css';

export default class Settings extends Component {
  componentWillMount() {
    ipcRenderer.send('newHeight', 280);
  }

  componentWillUnmount() {
    ipcRenderer.send('resetHeight');
  }

  render() {
    const { close } = this.props;
    return (<div className={styles.container}>
      <h1 className={styles.title}>Settings</h1>
      <span className={styles.close} onClick={close} />
      <div className={styles.optionContainer}>
        <h2 className={styles.subTitle}>When copying, copy the</h2>
        <div className={styles.radioGroup}>
          <span className={`${styles.radioLabel} ${styles.radioLabelActive}`}>Url</span>
          <span className={styles.radioLabel}>Image</span>
          <span className={styles.radioLabel}>Markdown image</span>
        </div>
      </div>
      <div className={styles.optionContainer}>
        <h2 className={styles.subTitle}>On hide</h2>
        <div className={styles.radioGroup}>
          <span className={`${styles.radioLabel} ${styles.radioLabelActive}`}>Reset the gif search</span>
          <span className={styles.radioLabel}>Do nothing</span>
        </div>
      </div>
       <div className={styles.optionContainer}>
        <h2 className={styles.subTitle}>Show previews as</h2>
        <div className={styles.radioGroup}>
          <span className={`${styles.radioLabel} ${styles.radioLabelActive}`}>A gif</span>
          <span className={styles.radioLabel}>A mp4</span>
        </div>
      </div>
    </div>);
  }
}

Settings.propTypes = {
  close: PropTypes.func.isRequired
};
