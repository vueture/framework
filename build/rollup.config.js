var nodeResolve = require('rollup-plugin-node-resolve');
var commonjs = require('rollup-plugin-commonjs');
var globals = require('rollup-plugin-node-globals');
var babel = require('rollup-plugin-babel');

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'amd',
  },
  options: {
    name: 'Vueture',
  },
  plugins: [
    nodeResolve({
      browser: true,
      preferBuiltins: false,
    }),
    commonjs({
      ignoreGlobal: true,
    }),
    globals(),
    babel({
      exclude: "node_modules/**",
    }),
  ],
};
