import React, { Component } from 'react';

import styles from './searchBox.css';

export default class MagnifyingGlass extends Component {
  render() {
    return (<div className={styles.magnifyingGlass}>
      <svg x="0px" y="0px" width="30px" height="30px" viewBox="0 0 70 70">
      <g>
        <path fill="#848995" d="M64.897,54.278l-15.54-15.543c1.645-3.291,2.575-6.997,2.575-10.917c0-13.509-10.99-24.5-24.5-24.5s-24.5,10.991-24.5,24.5
          s10.99,24.5,24.5,24.5c4.16,0,8.079-1.045,11.514-2.881l15.35,15.21c1.399,1.4,3.263,1.937,5.248,1.937c0.013,0,0.025,0,0.038,0
          c1.991,0,3.866-0.56,5.278-1.974c1.413-1.412,2.197-3.079,2.207-5.071C67.077,57.54,66.307,55.687,64.897,54.278z M47.915,52.749
          l4.914-4.914l1.587,1.586l-4.906,4.906L47.915,52.749z M6.933,27.818c0-11.323,9.178-20.5,20.5-20.5s20.5,9.177,20.5,20.5
          c0,11.324-9.178,20.5-20.5,20.5S6.933,39.142,6.933,27.818z M47.223,42.237l4.191,4.186l-4.921,4.92l-4.149-4.104
          C44.197,45.812,45.842,44.128,47.223,42.237z M62.032,61.783c-0.663,0.662-1.54,0.8-2.471,0.8c-0.006,0-0.012,0-0.018,0
          c-0.916,0-1.775-0.132-2.42-0.776l-6.192-6.099l4.899-4.888l6.238,6.237c0.648,0.648,1.003,1.444,0.998,2.368
          C63.063,60.355,62.695,61.119,62.032,61.783z"/>
      </g>
      </svg>
    </div>)
  }
}
