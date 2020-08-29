const SentryWebpackPlugin = require("@sentry/webpack-plugin");
const plugins =
  process.env.NODE_ENV !== "development"
    ? [
        new SentryWebpackPlugin({
          include: "./dist",
          ignoreFile: ".sentrycliignore",
          ignore: ["node_modules", "vue.config.js"],
          configFile: "sentry.properties"
        })
      ]
    : [];
module.exports = {
  // other configuration
  configureWebpack: {
    plugins
  }
};
