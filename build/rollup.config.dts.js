import dts from 'rollup-plugin-dts';
import license from 'rollup-plugin-license';
import alias from '@rollup/plugin-alias';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import ignoreImport from 'rollup-plugin-ignore-import';

const config = {
  input: './src/components/entry/dts.ts',
  output: { format: 'es' },
  plugins: [
    // nodeResolve(),
    ignoreImport({
      // Ignore all .scss and .css file imports while building the bundle
      extensions: ['.less', '.css'],
      // Optional: replace body for ignored files. Default value is "export default undefined;"
      body: 'export default undefined;'
    }),
    alias({
      entries: [
        { find: '@pika/react', replacement: 'react' },
        { find: '@pika/react-dom', replacement: 'react-dom' }
      ]
    }),
    dts(),
    license({
      banner: `/*!
 * vite-react-webcomponents v${require('../package.json').version}
 * (c) Joe_Sky
 */`
    })
  ]
};

export default config;
