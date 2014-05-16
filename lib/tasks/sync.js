'use strict';

var async = require('async');
var schemas = require('../utils/schemas');
var manager = require('../utils/manager');

/**
 * Module interface.
 */

module.exports = sync;

/**
 * Reset found schemas tables.
 *
 * @param {Object} config
 * @param {Object} config.database
 * @param {[String]} config.paths
 * @param {Function} callback
 */

function sync(config, callback) {
  async.waterfall([
    async.apply(schemas.load, config),
    function syncSchemas(schemas, next) {
      manager.factory(config).sync(schemas).nodeify(next);
    }
  ], callback);
}