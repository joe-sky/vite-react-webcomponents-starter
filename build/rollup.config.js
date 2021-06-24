import license from 'rollup-plugin-license';
import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';
import ignoreImport from 'rollup-plugin-ignore-import';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';
import image from '@rollup/plugin-image';
import replace from '@rollup/plugin-replace';
import postcss from 'rollup-plugin-postcss';
import analyze from 'rollup-plugin-analyzer';
import fs from 'fs';
import babelConfig from './babel.config';

const env = process.env.NODE_ENV;
const format = process.env.FORMAT;
const config = {
  input: './src/components/wc/WcShell.tsx',
  output: { format },
  // external: ['react', 'react-dom'],
  plugins: [
    ignoreImport({
      // Ignore all .scss and .css file imports while building the bundle
      extensions: ['.less'],
      // Optional: replace body for ignored files. Default value is "export default undefined;"
      body: 'export default undefined;'
    }),
    postcss({ minimize: true }),
    babel(babelConfig()),
    json(),
    image(),
    commonjs(),
    resolve({
      preferBuiltins: false,
      mainFields: ['module', 'jsnext', 'jsnext:main', 'browser', 'main'],
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(env)
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
 * @joe-sky/vite-react-webcomponents v${require('../package/package.json').version}
 * (c) Joe_Sky
 */`
    })
  ]
};

export default config;
