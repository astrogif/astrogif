import React, { PropTypes } from 'react';
import cn from 'classnames';
import { remote } from 'electron';
import Icon from '../icons/icons';
import Updater from '../../containers/updater';
import styles from './styles.css';

const quit = () => { remote.app.quit(); };

const ActionBar = ({ changePage }) => <div>
  <button alt="Settings" className={cn('qa-settings', styles.button)} onClick={() => { changePage('settings'); }}>
    <Icon glyph="cog" className={styles.cog} />
  </button>
  <button alt="History" className={cn('qa-history', styles.button)} onClick={() => { changePage('history'); }}>
    <Icon glyph="history" className={styles.history} />
  </button>
  <button alt="Quit" className={cn('qa-quit', styles.button)} onClick={quit}>
    <Icon glyph="power" className={styles.power} />
  </button>
  <Updater />
</div>;

ActionBar.propTypes = {
  changePage: PropTypes.func.isRequired
};

export default ActionBar;
