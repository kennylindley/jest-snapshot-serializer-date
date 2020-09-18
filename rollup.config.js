import babel from "rollup-plugin-babel";
import commonjs from "@rollup/plugin-commonjs";

export default [
  {
    input: "src/index.js",
    output: [{ file: "index.js", format: "cjs" }],
    plugins: [commonjs({ include: [/node_modules/] }), babel({ exclude: "node_modules/**" })]
  }
];
