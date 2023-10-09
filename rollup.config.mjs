import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import svgr from '@svgr/rollup'
import postcss from 'rollup-plugin-postcss'
import url from 'postcss-url'
import copy from 'rollup-plugin-copy'
import { dts } from 'rollup-plugin-dts'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

const packageJson = require('./package.json')
import path from 'path';

const copyPaths = ['esm', 'cjs'].map((basePath) => ({ src: ['src/assets/fonts', 'src/assets/icons'], dest: path.join('dist', basePath) }))

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
      babel({ exclude: 'node_modules/**', babelHelpers: 'bundled' }),
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
    input: 'dist/esm/types/index.d.ts',
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
]
