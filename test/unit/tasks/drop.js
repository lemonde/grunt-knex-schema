'use strict';

var sinon = require('sinon');
var Grunt = require('../../mocks/grunt');
var proxyquire = require('proxyquire');

describe('tasks.drop', function () {
  var grunt, registrar, task;

  beforeEach(function () {
    grunt = new Grunt({ foo: 'bar' });
    sinon.spy(grunt, 'config');
  });

  beforeEach(function () {
    task = sinon.stub().yields(null);
  });

  beforeEach(function () {
    registrar = proxyquire('../../../tasks/drop', {
      '../lib/tasks/drop': task
    });
  });

  it('should call drop task', function (done) {
    registrar(grunt.setCallback(function (err) {
      if (err) return done(err);
      expect(grunt.config).to.have.been.calledOnce;
      expect(grunt.config).to.have.been.calledWith('knexschema');
      expect(task).to.have.been.calledOnce;
      expect(task).to.have.been.calledWith({ foo: 'bar' });
      done();
    }));
  });
});