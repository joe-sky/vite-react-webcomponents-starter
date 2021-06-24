export default (hasStyle = false) => ({
  babelrc: false,
  presets: [['@babel/typescript', { allowNamespaces: true }], '@babel/preset-react'],
  plugins: [
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: hasStyle }],
    'jsx-sfc',
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
  ],
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
  exclude: /node_modules/
});
