import { transformSync } from "@swc/core";
import { build } from "esbuild";
import { readFileSync } from "fs";

await build({
  entryPoints: ["./src/app.ts"],
  treeShaking: true,
  bundle: true,
  loader: {
    ".js": "js",
    ".ts": "ts",
    ".jsx": "jsx",
    ".tsx": "tsx",
  },
  plugins: [
    {
      name: "swc-loader",
      setup(build) {
        build.onLoad({ filter: /\.(js|ts|tsx|jsx)$/ }, (args) => {
          const context = readFileSync(args.path, "utf-8");
          console.log(context);
          const { code } = transformSync(context, {
            filename: args.path,
          });
          console.log(code);
          return {
            contents: code,
          };
        });
      },
    },
  ],
  outdir: "dist",
});
