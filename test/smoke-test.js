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

    it('create method with no spec should return throw error', done => {
        (function() { 
            var el = _factory.create();    
        }).should.throw();
        done();
    });

    it('create method with spec should return element', done => {
        (function() { 
            var el = _factory.create({});    
        }).should.throw();
        done();
    });

    it('id property should set value', done => {
        var testTag = "div",
            testId = "alpha",
            el = _factory.create({ tagName: testTag, id: testId });
        el.id = testId;
        should.exist(el.id);
        el.id.should.eql(testId);
        done();
    });

    it('create method with id should set id', done => {
        var testTag = "div",
            testId = "alpha",
            el = _factory.create({ tagName: testTag, id: testId });
        should.exist(el.id);
        el.id.should.eql(testId);
        done();
    });

    it('toString should return outerHTML when object converted to string', done => {
        var testTag = "div",
            testId = "alpha",
            el = _factory.create({ tagName: testTag, id: testId });
        should.exist(el.id);
        el.id.should.eql(testId);
        var str = "" + el + "";
        str.should.eql('<div id="alpha"></div>');
        done();
    });

    it('setAttribute should set attribute', done => {
        var testTag = "div",
            testId = "alpha",
            testAttr = "a1",
            testValue = "zorro",
            el = _factory.create({ tagName: testTag, id: testId });
        el.setAttribute(testAttr,testValue);
        var result = el.getAttribute(testAttr);
        should.exist(result);
        result.should.eql(testValue);
        done();
    });

    it('cloneNode method should clone node', done => {
        var testTag = "div",
            testId = "alpha",
            testAttr = "a1",
            testValue = "zorro",
            el = _factory.create({ tagName: testTag, id: testId });
        var clone = el.cloneNode();
        should.exist(clone.id);
        clone.id.should.eql(testId);
        done();
    });
});
