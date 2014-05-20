# grunt-bookshelf-sync
[![Build Status](https://travis-ci.org/lemonde/grunt-bookshelf-sync.svg?branch=master)](https://travis-ci.org/lemonde/grunt-bookshelf-sync)
[![Dependency Status](https://david-dm.org/lemonde/grunt-bookshelf-sync.svg?theme=shields.io)](https://david-dm.org/lemonde/grunt-bookshelf-sync)
[![devDependency Status](https://david-dm.org/lemonde/grunt-bookshelf-sync/dev-status.svg?theme=shields.io)](https://david-dm.org/lemonde/grunt-bookshelf-sync#info=devDependencies)

Grunt bookshelf sync task.

## Install

```
npm install grunt-bookshelf-sync
```

## Usage

```shell
grunt bookshelfsync:sync
grunt bookshelfsync:populate
grunt bookshelfsync:reset
grunt bookshelfsync:drop
```

### Gruntfile

Gruntfile options:

```js
module.exports = function(grunt) {
  grunt.initConfig({
    bookshelfsync: {
      database: {
        client: 'sqlite',
        connection: {
          filename: ':memory:'
        }
      },
      paths: ['path-to-schemas/*.js']
    }
  });

  grunt.loadNpmTasks('grunt-bookshelf-sync');
};
```

## License

MIT
