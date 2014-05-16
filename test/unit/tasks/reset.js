'use strict';

var sinon = require('sinon');
var Grunt = require('../../mocks/grunt');
var proxyquire = require('proxyquire');

describe('tasks.reset', function () {
  var grunt, registrar, task;

  beforeEach(function () {
    grunt = new Grunt({ foo: 'bar' });
    sinon.spy(grunt, 'config');
  });

  beforeEach(function () {
    task = sinon.stub().yields(null);
  });

  beforeEach(function () {
    registrar = proxyquire('../../../tasks/reset', {
      '../lib/tasks/reset': task
    });
  });

  it('should call reset task', function (done) {
    registrar(grunt.setCallback(function (err) {
      if (err) return done(err);
      expect(grunt.config).to.have.been.calledOnce;
      expect(grunt.config).to.have.been.calledWith('bookshelfsync');
      expect(task).to.have.been.calledOnce;
      expect(task).to.have.been.calledWith({ foo: 'bar' });
      done();
    }));
  });
});