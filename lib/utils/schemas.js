'use strict';

var _ = require('lodash');
var path = require('path');
var glob = require('glob');
var async = require('async');

/**
 * Module interface.
 */

exports.load = loadSchemas;

/**
 * Load schemas found in given paths.
 *
 * @param {Object} config
 * @param {[String]} config.paths
 * @param {Function} callback
 */

function loadSchemas(config, callback) {
  async.map(config.paths || [], glob, function (err, result) {
    if (err) return callback(err);
    callback(null, requireSchemas(_.flatten(result)));
  });
}

/**
 * Load given schemas using require.
 *
 * @param {[String]} schemas
 * @return {[Schemas]}
 */

function requireSchemas(schemas) {
  return schemas.map(function (filename) {
    return require(path.resolve(process.cwd(), filename));
  });
}