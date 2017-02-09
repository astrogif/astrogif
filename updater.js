
import os from 'os';
import { autoUpdater, ipcMain } from 'electron';
import pkg from './package.json';

export default function setup(menuBar) {
  const mainWindow = menuBar.window;
  if (process.env.NODE_ENV !== 'production') {
    console.log('Not production. Not checking for updates');
    return;
  }

  let updateInterval;

  const nutsServer = process.env.NUTS || 'http://nuts.astrogif.com';
  const platform = os.platform() === 'darwin' ? 'osx' : 'win32';
  const feedUrl = `${nutsServer}/update/${platform}/${pkg.version}`;

  autoUpdater.setFeedURL(feedUrl);

  // User has requested that an available update be installed
  ipcMain.on('installAndRestart', () => {
    autoUpdater.quitAndInstall();
  });

  // For each event, tell the UI that something has happened
  autoUpdater.addListener('update-available', () => {
    clearInterval(updateInterval);
    mainWindow.webContents.send('updateAvailable');
  });

  autoUpdater.addListener('update-downloaded', (event, releaseNotes, releaseName) => {
    mainWindow.webContents.send('updateDownloaded', {
      releaseNotes,
      releaseName
    });
  });

  autoUpdater.addListener('error', (error, msg) => {
    mainWindow.webContents.send('updateError', msg);
  });

  autoUpdater.addListener('checking-for-update', () => {
    mainWindow.webContents.send('updateChecking');
  });

  autoUpdater.addListener('update-not-available', () => {
    mainWindow.webContents.send('updateNone');
  });

  // Set initial update check for 10 seconds
  setTimeout(() => {
    autoUpdater.checkForUpdates();
  }, 10000);

  // Then check again every hour
  updateInterval = setInterval(() => {
    autoUpdater.checkForUpdates();
  }, 60 * 60 * 1000);

  menuBar.on('after-close', () => {
    clearInterval(updateInterval);
  });
}
