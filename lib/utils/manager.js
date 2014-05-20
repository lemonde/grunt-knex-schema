'use strict';

var Bookshelf = require('bookshelf');
var Manager = require('bookshelf-sync');

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
  return new Manager(Bookshelf.initialize(config.database));
}