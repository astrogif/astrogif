import React, { Component, PropTypes } from 'react';
import cn from 'classnames';
import { ipcRenderer } from 'electron';
import config from '../../../config';
import Button from '../buttons/button';
import ButtonGroup from '../buttons/buttonGroup';

import x from './x.png';
import styles from './settings.css';

export default class Settings extends Component {
  componentWillMount() {
    console.log(config.get());
    ipcRenderer.send('newHeight', 290);
  }

  componentWillUnmount() {
    ipcRenderer.send('resetHeight');
  }

  getButton(option, value, text) {
    const configValue = config.get(option);
    const isActive = configValue === value;

    return <Button isActive={isActive}>{text}</Button>;
  }

  render() {
    const { close } = this.props;
    return (<div className={styles.container}>
      <h1 className={styles.title}>Settings</h1>
      <img className={styles.close} src={x} onClick={close} />
      <div className={styles.optionContainer}>
        <h2 className={styles.subTitle}>When copying, copy the</h2>
        <ButtonGroup>
          {this.getButton('copy', 'url', 'Url')}
          {this.getButton('copy', 'image', 'Image')}
          {this.getButton('copy', 'markdown', 'Markdown')}
        </ButtonGroup>
      </div>
      <div className={styles.optionContainer}>
        <h2 className={styles.subTitle}>On hide</h2>
        <ButtonGroup>
          {this.getButton('hide', 'reset', 'Reset')}
          {this.getButton('hide', 'nothing', 'Do nothing')}
        </ButtonGroup>
      </div>
       <div className={styles.optionContainer}>
        <h2 className={styles.subTitle}>Show previews as</h2>
        <ButtonGroup>
          {this.getButton('preview', 'gif', '.gif')}
          {this.getButton('preview', 'mp4', '.mp4')}
        </ButtonGroup>

      </div>
    </div>);
  }
}

Settings.propTypes = {
  close: PropTypes.func.isRequired
};
