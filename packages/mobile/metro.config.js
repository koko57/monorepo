const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');

const config = {
    resolver: {
        unstable_enableSymlinks: true,
    },
    watchFolders: [
        path.resolve(__dirname, '../../node_modules'),
        path.resolve(__dirname, '../../node_modules/@example-app/shared'),
    ],
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
