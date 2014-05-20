'use strict';

var _ = require('lodash');

/**
 * Module interface.
 */

module.exports = Grunt;

/**
 * Mock xtor.
 *
 * @param {Object} config - grunt config object
 */

function Grunt(config) {
  this.config = _.identity.bind(_, config);
  this.log = { ok: _.noop, error: _.noop };
}

/**
 * Set async callback.
 *
 * @param {Function} callback
 * @return {Grunt}
 */

Grunt.prototype.setCallback = function (callback) {
  this.callback = callback;
  return this;
};

/**
 * @return {Function}
 */

Grunt.prototype.async = function () {
  return this.callback;
};

/**
 * @param {String} name
 * @param {Function} task
 */

Grunt.prototype.registerTask = function (name, task) {
  task.call(this);
};