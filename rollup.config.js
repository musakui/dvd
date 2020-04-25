import pkg from './package.json'

import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

export default [
  {
    input: 'index.js',
    plugins: [
      resolve({ browser: true, modulesOnly: true }),
      terser(),
    ],
    output: [ { format: 'esm', file: pkg.main } ]
  },
]
