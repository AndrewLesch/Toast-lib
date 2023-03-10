import babel  from "@rollup/plugin-babel";
import resolve from '@rollup/plugin-node-resolve'
import typescript from "@rollup/plugin-typescript"
import external from 'rollup-plugin-peer-deps-external'
import commonjs from "@rollup/plugin-commonjs";

export default [{
  input: './src/index.ts',
  output: [{
    file: 'dist/index.js',
    format: 'cjs'
  },
  {
    file: 'dist/index.es.js',
    format: 'es',
    exports: 'named',
  }],
  
  plugins: [
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react']
    }),
    external(),
    resolve(),
    typescript({
      tsconfig: './tsconfig.json'
    }),
    commonjs(),
  ],
}]
