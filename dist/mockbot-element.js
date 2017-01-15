(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.MitchAllen || (g.MitchAllen = {})).MockbotElement = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
/**
    Module: mockbot-element
    Author: Mitch Allen
*/

/*jshint node: true */
/*jshint esversion: 6 */

"use strict";

/**
 * Module
 * @module mockbot-element
 * @property {String} id - the id of the element
 * @property {String} tagName - read-only tagName of element as uppercase (i.e. 'DIV')
 */

/**
 * 
 * Factory module
 * @module mockbot-element-factory
 */

/** 
* Factory method 
* It takes one spec parameter that must be an object with named parameters
* @param {Object} options Named parameters object
* @returns {module:mockbot-element}
* @example <caption>Usage example</caption>
* var factory = require("mockbot-element");
* var obj = factory.create({});
*/

module.exports.create = function (spec) {
  spec = spec || {};
  // private
  var m_tagName = spec.tagName || "";

  if (!m_tagName.match(/^[[A-Za-z_][\w+$-_]+/)) {
    // browser throws DOMexception
    throw new Error("The tagName provided ('" + m_tagName + "') is not a valid name");
  }

  var m_attribute = [];
  if (spec.id) {
    m_attribute.id = spec.id;
  }
  var obj = {
    /** mock element.setAttribute
      * @function
      * @instance
      * @param {string} name attribute name
      * @param {string} value attribute value
      * @memberof module:mockbot-element
      * @example <caption>usage</caption>
      * el.setAttribute("width","5");
    */
    setAttribute: function setAttribute(name, value) {
      m_attribute[name] = value;
    },

    /** mock element.getAttribute
      * @function
      * @instance
      * @param {Object} options Named parameters object
      * @memberof module:mockbot-element
      * @example <caption>usage</caption>
      * var w = el.getAttribute("width");
    */
    getAttribute: function getAttribute(name) {
      return m_attribute[name];
    },
    /** mock element.cloneNode
      * @function
      * @instance
      * @param {boolean} deep If true, clone children as well
      * @memberof module:mockbot-element
      * @returns {module:mockbot-element}
      * @example <caption>usage</caption>
      * var n = el.cloneNode();
    */
    cloneNode: function cloneNode(deep) {
      return Object.create(this, {});
    }
  };

  Object.defineProperties(obj, {
    // properties are documented in the module section at the top
    "id": {
      get: function get() {
        return m_attribute.id;
      },
      set: function set(id) {
        return m_attribute.id = id;
      },
      enumerable: true
    },

    "tagName": {
      writable: false,
      value: m_tagName.toUpperCase()
    }

  });

  return obj;
};

},{}]},{},[1])(1)
});