module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript",
    "@lingui/babel-preset-react",
    "next/babel",
  ],
  plugins: [
    "macros",
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: false }],
    "@babel/plugin-transform-runtime",
  ],
};
