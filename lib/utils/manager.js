'use strict';

var knex = require('knex');
var Manager = require('knex-schema');

/**
 * Module interface.
 */

exports.factory = factoryManager;

/**
 *  Instanciate a Manager using grunt config.
 *
 * @param {Object} config
 * @param {Object} config.database
 * @return {Manager}
 */

function factoryManager(config) {
  return new Manager(knex.initialize(config.database));
}