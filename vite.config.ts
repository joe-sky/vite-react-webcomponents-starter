import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import babel from '@rollup/plugin-babel';
import babelConfig from './build/babel.config';

const env = process.env.NODE_ENV;
const isProduction = env === 'production';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  define: {
    'process.env.NODE_ENV': JSON.stringify(env)
  },
  build: {
    rollupOptions: {
      plugins: [isProduction && babel(babelConfig())]
    }
  },
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
