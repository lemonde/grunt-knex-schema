'use strict';

var task = require('../../../../lib/tasks/populate');
var sinon = require('sinon');
var Promise = require('bluebird');
var manager = require('../../../../lib/utils/manager');

describe('lib.tasks.populate', function () {
  var config, populateStub;

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
    populateStub = sinon.stub().returns(Promise.resolve('populate-called'));

    sinon.stub(manager, 'factory').returns({ populate: populateStub });
  });

  afterEach(function () {
    manager.factory.restore();
  });

  it('should populate schemas', function (done) {
    task(config, function (err, result) {
      if (err) return done(err);
      expect(populateStub).to.have.been.calledOnce;
      expect(populateStub).to.have.been.calledWith([
        require('../../../fixtures/first'),
        require('../../../fixtures/second')
      ]);
      expect(result).to.equal('populate-called');
      done();
    });
  });
});