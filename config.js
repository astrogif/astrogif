import ElectronConfig from 'electron-config';

const defaults = {}

const electronConfig = new ElectronConfig({
  defaults
});

electronConfig.reset = () => {
  electronConfig.set(defaults);
  return defaults;
};

export default electronConfig;
