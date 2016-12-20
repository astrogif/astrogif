import React, { Component } from 'react';
import { shell } from 'electron';


import logo from './logo.png';
import styles from './githubLink.css';

export default class GithubLogo extends Component {
  onLogoClick() {
    shell.openExternal('https://github.com/jamesmacfie/astrogif');
  }

  render() {
    return <img onClick={this.onLogoClick} src={logo} className={styles.logo} />;
  }
}
