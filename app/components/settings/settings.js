import React, { Component, PropTypes } from 'react';
import { ipcRenderer } from 'electron';
import Button from '../buttons/button';
import ButtonGroup from '../buttons/buttonGroup';
import Shortcut from './shortcut';
import { version } from '../../../package.json';

import x from './x.png';
import styles from './styles.css';

export default class Settings extends Component {
  componentDidMount() {
    ipcRenderer.send('newHeight', this.el.clientHeight + 20);
  }

  componentWillUnmount() {
    ipcRenderer.send('resetHeight');
  }

  onButtonClickHandler(key, value) {
    this.props.update(key, value);
  }

  onLoginChangeEvent(value) { // eslint-disable-line class-methods-use-this
    ipcRenderer.send('login', value);
  }

  getButton(option, value, text, handler) {
    const configValue = this.props.config[option];
    const isActive = configValue === value;
    const onClick = () => {
      this.onButtonClickHandler(option, value);
      if (handler) {
        handler();
      }
    };

    return <Button onClick={onClick} isActive={isActive}>{text}</Button>;
  }

  render() {
    const { config, updateShortCut } = this.props;
    return (<div className={styles.container} ref={el => this.el = el}>
      <h1 className={styles.title}>Settings</h1>
      <img alt="close" className={styles.close} src={x} onClick={() => this.props.changePage('home')} />
      <div className={styles.optionContainer}>
        <h2 className={styles.subTitle}>Global shortcut</h2>
        <div className={styles.shortcut}>
          <Shortcut currentShortcut={config.shortcut} updateShortCut={updateShortCut} />
        </div>
      </div>
      <div className={styles.optionContainer}>
        <h2 className={styles.subTitle}>When copying, copy the</h2>
        <ButtonGroup>
          {this.getButton('copy', 'url', 'Url')}
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
      <div className={styles.optionContainer}>
        <h2 className={styles.subTitle}>On computer start</h2>
        <ButtonGroup>
          {this.getButton('login', false, 'Do nothing', this.onLoginChangeEvent.bind(this, false))}
          {this.getButton('login', true, 'Load Astrogif', this.onLoginChangeEvent.bind(this, true))}
        </ButtonGroup>
      </div>
      <p className={styles.version}>Current version: v{version}</p>
    </div>);
  }
}

Settings.propTypes = {
  config: PropTypes.object,
  changePage: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
  updateShortCut: PropTypes.func.isRequired
};
