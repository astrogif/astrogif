import ElectronConfig from 'electron-config';

const defaults = {
  copy: 'url',
  hide: 'reset',
  preview: 'gif',
  shortcut: 'Control + Alt + Space',
  login: false
};

const electronConfig = new ElectronConfig({
  defaults
});

electronConfig.reset = () => {
  electronConfig.set(defaults);
  return defaults;
};

export default electronConfig;
