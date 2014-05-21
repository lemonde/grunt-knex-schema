# grunt-knex-schema
[![Build Status](https://travis-ci.org/lemonde/grunt-knex-schema.svg?branch=master)](https://travis-ci.org/lemonde/grunt-knex-schema)
[![Dependency Status](https://david-dm.org/lemonde/grunt-knex-schema.svg?theme=shields.io)](https://david-dm.org/lemonde/grunt-knex-schema)
[![devDependency Status](https://david-dm.org/lemonde/grunt-knex-schema/dev-status.svg?theme=shields.io)](https://david-dm.org/lemonde/grunt-knex-schema#info=devDependencies)

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
