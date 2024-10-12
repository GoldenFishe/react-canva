import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

/**
 * @type {import("rollup").RollupOptions}
 */
const config = {
    input: "src/index.ts",
    external: ["react", "react-dom"],
    output: [
        {
            format: "cjs",
            file: "dist/index.js",
            exports: "named"
        },
        {
            format: "es",
            file: "dist/index.es.js"
        }
    ],
    plugins: [
        resolve({extensions: [".js", ".jsx", ".ts", ".tsx"]}),
        commonjs(),
        typescript(),
        terser()
    ]
};

export default config;