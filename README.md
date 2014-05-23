# grunt-knex-schema
[![Build Status][status]](https://travis-ci.org/lemonde/grunt-knex-schema) [![Dependency Status][deps]](https://david-dm.org/lemonde/grunt-knex-schema) [![devDependency Status][devdeps]](https://david-dm.org/lemonde/grunt-knex-schema#info=devDependencies) [![Coverage Status][coverage]](https://coveralls.io/r/lemonde/grunt-knex-schema)

[status]: https://travis-ci.org/lemonde/grunt-knex-schema.svg?branch=master
[deps]: https://david-dm.org/lemonde/grunt-knex-schema.svg
[devdeps]: https://david-dm.org/lemonde/grunt-knex-schema/dev-status.svg
[coverage]: https://coveralls.io/repos/lemonde/grunt-knex-schema/badge.png

Grunt [knex-schema](https://github.com/lemonde/knex-schema) tasks.

## Install

```
npm install grunt-knex-schema
```

## Usage

```shell
grunt knexschema:sync
grunt knexschema:populate
grunt knexschema:reset
grunt knexschema:drop
```

### Gruntfile

Gruntfile options:

```js
module.exports = function(grunt) {
  grunt.initConfig({
    knexschema: {
      database: {
        client: 'sqlite',
        connection: {
          filename: ':memory:'
        }
      },
      paths: ['path-to-schemas/*.js']
    }
  });

  grunt.loadNpmTasks('grunt-knex-schema');
};
```

## License

MIT
