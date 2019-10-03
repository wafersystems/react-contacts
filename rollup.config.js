import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'

import pkg from './package.json'

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

const externalIds = ['antd', 'prop-types', 'moment', 'react', 'react-dom'];

export default {
  input: 'src/components/contacts.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true
    },
    {
      file: 'dist/index.es.js',
      format: 'es',
      sourcemap: true
    }
  ],
  external: function(id, parent, isResolved) {
    return !!(id && externalIds.some(e => id.startsWith(e)))
  },
  plugins: [
    postcss({
      modules: true
    }),
    url(),
    babel({
      exclude: ['node_modules/**']
    }),
    resolve(),
    commonjs({})
  ]
}
