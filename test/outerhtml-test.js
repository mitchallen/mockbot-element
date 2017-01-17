/**
    Module: mockbot-element
      Test: outer-test
    Author: Mitch Allen
*/

"use strict";

var request = require('supertest'),
    should = require('should'),
    modulePath = "../modules/index";

describe('outerHTML property', () => {

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

    it('should return HTML for element', done => {
        var parentTag = "div",
            parent = _factory.create({ tagName: parentTag });
        parent.outerHTML.should.eql("<div></div>");
        done();
    });

    it('with child nodes should return HTML for whole tree', done => {
        var parentTag = "div",
            childTag = "test-child",
            parent = _factory.create({ tagName: parentTag }),
            child = _factory.create({ tagName: childTag }),
            result = parent.appendChild(child);
        parent.outerHTML.should.eql("<div><test-child></test-child></div>");
        done();
    });

    it('should return HTML that includes attributes', done => {
        var parentTag = "div",
            parent = _factory.create({ tagName: parentTag });
        parent.setAttribute("foo", "alpha");
        parent.outerHTML.should.eql('<div foo="alpha"></div>');
        done();
    });

    it('should put spaces between attributes', done => {
        var parentTag = "div",
            parent = _factory.create({ tagName: parentTag });
        parent.setAttribute("foo", "alpha");
        parent.setAttribute("bar", "beta");
        parent.outerHTML.should.eql('<div foo="alpha" bar="beta"></div>');
        done();
    });

    it('should convert object attribute to string [object Object]', done => {
        var parentTag = "div",
            parent = _factory.create({ tagName: parentTag });
        parent.setAttribute("foo", { x: 1, y: 2 } );
        parent.outerHTML.should.eql('<div foo="[object Object]"></div>');
        done();
    });

    it('should only return key when value length is zero', done => {
        var parentTag = "div",
            parent = _factory.create({ tagName: parentTag });
        parent.setAttribute("foo", '' );
        parent.outerHTML.should.eql('<div foo></div>');
        done();
    });

    it('set should log warning and not fail', done => {
        var parentTag = "div",
            parent = _factory.create({ tagName: parentTag });
        parent.outerHTML ='<div foo></div>';
        done();
    });
    
});
