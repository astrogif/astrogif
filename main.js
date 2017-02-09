import menubar from 'menubar';
import { globalShortcut, ipcMain, Menu } from 'electron';
import path from 'path';
import setupAutoupdater from './updater';

const defaultHeight = 210;
const mb = menubar({
  dir: __dirname,
  index: `file://${path.join(__dirname, 'app', 'app.html')}`,
  height: defaultHeight,
  windowPosition: 'center',
  preloadWindow: true,
  width: 320
});

const menu = [{
  label: 'AstroGif',
  submenu: [{
    label: 'Quit',
    accelerator: 'Command+Q',
    click() {
      mb.app.quit();
    }
  }],
}, {
  label: 'Edit',
  submenu: [
    {
      label: 'Undo',
      accelerator: 'CmdOrCtrl+Z',
      selector: 'undo:'
    },
    {
      label: 'Redo',
      accelerator: process.platform === 'darwin' ? 'CmdOrCtrl+Y' : 'Shift+Command+Z',
      selector: 'redo:'
    },
    {
      type: 'separator'
    },
    {
      label: 'Cut',
      accelerator: process.platform === 'darwin' ? 'CmdOrCtrl+X' : 'Command+X',
      selector: 'cut:'
    },
    {
      label: 'Copy',
      accelerator: process.platform === 'darwin' ? 'CmdOrCtrl+C' : 'Command+C',
      selector: 'copy:'
    },
    {
      label: 'Paste',
      accelerator: process.platform === 'darwin' ? 'CmdOrCtrl+V' : 'Command+V',
      selector: 'paste:'
    },
    {
      label: 'Select All',
      accelerator: process.platform === 'darwin' ? 'CmdOrCtrl+A' : 'Command+A',
      selector: 'selectAll:'
    },
  ]
}, {
  label: 'View',
  submenu: [
    {
      label: 'Reload',
      accelerator: 'CmdOrCtrl+R',
      click(item, focusedWindow) {
        if (focusedWindow) {
          focusedWindow.reload();
        }
      }
    },
    {
      label: 'Toggle Developer Tools',
      accelerator: process.platform === 'darwin' ? 'Alt+Command+I' : 'Ctrl+Shift+I',
      click: (item, focusedWindow) => {
        if (focusedWindow) {
          focusedWindow.webContents.toggleDevTools();
        }
      }
    }
  ]
}];

Menu.setApplicationMenu(Menu.buildFromTemplate(menu));

// Menubar events
mb.app.on('will-quit', () => {
  globalShortcut.unregisterAll();
});

mb.on('after-create-window', () => {
  if (process.env.NODE_ENV === 'development') {
    mb.window.openDevTools();
  }
});

mb.on('ready', () => {
  setupAutoupdater(mb);
  mb.on('after-hide', () => {
    // Reset the UI when the app is hidden
    mb.window.webContents.send('reset');
  });
});

// IPC comms
ipcMain.on('hide', () => {
  mb.hideWindow();
});

ipcMain.on('newHeight', (event, height) => {
  const currentDimensions = mb.window.getSize();
  mb.window.setSize(currentDimensions[0], Number.parseInt(height), true);
});

ipcMain.on('resetHeight', () => {
  const currentDimensions = mb.window.getSize();
  mb.window.setSize(currentDimensions[0], defaultHeight, true);
});

ipcMain.on('shortcut', (event, shortcut) => {
  globalShortcut.unregisterAll();
  globalShortcut.register(shortcut, () => {
    if (mb.window.isVisible()) {
      mb.hideWindow();
    } else {
      mb.showWindow();
      mb.window.focus();
    }
  });
});

ipcMain.on('login', (event, openAtLogin) => {
  // Only open the packaged version
  if (process.env.NODE_ENV !== 'development') {
    mb.app.setLoginItemSettings({
      openAtLogin,
      openAsHidden: true
    });
  }
});
