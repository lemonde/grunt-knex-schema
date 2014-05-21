'use strict';

var _ = require('lodash');
var task = require('../lib/tasks/reset');

/**
 * Module interface.
 */

module.exports = reset;

/**
 * Reset found schemas tables.
 *
 * @param {Grunt} grunt
 */

function reset(grunt) {
  grunt.registerTask('knexschema:reset', function () {
    var done = this.async();
    grunt.log.ok('resetting schemas');
    task(grunt.config('knexschema'), function handleResult(err, schemas) {
      if (err) grunt.log.error(err);
      else grunt.log.ok('schemas reset "%s"', _.pluck(schemas, 'tableName').join(', '));
      done(err);
    });
  });
}