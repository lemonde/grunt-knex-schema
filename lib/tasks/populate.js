'use strict';

var async = require('async');
var schemas = require('../utils/schemas');
var manager = require('../utils/manager');

/**
 * Module interface.
 */

module.exports = populate;

/**
 * Populate found schemas tables.
 *
 * @param {Object} config
 * @param {Object} config.database
 * @param {[String]} config.paths
 * @param {Function} callback
 */

function populate(config, callback) {
  async.waterfall([
    async.apply(schemas.load, config),
    function populateSchemas(schemas, next) {
      manager.factory(config).populate(schemas).nodeify(next);
    }
  ], callback);
}