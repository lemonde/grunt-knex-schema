'use strict';

var async = require('async');
var schemas = require('../utils/schemas');
var manager = require('../utils/manager');

/**
 * Module interface.
 */

module.exports = reset;

/**
 * Reset found schemas tables.
 *
 * @param {Object} config
 * @param {Object} config.database
 * @param {[String]} config.paths
 * @param {Function} callback
 */

function reset(config, callback) {
  async.waterfall([
    async.apply(schemas.load, config),
    function resetSchemas(schemas, next) {
      manager.factory(config).reset(schemas).nodeify(next);
    }
  ], callback);
}