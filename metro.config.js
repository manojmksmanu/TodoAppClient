const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');

const defaultConfig = getDefaultConfig(__dirname);

const config = {
  resolver: {
    extraNodeModules: {
      '@': path.resolve(__dirname, 'src'),
    },
    sourceExts: [...defaultConfig.resolver.sourceExts, 'cjs', 'ts', 'tsx'],
  },
  watchFolders: [path.resolve(__dirname, 'src')],
};

module.exports = mergeConfig(defaultConfig, config);
