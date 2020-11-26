import license from 'rollup-plugin-license';
import postcss from 'rollup-plugin-postcss';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

const REPLACE_VARS = {
  __USE_WC: false
};

const config = {
  input: './src/components/WcSelectionRules.tsx',
  output: { format: 'es' },
  plugins: [
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
        ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
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
        ]
      ],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      exclude: /node_modules/
    }),
    json(),
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
 * vite-react-webcomponents v${require('../package.json').version}
 * (c) Joe_Sky
 */`
    })
  ]
};

export default config;
