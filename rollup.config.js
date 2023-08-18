import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import svgr from '@svgr/rollup';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';
const url = require('postcss-url');
import dts from 'rollup-plugin-dts';
import copy from 'rollup-plugin-copy';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const packageJson = require('./package.json');
const path = require('path');

const copyPaths = ['esm', 'cjs'].map((basePath) => ({ src: 'src/assets/fonts', dest: path.join('dist', basePath) }));

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
      copy({
        targets: copyPaths,
      }),
    ],
  },
  {
    input: 'dist/esm/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [
      dts({
        compilerOptions: {
          baseUrl: './',
        },
      }),
    ],
    external: [/\.(css|scss)$/],
  },
  {
    input: 'src/mui.d.ts',
    output: [{ file: 'dist/mui.d.ts', format: 'esm' }],
    plugins: [
      dts({
        compilerOptions: {
          baseUrl: './',
        },
      }),
    ],
  },
];
