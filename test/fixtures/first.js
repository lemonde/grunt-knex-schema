'use strict';

module.exports = {
  tableName: 'first',
  build: function (table) {
    table.increments('id').primary();
    table.string('content');
  },
  populate: function (knex) {
    return knex('first').insert([
      { content: 'first-foo' },
      { content: 'first-bar' }
    ]);
  }
};