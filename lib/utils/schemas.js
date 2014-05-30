'use strict';

var loader = require('knex-schema-file-loader');

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
  loader.load(config.paths || [], callback);
}