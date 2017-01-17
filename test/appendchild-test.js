/**
    Module: mockbot-element
      Test: appendchild-test
    Author: Mitch Allen
*/

"use strict";

var request = require('supertest'),
    should = require('should'),
    modulePath = "../modules/index";

describe('appendChild', () => {

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

    it('should append child', done => {
        var parentTag = "div",
            childTag = "test-child",
            parent = _factory.create({ tagName: parentTag }),
            child = _factory.create({ tagName: childTag });
        parent.appendChild(child);
        parent.childNodes[0].tagName.should.eql(child.tagName);
        done();
    });

    it('should return child', done => {
        var parentTag = "div",
            childTag = "test-child",
            parent = _factory.create({ tagName: parentTag }),
            child = _factory.create({ tagName: childTag }),
            result = parent.appendChild(child);
        result.tagName.should.eql(child.tagName);
        done();
    });

    
});
