/**
    Module: mockbot-element
      Test: haschildnodes-test
    Author: Mitch Allen
*/

"use strict";

var request = require('supertest'),
    should = require('should'),
    modulePath = "../modules/index";

describe('hasChildNodes', () => {

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

    it('should return false if no child nodes', done => {
        var parentTag = "div",
            parent = _factory.create({ tagName: parentTag });
        parent.hasChildNodes().should.eql(false);
        done();
    });

    it('should return true if parent contains child nodes', done => {
        var parentTag = "div",
            childTag = "test-child",
            parent = _factory.create({ tagName: parentTag }),
            child = _factory.create({ tagName: childTag });
        parent.appendChild(child);
        parent.hasChildNodes().should.eql(true);
        done();
    });    
});
