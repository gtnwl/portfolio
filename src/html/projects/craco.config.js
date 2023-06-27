const { config } = require("dotenv-cra");
const { ModuleFederationPlugin } = require("webpack").container;
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const deps = require("./package.json").dependencies;

config({ path: "../../.env" });

const { PROJECTS_EP } = process.env;

module.exports = {
  babel: {
    presets: [],
    plugins: [
      [
        "babel-plugin-direct-import",
        {
          modules: ["@mui/material", "@mui/icons-material"],
        },
      ],
    ],
  },
  webpack: {
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "PROJECTS",
          filename: `remoteEntry.js?t=${new Date().getTime()}`,
          remotes: {
            PROJECTS: `PROJECTS@${PROJECTS_EP}/remoteEntry.js`,
          },
          shared: {
            react: {
              singleton: true,
              requiredVersion: deps.react,
            },
            "react-dom": {
              singleton: true,
              requiredVersion: deps["react-dom"],
            },
            "react-router-dom": {
              singleton: true,
              requiredVersion: deps["react-router-dom"],
            },
            "@material-ui/core": {
              singleton: true,
              requiredVersion: deps["@material-ui/core"],
            },
            "@material-ui/icons": {
              singleton: true,
              requiredVersion: deps["@material-ui/icons"],
            },
            "react-intl": {
              singleton: true,
              requiredVersion: deps["react-intl"],
            },
            "react-query": {
              singleton: true,
              requiredVersion: deps["react-query"],
            },
            "@mui/icons-material": {
              singleton: true,
              requiredVersion: deps["@mui/icons-material"],
            },
            "@mui/material": {
              singleton: true,
              requiredVersion: deps["@mui/material"],
            },
            "@mui/x-date-pickers": {
              singleton: true,
              requiredVersion: deps["@mui/x-date-pickers"],
            },
            "@reduxjs/toolkit": {
              singleton: true,
              requiredVersion: deps["@reduxjs/toolkit"],
            },
            "dotenv-cra": {
              singleton: true,
              requiredVersion: deps["dotenv-cra"],
            },
            "external-remotes-plugin": {
              singleton: true,
              requiredVersion: deps["external-remotes-plugin"],
            },
            "lodash-es": {
              singleton: true,
              requiredVersion: deps["lodash-es"],
            },
            "react-app-polyfill": {
              singleton: true,
              requiredVersion: deps["react-app-polyfill"],
            },
            "react-daum-postcode": {
              singleton: true,
              requiredVersion: deps["react-daum-postcode"],
            },
            "react-hook-form": {
              singleton: true,
              requiredVersion: deps["react-hook-form"],
            },
            "react-hook-form-mui": {
              singleton: true,
              requiredVersion: deps["react-hook-form-mui"],
            },
            "react-redux": {
              singleton: true,
              requiredVersion: deps["react-redux"],
            },
            "react-scripts": {
              singleton: true,
              requiredVersion: deps["react-scripts"],
            },
            "redux-logger": {
              singleton: true,
              requiredVersion: deps["redux-logger"],
            },
          },
        }),
        new ExternalTemplateRemotesPlugin(),
      ],
    },
    configure: (webpackConfig) => {
      if (process.argv.includes("--analyze-only")) {
        webpackConfig.plugins.push(new BundleAnalyzerPlugin());
      }

      return {
        ...webpackConfig,
        output: {
          ...webpackConfig.output,
          publicPath: `${PROJECTS_EP}/`,
          filename: "[name].[chunkhash].js",
          chunkFilename: "[name].chunk.[chunkhash].js",
        },
      };
    },
  },
};
