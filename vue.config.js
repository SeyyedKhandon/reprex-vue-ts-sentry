const SentryWebpackPlugin = require("@sentry/webpack-plugin");

module.exports = {
  // other configuration
  configureWebpack: {
    plugins: [
      new SentryWebpackPlugin({
        include: "./dist",
        ignoreFile: ".sentrycliignore",
        ignore: ["node_modules", "vue.config.js"],
        configFile: "sentry.properties"//,
        // mode: "production"
      })
    ]
  }
};
