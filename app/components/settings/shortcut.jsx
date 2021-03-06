import React, { PropTypes } from 'react';
import ShortcutChooser from 'react-shortcut-chooser';

const Shortcut = ({ currentShortcut, updateShortCut }) =>
  <ShortcutChooser defaultValue={currentShortcut} onUpdate={updateShortCut} />;

Shortcut.propTypes = {
  currentShortcut: PropTypes.string,
  updateShortCut: PropTypes.func.isRequired
};

export default Shortcut;
