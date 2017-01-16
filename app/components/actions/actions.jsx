import React, { Component, PropTypes } from 'react';
import { shell, remote } from 'electron';
import cog from './cog.png';
import power from './power.png';
import github from './github.png';
import styles from './actions.css';

const openRepo = () => { shell.openExternal('https://github.com/astrogif/astrogif'); }
const quit = () => { remote.app.quit(); }

export default ({ openSettings }) => <div>
  <img src={cog} className={styles.cog} onClick={openSettings} />
  <img src={github} className={styles.github} onClick={openRepo} />
  <img src={power} className={styles.power} onClick={quit} />
</div>;
