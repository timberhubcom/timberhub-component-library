import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import svgr from '@svgr/rollup';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';
const url = require('postcss-url');
import dts from 'rollup-plugin-dts';

import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const packageJson = require('./package.json');

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    external: ['react', 'react-dom'],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      babel({ exclude: 'node_modules/**' }),
      typescript({ tsconfig: './tsconfig.json' }),
      postcss({
        extract: true,
        modules: true,
        use: ['sass'],
        plugins: [url({ url: 'inline' })],
      }),
      terser(),
      svgr(),
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.(css|scss)$/],
  },
];
