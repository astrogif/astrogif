import React, { Component, PropTypes } from 'react';
import cn from 'classnames';
import { ipcRenderer } from 'electron';
import config from '../../../config';
import Button from '../buttons/button';
import ButtonGroup from '../buttons/buttonGroup';
import Shortcut from './shortcut';

import x from './x.png';
import styles from './settings.css';

export default class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = config.get();
  }

  componentWillMount() {
    ipcRenderer.send('newHeight', 420);
  }

  componentWillUnmount() {
    ipcRenderer.send('resetHeight');
  }

  buttonClickHandler(option, value) {
    // Does seem weird to both set things in state as well as in the config, but just
    // updating the config isn't enough to render the component again with the UI changes
    this.setState({
      [option]: value
    });

    config.set(option, value);
  }

  getButton(option, value, text, handler) {
    const configValue = this.state[option];
    const isActive = configValue === value;
    const onClick= () => {
      this.buttonClickHandler(option, value);
      if (handler) {
        handler();
      }
    };

    return <Button onClick={onClick} isActive={isActive}>{text}</Button>;
  }

  onLoginChangeEvent(value) {
    ipcRenderer.send('login', value);
  }

  render() {
    const { close } = this.props;
    return (<div className={styles.container}>
      <h1 className={styles.title}>Settings</h1>
      <img className={styles.close} src={x} onClick={close} />
      <div className={styles.optionContainer}>
        <h2 className={styles.subTitle}>Global shortcut</h2>
        <div className={styles.shortcut}>
          <Shortcut />
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
    </div>);
  }
}

Settings.propTypes = {
  close: PropTypes.func.isRequired
};
