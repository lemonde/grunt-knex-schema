'use strict';

var _ = require('lodash');
var task = require('../lib/tasks/drop');

/**
 * Module interface.
 */

module.exports = drop;

/**
 * Drop found schemas tables.
 *
 * @param {Grunt} grunt
 */

function drop(grunt) {
  grunt.registerTask('bookshelfsync:drop', function () {
    var done = this.async();
    grunt.log.ok('dropping schemas');
    task(grunt.config('bookshelfsync'), function handleResult(err, schemas) {
      if (err) grunt.log.error(err);
      else grunt.log.ok('schemas dropped "%s"', _.pluck(schemas, 'tableName').join(', '));
      done(err);
    });
  });
}