/**
    Module: mockbot-element
      Test: tagname-test
    Author: Mitch Allen
*/

"use strict";

var request = require('supertest'),
    should = require('should'),
    modulePath = "../modules/index";

describe('tagName property', () => {

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

    it('should set value', done => {
        var testTag = "div";
        var el = _factory.create({ tagName: testTag });
        should.exist(el.tagName);
        el.tagName.should.eql(testTag.toUpperCase());
        done();
    });

    it('should allow non-standard value', done => {
        var testTag = "make-believe";
        var el = _factory.create({ tagName: testTag });
        should.exist(el.tagName);
        el.tagName.should.eql(testTag.toUpperCase());
        done();
    });

    it('should be read-only', done => {
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

    it('should not be effected by setAttribute', done => {
        var testTag = "div";
        var el = _factory.create({ tagName: testTag });
        el.setAttribute("tagName","foo");
        // verify no effect on original
        should.exist(el.tagName);
        el.tagName.should.eql(testTag.toUpperCase());
        done();
    });

    it('should throw exception if missing', done => {
        (function() { 
            var el = _factory.create({});   
        }).should.throw();
        done();
    });

    it('should throw exception if starts with hyphen', done => {
        var testTag = "-foo";
        (function() { 
            var el = _factory.create({ tagName: testTag }); 
        }).should.throw();
        done();
    });

    it('should throw exception if starts with number', done => {
        var testTag = "1A";
        (function() { 
            var el = _factory.create({ tagName: testTag }); 
        }).should.throw();
        done();
    });

    it('should be allowed to contain hyphen', done => {
        var testTag = "x-foo"; 
        var el = _factory.create({ tagName: testTag }); 
        done();
    });

    it('should be allowed to start with underscore', done => {
        var testTag = "_foo"; 
        var el = _factory.create({ tagName: testTag }); 
        done();
    });

    it('should be allowed to contain underscore', done => {
        var testTag = "x_foo"; 
        var el = _factory.create({ tagName: testTag }); 
        done();
    });
});
