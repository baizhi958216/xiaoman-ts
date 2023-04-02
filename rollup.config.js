import path from "path";
import ts from "@rollup/plugin-typescript";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import terser from "@rollup/plugin-terser";
import replace from "@rollup/plugin-replace";

const isDev = () => {
  return process.env.NODE_ENV === "development";
};

export default {
  input: "./src/app.ts",
  output: {
    file: path.resolve(__dirname, "./lib/index.js"),
    format: "umd",
    sourcemap: true,
  },
  plugins: [
    ts(),
    // 热更新
    livereload(),
    // 代码压缩
    terser(),
    // 将node的东西注册到浏览器
    replace({
      preventAssignment: true,
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
    // 判断development环境才启动serve
    isDev() &&
      serve({
        openPage: "/public/index.html",
        open: true,
        port: 1988,
      }),
  ],
};
