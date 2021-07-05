const { componentName } = require('./configs');

module.exports = {
  presets: [['@babel/typescript', { allowNamespaces: true }], '@babel/preset-env', '@babel/preset-react'],
  plugins: [
    [
      'transform-define',
      {
        COMPONENT_NAME: componentName
      }
    ],
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true
      }
    ],
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true
      }
    ],
    '@babel/plugin-proposal-optional-chaining'
  ]
};
