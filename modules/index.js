/**
    Module: mockbot-element
    Author: Mitch Allen
*/

/*jshint node: true */
/*jshint esversion: 6 */

"use strict";

var nodeFactory = require('mockbot-node');

/**
 * MockBot Node
 * @external mockbot-node
 * @see {@link https://www.npmjs.com/package/mockbot-node|mockbot-node}
 */

/**
 * Module
 * @module mockbot-element
 * @extends external:mockbot-node
 * @property {String} id - the id of the element
 * @property {String} tagName - read-only tagName of element as uppercase (i.e. 'DIV')
 * @property {String} outerHTML - WARNING: only get currently works, set not implemented
 */

/**
 * 
 * Factory module
 * @module mockbot-element-factory
 */

 /** 
 * Factory method 
 * It takes one spec parameter that must be an object with named parameters
 * @param {Object} spec Named parameters object
 * @param {string} spec.tagName required HTML tagName (a, div, x-thing, etc.)
 * @param {string} spec.id optional id attribute for HTML element
 * @returns {module:mockbot-element}
 * @example <caption>Usage</caption>
 * var factory = require("mockbot-element");
 * var obj = factory.create({ tagName: "div" });
* @example <caption>Usage with id</caption>
 * var factory = require("mockbot-element");
 * var obj = factory.create({ tagName: "div", id: "d1" });
 */
module.exports.create = (spec) => {
    spec = spec || {};
    // private
    var m_tagName = spec.tagName || "";

    if(!m_tagName.match(/^[[A-Za-z_][\w+$-_]+/)) {
      // browser throws DOMexception
      throw new Error( "The tagName provided ('" + m_tagName + "') is not a valid name" );
    }

    var m_attribute = [];
    if( spec.id ) {
      m_attribute.id = spec.id;
    }

    // nodeType EXPORT_NODE = 1
    var obj = nodeFactory.create( { nodeType: 1 } );

    Object.assign( obj, {
        /** mock element.setAttribute
          * @function
          * @instance
          * @param {string} name attribute name
          * @param {string} value attribute value
          * @memberof module:mockbot-element
          * @example <caption>usage</caption>
          * el.setAttribute("width","5");
        */
        setAttribute: function(name,value) {
          m_attribute[name] = value;
        },

        /** mock element.getAttribute
          * @function
          * @instance
          * @param {string} name attribute name
          * @memberof module:mockbot-element
          * @example <caption>usage</caption>
          * var w = el.getAttribute("width");
        */
        getAttribute: function(name) {
            return m_attribute[name];
        },

        /** return value of outerHTML
          * @function
          * @instance
          * @memberof module:mockbot-element
          * @example <caption>usage</caption>
          * console.log("ELEMENT: " + el);
        */
        toString: function() {
            return this.outerHTML;
        },
    });

    Object.defineProperties( obj, {
      // properties are documented in the module section at the top
      "id": {
        get: () => m_attribute.id,
        set: (id) => m_attribute.id = id,
        enumerable: true
      },

      "tagName": {
        writable: false,
        enumerable: true,
        value: m_tagName.toUpperCase()
      },

      "outerHTML": {
        get: function() {
            var str = "<" + this.tagName.toLowerCase();
            str += Object.keys(m_attribute).reduce( 
                function(s, key) { 
                    var sValue = typeof m_attribute[key] === 'object' ? "[object Object]" : m_attribute[key];
                    return s + " " + key + ( sValue.length > 0 ? "=\""  + sValue  + "\"" : ""); 
                }, "" );
            str += ">";
            str += this.childNodes.reduce( 
                function(s,el) { return s + el.outerHTML; }, 
                "" );
            str += "</" + this.tagName.toLowerCase() + ">";
            return str;
        },
        set: function(html) {
            // TODO - parse HTML 
            console.warn("*** WARNING: .outerHTMl set not implemented");
        },
        enumerable: true
      },

    });

    return obj;
};
