import React, { PropTypes } from 'react';

import styles from './styles.css';

export const Logo = () => <div className={styles.container}>
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
</div>;

export const Loader = () => <div className={styles.container}>
  <svg width="44" height="64" viewBox="0 0 44 64">
    <g fill="none" fillRule="evenodd">
      <g transform="translate(-431.000000, -448.000000)">
        <g transform="translate(431.000000, 448.000000)">
          <path d="M36.2427,16.7427 C36.1147,16.7427 35.9867,16.6937 35.8887,16.5967 C35.6937,16.4007 35.6937,16.0847 35.8887,15.8887 C36.9287,14.8497 37.4997,13.4697 37.4997,11.9997 C37.4997,10.5307 36.9287,9.1497 35.8887,8.1107 C34.8497,7.0717 33.4697,6.4997 31.9997,6.4997 C30.5307,6.4997 29.1497,7.0717 28.1107,8.1107 C27.9157,8.3057 27.5987,8.3057 27.4037,8.1107 C27.2087,7.9157 27.2087,7.5987 27.4037,7.4037 C29.9377,4.8697 34.0617,4.8697 36.5967,7.4037 C39.1307,9.9377 39.1307,14.0617 36.5967,16.5967 C36.4987,16.6937 36.3707,16.7427 36.2427,16.7427" className="secondaryIconColor" />
          <path d="M39.0713,19.5713 C38.9433,19.5713 38.8153,19.5223 38.7173,19.4253 C38.5223,19.2293 38.5223,18.9133 38.7173,18.7173 C42.4223,15.0133 42.4223,8.9863 38.7173,5.2823 C35.0133,1.5783 28.9873,1.5783 25.2823,5.2823 C25.0873,5.4773 24.7703,5.4773 24.5753,5.2823 C24.3803,5.0873 24.3803,4.7703 24.5753,4.5753 C28.6693,0.4813 35.3313,0.4813 39.4253,4.5753 C43.5183,8.6693 43.5183,15.3303 39.4253,19.4253 C39.3273,19.5223 39.1993,19.5713 39.0713,19.5713" className="secondaryIconColor" />
          <path d="M33,12 C33,12.552 32.552,13 32,13 C31.448,13 31,12.552 31,12 C31,11.448 31.448,11 32,11 C32.552,11 33,11.448 33,12" className="primaryIconColor" />
          <path d="M29.8535,14.8535 L29.1465,14.1465 L31.6465,11.6465 L32.3535,12.3535 L29.8535,14.8535 Z" className="primaryIconColor" />
          <path d="M39,29.5 C38.872,29.5 38.744,29.451 38.646,29.354 L14.646,5.354 C14.451,5.158 14.451,4.842 14.646,4.646 C14.842,4.451 15.158,4.451 15.354,4.646 L39.354,28.646 C39.549,28.842 39.549,29.158 39.354,29.354 C39.256,29.451 39.128,29.5 39,29.5" className="secondaryIconColor" />
          <path d="M16,23 C14.147,23 12.293,23.977 11.419,25.932 L2,55 L30,55 L20.581,25.932 C19.707,23.977 17.853,23 16,23 M16,24 C17.256,24 18.867,24.604 19.647,26.294 L28.625,54 L3.375,54 L12.353,26.294 C13.133,24.604 14.744,24 16,24" className="primaryIconColor" />
          <path d="M16,26 C14.343,26 13,27.343 13,29 C13,30.657 14.343,32 16,32 C17.657,32 19,30.657 19,29 C19,27.343 17.657,26 16,26 M16,27 C17.103,27 18,27.897 18,29 C18,30.103 17.103,31 16,31 C14.897,31 14,30.103 14,29 C14,27.897 14.897,27 16,27" className="secondaryIconColor" />
          <path d="M2,64 L30,64 L30,58 L2,58 L2,64 Z M3,63 L29,63 L29,59 L3,59 L3,63 Z" className="primaryIconColor" />
          <path d="M0,59 L32,59 L32,54 L0,54 L0,59 Z M1,58 L31,58 L31,55 L1,55 L1,58 Z" className="secondaryIconColor" />
          <path d="M42.5679,28.1487 C39.0889,31.2847 34.6349,32.9997 29.9169,32.9997 C27.0749,32.9997 24.3279,32.3777 21.8329,31.1967 L22.1049,32.4097 C24.5939,33.4697 27.2559,33.9997 29.9169,33.9997 C35.0139,33.9997 40.1109,32.0557 43.9999,28.1667 L15.8339,-0.0003 C9.1839,6.6497 8.2189,16.8307 12.9389,24.5057 L13.8349,24.0487 C9.4849,17.0287 10.1569,7.7567 15.8519,1.4327 L42.5679,28.1487 Z" className="primaryIconColor" />
          <path d="M7.2354,51.4414 L6.7644,50.5584 L21.7644,42.5584 L22.2354,43.4414 L7.2354,51.4414 Z" className="secondaryIconColor" />
          <path d="M24.7646,51.4414 L9.7646,43.4414 L10.2356,42.5584 L25.2356,50.5584 L24.7646,51.4414 Z" className="secondaryIconColor" />
          <path d="M21.6875,43.3906 L11.6875,35.3906 L12.3125,34.6096 L22.3125,42.6096 L21.6875,43.3906 Z" className="secondaryIconColor" />
          <path d="M10.3125,43.3906 L9.6875,42.6096 L19.6875,34.6096 L20.3125,35.3906 L10.3125,43.3906 Z" className="secondaryIconColor" />
          <path d="M20,34 L12,34 L6,52 L26,52 L20,34 Z M19.279,35 L24.613,51 L7.387,51 L12.721,35 L19.279,35 Z" className="primaryIconColor" />
        </g>
      </g>
    </g>
  </svg>
</div>;

export const NoGif = () => <div className={styles.container}>
  <svg width="59" height="64" viewBox="0 0 59 64">
    <g fill="none" fillRule="evenodd">
      <g transform="translate(-527.000000, -448.000000)">
        <g transform="translate(527.000000, 448.000000)">
          <path d="M28.2783,45.6499 L22.3493,43.2779 L22.7213,42.3499 L28.6503,44.7219 L28.2783,45.6499 Z" className="primaryIconColor" />
          <path d="M28.7217,45.6499 L28.3497,44.7219 L34.2787,42.3499 L34.6507,43.2779 L28.7217,45.6499 Z" className="primaryIconColor" />
          <path d="M16.5,59 C16.438,59 16.373,58.988 16.312,58.963 C16.056,58.859 15.933,58.567 16.037,58.312 L28.037,28.812 C28.142,28.556 28.433,28.434 28.688,28.537 C28.944,28.641 29.067,28.933 28.963,29.188 L16.963,58.688 C16.884,58.883 16.697,59 16.5,59" className="secondaryIconColor" />
          <path d="M40.5,59 C40.303,59 40.116,58.883 40.037,58.688 L28.037,29.188 C27.933,28.933 28.056,28.641 28.312,28.537 C28.565,28.433 28.858,28.556 28.963,28.812 L40.963,58.312 C41.067,58.567 40.944,58.859 40.688,58.963 C40.627,58.988 40.562,59 40.5,59" className="secondaryIconColor" />
          <path d="M28.5,64 C28.224,64 28,63.776 28,63.5 L28,29 C28,28.724 28.224,28.5 28.5,28.5 C28.776,28.5 29,28.724 29,29 L29,63.5 C29,63.776 28.776,64 28.5,64" className="secondaryIconColor" />
          <path d="M8.9667,31.1962 L-0.0003,36.1962 L1.9997,39.6602 L10.9667,34.6602 L8.9667,31.1962 Z M8.5937,32.5492 L9.5927,34.2812 L2.3737,38.3072 L1.3737,36.5752 L8.5937,32.5492 Z" className="secondaryIconColor" />
          <path d="M45.0718,5.7321 L6.1008,28.2321 L12.1008,38.6241 L51.0718,16.1241 L45.0718,5.7321 Z M44.7058,7.0981 L49.7058,15.7581 L12.4668,37.2581 L7.4668,28.5981 L44.7058,7.0981 Z" className="primaryIconColor" />
          <path d="M46.2417,17.7583 L45.3757,18.2583 L40.3757,9.5983 L41.2417,9.0983 L46.2417,17.7583 Z" className="secondaryIconColor" />
          <path d="M48.4019,1.5 L43.2059,4.5 L51.2059,18.356 L56.4019,15.356 L48.4019,1.5 Z M48.0359,2.866 L55.0359,14.99 L51.5719,16.99 L44.5719,4.866 L48.0359,2.866 Z" className="primaryIconColor" />
          <path d="M51,0 L47.536,2 L55.536,15.856 L59,13.856 L51,0 Z M50.634,1.366 L57.634,13.49 L55.902,14.49 L48.902,2.366 L50.634,1.366 Z" className="primaryIconColor" />
          <path d="M16.7968,34.7583 L15.9308,35.2583 L10.9308,26.5983 L11.7968,26.0983 L16.7968,34.7583 Z" className="secondaryIconColor" />
          <path d="M11.4067,9.1056 L13.7157,9.6276 C14.0947,9.7316 14.0947,10.2686 13.7157,10.3726 L11.4067,10.8946 C11.2127,10.9426 11.0607,11.0766 11.0077,11.2496 L10.3727,13.7156 C10.2687,14.0946 9.7317,14.0946 9.6277,13.7156 L8.9927,11.2496 C8.9397,11.0766 8.7877,10.9416 8.5937,10.8946 L6.2837,10.3726 C5.9057,10.2686 5.9057,9.7316 6.2837,9.6276 L8.5937,9.1056 C8.7877,9.0576 8.9397,8.9236 8.9927,8.7506 L9.6277,6.2836 C9.7317,5.9056 10.2687,5.9056 10.3727,6.2836 L11.0067,8.7506 C11.0607,8.9236 11.2127,9.0586 11.4067,9.1056" className="secondaryIconColor" />
          <path d="M3.7033,15.5528 L4.8583,15.8138 C5.0473,15.8658 5.0473,16.1348 4.8583,16.1868 L3.7033,16.4478 C3.6063,16.4708 3.5303,16.5388 3.5033,16.6248 L3.1863,17.8578 C3.1343,18.0478 2.8653,18.0478 2.8133,17.8578 L2.4963,16.6248 C2.4693,16.5388 2.3943,16.4708 2.2963,16.4478 L1.1423,16.1868 C0.9523,16.1348 0.9523,15.8658 1.1423,15.8138 L2.2963,15.5528 C2.3933,15.5288 2.4693,15.4618 2.4963,15.3758 L2.8133,14.1418 C2.8653,13.9528 3.1343,13.9528 3.1863,14.1418 L3.5033,15.3758 C3.5303,15.4618 3.6063,15.5288 3.7033,15.5528" className="secondaryIconColor" />
          <path d="M39.7504,12.9326 L28.4924,19.4326 C28.2544,19.5706 27.9464,19.4876 27.8094,19.2496 C27.6714,19.0116 27.7544,18.7036 27.9924,18.5666 L39.2504,12.0666 C39.4884,11.9286 39.7964,12.0116 39.9334,12.2496 C40.0704,12.4876 39.9884,12.7956 39.7504,12.9326" className="secondaryIconColor" />
        </g>
      </g>
    </g>
  </svg>
</div>;

export const Error = () => <div className={styles.container}>
  <svg width="64" height="64" viewBox="0 0 64 64">
    <g fill="none" fillRule="evenodd">
      <g transform="translate(-108.000000, -552.000000)">
        <g transform="translate(108.000000, 552.000000)">
          <path d="M48.5,64 C44.36,64 40.468,62.388 37.54,59.46 L0.146,22.854 C-0.049,22.658 -0.049,22.342 0.146,22.146 C0.342,21.951 0.658,21.951 0.854,22.146 L38.247,58.753 C40.986,61.492 44.627,63 48.5,63 C52.373,63 56.014,61.492 58.753,58.753 C61.492,56.015 63,52.373 63,48.5 C63,44.627 61.492,40.985 58.753,38.247 L32.146,11.854 C31.951,11.658 31.951,11.342 32.146,11.146 C32.342,10.951 32.658,10.951 32.854,11.146 L59.46,37.54 C62.388,40.468 64,44.359 64,48.5 C64,52.641 62.388,56.532 59.46,59.46 C56.532,62.388 52.64,64 48.5,64" className="primaryIconColor" />
          <path d="M36.5,32 C36.372,32 36.244,31.951 36.146,31.854 L5.146,0.854 C4.951,0.658 4.951,0.342 5.146,0.146 C5.342,-0.049 5.658,-0.049 5.854,0.146 L36.854,31.146 C37.049,31.342 37.049,31.658 36.854,31.854 C36.756,31.951 36.628,32 36.5,32" className="primaryIconColor" />
          <path d="M38.5,45 C38.372,45 38.244,44.951 38.146,44.854 L15.146,21.854 C14.951,21.658 14.951,21.342 15.146,21.146 C15.342,20.951 15.658,20.951 15.854,21.146 L38.854,44.146 C39.049,44.342 39.049,44.658 38.854,44.854 C38.756,44.951 38.628,45 38.5,45" className="primaryIconColor" />
          <path d="M47.5,53 C45.846,53 44.5,51.654 44.5,50 C44.5,48.346 45.846,47 47.5,47 C47.776,47 48,47.224 48,47.5 C48,47.776 47.776,48 47.5,48 C46.397,48 45.5,48.897 45.5,50 C45.5,51.103 46.397,52 47.5,52 C47.776,52 48,52.224 48,52.5 C48,52.776 47.776,53 47.5,53" className="primaryIconColor" />
          <path d="M55.4288,47.6374 C55.0038,47.8684 54.5168,48.0004 53.9998,48.0004 C52.3458,48.0004 50.9998,46.6544 50.9998,45.0004 C50.9998,44.2764 51.2578,43.6114 51.6858,43.0924 L50.7048,42.7314 C50.2608,43.3764 49.9998,44.1574 49.9998,45.0004 C49.9998,47.2094 51.7908,49.0004 53.9998,49.0004 C54.5418,49.0004 55.0588,48.8924 55.5298,48.6974 L55.4288,47.6374 Z" className="primaryIconColor" />
          <path d="M52,51 C52,51.552 51.552,52 51,52 C50.448,52 50,51.552 50,51 C50,50.448 50.448,50 51,50 C51.552,50 52,50.448 52,51" className="primaryIconColor" />
          <path d="M47,44.5 C47,45.328 46.328,46 45.5,46 C44.672,46 44,45.328 44,44.5 C44,44.038 44.579,44.175 44.908,43.9 C45.169,43.682 45.134,43 45.5,43 C46.328,43 47,43.672 47,44.5" className="primaryIconColor" />
          <path d="M49,42 C45.134,42 42,45.134 42,49 C42,52.866 45.134,56 49,56 C52.866,56 56,52.866 56,49 C56,45.134 52.866,42 49,42 M49,43 C52.308,43 55,45.692 55,49 C55,52.308 52.308,55 49,55 C45.692,55 43,52.308 43,49 C43,45.692 45.692,43 49,43" className="secondaryIconColor" />
        </g>
      </g>
    </g>
  </svg>
</div>;

export const Update = ({ height, width, className }) => <svg className={className} width={width} height={height} viewBox="0 0 60 60">
  <g>
    <path d="M50.976,20.694c-0.528-9-7.947-16.194-16.892-16.194c-5.43,0-10.688,2.663-13.945,7.008   c-0.075-0.039-0.154-0.066-0.23-0.102c-0.198-0.096-0.399-0.187-0.604-0.269c-0.114-0.045-0.228-0.086-0.343-0.126   c-0.203-0.071-0.409-0.134-0.619-0.191c-0.115-0.031-0.229-0.063-0.345-0.089c-0.225-0.051-0.455-0.09-0.687-0.125   c-0.101-0.015-0.2-0.035-0.302-0.046C16.677,10.523,16.341,10.5,16,10.5c-4.963,0-9,4.037-9,9c0,0.129,0.008,0.255,0.017,0.381   C2.857,22.148,0,26.899,0,31.654C0,38.737,5.762,44.5,12.845,44.5H18c0.553,0,1-0.447,1-1s-0.447-1-1-1h-5.155   C6.865,42.5,2,37.635,2,31.654c0-4.154,2.705-8.466,6.433-10.253L9,21.13V20.5c0-0.12,0.008-0.242,0.015-0.365l0.011-0.185   l-0.013-0.194C9.007,19.671,9,19.586,9,19.5c0-3.859,3.141-7,7-7c0.309,0,0.614,0.027,0.917,0.067   c0.078,0.01,0.156,0.023,0.233,0.036c0.267,0.044,0.53,0.102,0.789,0.177c0.035,0.01,0.071,0.017,0.106,0.027   c0.285,0.087,0.563,0.197,0.835,0.321c0.071,0.032,0.14,0.067,0.21,0.101c0.24,0.119,0.475,0.249,0.702,0.396   C21.719,14.873,23,17.038,23,19.5c0,0.553,0.447,1,1,1s1-0.447,1-1c0-2.754-1.246-5.219-3.2-6.871   C24.667,8.879,29.388,6.5,34.084,6.5c7.745,0,14.178,6.135,14.849,13.888c-1.021-0.072-2.552-0.109-4.083,0.124   c-0.546,0.083-0.921,0.593-0.838,1.139c0.075,0.495,0.501,0.85,0.987,0.85c0.05,0,0.101-0.004,0.151-0.012   c2.227-0.337,4.548-0.021,4.684-0.002C54.49,23.372,58,27.661,58,32.472C58,38.001,53.501,42.5,47.972,42.5H44 c-0.553,0-1,0.447-1,1s0.447,1,1,1h3.972C54.604,44.5,60,39.104,60,32.472C60,26.983,56.173,22.06,50.976,20.694z" className="primaryIconColor" />
    <path d="M38.293,45.793L32,52.086V31.5c0-0.553-0.447-1-1-1s-1,0.447-1,1v20.586l-6.293-6.293c-0.391-0.391-1.023-0.391-1.414,0   s-0.391,1.023,0,1.414l7.999,7.999c0.092,0.093,0.203,0.166,0.326,0.217C30.74,55.474,30.87,55.5,31,55.5s0.26-0.026,0.382-0.077   c0.123-0.051,0.234-0.124,0.326-0.217l7.999-7.999c0.391-0.391,0.391-1.023,0-1.414S38.684,45.402,38.293,45.793z" className="primaryIconColor" />
  </g>
</svg>;

Update.propTypes = {
  className: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number
};

Update.defaultProps = {
  height: 64,
  width: 64
};

export const Power = ({ height, width, className }) => <svg className={className} width={width} height={height} viewBox="0 0 286.107 286.107">
  <g>
    <path className="primaryIconColor" d="M237.891,54.663c-10.638-10.772-20.149-19.353-33.978-26.129c-8.689-4.264-19.175-0.59-23.376,8.197
      c-4.228,8.787-0.581,19.362,8.099,23.626c10.298,5.042,17.217,10.62,25.164,18.665c39.011,39.449,39.011,103.632,0,143.072
      c-18.897,19.121-44.043,29.624-70.763,29.624c-26.728,0-51.865-10.512-70.763-29.624c-39.011-39.44-39.011-103.623,0-143.072
      c7.974-8.054,15.858-13.614,25.647-18.647c8.269-4.273,11.728-14.839,7.715-23.635c-4.014-8.778-12.649-12.39-21.123-8.242
      c-13.436,6.597-25.647,15.393-36.311,26.165c-52.303,52.875-52.303,138.897,0,191.781c26.156,26.433,60.5,39.663,94.845,39.663
      c34.353,0,68.698-13.221,94.845-39.663C290.212,193.578,290.212,107.547,237.891,54.663z M143.064,143.027
      c9.869,0,17.878-8.01,17.878-17.878V17.878C160.942,8.01,152.933,0,143.064,0s-17.878,8.01-17.878,17.878v107.27
      C125.186,135.026,133.195,143.027,143.064,143.027z" />
  </g>
</svg>;

Power.propTypes = {
  className: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number
};

Power.defaultProps = {
  height: 64,
  width: 64
};

export const Settings = ({ height, width, className }) => <svg className={className} width={width} height={height} viewBox="0 0 478.703 478.703">
  <g>
    <g>
      <path d="M454.2,189.101l-33.6-5.7c-3.5-11.3-8-22.2-13.5-32.6l19.8-27.7c8.4-11.8,7.1-27.9-3.2-38.1l-29.8-29.8    c-5.6-5.6-13-8.7-20.9-8.7c-6.2,0-12.1,1.9-17.1,5.5l-27.8,19.8c-10.8-5.7-22.1-10.4-33.8-13.9l-5.6-33.2 c-2.4-14.3-14.7-24.7-29.2-24.7h-42.1c-14.5,0-26.8,10.4-29.2,24.7l-5.8,34c-11.2,3.5-22.1,8.1-32.5,13.7l-27.5-19.8 c-5-3.6-11-5.5-17.2-5.5c-7.9,0-15.4,3.1-20.9,8.7l-29.9,29.8c-10.2,10.2-11.6,26.3-3.2,38.1l20,28.1 c-5.5,10.5-9.9,21.4-13.3,32.7l-33.2,5.6c-14.3,2.4-24.7,14.7-24.7,29.2v42.1c0,14.5,10.4,26.8,24.7,29.2l34,5.8 c3.5,11.2,8.1,22.1,13.7,32.5l-19.7,27.4c-8.4,11.8-7.1,27.9,3.2,38.1l29.8,29.8c5.6,5.6,13,8.7,20.9,8.7c6.2,0,12.1-1.9,17.1-5.5 l28.1-20c10.1,5.3,20.7,9.6,31.6,13l5.6,33.6c2.4,14.3,14.7,24.7,29.2,24.7h42.2c14.5,0,26.8-10.4,29.2-24.7l5.7-33.6 c11.3-3.5,22.2-8,32.6-13.5l27.7,19.8c5,3.6,11,5.5,17.2,5.5l0,0c7.9,0,15.3-3.1,20.9-8.7l29.8-29.8c10.2-10.2,11.6-26.3,3.2-38.1 l-19.8-27.8c5.5-10.5,10.1-21.4,13.5-32.6l33.6-5.6c14.3-2.4,24.7-14.7,24.7-29.2v-42.1 C478.9,203.801,468.5,191.501,454.2,189.101z M451.9,260.401c0,1.3-0.9,2.4-2.2,2.6l-42,7c-5.3,0.9-9.5,4.8-10.8,9.9 c-3.8,14.7-9.6,28.8-17.4,41.9c-2.7,4.6-2.5,10.3,0.6,14.7l24.7,34.8c0.7,1,0.6,2.5-0.3,3.4l-29.8,29.8c-0.7,0.7-1.4,0.8-1.9,0.8 c-0.6,0-1.1-0.2-1.5-0.5l-34.7-24.7c-4.3-3.1-10.1-3.3-14.7-0.6c-13.1,7.8-27.2,13.6-41.9,17.4c-5.2,1.3-9.1,5.6-9.9,10.8l-7.1,42 c-0.2,1.3-1.3,2.2-2.6,2.2h-42.1c-1.3,0-2.4-0.9-2.6-2.2l-7-42c-0.9-5.3-4.8-9.5-9.9-10.8c-14.3-3.7-28.1-9.4-41-16.8 c-2.1-1.2-4.5-1.8-6.8-1.8c-2.7,0-5.5,0.8-7.8,2.5l-35,24.9c-0.5,0.3-1,0.5-1.5,0.5c-0.4,0-1.2-0.1-1.9-0.8l-29.8-29.8 c-0.9-0.9-1-2.3-0.3-3.4l24.6-34.5c3.1-4.4,3.3-10.2,0.6-14.8c-7.8-13-13.8-27.1-17.6-41.8c-1.4-5.1-5.6-9-10.8-9.9l-42.3-7.2 c-1.3-0.2-2.2-1.3-2.2-2.6v-42.1c0-1.3,0.9-2.4,2.2-2.6l41.7-7c5.3-0.9,9.6-4.8,10.9-10c3.7-14.7,9.4-28.9,17.1-42 c2.7-4.6,2.4-10.3-0.7-14.6l-24.9-35c-0.7-1-0.6-2.5,0.3-3.4l29.8-29.8c0.7-0.7,1.4-0.8,1.9-0.8c0.6,0,1.1,0.2,1.5,0.5l34.5,24.6 c4.4,3.1,10.2,3.3,14.8,0.6c13-7.8,27.1-13.8,41.8-17.6c5.1-1.4,9-5.6,9.9-10.8l7.2-42.3c0.2-1.3,1.3-2.2,2.6-2.2h42.1 c1.3,0,2.4,0.9,2.6,2.2l7,41.7c0.9,5.3,4.8,9.6,10,10.9c15.1,3.8,29.5,9.7,42.9,17.6c4.6,2.7,10.3,2.5,14.7-0.6l34.5-24.8 c0.5-0.3,1-0.5,1.5-0.5c0.4,0,1.2,0.1,1.9,0.8l29.8,29.8c0.9,0.9,1,2.3,0.3,3.4l-24.7,34.7c-3.1,4.3-3.3,10.1-0.6,14.7 c7.8,13.1,13.6,27.2,17.4,41.9c1.3,5.2,5.6,9.1,10.8,9.9l42,7.1c1.3,0.2,2.2,1.3,2.2,2.6v42.1H451.9z" className="primaryIconColor" />
   <path d="M239.4,136.001c-57,0-103.3,46.3-103.3,103.3s46.3,103.3,103.3,103.3s103.3-46.3,103.3-103.3S296.4,136.001,239.4,136.001 z M239.4,315.601c-42.1,0-76.3-34.2-76.3-76.3s34.2-76.3,76.3-76.3s76.3,34.2,76.3,76.3S281.5,315.601,239.4,315.601z" className="primaryIconColor" />
    </g>
  </g>
</svg>;

Settings.propTypes = {
  className: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number
};

Settings.defaultProps = {
  height: 64,
  width: 64
};
