'use strict';

var _ = require('lodash');
var task = require('../lib/tasks/populate');

/**
 * Module interface.
 */

module.exports = populate;

/**
 * Populate found schemas tables.
 *
 * @param {Grunt} grunt
 */

function populate(grunt) {
  grunt.registerTask('knexschema:populate', function () {
    var done = this.async();
    grunt.log.ok('populating schemas');
    task(grunt.config('knexschema'), function handleResult(err, schemas) {
      if (err) grunt.log.error(err);
      else grunt.log.ok('schemas populated "%s"', _.pluck(schemas, 'tableName').join(', '));
      done(err);
    });
  });
}