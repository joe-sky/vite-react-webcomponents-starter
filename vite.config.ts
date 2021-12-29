import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import babel from '@rollup/plugin-babel';
import babelConfig from './build/babel.config';
import Checker from 'vite-plugin-checker';
import { componentName } from './build/configs';

const env = process.env.NODE_ENV;
const isProduction = env === 'production';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), !isProduction && Checker({ typescript: true })],
  define: {
    'process.env.NODE_ENV': JSON.stringify(env),
    COMPONENT_NAME: JSON.stringify(componentName)
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
