const path = require('path');

module.exports = (baseConfig) => {
  baseConfig.resolve.alias = {
    style: path.join(__dirname, 'src/style'),
    'preact-cli-entrypoint': path.join(__dirname, 'src/index.js'),
    preact$: path.join(__dirname, 'node_modules/preact/dist/preact.js'),
    react: 'preact/compat',
    'react-dom': 'preact/compat',
    'create-react-class': 'preact/compat',
    'react-addons-css-transition-group': 'preact-css-transition-group',
    'preact-cli/async-component': path.join(__dirname, 'node_modules/preact-cli/lib/components/async'),
    components: path.join(__dirname, 'src/components'),
    pages: path.join(__dirname, 'src/pages'),
    assets: path.join(__dirname, 'src/assets'),
    stores: path.join(__dirname, 'src/stores')
  };

  return baseConfig;
};