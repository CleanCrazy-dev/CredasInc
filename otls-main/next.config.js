/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");
// this lets us not bother compiling our UI library separately
const withTM = require("next-transpile-modules")(["@credasinc/ctip-ui"], {
  resolveSymlinks: false,
});

const path = require("path");

module.exports = withPlugins([withTM], {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // let's us use .po files directly in dev
    config.module.rules.push({
      test: /\.po/,
      use: ["@lingui/loader"],
    });
    // let's us have React inside ./node_modules and ./node_modules/@credasinc/ctip-ui/node_modules without conflicts
    if (isServer) {
      config.externals = ["react", ...config.externals];
    }
    config.resolve.alias["react"] = path.resolve(
      __dirname,
      ".",
      "node_modules",
      "react"
    );
    config.resolve.alias["react-dom"] = path.resolve(
      __dirname,
      ".",
      "node_modules",
      "react-dom"
    );
    config.output = { ...(config.output || {}), hashFunction: "sha256" };
    return config;
  },
  async headers() {
    let gitRef = process.env.VERCEL_GIT_COMMIT_SHA;
    if (gitRef) {
      gitRef = gitRef.slice(0, 7);
    } else {
      try {
        gitRef = require("child_process")
          .execSync("git rev-parse --short HEAD")
          .toString()
          .trim();
      } catch (err) {
        gitRef = "unknown";
      }
    }
    return [
      {
        source: "/",
        headers: [
          {
            key: "X-Version",
            value: gitRef,
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/admin",
        destination: "/admin/organizations",
        permanent: false,
      },
    ];
  },
  experimental: {
    outputStandalone: true,
  },
  i18n: {
    locales: ["en", "es", "fr", "pseudo"],
    defaultLocale: "en",
  },
});
