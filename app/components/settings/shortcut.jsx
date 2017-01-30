import React, { PropTypes } from 'react';
import ShortcutChooser from 'react-shortcut-chooser';

const Shortcut = ({ currentShortcut, updateShortCut }) =>
  <ShortcutChooser defaultValue={currentShortcut} onUpdate={updateShortCut} />;

Shortcut.propTypes = {
  currentShortcut: PropTypes.string,
  updateShortCut: PropTypes.func.isRequired
};

export default Shortcut;

//   shortCutHandler(shortcut) {
//     config.set('shortcut', shortcut);
//     ipcRenderer.send('shortcut', shortcut);
//   }

//   render() {
//     return ;
//   }
// }
