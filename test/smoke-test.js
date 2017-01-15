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

    it('tagName property should set value', done => {
        var testTag = "div";
        var el = _factory.create({ tagName: testTag });
        should.exist(el.tagName);
        el.tagName.should.eql(testTag.toUpperCase());
        done();
    });

    it('tagName property value can be non-standard', done => {
        var testTag = "make-believe";
        var el = _factory.create({ tagName: testTag });
        should.exist(el.tagName);
        el.tagName.should.eql(testTag.toUpperCase());
        done();
    });

    it('tagName property should be read-only', done => {
        var testTag = "div";
        var el = _factory.create({ tagName: testTag });
        (function() { 
            el.tagName = "foo";     
        }).should.throw();
        // verify no effect on original
        should.exist(el.tagName);
        el.tagName.should.eql(testTag.toUpperCase());
        done();
    });

    it('tagName property should be not be effected by setAttribute', done => {
        var testTag = "div";
        var el = _factory.create({ tagName: testTag });
        el.setAttribute("tagName","foo");
        // verify no effect on original
        should.exist(el.tagName);
        el.tagName.should.eql(testTag.toUpperCase());
        done();
    });

    it('tagName property should throw exception if missing', done => {
        (function() { 
            var el = _factory.create({});   
        }).should.throw();
        done();
    });

    it('tagName property should throw exception if starts with hyphen', done => {
        var testTag = "-foo";
        (function() { 
            var el = _factory.create({ tagName: testTag }); 
        }).should.throw();
        done();
    });

    it('tagName property should throw exception if starts with number', done => {
        var testTag = "1A";
        (function() { 
            var el = _factory.create({ tagName: testTag }); 
        }).should.throw();
        done();
    });

    it('tagName property should be allowed to contain hyphen', done => {
        var testTag = "x-foo"; 
        var el = _factory.create({ tagName: testTag }); 
        done();
    });

    it('tagName property should be allowed to start with underscore', done => {
        var testTag = "_foo"; 
        var el = _factory.create({ tagName: testTag }); 
        done();
    });

    it('tagName property should be allowed to contain underscore', done => {
        var testTag = "x_foo"; 
        var el = _factory.create({ tagName: testTag }); 
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
