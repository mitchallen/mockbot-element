/**
    Module: mockbot-element
      Test: smoke-test
    Author: Mitch Allen
*/

"use strict";

var request = require('supertest'),
    should = require('should'),
    modulePath = "../modules/index";

describe('module factory smoke test', () => {

    var _factory = null;

    before( done => {
        // Call before all tests
        delete require.cache[require.resolve(modulePath)];
        _factory = require(modulePath);
        done();
    });

    after( done => {
        // Call after all tests
        done();
    });

    beforeEach( done => {
        // Call before each test
        done();
    });

    afterEach( done => {
        // Call after eeach test
        done();
    });

    it('module should exist', done => {
        should.exist(_factory);
        done();
    })

    it('create method with no spec should return element', done => {
        var el = _factory.create();
        should.exist(el);
        done();
    });

    it('create method with spec should return element', done => {
        var el = _factory.create({});
        should.exist(el);
        done();
    });

    it('create method with id should set id', done => {
        var testId = "alpha";
        var el = _factory.create({ id: testId });
        should.exist(el.id);
        el.id.should.eql(testId);
        done();
    });

    it('setAttribute should set attribute', done => {
        var testAttr = "alpha",
            testValue = "zorro",
            el = _factory.create({});
        el.setAttribute(testAttr,testValue);
        var result = el.getAttribute(testAttr);
        should.exist(result);
        result.should.eql(testValue);
        done();
    });

    it('cloneNode method should clone node', done => {
        var testId = "alpha";
        var el = _factory.create({ id: testId });
        var clone = el.cloneNode();
        should.exist(clone.id);
        clone.id.should.eql(testId);
        done();
    });

      it('id property should set value', done => {
        var testId = "alpha";
        var el = _factory.create({ id: testId });
        el.id = testId;
        should.exist(el.id);
        el.id.should.eql(testId);
        done();
    });
});
