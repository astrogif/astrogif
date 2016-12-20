import menubar from 'menubar';
import { globalShortcut, ipcMain } from 'electron';
import path from 'path';

const defaultHeight = 210;

const mb = menubar({
  index: 'file://' + path.join(__dirname, 'app', 'app.html'),
  height: defaultHeight,
  preloadWindow: true,
  width: 320
});

mb.app.on('will-quit', function () {
  globalShortcut.unregisterAll()
})

mb.on('ready', () => {
  ipcMain.on('close', () => {
    mb.hideWindow();
  })

  ipcMain.on('newHeight', (event, height) => {
    const currentDimensions = mb.window.getSize();
    mb.window.setSize(currentDimensions[0], Number.parseInt(height), true);
  })

  ipcMain.on('resetHeight', () => {
    const currentDimensions = mb.window.getSize();
    mb.window.setSize(currentDimensions[0], defaultHeight, true);
  })

  ipcMain.on('shortcut', (event, shortcut) => {
    globalShortcut.unregisterAll();
    globalShortcut.register(shortcut, () => {
      mb.window.isVisible() ? mb.hideWindow() : mb.showWindow()
    });
  })
});

mb.on('after-create-window', () => {
  mb.window.openDevTools();
});
