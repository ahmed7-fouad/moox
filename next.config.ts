import type { NextConfig } from "next";
import packageJson from "./package.json" with { type: "json" };

const transpilePackages = [
  // react-native packages
  "react-native",
  ...Object.keys(packageJson.dependencies).filter(
    (dep) => dep.startsWith("react-native") || dep.startsWith("@react-native")
  ),
];
const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      rules: {
        "*.js": {
          loaders: [
            {
              loader: "string-replace-loader",
              options: {
                search: "__DEV__",
                replace:
                  process.env.NODE_ENV !== "production" ? "true" : "false",
              },
            },
          ],
        },
      },
      resolveAlias: {
        "react-native": "react-native-web",
      },
      resolveExtensions: [
        ".web.tsx",
        ".web.ts",
        ".web.jsx",
        ".web.js",
        ".tsx",
        ".ts",
        ".jsx",
        ".js",
        ".mjs",
        ".json",
      ],
    },
  },
  transpilePackages,

  env: {
    ENV: process.env.NODE_ENV,
  },
};

export default nextConfig;
