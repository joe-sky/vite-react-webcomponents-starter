import reactPlugin from 'vite-plugin-react';

const useWc = process.env.WC;
const REPLACE_VARS: Record<string, any> = {
  __USE_WC: !!useWc
};

/**
 * @type { import('vite').UserConfig }
 */
const config = {
  jsx: 'react',
  plugins: [reactPlugin],
  cssPreprocessOptions: {
    less: {
      javascriptEnabled: true
    }
  },
  define: REPLACE_VARS,
  optimizeDeps: {
    include: ['lodash', 'insert-css', '@ant-design/icons', '@ant-design/colors', 'classnames']
  }
};

export default config;
