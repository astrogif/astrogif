import React, { PropTypes } from 'react';

// Import references to all files in the `./svg` directory, but only if we're not in test
const glyphs = {};
if (process && process.env.NODE_ENV !== 'test') {
  const req = require.context('./svgs', true);
  req.keys().forEach((key) => {
    glyphs[key.replace('./', '').replace('.svg', '')] = req(key);
  });
}

const Icon = ({ glyph, height, width, className }) => <svg className={className} width={width} height={height}>
  <use xlinkHref={glyphs[glyph]} />
</svg>;

Icon.propTypes = {
  glyph: PropTypes.string.isRequired,
  className: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

Icon.defaultProps = {
  height: 64,
  width: 64
};

export default Icon;
