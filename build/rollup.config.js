import license from 'rollup-plugin-license';
import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import ignoreImport from 'rollup-plugin-ignore-import';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';
// import analyze from 'rollup-plugin-analyzer';
// import fs from 'fs';

const REPLACE_VARS = {
  __USE_WC: true
};

const env = process.env.NODE_ENV;
const type = process.env.TYPE;
const config = {
  input: './src/components/entry/WcSelectionRules.tsx',
  output: { format: 'cjs' },
  // external: ['react', 'react-dom'],
  plugins: [
    // nodeResolve(),
    ignoreImport({
      // Ignore all .scss and .css file imports while building the bundle
      extensions: ['.less', '.css'],
      // Optional: replace body for ignored files. Default value is "export default undefined;"
      body: 'export default undefined;'
    }),
    replace(REPLACE_VARS),
    babel({
      babelrc: false,
      presets: [
        ['@babel/typescript', { allowNamespaces: true }],
        [
          '@babel/preset-react',
          {
            pragmaFrag: 'Fragment'
          }
        ]
      ],
      plugins: [
        ['import', { libraryName: 'antd', libraryDirectory: 'es', style: false }],
        '@narrative/compiler',
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
    }),
    alias({
      entries: [
        { find: 'react', replacement: '@pika/react' },
        { find: 'react-dom', replacement: '@pika/react-dom' }
      ]
    }),
    json(),
    commonjs(),
    resolve({
      preferBuiltins: false,
      mainFields: ['module', 'jsnext', 'jsnext:main', 'browser', 'main'],
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    }),
    terser(),
    // analyze({
    //   hideDeps: true,
    //   writeTo(analysisString) {
    //     fs.writeFile('./build/packages-analyze.txt', analysisString, function (err) {
    //       if (err) {
    //         return console.log(err);
    //       }
    //     });
    //   }
    // }),
    license({
      banner: `/*!
 * vite-react-webcomponents v${require('../package.json').version}
 * (c) bjzhoutao
 */`
    })
  ]
};

export default config;
