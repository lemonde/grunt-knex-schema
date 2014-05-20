'use strict';

var task = require('../../../../lib/tasks/sync');
var sinon = require('sinon');
var Promise = require('bluebird');
var manager = require('../../../../lib/utils/manager');

describe('lib.tasks.sync', function () {
  var config, syncStub;

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
    syncStub = sinon.stub().returns(Promise.resolve('sync-called'));

    sinon.stub(manager, 'factory').returns({ sync: syncStub });
  });

  afterEach(function () {
    manager.factory.restore();
  });

  it('should sync schemas', function (done) {
    task(config, function (err, result) {
      if (err) return done(err);
      expect(syncStub).to.have.been.calledOnce;
      expect(syncStub).to.have.been.calledWith([
        require('../../../fixtures/first'),
        require('../../../fixtures/second')
      ]);
      expect(result).to.equal('sync-called');
      done();
    });
  });
});