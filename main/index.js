import menubar from 'menubar';
import { ipcMain } from 'electron';

const defaultHeight = 210;

const mb = menubar({
  index: `file://${process.cwd()}/app/app.html`,
  height: defaultHeight,
  width: 320
});

mb.on('ready', () => {
  ipcMain.on('close', () => {
    mb.hideWindow();
  })

  ipcMain.on('newHeight', (event, height) => {
    console.log('Setting to new hieght', height, typeof height);
    const currentDimensions = mb.window.getSize();
    mb.window.setSize(currentDimensions[0], Number.parseInt(height), true);
  })

  ipcMain.on('resetHeight', () => {
    const currentDimensions = mb.window.getSize();
    mb.window.setSize(currentDimensions[0], defaultHeight, true);
  })
})
