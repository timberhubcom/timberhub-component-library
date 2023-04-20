import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
const postcss = require('rollup-plugin-postcss');
const url = require('postcss-url');
import dts from 'rollup-plugin-dts';

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
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ dir: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.(css|scss)$/],
  },
];
