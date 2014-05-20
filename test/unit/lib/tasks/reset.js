'use strict';

var task = require('../../../../lib/tasks/reset');
var sinon = require('sinon');
var Promise = require('bluebird');
var manager = require('../../../../lib/utils/manager');

describe('lib.tasks.reset', function () {
  var config, resetStub;

  beforeEach(function () {
    config = {
      database: {
        client: 'sqlite',
        connection: {
          filename: ':memory:'
        }
      },
      paths: ['test/fixtures/**/*.js']
    };
  });

  beforeEach(function () {
    resetStub = sinon.stub().returns(Promise.resolve('reset-called'));

    sinon.stub(manager, 'factory').returns({ reset: resetStub });
  });

  afterEach(function () {
    manager.factory.restore();
  });

  it('should reset schemas', function (done) {
    task(config, function (err, result) {
      if (err) return done(err);
      expect(resetStub).to.have.been.calledOnce;
      expect(resetStub).to.have.been.calledWith([
        require('../../../fixtures/first'),
        require('../../../fixtures/second')
      ]);
      expect(result).to.equal('reset-called');
      done();
    });
  });
});