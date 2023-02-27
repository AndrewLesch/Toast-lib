import babel from "@rollup/plugin-babel"
import resolve from '@rollup/plugin-node-resolve'
import typescript from "@rollup/plugin-typescript"
import external from 'rollup-plugin-peer-deps-external'

export default [{
  input: './src/index.js',
  output: [{
    file: 'dist/index.js',
    format: 'cjs'
  }],
  plugins: [
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react']
    }),
    external(),
    resolve(),
    typescript(),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
}]
