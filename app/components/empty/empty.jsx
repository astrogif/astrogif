import React, { Component, PropTypes } from 'react';
import { remote } from 'electron';

import cog from './cog.png';
import power from './power.png';
import GithubLink from '../githubLink/githubLink';
import styles from './empty.css';

export default class Empty extends Component {
  quit() {
    remote.app.quit();
  }
  render() {
    const { openSettings, closeSettings } = this.props;

    return (<div className={styles.container}>
      <svg height="64" viewBox="0 0 64 64" >
        <g fill="none" fillRule="evenodd">
          <g transform="translate(-108.000000, -240.000000)">
            <g transform="translate(108.000000, 240.000000)">
              <path d="M53.1997,25.9281 L54.3547,26.1891 C54.5437,26.2411 54.5437,26.5101 54.3547,26.5621 L53.1997,26.8231 C53.1027,26.8461 53.0267,26.9141 52.9997,27.0001 L52.6827,28.2331 C52.6307,28.4231 52.3617,28.4231 52.3097,28.2331 L51.9927,27.0001 C51.9657,26.9141 51.8907,26.8461 51.7927,26.8231 L50.6387,26.5621 C50.4487,26.5101 50.4487,26.2411 50.6387,26.1891 L51.7927,25.9281 C51.8897,25.9041 51.9657,25.8371 51.9927,25.7511 L52.3097,24.5171 C52.3617,24.3281 52.6307,24.3281 52.6827,24.5171 L52.9997,25.7511 C53.0267,25.8371 53.1027,25.9041 53.1997,25.9281 L53.1997,25.9281 Z"className="primaryIconColor" />
              <path d="M6.7033,57.5528 L7.8583,57.8138 C8.0473,57.8658 8.0473,58.1348 7.8583,58.1868 L6.7033,58.4478 C6.6063,58.4708 6.5303,58.5388 6.5033,58.6248 L6.1863,59.8578 C6.1343,60.0478 5.8653,60.0478 5.8133,59.8578 L5.4963,58.6248 C5.4693,58.5388 5.3943,58.4708 5.2963,58.4478 L4.1423,58.1868 C3.9523,58.1348 3.9523,57.8658 4.1423,57.8138 L5.2963,57.5528 C5.3933,57.5288 5.4693,57.4618 5.4963,57.3758 L5.8133,56.1418 C5.8653,55.9528 6.1343,55.9528 6.1863,56.1418 L6.5033,57.3758 C6.5303,57.4618 6.6063,57.5288 6.7033,57.5528"className="primaryIconColor" />
              <path d="M7,6 C7,6.552 6.552,7 6,7 C5.448,7 5,6.552 5,6 C5,5.448 5.448,5 6,5 C6.552,5 7,5.448 7,6"className="primaryIconColor" />
              <path d="M30,45 C30,45.552 29.552,46 29,46 C28.448,46 28,45.552 28,45 C28,44.448 28.448,44 29,44 C29.552,44 30,44.448 30,45"className="primaryIconColor" />
              <path d="M50,6 L14,6 L15,5 L49,5 L50,6 Z" className="secondaryIconColor" />
              <path d="M55,10 L9,10 L10,9 L54,9 L55,10 Z" className="secondaryIconColor" />
              <path d="M49,59 L16,59 L15,58 L50,58 L49,59 Z" className="secondaryIconColor" />
              <path d="M37,38 L1,38 L1,37 L38,37 L37,38 Z" className="secondaryIconColor" />
              <path d="M63,38 L47,38 L46,37 L63,37 L63,38 Z" className="secondaryIconColor" />
              <path d="M0.5,32 L63.5,32 L63.5,31 L0.5,31 L0.5,32 Z" className="secondaryIconColor" />
              <path d="M4,18 L60,18 L60,17 L4,17 L4,18 Z" className="secondaryIconColor" />
              <path d="M32,0 C14.327,0 0,14.327 0,32 C0,49.673 14.327,64 32,64 C49.673,64 64,49.673 64,32 C64,14.327 49.673,0 32,0 M32,1 C49.093,1 63,14.907 63,32 C63,49.093 49.093,63 32,63 C14.907,63 1,49.093 1,32 C1,14.907 14.907,1 32,1" className="primaryIconColor" />
              <path d="M42,35 C38.686,35 36,37.686 36,41 C36,44.314 38.686,47 42,47 C45.314,47 48,44.314 48,41 C48,37.686 45.314,35 42,35 M42,36 C44.757,36 47,38.243 47,41 C47,43.757 44.757,46 42,46 C39.243,46 37,43.757 37,41 C37,38.243 39.243,36 42,36" className="primaryIconColor" />
            </g>
          </g>
        </g>
      </svg>
      <h1 className={styles.title}>AstroGif</h1>
      <img src={cog} className={styles.cog} onClick={openSettings} />
      <GithubLink />
      <img src={power} className={styles.power} onClick={this.quit} />
    </div>);
  }
}

Empty.propTypes = {
  closeSettings: PropTypes.func,
  openSettings: PropTypes.func
}
