'use strict';

var _ = require('lodash');
var task = require('../lib/tasks/sync');

/**
 * Module interface.
 */

module.exports = sync;

/**
 * Sync found schemas tables.
 *
 * @param {Grunt} grunt
 */

function sync(grunt) {
  grunt.registerTask('bookshelfsync:sync', function () {
    var done = this.async();
    grunt.log.ok('synchronizing schemas');
    task(grunt.config('bookshelfsync'), function handleResult(err, schemas) {
      if (err) grunt.log.error(err);
      else grunt.log.ok('schemas synchronized "%s"', _.pluck(schemas, 'tableName').join(', '));
      done(err);
    });
  });
}