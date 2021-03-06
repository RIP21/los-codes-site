"use strict";

// @ts-ignore
require("source-map-support").install();
require("ts-node").register({
  transpileOnly: true,
  compilerOptions: {
    module: "commonjs",
    target: "es2017"
  }
});


exports.createPages = require('./gatsby-scripts/createPages').createPages
exports.createSchemaCustomization = require('./gatsby-scripts/createSchemaCustomization').createSchemaCustomization
exports.createResolvers = require('./gatsby-scripts/createResolvers').createResolvers