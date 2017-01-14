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
    return {
        /** mock element.setAttribute
          * @function
          * @instance
          * @param {string} name attribute name
          * @param {string} value attribute value
          * @memberof module:mockbot-element
          * @example <caption>usage</caption>
          * el.setAttribute("width");
        */
        setAttribute: function(name,value) {},

        /** mock element.getAttribute
          * @function
          * @instance
          * @param {Object} options Named parameters object
          * @memberof module:mockbot-element
          * @example <caption>usage</caption>
          * el.setAttribute("width");
        */
        getAttribute: function(name) {
            return {};
        },
        /** mock element.cloneNode
          * @function
          * @instance
          * @param {boolean} deep If true, clone children as well
          * @memberof module:mockbot-element
          * @returns {module:mockbot-element}
          * @example <caption>usage</caption>
          * el.setAttribute("width");
        */
        cloneNode: function(deep) {
            return Object.create(this,{});
        },
    };
};
