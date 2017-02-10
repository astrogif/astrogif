import React, { PropTypes } from 'react';
import cn from 'classnames';
import { shell, remote } from 'electron';
import { Github, Power, Settings } from '../icons/icons';
import Updater from '../../containers/updater';
import styles from './styles.css';

const openRepo = () => { shell.openExternal('https://github.com/astrogif/astrogif'); };
const quit = () => { remote.app.quit(); };

const ActionBar = ({ changePage }) => <div>
  <button alt="Settings" className={cn('qa-settings', styles.button)} onClick={() => { changePage('settings'); }}>
    <Settings className={styles.cog} />
  </button>
  <button alt="Github" className={cn('qa-github', styles.button)} onClick={openRepo}>
    <Github className={styles.github} />
  </button>
  <button alt="Quit" className={cn('qa-quit', styles.button)} onClick={quit}>
    <Power className={styles.power} />
  </button>
  <Updater />
</div>;

ActionBar.propTypes = {
  changePage: PropTypes.func.isRequired
};

export default ActionBar;
