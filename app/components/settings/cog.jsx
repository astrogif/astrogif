import React, { Component, PropTypes } from 'react';

import styles from './cog.css';

export default class componentName extends Component {
  render() {
    return (<div className={styles.container} onClick={this.props.onClick}>
      <svg fill="#fff" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 70 70" enableBackground="new 0 0 70 70">
        <g>
          <path d="M35.367,26.428c-4.687,0-8.5,3.813-8.5,8.5s3.813,8.5,8.5,8.5s8.5-3.813,8.5-8.5S40.054,26.428,35.367,26.428z
            M35.367,41.428c-3.59,0-6.5-2.91-6.5-6.5s2.91-6.5,6.5-6.5s6.5,2.91,6.5,6.5S38.957,41.428,35.367,41.428z"/>
          <path d="M43.917,21.998c-0.461-0.306-1.082-0.18-1.386,0.282c-0.305,0.46-0.179,1.08,0.282,1.386
            c3.79,2.511,6.054,6.721,6.054,11.262c0,0.553,0.447,1,1,1s1-0.447,1-1C50.867,29.714,48.27,24.881,43.917,21.998z"/>
          <path d="M35.367,21.428c0.94,0,1.88,0.098,2.795,0.289c0.069,0.015,0.138,0.021,0.206,0.021c0.463,0,0.879-0.323,0.978-0.795
            c0.113-0.54-0.232-1.07-0.773-1.184c-1.049-0.221-2.127-0.332-3.205-0.332c-0.553,0-1,0.447-1,1S34.814,21.428,35.367,21.428z"/>
          <path d="M64.219,27.583h-6.266c-0.468-1-1.1-2.556-1.882-4.001l2.424-2.151c1.563-1.563,1.563-3.958,0.001-5.521l-3.896-3.827
            c-0.75-0.75-1.768-1.139-2.829-1.139s-2.079,0.439-2.829,1.189l-2.617,2.434c-1.445-0.783-3.742-1.405-4.742-1.874V7.428
            c0-2.209-1.401-4.845-3.61-4.845h-6.508c-2.209,0-3.882,1.636-3.882,3.845v6.266c-2,0.469-2.659,1.1-4.104,1.883l-2.205-2.426
            c-0.75-0.75-1.657-1.172-2.718-1.172c-1.061,0-2.023,0.422-2.774,1.172l-3.868,3.896c-1.563,1.563-1.548,4.095,0.015,5.657
            l2.431,1.878c-0.782,1.445-1.407,3.001-1.875,4.001H6.219c-2.209,0-3.636,1.882-3.636,4.091v6.507c0,2.209,2.427,3.402,4.636,3.402
            h5.265c0.469,1,1.101,3.402,1.883,4.846l-2.424,2.574c-1.563,1.561-1.563,4.169-0.001,5.731l3.896,3.933
            c0.75,0.75,1.768,1.192,2.829,1.192s2.079-0.414,2.829-1.164l1.984-2.42c1.445,0.783,2.104,1.418,4.104,1.887v5.266
            c0,2.209,2.673,3.155,4.882,3.155h5.508c2.209,0,3.61-0.946,3.61-3.155v-5.266c1-0.469,3.297-1.1,4.742-1.883l2.52,2.426
            c0.75,0.75,1.817,1.172,2.879,1.172c1.061,0,2.101-0.422,2.852-1.172l3.909-3.896c1.562-1.563,1.566-4.095,0.004-5.656
            l-2.419-2.724c0.782-1.443,1.416-3.846,1.885-4.846h5.265c2.209,0,3.364-1.193,3.364-3.402v-5.507
            C66.583,30.465,66.428,27.583,64.219,27.583z M62.583,37.583h-7.841c-0.455,3-1.71,6.674-3.771,9.404l4.695,4.844l-3.896,3.972
            l-4.89-4.661c-2.732,2.062-6.299,3.354-9.299,3.81v7.632h-6v-7.632c-3-0.455-5.93-1.71-8.663-3.771l-4.475,4.697L14.66,51.98
            l4.75-4.993c-2.061-2.73-3.26-6.404-3.715-9.404H6.583v-6h9.112c0.455-3,1.71-5.827,3.771-8.56l-4.695-4.422l3.896-3.76
            l4.254,4.767c2.732-2.062,5.663-3.249,8.663-3.704V6.583h6v9.321c3,0.455,6.566,1.71,9.299,3.771l4.792-4.697l3.945,3.896
            l-4.673,4.148c2.061,2.732,3.341,5.56,3.796,8.56h7.841V37.583z"/>
          <path d="M28.421,45.689c-3.79-2.511-6.054-6.721-6.054-11.262c0-0.553-0.447-1-1-1s-1,0.447-1,1c0,5.214,2.598,10.047,6.95,12.93
            c0.17,0.112,0.361,0.166,0.551,0.166c0.324,0,0.643-0.157,0.835-0.448C29.008,46.615,28.882,45.995,28.421,45.689z"/>
        </g>
        </svg>
    </div>);
  }
}

componentName.propTypes = {
  onClick: PropTypes.func
};

