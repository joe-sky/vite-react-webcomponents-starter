import dts from 'rollup-plugin-dts';
import license from 'rollup-plugin-license';
import alias from '@rollup/plugin-alias';
import ignoreImport from 'rollup-plugin-ignore-import';

const config = {
  input: './src/components/entry/dts.ts',
  output: { format: 'es' },
  plugins: [
    ignoreImport({
      // Ignore all .scss and .css file imports while building the bundle
      extensions: ['.less', '.css'],
      // Optional: replace body for ignored files. Default value is "export default undefined;"
      body: 'export default undefined;'
    }),
    dts(),
    license({
      banner: `/*!
 * @joe-sky/vite-react-webcomponents v${require('../package/package.json').version}
 * (c) Joe_Sky
 */`
    })
  ]
};

export default config;
