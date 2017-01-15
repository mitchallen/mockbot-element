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
        /** mock element.cloneNode
          * @function
          * @instance
          * @param {boolean} deep If true, clone children as well
          * @memberof module:mockbot-element
          * @returns {module:mockbot-element}
          * @example <caption>usage</caption>
          * var n = el.cloneNode();
        */
        cloneNode: function(deep) {
            return Object.create(this,{});
        },
    };

    Object.defineProperties( obj, {
      // properties are documented in the module section at the top
      "id": {
        get: () => m_attribute.id,
        set: (id) => m_attribute.id = id,
        enumerable: true
      },

      "tagName": {
        writable: false,
        value: m_tagName.toUpperCase()
      },

    });

    return obj;
};
