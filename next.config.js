const { withSentryConfig } = require('@sentry/nextjs');

const moduleExports = {
  // Existing Next.js configuration options (if any)
};

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin.
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions);


