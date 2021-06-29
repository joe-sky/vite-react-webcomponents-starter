import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import babel from '@rollup/plugin-babel';
import babelConfig from './build/babel.config';
import jsxSfc from 'vite-plugin-jsx-sfc';
import reactJsx from 'vite-react-jsx';
import Checker from 'vite-plugin-checker';

const env = process.env.NODE_ENV;
const isProduction = env === 'production';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [jsxSfc(), reactRefresh(), !isProduction && reactJsx(), !isProduction && Checker({ typescript: true })],
  define: {
    'process.env.NODE_ENV': JSON.stringify(env)
  },
  build: {
    rollupOptions: {
      plugins: [isProduction && babel(babelConfig())]
    }
  },
  esbuild: isProduction
    ? {
        jsxInject: `import React from 'react'`
      }
    : {},
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  optimizeDeps: {
    include: ['lodash', 'lodash/isObject', 'lodash/isEqual', '@ant-design/icons', '@ant-design/colors', 'classnames']
  }
});
