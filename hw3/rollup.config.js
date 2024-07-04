import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

export default {
    input: './src/script.ts',
    output: {
        file: './dist/bundle.js',
        format: 'iife',
        sourcemap: true
    },
    plugins: [
        resolve(),
        commonjs(),
        typescript(),
        terser(),
    ]
};