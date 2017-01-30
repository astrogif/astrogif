import React, { PropTypes } from 'react';
import { shell, remote } from 'electron';
import cog from './cog.png';
import power from './power.png';
import github from './github.png';
import styles from './styles.css';

const openRepo = () => { shell.openExternal('https://github.com/astrogif/astrogif'); };
const quit = () => { remote.app.quit(); };

const ActionBar = ({ changePage }) => <div>
  <img alt="Settings" src={cog} className={styles.cog} onClick={() => { changePage('settings'); }} />
  <img alt="Open on Github" src={github} className={styles.github} onClick={openRepo} />
  <img alt="Exit" src={power} className={styles.power} onClick={quit} />
</div>;

ActionBar.propTypes = {
  changePage: PropTypes.func.isRequired
};

export default ActionBar;
