import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

export default {
    input: 'src/index.ts',
    output: {
        file: './dist/index.js',
        name: 'react-canva',
        format: "umd",
        sourcemap: true,
        globals: {
            'react': 'React'
        }
    },
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        typescript({tsconfig: './tsconfig.json'})
    ],
    external: ['react']
}