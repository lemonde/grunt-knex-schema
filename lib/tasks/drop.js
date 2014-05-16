'use strict';

var async = require('async');
var schemas = require('../utils/schemas');
var manager = require('../utils/manager');

/**
 * Module interface.
 */

module.exports = drop;

/**
 * Drop found schemas tables.
 *
 * @param {Object} config
 * @param {Object} config.database
 * @param {[String]} config.paths
 * @param {Function} callback
 */

function drop(config, callback) {
  async.waterfall([
    async.apply(schemas.load, config),
    function dropSchemas(schemas, next) {
      manager.factory(config).drop(schemas).nodeify(next);
    }
  ], callback);
}