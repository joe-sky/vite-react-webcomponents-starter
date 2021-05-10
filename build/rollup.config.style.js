import license from 'rollup-plugin-license';
import postcss from 'rollup-plugin-postcss';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import image from '@rollup/plugin-image';
// import replace from '@rollup/plugin-replace';
import babelConfig from './babel.config';

const config = {
  input: './src/components/entry/WcShell.tsx',
  output: { format: 'es' },
  plugins: [
    babel(babelConfig(true)),
    json(),
    image(),
    commonjs(),
    resolve({
      // customResolveOptions: {
      //   moduleDirectory: 'src'
      // },
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.less', '.css']
    }),
    postcss({
      extract: `vite-react-webcomponents.css`,
      extensions: ['.css', '.less'],
      use: {
        less: {
          javascriptEnabled: true
        }
      },
      minimize: true
    }),
    license({
      banner: `/*!
 * @joe-sky/vite-react-webcomponents v${require('../style/package.json').version}
 * (c) Joe_Sky
 */`
    })
  ]
};

export default config;
