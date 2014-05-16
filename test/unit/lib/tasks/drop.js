'use strict';

var task = require('../../../../lib/tasks/drop');
var sinon = require('sinon');
var Promise = require('bluebird');
var manager = require('../../../../lib/utils/manager');

describe('lib.tasks.drop', function () {
  var config, dropStub;

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
    dropStub = sinon.stub().returns(Promise.resolve('drop-called'));

    sinon.stub(manager, 'factory').returns({ drop: dropStub });
  });

  afterEach(function () {
    manager.factory.restore();
  });

  it('should drop schemas', function (done) {
    task(config, function (err, result) {
      if (err) return done(err);
      expect(dropStub).to.have.been.calledOnce;
      expect(dropStub).to.have.been.calledWith([
        require('../../../fixtures/first'),
        require('../../../fixtures/second')
      ]);
      expect(result).to.equal('drop-called');
      done();
    });
  });
});